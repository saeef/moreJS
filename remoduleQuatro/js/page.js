/*

 this module loads page content that I've added to the json file under html

*/

var UTIL = (function(p) {

    //sub module
    var sub = p.page = p.page || {};
    
    var path = 'JSON/content.json',
        callback = updateJsonPage;
    
    //load json file
    var loadJsonData = function(path,callback,id) {
        id = id || undefined;
        var response,
            callback;
        xhr = new XMLHttpRequest();
        xhr.overrideMimeType('application/json');
        xhr.onreadystatechange = function() {
            //debugger;
            if((this.readyState == 4) && (this.status == 200)) {
                console.log(typeof this.responseText);
                if(path.substring(path.length - 4) === 'html') {
                    response = this.responseText;
                    callback(response,id);
                }else if(path.substring(path.length - 4) === 'json') {
                    response = JSON.parse(this.responseText);
                    response = response.html;  
                    callback(response,id);
                }
                
            }
        };

        xhr.open('GET',path, true);
        xhr.send();

    },

    updateJsonPage = function(res,id) {
        //console.log(res);
        id = id || undefined;
        //debugger;
        
        var headerH1 = document.querySelector('.mainContent header h1').
                       innerText = res[0].header[0].h1,
            headerH2 = document.querySelector('.mainContent header h3').
                       innerText = res[0].header[1].h3,
            headerH4 = document.querySelector('.mainContent header h4').
                       innerText = res[0].header[2].h4,
            //all questions           
            totalQuestions = document.querySelectorAll('.allquestions')[0].
                       children[0].innerText = res[1].allqtns[0].h41,
            questionsCompleted = document.querySelectorAll('.allquestions')[0].
                       children[1].innerText = res[1].allqtns[1].h42,

            //footer
            footel1 = document.querySelectorAll('.footertop ul')[0].children[0].
                       innerHTML = res[3].footer[0].li1,
            footel2 = document.querySelectorAll('.footertop ul')[0].children[1].
                       innerHTML = res[3].footer[1].li2,
            footel3 = document.querySelectorAll('.footertop ul')[0].children[2].
                       innerHTML =  res[3].footer[2].li3,
            footcopy = document.querySelector('.copyreg').
                       innerHTML =  res[3].footer[3].copyreg;

    
    },

    updatereshtml = function(res,id) {
        document.getElementById(id).innerHTML = res;
    };






    
    



    //public jsondata
    sub.loadJsonData = loadJsonData;
    //html update
    sub.updatereshtml = updatereshtml;
    //update innerpage data
    sub.updateJsonPage = updateJsonPage;
    





    return p;




})(UTIL || {});