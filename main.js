

function circleClicked(circle) {
    clicked = document.getElementById(circle.target.id);
    // let textDiv = document.getElementById("last-selected");
	if (clicked.classList.contains("selected")) {
		clicked.classList.remove("selected");
	}
	else {
		clicked.classList.add("selected");
	}
	// textDiv.innerHTML = "Last point clicked: " + circle.target.id;

}

function addPoint() {
    X = document.getElementById('x-value');
    cx = X.options[X.selectedIndex].text;

    Y = document.getElementById('y-value');
    cy = Y.options[Y.selectedIndex].text;

    frame = document.getElementById('frame');
    frame.insertAdjacentHTML("beforeend", "<circle id='(" + cx + "," + cy + ")' cx='" + (40*cx + 50) + "' cy='" + (440 - 40*cy) + "' r='10'/>");

}


button = document.getElementById('button');
button.addEventListener("click", addPoint);
let circles = document.getElementsByTagName('circle')
for (let i = 0; i < circles.length; i++) {
	circles[i].addEventListener("click", circleClicked);
}