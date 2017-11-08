
//FUNCION AL HACER CLICK
function add(){

	/*creo una variable , rescato el comentario y lo agrego a valor*/
	var comments = document.getElementById('comment').value;	
	/*validar espacio vacio , */
	if(comments==null || comments.length==0 || comments.length >140 ){
    alert(" ERROR!! Ingresa un comentario Valido");
    return false;
  	} //else if ( document.getElementById("count").value <= 0 ){
  		//alert('hola')

  	//CONTADOR limpio,   /*limpio placeHOlder*/
  	document.getElementById('comment').value="";
  	var num = document.getElementById("count");
   	num.value= 140;
   	num.style.color = "black";


//Cre un div donde van a estar mis twt
	var newComments = document.createElement('div');
	var cont = document.getElementById('cont');
	/* parrafo*/
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
	/*agregamos los hijos al la caja de comentarios*/
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
	});
	
};

//CONTADOR 
	var contador2= function(comment,counter) { 
        counter.value = 140 - comment.value.length;
		if (counter.value > 80 && counter.value <=140) {
		   counter.style.color = "#2980B9"
		 }else if (counter.value > 40 && counter.value <=80) {
		   counter.style.color = "#7FB3D5"
		 }else if (counter.value > 0 && counter.value <=40) {
		   counter.style.color = "#A9CCE3"
		 }else{
		   counter.style.color = "#D4E6F1";
		 }

	};

	