function setup(){
canvas= createCanvas(200,200);
canvas.center();

video=createCapture(VIDEO);
video.hide();
classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/orzP1XAGL/model.json',modelLoaded)
}

function modelLoaded(){
    console.log("Model Uploaded!!!")
}

function preload(){

}

function draw(){
image(video,0,0,200,200)
classifier.classify(video,gotResults)
}

function gotResults(error, results){
if(error){
console.error()
}
else{
console.log(results)
document.getElementById("span_object").innerHTML=results[0].label
document.getElementById("span_accuracy").innerHTML=results[0].confidence.toFixed(3)
}
}