var MAINAPP = (function(nsp,quizU) {

    //sub module
    var sub = nsp.nomain = nsp.nomain || {};

    //dependency
    var nomain = nsp.nomain;


    var domReady = function(funct) {
        document.addEventListener('DOMContentLoaded', function(){ 
            if (typeof funct === "function") {
                funct();
            }
        }, false);
    };

    
    domReady(function() {
        quizU.initQuiz();
        
    });



    /*

    - 2 global variables: mainaupp and util
    - 3 modules, 3 separate js files: dom, quiz, string
    - dependencies

    */



    return nsp;
    
})(MAINAPP || {}, UTIL.quiz );