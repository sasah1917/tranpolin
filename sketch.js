var menina, meninaImg;
var tranpolin, tranpolinImg;
var premio, premioImg;
var gameState;

function preload(){

    meninaImg = loadImage("menino.png");
    tranpolinImg = loadImage("tranpolin.png");
    premioImg = loadImage("borboleta.jpg");
}



function setup() {
    createCanvas(800, 400);
    
    menina = createSprite(200,200,30,30);
    menina = loadImage(meninaImg);

    tranpolin = createSprite(200,300,30,30);
    tranpolin = loadImage(tranpolinImg);

    premio = createSprite(200,100,20,20);
    premio = loadImage(premioImg);

}

function draw(){
    background(0);

    gameState = PLAY;

    if(gameState === PLAY){
        if(keyIsDown("space")){
            menina.velocity.y = 5;
        }
    
    }


  
    if(menina.collide(premio)){
        menina.velocity.y = -5;
        premio.visible = false;
        gameState = end;
    }

    if(menina.collide(tranpolin)){
        menina.velocity.y = 0;
        gameState = end;
    }

    if(gameState === end){
        Text("você coseguiu", 200,300);
    }
}
   

