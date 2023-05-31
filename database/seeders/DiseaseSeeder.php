<?php

namespace Database\Seeders;

use App\Models\Disease;
use Illuminate\Database\Seeder;

class DiseaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $diseases = array(
	array(
		"disease_name" => "Subdural Hematoma ",
		"disease_type_id" => 1
	),
	array(
		"disease_name" => "Extradural Haematoma",
		"disease_type_id" => 1
	),
	array(
		"disease_name" => "Abcess",
		"disease_type_id" => 1
	),
	array(
		"disease_name" => "Diabetic Foot",
		"disease_type_id" => 1
	),
	array(
		"disease_name" => "Threatened Abortion",
		"disease_type_id" => 1
	),
	array(
		"disease_name" => "Menorrhagia",
		"disease_type_id" => 1
	),
	array(
		"disease_name" => "Vaginal Discharge",
		"disease_type_id" => 1
	),
	array(
		"disease_name" => "Bleeding PV",
		"disease_type_id" => 1
	),
	array(
		"disease_name" => "Hemorrhoids",
		"disease_type_id" => 1
	),
	array(
		"disease_name" => "Anal Fissure",
		"disease_type_id" => 1
	),
	array(
		"disease_name" => "Anal Fistula",
		"disease_type_id" => 1
	),
	array(
		"disease_name" => "Acute Intestinal Obstruction",
		"disease_type_id" => 1
	),
	array(
		"disease_name" => "Perforated Duodenal Ulcer",
		"disease_type_id" => 1
	),
	array(
		"disease_name" => "Acute Pancreatitis",
		"disease_type_id" => 1
	),
	array(
		"disease_name" => "Acute Cholecystitis",
		"disease_type_id" => 1
	),
	array(
		"disease_name" => "Cholilithiasis",
		"disease_type_id" => 1
	),
	array(
		"disease_name" => "Biliary Colic",
		"disease_type_id" => 1
	),
	array(
		"disease_name" => "Renal Colic",
		"disease_type_id" => 1
	),
	array(
		"disease_name" => "Ureteric Colic",
		"disease_type_id" => 1
	),
	array(
		"disease_name" => "Acute Urinary Retention ",
		"disease_type_id" => 1
	),
	array(
		"disease_name" => "Acute Cystitis",
		"disease_type_id" => 1
	),
	array(
		"disease_name" => "Acute Urinary Retention ",
		"disease_type_id" => 1
	),
	array(
		"disease_name" => "Varicose Veins",
		"disease_type_id" => 1
	),
	array(
		"disease_name" => "Urinary Incotinence",
		"disease_type_id" => 1
	),
	array(
		"disease_name" => "LUTS",
		"disease_type_id" => 1
	),
	array(
		"disease_name" => "Infected Wound",
		"disease_type_id" => 1
	),
	array(
		"disease_name" => "Headache",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Migraine",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Cluster Headache",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Meningitis",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Encephalitis",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "CVA",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "TIA",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Epilepsy",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Syncope",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Dementia",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Malaria",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Typhoid",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "AVH",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Hyperthroidusm",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Hypothyroidism",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "DM",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Diabetic Ketoacidosis",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Hypoglycemia",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Psoriasis",
		"disease_type_id" => 3
	),
	array(
		"disease_name" => "Tinea Pedis",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Scabies",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Tinea Capitis",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Eclampisa",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Gestational Diabetes",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Pneumonia ",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Acute Bronchitis",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Bronchitis",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Chronic Bronchitis",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "COPD",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Acute Tonsitlitis",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Acute Pharyngitis",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Acute Gastroenteritis",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Constipation",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Acute Diarrhea",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "GERD ",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Vomitting",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "IBD",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "IBS",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Peptic Ulcer Disease",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "DCLD",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Pleural Effusion",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Dyspepsia",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Bloating",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Tinnitis",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Heartburn",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Jaundice",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "BPH",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "UTI",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Chronic Kidney Disease ",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Eclampsia",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Angina ",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Acute MI",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Myalgia Chest ",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Shortness Of Breath",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Exertional Dyspnea",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Acute Plmonary Edema",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "HTN",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "IHD",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Pulmonary Embolism",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "DVT",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Hepatic Encephalopathy",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Congestive Heart Failure",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Valvular Heart Disease",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Infective Endocaroitis",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Dizziness",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Vertigo",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Palpitations",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "URTI",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "RTI",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "APD",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "AUB",
		"disease_type_id" => 1
	),
	array(
		"disease_name" => "ARI",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Fever",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Fatigue",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Backache",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Joint Pain",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Boil",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Flu",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Toothache",
		"disease_type_id" => 2
	),
	array(
		"disease_name" => "Dermatitis",
		"disease_type_id" => 3
	),
	array(
		"disease_name" => "Rash",
		"disease_type_id" => 3
	),
	array(
		"disease_name" => "Eczema",
		"disease_type_id" => 3
	)
);

        foreach ($diseases as $disease) {
            Disease::create($disease);
        }

    }
}
