function setup()
{
    canvas= createCanvas(640, 480);
    canvas.position(150, 150);
    video= createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 230, 150, 220, 200);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 80);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(90, 460, 20);
}

function take_snapshot()
{
    save('image.png');
}

function  filter_tint()
{
    tint_color= document.getElementById("color_name").value;
}