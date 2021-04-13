
// EM F>LT> UN EVENT O SIENETW

//AUDIO
var audio = document.getElementById("myAudio"); 
function playAudio() { 
  audio.play();
  audio.volume = 0.2; 
} 
function pauseAudio() { 
  audio.pause(); 
} 
//LISTA DE BOTONES CON SUS FUNCIONES

var bot1 = document.getElementById("bot1"); //declarar la variable
bot1.addEventListener("click", img1); //hacer event liseners y sustiturie
function img1(){//hacer la funcion
  document.getElementById('test').src='media/img1.jpg' //Cambiamos la Imagen
  document.getElementById('test').title="Zona del Almarjal" //Cambiamos su título
  document.getElementById('demo').innerHTML="Con esto poco a poco llegué al puerto..." //Campiamos el texto de debajo
  document.getElementById('demo').style.fontFamily= "'Dancing Script', cursive"; //Aqui tambiamos el estilo para cuando salga el poema y así se diferencie
  document.getElementById('mapa').src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7613.088632856413!2d-0.9754118514961988!3d37.62183314942126!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa23f63ae2a39ef53!2sAlmarjal%20de%20Cartagena!5e0!3m2!1ses!2ses!4v1607191280864!5m2!1ses!2ses" //Cambiamos la ubicación del mapa a la de la imagen
}
var bot2 = document.getElementById("bot2");
bot2.addEventListener("click", img2);
function img2(){
  document.getElementById('test').src='media/img2.jpg' 
  document.getElementById('test').title="Calle Ángel Bruna"
  document.getElementById('demo').innerHTML="...a quien los de Cartago dieron nombre,"
  document.getElementById('demo').style.fontFamily= "'Dancing Script', cursive";
  document.getElementById('mapa').src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3160.6633182165087!2d-0.9873938847524386!3d37.61008212939084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd634221060b17fd%3A0x5780f569a806d65e!2sCalle%20%C3%81ngel%20Bruna%2C%20Cartagena%2C%20Murcia!5e0!3m2!1ses!2ses!4v1607191519350!5m2!1ses!2ses"

}
var bot3 = document.getElementById("bot3");
bot3.addEventListener("click", img3);
function img3(){
  document.getElementById('test').src='media/img3.jpg' 
  document.getElementById('test').title="Calle del Carmen"
  document.getElementById('demo').innerHTML="cerrado a todos vientos y encubierto"
  document.getElementById('demo').style.fontFamily= "'Dancing Script', cursive";
  document.getElementById('mapa').src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3160.9040635586375!2d-0.9919486847525659!3d37.60441682971568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6342250ec3333b%3A0xd2b8febbce68c074!2sCalle%20Carmen%2C%20Cartagena%2C%20Murcia!5e0!3m2!1ses!2ses!4v1607195497533!5m2!1ses!2ses"
}
var bot4 = document.getElementById("bot4");
bot4.addEventListener("click", img4);
function img4(){
  document.getElementById('test').src='media/img4.jpg' 
  document.getElementById('test').title="Fonda Francesa"
  document.getElementById('demo').innerHTML="y a cuyo claro y sin igual renombre..."
  document.getElementById('demo').style.fontFamily= "'Dancing Script', cursive";
  document.getElementById('mapa').src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238.74751335095!2d-0.9857213819595853!3d37.59943538351126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6342291c076503%3A0x9193a1879cc19781!2sCalle%20Ca%C3%B1%C3%B3n%2C%2030202%20Cartagena%2C%20Murcia!5e0!3m2!1ses!2ses!4v1607195938242!5m2!1ses!2ses"
}
var bot5 = document.getElementById("bot5");
bot5.addEventListener("click", img5);
function img5(){
  document.getElementById('test').src='media/img5.jpg' 
  document.getElementById('test').title="Ayuntamiento Lateral"
  document.getElementById('demo').innerHTML="...se postran cuantos puertos el mar baña,"
  document.getElementById('demo').style.fontFamily= "'Dancing Script', cursive";
  document.getElementById('mapa').src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1580.5747642072386!2d-0.9862250522533571!3d37.598639719960474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6342293ff90b53%3A0xec4b40073bc96f75!2sPlaza%20H%C3%A9roes%20de%20Cavite%2C%2030201%20Cartagena%2C%20Murcia!5e0!3m2!1ses!2ses!4v1607196448466!5m2!1ses!2ses"

}
var bot6 = document.getElementById("bot6");
bot6.addEventListener("click", img6);
function img6(){
  document.getElementById('test').src='media/img6.jpg' 
  document.getElementById('test').title="Plaza del Ayuntamiento"
  document.getElementById('demo').innerHTML="...descubre el sol y ha navegado el hombre."
  document.getElementById('demo').style.fontFamily= "'Dancing Script', cursive";
  document.getElementById('mapa').src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d834.0201382626783!2d-0.9856055352765412!3d37.59892720780518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6342293d724677%3A0x2592865a6fea4912!2sPlaza%20Ayuntamiento%2C%2030202%20Cartagena%2C%20Murcia!5e0!3m2!1ses!2ses!4v1607196384386!5m2!1ses!2ses"

}
var bot7 = document.getElementById("bot7");
bot7.addEventListener("click", img7);
function img7(){
  document.getElementById('test').src='media/img7.jpg' 
  document.getElementById('test').title="Calle Mayor"
  document.getElementById('demo').innerHTML="Miguel de Cervantes Saavedra"
  document.getElementById('demo').style.fontFamily= "Padauk, sans-serif";
  document.getElementById('mapa').src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2772.8037321717597!2d-0.9882565756391413!3d37.600414648700855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd634228d0920bbf%3A0xa34572a4e9402366!2sCalle%20Mayor%2C%2030201%20Cartagena%2C%20Murcia!5e0!3m2!1ses!2ses!4v1607196318691!5m2!1ses!2ses"
}
var bot8 = document.getElementById("bot8");
bot8.addEventListener("click", img8);
function img8(){
  document.getElementById('test').src='media/img8.jpg' 
  document.getElementById('test').title="Cerro Despeñaperros"
  document.getElementById('demo').innerHTML="1614"
  document.getElementById('demo').style.fontFamily= "Padauk, sans-serif";
  document.getElementById('mapa').src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3160.984703129891!2d-0.9808417847526402!3d37.60251902982436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63418620fdf729%3A0x3f178f7813e0cc49!2sCerro%20Despe%C3%B1aperros!5e0!3m2!1ses!2ses!4v1607196259398!5m2!1ses!2ses"
}
// Texto inicial al pulsar
document.getElementById("demo").onclick = function() {myFunction()};
function myFunction() {
  document.getElementById("demo").innerHTML = "Poema de Miguel de Cervantes a la ciudad de Cartagena";
}
//event listener dobleclick con condicional
const h2 = document.getElementById('h2');
h2.addEventListener('dblclick', dobleck); 
function dobleck(){
  if(h2.innerHTML === 'Cartagena, 1919.'){ //Si h2 tiene escrito esto entonces al hacer doble click lo cambia
    h2.innerHTML = 'Autora: Patricia Gracia Artero' //es sustituido por eso
  }else{
h2.innerHTML = 'Cartagena, 1919.' //y en el caso contrario lo sutituye por esto.
  }
};