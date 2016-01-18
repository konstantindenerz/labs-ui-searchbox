(function(app) {
  document.addEventListener('DOMContentLoaded', function() {
    ng.platform.browser.bootstrap(app.SearchBox);
  });
})(window.app || (window.app = {}));
