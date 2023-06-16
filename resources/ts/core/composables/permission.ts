import { usePage } from "@inertiajs/vue3";

export function usePermission() {
    const hasRole = (name): boolean => (usePage().props.auth?.user as any)?.roles.includes(name);
    const hasPermission = (name): boolean =>
        (usePage().props.auth?.user as any)?.permissions.includes(name);

    return { hasRole, hasPermission };
}
