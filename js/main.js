// Almost everything interactive on the page is Bootstrap's own JS
// (collapse, dropdown, tabs, carousel, scrollspy). This file only adds
// the small bit Bootstrap doesn't do for me.

// Close the mobile menu after picking a link, so the page isn't covered by it.
const mobileMenu = document.getElementById("mobileMenu");

document.querySelectorAll("#mobileMenu a.mobile-link").forEach(function (link) {
  link.addEventListener("click", function () {
    bootstrap.Collapse.getOrCreateInstance(mobileMenu).hide();
  });
});
