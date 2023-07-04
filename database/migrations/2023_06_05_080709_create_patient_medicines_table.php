<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePatientMedicinesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patient_medicines', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained();
            $table->foreignId('patient_id')->constrained();
            $table->foreignId('patient_visit_id')->constrained();
            $table->foreignId('medicine_id')->constrained();
            $table->foreignId('medicine_type_id')->nullable()->constrained();
            $table->foreignId('route_id')->nullable()->constrained();
            $table->string('dosage')->nullable();
            $table->foreignId('frequency_id')->nullable()->constrained();
            $table->string('duration_unit')->nullable();
            $table->string('duration_value')->nullable();
            $table->unsignedBigInteger('qty')->nullable();
            $table->string('taken_meal')->nullable();
            $table->string('acquire_from')->nullable();
            $table->text('medicine_instructions')->nullable();
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
        Schema::dropIfExists('patient_medicines');
    }
}
