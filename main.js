Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});

Webcam.attach("#camera")

function take_picture() {
    Webcam.snap(function (pic) {
        document.getElementById("result").innerHTML = '<img id="imgresult" src="' + pic + '">'
    });
}
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/DKWzJFFPi/model.json", modelloaded);

function modelloaded() {
    console.log("model loaded successfully");
}

function check_picture() {
    img = document.getElementById("imgresult");
    classifier.classify(img, get_results)
}

function get_results(e, r) {
    if (e) {
        console.error(e);
    }
    else {
        console.log(r);
        document.getElementById("result_object_name").innerHTML=r[0].label;
        document.getElementById("result_object_accuracy").innerHTML=r[0].confidence.toFixed(2);
    }
}