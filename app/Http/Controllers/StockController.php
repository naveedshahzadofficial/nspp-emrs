<?php

namespace App\Http\Controllers;

use App\Http\Requests\StockRequest;
use App\Http\Resources\MedicineCategoryResource;
use App\Http\Resources\MedicineResource;
use App\Http\Resources\StockResource;
use App\Models\Medicine;
use App\Models\MedicineCategory;
use App\Models\Stock;
use Inertia\Inertia;

class StockController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Stock::class , 'stock');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $filters = request()->only(['search', 'limit']);
        $stocks = StockResource::collection(
            Stock::query()
                ->when(request()->input('search'), function ($query, $search){
                    $query->where('qty', $search);
                })
                ->orderBy('created_at', 'desc')
                ->paginate(request()->input('limit', 30))->withQueryString()
        );
        return Inertia::render('Stocks/Index', compact('stocks', 'filters'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        $medicineCategories = MedicineCategoryResource::collection(MedicineCategory::active()->get());
        $medicines = MedicineResource::collection(Medicine::active()->get());

        return Inertia::render('Stocks/Create', compact('medicineCategories', 'medicines'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(StockRequest $request)
    {
        Stock::create($request->validated());
        session()->flash('success', "Stock has been created successfully.");
        return redirect()->route('stocks.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Stock  $stock
     * @return \Inertia\Response
     */
    public function show(Stock $stock)
    {
        return Inertia::render('Stocks/Show', compact('stock'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Stock  $stock
     * @return \Inertia\Response
     */
    public function edit(Stock $stock)
    {
        return Inertia::render('Stocks/Edit', compact('stock'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Stock  $stock
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(StockRequest $request, Stock $stock): \Illuminate\Http\RedirectResponse
    {
        $stock->update($request->validated());
        session()->flash('success', "Stock has been updated successfully.");
        return redirect()->route('stocks.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Stock  $stock
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Stock $stock)
    {
        $stock->delete();
        session()->flash('success', "Stock has been deleted successfully.");
        return back();
    }
}
