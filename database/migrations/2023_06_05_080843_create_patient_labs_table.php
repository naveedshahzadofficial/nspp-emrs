<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePatientLabsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patient_labs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('patient_id')->constrained();
            $table->foreignId('patient_visit_id')->constrained();
            $table->foreignId('test_category_id')->constrained();
            $table->foreignId('test_type_id')->constrained();
            $table->foreignId('test_id')->constrained();
            $table->foreignId('lab_id')->constrained();
            $table->text('test_instructions')->nullable();
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
        Schema::dropIfExists('patient_labs');
    }
}
