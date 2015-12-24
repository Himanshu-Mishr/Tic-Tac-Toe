function validateName() {
	// clean and replace
	document.getElementById("name_class").attributes[0] = "form-group row";
	document.getElementById("name").attributes[0] = "form-control";

	var name = document.getElementById("name").value;

	if (/^[a-zA-Z ]+$/g.test(name) && name.length > 1) {

   		document.getElementById("name_class").attributes[0].value += " has-success";
   		document.getElementById("name").attributes[0].value += " form-control-success";
	}
	else {
   		document.getElementById("name").attributes[0].value += " form-control-danger";
   		document.getElementById("name_class").attributes[0].value += " has-danger";
	}
}
