(function(){
    var loadScript = function(url, callback){
     var scriptTag = document.createElement("script");
        scriptTag.id = "agus-jquery";
        scriptTag.src = url;

        scriptTag.onload = callback;
        scriptTag.onreadystatechange = callback;

        document.body.appendChild(scriptTag);

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
