function enableButton(){ //함수선언
    var username = document.getElementById("user").value; //user이라는 id로 받음
    var password = document.getElementById("password").value; //password라는 id로 받음 
    var button = document.getElementById("btn");
    var warning = document.getElementById("warning");

    if (username != "" && password != "") {
        button.disabled = false;
        warning.style.display = "none";
    
    } else {
        button.disabled = true;
        warning.style.display = "block";
    }
}