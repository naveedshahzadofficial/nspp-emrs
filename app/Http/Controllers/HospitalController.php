<?php

namespace App\Http\Controllers;

use App\Models\Hospital;
use Inertia\Inertia;
use App\Http\Requests\HospitalRequest;
use App\Http\Resources\HospitalResource;

class HospitalController extends Controller
{
     public function __construct()
    {
        $this->authorizeResource(Hospital::class , 'Hospital');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $filters = request()->only(['search', 'limit']);
        $hospitals = HospitalResource::collection(
            Hospital::query()
                ->when(request()->input('search'), function ($query, $search){
                    $query->where('hospital_name', 'like', "%{$search}%");
                })
                ->orderBy('created_at', 'desc')
                ->paginate(request()->input('limit', 30))->withQueryString()
        );
        return Inertia::render('Hospitals/Index', compact('hospitals', 'filters'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Hospitals/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(HospitalRequest $request)
    {
        Hospital::create($request->validated());
        session()->flash('success', "Hospital has been created successfully.");
        return redirect()->route('hospitals.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Hospital  $hospital
     * @return \Inertia\Response
     */
    public function show(Hospital $hospital)
    {
        return Inertia::render('Hospitals/Show', compact('hospital'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Hospital  $hospital
     * @return \Inertia\Response
     */
    public function edit(Hospital $hospital)
    {
        return Inertia::render('Hospitals/Edit', compact('hospital'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Hospital  $hospital
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(HospitalRequest $request, Hospital $hospital): \Illuminate\Http\RedirectResponse
    {
        $hospital->update($request->validated());
        session()->flash('success', "Hospital has been updated successfully.");
        return redirect()->route('hospitals.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Hospital  $hospital
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Hospital $hospital)
    {
        $hospital->delete();
        session()->flash('success', "Hospital has been deleted successfully.");
        return back();
    }

    public function toggleStatus(Hospital $hospital){
        $this->authorize('toggleStatus', $hospital);
        $hospital->update([
            'status' => !$hospital->status
        ]);
        session()->flash('success', "Hospital has been ".($hospital->status?'activated':'deactivated')." successfully.");
        return back();
    }
}
