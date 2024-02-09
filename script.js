//your JS code here. If required.
const status= document.getElementById("status");
const enterBtn = document.getElementById("enterBtn");


function onclick(event) {
	// console.log("click");
	document.getElementById("status").innerHTML = "<h1>Entered Metaverse</h1>";
}
enterBtn.addEventListener('click', onclick);