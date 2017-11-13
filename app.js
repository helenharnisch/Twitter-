(function(){
	// Variables
	var lista = document.getElementById("lista");
	var	tareaInput = document.getElementById("tareaInput");
	var	btnNuevaTarea = document.getElementById("btn-agregar");

	// Funciones
	var agregarTarea = function(){
        // Obtener contenido de nuestro textarea
		var tarea = tareaInput.value;
        // Crear un elemento (li)
		var nuevaTarea = document.createElement("li");
        // Crear un elemento (a)
		var enlace = document.createElement("a");
        // Crear nodo de texto
		var contenido = document.createTextNode(tarea);

        // Validar que tareaInput tenga texto
		if (tarea === "") {
			tareaInput.setAttribute("disabled", false);
			/*tareaInput.className = "error";

			return false;*/
		}

		// Agregamos el contenido al enlace
		enlace.appendChild(contenido);
		// Le establecemos un atributo href (para que sea clickable)
		enlace.setAttribute("href", "#");
		// Agrergamos el enlace (a) a la nueva tarea (li)
		nuevaTarea.appendChild(enlace);
		// Agregamos la nueva tarea a la lista
		lista.appendChild(nuevaTarea);

        // Limpiar lista
		tareaInput.value = "";
        // Borrando Elementos de la lista
        for (var i = 0; i <= lista.children.length -1; i++) {
            lista.children[i].addEventListener("click", function(){
                 this.parentNode.removeChild(this);
            });
        }

    };

    // Eliminar clase ("agrega una tarea valida") y restablecer placeholder
    var comprobarInput = function(){
    tareaInput.className = "";
    tareaInput.setAttribute("placeholder", "¿Qué está pasando?");
    };

	/*function cuenta(){
    document.forms[0].caracteres.value=document.forms[0].texto.value.length
    }*/

    // Eventos

    // Agregar Tarea
    btnNuevaTarea.addEventListener("click", agregarTarea);

    // Comprobar textarea
    tareaInput.addEventListener("click", comprobarInput);

}());
