const seccionBatalla = document.getElementById('campo-batalla');//se declaran las variables de los botones y los mensajes de batallas. Extrae del ID todos los eventos y propiedades
const msjBatalla = document.getElementById('msj-batalla');
const imgAtaqueJugador = document.getElementById('img-ataque-jugador');
const imgAtaquePc = document.getElementById('img-ataque-pc');
const btnCorazon = document.getElementById('btn-corazon');
const btnRosa = document.getElementById('btn-rosa');
const btnFuego = document.getElementById('btn-fuego');
const defensa1 = document.getElementById('defensa1');
const defensa2 = document.getElementById('defensa2');
const defensa3 = document.getElementById('defensa3');
let barraVidaMojo = document.querySelector('.vida2');//selecciona el id o clase 
let barraVidaBombon = document.querySelector('.vida');
let mensajesAtaDe = document.getElementById('mensajesAtaDe')

let ataqueJugador;//se declaran variables que se van a utilizar mas adelante
let defensaJugador;
let opcionPc;
let imgJugador;
let imgPc;
let ataqueMojo;
let defensaMojo;
let vidaBombon = 100;
let vidaMojo = 100;

const imagenes = [//se crea un arreglo para nombrar los ataques y las defensas. Se hace la busqueda con sus imagenes correpondientes
    {
        name: "corazon",
        url: "corazon.jpg" 
    },
    {
        name: "rosa",
        url: "rosa.jpg" 
    },
    {
        name: "fuego",
        url: "fuego.jpg"
    }
];

mensajesAtaDe.innerHTML = "Elige un ataque";
desactivarDefensa();

function iniciar(){//Lo que hace es que si se recarga la pagina desaparece el contenido de lo que se ha jugado
    seccionBatalla.style.display = 'none';
};

btnCorazon.addEventListener('click', function(){//Llamos los botones que representan los ataques, se les agrega el evento de click para asignarle un valor al ataque que elijan. Luego se llama a la funcion opcPC
    ataqueJugador = "corazon";
    desactivarAtaques();
    activarDefensa();
    defensaPc();
});

btnRosa.addEventListener('click', function(){
    ataqueJugador = "rosa";
    desactivarAtaques();
    activarDefensa();
    defensaPc();
});

btnFuego.addEventListener('click', function(){
    ataqueJugador = "fuego";
    desactivarAtaques();
    activarDefensa();
    defensaPc();
})
defensa1.addEventListener('click', function(){//Llamos los botones que representan los ataques, se les agrega el evento de click para asignarle un valor al ataque que elijan. Luego se llama a la funcion opcPC
    defensaJugador = "corazon";
    desactivarDefensa();
    activarAtaques();
    ataquePc();
});

defensa2.addEventListener('click', function(){
    defensaJugador = "rosa";
    desactivarDefensa();
    activarAtaques();
    ataquePc();
});

defensa3.addEventListener('click', function(){
    defensaJugador = "fuego";
    desactivarDefensa();
    activarAtaques();
    ataquePc();
})

function desactivarAtaques() {
    btnCorazon.classList.add('invisible');
    btnRosa.classList.add('invisible');
    btnFuego.classList.add('invisible');
}

function activarAtaques() {
    btnCorazon.classList.remove('invisible');
    btnRosa.classList.remove('invisible');
    btnFuego.classList.remove('invisible');
    mensajesAtaDe.innerHTML = "Elige un ataque";
}

function desactivarDefensa() {
    defensa1.classList.add('invisible');
    defensa2.classList.add('invisible');
    defensa3.classList.add('invisible');
}

function activarDefensa() {
    defensa1.classList.remove('invisible');
    defensa2.classList.remove('invisible');
    defensa3.classList.remove('invisible');
    mensajesAtaDe.innerHTML = "Elige una defensa";
    // Agrega esta línea para ocultar los botones de ataque cuando se muestren los botones de defensa
}
function ataquePc() {
    var opcionesAtaque = ["corazon", "rosa", "fuego"];
    var aleatorio = nAleatorio();
    ataqueMojo = opcionesAtaque[aleatorio];
    calcularDanoBombon();
    verificarFinJuego();
}

function defensaPc() {
    var opcionesDefensa = ["corazon", "rosa", "fuego"];
    var aleatorio = nAleatorio();
    defensaMojo = opcionesDefensa[aleatorio];
    calcularDanoMojo();
    verificarFinJuego();
 // Agrega esta línea para ocultar los botones de defensa después de seleccionar una defensa
}

function calcularDanoMojo() {//condicional para ver el daño de mojojojo
    if (
        (ataqueJugador === "corazon" && defensaMojo === "rosa") ||
        (ataqueJugador === "fuego" && defensaMojo === "corazon") ||
        (ataqueJugador === "rosa" && defensaMojo === "fuego")
    ) {
        vidaMojo -= 20;
        msjBatalla.textContent = "Bombon ataca con " + ataqueJugador + " Mojo jojo se defiende con " + defensaMojo +" ¡Mojo jojo pierde 20 puntos de vida!";
        barraVidaMojo.style.width = vidaMojo + '%';
    } else if (
        (ataqueJugador === "corazon" && defensaMojo === "corazon") ||
        (ataqueJugador === "rosa" && defensaMojo === "rosa") ||
        (ataqueJugador === "fuego" && defensaMojo === "fuego")
    ) {
        vidaMojo -= 10;
        msjBatalla.textContent = "Bombon ataca con " + ataqueJugador + " Mojo jojo se defiende con " + defensaMojo + " ¡Mojo jojo pierde 10 puntos de vida!";
        barraVidaMojo.style.width = vidaMojo + '%';
    } else {
        msjBatalla.textContent = "Bombon ataca con " + ataqueJugador + " Mojo jojo se defiende con " + defensaMojo + " ¡Mojo jojo no pierde puntos de vida!";
        barraVidaMojo.style.width = vidaMojo + '%';
    }
    addImagenes();
}

function calcularDanoBombon() {//condicional para ver el daño de bombon
    if (
        (ataqueMojo === "corazon" && defensaJugador === "rosa") ||
        (ataqueMojo === "fuego" && defensaJugador === "corazon") ||
        (ataqueMojo === "rosa" && defensaJugador === "fuego")
    ) {
        vidaBombon -= 20;
        msjBatalla.textContent = "Mojo jojo ataca con " + ataqueMojo + " Bombon se defiende con " + defensaJugador + " ¡Bombon pierde 20 puntos de vida!";
        barraVidaBombon.style.width = vidaBombon + '%';
    } else if (
        (ataqueMojo === "corazon" && defensaJugador === "corazon") ||
        (ataqueMojo === "rosa" && defensaJugador === "rosa") ||
        (ataqueMojo === "fuego" && defensaJugador === "fuego")
    ) {
        vidaBombon -= 10;
        msjBatalla.textContent = "Mojo jojo ataca con " + ataqueMojo + " Bombon se defiende con " + defensaJugador + " ¡Bombon pierde 10 puntos de vida!";
        barraVidaBombon.style.width = vidaBombon + '%';
    } else {
        msjBatalla.textContent = "Mojo jojo ataca con " + ataqueMojo + " Bombon se defiende con " + defensaJugador + " ¡Bombon no pierde puntos de vida!";
        barraVidaBombon.style.width = vidaBombon + '%';
    }
    addImagenes();
}

function verificarFinJuego() {
    if (vidaBombon <= 0 && vidaMojo <= 0) {
        msjBatalla.textContent = "¡Es un empate!";
        desactivarAtaques();//Desactiva al final del juego para que no mueran mas los jugadores
        desactivarDefensa();
    } else if (vidaBombon <= 0) {
        msjBatalla.textContent = "¡Mojo jojo gana!";
        desactivarAtaques();
        desactivarDefensa();
    } else if (vidaMojo <= 0) {
        msjBatalla.textContent = "¡Bombon gana!";
        desactivarAtaques();
        desactivarDefensa();
    }
}


function nAleatorio(){//Numero aleatorio
    let n = Math.floor(Math.random() * 3);
    return n;
}


function addImagenes(){//Se crea un ciclo for para recorrer el arreglo que se creo y se compara la variable opcion jugador y opcion pc. Inserta la imagen en el campo de batalla
    for(let i=0;i<imagenes.length;i++){
        if(ataqueJugador == imagenes[i].name){
            imgJugador = imagenes[i].url;
            var inserta = `<img class="img-batalla" src=${imgJugador} alt="">`;
            imgAtaqueJugador.innerHTML = inserta;
        };

        if(defensaJugador == imagenes[i].name){
            imgJugador = imagenes[i].url;
            var inserta = `<img class="img-batalla" src=${imgJugador} alt="">`;
            imgAtaqueJugador.innerHTML = inserta;
        };

        if(defensaMojo == imagenes[i].name){
            imgPc = imagenes[i].url;
            var inserta = `<img class="img-batalla" src=${imgPc} alt="">`;
            imgAtaquePc.innerHTML = inserta;
        };
        
        if(ataqueMojo == imagenes[i].name){
            imgPc = imagenes[i].url;
            var inserta = `<img class="img-batalla" src=${imgPc} alt="">`;
            imgAtaquePc.innerHTML = inserta;
        };
        
    };


    seccionBatalla.style.display = 'flex';
    
};


window.addEventListener('load', iniciar);