var MAINAUPP = (function(app) {
    //once parsed json
    var jsonObj = {};

    //path to loading file
    var loadJSON = function(path) {
        //new obj inst
        var xhr = XMLHttpRequest();
        //define mime type
        xhr.overrideMimeType('application/json');
        //open:http verb and path or url
        xhr.open('GET',path);
        //callback
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4) {
                app.jsonObj = JSON.parse(xhr.responseText);
            }

        };
        xhr.send(null);

    };



    




    //public
    app.jsonObj = jsonObj;
    app.loadJSON = loadJSON;




    return app;




})(MAINAUPP || {});