noseX=0;
noseY=0;
function setup(){
canvas = createCanvas(500,500);
canvas.position(550,550);
video=createCapture(VIDEO);
video.size(500,500);
video.hide();
x=ml5.poseNet(video,modelloaded);
x.on('pose',gotposes);
}

function modelloaded(){
    console.log(modelloaded);

}
function gotposes(result){
    if(result.length>0)
    {
        console.log(result);
        noseX=result[0].pose.nose.x
        noseY=result[0].pose.nose.y
        console.log("noseX+noseY"+noseX+noseY);
    }
}
function draw(){
image(video,0,0,500,500);
}