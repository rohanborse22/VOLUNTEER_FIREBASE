var db=firebase.firestore();
function writeData(){
	var fname=document.getElementById("fname").value;
	var lname=document.getElementById("lname").value;
	var email=document.getElementById("email").value;
	var phone=document.getElementById("phone").value;
	var password=document.getElementById("password").value;
	// var btnlogin=document.getElementById("btnlogin").value;
	// var btnsignup=document.getElementById("btnsignup").value;
	// var btnlogout=document.getElementById("btnlogout").value;
	// Add a new document in collection "cities"
	db.collection("volunteer").doc().set({
		fname:fname,
		lname:lname,
		email:email,
		phone:phone,
		password:password
	})
	.then(function() {
		console.log("Document successfully written!");
	})
	.catch(function(error) {
		console.error("Error writing document: ", error);
	});
}