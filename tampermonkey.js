// ==UserScript==
// @name         Get direct links of OpenLoad
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  Displays a button in the openload frame
// @author       Iryu
// @match       https://openload.pw/*
// @match       https://oload.monster/*
// @grant        none
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

(function() {
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
  window.open(link, '_self');
};

button.addEventListener('click', clickAction, false);
})();