// Handle flipping the card when the entire card is clicked
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function(event) {
    // Flip the card only if the close button is NOT clicked
    if (!event.target.classList.contains('close-btn')) {
      card.classList.toggle('flip'); // Toggle the flip class
    }
  });
});

// Handle closing the card only when the "X" button is clicked
document.querySelectorAll('.close-btn').forEach(button => {
  button.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the click from propagating to the card
    const card = this.closest('.card'); // Find the closest card to the clicked button
    card.classList.remove('flip'); // Remove the flip class to close the card
  });
});
