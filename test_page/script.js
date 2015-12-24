function validateName() {
	// clean and replace

	document.getElementById("name_class").attributes[0] = "form-group row";
	document.getElementById("name").attributes[0] = "form-control";

	var name = document.getElementById("name").value;

	if (/^[a-zA-Z ]+$/g.test(name) && name.length > 1) {
   		document.getElementById("name_class").attributes[0].value = "form-group row has-success";
   		document.getElementById("name").attributes[0].value = "form-control form-control-success";
	}
	else {
   		document.getElementById("name_class").attributes[0].value = "form-group row has-danger";
   		document.getElementById("name").attributes[0].value = "form-control form-control-danger";
	}
}


function validateEmail() {
	document.getElementById("email_class").attributes[0] = "form-group row";
	document.getElementById("email").attributes[0] = "form-control";

	var email = document.getElementById("email").value;

	if (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email) && email.length > 1) {
   		document.getElementById("email_class").attributes[0].value = "form-group row has-success";
   		document.getElementById("email").attributes[0].value = "form-control form-control-success";
	}
	else {
   		document.getElementById("email_class").attributes[0].value = "form-group row has-danger";
   		document.getElementById("email").attributes[0].value = "form-control form-control-danger";
	}
}


function validatePhone() {
	document.getElementById("phone_class").attributes[0] = "form-group row";
	document.getElementById("phone").attributes[0] = "form-control bfh-phone";

	var phone = document.getElementById("phone").value;

	if (/\+\d\d \d\d\d\d\-\d\d\d\-\d\d\d/.test(phone) && phone.length > 1) {
   		document.getElementById("phone_class").attributes[0].value = "form-group row has-success";
   		document.getElementById("phone").attributes[0].value = "form-control bfh-phone form-control-success";
	}
	else {
   		document.getElementById("phone_class").attributes[0].value = "form-group row has-danger";
   		document.getElementById("phone").attributes[0].value = "form-control bfh-phone form-control-danger";
	}
}


function validateFile() {
	document.getElementById("resume_class").attributes[0] = "form-group row";
	document.getElementById("resume").attributes[0] = "form-control";

	var resume_value = document.getElementById("resume").value;
	resume_value = resume_value.split("\\")
	var file_name = resume_value[resume_value.length-1].toLowerCase().split(".");
	var file_ext = file_name[file_name.length-1];

	if (file_ext == "pdf" || file_ext == "doc" || file_ext == "docx") {
   		document.getElementById("resume_class").attributes[0].value = "form-group row has-success";
   		document.getElementById("resume").attributes[0].value = "form-control form-control-success";
	}
	else {
   		document.getElementById("resume_class").attributes[0].value = "form-group row has-danger";
   		document.getElementById("resume").attributes[0].value = "form-control form-control-danger";
	}
}


function validateCoverLetter() {
	document.getElementById("cover_letter_class").attributes[0] = "form-group row";
	document.getElementById("cover_letter").attributes[0] = "form-control";

	var cover_letter_value = document.getElementById("cover_letter").value;


	if (cover_letter_value.length > 1) {
   		document.getElementById("cover_letter_class").attributes[0].value = "form-group row has-success";
   		document.getElementById("cover_letter").attributes[0].value = "form-control form-control-success";
	}
	else {
   		document.getElementById("cover_letter_class").attributes[0].value = "form-group row has-danger";
   		document.getElementById("cover_letter").attributes[0].value = "form-control form-control-danger";
	}
}

function restoreStyle(innerInput, outerFieldSet) {
		document.getElementById(innerInput).attributes[0].value = "form-control form-control-primary";
		document.getElementById(outerFieldSet).attributes[0].value = "form-group row";
}













