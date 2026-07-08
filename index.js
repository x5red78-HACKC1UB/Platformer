const canvas=document.getElementById("canvas");
const cctx=canvas.getContext('2d');

const playerstats={
    type:'player',
    jumpheight:8,
    height:80,
    width:80,
    size:20,
    x:50,
    y:50,
    isgrounded:false,
    velocityY:0,
};

const keys={
    a:false,
    w:false,
    d:false,
}

function resizeCanvas(){
    canvas.height=window.innerHeight;
    canvas.width= window.innerWidth;
    cctx.fillStyle="white";
}
resizeCanvas();

function draw(blank) {  //Ok so this fuction is make it easier to load stuff it can draw everything or one specific thing.

    switch (blank.type) {
        case 'player':
            cctx.fillStyle="crimson"
            cctx.fillRect(blank.x, blank.y,(blank.height),(blank.width))
            break;
            
    
        default:
            break;
    }
}

draw(playerstats); 
console.log(`x:${playerstats.x}`);
console.log(`y:${playerstats.y}`);
console.log(`size:${playerstats.size}`);
console.log(`jumpheight:${playerstats.jumpheight}`);

document.addEventListener('keydown',(event)=>{
    const key=event.key.toLowerCase();
  if (key==='a'||key=== 'd' ||key=== 'w' ||key=== 's'){
keys[key]=true;
  }
    });

    document.addEventListener('keyup',(event)=>{
const key=event.key.toLowerCase();
if (key==='a'||key=== 'd' ||key=== 'w' ||key=== 's'){
keys[key]=false;
  }
    });

function gameloop(){
    console.log(`x:${playerstats.x}`);
    cctx.clearRect(0,0,canvas.width,canvas.height);
draw(playerstats);

if(keys.a){
    playerstats.x+=-5;
}
if (keys.d) {
    playerstats.x+=5;
}
if (keys.w) {
    playerstats.y-=5
}

if (playerstats.x>=window.innerWidth-80) {
    playerstats.x=200;
}
if (0-20>=playerstats.x) {
    playerstats.x=200;
}

const gravity=0.35;
const floorY= canvas.height-playerstats.height-20;

playerstats.velocityY+=gravity;
playerstats.y+= playerstats.velocityY;

if(playerstats.y>=floorY){
    playerstats.y=floorY;
    playerstats.velocity=0;
    playerstats.isgrounded=true
}else{
    playerstats.isgrounded=false;
}

if (keys.w && playerstats.isgrounded) {
    playerstats.velocityY= -playerstats.jumpheight
    playerstats.isgrounded=false;
}
    requestAnimationFrame(gameloop);
};
gameloop();