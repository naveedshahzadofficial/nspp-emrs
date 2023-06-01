<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMedicinesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('medicines', function (Blueprint $table) {
            $table->id();
            $table->foreignId('medicine_category_id')->nullable()->constrained();
            $table->foreignId('medicine_generic_id')->nullable()->constrained();
            $table->foreignId('medicine_type_id')->nullable()->constrained();
            $table->string('medicine_name');
            $table->string('specification')->nullable();
            $table->string('strength')->nullable();
            $table->string('uom')->nullable();
            $table->boolean('is_controlled')->default(0);
            $table->boolean('is_multiply')->default(1);
            $table->boolean('is_over_counter')->default(0);
            $table->boolean('is_frequently_used')->default(0);
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
        Schema::dropIfExists('medicines');
    }
}
