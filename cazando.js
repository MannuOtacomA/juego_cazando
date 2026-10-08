let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

let gatoX = 0;
let gatoY = 0;

let comidaX = 0;
let comidaY = 0;

let puntaje  = 0;

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
    
    // límites 
    if (gatoX < 0) {
        gatoX = 0; // no salga del limite izquierdo
    }
    
    //llamar a limpiarCanva
    limpiarCanva();
    
    // llamar a dibujarGato
    graficarGato();
    
    // comida se borra al limpiar el canvas, vuelve a dibujarla
    graficarComida();

    detectarColision();
}


//mover a la derecha 10px
function moverDerecha() {
    //restar 10 a gatoX
    gatoX = gatoX + 10;     

    //no pase el límite derecho
    if (gatoX + ANCHO_GATO > canvas.width) {
        // Si se pasa, lo regresa al borde derecho
        gatoX = canvas.width - ANCHO_GATO; 
    }
    
    //llamar a limpiarCanva
    limpiarCanva();
    
    // llamar a dibujarGato
    graficarGato();
    
    // comida se borra al limpiar el canvas, vuelve a dibujarla
    graficarComida();

    detectarColision();
}


//mover a la arriba 10px
function moverArriba() {
    //restar 10 a gatoX
    gatoY = gatoY - 10;
    
    // considerar límites 
    if (gatoY < 0) {
        gatoY = 0; // no salga del limite
    }
    
    //llamar a limpiarCanva
    limpiarCanva();
    
    // llamar a dibujarGato
    graficarGato();
    
    // comida se borra al limpiar el canvas, vuelve a dibujarla
    graficarComida();

    detectarColision();
}


//mover a la abajo 10px
function moverAbajo() {
    //restar 10 a gatoX
    gatoY = gatoY + 10;
    
    // considerar límites
   /* if (gatoY < 0) {
        gatoY = 0; // no salga del canvas
    }*/

    if (gatoY + ALTO_GATO > canvas.height) {
        gatoY = canvas.height - ALTO_GATO;
    }
    
    //llamar a limpiarCanva
    limpiarCanva();
    
    // llamar a dibujarGato
    graficarGato();
    
    // comida se borra al limpiar el canvas, vuelve a dibujarla
    graficarComida();

    detectarColision();
}


// detectar colisión gato y comida
function detectarColision() {
    // ver si los rectángulos se superponen
    if (gatoX < comidaX + ANCHO_COMIDA &&
        gatoX + ANCHO_GATO > comidaX &&
        gatoY < comidaY + ALTO_COMIDA &&
        gatoY + ALTO_GATO > comidaY) {
        
        alert("Miauu...El gato comio la comida...");
        //Incrementar el puntaje y mostrarlo en pantalla.
        mostrarTexto("puntos",puntaje+=1)
        // aparece comida en lugar aleatorio
        comidaX = Math.random() * (canvas.width - ANCHO_COMIDA);
        comidaY = Math.random() * (canvas.height - ALTO_COMIDA);
        
        // Limpiar y redibujar todo
        limpiarCanva();
        graficarGato();
        graficarComida();
    }
}


