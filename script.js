// Handle flipping the card when the entire card is clicked
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function(event) {
    // Check if the click was not on the close button
    if (!event.target.classList.contains('close-btn')) {
      card.classList.toggle('flip'); // Toggle the flip class
    }
  });
});

// Handle flipping back the card when "X" is clicked
document.querySelectorAll('.close-btn').forEach(button => {
  button.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the event from bubbling up to the card
    const card = this.closest('.card'); // Find the closest card to the clicked button
    card.classList.remove('flip');
  });
});