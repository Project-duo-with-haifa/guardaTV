 /*

 var getUser = [];
 function newUser(){
 var user={}
 user.name=document.forms["myForm"]["full_name"].value;
 user.email=document.forms["myForm"]["email"].value;
 user.password=document.forms["myForm"]["psw"].value;

 var get =  JSON.parse(localStorage.getItem('getUser'));
 get.push(user);
 console .log(get)
 window.localStorage.setItem('getUser', JSON.stringify(get));
 alert(getUser)}*/

var users = []
var MakeUser= function(username,email,pw){
   var user ={}
   user.name=username;
   user.email = email; 
   user.password = pw 
   users.push(user)
   return user 
}



var Hadil = MakeUser("Hadil","alaaloulou@rbk.coffe","taketenguys")
var Haifa = MakeUser("Haifa","wahbi@wawa.com","Azertysaif9")