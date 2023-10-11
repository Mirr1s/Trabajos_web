// Creamos una lista vacía para almacenar nuestros elementos.
var lista = [];

// Definimos una función para actualizar la lista en la página.
function actualizarLista() {
    // Obtenemos el elemento <ul> con el id "lista" del documento.
    var ul = document.getElementById("lista");
    // Limpiamos cualquier contenido dentro de este elemento <ul>.
    ul.innerHTML = "";
    
    // Recorremos cada elemento en nuestra lista.
    for (var i = 0; i < lista.length; i++) {
        // Creamos un nuevo elemento <li> (un elemento de lista).
        var li = document.createElement("li");
        // Agregamos el texto de nuestro elemento "lista[i]" al <li>.
        li.appendChild(document.createTextNode(lista[i]));
        // Agregamos el <li> recién creado al elemento <ul> para mostrarlo en la lista.
        ul.appendChild(li);
    }
    
    // Limpiamos el valor en el campo de entrada de texto con id "inputText".
    var input = document.getElementById("inputText");
    input.value = "";
}

// Definimos una función para capturar los datos ingresados y agregarlos a la lista.
function capturarDatos() {
    // Obtenemos el valor ingresado en el campo de entrada de texto con id "inputText".
    var input = document.getElementById("inputText");

    // Verificamos si el campo de entrada está vacío.
    if (input.value === "") {
        alert("Ingrese texto para agregar a la lista.");
        return; // Salimos de la función si no hay texto para agregar.
    }

    // Convertimos el valor ingresado a minúsculas y lo agregamos a nuestra lista.
    lista.push(input.value.toLowerCase());
    // Llamamos a la función para actualizar la lista en la página.
    actualizarLista();
}

// Definimos una función para eliminar el último elemento de la lista.
function eliminarTexto() {
    // Verificamos si la lista está vacía.
    if (lista.length === 0) {
        alert("No hay más elementos para eliminar.");
        return; // Salimos de la función si la lista está vacía.
    }
    
    // Usamos "pop()" para eliminar el último elemento de nuestra lista.
    lista.pop();
    // Llamamos a la función para actualizar la lista en la página.
    actualizarLista();
}
