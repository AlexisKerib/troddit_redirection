// ==UserScript==
// @name         troddit redirection
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  redirect to www.troddit.com
// @author       AlexisKerib
// @match        https://www.reddit.com/*
// @icon         https://www.google.com/s2/favicons?domain=reddit.com
// @grant        none
// @run-at       document-start
// ==/UserScript==

// fork from https://greasyfork.org/scripts/439472-old-reddit

(function() {
    var loc = "" + window.location;
    var parts = loc.split('/');
    if (parts.includes("r")) {
        parts.forEach(function(item, i) { if (item == "www.reddit.com") parts[i] = "www.troddit.com"; });
        loc = parts.join('/');
    } else if (parts.length == 3 || (parts.length == 4 && parts[3] == "")) {
        loc = window.location.protocol + "//www.troddit.com";
    } else {
        return
    }
    window.location.replace(loc);
})();