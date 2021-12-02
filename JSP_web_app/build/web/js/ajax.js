

function createTableFromJSON(data) {
    var html = "<table><tr><th>Category</th><th>Value</th></tr>";
    for (var x in data) {
        var category=x;
        var value=data[x];
        if(value.endsWith('jpg') || value.endsWith("png")){
            value="<img src='"+value+"'/>";
        }
        html += "<tr><td>" + category + "</td><td>" + value + "</td></tr>";
    }
    html += "</table>";
    return html;

}




function getDogInformation() {
    var data = null;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE && this.status===200) {
              var responseData = JSON.parse(xhr.responseText);
              $('#ajaxContent').html("");
             $('#ajaxContent').html(createTableFromJSON(responseData));
        }
        else if(this.status!==200){
            $('#ajaxContent').html('Request failed. Returned status of ' + xhr.status+"<br> Skylos Not Exists");
        }
    });
    var dog=$('#dog').val().toLowerCase().replace(" ","_");
    xhr.open("GET", "https://wikiapi.p.rapidapi.com/api/v1/wiki/animals/dog/info/"+dog+"?lan=en");
    xhr.setRequestHeader("x-rapidapi-host", "wikiapi.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "690fb272f6mshd0dbcbba113b2f7p13605bjsn09f783f233c1");
    xhr.send(data);
}
