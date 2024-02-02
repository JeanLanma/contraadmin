const Utils = {
    logout: () => {
        window.axios.post('/logout')
            .then(() => {
                window.location = '/';
            });
    }
}

export const CRUDOperation = {
    Create: 'create',
    Read: 'read',
    Update: 'update',
    Delete: 'delete'
}

export default Utils;