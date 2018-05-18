document.addEventListener("DOMContentLoaded", function () {
  setLanguage();

  function setLanguage () {
    var regex = /^([^-]+)/ig;
    var navigatorLang = navigator.language || navigator.userLanguage;
    var lang = regex.exec(navigatorLang);
    var locationString = window.location.toString();

    if (['pt', 'en'].indexOf(locationString) === -1) {
      window.location.href = locationString + '/' + lang[0];
    }
  }
});