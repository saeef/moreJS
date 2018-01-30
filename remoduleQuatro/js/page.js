/*

 this module loads page content that I've added to the json file under html

*/

var UTIL = (function(p) {

    //sub module
    var sub = p.page = p.page || {};
    //response data
    var response;

    //load json file
    var loadHeader = function() {
        xhr = new XMLHttpRequest();
        xhr.overrideMimeType('application/json');
        xhr.onreadystatechange = function() {
            if((this.readyState == 4) && (this.status == 200)) {
                response = JSON.parse(this.responseText);
                response = response.html;  
                updatePage(response);
            }
        };

        xhr.open('GET','JSON/content.json', true);
        xhr.send();

    },

    updatePage = function(res) {
        //console.log(res);
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

            //navigation
            // navigationH3 = document.querySelector('.qNav h3').
            //            innerText = res[2].nav[0].h3;

            //footer
            footel1 = document.querySelectorAll('.footertop ul')[0].children[0].
                       innerHTML = res[3].footer[0].li1,
            footel2 = document.querySelectorAll('.footertop ul')[0].children[1].
                       innerHTML = res[3].footer[1].li2,
            footel3 = document.querySelectorAll('.footertop ul')[0].children[2].
                       innerHTML =  res[3].footer[2].li3,
            footcopy = document.querySelector('.copyreg').
                       innerHTML =  res[3].footer[3].copyreg;

    
    };

    //calling it from main.js just to have all my calls in one place
    //loadHeader();
    



    //public
    sub.loadHeader = loadHeader;
    





    return p;




})(UTIL || {});