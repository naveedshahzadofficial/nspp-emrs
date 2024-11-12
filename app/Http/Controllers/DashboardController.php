<?php

namespace App\Http\Controllers;

use App\Models\PatientVisit;
use App\Models\Reimbursement;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Stock;
use App\Models\MedicineCategory;
use App\Models\Patient;
use App\Models\Medicine;
use App\Models\PatientMedicine;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(Request $request){
        // Get Stats

        $stats['total_patients'] = Patient::select(DB::raw('count(*) as total_patients'))->first()->total_patients;
        $stats['total_medicines'] = Medicine::select(DB::raw('count(*) as total_medicines'))->first()->total_medicines;
        $stats['total_medicines_dispensed'] = PatientMedicine::select(DB::raw('count(DISTINCT(medicine_id)) as total_medicines_dispensed'))->first()->total_medicines_dispensed;
        $stats['total_reimbursements'] = Reimbursement::select(DB::raw("SUM(approved_amount) as total_reimbursement"))->first()->total_reimbursement;

        $stats['total_items_instock'] = Stock::select(DB::raw('sum(qty) as total_items_instock'))->whereRaw("expiry_date > DATE_FORMAT(NOW(),'%Y-%m%-%d')")->first()->total_items_instock;
        $stats['total_stock_value'] = Stock::select(DB::raw('sum(qty*unit_rate) as total_stock_value'))->whereRaw("expiry_date > DATE_FORMAT(NOW(),'%Y-%m%-%d') AND unit_rate is not null")->first()->total_stock_value;
        // return $stats['stock_value_by_category'] = Stock::join('medicine_categories', 'medicine_categories.id','=','stocks.medicine_category_id')->select(DB::raw('medicine_categories.category_name as name,sum(stocks.qty*stocks.unit_rate) as data'))->whereRaw("expiry_date > DATE_FORMAT(NOW(),'%Y-%m%-%d') AND unit_rate is not null")->groupBy('stocks.medicine_category_id')->get();
        // $get_medicine_by_category = Stock::join('medicine_categories', 'medicine_categories.id','=','stocks.medicine_category_id')->select(DB::raw('medicine_categories.category_name as name,sum(stocks.qty*stocks.unit_rate) as data'))->whereRaw("expiry_date > DATE_FORMAT(NOW(),'%Y-%m%-%d') AND unit_rate is not null AND stocks.deleted_at is null")->groupBy('stocks.medicine_category_id')->get()->toArray();
        $get_medicine_by_category = MedicineCategory::leftJoin('stocks', function($join){
            $join->on('medicine_categories.id', '=', 'stocks.medicine_category_id')
            ->whereRaw("expiry_date > DATE_FORMAT(NOW(),'%Y-%m%-%d') AND unit_rate is not null AND stocks.deleted_at is null");
        })->select(DB::raw('medicine_categories.category_name as name,sum(stocks.qty*stocks.unit_rate) as data'))
        ->groupBy('medicine_categories.id')->get()->toArray();

        $series_name = array_map(function ($value) {
            return $value['name'];
        }, $get_medicine_by_category);
        $series_data = array_map(function ($value) {
            return (int)$value['data'];
        }, $get_medicine_by_category);
        $medicine_by_category['names'] = $series_name;
        $medicine_by_category['data'] = [(object)['name' => 'Categories', 'data' => $series_data]];
        $stats['stock_value_by_category'] = $medicine_by_category;
        $data['stats'] = $stats;

        // Get Chart Data
        $data['purchased_items_by_category'] = $this->getPurchasedItemsByCategory($request);
        $data['consumed_items_by_category'] = $this->getConsumedItemsByCategory($request);
        $data['patient_visits'] = $this->getPatientVisits($request);
        $data['total_reimbursements'] = $this->getReimbursements($request);
        // $get_medicine_purchased_by_category = Stock::join('medicine_categories', 'medicine_categories.id', '=', 'stocks.medicine_category_id')->select(DB::raw('medicine_categories.category_name as name,sum(stocks.qty*stocks.unit_rate) as data'))->whereRaw("created_at >= DATE_FORMAT(NOW(),'%Y-%m%-%d') AND unit_rate is not null")->groupBy('stocks.medicine_category_id')->get()->toArray();
        // return $data;
        return Inertia::render('Dashboard', compact('data'));
    }

    public function getPurchasedItemsByCategory(Request $request){
        if ($request->has('date')) {
            $date = date('Y-m', strtotime($request->query('date')));
        } else {
            $date = date('Y-m');
        }
        $get_pur_items_by_cat = MedicineCategory::leftJoin('stocks', function($join) use ($date){
            $join->on('medicine_categories.id', '=', 'stocks.medicine_category_id')
            ->whereRaw("DATE_FORMAT(stocks.created_at,'%Y-%m') >= '$date' AND DATE_FORMAT(stocks.created_at,'%Y-%m') <= '$date' AND stocks.deleted_at is null");
        })->select(DB::raw('medicine_categories.category_name as name,IFNULL(SUM(stocks.qty), 0) as data'))->groupBy('medicine_categories.id')->get()->toArray();
        $pur_items_names = array_map(function ($value) {
            return $value['name'];
        }, $get_pur_items_by_cat);
        $pur_items_data = array_map(function ($value) {
            return (int) $value['data'];
        }, $get_pur_items_by_cat);

        $purchased_items_by_category['names'] = $pur_items_names;
        $purchased_items_by_category['data'] = [(object)['name' => 'Categories', 'data' => $pur_items_data]];
        // $data['purchased_items_by_category'] = $purchased_items_by_category;
        return $purchased_items_by_category;
    }

    public function getConsumedItemsByCategory(Request $request){
        if ($request->has('date')) {
            $date = date('Y-m', strtotime($request->query('date')));
        } else {
            $date = date('Y-m');
        }

        $get_con_items_by_cat = MedicineCategory::leftJoin('stocks', function ($join) use ($date) {
            $join->on('medicine_categories.id', '=', 'stocks.medicine_category_id')
            ->whereRaw("DATE_FORMAT(stocks.created_at,'%Y-%m') >= '$date' AND DATE_FORMAT(stocks.created_at,'%Y-%m') <= '$date' AND stocks.deleted_at is null");
        })
            ->leftJoin('patient_medicines', 'patient_medicines.medicine_id', '=', 'stocks.medicine_id')
            ->select(DB::raw('medicine_categories.category_name as name,COALESCE(SUM(patient_medicines.acquire_qty), 0) as data'))
            ->groupBy('medicine_categories.id')
            ->get()
            ->toArray();
        $con_items_names = array_map(function ($value) {
            return $value['name'];
        }, $get_con_items_by_cat);
        $con_items_data = array_map(function ($value) {
            return (int)$value['data'];
        }, $get_con_items_by_cat);

        $consumed_items_by_category['names'] = $con_items_names;
        $consumed_items_by_category['data'] = [(object)['name' => 'Categories', 'data' => $con_items_data]];
        // $data['purchased_items_by_category'] = $purchased_items_by_category;
        return $consumed_items_by_category;
    }

    public function getPatientVisits(Request $request)
    {
        if ($request->has('date')) {
            $date = date('Y-m', strtotime($request->query('date')));
        } else {
            $date = date('Y-m');
        }
        // $get_patient_visits = PatientVisit::select(DB::raw('DATE(patient_visits.created_at) AS visit_date,COUNT(*) AS total_visits'))
        //                                         ->whereRaw("DATE_FORMAT( patient_visits.created_at, '%Y-%m' ) >= '$date' AND DATE_FORMAT( patient_visits.created_at, '%Y-%m' ) <= '$date'")
        //                                         ->groupBy(DB::raw('DATE(patient_visits.created_at)'))
        //                                         ->orderBy('visit_date','desc')
        //                                         ->get()
        //                                         ->toArray();

        $get_patient_visits = PatientVisit::select(DB::raw('DATE(patient_visits.created_at) AS visit_date,COUNT(*) AS total_visits,medicine_categories.category_name'))
                                                ->join('patient_medicines', 'patient_medicines.patient_visit_id','=', 'patient_visits.id')
                                                ->join('medicines', 'patient_medicines.medicine_id', '=', 'medicines.id')
                                                ->join('medicine_categories', 'medicines.medicine_category_id', '=', 'medicine_categories.id')
                                                ->whereRaw("DATE_FORMAT( patient_visits.created_at, '%Y-%m' ) >= '$date' AND DATE_FORMAT( patient_visits.created_at, '%Y-%m' ) <= '$date'")
                                                ->groupBy(DB::raw('medicine_categories.category_name,visit_date'))
                                                ->orderBy('visit_date', 'desc')
                                                ->get()
                                                ->toArray();
        $visit_date = array_map(function ($value) {
            return $value['visit_date'] . ' (' . $value['category_name'] .')';
        }, $get_patient_visits);
        $total_visits = array_map(function ($value) {
            return (int)$value['total_visits'];
        }, $get_patient_visits);

        $patient_visits['names'] = $visit_date;
        $patient_visits['data'] = [(object)['name' => 'Visits', 'data' => $total_visits]];
        return $patient_visits;
    }

    public function getReimbursements(Request $request){
        $bottom_five_employees = Reimbursement::join("employees", "employees.id", "reimbursements.employee_id")
                                                ->select(DB::raw("employees.officer_name, SUM(reimbursements.actual_amount) as total_reimbursements"))
                                                ->groupBy("employees.officer_name")
                                                ->orderBy('total_reimbursements', 'asc')
                                                ->limit(5);

        $top_five_employees = Reimbursement::join("employees", "employees.id", "reimbursements.employee_id")
                                                ->select(DB::raw("employees.officer_name, SUM(reimbursements.actual_amount) as total_reimbursements"))
                                                ->groupBy("employees.officer_name")
                                                ->orderBy('total_reimbursements', 'desc')
                                                ->limit(5)
                                                ->unionAll($bottom_five_employees)
                                                ->orderBy('total_reimbursements', 'desc')
                                                ->get()
                                                ->toArray();
        $officer_name = array_map(function ($value) {
            return $value['officer_name'];
        }, $top_five_employees);
        $total_amount = array_map(function ($value) {
            return (int)$value['total_reimbursements'];
        }, $top_five_employees);

        $total_reimbursements['names'] = $officer_name;
        $total_reimbursements['data'] = [(object)['name' => 'Reimbursements', 'data' => $total_amount]];
        return $total_reimbursements;


    }
}
