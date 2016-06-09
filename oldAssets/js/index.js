$(document).ready(function(){
    //document is loaded
    var mustacheAttachPoint = document.getElementById('mustache-card-posts');
    var settings = {
      "async": true,
      "url": "./card.mst",
      "method": "GET",
    };
    var postSettings = {
        "async": true,
        "url": "./posts.json",
        "method": "GET",
    };
    $.ajax(postSettings).done(function(posts){
        var postFeed = posts;
        $.ajax(settings).done(function (response) {
            var cardTemplate = response;
            var rendered = Mustache.render(cardTemplate, postFeed);
            mustacheAttachPoint.innerHTML = rendered;
        });
    });
});
