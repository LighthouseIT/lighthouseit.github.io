document.addEventListener("DOMContentLoaded", function () {
  setLanguage();

  function setLanguage () {
    var regex = /^([^-]+)/ig;
    var navigatorLang = navigator.language || navigator.userLanguage;
    var lang = regex.exec(navigatorLang);
    var locationString = window.location.toString();

    if (locationString.indexOf('pt') === -1 && locationString.indexOf('en') === -1) {
      lang = lang[0] === 'pt' || lang[0] === 'en' ? lang[0] : 'pt';
      window.location.href = `${window.location}/${lang}`;
    }
  }
});