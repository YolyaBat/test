"use strict"
const username = document.getElementById("username")
const addressOne = document.getElementById("address1")
const addressTwo = document.getElementById("address2")
const city = document.getElementById("city")
const zip = document.getElementById("zip")
const validate = document.querySelectorAll(".validate")
const submitButton = document.querySelector(".submit-button")
const cancelButton = document.querySelector(".cancel-button")

submitButton.addEventListener("click", validateFunction)
function validateFunction() {
	Array.from(validate).forEach(element => {
		if(!element.checkValidity()) {
	    	element.style.borderColor = "red"
		}
	})
	username.oninvalid = (event) =>  {
		event.target.setCustomValidity(
	"The field must contain only letters up to 100 characters")
	}
	addressOne.oninvalid = (event) =>  {
		event.target.setCustomValidity(
	"The field can contain only letters or digits up to 100 characters")
	}
	addressTwo.oninvalid = (event) =>  {
		event.target.setCustomValidity(
	"The field can contain only letters or digits up to 100 characters")
	}
	city.oninvalid = (event) => {
		event.target.setCustomValidity(
		"The field can contain only letters or digits up to 50 characters")
	}
	zip.oninvalid = (event) => {
		event.target.setCustomValidity(
		"The field must contain 5 digits")
	}
}
cancelButton.onclick = () => {
	Array.from(validate).forEach(element => {
		element.value = ""
		element.style.borderColor = "#C0C0C0"
		element.setCustomValidity("")
	})
}