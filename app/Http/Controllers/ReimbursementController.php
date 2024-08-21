<?php

namespace App\Http\Controllers;

use App\Http\Requests\ReimbursementRequest;
use App\Http\Resources\EmployeeResource;
use App\Http\Resources\PatientResource;
use App\Http\Resources\PatientTypeResource;
use App\Http\Resources\ReimbursementResource;
use App\Models\Employee;
use App\Models\Patient;
use App\Models\PatientType;
use App\Models\Reimbursement;
use App\Services\EmployeeService;
use Inertia\Inertia;

class ReimbursementController extends Controller
{
    private $employeeService;
    public function __construct(EmployeeService $employeeService)
    {
        $this->authorizeResource(Reimbursement::class, 'reimbursement');
        $this->employeeService = $employeeService;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $filters = request()->only(['search', 'limit']);
        $reimbursements = ReimbursementResource::collection(
            Reimbursement::query()
                ->with('employee')
                ->when($filters['search']??null, function ($query, $search){
                    $query->where(function ($query) use ($search){
                        $query->whereRelation('employee', 'officer_name', 'like', "%{$search}%")
                            ->orWhere('actual_amount', 'like', "%{$search}%")
                            ->orWhere('approved_amount', 'like', "%{$search}%");
                    });
                })
                ->when(!auth()->user()->isSuperAdmin(), function ($query){
                    $query->where('institute_id', auth()->user()->institute_id);
                })
                ->orderBy('created_at', 'desc')
                ->paginate(request()->input('limit', 30))->withQueryString()
        );
            return Inertia::render('Reimbursements/Index', compact('reimbursements', 'filters'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        $institute = auth()->user()->institute;
        $employees = EmployeeResource::collection(Collect($this->employeeService->getOfficers($institute->head_id, $institute->head_id==2?$institute->head_of_wing_id:null)));
        return Inertia::render('Reimbursements/Create', compact('employees'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(ReimbursementRequest $request)
    {
        $_employee = $request->input('employee');
        $employee = Employee::updateOrCreate(['officer_id'=> $_employee['officer_id'], 'head_id'=>$_employee['head_id'], 'head_of_wing_id'=>$_employee['head_of_wing_id']],$_employee);
        $data = $request->validated();
        $data['employee_id'] = $employee->id;
        if ($request->hasFile('attachment_file')) {
            $data['attachment_file'] = $request->file('attachment_file')->store('reimbursements', 'public');
        }
        Reimbursement::create($data);
        session()->flash('success', "Reimbursement has been created successfully.");
        return redirect()->route('reimbursements.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Reimbursement  $reimbursement
     * @return \Inertia\Response
     */
    public function show(Reimbursement $reimbursement)
    {
        $reimbursement->load('employee');
        $reimbursement = new ReimbursementResource($reimbursement);
        return Inertia::render('Reimbursements/Show', compact('reimbursement'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Reimbursement  $reimbursement
     * @return \Inertia\Response
     */
    public function edit(Reimbursement $reimbursement)
    {
        $institute = auth()->user()->institute;
        $employees = EmployeeResource::collection(Collect($this->employeeService->getOfficers($institute->head_id, $institute->head_id==2?$institute->head_of_wing_id:null)));
        $reimbursement->load('employee');
        $reimbursement = new ReimbursementResource($reimbursement);
        return Inertia::render('Reimbursements/Edit', compact('reimbursement', 'employees'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Reimbursement  $reimbursement
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(ReimbursementRequest $request, Reimbursement $reimbursement): \Illuminate\Http\RedirectResponse
    {
        $_employee = $request->input('employee');
        $employee = Employee::updateOrCreate(['officer_id'=> $_employee['officer_id'], 'head_id'=>$_employee['head_id'], 'head_of_wing_id'=>$_employee['head_of_wing_id']],$_employee);
        $data = $request->validated();
        $data['employee_id'] = $employee->id;

        if ($request->hasFile('attachment_file')) {
            $data['attachment_file'] = $request->file('attachment_file')->store('reimbursements', 'public');
        }else{
            $data['attachment_file'] = $data['old_attachment_file']??null;
        }
        $reimbursement->update($data);
        session()->flash('success', "Reimbursement has been updated successfully.");
        return redirect()->route('reimbursements.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Reimbursement  $reimbursement
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Reimbursement $reimbursement)
    {
        $reimbursement->delete();
        session()->flash('success', "Reimbursement has been deleted successfully.");
        return back();
    }

}
