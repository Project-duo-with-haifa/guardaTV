var arr=[1,3,4] ;
function NewUser(){
	var obj={}
	
obj.name=document.forms["myForm"]["full_name"].value;
obj.email=document.forms["myForm"]["email"].value;
obj.password=document.forms["myForm"]["psw"].value;
arr.push(obj)
console.log(arr)
alert(arr)
document.getElementById("name").textContent =obj.name
}