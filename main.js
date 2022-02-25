Webcam.set({
    width: 350,
    height: 350,
    image_format: 'png',
    png_quality: 90
}); 

camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_image() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="image_taken" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.verion);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/mh1SGqYJA/model.json', modeloaded)
function modeloaded(){
    console.log('modeloaded');
}

function identify() {
    image = document.getElementById('image_taken');
    classifier.classify(image, GotResult);
}

function GotResult(error, results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("Face_Recognition").innerHTML = results[0].label;
        document.getElementById("Face_Accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}