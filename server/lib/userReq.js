module.exports= function signUpReq(user){
	return new Promise ( (resolve, reject) => {
		function reqListener(){
			console.log('Signed Up: ', this.responseText);
			let data = this.responseText;
			resolve(data);
		}

		const oReq = new XMLHttpRequest();
		oReq.addEventListener('load', reqListener);
		oReq.open('POST', '/signup', true);
		oReq.setRequestHeader('Content-Type', 'application/json');
		oReq.send(user);
	});
};