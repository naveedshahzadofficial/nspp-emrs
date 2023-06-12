<?php

namespace App\Http\Controllers;

use App\Http\Requests\ReimbursementRequest;
use App\Http\Resources\PatientResource;
use App\Http\Resources\ReimbursementResource;
use App\Models\Patient;
use App\Models\Reimbursement;
use Inertia\Inertia;

class ReimbursementController extends Controller
{
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
                ->with('patient')
                ->when(request()->input('search'), function ($query, $search){
                    $query->whereRelation('patient', 'patient_name', 'like', "%{$search}%")->orWhere('actual_amount', 'like', "%{$search}%")->orWhere('approved_amount', 'like', "%{$search}%");
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
        $patients = PatientResource::collection(Patient::active()->get());
        return Inertia::render('Reimbursements/Create', compact('patients'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(ReimbursementRequest $request)
    {
        Reimbursement::create($request->validated());
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
        $reimbursement->load('patient');
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
        $patients = PatientResource::collection(Patient::active()->get());
        return Inertia::render('Reimbursements/Edit', compact('reimbursement', 'patients'));
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
        $reimbursement->update($request->validated());
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
