document.addEventListener("DOMContentLoaded", function () {
  setLanguage();

  function setLanguage () {
    var languageRegex = /^([^-]+)/ig;
    var languagesJson = document.getElementById('site-languages-json').innerHTML;
    var languages = JSON.parse(languagesJson || "{}");
    var navlang = navigator.language || navigator.userLanguage;

    if ((match = languageRegex.exec(navlang))) {
      var language = match[1];

      if (languages.hasOwnProperty(language)) {
        var path = languages[language];
        window.location.replace(path);
      }
    }
  }
});