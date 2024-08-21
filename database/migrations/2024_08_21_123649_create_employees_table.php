<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('officer_id');
            $table->string('officer_name');
            $table->string('cnic')->nullable();
            $table->string('officer_batch')->nullable();
            $table->unsignedBigInteger('daysleft_for_retierment')->nullable();
            $table->string('designation')->nullable();
            $table->string('offical_contact')->nullable();
            $table->string('offical_email')->nullable();
            $table->date('date_of_birth')->nullable();
            $table->string('gender')->nullable();
            $table->unsignedBigInteger('head_id')->nullable();
            $table->string('head_name')->nullable();
            $table->unsignedBigInteger('head_of_wing_id')->nullable();
            $table->string('head_of_wing_name')->nullable();
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
        Schema::dropIfExists('employees');
    }
}
