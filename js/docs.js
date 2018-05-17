document.addEventListener("DOMContentLoaded", function () {
  Prism.highlightAll();

  var shellSessingCodeElems = document.querySelectorAll('code.language-shellsession');
  shellSessingCodeElems.forEach(function(elem) {
    elem.innerHTML = elem.innerHTML.replace(/^\s*\$/, "<span class='dollar-sign'>$</span>");
  });
});