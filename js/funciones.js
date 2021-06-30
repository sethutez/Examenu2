

function edad(numero1){
	let edad;
	edad=parseFloat(numero1);

	if(edad<18){
		document.getElementById("edad1").innerHTML="<h1>Eres menor de edad</h1>";
	}else if(edad>=18&&edad<=59){
		document.getElementById("edad1").innerHTML="<h1>Eres Mayor de edad</h1>";

	}else if(edad>=60&&edad<120){
        document.getElementById("edad1").innerHTML="<h1>Eres un adulto mayor</h1>";

	}else{
		 document.getElementById("edad1").innerHTML="<h1>¿Sigues viv@?</h1>";

	}
	
	
	
}
	function facto(numero1){
		let num1;
		var n;
		var res;
		num1=parseFloat(numero1)
		n=numero1;
		resultado=num1;
		while(n>1){
			n--;
			resultado=resultado*n;

		}
		

		
		//alert("El factorial es: "+resultado)
		//document.getElementById("facto").innerHTML="<h1>El factorial de " + resultado + "</h1>"
		document.getElementById("facto").innerHTML="<h1>El factorial de:  " + numero1 +  " es : "+resultado+"</h1>";

	}



function mes(numero1){
	let op;
	op=parseFloat(numero1);
	switch(op){
		case 1:
		document.getElementById("mes").innerHTML="<h1>El mes es: " + "Enero" +"</h1>";
		break;
		case 2:
		document.getElementById("mes").innerHTML="<h1>El mes es: " + "Febrero" +"</h1>";
		break;	
	
		case 3:
		document.getElementById("mes").innerHTML="<h1>El mes es: " + "Marzo" +"</h1>";
		break;
	
		case 4:
		document.getElementById("mes").innerHTML="<h1>El mes es: " + "Abril" +"</h1>";
		break;
	
		case 5:
		document.getElementById("mes").innerHTML="<h1>El mes es: " + "Mayo" +"</h1>";
		break;

		case 6:
		document.getElementById("mes").innerHTML="<h1>El mes es:: " + "Junio" +"</h1>";
		break;
	
		case 7:
		document.getElementById("mes").innerHTML="<h1>El mes es:: " + "Julio" +"</h1>";
		break;
		case 8:
		document.getElementById("mes").innerHTML="<h1>El mes es: " + "Agosto" +"</h1>";
		break;		
		case 9:
		document.getElementById("mes").innerHTML="<h1>El mes es: " + "Septiembre" +"</h1>";
		break;		
		case 10:
		document.getElementById("mes").innerHTML="<h1>El mes es:" + "Octubre" +"</h1>";
		break;	
		case 11:
		document.getElementById("mes").innerHTML="<h1>El mes es: " + "Noviembre " +"</h1>";
		break;	
		case 12:
		document.getElementById("mes").innerHTML="<h1>El mes es: " + "Diciembre" +"</h1>";
		break;
		default:
		document.getElementById("mes").innerHTML="<h1>Ya no hay meses bro</h1>";
		break;



	}
	

	
}

function iva(numero1){
	let n1,ivas,res;
	n1=parseInt(numero1);
	ivas=n1*.16;
	res=n1+ivas;
	
	document.getElementById("iva").innerHTML="<h1>Cantidad " + numero1 +  "<br> IVA(16%) : "+ivas+" <br> Total: "+res+"</h1>";


	
}


function validarUsuario(user,pass){
	var usuario=user;
	var passwd=pass;

	if(usuario=="admin" && passwd=="adminUT3N"){
		document.getElementById("resultado").innerHTML="";
		alert("Bienvenido a mi sistema!");
	}else{
		document.getElementById("resultado").innerHTML="Error en usuario y/o Contraseña" + user;
	}


}




