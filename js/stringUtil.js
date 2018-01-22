var UTIL = (function(s) {

  //setting up sub module
    var sub = s.string = s.string || {};  //if it exists we'll use that, if not will 
                                          //create an empty object



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


  //public methods/properties
  sub.numChar = numChar;
  sub.breakOut = breakOut;


  return s;



})(UTIL || {});