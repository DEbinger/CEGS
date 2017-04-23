function signUpReq(user){
    return new Promise ( (resolve, reject) => {
        console.log('Req User: ', user);
        function reqListener(){
            console.log('Signed Up: ', this.responseText);
            let data = JSON.parse(oReq);
            resolve(data);
        }

        const oReq = new XMLHttpRequest();
        oReq.addEventListener('load', reqListener);
        oReq.open('POST', '/users/signup', true);
        oReq.setRequestHeader('Content-Type', 'application/json');
        oReq.send(JSON.stringify(user));
    });
}

module.exports = signUpReq;