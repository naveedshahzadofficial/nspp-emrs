<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRegistrationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('registrations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained();
            $table->foreignId('patient_type_id')->constrained();
            $table->foreignId('gender_id')->constrained();
            $table->string('registration_no');
            $table->unsignedBigInteger('token_no');
            $table->string('patient_name');
            $table->unsignedInteger('patient_age')->nullable();
            $table->string('relationship_with_employee')->nullable();
            $table->string('patient_cnic')->nullable();
            $table->unsignedInteger('temperature')->nullable();
            $table->unsignedInteger('bp_systolic')->nullable();
            $table->unsignedInteger('bp_diastolic')->nullable();
            $table->unsignedInteger('pulse')->nullable();
            $table->unsignedInteger('sugar')->nullable();
            $table->unsignedInteger('weight')->nullable();
            $table->string('height')->nullable();
            $table->text('notes')->nullable();
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
        Schema::dropIfExists('registrations');
    }
}
