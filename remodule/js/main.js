var MAINAPP = (function(nsp, $, domU, strU, quizU, genU) {

    /*
    Quiz Functionality
    */
    var initQuiz = function() {
            domU.assignEvent($('.fill-in-submit.btn-primary'),'click', function() {
                quizU.hideFeedback();
                quizU.checkAnswer($('#q01_ans')[0].value);
            });
        };
        

    genU.domReady(function() {
        initQuiz();
    });

    /* 

        - 2 global variables
        - 5 js files
        - 1 global - 1 module, 1 global - 4 sub modules
        - dependencies

   
    */

    return nsp;








//passing sub modules

    
})(MAINAPP || {}, UTIL.dom.$, UTIL.dom, UTIL.string, UTIL.quiz, UTIL.gen);