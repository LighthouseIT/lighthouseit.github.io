document.addEventListener("DOMContentLoaded", function () {
  Prism.highlightAll();
  menu();

  var shellSessingCodeElems = document.querySelectorAll('code.language-shellsession');
  shellSessingCodeElems.forEach(function(elem) {
    elem.innerHTML = elem.innerHTML.replace(/^\s*\$/, "<span class='dollar-sign'>$</span>");
  });

  function menu() {
    var location = window.location.href;
    var menu = document.getElementsByClassName('lh-menu')[0];
    var menuItems = menu.querySelectorAll('[class="lh-menu-item"]');

    menuItems.forEach(function(item) {
      var link = item.querySelector('a').attributes['href'].value;
      if (location === link) {
        item.classList.toggle('lh-menu-item-active');
      }
    });
  }
});