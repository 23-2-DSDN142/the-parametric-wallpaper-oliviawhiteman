//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


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
  background(190, 229, 235); //Baby Blue colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

//parameters 
// y coordinates of quad points
  var h1 = 5;
  var h2 = 30; 
  var h3 = 120; 
  var h4 = 155; 
  var h5 = 190; 
// x coordinates of quad points, named as colours because it is confusing
  var red = 45; 
  var orange = 75; 
  var blue = 25; 
  var pink = 95; 
  var green = 40 
  var purple = 80 
  var yellow = 50
  var grey = 70
  var brown = 5
  var cyan = 125

  //blobs
  var blob1x = 60;
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

//colours
var blobcolour = color(112, 177, 225) //lime green currently
var glasscolour = color(0, 0, 0) //empty value so that blob colour controls it
var standcolour = color(0,0,0) // white currently
var backgroundcolour = color(0, 0, 0)// empty value so that background controls it


//if statement 

// if the blobs are lime green the glass is sky blue
if (blobcolour) color(112, 177, 225);{
glasscolour = color(156, 203, 59,)
}

if (blobcolour) color(112, 177, 225);{
standcolour = color(255,255,255)
}

// makes the background colour and the border around the glass the same colour
if (background) (190, 229, 235);{
backgroundcolour = color(190, 229, 235)
}

//glass part
fill(glasscolour)//lime green
quad(red,h2,orange,h2,pink,h3,blue,h3)


//blobs
fill(blobcolour)//sky blue
stroke(blobcolour)

ellipse(blob1x,blob1y,40,25)//1
ellipse(blob2x,blob2y,35,25)//2
ellipse(blob3x,blob3y,25,50)//3
ellipse(blob4x,blob4y,30,30)//4
ellipse(blob5x,blob5y,8,8)//5
ellipse(blob6x,blob6y,7,7)//6
ellipse(blob7x,blob7y,5,5)//7

//structure/metal part 
fill(standcolour)// white
stroke(standcolour)
quad(yellow,h1,grey,h1,orange,h2,red,h2)
quad(blue,h3,pink,h3,purple,h4,green,h4)
quad(green,h4,purple,h4,purple+10,h5,green-10,h5)

//perimeter 
fill(backgroundcolour)//CHANGE AS BACKGROUND CHANGES
stroke(backgroundcolour)//CHANGE AS BACKGROUND CHANGES
quad(orange,h2,cyan,h2,cyan,h3,pink,h3)//right
quad(brown,h2,red,h2,blue,h3,brown,h3)//left2
quad(brown,h1,yellow,h1,red,h2,brown,h2)//left1
quad(grey,h1,cyan,h1,cyan,h2,orange,h2)
  }
   
