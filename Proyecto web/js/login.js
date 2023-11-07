document.getElementById("loginButton").addEventListener("click", function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Aquí puedes agregar la lógica de autenticación
    // Por ejemplo, puedes comparar las credenciales con valores predefinidos o hacer una solicitud a un servidor para verificarlas.

    if (username === "1" && password === "1") {
        // Redirige a la página "index.html" si las credenciales son correctas
        window.location.href = "index.html";
    } else {
        document.getElementById("loginMessage").textContent = "Credenciales incorrectas. Inténtalo de nuevo.";
    }
});


