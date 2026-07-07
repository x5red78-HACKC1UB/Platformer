const canvas=document.getElementById("canvas");
const cctx=canvas.getContext('2d');
const playerstats={
    type:'player',
    jumpheight:8,
    size:20,
    x:50,
    y:50,
};

function resizeCanvas(){
    canvas.height=window.innerHeight;
    canvas.width= window.innerWidth;
    cctx.fillStyle="white";
}
resizeCanvas();

function draw(blank) {  //Ok so this fuction is make it easier to load stuff it can draw every or one thing.

    switch (blank.type) {
        case 'player':
            cctx.fillStyle="crimson"
            cctx.fillRect(blank.x, blank.y,(blank.size*5),(blank.size*5))
            break;
            
    
        default:
            break;
    }
}
draw(playerstats); 
console.log("x:${playerstats.x}");
console.log("y:${playerstats.y}");
console.log("size:${playerstats.size}");
console.log("${playerstats.jumpheight}");