Webcam.set ({
    width: 350,
    height: 300,
    image_format : 'png',
    png_quality:90
})
camera = document.getElementById("camera");
Webcam.attach("#camera");

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById('snapshot').innerHTML = '<img id="captured_image"src="'+data_uri+'"/>';
    }) 
}
console.log("ml5 version:", ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/qji_UiRXP/model.json', modelLoaded)

function modelLoaded(){
    console.log('Model is loaded LOL!')
}
function speak(){
    var speak11 = window.speechSynthesis
var data11 = "The first prediction is..." + prediction1
var data22 = "And the second prediction is... " + prediction2
var LOL = new SpeechSynthesisUtterance(data1 + data2)
speak11.speak(LOL)
}