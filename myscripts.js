function removeDummy(text) {
const Checkbox = "Developer Tools"
	if(text == Checkbox){
		var elem = document.getElementById('dummy');
		 elem.parentNode.removeChild(elem);
		 return false;
	}
 
}