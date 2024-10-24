// Handle flipping the card when "Learn More" is clicked
document.querySelectorAll('.learn-more').forEach(button => {
  button.addEventListener('click', function(event) {
    event.stopPropagation();
    const card = this.closest('.card'); // Find the closest card to the clicked button
    card.classList.add('flip');
  });
});

// Handle flipping back the card when "X" is clicked
document.querySelectorAll('.close-btn').forEach(button => {
  button.addEventListener('click', function(event) {
    event.stopPropagation();
    const card = this.closest('.card'); // Find the closest card to the clicked button
    card.classList.remove('flip');
  });
});
