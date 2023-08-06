//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(190, 229, 235); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
    //parameters 
// y coordinates 
  var h1 = 5;
  var h2 = 30; 
  var h3 = 120; 
  var h4 = 155; 
  var h5 = 190; 
// x coordinates 
  var red = 85; 
  var orange = 115; 
  var blue = 65; 
  var pink = 135; 
  var green = 80 
  var purple = 120 
  var yellow = 90
  var grey = 110
  var brown = 45
  var cyan = 165

  //blobs
  var blobx = 85;
  var blob2x = 77; 
//colours
  var blobcolour = color(112, 177, 225) //lime green currently
  var glasscolour = color(156, 203, 59) //skyblue currently
  var standcolour = color(255,255,255) // white currently
  var backgroundcolour = color(190, 229, 235)// baby blue currently


//glass part
fill(glasscolour)//lime green
quad(red,h2,orange,h2,pink,h3,blue,h3)


//blobs
fill(blobcolour)//sky blue
stroke(blobcolour)

ellipse(100,120,40,25)//1
ellipse(70,100,35,25)//2
ellipse(125,80,25,50)//3
ellipse(85,40,30,30)//4
ellipse(100,90,8,8)//5
ellipse(85,70,7,7)//6
ellipse(110,50,5,5)//7

//structure/metal part 
fill(standcolour)// white
stroke(standcolour)
quad(yellow,h1,110,h1,orange,h2,red,h2)
quad(blue,h3,pink,h3,purple,h4,green,h4)
quad(green,h4,purple,h4,130,h5,70,h5)

//perimeter 
fill(backgroundcolour)//CHANGE AS BACKGROUND CHANGES
stroke(backgroundcolour)//CHANGE AS BACKGROUND CHANGES
quad(orange,h2,cyan,h2,cyan,h3,pink,h3)//right
quad(brown,h2,red,h2,blue,h3,brown,h3)//left2
quad(brown,h1,yellow,h1,red,h2,brown,h2)//left1
quad(grey,h1,cyan,h1,cyan,h2,orange,h2)
  }
   
