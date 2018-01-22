var EnterData = (function(nsp) {

    //data handler
    var jsonObj = {};

   //output heading
   var isheading = function() {
        var title = document.querySelector('h2.title').innerHTML = jsonObj.heading;
        return title;
    },

    //output list-items
    islist = function() {
        //debugger;
        var b = 1;
        var c = 1;
        var obj = jsonObj.listItems;
        for(var prop in obj) {
            document.getElementById("b"+ b).
            innerHTML = obj[prop]['x'+c];
            b++;c++;
        }

    },

    //load data.json
    loadData = function(path) {
        var xhr = new XMLHttpRequest();
        xhr.overrideMimeType('application/json');
        xhr.open('GET',path);
        xhr.onreadystatechange = function() {
            if((xhr.readyState == 4) && (xhr.status == 200)) {
                jsonObj = JSON.parse(xhr.responseText);
                console.log(jsonObj);
                //call heading,list fns
                isheading();
                islist();
            }
        }
        xhr.send();
    };

    //call fn
    loadData('./data.json');


    //public fns and methods
    nsp.jsonObj = jsonObj;
    nsp.loadData = loadData;


    
    return nsp;

        






})(EnterData || {});