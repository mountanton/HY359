function createTableFromJSON(data,i) {
	var html = "<h4>Laptop "+i+"</h4><table><tr><th>Category</th><th>Value</th></tr>";
    for (const x in data) {
        var category=x;
        var value=data[x];
        html += "<tr><td>" + category + "</td><td>" + value + "</td></tr>";
    }
    html += "</table><br>";
    return html;

}



function getLaptops(){
const xhr = new XMLHttpRequest();
xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
           
		const obj = JSON.parse(xhr.responseText);
		var i=1;
		var count= Object.keys(obj).length;
		document.getElementById("msg").innerHTML="<h3>"+count+" Laptops</h3>";
        for(id in obj){
			document.getElementById("msg").innerHTML+=createTableFromJSON(obj[id],i);
			i++;
			
		}
            
        } else if (xhr.status !== 200) {
            document.getElementById('msg')
                    .innerHTML = 'Request failed. Returned status of ' + xhr.status + "<br>";
 
        }
    };

xhr.open("GET", "http://localhost:8080/Computers_REST_API/computers/eshop/laptops");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send();
}

function addLaptop() {
    let myForm = document.getElementById('myForm');
    let formData = new FormData(myForm);
    const data = {};
    formData.forEach((value, key) => (data[key] = value));
    var jsonData=JSON.stringify(data);
    
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
           document.getElementById('msg').innerHTML=JSON.stringify(xhr.responseText);
            
        } else if (xhr.status !== 200) {
            document.getElementById('msg')
                    .innerHTML = 'Request failed. Returned status of ' + xhr.status + "<br>"+
					JSON.stringify(xhr.responseText);
 
        }
    };
    xhr.open('POST', 'http://localhost:8080/Computers_REST_API/computers/eshop/newLaptop');
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(jsonData);
}



function getLaptopsOfBrand(){
const xhr = new XMLHttpRequest();
xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
           
		const obj = JSON.parse(xhr.responseText);
		var i=1;
		var count= Object.keys(obj).length;
		document.getElementById("msg").innerHTML="<h3>"+count+" Laptops</h3>";
        for(id in obj){
			document.getElementById("msg").innerHTML+=createTableFromJSON(obj[id],i);
			i++;
			
		}
            
        } else if (xhr.status !== 200) {
            document.getElementById('msg')
                    .innerHTML = 'Request failed. Returned status of ' + xhr.status + "<br>"
					+JSON.stringify(xhr.responseText);
        }
    };

var brand=document.getElementById("brand2").value;
xhr.open("GET", "http://localhost:8080/Computers_REST_API/computers/eshop/laptops/"+brand);
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send();
}


function getLaptopsOfMemory_Core(){
const xhr = new XMLHttpRequest();
xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
           
		const obj = JSON.parse(xhr.responseText);
		var i=1;
		var count= Object.keys(obj).length;
		document.getElementById("msg").innerHTML="<h3>"+count+" Laptops</h3>";
        for(id in obj){
			document.getElementById("msg").innerHTML+=createTableFromJSON(obj[id],i);
			i++;
			
		}
            
        } else if (xhr.status !== 200) {
            document.getElementById('msg')
                    .innerHTML = 'Request failed. Returned status of ' + xhr.status + "<br>"
					+JSON.stringify(xhr.responseText);
 
        }
    };

var memory=document.getElementById("memory2").value;
var URL="http://localhost:8080/Computers_REST_API/computers/eshop/laptopsWithSpecs/"+memory;
var core=document.getElementById("core2").value;
if(core!==""){
	URL+="?core="+core;
}	
xhr.open("GET", URL);
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send();
}


function updateLaptop() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
           document.getElementById('msg').innerHTML=JSON.stringify(xhr.responseText);
            
        } else if (xhr.status !== 200) {
            document.getElementById('msg')
                    .innerHTML = 'Request failed. Returned status of ' + xhr.status + "<br>"+
					JSON.stringify(xhr.responseText);
 
        }
    };
	var name=document.getElementById("name2").value;
	var quantity=document.getElementById("quantity2").value;
    xhr.open('PUT', 'http://localhost:8080/Computers_REST_API/computers/eshop/laptopQuantity/'+name+"/"+quantity);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send();
}

function deleteLaptop() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
           document.getElementById('msg').innerHTML=JSON.stringify(xhr.responseText);
            
        } else if (xhr.status !== 200) {
            document.getElementById('msg')
                    .innerHTML = 'Request failed. Returned status of ' + xhr.status + "<br>"+
					JSON.stringify(xhr.responseText);
 
        }
    };
	var name=document.getElementById("name3").value;
    xhr.open('DELETE', 'http://localhost:8080/Computers_REST_API/computers/eshop/laptop/'+name);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send();
}

