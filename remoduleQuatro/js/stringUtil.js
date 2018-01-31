var UTIL = (function(s) {
    //Set up sub Module
    var sub = s.string = s.string || {};

    
    var numChar = function(str, char) {
                //return (str.match(new RegExp(char, 'g')) || []).length;
                return (str.split(char).length - 1);
            },

    breakOut = function(str, delim) {
        var arr = str.split(delim);
        return arr.map(function(val) {
            return val.trim();
        });
    },

    getRandomBgColor = function() {
        var letter = '0123456789ABCDEF',
            bcolor = '#';
            for(var i=0; i < 6; i++) {
                bcolor += letter[Math.floor(Math.random() * 16)];
            }

            return bcolor;
    },

    getRandomColor = function() {
        var letter = '0123456789ABCDEF',
            color = '#';
            for(var i=0; i < 6; i++) {
                color += letter[Math.floor(Math.random() * 16)];
            }

            return color;
    };

    //Public Methods
    sub.numChar = numChar;
    sub.breakOut = breakOut;
    sub.getRandomBgColor = getRandomBgColor;
    sub.getRandomColor = getRandomColor;

    return s;
})(UTIL || {});