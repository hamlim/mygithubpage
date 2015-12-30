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
});
