
function auth(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "tenant@gmail.com" && password === "vacancy") {
        window.location.replace("/public/index.html");

    } else {
        alert("Invalid Logins");
        return;
    }

}