<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePatientVisitsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patient_visits', function (Blueprint $table) {
            $table->id();
            $table->foreignId('patient_id')->constrained();
            $table->foreignId('user_id')->constrained();
            $table->unsignedBigInteger('token_no');
            $table->unsignedFloat('temperature', 4, 1)->nullable();
            $table->unsignedInteger('bp_systolic')->nullable();
            $table->unsignedInteger('bp_diastolic')->nullable();
            $table->unsignedInteger('pulse')->nullable();
            $table->unsignedInteger('sugar')->nullable();
            $table->float('weight', 4, 1)->nullable();
            $table->string('height')->nullable();
            $table->text('notes')->nullable();

            $table->text('risk_factor_notes')->nullable();
            $table->text('complaint_notes')->nullable();
            $table->text('disease_notes')->nullable();
            $table->text('diagnosis_advise')->nullable();

            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('patient_visits');
    }
}
