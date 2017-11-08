

	var boton = document.getElementById('boton');

	boton.addEventListener('click', function(){
	//tenemos que tomar el texto ingresado en el textarea
	var comments = document.getElementById('comentario').value;

	//limpiar el textarea
	document.getElementById('comentario').value = '';

	//contenedor que esta en el html
	var cont = document.getElementById('contenedor');

	//creamos el div que contiene cada comentario
	var newComments = document.createElement('div');

	//validar que textarea tenga un msje
	if(comments.length == 0 || comments == null) {
		alert('Debes ingresar un mensaje');
		return false;
	}
	//crear checkbox
	var chck = document.createElement('input');
	chck.type = 'checkbox';
	//creamos icono de corazon
	var heart = document.createElement('i');
	heart.classList.add('fa', 'fa-heart', 'heart');
	//creamos icono de basura
	var trash = document.createElement('i');
	trash.classList.add('fa', 'fa-trash', 'trash');
	//nodos de texto del textarea
	var textNewComment = document.createTextNode(comments);

	var contenedorElemento = document.createElement('p');
	contenedorElemento.appendChild(textNewComment);
	newComments.appendChild(chck);
	newComments.appendChild(trash);
	newComments.appendChild(heart);
	newComments.appendChild(contenedorElemento);

	cont.appendChild(newComments);
	//evento que al hacer click le agrega color rojo al corazón
	heart.addEventListener('click', function(){
		heart.classList.toggle('red');
	})
	//evento que al hacer click remueve el div del comentario completo
	trash.addEventListener('click', function(){
		cont.removeChild(newComments);
	})
	//evento que agrega tachado al párrafo al hacer click en el checkbox
	chck.addEventListener('click', function(){
		contenedorElemento.classList.toggle('strike-out'); //agrego clase tachado a parrafo contenedor de comentarios, se activa al hacer click, toggle es como un switch, agrega y quita sucesivamente
	})

})

/*fuction habilitar()
var comments = document.getElementById("comment");
var boton = document.getElementById("btn");
var cont = document.getElementById('cont');
if (comments.length == 0 ||  comments == null && cont.length == 0 || cont == null ) {
   boton.disabled = true;
} else {
   boton.disabled = false;
}*/
