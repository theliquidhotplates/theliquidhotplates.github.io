// Letter-reveal effect: splits any element with class="reveal-text" into
// individual letters (each wrapped in its own <span>), then lets CSS animate
// them in with a staggered delay (see .reveal-text .letter in styles.css).
// Splitting into ready-made elements up front like this - rather than
// inserting characters one at a time on a timer - is what makes it look
// smooth: the browser animates a batch of already-in-place elements in one
// go, instead of repeatedly editing the page's text.
//
// Used on: the homepage hero title/tagline, the Events page title, and every
// event subpage's hero title/date line. Just add class="reveal-text" to any
// heading and include this script (adjusting the src path for how deep the
// page is) to reuse it anywhere else too.
//
// Want to control exactly where a long title breaks onto a 2nd line (e.g.
// "ICCA West Quarterfinals 2026" breaking as "ICCA West" / "Quarterfinals
// 2026" instead of wherever the browser happens to wrap it, which can end up
// splitting a number in half)? Just put a literal <br> in the HTML where you
// want the break, e.g.:
//   <h1 class="reveal-text">ICCA West<br>Quarterfinals 2026</h1>
// This script preserves that <br> as a real line break instead of discarding
// it, and the letters keep animating in as one continuous sequence across it.
//
// CHANGE `letterDelayMs` to make letters cascade faster/slower, and
// `tagGapMs` to change the pause between one reveal-text element finishing
// and the next one starting (only matters if a page has more than one, like
// a hero title + its date/tagline line).
document.addEventListener('DOMContentLoaded', () => {
  const letterDelayMs = 30;
  const letterAnimMs = 600; // must match the 0.6s in the letter-reveal CSS animation
  const tagGapMs = 150;

  const revealEls = document.querySelectorAll('.reveal-text');

  // Shrink-to-fit: a long title can still be too wide for the screen at its
  // default font-size. Instead of guessing one fixed font-size that happens
  // to fit every title on every page, this measures each one and shrinks it
  // step by step until it actually fits. Runs before the letters get split
  // into spans below. (Works fine even on titles with a manual <br> in them -
  // el.scrollWidth then reflects the widest of the two lines, which is
  // exactly what needs to fit.)
  revealEls.forEach(el => {
    // Important: measure against the outer .hero section, not el's immediate
    // parent (.hero-content). .hero-content has its own max-width and, being
    // a flex item, doesn't actually shrink below that even on a narrower
    // screen - so it's not a reliable stand-in for the real available width.
    // .hero itself is a normal block-level section, genuinely constrained by
    // the actual viewport, which is what we need to measure against.
    const boundary = el.closest('.hero') || el.parentElement;
    if (!boundary) return;
    const boundaryStyle = getComputedStyle(boundary);
    const availableWidth = boundary.clientWidth - parseFloat(boundaryStyle.paddingLeft) - parseFloat(boundaryStyle.paddingRight);
    let fontSize = parseFloat(getComputedStyle(el).fontSize);
    const minFontSize = 16; // px - CHANGE: the smallest this is allowed to shrink to
    let guard = 0; // safety net so a layout quirk can't turn this into an infinite loop
    while (el.scrollWidth > availableWidth && fontSize > minFontSize && guard < 60) {
      fontSize -= 2;
      el.style.fontSize = fontSize + 'px';
      guard++;
    }
  });

  let nextStartDelay = 0;

  revealEls.forEach(el => {
    // Walk the element's existing child nodes instead of flattening to
    // textContent, so any manual <br> already sitting in the HTML (see the
    // comment at the top of this file) survives instead of being silently
    // discarded when the text gets split into letters.
    const originalNodes = Array.from(el.childNodes);
    el.textContent = '';

    let letterIndex = 0; // keeps counting across a <br>, so it still reads as one continuous reveal
    let totalLetters = 0;

    originalNodes.forEach(node => {
      if (node.nodeName === 'BR') {
        el.appendChild(document.createElement('br'));
        return;
      }

      // Split into words first, and wrap each word's letters together in
      // their own inline-block, nowrap span. This keeps every word visually
      // intact as one unbreakable unit - important because once individual
      // letters become separate inline-block elements (needed so each one
      // can animate independently), the browser loses any sense of "this is
      // one word" and can otherwise insert a line break between ANY two
      // letters, not just at real spaces - which is exactly what was causing
      // titles to wrap mid-word (e.g. "Record" splitting into "Rec"/"ord").
      // A real space character (not part of any word-span) sits between the
      // word-spans below, so the browser can still wrap normally there.
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
          el.appendChild(document.createTextNode(' ')); // a normal, real space - a genuine break opportunity
        }
      });
    });

    // Queue up the next reveal-text element (if there is one) to start right
    // after this one's last letter finishes animating in.
    nextStartDelay = nextStartDelay + (totalLetters - 1) * letterDelayMs + letterAnimMs + tagGapMs;
  });
});