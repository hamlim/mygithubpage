$(document).ready(function(){
    //document is loaded
    //get the progress bar
    var progressBar = document.getElementById('progress-bar');
    //get current date
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    var d = day.toString();
    progressBar.value = d;


    // var mustachAttachPoint = document.getElementById('mustache-attach')
    // //dynamic loading of status updates
    // var templateSettings = {
    //     "async": true,
    //     "url": "./status.mst",
    //     "method": "GET"
    // }
    // var dataSettings = {
    //     "async",
    //     "url": "./status.json",
    //     "method": "GET"
    // }
    // $.ajax(dataSettings).done(function(response){
    //     $.ajax(templateSettings).done(function(resp){
    //         var template = resp;
    //         var rendered = Mustache.render(template, response);
    //         mustachAttachPoint.innerHTML = rendered;
    //     });
    //
    //
    // });


});
