/**
 * Validates user name
 */
function validateName() {
	// clean and replace

	var flag = false;
	document.getElementById("name_class").attributes[0] = "form-group row";
	document.getElementById("name").attributes[0] = "form-control";

	var name = document.getElementById("name").value;
	if(name.length == 0) return false;

	if (/^[a-zA-Z ]+$/g.test(name) && name.length > 1) {
   		document.getElementById("name_class").attributes[0].value = "form-group row has-success";
   		document.getElementById("name").attributes[0].value = "form-control form-control-success";
   		flag = true;
	}
	else {
   		document.getElementById("name_class").attributes[0].value = "form-group row has-danger";
   		document.getElementById("name").attributes[0].value = "form-control form-control-danger";
   		flag = true;
	}
	return flag;
}

/*
 * validates Email format
 */
function validateEmail() {

	var flag = false;
	document.getElementById("email_class").attributes[0] = "form-group row";
	document.getElementById("email").attributes[0] = "form-control";

	var email = document.getElementById("email").value;
	if(email.length == 0) return false;

	if (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email) && email.length > 1) {
   		document.getElementById("email_class").attributes[0].value = "form-group row has-success";
   		document.getElementById("email").attributes[0].value = "form-control form-control-success";
   		flag = true;
	}
	else {
   		document.getElementById("email_class").attributes[0].value = "form-group row has-danger";
   		document.getElementById("email").attributes[0].value = "form-control form-control-danger";
   		flag = false;
	}
	return flag;
}

/*
 * validate Phone number
 */
function validatePhone() {
	var flag = false;
	document.getElementById("phone_class").attributes[0] = "form-group row";
	document.getElementById("phone").attributes[0] = "form-control bfh-phone";

	var phone = document.getElementById("phone").value;
	if(phone.length == 0) return false;

	if (/\d\d\d\d\d\d\d\d\d\d/.test(phone) && phone.length > 1) {
   		document.getElementById("phone_class").attributes[0].value = "form-group row has-success";
   		document.getElementById("phone").attributes[0].value = "form-control bfh-phone form-control-success";
   		flag = true;
	}
	else {
   		document.getElementById("phone_class").attributes[0].value = "form-group row has-danger";
   		document.getElementById("phone").attributes[0].value = "form-control bfh-phone form-control-danger";
   		flag = false;
	}
	document.getElementById("countryCode").attributes[0].value = "form-control form-control-primary";
	return flag;
}

/*
 * DOC or PDF
 */
function validateFile() {
	var flag = false;
	document.getElementById("resume_class").attributes[0] = "form-group row";
	document.getElementById("resume").attributes[0] = "form-control";

	var resume_value = document.getElementById("resume").value;
	if(resume.length == 0) return false;
	resume_value = resume_value.split("\\")
	var file_name = resume_value[resume_value.length-1].toLowerCase().split(".");
	var file_ext = file_name[file_name.length-1];

	if (file_ext == "pdf" || file_ext == "doc" || file_ext == "docx") {
   		document.getElementById("resume_class").attributes[0].value = "form-group row has-success";
   		document.getElementById("resume").attributes[0].value = "form-control form-control-success";
   		flag = true;
	}
	else {
   		document.getElementById("resume_class").attributes[0].value = "form-group row has-danger";
   		document.getElementById("resume").attributes[0].value = "form-control form-control-danger";
   		flag = false;

	}
	return flag;
}

// checks length
function validateCoverLetter() {
	var flag = false;
	document.getElementById("cover_letter_class").attributes[0] = "form-group row";
	document.getElementById("cover_letter").attributes[0] = "form-control";

	var cover_letter_value = document.getElementById("cover_letter").value;
	if(cover_letter_value.length == 0) return false;

	if (cover_letter_value.length > 1) {
   		document.getElementById("cover_letter_class").attributes[0].value = "form-group row has-success";
   		document.getElementById("cover_letter").attributes[0].value = "form-control form-control-success";
   		flag = true;
	}
	else {
   		document.getElementById("cover_letter_class").attributes[0].value = "form-group row has-danger";
   		document.getElementById("cover_letter").attributes[0].value = "form-control form-control-danger";
   		flag = false;
	}
	return flag;
}

function restoreStyle(innerInput, outerFieldSet) {
		document.getElementById(innerInput).attributes[0].value = "form-control form-control-primary";
		document.getElementById(outerFieldSet).attributes[0].value = "form-group row";
}

// function to init form
function init() {
	// add year value in select fields.
	var select_element = document.getElementById("countryCode");

	var temp;

	for(var country in country_phone_data)  {
		temp = document.createElement("option");
		temp.value = country_phone_data[country];
		temp.innerHTML = country + " ( +" + country_phone_data[country] + " )";
		select_element.appendChild(temp);
	}
}
/*
 * validate URL by checking domain name
 */
function validateURL(elementName, elementNameClass) {

	var flag = false;
	document.getElementById(elementNameClass).attributes[0] = "form-group row";
	document.getElementById(elementName).attributes[0] = "form-control";

	var url_value = document.getElementById(elementName).value;


	if(url_value.length == 0) return false;

	if(elementName == "URLlinkedin") {
		var string =  url_value, substring = "linkedin";
		if(string.indexOf(substring) > -1) {
	   		document.getElementById(elementNameClass).attributes[0].value = "form-group row has-success";
	   		document.getElementById(elementName).attributes[0].value = "form-control form-control-success";
	   		flag = true;
		}
		else {
	   		document.getElementById(elementNameClass).attributes[0].value = "form-group row has-danger";
	   		document.getElementById(elementName).attributes[0].value = "form-control form-control-danger";
	   		flag = false;
		}
	}

	if(elementName == "URLgithub") {
		var string =  url_value, substring = "github.com";
		if (string.indexOf(substring) > -1) {
	   		document.getElementById(elementNameClass).attributes[0].value = "form-group row has-success";
	   		document.getElementById(elementName).attributes[0].value = "form-control form-control-success";
	   		flag = true;
		}
		else {
	   		document.getElementById(elementNameClass).attributes[0].value = "form-group row has-danger";
	   		document.getElementById(elementName).attributes[0].value = "form-control form-control-danger";
	   		flag = false;
		}
	}
	return flag;
}

function formSubmit() {
	if(
	    validateName() &&
	    validateEmail() &&
	    validatePhone() &&
	    validateFile() &&
	    validateCoverLetter()
 	) {

		document.jobForm.submit();
	} else {
		if(!validateName()) {
   		document.getElementById("name_class").attributes[0].value = "form-group row has-warning";
   		document.getElementById("name").attributes[0].value = "form-control bfh-phone form-control-warning";
		}
		if(!validateEmail()) {
   		document.getElementById("email_class").attributes[0].value = "form-group row has-warning";
   		document.getElementById("email").attributes[0].value = "form-control form-control-warning";
		}
		if(!validatePhone()) {
   		document.getElementById("phone_class").attributes[0].value = "form-group row has-warning";
   		document.getElementById("phone").attributes[0].value = "form-control bfh-phone form-control-warning";
		}
		if(!validateFile()) {
   		document.getElementById("resume_class").attributes[0].value = "form-group row has-warning";
   		document.getElementById("resume").attributes[0].value = "form-control form-control-warning";
		}
		if(!validateCoverLetter()) {
   		document.getElementById("cover_letter_class").attributes[0].value = "form-group row has-warning";
   		document.getElementById("cover_letter").attributes[0].value = "form-control form-control-warning";
		}
		console.log("failure");
	}
}












