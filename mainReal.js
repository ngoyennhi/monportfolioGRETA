// Back to top button
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "inline-block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 
// Back to top button END

let carousel = document.querySelector('.carousel');
let cellCount = 9;
let selectedIndex = 0;

function rotateCarousel() {
  let angle = selectedIndex / cellCount * -360;
  carousel.style.transform = 'translateZ(-101vw) rotateY(' + angle + 'deg)';
}

let prevButton = document.querySelector('.previous-button');
prevButton.addEventListener( 'click', function() {
  selectedIndex--;
  rotateCarousel();
});

let nextButton = document.querySelector('.next-button');
nextButton.addEventListener( 'click', function() {
  selectedIndex++;
  rotateCarousel();
});
//Section Slide Tous END 




