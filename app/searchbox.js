(function(app) {
  app.SearchBox =
    ng.core.Component({
      selector: 'my-app',
      templateUrl: 'app/searchbox.html',
      styleUrls: ['app/searchbox.css']
    })
    .Class({
      constructor: function() {
        this.vm = {
          collapsed : true
        };
      },
      open: function(event, inputElement){
        if(this.vm.collapsed){
          inputElement.focus();
          inputElement.value = null;
          this.vm.collapsed = false;
          event.stopPropagation();
        }

      },
      close: function(event){
        if(!this.vm.collapsed){
          this.vm.collapsed = true;
          event.stopPropagation();
        }

      }
    });
})(window.app || (window.app = {}));
