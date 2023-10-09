<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePatientParticipantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patient_participants', function (Blueprint $table) {
            $table->id();
            $table->foreignId('patient_id')->constrained();
            $table->foreignId('patient_visit_id')->constrained();
            $table->unsignedBigInteger('participant_id');
            $table->unsignedBigInteger('participant_batch_id')->nullable();
            $table->unsignedBigInteger('participant_batch_type_id')->nullable();
            $table->string('participant_college_name')->nullable();
            $table->string('participant_name');
            $table->string('participant_cnic')->nullable();
            $table->string('participant_designation')->nullable();
            $table->string('participant_mobile')->nullable();
            $table->string('participant_email')->nullable();
            $table->date('participant_dob')->nullable();
            $table->string('participant_gender')->nullable();
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
        Schema::dropIfExists('patient_participants');
    }
}
