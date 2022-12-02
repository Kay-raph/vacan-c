
function auth(event) {
    event.preventDefault(); 
    var email = document.getElementById("emails").value;
    var password = document.getElementById("pwd").value;

    if (email === "lister@gmail.com" && password === "landlord") {
        window.location.replace("/public/index.html");

    } else {
        alert("Invalid Logins");
        return;
    }

}