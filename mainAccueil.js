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


// Click card to flip 
let card = document.querySelectorAll('.card');
card[0].addEventListener( 'click', function() {
  card[0].classList.toggle('is-flipped');
});
card[1].addEventListener( 'click', function() {
  card[1].classList.toggle('is-flipped');
});
card[2].addEventListener( 'click', function() {
  card[2].classList.toggle('is-flipped');
});
card[3].addEventListener( 'click', function() {
  card[3].classList.toggle('is-flipped');
});

// click card to flip END




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


//Section competences

document.addEventListener("DOMContentLoaded", function () {
  /* ---- Initialisation ----*/
 let ecran = document.querySelector("#contenu1");
 let ecranCache = document.querySelector("#contenu3");

 let btnCompetence1 = document.querySelector("#btn-competence1");
 let btnCompetence2 = document.querySelector("#btn-competence2");
 let btnCompetence3 = document.querySelector("#btn-competence3");

 let  flag_toggle_black = false;
 /* ---- Event ---- */
 btnCompetence1.addEventListener("click", function () {
  if (flag_toggle_black) {
    ecran.classList = "displayOn";
    ecran.textContent = "Bonjour, je suis développeuse d'applications qui s'est passionnée pour le domaine informatique. Je suis toujours à l’affut des nouveautés en développement web, UI/UX.";
    ecranCache.classList="displayOff";
  } else {
    ecran.classList = "displayOff";
    ecran.innerHTML = "";
    ecranCache.classList="displayOn";
  }
  flag_toggle_black = !flag_toggle_black;
});

btnCompetence2.addEventListener("click", function () {
  if (flag_toggle_black) {
    ecran.classList = "displayOn";
    ecran.textContent = "Bonjour, je maîtrise les langages au développement web. A côté des technologies que je connais bien. Je suis prêt à apprendre de nouveaux frameworks, les autres langages nécessaires selon de projets.";
    ecranCache.classList="displayOff";
  } else {
    ecran.classList = "displayOff";
    ecran.innerHTML = "";
    ecranCache.classList="displayOn";
  }
  flag_toggle_black = !flag_toggle_black;
});

btnCompetence3.addEventListener("click", function () {
  if (flag_toggle_black) {
    ecran.classList = "displayOn";
    ecran.textContent = "Salut, je suis des études en IT. Je sais être autonome et force de proposition. J'ai méthodique et aime travailler en équipe. Etre ouvert d'esprit est mon point fort.";
    ecranCache.classList="displayOff";
  } else {
    ecran.classList = "displayOff";
    ecran.innerHTML = "";
    ecranCache.classList="displayOn";
  }
  flag_toggle_black = !flag_toggle_black;
});
 
  
});
