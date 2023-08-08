//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


//-------------------------------------
//COPY AND PASTE VARIABLES FROM HERE\/
//-------------------------------------

var h1 = 5;
var h2 = 30; 
var h3 = 130; 
var h4 = 155; 
var h5 = 190; 
// x coordinates of quad points, named as colours because it is confusing

// left side(top to bottom)
var left1x = 45;
var left2x = 40;
var left3x = 15; 
var left4x = 40 ;
var left5x = 5; //this is the x of the left block out sides

//right side(top to bottom)

var right1x = 75;
var right2x = 80; 
var right3x = 105; 
var right4x = 80;
var right5x = 125;

//blobs
var blob1x = 49;
var blob1y = 120; 

var blob2x = 30; 
var blob2y = 100; 

var blob3x = 85; 
var blob3y = 80; 

var blob4x =  45; 
var blob4y =  40; 

var blob5x = 60; 
var blob5y = 90; 

var blob6x = 45; 
var blob6y= 70; 

var blob7x = 70; 
var blob7y = 50;





//-------------------------------------
// To here 
//-------------------------------------

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 110;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(171, 220, 214);
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  // Check if blob1x is greater than a threshold


//colours
var blobcolour = color(112, 177, 225) //lime green currently
var glasscolour = color(156, 203, 59,) //
var standcolour = color(255,255,255) // 
var backgroundcolour = color(171, 220, 214)// 
var rectanglecolour = color(171, 220, 214)// 


//Background rectangle so that background changes each time without changing background colour 
if (blob1x ==49 ) {
  fill(240, 199, 136);// Change fill color to light orange if condition is met
  stroke(240, 199, 136);
} else if (blob1x == 40) {
  fill(119, 207, 230); // Change fill color to sky blue if x-coordinate is 400
  stroke(119, 207, 230);
} else if (blob1x == 90) {
  fill(131, 204, 172); // Change fill color to light green if x-coordinate is 90
  stroke(131, 204, 172);
} else if (blob1x == 59) {
  fill(191, 154, 200); // Change fill color to  light purple if x-coordinate is 90
  stroke(191, 154, 200);
} else if (blob1x == 45) {
  fill(247, 178, 208); // Change fill color to light pink if x-coordinate is 90
  stroke(247, 178, 208);
} else if (blob1x == 55) {
  fill(43, 49, 141); // Change fill color to  dark blue if x-coordinate is 90
  stroke(43, 49, 141);
} else if (blob1x == 60) {
  fill(251, 242, 129); // Change fill color to yellow  if x-coordinate is 90
  stroke(251, 242, 129);
} else if (blob1x == 65) {
  fill(24, 183, 228); // Change fill color to sky blue  if x-coordinate is 90
  stroke(24, 183, 228);
} else {
  fill(rectanglecolour); // Otherwise, use the original blobcolor
stroke(rectanglecolour);
}
rect(0,0,110,200)

//glass part
//if statement reworded from chatgpt
//this was reworded from chatgpt
if (blob1x ==49 ) {
  fill(249, 159, 37);// Change fill color to orange if condition is met
  stroke(249, 159, 37);// /\
} else if (blob1x == 40) {
  fill(105, 50, 147); // Change fill color to purple if x-coordinate is 400
  stroke(105, 50, 147);
} else if (blob1x == 90) {
  fill(214, 223, 36); // Change fill color to  yellow if x-coordinate is 90
  stroke(214, 223, 36);
} else if (blob1x == 59) {
  fill(225, 43, 58); // Change fill color to  red if x-coordinate is 90
  stroke(225, 43, 58);
} else if (blob1x == 45) {
  fill(198, 33, 39); // Change fill color to  Dark red if x-coordinate is 90
  stroke(198, 33, 39);
} else if (blob1x == 55) {
  fill(83, 115, 184); // Change fill color to   if x-coordinate is 90
  stroke(83, 115, 184);
} else if (blob1x == 60) {
  fill(239, 83, 158); // Change fill color to   if x-coordinate is 90
  stroke(239, 83, 158);
} else if (blob1x == 65) {
  fill(0, 106, 174); // Change fill color to   if x-coordinate is 90
  stroke(0, 106, 174);
} else {
  fill(glasscolour); // Otherwise, use the original blobcolor
stroke(glasscolour);
}
quad(left2x,h2,right2x,h2,right3x,h3,left3x,h3)


//blobs

//this was reworded from chatgpt
if (blob1x ==49 ) {
  fill(247, 236, 31);// Change fill color to yellow if condition is met
  stroke(247, 236, 31);// /\
} else if (blob1x == 40) {
  fill(191, 79, 157); // Change fill color to pink if x-coordinate is 400
  stroke(191, 79, 157);
} else if (blob1x == 90) {
  fill(95, 187, 70); // Change fill color to  green if x-coordinate is 90
  stroke(95, 187, 70);
} else if (blob1x == 59) {
  fill(105, 50, 147); // Change fill color to  purple if x-coordinate is 90
  stroke(105, 50, 147);
} else if (blob1x == 45) {
  fill(249, 159, 37); // Change fill color to  Orange if x-coordinate is 90
  stroke(249, 159, 37);
} else if (blob1x == 55) {
  fill(119, 207, 230); // Change fill color to   if x-coordinate is 90
  stroke(119, 207, 230);
} else if (blob1x == 60) {
  fill(198, 33, 39); // Change fill color to   if x-coordinate is 90
  stroke(198, 33, 39);
} else if (blob1x == 65) {
  fill(254, 226, 105); // Change fill color to   if x-coordinate is 90
  stroke(254, 226, 105);
} else {
  fill(blobcolour); // Otherwise, use the original blobcolor
stroke(blobcolour);
}


ellipse(blob1x, blob1y, 40, 25);


ellipse(blob1x,blob1y,40,25)//1
ellipse(blob2x,blob2y,35,25)//2
ellipse(blob3x,blob3y,25,50)//3
ellipse(blob4x,blob4y,30,30)//4
ellipse(blob5x,blob5y,8,8)//5
ellipse(blob6x,blob6y,7,7)//6
ellipse(blob7x,blob7y,5,5)//7

//structure/metal part 
//if statement reworded from chatgpt
if (blob1x ==49 ) {
  fill(198, 33, 39);// Change fill color to red if condition is met
  stroke(198, 33, 39);// /\
} else if (blob1x == 40) {
  fill(43, 49, 141); // Change fill color to blue if x-coordinate is 400
  stroke(43, 49, 141);
} else if (blob1x == 90) {
  fill(24, 97, 49); // Change fill color to  dark green if x-coordinate is 90
  stroke(24, 97, 49);
} else if (blob1x == 59) {
  fill(238, 74, 154); // Change fill color to  purple if x-coordinate is 90
  stroke(238, 74, 154);
} else if (blob1x == 45) {
  fill(228, 77, 115); // Change fill color to  pink if x-coordinate is 90
  stroke(228, 77, 115);
} else if (blob1x == 55) {
  fill(156, 203, 60); // Change fill color to   if x-coordinate is 90
  stroke(156, 203, 60);
} else if (blob1x == 60) {
  fill(249, 159, 37); // Change fill color to   if x-coordinate is 90
  stroke(249, 159, 37);
} else if (blob1x == 65) {
  fill(162, 206, 92); // Change fill color to   if x-coordinate is 90
  stroke(162, 206, 92);
} else {
fill(standcolour); // Otherwise, use the original blobcolor
stroke(standcolour);
}
quad(left1x,h1,right1x,h1,right2x,h2,left2x,h2)
quad(left3x,h3,right3x,h3,right4x,h4,left4x,h4)
quad(left4x,h4,right4x,h4,right4x+10,h5,left4x-10,h5)

//perimeter 
if (blob1x ==49 ) {
  fill(240, 199, 136);// Change fill color to light orange if condition is met
  stroke(240, 199, 136);
} else if (blob1x == 40) {
  fill(119, 207, 230); // Change fill color to sky blue if x-coordinate is 400
  stroke(119, 207, 230);
} else if (blob1x == 90) {
  fill(131, 204, 172); // Change fill color to light green if x-coordinate is 90
  stroke(131, 204, 172);
} else if (blob1x == 59) {
  fill(191, 154, 200); // Change fill color to  light purple if x-coordinate is 90
  stroke(191, 154, 200);
} else if (blob1x == 45) {
  fill(247, 178, 208); // Change fill color to light pink if x-coordinate is 90
  stroke(247, 178, 208);
} else if (blob1x == 55) {
  fill(43, 49, 141); // Change fill color to  dark blue if x-coordinate is 90
  stroke(43, 49, 141);
} else if (blob1x == 60) {
  fill(251, 242, 129); // Change fill color to yellow  if x-coordinate is 90
  stroke(251, 242, 129);
} else if (blob1x == 65) {
  fill(24, 183, 228); // Change fill color to sky blue  if x-coordinate is 90
  stroke(24, 183, 228);
} else {
  fill(backgroundcolour); // Otherwise, use the original blobcolor
stroke(backgroundcolour);
}
quad(right2x,h2,right5x,h2,right5x,h3,right3x,h3)//right
quad(left5x,h2,left2x,h2,left3x,h3,left5x,h3)//left2
quad(left5x,h1,left1x,h1,left2x,h2,left5x,h2)//left1
quad(right1x,h1,right5x,h1,right5x,h2,right2x,h2)
  }
   
