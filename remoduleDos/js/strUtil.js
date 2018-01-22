var UTIL = (function(s) {
    var sub =  s.string = s.string || {};
    
    /*
    String Functionality
    */
    var numChar = function(str, char) {
             //return (str.match(new RegExp(char, 'g')) || []).length;
             return (str.split(char).length - 1);
        },

        breakOut = function(str, delim) {
             var arr = str.split(delim);
             return arr.map(function(val) {
                 return val.trim();
        });

    };




    //public fns
    sub.numChar = numChar;
    sub.breakOut = breakOut;


    return s;




})(UTIL || {});