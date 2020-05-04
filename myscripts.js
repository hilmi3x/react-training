function removeDummy(text) {
	const elem = document.getElementById(text);
	elem.parentNode.removeChild(elem); 
}

function addDummy(newText){
	if(newText !== ""){
		document.getElementById("list").innerHTML += `<li id="${newText}" onclick="removeDummy(id)">${newText}</li>`
	}
}