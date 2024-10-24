// Variable to keep track of the currently flipped card
let currentFlippedCard = null;

// Handle flipping the card when the front is clicked
document.querySelectorAll('.card-front').forEach(front => {
  front.addEventListener('click', function(event) {
    const card = this.closest('.card'); // Find the closest card to the clicked front
    
    // If there's a currently flipped card and it's not the clicked card, flip it back
    if (currentFlippedCard && currentFlippedCard !== card) {
      currentFlippedCard.classList.remove('flip'); // Flip back the currently flipped card
    }

    // Flip the clicked card
    card.classList.toggle('flip');

    // Update the current flipped card
    currentFlippedCard = card.classList.contains('flip') ? card : null;
  });
});

// Handle closing the card only when the "X" button is clicked
document.querySelectorAll('.close-btn').forEach(button => {
  button.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the click from propagating to the card
    const card = this.closest('.card'); // Find the closest card to the clicked button
    card.classList.remove('flip'); // Remove the flip class to show the front

    // Reset current flipped card if it's the one being closed
    if (currentFlippedCard === card) {
      currentFlippedCard = null; // Reset the currently flipped card
    }
  });
});
