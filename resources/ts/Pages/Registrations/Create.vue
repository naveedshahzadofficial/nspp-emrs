<template>
    <Head title="Add Registration"/>

    <!--begin::Card-->
    <div class="card card-custom gutter-b">
        <div class="card-header">
            <h3 class="card-title">Registration Add</h3>

        </div>

        <!--begin::Form-->
        <div class="card-body">

            <div class="form-group">
                <label>Name</label>
                <input type="text" name="name" class="form-control" placeholder="Name" />

                <div class="error"></div>
            </div>

            <div class="row form-group mt-5">
                <div class="col-lg-6">
                    <label>CNIC No.<span class="color-red-700"></span></label>
                    <input maxlength="254" type="text" name="website_url" class="form-control" placeholder="CNIC No."  />
                    <div class="error"></div>
                </div>
                <div class="col-lg-6">
                    <label>Email Address <span class="color-red-700"></span></label>
                    <input maxlength="100" type="email" name="business_email_address" class="form-control" placeholder="Email Address"  />
                    <div class="error"></div>
                </div>
            </div>


        </div>
        <div class="card-footer">
            <button type="submit" class="btn btn-primary mr-2">Submit</button>
            <a href="" class="btn btn-secondary">Cancel</a>
        </div>
        <!--end::Form-->
    </div>

</template>

<script lang="ts" setup>

</script>

<style scoped>

</style>
