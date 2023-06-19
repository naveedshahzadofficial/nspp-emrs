import { usePage } from "@inertiajs/vue3";

export function usePermission() {
    const hasRole = (name) => (usePage().props.auth?.user as any)?.roles.includes(name);
    const hasPermission = (name) => hasRole('Super Admin') ||
        (usePage().props.auth?.user as any)?.permissions.includes(name);

    return { hasRole, hasPermission };
}
