var UTIL = (function(q) {

    //sub-module
    var sub = q.quiz = q.quiz || {};

    //dependencies
    var isDom = q.dom,
        isString = q.string,
        $ = q.dom.$;
    
    var checkAnswer = function(value) {
        var ans,
        correct,
        result;

        if (value !== "") {
            ans = isString.breakOut(isDom.data($('#q01'), 'answer'), ",");
            correct = ans.every(function(val) {
                return (value.indexOf(val) > -1);
            });
            
            result = (correct) ? 'correct' : 'incorrect';
            displayFeedback(result);
        } else {
            displayFeedback('no-answer');
        }
        
    },
        
    displayFeedback = function(result) {
        var feedback = isDom.$('.feedback.' + result);
        isDom.addClass(feedback, 'visible');
    
    },
        
    hideFeedback = function() {
        var feedback = isDom.$('.feedback.visible');
        isDom.removeClass(feedback, 'visible');
    };


    //public
    sub.checkAnswer = checkAnswer;
    sub.displayFeedback = displayFeedback;
    sub.hideFeedback = hideFeedback;

    return q;


})(UTIL || {});