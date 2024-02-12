function preload() {
   clasifier = ml5.imageClassifier("DoodleNet")
}

function setup(){
   canvas = createCanvas(300,300)
   canvas.center()
   canvas.mouseReleased(cc)
   synth = window.speechSynthesis
}

function draw() {
   strokeWeight(3)
   stroke("red")
   if (mouseIsPressed){
      line(pmouseX,pmouseY,mouseX,mouseY)
   }
}

function cc(){
   clasifier.classify(canvas,gotResult)
}

function gotResult(error,results){
   if (error){
      console.log(error)
   }
   else {
      console.log(results)
      document.getElementById("lable_name").innerHTML = "Label: " + results[0].label + "," + results[1].label
      var p = Math.round(results[0].confidence*100)
      var l = Math.round(results[1].confidence*100)
      document.getElementById("confidence_name").innerHTML = "Confidence: " + p +"% " + "," + l + "% "
      var ut=new SpeechSynthesisUtterance(results[0].label)
      synth.speak(ut)
   }
}

function clear1(){
   background("white")
}

function start(){
   
}