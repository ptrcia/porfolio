/*
Tarea final - Fundamentos de la programación P5.JS
Patricia S. Gracia
*/

var cursor;
var water; //declaramos el sonido del agua
var clickMouse; //declaramos el sonido del click


function preload() {
//Cargamos las imágenes y los sonidos
  cursor = loadImage('cursor2.png'); //cursor
  water = loadSound('water.mp3'); //sonido de agua
  clickMouse = loadSound('MouseClick.mp3'); //sonido de el click


  img00=loadImage('negro.jpg'); //imagen de fondo que evita que haya problemas de interferencias con la imagen de la tele y las demás
  img0=loadImage('tele.png'); //imagen del marco de la tele que envuelve las demás
  img = loadImage('img1.jpg'); 
  img1 = loadImage('img1.jpg'); 
  img2 = loadImage('img2.jpg'); 
  img3 = loadImage('img3.jpg'); 
  img4 = loadImage('img4.jpg'); 
  img5 = loadImage('img5.jpg');
  img6 = loadImage('img6.jpg');
  img7 = loadImage('img7.jpg');
  img8 = loadImage('img8.jpg');
}

function setup() {
  //setup general
  noCursor(); //Quitamos el cursor normal para que no interfiera con el nuestro
  createCanvas(1350, 750);
  water.setVolume(0.1);
  clickMouse.setVolume(0.2);


// setup de los clicks

//click 00
//Este será el último mensaje dónde vendrán las referencias
click00 = new Clickable();  
click00.x = 250;
click00.y = 550;
click00.width = 500;
click00.height = 60;
click00.cornerRadius = 5;       
click00.strokeWeight = 1;    
click00.stroke = "#000000";   
click00.text = "Imágenes e información recogidas de: cartagenaantigua.wordpress.com";       
click00.textColor = "#000000";  
click00.textSize = 15;           
click00.textFont = "sans-serif"; 
click00.textScaled = false;

click00.onHover = function () {
  this.color = "#E9ECEC";}
click00.onPress = function(){
  clickMouse.play();
  img = img1;}

//click 0
  click0 = new Clickable();
  click0.x = 250;
  click0.y = 500;
  click0.width = 500;
  click0.height = 50;
  click0.cornerRadius = 5;       
  click0.strokeWeight = 1;    
  click0.stroke = "#000000";   
  click0.text = "La Gran Riada, Cartagena, 1919.";       
  click0.textColor = "#000000";  
  click0.textSize = 15;           
  click0.textFont = "sans-serif"; 
  click0.textScaled = false;
  //click0.color = "#FFFFFF"; 

  click0.onHover = function () { //Aquí le decimos que cuando se pose encima cambie a este color
    this.color = "#E9ECEC";}
  click0.onPress = function(){ //Y aquí le decimos que hace cuanod presionamos
    clickMouse.play();
    img = img2;
    water.loop();}

//click1
  click1 = new Clickable();
  click1.x = 250;
  click1.y = 550;
  click1.width = 500;
  click1.height = 50;
  click1.cornerRadius = 5;       //Radio de la caja
  click1.strokeWeight = 1;        //Borde de la caja
  click1.stroke = "#000000";      //Color del borde
  click1.text = "Patricia S. Gracia Artero";       //Texto de la caja
  click1.textColor = "#000000";   //Color del texto
  click1.textSize = 15;           //Tamaño de la caja
  click1.textFont = "sans-serif"; //Fuente de letra
  click1.textScaled = false;       //Necesidad de escalar
  
  click1.onHover = function () {
    this.color = "#E9ECEC";}
  click1.onPress = function(){
    clickMouse.play();
    img = img2;}

//click 2
  click2 = new Clickable();
  click2.x = 250;
  click2.y = 550;
  click2.width = 500;
  click2.height = 60;
  click2.cornerRadius = 5;       
  click2.strokeWeight = 1;    
  click2.stroke = "#000000";   
  click2.text = "Con esto poco a poco llegué al puerto...";       
  click2.textColor = "#000000";  
  click2.textSize = 15;           
  click1.textFont = "sans-serif"; 
  click2.textScaled = false;       
   
  click2.onHover = function () {
   this.color = "#E9ECEC";}
  click2.onPress = function(){
    clickMouse.play();
    img = img3;}

//click3
  click3 = new Clickable();
  click3.x = 250;
  click3.y = 550;
  click3.width = 500;
  click3.height = 60;
  click3.cornerRadius = 5;       
  click3.strokeWeight = 1;        
  click3.stroke = "#000000";
  click3.text = "...a quien los de Cartago dieron nombre...";
  click3.textColor = "#000000";  
  click3.textSize = 15;
  click3.textFont = "sans-serif";
  click3.textScaled = false; 
    
  click3.onHover = function () {
    this.color = "#E9ECEC";}
  click3.onPress = function(){
    clickMouse.play();
    img = img4;}

//click4
  click4 = new Clickable();
  click4.x = 250;
  click4.y = 550;
  click4.width = 500;
  click4.height = 60;
  click4.cornerRadius = 5;
  click4.strokeWeight = 1;        
  click4.stroke = "#000000";
  click4.text = "...cerrado a todos vientos y encubierto...";
  click4.textColor = "#000000";  
  click4.textSize = 15;
  click4.textFont = "sans-serif";
  click4.textScaled = false; 
  
  click4.onHover = function () {
    this.color = "#E9ECEC";}
  click4.onPress = function(){
    clickMouse.play();
    img = img5;}

//click5
  click5 = new Clickable();
  click5.x = 250;
  click5.y = 550;
  click5.width = 500;
  click5.height = 60;
  click5.cornerRadius = 5;
  click5.strokeWeight = 1;        
  click5.stroke = "#000000";
  click5.text = "...y a cuyo claro y singular renombre...";
  click5.textColor = "#000000";  
  click5.textSize = 15;
  click5.textFont = "sans-serif";
  click5.textScaled = false;

  click5.onHover = function () {
    this.color = "#E9ECEC";}
  click5.onPress = function(){
    clickMouse.play();
    img = img6;}

//click6
  click6 = new Clickable();
  click6.x = 250;
  click6.y = 550;
  click6.width = 500;
  click6.height = 60;
  click6.cornerRadius = 5;
  click6.strokeWeight = 1;        
  click6.stroke = "#000000";
  click6.text = "...se postran cuantos puertos el mar baña...";
  click6.textColor = "#000000";  
  click6.textSize = 15;
  click6.textFont = "sans-serif";
  click6.textScaled = false; 

  click6.onHover = function () {
    this.color = "#E9ECEC";}
  click6.onPress = function(){
    clickMouse.play();
    img = img7;}

  //click7
  click7 = new Clickable();
  click7.x = 250;
  click7.y = 550;
  click7.width = 500;
  click7.height = 60;
  click7.cornerRadius = 5;
  click7.strokeWeight = 1;        
  click7.stroke = "#000000";
  click7.text = "...descubre el sol y ha navegado el hombre.";
  click7.textColor = "#000000";  
  click7.textSize = 15;
  click7.textFont = "sans-serif";
  click7.textScaled = false; 

  click7.onHover = function () {
    this.color = "#E9ECEC";}
  click7.onPress = function(){
    clickMouse.play();
    img = img8;
  }
  img = img1;
}

function draw (){
  image(img00, -350, -500, 2050, 1500);  //imagen de fondo negro
  image(img, 79, 75, 900, 638);  //imagen de fondo 1
  image(img0, -350, -500, 2050, 1500);  //imagen de fondo tele

  if(img == img1){
    click0.draw();
    click1.draw()} //botón de la librería p5.jsclickable
  if(img == img2){
    click2.draw();}
  if(img == img3){
    click3.draw();}
  if(img == img4){
    click4.draw();}
  if(img == img5){
    click5.draw();}
  if(img == img6){
    click6.draw();}
  if(img == img7){
    click7.draw();}
  if(img == img8){
    click00.draw();}

  //text(mouseX + ", " + mouseY, 30, 30) // coordenadas en la pantalla
  image(cursor,mouseX,mouseY,20,20); //imagen del cursor
}