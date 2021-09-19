let char = null;
let charSp = null;

let canvasSizeW = 0;
let canvasSizeH = 0;

let charW = 60;
let charH = 88;
const charInitX = 70; //左から%指定
const charInitY = 70; //上から%指定
let charX = 0;
let charY = 0;

let offsetX = 0;
let offsetY = 0;

let draggState = false;

function preload(){
    char = loadImage('../assets/Public domain 03/Characters/frank.png');
}

function setup(){
    canvasSizeW = window.innerWidth;
    canvasSizeH = window.innerHeight-20;
    console.log(canvasSizeH);
    createCanvas(canvasSizeW, canvasSizeH);

    charX = canvasSizeW / 2;
    charY = canvasSizeH / 2;
    
    charSp = createSprite(charX, charY, charW, charH);
    charSp.addImage(char);
    char.debug = true;
}
function draw(){
    background(200);
    update();
    drawSprite(charSp);
}

function update(){
    if (draggState) {
        charX = mouseX + offsetX;
        charY = mouseY + offsetY;
    }

    charSp.position.x = charX;
    charSp.position.y = charY;
}

function mousePressed(){
    print('pressed');
    const spUpperLeftX = charSp.position.x - charW / 2;
    const spUpperLeftY = charSp.position.y - charH / 2;

    if(mouseX > spUpperLeftX && mouseX < spUpperLeftX + charW && mouseY > spUpperLeftY && mouseY < spUpperLeftY + charW) {
        draggState = true;
        cursor(HAND);

        offsetX = charX - mouseX;
        offsetY = charY - mouseY;
    }else {
        draggState = false;
    }
    return false;
}

function mouseDragged(){
    print('dragging');
    if(draggState){
        charX = mouseX;
        charY = mouseY;
    }
    return false;
}

function mouseReleased(){
    print('released');
    draggState = false;
    charX = canvasSizeW / 2;
    charY = canvasSizeH / 2;

}