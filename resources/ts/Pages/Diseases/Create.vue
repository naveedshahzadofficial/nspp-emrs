<template>
    <Head title="Add Disease"/>
    <Toolbar
        title="Add Disease"
        :buttons="[{label: 'Back', link: route('diseases.index')}]"
        :breadcrumbs="[
            {label: 'System Settings', link: '#'},
            {label: 'Diseases', link: route('diseases.index')},
            {label: 'Add', link: null}
        ]"
    />
    <!-- begin:: Content Body -->
    <div class="d-flex flex-column-fluid">
        <!--begin::Container-->
        <div id="kt_content_container" class="container-fluid">
            <div class="card card-custom">
                <!--begin::Form-->
                <form @submit.prevent="form.post(route('diseases.store'))">
                <!--begin::Card body-->
                <div class="card-body">
                    <div class="row mb-10">
                        <div class="col-lg-6">
                            <label class="form-label required">Disease Type</label>
                            <v-select
                                v-model="form.disease_type_id"
                                :options="diseaseTypes"
                                :reduce="(option) => option.id"
                                label="type_name"
                                class="v-select-custom"
                                placeholder="Please Select" />
                            <ServerErrorMessage :error="form.errors.disease_type_id"/>
                        </div>
                        <div class="col-lg-6">
                            <label class="required form-label">Disease Name</label>
                            <input v-model="form.disease_name"  type="text" class="form-control form-control-sm" placeholder="Disease Name"/>
                            <ServerErrorMessage :error="form.errors.disease_name"/>
                        </div>

                    </div>

                     <div class="row">
                         <div class="col-lg-6">
                             <label class="form-label">Description</label>
                             <textarea v-model="form.disease_description"  class="form-control form-control-sm" rows="4"></textarea>
                             <ServerErrorMessage :error="form.errors.disease_description"/>
                         </div>
                            <div class="col-lg-6">
                                <label class="required form-label">Status</label>
                                <div class="d-flex">
                                    <div v-for="status in [{id: 1, name:'Active'}, {id: 0, name:'Inactive'}]" :key="status.id" class="form-check form-check-custom form-check-sm me-10">
                                        <input v-model="form.status" :value="status.id" class="form-check-input" name="status" type="radio" :id="`status_${status.id}`">
                                        <label class="form-check-label" :for="`status_${status.id}`">{{ status.name }}</label>
                                    </div>
                                </div>
                                <ServerErrorMessage :error="form.errors.status"/>
                            </div>
                        </div>
                </div>
                <!--end::Card body-->
                <div class="card-footer">
                        <button
                            type="submit"
                            ref="submitButton"
                            class="btn btn-success me-2"
                            :disabled="form.processing"
                            :data-kt-indicator="form.processing?'on':'off'"
                        >
                            <span class="indicator-label"> Submit </span>

                            <span class="indicator-progress">
                                    Please wait...
                <span
                    class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
          </span>
                        </button>
                        <Link :href="route('diseases.index')" class="btn btn-secondary">Cancel</Link>
                    </div>
                </form>
                <!--end::Form-->
            </div>
        </div>
        <!--end::Container-->
    </div>
    <!-- end:: Content Body -->

</template>

<script lang="ts" setup>
import {useForm} from "@inertiajs/vue3";
import ServerErrorMessage from "@/Components/alerts/ServerErrorMessage.vue";
defineProps({
    diseaseTypes: {type: Array ,required: true}
});
const form = useForm({
    disease_type_id: '',
    disease_name: '',
    disease_description: '',
    status: '',
});
</script>
