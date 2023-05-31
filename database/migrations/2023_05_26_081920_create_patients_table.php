<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePatientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->id();
            $table->foreignId('patient_type_id')->constrained();
            $table->foreignId('gender_id')->constrained();
            $table->string('patient_no')->nullable()->unique();
            $table->string('patient_name');
            $table->unsignedInteger('patient_age')->nullable();
            $table->string('relationship_with_employee')->nullable();
            $table->string('designation')->nullable();
            $table->string('patient_cnic')->nullable()->unique();
            $table->string('patient_phone')->nullable();
            $table->boolean('status')->default(1);
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
        Schema::dropIfExists('patients');
    }
}
