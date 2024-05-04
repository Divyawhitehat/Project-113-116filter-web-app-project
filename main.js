noseX=0;
noseY=0; 
NoseX=0;
NoseY=0;

function preload() 
{
    lips = loadImage('https://static-00.iconduck.com/assets.00/sexy-lips-emoji-512x182-o3gvhgy9.png')
    moustashe = loadImage('https://www.clipartmax.com/png/middle/192-1925099_moustache-clipart-handlebar-mustache-mustache-emoji-iphone.png')
}


function setup() 
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() 
{
    image(video,0,0,300,300);
    image(lips,noseX,noseY,40,40);
    image(moustashe,NoseX,NoseY,40,40);

}

function modelLoaded() 
{
    console.log('PoseNet Is Initialized');
}

function gotPoses()
{
    if(result.lenth > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-15;
        NoseX = results[0].pose.nose.x-15;
        NoseY = results[0].pose.nose.y-20;
        console.log("nose x = "+ noseX);
        console.log("nose y = "+ noseY);
        console.log("Nose x = "+ NoseX);
        console.log("Nose y = "+ NoseY);

    }
}

function take_snapshort() {
    save('myFilterImage.png');
}