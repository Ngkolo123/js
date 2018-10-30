// ==UserScript==
// @name         BitTube No Offline
// @namespace    http://tampermonkey.net/
// @version      1.0.6
// @description  BitTube Never Stop Ever Again
// @author       ReaperBot
// @updateURL    https://raw.githubusercontent.com/Ngkolo123/js/master/coba2.js
// @downloadURL  https://raw.githubusercontent.com/Ngkolo123/js/master/coba2.js
// @match        *.bit.tube/*
// @grant        none
// ==/UserScript==
(function () {
    'use strict';
    var page
    var offline
    var selected
    var bittube
    

    var fileme = [
        'https://bit.tube/play?hash=BRN0qEGnoM9r79RJOU0A&channel=36465',
        'https://bit.tube/play?hash=BRbWEF0yNYzIQo0GIdIu&channel=36465',
        'https://bit.tube/play?hash=BRZyQ0ZmbNQyjkOfAi04&channel=87497',
        'https://bit.tube/play?hash=BRCUQmAojIg8SVHuwaT9&channel=87497',
        'https://bit.tube/play?hash=BRnSiGaONJEAhOuZdwzA&channel=147507',
        'https://bit.tube/play?hash=BRyrTPCGBj5Fj6Gn1YRP&channel=147507',
    ];
    
    setInterval(mySearch, 5000);
    
    function random_item(items) {
        return items[Math.floor(Math.random() * items.length)];
    }

    function mySearch() {
        page = document.body.textContent.toLowerCase() || document.body.innerText.toLowerCase();
        offline = page.indexOf("offline") !== -1;
        selected = page.indexOf("selected") !== -1;
        bittube = page.indexOf("bittube") == -1;
        if (offline || selected || bittube) {
            setTimeout(function () {
                window.location.href = random_item(fileme)
            }, 3000);
        }
    }

    

    function getRndInteger(min, max) {
        return (Math.floor(Math.random() * (max - min)) + min) * 1000;
    }

    setInterval(reloadOk, getRndInteger(3600, 6300));

    function reloadOk() {
        window.location.href = random_item(fileme)
    }

})();