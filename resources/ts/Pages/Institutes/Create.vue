
<script lang="ts" setup>
import {useForm} from "@inertiajs/vue3";
import ServerErrorMessage from "@/Components/alerts/ServerErrorMessage.vue";
defineProps({
    heads: Array,
    headOfWings: Array,
})
const form = useForm({
    head_id: '',
    head_of_wing_id: '',
    name: '',
    short_name: '',
    order: '',
    status: '',
});
</script>

<template>
    <Head title="Add Institute"/>
    <Toolbar
        title="Add Institute"
        :buttons="[{label: 'Back', link: route('institutes.index')}]"
        :breadcrumbs="[
            {label: 'System Settings', link: '#'},
            {label: 'Institutes', link: route('institutes.index')},
            {label: 'Add', link: null}
        ]"
    />
    <!-- begin:: Content Body -->
    <div class="d-flex flex-column-fluid">
        <!--begin::Container-->
        <div id="kt_content_container" class="container-fluid">
            <div class="card card-custom">
                <!--begin::Form-->
                <form @submit.prevent="form.post(route('institutes.store'))">
                <!--begin::Card body-->
                <div class="card-body">
                    <div class="row mb-10">
                        <div class="col-lg-6">
                            <label class="form-label">Head</label>
                            <v-select
                                v-model="form.head_id"
                                :options="heads"
                                :reduce="(option) => option.id"
                                label="name"
                                class="v-select-custom"
                                placeholder="Please Select" />
                            <ServerErrorMessage :error="form.errors.head_id"/>
                        </div>
                        <div class="col-lg-6">
                            <label class="form-label">Head of Wing</label>
                            <v-select
                                v-model="form.head_of_wing_id"
                                :options="headOfWings"
                                :reduce="(option) => option.id"
                                label="name"
                                class="v-select-custom"
                                placeholder="Please Select" />
                            <ServerErrorMessage :error="form.errors.head_of_wing_id"/>
                        </div>
                    </div>
                    <div class="row mb-10">
                        <div class="col-lg-6">
                            <label class="required form-label">Institute Name</label>
                            <input v-model="form.name"  type="text" class="form-control form-control-sm" placeholder="Institute Name"/>
                            <ServerErrorMessage :error="form.errors.name"/>
                        </div>
                        <div class="col-lg-6">
                            <label class="required form-label">Short Name</label>
                            <input v-model="form.short_name"  type="text" class="form-control form-control-sm" placeholder="Institute Short Name"/>
                            <ServerErrorMessage :error="form.errors.short_name"/>
                        </div>
                     </div>
                     <div class="row mb-10">
                            <div class="col-lg-6">
                                <label class="required form-label">Order</label>
                                <input v-model="form.order"  type="text" class="form-control form-control-sm" placeholder="Institute Order"/>
                                <ServerErrorMessage :error="form.errors.order"/>
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
                        <Link :href="route('institutes.index')" class="btn btn-secondary">Cancel</Link>
                    </div>
                </form>
                <!--end::Form-->
            </div>
        </div>
        <!--end::Container-->
    </div>
    <!-- end:: Content Body -->

</template>

