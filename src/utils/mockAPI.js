const mockApiCall = (data = {}, timeout = 2500, error = false, message = 'Error') => {
    return new Promise((resolve, reject) => {
        if (error) {
            setTimeout(reject(message), timeout);
        } else {
            setTimeout(resolve(data), timeout);
        }
    });
};

export default mockApiCall;