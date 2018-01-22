var UTIL = (function(g) {

    /*
    Other Utilities
    */

    var domReady = function(funct) {
        document.addEventListener('DOMContentLoaded', function(){ 
            if (typeof funct === "function") {
                funct();
            }
        }, false);
    };

    //public
    g.domReady = domReady;
    return g;


})(UTIL || {});