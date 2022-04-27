Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="result_img" src="'+data_uri+'">';
    });
}
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/eUR8FZkUh/model.json',modelLoaded);
function modelLoaded(){
    console.log('modelLoaded');
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data="First Prediction is "+prediction1+" and the Second Prediction is "+prediction2;
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
}