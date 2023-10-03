<?php

namespace App\Http\Controllers;

use App\Http\Requests\InstituteRequest;
use App\Http\Resources\HeadResource;
use App\Http\Resources\InstituteResource;
use App\Models\Head;
use App\Models\Institute;
use Inertia\Inertia;


class InstituteController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Institute::class, 'institute');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $filters = request()->only(['search', 'limit']);
        $institutes = InstituteResource::collection(
            Institute::query()
                ->when(request()->input('search'), function ($query, $search){
                    $query
                        ->where('name', 'like', "%{$search}%")
                        ->orWhere('short_name', 'like', "%{$search}%");
                })
                ->orderBy('order', 'asc')
                ->paginate(request()->input('limit', 30))->withQueryString()
        );
        return Inertia::render('Institutes/Index', compact('institutes', 'filters'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        $heads = HeadResource::collection(Head::active()->orderBy('sort_id')->get());
        return Inertia::render('Institutes/Create', compact('heads'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(InstituteRequest $request)
    {
        Institute::create($request->validated());
        session()->flash('success', "Institute has been created successfully.");
        return redirect()->route('institutes.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Institute  $institute
     * @return \Inertia\Response
     */
    public function show(Institute $institute)
    {
        $institute->load('head');
        return Inertia::render('Institutes/Show', compact('institute'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Institute  $institute
     * @return \Inertia\Response
     */
    public function edit(Institute $institute)
    {
        $heads = HeadResource::collection(Head::active()->orderBy('sort_id')->get());
        return Inertia::render('Institutes/Edit', compact('institute', 'heads'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Institute  $institute
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(InstituteRequest $request, Institute $institute): \Illuminate\Http\RedirectResponse
    {
        $institute->update($request->validated());
        session()->flash('success', "Institute has been updated successfully.");
        return redirect()->route('institutes.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Institute  $institute
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Institute $institute)
    {
        $institute->delete();
        session()->flash('success', "Institute has been deleted successfully.");
        return back();
    }

    public function toggleStatus(Institute $institute){
        $this->authorize('toggleStatus', $institute);

        $institute->update([
            'status' => !$institute->status
        ]);
        session()->flash('success', "Institute has been ".($institute->status?'activated':'deactivated')." successfully.");
        return back();
    }
}
