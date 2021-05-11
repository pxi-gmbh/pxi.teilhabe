// toggle modal overlays for help, info and about sections
function toggleHelp() {
  var help = document.getElementById('help');
  help.classList.toggle('is-modal--active');
}
function toggleAbout() {
  var about = document.getElementById("about");
  about.classList.toggle("is-modal--active");
}
function toggleInvite() {
  var invite = document.getElementById("invite");
  invite.classList.toggle("is-modal--active");
}

// toggle-button toggle states via aria-pressed="true"
// aria-pressed is styled in CSS for button.signal
function toggleButtonClick() {
  toggleButton(event.target);
}
// function to apply changes to element onkeypress (call in HTML)
function toggleButtonKeyPress() {
  // Check to see if space or enter were pressed
  if (event.key === " " || event.key === "Enter" || event.key === "Spacebar" ) { // "Spacebar" for IE11 support
    // Prevent the default action to stop scrolling when space is pressed
    event.preventDefault();
    // initiate a click on the element, triggering the function that fires onclick
    event.target.click();
  }
}
// function that is called on either click or onkeypress
function toggleButton() {
  // Check to see if the button is pressed
  var unpressed = (event.target.getAttribute("aria-pressed") === "false");
  if(unpressed) {
    // toggle all other signals off
    var signals = document.getElementsByClassName("signal");
    for(var i = signals.length - 1; i >= 0; --i) {
      signals[i].setAttribute("aria-pressed", "false");
    }
    // Change aria-pressed to the opposite state
    event.target.setAttribute("aria-pressed", "true");
  } else {
    // Change aria-pressed to the opposite state
    event.target.setAttribute("aria-pressed", "false");
  }
}

// close all modals and fullscreen signals on "ESC"
window.addEventListener("keyup",function(e){
  if(e.key==="Escape"){
    // close all modals
    var modals = document.getElementsByClassName("is-modal");
    for(var i = modals.length - 1; i >= 0; --i) {
      modals[i].classList.remove("is-modal--active");
    }
    // toggle all signals off
    var signals = document.getElementsByClassName("signal");
    for(var i = signals.length - 1; i >= 0; --i) {
      signals[i].setAttribute("aria-pressed", "false");
    }
  }
});

// E-Mail Spam-Filter gegen Roboter
function myEmail() {
	var eml  = 'teilhabe'   // The email address...
	eml += '@'
	eml += 'pxi.design'

	var link = document.createElement("a");
	link.setAttribute("href", "mailto:" + eml);
	link.appendChild(document.createTextNode(eml));
	var spans = getElementsByClass("span", "js--teilhabe-email");
	for (var i = 0; i < spans.length; i++)
		spans[i].parentNode.replaceChild(link.cloneNode(true), spans[i]);
}
