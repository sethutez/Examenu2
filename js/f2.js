function iva(cantidad){
	var iv= parseInt(cantidad);
	var caliva=parseInt(iv * .16);
	var total= caliva;
    document.getElementById("iva").innerHTML="<h1>Total del IVA es:" + total + "</h1>";
}