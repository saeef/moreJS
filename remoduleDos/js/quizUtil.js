var UTIL = (function(q) {

    var sub = q.quiz = q.quiz || {};

    //dependencies
    var domx = q.dom,
        $ = q.dom.$,
        strx = q.string;



    /*
    Quiz Functionality
    */
    var initQuiz = function() {
            domx.assignEvent($('.fill-in-submit.btn-primary'),'click', function() {
                hideFeedback();
                checkAnswer($('#q01_ans')[0].value);
            });
        },
        checkAnswer = function(value) {
            var ans,
                correct,
                result;

            if (value !== "") {
                ans = strx.breakOut(domx.data($('#q01'), 'answer'), ",");
                correct = ans.every(function(val) {
                    return (value.toUpperCase().indexOf(val.toUpperCase()) > -1);
                });
                result = (correct) ? 'correct' : 'incorrect';
                displayFeedback(result);
            } else {
                displayFeedback('no-answer');
            }
        },
        displayFeedback = function(result) {
            var feedback = $('.feedback.' + result);
            domx.addClass(feedback, 'visible');
        },
        hideFeedback = function() {
            var feedback = $('.feedback.visible');
            domx.removeClass(feedback, 'visible');
    };



    //public fns
    sub.initQuiz = initQuiz;
    sub.checkAnswer = checkAnswer;
    sub.displayFeedback = displayFeedback;
    sub.hideFeedback = hideFeedback;


    return q;



})(UTIL || {});