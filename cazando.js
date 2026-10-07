let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

let gatoX = 0;
let gatoY = 0;

let comidaX = 0;
let comidaY = 0;

const ANCHO_GATO = 50;
const ALTO_GATO = 50;

const ANCHO_COMIDA = 20;
const ALTO_COMIDA = 20;



function iniciarJuego(){
    // centrar rectangulo en el canvas de 500x500
    gatoX = (canvas.width - ANCHO_GATO) / 2;   // (500 - 50) / 2 = 225
    gatoY = (canvas.height - ALTO_GATO) / 2;   // (500 - 50) / 2 = 225

    //comida en la esquina inferior derecha
    comidaX = canvas.width - ANCHO_COMIDA;     // 500 - 20 = 480
    comidaY = canvas.height - ALTO_COMIDA;     // 500 - 20 = 480

    graficarGato();
    graficarComida();
}

function graficarGato(){
    // rectángulo
    //let ancho = 50;
    //let alto = 50;    

    // dibujar rectángulo azul
    //ctx.fillStyle = "blue";       // Color de relleno
   //ctx.fillRect(gatoX, gatoY, ANCHO_GATO, ALTO_GATO);
    graficarRectangulo(gatoX, gatoY, ANCHO_GATO, ALTO_GATO, "blue")
}

function graficarComida(){ 
    //cuadrado
    //let tamano = 20;

    // esquina superior izquierda
    //comidaX = 0;
    //comidaY = 0;

    // dibujar el cuadrado
    //ctx.fillStyle = "red";
    //ctx.fillRect(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA);
    graficarRectangulo(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA, "red")
}

function graficarRectangulo(x, y, ancho, alto, color){
    ctx.fillStyle = color;       // Color de relleno
    ctx.fillRect(x, y, ancho, alto); //dibuja rectangulo
}

//limpiar canvas
function limpiarCanva() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


//mover a la izquierda 10px
function moverIzquierda() {
    //restar 10 a gatoX
    gatoX = gatoX - 10;
    
    // Considerar límites (opcional pero recomendado)
    if (gatoX < 0) {
        gatoX = 0; // no salga del canvas
    }
    
    //llamar a limpiarCanva
    limpiarCanva();
    
    // llamar a dibujarGato
    graficarGato();
    
    // comida se borra al limpiar el canvas, vuelve a dibujarla
    graficarComida();
}


//mover a la derecha 10px
function moverDerecha() {
    //restar 10 a gatoX
    gatoX = gatoX + 10;
    
    // Considerar límites (opcional pero recomendado)
    if (gatoX < 0) {
        gatoX = 0; // no salga del canvas
    }
    
    //llamar a limpiarCanva
    limpiarCanva();
    
    // llamar a dibujarGato
    graficarGato();
    
    // comida se borra al limpiar el canvas, vuelve a dibujarla
    graficarComida();
}


//mover a la arriba 10px
function moverArriba() {
    //restar 10 a gatoX
    gatoY = gatoY - 10;
    
    // Considerar límites (opcional pero recomendado)
    if (gatoY < 0) {
        gatoY = 0; // no salga del canvas
    }
    
    //llamar a limpiarCanva
    limpiarCanva();
    
    // llamar a dibujarGato
    graficarGato();
    
    // comida se borra al limpiar el canvas, vuelve a dibujarla
    graficarComida();
}


//mover a la abajo 10px
function moverAbajo() {
    //restar 10 a gatoX
    gatoY = gatoY + 10;
    
    // Considerar límites (opcional pero recomendado)
    if (gatoY < 0) {
        gatoY = 0; // no salga del canvas
    }
    
    //llamar a limpiarCanva
    limpiarCanva();
    
    // llamar a dibujarGato
    graficarGato();
    
    // comida se borra al limpiar el canvas, vuelve a dibujarla
    graficarComida();
}