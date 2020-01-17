// set the nav fix on top
// The debounce function receives our function as a parameter
const debounce = (fn) => {

  // This holds the requestAnimationFrame reference, so we can cancel it if we wish
  let frame;

  // The debounce function returns a new function that can receive a variable number of arguments
  return (...params) => {

    // If the frame variable has been defined, clear it now, and queue for next frame
    if (frame) {
      cancelAnimationFrame(frame);
    }

    // Queue our function call for the next frame
    frame = requestAnimationFrame(() => {

      // Call our function and pass any params we received
      fn(...params);
    });

  }
};

// Reads out the scroll position and stores it in the data attribute
// so we can use it in our stylesheets
const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY;
}

// Listen for new scroll events, here we debounce our `storeScroll` function
document.addEventListener('scroll', debounce(storeScroll));

// Update scroll position for first time
storeScroll();

// set the button fix on right bottom corner

//Get the button:
mybutton = document.getElementById('topBtn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none'
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // for safari
  document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
}


// Carousel

// var carousel = document.querySelector('.carousel');
// var cellCount = 6;
// var selectedIndex = 0;

// function rotateCarousel() {
//   var angle = selectedIndex / cellCount * -360;
//   carousel.style.transform = 'translateZ(-288px) rotateY(' + angle + 'deg)';
// }

// var prevButton = document.querySelector('.previous-button');
// prevButton.addEventListener( 'click', function() {
//   selectedIndex--;
//   rotateCarousel();
// });

// var nextButton = document.querySelector('.next-button');
// nextButton.addEventListener( 'click', function() {
//   selectedIndex++;
//   rotateCarousel();
// });
