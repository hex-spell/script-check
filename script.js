(function(){
    var loadScript = function(url, callback){

      /* JavaScript that will load the jQuery library on Google's CDN.
         We recommend this code: https://snipplr.com/view/18756/loadscript/.
         Once the jQuery library is loaded, the callback function will be executed. */

    };

    var myAppJavaScript = function($){
      $('.status).after(`<div class="col-12 col-md-8">
                    <div class="status panel">
                        <div class="status-icon"><svg class="svg" width="26px" height="26px" viewBox="0 0 1024 1024"><path d="M984.3,945.9H880.7V803.4c0-62.4-26.4-122.1-72.4-163.9l-74.2-67.3c-17.3-15.6-26.7-37-26.7-60.4c0-23.3,9.4-44.8,26.7-60.4 l74.2-67.3c46-41.8,72.4-101.5,72.4-163.9V77.6h103.6c19.1,0,34.5-15.6,34.5-34.8c0-19.2-15.5-34.8-34.5-34.8H40.4	C21.4,8,5.9,23.6,5.9,42.8c0,19.2,15.5,34.8,34.5,34.8H144v142.6c0,62.4,26.4,122.1,72.4,163.9l74.2,67.3 c17.2,15.6,26.7,37,26.7,60.4c0,23.4-9.4,44.8-26.7,60.4l-74.2,67.3C170.4,681.2,144,741,144,803.4v142.6H40.4 c-19.1,0-34.5,15.6-34.5,34.8c0,19.2,15.5,34.8,34.5,34.8h943.8c19.1,0,34.5-15.6,34.5-34.8C1018.8,961.5,1003.3,945.9,984.3,945.9z M213.1,803.4c0-42.7,18.1-83.6,49.5-112.2l74.2-67.3c31.5-28.6,49.5-69.4,49.5-112.1c0-42.7-18-83.6-49.5-112.2l-74.2-67.3 c-31.5-28.5-49.6-69.4-49.6-112.1V77.6h598.5v142.6c0,42.7-18.1,83.6-49.5,112.2l-74.2,67.3c-31.5,28.6-49.5,69.4-49.5,112.1 c0,42.7,18.1,83.6,49.5,112.2l74.2,67.3c31.5,28.5,49.6,69.5,49.6,112.1v142.6H213.1V803.4z"></path></svg></div>
                        <div
                            class="status-content">
                            <h3 class="heading-small m-none">Hola mundo como estan?</h3>
                            <p class="m-top-quarter m-bottom-none"></p>
                            <div class="custom-payment text-pre-wrap">
                                <p class="m-bottom-none m-top-quarter"></p>
                            </div>
                    </div>
                </div>`);
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
