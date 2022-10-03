let circles = document.getElementsByTagName('circle')

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

for (let i = 0; i < circles.length; i++) {
	circles[i].addEventListener("click", circleClicked);
}