document.getElementById("clickMe").onclick = test;
function test(){
    var h=document.getElementById("h").value;
    var m=document.getElementById("m").value;
    var formula = m/(h*h);
    var resultado;
    var mostrar = "error ingrese valores validos";
    if (h && m) {
        resultado = formula;
        mostrar = resultado.toFixed(1);
    }
    alert(mostrar);
}