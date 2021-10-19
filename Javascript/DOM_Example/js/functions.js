var al;
function submitForm(){
	var basket=document.getElementById("nba").checked;
	var tenis=document.getElementById("tennis").checked;
	if(basket===true && tenis===false) {
		document.getElementById("image").innerHTML="<img src='img/ante.jpg' alt='Antetokounmpo'/>";
		document.getElementById("output").style.backgroundColor="orange";		
		//clearInterval(al);
	}
	else if(basket===true && tenis===true) {
		document.getElementById("image").innerHTML="<img src='img/antetsip.jpg' alt='Antetokounmpo Tsitsip'/>";	
		document.getElementById("output").style.backgroundColor="cyan";
		//clearInterval(al);
	}
	else if(basket===false && tenis===true) {
		document.getElementById("image").innerHTML="<img  src='img/tsitsipas.jpg' alt='Tsitsip'/>";	
		document.getElementById("output").style.backgroundColor="yellow";
		//clearInterval(al);
	}
	else{
		document.getElementById("output").style.backgroundColor="red";
		document.getElementById("image").innerHTML="<img   src='img/poiotita.gif' alt='Tsitsipas'/>";	
		//al=setInterval(alertBox,2000);
	}
	if(tenis===false &&  document.getElementById("fname").value==="Stefanos" && document.getElementById("lname").value=="Tsitsipas"){
		document.getElementById("image").innerHTML="<img   src='img/tsitsipasAngry.jpg' alt='Tsitsipas'/>";
		document.getElementById("output").style.backgroundColor="white";
		alertBox();
	}
	
	return false;
}

function alertBox(){
		alert("Eisai trelos?");
}

function welcome(){
	var name=document.getElementById("fname").value;
	document.getElementById("message").innerHTML+="<br> Welcome "+name;
}


function surname(){
	var surname=document.getElementById("lname").value;
	var msg="Ti kaneis?";
if(surname.endsWith("akis")){
	msg="Inta Kaneis? Tinos eisai esy?";
}
if(surname=="Tsitsipas"){
	document.getElementById("fname").value="Stefanos";
	document.getElementById("message").innerHTML+="<br> Welcome Stefanos";
	document.getElementById("tennis").checked=true;
}
	document.getElementById("message").innerHTML+="<br>"+msg;
}

