function check(){
		var user=document.getElementById('user').value;
		var code=document.getElementById('code').value;
		if(user==''){
			alert("User name not entered")
		}
		else if(code==''){
			alert("Password field cannot be empty")
		}
		else{
			alert("Welcome to New World")
		}
}