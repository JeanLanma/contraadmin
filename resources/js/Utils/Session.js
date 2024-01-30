import { router } from '@inertiajs/vue3';

export const logout = () => {
    router.post(route('logout'));
};