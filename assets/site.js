/* All navigation and galleries use native HTML. No framework is needed. */
/* Keep keyboard focus on the destination when following an in-page anchor. */
document.addEventListener('click', (event) => {
  const link = event.target.closest('a[href^="#"]');
  if (!link || !link.hash || link.hash === '#') return;
  const target = document.getElementById(decodeURIComponent(link.hash.slice(1)));
  if (!target) return;
  target.setAttribute('tabindex', '-1');
  target.focus({ preventScroll: true });
  target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
});
