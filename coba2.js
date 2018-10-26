// ==UserScript==
// @name         BitTube No Offline
// @namespace    http://tampermonkey.net/
// @version      1.0.4
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
        'https://bit.tube/play?hash=BR0g8OFHEBm9x8Z7HUMB&channel=36465',
        'https://bit.tube/play?hash=BRxrIKGX2F5NanlSRyKW&channel=36465',
        'https://bit.tube/play?hash=BRh8kCis3qowgIcxdwJW&channel=87497',
        'https://bit.tube/play?hash=BRGax85LinQ5bvP7DvPb&channel=87497',
        'https://bit.tube/play?hash=BRLDt5un7ug9TyDuw4ty&channel=147507&for=fps',
        'https://bit.tube/play?hash=BR1kCJHkChuZ2jv6rnuV&channel=147507&for=fps',
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