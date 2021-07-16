hp = ""
pan = ""
chosen = ""

function preload()
{
// Load sounds hp and pan here
}


function setup()
{
canvas = createCanvas(600,450)
canvas.center()

video = createCapture(VIDEO)
video.hide()
}

function draw()
{
    image(video,0,0,600,450)
}

//Add code to set chosen to hp or pan here

function play()
{
    if (chosen == "hp"){
    hp.play()}
    if (chosen == "pan"){
pan.play()}
}