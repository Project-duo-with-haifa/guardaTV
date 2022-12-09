var users = []
var MakeUser= function(username,email,pw){
	var user ={}
	user.name=username;
	user.email = email; 
	user.password = pw 
	users.push(user)
	return user 
}


var Hadil = MakeUser("Hadil","hadil@rbk.tn","taketenguys")
var Haifa = MakeUser("Haifa","haifa@gmail.com","Azertysaif9")
var Ala = MakeUser("ala","ala@gmail.com","vivobn")

function displayUsername(user){
if(user.email==="hadil@rbk.tn"){
document.getElementById("username").textContent = user.name}
else if (user.email==="haifa@gmail.com"){document.getElementById("username").textContent = user.name}

else if(user.email==="ala@gmail.com"){document.getElementById("username").textContent = user.name}
			}
