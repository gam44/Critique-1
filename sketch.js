
let img;


function preload(){
    img = loadImage('images/durhammap.png')
    img2 = loadImage('images/fhk9_paw_in_hand.png')
    img3 = loadImage('images/grace-dog-img.png')
   
    
}



function setup(){
    createCanvas(700, 700);
    background(0);
   
  
  
}

function draw(){


      

image(img, 0, 0, img.width*2, img.height*2);
image(img2, 0, 0, img.width/4, img.height/4);
image(img2, 0, 600, img.width/4, img.height/4);
image(img2, 600, 0, img.width/4, img.height/4);
image(img2, 600, 600, img.width/4, img.height/4);
    
fill(94, 229, 84);
stroke(0);
ellipse(350, 200, 25, 25)   
fill(94, 229, 84);
ellipse(400, 400, 25, 25)  
fill(94, 229, 84);
ellipse(400, 350, 25, 25)  
fill(94, 229, 84);
ellipse(250, 250, 25, 25)   
fill(94, 229, 84);
ellipse(250, 350, 25, 25)    
fill(94, 229, 84);
ellipse(550, 150, 25, 25)  
fill(94, 229, 84);
ellipse(550, 550, 25, 25)  

fill(255)
rect(285, 155, 190, 30)
rect(295, 410, 300, 30);
rect(415, 340, 270, 30)
rect(160, 210, 240, 25)
rect(145, 305, 255, 30);
rect(390, 105, 310, 30);
rect(465, 505, 210, 30)


fill(0);
stroke(94, 229, 84)

textSize(20);
text('Cause for Paws(48)', 290, 180);
text('Independent Animal Rescue(22)', 300, 430);
text('Animal Protection Society(65)', 420, 360);
text('Hope Animal Rescue(15)', 170, 230)
text('Orange County Animals(31)', 150, 330);
text('Blind Spot Animals Sanctuary (16)', 395, 130);
text('Four Paws Rescue(27)', 470, 530);




fill('black')
ellipse(mouseX, mouseY, 20, 20);
        if(mouseIsPressed){
            image(img3, mouseX, mouseY, img.width/4, img.height/4);

        }

        noFill()
        stroke(0)
        for (var i = 0; i < 10000; i += 20) {
            bezier(mouseX-(i/2.0), 20+i, 50, 60, 5, 200, 240-(i/2.0), 350+(i/1.0));
          }
}





