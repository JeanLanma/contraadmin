const Utils = {
    logout: () => {
        window.axios.post('/logout')
            .then(() => {
                window.location = '/';
            });
    }
}

export default Utils;