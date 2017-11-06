alert('work!');
function add(){
	
	var comments = document.getElementById('comment').value;
	/*creo una variable , rescato el comentario y lo agrego a valor*/
	
	/*validar espacio vacio*/
	if (comments.length == 0){
		alert('Comentario Vacio \n ingresa un comentario Valido.')
	}else{
		
	/*limpio placeHOlder*/
	document.getElementById('comment').value="";

//Cre un div donde van a estar mis twt
	var newComments = document.createElement('div');
	var cont = document.getElementById('cont');
	/*creando input de punto checkbox*/
		/*creando parrafo*/
	var paragraph = document.createElement('p');
	/*agregando classe*/
	paragraph.classList.add('tweet');
	 var nodoText=document.createTextNode(comments);
	 /*AÑADIR NODO DE TEXTO AL ELEMENTO*/
	 paragraph.appendChild(nodoText);



/*ESTOS ELEMENTOS VAN A EL DIV newComments */


	var trash=document.createElement('i');
	/* diciendo que trash es una clase*/
	trash.classList.add('fa','fa-trash','trash');

	/*agregamos los hijos al padre o caja de comentarios*/
	newComments.appendChild(paragraph);
	newComments.appendChild(trash);

	/*pasar todo al lo creado a el div cont*/

	cont.appendChild(newComments);

	/*vamos a hacer un esuchador CON ADD EVENT LISTENER*//*un EVENTO*/
	/*eliminar un comentario*/
	/*llama a cont luego le elimina todo el comentario alojado en newComments*/
	/*le pido que al dar click a trash se ejecute la funcion*/
	trash.addEventListener('click',function(){
		alert('Deseas elimar este comentario?')
		cont.removeChild(newComments);
	})

	}
}