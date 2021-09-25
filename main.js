//https://teachablemachine.withgoogle.com/models/XMCwG462D/model.json

function startClassification() {
    navigator.mediaDevices.getDisplayMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/XMCwG462D/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}