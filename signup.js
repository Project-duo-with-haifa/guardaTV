
function NewUser(){
	var user={}
	
user.name=document.forms["myForm"]["full_name"].value;
user.email=document.forms["myForm"]["email"].value;
user.password=document.forms["myForm"]["psw"].value;
window.localStorage.setItem('user', JSON.stringify(user));
window.localStorage.getItem('user');

 var getUser = [];
   var get =  JSON.parse(localStorage.getItem('user'));
   getUser = [get];
   getUser.push(user);
console.log(JSON.stringify(getUser));
   console.log(getUser);

/*var getUser=[]
getUser.push(JSON.parse(window.localStorage.getItem('user'));
	localStorage.setItem('user', JSON.stringify(getUser));

   */

alert(getUser)

}