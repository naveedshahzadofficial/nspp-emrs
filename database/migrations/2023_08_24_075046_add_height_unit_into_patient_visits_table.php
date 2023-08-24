<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddHeightUnitIntoPatientVisitsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('patient_visits', function (Blueprint $table) {
            $table->string('height_unit')->nullable()->default('Feet');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('patient_visits', function (Blueprint $table) {
            $table->dropColumn('height_unit');
        });
    }
}
