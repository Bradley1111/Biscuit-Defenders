let en1;
let c;
let p;
sb = [255,255,255]
gs = 1
btc = [255,255,255]
btc2 = [255,255,255]
dif = 1

//demo 1 enemy1

en1h = 10
en1y = 400
en1x = 50
en1xsp = 2
en1hp = 2

//demo 1 enemy2

en2h = 10
en2y = 400
en2x = -100
en2xsp = 2
en2hp = 2

//build mode

bm = 0

//tower 1 place var

t1x = -100
t1y = -100

//tower 1 place var

t2x = -100
t2y = -100

//towers placed

tp = 0

//hp

hp = 100

















function preload() {
en1 = loadImage("en1.png")
c = loadImage("Cook.png")
p = loadImage("Path 1.png")
}


function setup() {
createCanvas(windowWidth,windowHeight -50);



}



function draw() {

//main menu
if (gs === 1) {

//Menu Back ground

background (205,205,205)

//Biscuit Defenders Title Base

fill(255,255,255)
rect(750,-10,400,150)

//Biscuit Defenders Title

fill(0)
textSize(50)
text("Biscuit Defenders",755, 80)

//start button base

fill(sb)
rect(850,400,200,100)

//start button text

fill(0)
textSize(45)
text("Start",900,465)

//Start button hover detection

if (mouseX >= 850 && mouseX <= 1050 && mouseY >= 400 && mouseY <= 500) {sb = [150,150,150]}
	else {sb = [255,255,255]}


		//Start click detection

	mousePressed = function() {if (mouseX >= 850 && mouseX <= 1050 && mouseY >= 400 && mouseY <= 500) {gs = 2}}


}//Main Menu end


// game selection menu

if (gs === 2) {background(100,200,250)
fill(btc)
rect(100,100,100,50)

//hover detection demo dif

if (mouseX >= 100 && mouseX <= 200 && mouseY >= 100 && mouseY <= 150) {btc = [150,150,150]}
	else {btc = [255,255,255]}



  //click detection demo dif

mousePressed = function() {if (mouseX >= 100 && mouseX <= 200 && mouseY >= 100 && mouseY <= 150) {dif = 1}}

//click detection demo dif end

fill(0)
textSize(12)
text("Demo Difficulty",110,130)

//start button

fill(btc2)
rect(600,600,100,50)
fill(0)
text("Play",640,630)

//start button hover detection

if (mouseX >= 600 && mouseX <= 700 && mouseY >= 600 && mouseY <= 650) {btc2 = [150,150,150]}

   else{btc2 = [255,255,255]}	

//start button click detection

mousePressed = function() {if (mouseX >= 600 && mouseX <= 700 && mouseY >= 600 && mouseY <= 650) {gs = 3}}

// demo awareness message

textSize(50)
text("This is a demo things are subject to change",500,300)


} // game selection menu end

//demo map start

if (gs === 3) {

	background(100,255,50)
image(p,0,400,1950,50)




//enemy1 base

image(en1,en1x,en1y,50,50)
en1x = en1x + en1xsp

image(en1,en2x,en2y,50,50)
en2x = en2x + en2xsp


fill(255,10,10)

rect(500,50,hp * 8,50)

//enemy1 hit detect

if (en1x >= 1910 && en1x <= 1913) {hp = hp - en1hp}

if (en1x > 1919) {en1x = -15}

//enemy2 hit detect

if (en2x >= 1910 && en2x <= 1913) {hp = hp - en2hp}

if (en2x > 1919) {en2x = -15}

//dieing check

if (hp < 0) {gs = -1}






//placing system start

if(keyCode === ENTER) {bm = 1}
if(key === 'e') {bm = 0}


if (bm === 1) {
ellipse(mouseX + 25,mouseY -25,350,350)


//tower 1 placing

mousePressed = function() {if (tp === 0) {

t1x = mouseX
t1y = mouseY
tp = 1



}  // if tp end


} //build mode if end

} // mouse pressed function end

// placing system end




image(c,t1x,t1y,50,50)
text(en1hp,100,100)


//en damage system
if (en1x >= t1x - 300 && en1x <= t1x + 200 && en1y >= t1y - 300 && en1y <= t1y + 300) {en1hp = en1hp - 0.1}

if (en1hp < 0) {en1hp = 2  

en1x = -15
}
// en1 dieing end
}

//demo map end










//version text base

fill(255,255,255)
rect(0,880,100,25)

//version text

textSize(13)
fill(0)
text("demo 1.0",20,900)






}//program end