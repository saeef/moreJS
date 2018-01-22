var UTIL = (function(g) {

    //sub module
    var sub = g.gen = g.gen || {}; 


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

    //Public Method
    sub.domReady = domReady;

    return g;


})(UTIL || {});