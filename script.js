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
        var snipplet = `
        <div class="status panel">
            <div class="status-icon"><svg height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"></path></svg></div>
            <div
                class="status-content">
                <h3 class="heading-small m-none">Hola!</h3>
                <p class="m-top-quarter m-bottom-none">este es un mensaje de ejemplo en la Thank You Page</p>
                <div class="custom-payment text-pre-wrap">
                    <p class="m-bottom-none m-top-quarter"></p>
                </div>
        </div>
        `;
        $( document ).ready(function() {
            $('.status').after(snipplet);
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
