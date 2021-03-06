/* PAPERJS for animated object creation and animation */
var circles = [];

//Creating the circle
function onKeyDown(event) {
	//keyData taken from external file called data.js
	if (keyData[event.key]) {
		//maxPoint will be the maximum points of the visible screen
		var maxPoint = new Point(view.size.width, view.size.height);
		var randoms = new Point(Point.random(), Point.random());
		//The following will create a point between {x: 0, y: 0} and {x: maxPoint.x, y: maxPoint.y}
		var randomPoint = maxPoint * randoms;
		var newCircle = new Path.Circle(new Point(randomPoint), 400);
		newCircle.fillColor = keyData[event.key].color;
		
		circles.push(newCircle);
		keyData[event.key].sound.play();
		// console.log('Circles: ' + circles.length);
	}

}


function onFrame(event) {
	for(var i = 0; i < circles.length; i++) {
		circles[i].fillColor.hue += 4;
 		circles[i].scale(.902);
 		if(circles[i].area < 1) {
 			circles.splice(i, 1)
 			i--; //ensures looping doesn't skip the next item in the array
 			// console.log("Circles now: " + circles.length);
 		}

	}

 
}



