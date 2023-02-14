export const callApi = (url, method, body) => {
    var options = {
      method: method,
      headers: {
        "Content-Type": "application/json"
      },
      body: body !== undefined ? JSON.stringify(body) : undefined
    };

    console.log("options : ", options);

    console.log("this : ", this);
    console.log("this.state : ", this.state);
    console.log("this.state.currentUser : ", this.state.currentUser);

    /*
    if (this.state.currentUser) {
      this.state.currentUser.getIdToken(true)
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
    */
  }