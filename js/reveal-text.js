// Splits any .reveal-text element into per-letter spans that animate in with
// a staggered delay
// Sizing is handled entirely by CSS clamp() now, not JS - (.hero h1 / .hero p.)
document.addEventListener('DOMContentLoaded', () => {
  const letterDelayMs = 30;
  const letterAnimMs = 600; // must match the 0.6s in the letter-reveal CSS animation
  const tagGapMs = 150;

  const revealEls = document.querySelectorAll('.reveal-text');
  let nextStartDelay = 0;

  revealEls.forEach(el => {
    // Walk child nodes (not textContent) so a manual <br> in the HTML - used
    // to control exactly where a long title breaks, e.g.
    // "ICCA West<br>Quarterfinals 2026" - survives as a real line break.
    const originalNodes = Array.from(el.childNodes);
    el.textContent = '';

    let letterIndex = 0;
    let totalLetters = 0;

    originalNodes.forEach(node => {
      if (node.nodeName === 'BR') {
        el.appendChild(document.createElement('br'));
        return;
      }

      // Each word gets wrapped in its own nowrap span so letters can still
      // animate individually without the browser losing track of word
      // boundaries (which otherwise lets it break lines mid-word). Real
      // spaces sit between word-spans so normal wrapping still works.
      const words = node.textContent.split(' ');
      words.forEach((word, wordIdx) => {
        if (word.length > 0) {
          const wordSpan = document.createElement('span');
          wordSpan.style.display = 'inline-block';
          wordSpan.style.whiteSpace = 'nowrap';
          [...word].forEach(char => {
            const letterSpan = document.createElement('span');
            letterSpan.className = 'letter';
            letterSpan.textContent = char;
            letterSpan.style.setProperty('--letter-delay', `${nextStartDelay + letterIndex * letterDelayMs}ms`);
            wordSpan.appendChild(letterSpan);
            letterIndex++;
            totalLetters++;
          });
          el.appendChild(wordSpan);
        }
        if (wordIdx < words.length - 1) {
          el.appendChild(document.createTextNode(' '));
        }
      });
    });

    nextStartDelay = nextStartDelay + (totalLetters - 1) * letterDelayMs + letterAnimMs + tagGapMs;
  });
});