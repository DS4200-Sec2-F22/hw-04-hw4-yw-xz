let circles = document.getElementsByTagName('circle');

// Add selected class of the clicked circle to show the border
function circleClicked(circle) {
    clicked = document.getElementById(circle.target.id);
    let textDiv = document.getElementById("last-selected");
	
	// check if the circle is selected, if so, remove the class, otherwise, add the class
	if (clicked.classList.contains("selected")) {
		clicked.classList.remove("selected");
	}
	else {
		clicked.classList.add("selected");
	}
	// Show the last clicked circle
	textDiv.innerHTML = "Last point clicked: \<br\>" + circle.target.id;

}

// Add a point upon selection of coordinates
function addPoint() {
    X = document.getElementById('x-value');
    cx = X.options[X.selectedIndex].text;

    Y = document.getElementById('y-value');
    cy = Y.options[Y.selectedIndex].text;

    // To create a new element
    var newP = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    newP.id = "(" + cx + "," + cy + ")";
    newP.setAttribute('cx', 40*cx + 50);
    newP.setAttribute('cy', 440 - 40*cy);
    newP.setAttribute('r', 10);
    newP.addEventListener("click", circleClicked);

    frame = document.getElementById('frame');
    frame.appendChild(newP)

}

// Iterate through all circles to enable the click method
for (let i = 0; i < circles.length; i++) {
	circles[i].addEventListener("click", circleClicked);
}
