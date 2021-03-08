const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var drop=[];
var maxDrops=100;


function preload(){
    
}

function setup(){
    createCanvas(600,800)
   
    engine = Engine.create();
    world = engine.world;

   
    if(frameCount%150===0){
        for(var i=0;i<maxDrops;i++){
            drop.push( new createDrop(random(0,400),random(0,400)));
        }
    }
    
    
}

function draw(){
    Engine.update(engine);
    background("black");
    for(var i=0;i<maxDrops;i++){
        drop[i].display();
        drop[i].updateY();
    }
    
}   

