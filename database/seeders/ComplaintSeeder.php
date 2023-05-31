<?php

namespace Database\Seeders;

use App\Models\Complaint;
use Illuminate\Database\Seeder;

class ComplaintSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    $complaints = array(
	array(
		"complaint_name" => "Headache"
	),
	array(
		"complaint_name" => "Diabatic"
	),
	array(
		"complaint_name" => "Sore Throat"
	),
	array(
		"complaint_name" => "Abdominal Pain"
	),
	array(
		"complaint_name" => "Abdominal Problems"
	),
	array(
		"complaint_name" => "Allergies\/Hives\/Med Reaction\/Sting"
	),
	array(
		"complaint_name" => "Assault, Rape"
	),
	array(
		"complaint_name" => "Back Pain"
	),
	array(
		"complaint_name" => "Bites"
	),
	array(
		"complaint_name" => "Body Aches"
	),
	array(
		"complaint_name" => "Burns"
	),
	array(
		"complaint_name" => "Cardiac Arrest"
	),
	array(
		"complaint_name" => "Cardio-Vascular Complaint"
	),
	array(
		"complaint_name" => "Chest Pain"
	),
	array(
		"complaint_name" => "Convulsions, Seizures"
	),
	array(
		"complaint_name" => "Dental, Toothache"
	),
	array(
		"complaint_name" => "Diabetic Problems"
	),
	array(
		"complaint_name" => "Dizzy"
	),
	array(
		"complaint_name" => "Ear\/Nose\/Throat Problems"
	),
	array(
		"complaint_name" => "Eye Problem"
	),
	array(
		"complaint_name" => "Fainting\/Syncope"
	),
	array(
		"complaint_name" => "Fall"
	),
	array(
		"complaint_name" => "Fever"
	),
	array(
		"complaint_name" => "Flank Pain"
	),
	array(
		"complaint_name" => "Fluid\/Nutrition Alteration"
	),
	array(
		"complaint_name" => "Follow-Up"
	),
	array(
		"complaint_name" => "Foreign Body"
	),
	array(
		"complaint_name" => "Genito-Urinary Problem"
	),
	array(
		"complaint_name" => "Gun-Shot Wound"
	),
	array(
		"complaint_name" => "Gynecological Problem"
	),
	array(
		"complaint_name" => "Hemorrhage"
	),
	array(
		"complaint_name" => "Industrial\/Machinery Accidents"
	),
	array(
		"complaint_name" => "Infection"
	),
	array(
		"complaint_name" => "Ingestion (Accidental)"
	),
	array(
		"complaint_name" => "Laceration"
	),
	array(
		"complaint_name" => "Medication Refill"
	),
	array(
		"complaint_name" => "Neck Pain"
	),
	array(
		"complaint_name" => "Needlestick"
	),
	array(
		"complaint_name" => "Neurological Complaint"
	),
	array(
		"complaint_name" => "Obstetrical Problem"
	),
	array(
		"complaint_name" => "Orthopedic Injury"
	),
	array(
		"complaint_name" => "Overdose (Intentional)"
	),
	array(
		"complaint_name" => "Peripheral Vascular\/Leg Pain"
	),
	array(
		"complaint_name" => "Procedure"
	),
	array(
		"complaint_name" => "Psychiatric\/Social Problems"
	),
	array(
		"complaint_name" => "Respiratory Problems"
	),
	array(
		"complaint_name" => "Skin Complaint\/Trauma"
	),
	array(
		"complaint_name" => "Stabbing"
	),
	array(
		"complaint_name" => "Stroke\/CVA"
	),
	array(
		"complaint_name" => "Substance Abuse"
	),
	array(
		"complaint_name" => "Temperature Related"
	),
	array(
		"complaint_name" => "Traffic Injury"
	),
	array(
		"complaint_name" => "Traumatic Injuries"
	),
	array(
		"complaint_name" => "Unconsciousness"
	),
	array(
		"complaint_name" => "Unknown Problem (Man Down)"
	),
	array(
		"complaint_name" => "Vaginal Bleeding"
	),
	array(
		"complaint_name" => "Weakness"
	)
);
        foreach ($complaints as $complaint) {
        Complaint::create($complaint);
        }
    }
}
