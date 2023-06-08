<?php

namespace App\Http\Controllers;

use App\Http\Resources\PatientTypeResource;
use App\Models\PatientType;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PatientTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $filters = request()->only(['search', 'limit']);
        $patientTypes = PatientTypeResource::collection(
            PatientType::query()
                ->when(request()->input('search'), function ($query, $search){
                    $query->where('type_name', 'like', "%{$search}%");
                })
                ->orderBy('created_at', 'desc')
                ->paginate(request()->input('limit', 30))->withQueryString()
        );
        return Inertia::render('PatientTypes/Index', compact('patientTypes', 'filters'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PatientType  $patientType
     * @return \Illuminate\Http\Response
     */
    public function show(PatientType $patientType)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PatientType  $patientType
     * @return \Illuminate\Http\Response
     */
    public function edit(PatientType $patientType)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\PatientType  $patientType
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PatientType $patientType)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PatientType  $patientType
     * @return \Illuminate\Http\Response
     */
    public function destroy(PatientType $patientType)
    {
        //
    }
}
