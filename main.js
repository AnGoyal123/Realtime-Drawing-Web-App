noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550 , 500)

    canvas = createCanvas(550 , 400)
    canvas.position(560 , 150);

    poseNet = ml5.poseNet(video , modelLoaded)
    poseNet.on("pose" , gotPoses)
}

function modelLoaded(){
    console.log("PoseNet is Inisialized!")
}

function draw(){
background("#e32788")
stroke("pink")
fill("pink")
square(noseX , noseY, difference)    
}

function gotPoses(anshuman){
    if(anshuman.length >= 1){
        console.log(anshuman)
        noseX = anshuman[0].pose.nose.x
        noseY = anshuman[0].pose.nose.y
        console.log("nose x = " + noseX + "nose y = " + noseY)
        
        rightWristX = anshuman[0].pose.rightWrist.x;
        leftWristX = anshuman[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("Right Wrist X = " + rightWristX + " Left Wrist X = " + leftWristX + " Difference = " + difference)
    }
}