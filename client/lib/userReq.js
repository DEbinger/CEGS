function signUpReq(user){
    return new Promise ( (resolve, reject) => {
        function reqListener(){
            let data = JSON.parse(this.responseText);

            resolve(data);
        }

        var oReq = new XMLHttpRequest();
        oReq.addEventListener('load', reqListener);
        oReq.open('POST', '/users/signup', true);
        oReq.setRequestHeader('Content-Type', 'application/json');
        oReq.send(JSON.stringify(user));
    });
}

module.exports = signUpReq;