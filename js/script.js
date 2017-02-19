var open = document.querySelector(".feedback-form .btn");
var popup = document.querySelector(".feedback-form");
var overlay = document.querySelector(".overlay");
var close = popup.querySelector(".feedback-form-close");


open.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("feedback-form-show");
        overlay.classList.add("overlay-show");

window.addEventListener("keydown", function(event) {
       if (event.keyCode === 27) {
        if (popup.classList.contains("feedback-form-show")) {
            overlay.classList.remove("overlay-show");
          }}});

close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("feedback-form-show");
        overlay.classList.add("overlay-show");
