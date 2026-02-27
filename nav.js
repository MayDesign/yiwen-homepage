// Shared navigation — single source of truth for both pages
(function() {
  // Detect which page we're on
  var isAbout = window.location.pathname.indexOf('about') !== -1;

  // Build nav HTML
  var navHTML = ''
    + '<a class="nav-name" href="index.html">Y. Ding</a>'
    + '<button class="nav-toggle" aria-label="Menu">'
    +   '<span></span><span></span><span></span>'
    + '</button>'
    + '<ul class="nav-links">'
    +   '<li><a href="' + (isAbout ? 'index.html#research' : '#research') + '">Research</a></li>'
    +   '<li><a href="' + (isAbout ? 'index.html#teaching' : '#teaching') + '">Teaching</a></li>'
    +   '<li><a href="' + (isAbout ? 'index.html#publications' : '#publications') + '">Publications & Writings</a></li>'
    +   '<li><a href="about.html"' + (isAbout ? ' class="active"' : '') + '>About</a></li>'
    + '</ul>';

  // Insert into the <nav> element
  var nav = document.querySelector('nav');
  if (nav) {
    nav.innerHTML = navHTML;
  }

  // Hamburger toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function() {
      links.classList.toggle('open');
    });
  }

  // Close mobile nav when clicking a link
  document.querySelectorAll('.nav-links a').forEach(function(link) {
    link.addEventListener('click', function() {
      links.classList.remove('open');
    });
  });

  // Scroll to top on page load/refresh
  if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);
})();
