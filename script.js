(function(){
    var loadScript = function(url, callback){

      /* JavaScript that will load the jQuery library on Google's CDN.
         We recommend this code: https://snipplr.com/view/18756/loadscript/.
         Once the jQuery library is loaded, the callback function will be executed. */

    };

    var myAppJavaScript = function($){
        $( document ).ready(function() {
            $('.status').after('<p>HOLA MUNDO</p>');
        });
    };

    // For jQuery version 1.7
    var target = [1, 7, 0];

    var current = typeof jQuery === 'undefined' ? [0,0,0] : $.fn.jquery.split('.').map(function(item) {
        return parseInt(item);
    });

    if (current[0] < target[0] || (current[0] == target[0] && current[1] < target[1])) {
      loadScript('//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js', function(){
        var jQuery1101 = jQuery.noConflict(true);
        myAppJavaScript(jQuery1101);
      });
    } else {
      myAppJavaScript(jQuery);
    }
})();
