let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

function graficarGato(){
    // rectángulo
    let ancho = 50;
    let alto = 50;

    // centrar rectangulo en el canvas de 500x500
    let x = (canvas.width - ancho) / 2;   // (500 - 50) / 2 = 225
    let y = (canvas.height - alto) / 2;   // (500 - 50) / 2 = 225

    // rectángulo azul
    ctx.fillStyle = "blue";       // Color de relleno
    ctx.fillRect(x, y, ancho, alto);

}