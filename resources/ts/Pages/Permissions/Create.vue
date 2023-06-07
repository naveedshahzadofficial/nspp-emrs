<template>
    <Head title="Create Permission"/>
    <Toolbar
        title="Add Permission"
        :buttons="[{label: 'Back', link: route('permissions.index')}]"
        :breadcrumbs="[
            {label: 'System Settings', link: '#'},
            {label: 'Permissions', link: route('permissions.index')},
            {label: 'Add', link: null}
        ]"
    />
    <!-- begin:: Content Body -->
    <div class="d-flex flex-column-fluid">
        <!--begin::Container-->
        <div id="kt_content_container" class="container-fluid">
            <div class="card card-custom">
                <!--begin::Form-->
                <form @submit.prevent="form.post(route('permissions.store'))">
                <!--begin::Card body-->
                <div class="card-body">
                     <div class="row">
                            <div class="col-lg-6">
                                <label class="required form-label">Permission Name</label>
                                <input v-model="form.name"  type="text" class="form-control form-control-sm" placeholder="Permission Name"/>
                                <ServerErrorMessage :error="form.errors.name"/>
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
                        <Link :href="route('permissions.index')" class="btn btn-secondary">Cancel</Link>
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

const form = useForm({
    name: '',
    status: '',
});
</script>
