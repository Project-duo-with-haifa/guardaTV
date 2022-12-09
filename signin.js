var users = []
var MakeUser= function(username,email,pw){
	var user ={}
	user.name=username;
	user.email = email; 
	user.password = pw 
	users.push(user)
	return user 
}


var haifa1 = MakeUser("haifa","haifa@rbk.tn","ttttttt")
var Haifa = MakeUser("haifa","haifa@gmail.com","Azertysaif9")
var Ala = MakeUser("ala","ala@gmail.com","vivobn")


function login(){

email=document.forms["myForm"]["email"].value;
password=document.forms["myForm"]["psw"].value;

		if(email==="haifa@rbk.tn"){
			$("#signinbtn").html("<a href='user.html'>Sign In</a>")
		}
		else if (email==="haifa@gmail.com"){$("#signinbtn").html("<a href='user.html'>Sign In</a>")}

			else if(email==="ala@gmail.com"){$("#signinbtn").html("<a href='user.html'>Sign In</a>")}
			else {alert("Sign up first please!")} }