import {router} from "@inertiajs/vue3";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
export function useCommons(){
    const filterData = (routeName: string, _filter: any) => {

        _filter = Object.keys(_filter).reduce((acc, key) => {
            const value = _filter[key];
            if (value !== '' && value !== null && value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {});

        router.get(route(routeName),_filter,{
            preserveScroll: true,
            preserveState: true,
            replace: true
        });
    }
    const destroy = (routeName: string, _id: number) => {
        Swal.fire({
            text: "Are you sure you want to delete this?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: 'Delete',
            buttonsStyling: false,
            customClass: {
                confirmButton: "btn fw-bold btn-danger",
                cancelButton: "btn fw-bold btn-secondary",
            },
        }).then(function (result) {
            if(result.isConfirmed){
                router.delete(route(routeName, _id), {
                    preserveScroll: true
                });
            }
        });
    }
    const changeStatus = (routeName: string, object: any) => {
        Swal.fire({
            text: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: object?.status?'Deactivate':'Activate',
            buttonsStyling: false,
            customClass: {
                confirmButton: object?.status?'btn fw-bold btn-danger':'btn fw-bold btn-success',
                cancelButton: "btn fw-bold btn-secondary",
            },
        }).then(function (result) {
            if(result.isConfirmed){
                router.delete(route(routeName,  object?.id), {
                    preserveScroll: true,

                });
            }
        });
    }
    const revoke = (routeName: string, _idFrom: number, _idTo: number) => {
        Swal.fire({
            text: "Are you sure you want to revoke this?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: 'Revoke',
            buttonsStyling: false,
            customClass: {
                confirmButton: "btn fw-bold btn-danger",
                cancelButton: "btn fw-bold btn-secondary",
            },
        }).then(function (result) {
            if(result.isConfirmed){
                router.delete(route(routeName, [_idFrom, _idTo]), {
                    preserveScroll: true
                });
            }
        });
    }

    return { filterData, destroy, changeStatus, revoke };
}
