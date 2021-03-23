var formSubmit = document.getElementById("myForm");

document.getElementById("myForm").addEventListener("click", function (event) {
event.preventDefault();

if(this.click)
console.log("clicked!");
});
