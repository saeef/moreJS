var MAINAPP = (function(app) {

    var sub = app.nomain = app.nomain || {};

    var jsonObj = {};
    
    //path to loading file
    var loadJSON = function(path) {
        //var path = ('../data.json');
        //new obj inst
        var xhr = new XMLHttpRequest();
        //define mime type
        xhr.overrideMimeType('application/json');
        //open:http verb and path or url
        xhr.open('GET',path);
        //callback
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4 && xhr.status == 200) {
               sub.jsonObj = JSON.parse(xhr.responseText);
               console.log(jsonObj);
               //access json dot notation now
               console.log(MAINAPP.nomain.jsonObj[0].color);
               
            }

        };
        xhr.send(null);
        
    };
    

    loadJSON('../data.json');

    




    //public
    sub.jsonObj = jsonObj;
    sub.loadJSON = loadJSON;




    return app;




})(MAINAPP || {});