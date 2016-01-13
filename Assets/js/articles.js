function copyTextToClipboard(text) {
  var textArea = document.createElement("textarea");

  //
  // *** This styling is an extra step which is likely not required. ***
  //
  // Why is it here? To ensure:
  // 1. the element is able to have focus and selection.
  // 2. if element was to flash render it has minimal visual impact.
  // 3. less flakyness with selection and copying which **might** occur if
  //    the textarea element is not visible.
  //
  // The likelihood is the element won't even render, not even a flash,
  // so some of these are just precautions. However in IE the element
  // is visible whilst the popup box asking the user for permission for
  // the web page to copy to the clipboard.
  //

  // Place in top-left corner of screen regardless of scroll position.
  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;

  // Ensure it has a small width and height. Setting to 1px / 1em
  // doesn't work as this gives a negative w/h on some browsers.
  textArea.style.width = '2em';
  textArea.style.height = '2em';

  // We don't need padding, reducing the size if it does flash render.
  textArea.style.padding = 0;

  // Clean up any borders.
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';

  // Avoid flash of white box if rendered for any reason.
  textArea.style.background = 'transparent';


  textArea.value = text;

  document.body.appendChild(textArea);

  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
    if(msg === 'successful'){
        notie.alert(1, 'You copied the link to that paragraph! Share it wisely! :D', 3);
    } else {
        notie.alert(2, 'It looks like your browser won\'t let you copy the link! :( ', 3);
    }
  } catch (err) {
    console.log('Oops, unable to copy');
    notie.alert(2, 'It looks like your browser won\'t let you copy the link! :( ', 3);
  }

  document.body.removeChild(textArea);
}

$(document).ready(function() {
    //we want to notify readers that they can click on individual paragraphs to copy a link to that paragraph
    notie.alert(1, 'You can click on any paragraph to copy the link to it for sharing!', 5);
    //highight the section that was shared
    $(window.location.hash).effect("highlight", {color: '#FFDC00'}, 3000);

    //ok now on hover of (.hover-link), show an anchor to it's left
    $('.hover-link').hover(function(){
        //ok we want to render an anchor to the left
        var elemID = this.getAttribute('id');
        var showAnchor = document.getElementById(elemID + "-anchor");
        var leftCoord = $(this).offset().left;
        var topCoord = $(this).height();
        showAnchor.style.display = "block";
        showAnchor.style.position = "relative";
        showAnchor.style.left = "-20px";
        var totalTop = "-" + topCoord + "px";
        showAnchor.style.top = totalTop;
    }, function() {
        var elemID = this.getAttribute('id');
        var showAnchor = document.getElementById(elemID + "-anchor");
        showAnchor.style.display = "none";
    });
    $('.hover-link').click(function() {
        var elemID = this.getAttribute('id');
        var urlFirst = 'http://' + window.location.hostname + window.location.pathname;
        var copytext = urlFirst + "#" + elemID;
        copyTextToClipboard(copytext);
    })
});
