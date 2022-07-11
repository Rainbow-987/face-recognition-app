
  Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

  camera = document.getElementById("camera");

  Webcam.attach( '#camera' );


  function take_snapshot()
  {
      Webcam.snap(function(snapshot) {
          document.getElementById("result").innerHTML = '<img id="captured_image" src="'+  snapshot+'"/>';
      });
  }

console.log("Ml5 Version ", ml5.version);

my_classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/9NM-3OxOJ/model.json", modelLoaded);

function modelLoaded(){

  console.log("Model is Loaded");
}
  
function check(){

  my_img = document.getElementById("captured_image");
  my_classifier.classify(my_img, gotresults);  


}

function gotresults(error, results){

  if (error){
    console.error(error);
  }
  else{
    console.log(results);
    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHTML = (results[0].confidence * 100).toFixed(2) + "%";
  }

}