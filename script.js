// Handle flipping the card when "Learn More" is clicked
document.querySelector('.learn-more').addEventListener('click', function(event) {
  event.stopPropagation();
  document.querySelector('.card').classList.add('flip');
});

// Handle flipping back the card when "X" is clicked
document.querySelector('.close-btn').addEventListener('click', function(event) {
  event.stopPropagation();
  document.querySelector('.card').classList.remove('flip');
});
