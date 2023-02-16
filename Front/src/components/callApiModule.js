const callApiModule = (url, method, body, currentUser) => {
    var options = {
        method: method,
        headers: {
            "Content-Type": "application/json"
        },
        body: body !== undefined ? JSON.stringify(body) : undefined
    };

    if (currentUser) {
        currentUser.getIdToken(true)
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

module.exports = callApiModule;