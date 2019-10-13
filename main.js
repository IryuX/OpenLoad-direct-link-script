var button = document.createElement('div');
button.innerHTML = `<button id="getLink" type="button" style="position: absolute; top: 0px;">Find Link : Press me after: 1. Setting player to OpenLoad 2. Clicking the play button</button>`;
var sidebar = document.getElementById('mediaspace_wrapper');
document.body.appendChild(button);

var clickAction = function () {
  var location = $('video')[0].baseURI
  var index = location.indexOf('er/')
  var url = location.slice(0, index + 2)
  var l = $('video').attr('src');
  var link = url + l
  if (l !== undefined) {
    window.open(link, '_self');
  } else {
    window.alert('Something Went Wrong, Make sure you follow instructions');
  }
};

button.addEventListener('click', clickAction, false);