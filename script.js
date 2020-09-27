var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var delBtn = document.getElementsByClassName("delete");

//making event listener for delete button
for (var i =0; i<delBtn.length; i++){
	delBtn[i].addEventListener("click", removeItem, false);
}

//function removeItem
function removeItem(e){
	e.target.removeEventListener("click", removeItem, false);
	e.target.parentNode.remove();
}

//adding new item
function inputLength() {
	return input.value.length;
}

//making strikethrough
function getEventTarget(e){
	e = e || window.event;
	return e.target || e.srcElement;
}


ul.onclick = function(event){
	var target = getEventTarget(event);
	target.classList.toggle("done");
}

function createListElement() {
	//creating del button for new item
	var btn = document.createElement("button");
	btn.innerHTML = "delete";
	btn.onclick = removeItem;

	//creating list everytime new item is added
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.appendChild(btn);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);