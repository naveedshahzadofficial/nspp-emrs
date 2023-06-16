<?php

namespace App\Http\Controllers;

use App\Http\Requests\ComplaintRequest;
use App\Http\Resources\ComplaintResource;
use App\Models\Complaint;
use Inertia\Inertia;

class ComplaintController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Complaint::class, 'complaint');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {

        $filters = request()->only(['search', 'limit']);
        $complaints = ComplaintResource::collection(
            Complaint::query()
                ->when(request()->input('search'), function ($query, $search){
                    $query->where('complaint_name', 'like', "%{$search}%");
                })
                ->orderBy('created_at', 'desc')
                ->paginate(request()->input('limit', 30))->withQueryString()
        );
        return Inertia::render('Complaints/Index', compact('complaints', 'filters'));

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Complaints/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\ComplaintRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(ComplaintRequest $request)
    {
        Complaint::create($request->validated());
        session()->flash('success', "Complaint has been created successfully.");
        return redirect()->route('complaints.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Complaint  $complaint
     * @return \Inertia\Response
     */
    public function show(Complaint $complaint)
    {
        return Inertia::render('Complaints/Show', compact('complaint'));

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Complaint  $complaint
     * @return \Inertia\Response
     */
    public function edit(Complaint $complaint)
    {
        return Inertia::render('Complaints/Edit', compact('complaint'));

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\ComplaintRequest  $request
     * @param  \App\Models\Complaint  $complaint
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(ComplaintRequest $request, Complaint $complaint)
    {
        $complaint->update($request->validated());
        session()->flash('success', "Complaint has been updated successfully.");
        return redirect()->route('complaints.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Complaint  $complaint
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Complaint $complaint)
    {
        $complaint->delete();
        session()->flash('success', "Complaint has been deleted successfully.");
        return back();
    }

    public function toggleStatus(Complaint $complaint){
        $this->authorize('toggleStatus', $complaint);

        $complaint->update([
            'status' => !$complaint->status
        ]);
        session()->flash('success', "Complaint has been ".($complaint->status?'activated':'deactivated')." successfully.");
        return back();
    }
}
