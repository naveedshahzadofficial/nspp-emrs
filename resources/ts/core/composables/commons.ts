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
    const toggleStatus = (routeName: string, object: any) => {
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


    const printReceipt = () => {
        const kt_wrapper = document.querySelector('#kt_wrapper') as HTMLElement;
        const kt_aside = document.querySelector('#kt_aside') as HTMLElement;
        const kt_header = document.querySelector('#kt_header') as HTMLElement;
        const kt_toolbar = document.querySelector('#kt_toolbar') as HTMLElement;
        const kt_footer = document.querySelector('#kt_footer') as HTMLElement;

        kt_aside?.style?.setProperty('display', 'none');
        kt_header?.style?.setProperty('display', 'none');
        kt_toolbar?.style?.setProperty('display', 'none');
        kt_footer?.style?.setProperty('display', 'none');
        kt_wrapper?.style?.setProperty('padding-top', '0');
        window.print();
        kt_aside?.style?.removeProperty('display');
        kt_header?.style?.removeProperty('display');
        kt_toolbar?.style?.removeProperty('display');
        kt_footer?.style?.removeProperty('display');
        kt_wrapper?.style?.removeProperty('padding-top');
    }

    return { filterData, destroy, toggleStatus, revoke, printReceipt };
}
