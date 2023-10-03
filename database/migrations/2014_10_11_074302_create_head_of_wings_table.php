<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHeadOfWingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('head_of_wings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('head_id')->nullable()->constrained();
            $table->string('name');
            $table->string('name_abbreviation')->nullable();
            $table->unsignedTinyInteger('status')->default(0);
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
        Schema::dropIfExists('head_of_wings');
    }
}
