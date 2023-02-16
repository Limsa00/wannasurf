const callApi = (url, method, body) => {
    var options = {
        method: method,
        headers: {
            "Content-Type": "application/json"
        },
        body: body !== undefined ? JSON.stringify(body) : undefined
    };
    
    if (this.currentUser) {
        this.currentUser.getIdToken(true)
        .then(function(idToken) {
            options.headers["Authorization"] = "Bearer " + idToken;
            fetch(url, options);
        })
        .catch(error => {
            console.log(error);
        });
    } else {
        fetch(url, options);
    }
}

module.exports = callApi;