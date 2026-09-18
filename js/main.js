(function () {
  'use strict';

  // Reveal on scroll
  var revealEls = document.querySelectorAll('.reveal');
  var revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach(function (el) { revealObserver.observe(el); });

  // Sticky ATC after 300px scroll
  var stickyAtc = document.getElementById('stickyAtc');
  var buySection = document.getElementById('comprar');

  function toggleStickyAtc() {
    var scrolled = window.scrollY > 300;
    var pastBuy = buySection
      ? window.scrollY > buySection.offsetTop + buySection.offsetHeight - 200
      : false;
    stickyAtc.classList.toggle('is-visible', scrolled && !pastBuy);
  }

  window.addEventListener('scroll', toggleStickyAtc, { passive: true });
  toggleStickyAtc();

  // Product gallery thumbnails
  var mainPhoto = document.getElementById('buyMainPhoto');
  var thumbs = document.querySelectorAll('.buy__thumb');

  thumbs.forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      var src = thumb.getAttribute('data-img');
      if (mainPhoto && src) mainPhoto.src = src;
      thumbs.forEach(function (t) { t.classList.remove('is-active'); });
      thumb.classList.add('is-active');
    });
  });
})();
