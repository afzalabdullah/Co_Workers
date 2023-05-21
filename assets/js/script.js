const animateButton = document.getElementById('animateButton');
const animatedElement = document.getElementById('animatedElement');

animateButton.addEventListener('click', function() {
  animatedElement.classList.add('animate');

  // Remove the "animate" class after the animation completes
  setTimeout(function() {
    animatedElement.classList.remove('animate');
  }, 2000); // Adjust the duration to match your animation's timing
});
