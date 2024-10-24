// Handle flipping the card when the front is clicked
document.querySelectorAll('.card-front').forEach(front => {
  front.addEventListener('click', function(event) {
    const card = this.closest('.card'); // Find the closest card to the clicked front
    card.classList.add('flip'); // Add the flip class to show the back
  });
});

// Handle closing the card only when the "X" button is clicked
document.querySelectorAll('.close-btn').forEach(button => {
  button.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the click from propagating to the card
    const card = this.closest('.card'); // Find the closest card to the clicked button
    card.classList.remove('flip'); // Remove the flip class to show the front
  });
});
