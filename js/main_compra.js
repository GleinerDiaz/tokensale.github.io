function comprarFicho() {
    document.querySelector("#content").innerHTML = "";
    let cadena = "<p class=\"compraRealizada\">Compra realizada con exito!!, " + 
      "no puede comprar mas fichos.</p>"
    document.querySelector("#content").innerHTML = cadena;
    cadena = "<h1 id=\"parrafoMod\">Quedan 1459 fichos, gracias por tu compra" + 
     " <i class=\"fas fa-smile-wink\"></i>.</h1>";
    document.querySelector("#parrafoMod").innerHTML = cadena;
    document.querySelector("#comprar").disabled = true
}