// Makes flip cards (member cards + the homepage's What We Do cards) work
// properly on touch devices. 

// On desktop, hovering with a mouse already flips them 
// this script is what makes tapping do the same job cleanly 
// on phones/tablets, where there's no real "hover" to rely on. 

// Tapping a card toggles it open; tapping it again, or
// tapping a different card, closes it - only one card stays flipped at a
// time. 

//Desktop mouse users never notice this script exists; it only
// changes anything on a touch tap.
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.flip-card, .info-flip-card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const alreadyFlipped = card.classList.contains('flipped');
      cards.forEach(c => c.classList.remove('flipped'));
      if (!alreadyFlipped) {
        card.classList.add('flipped');
      }
    });
  });
});