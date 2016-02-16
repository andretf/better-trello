// ==UserScript==
// @name         better-trello
// @namespace    https://github.com/andretf/better-trello
// @version      0.1.0
// @description  Userscript to improve Trello user experience
// @author       Andre Figueiredo
// @match        https://trello.com/b/oMbuK9ki/greencents
// @grant        none
// ==/UserScript==

(function() {
    /* jshint -W097 */
    'use strict';

    $(document).ready(function(){

        var css = '';
        css += '.list-wrapper:first-child { margin-left: 0.1% }';
        css += '.list-wrapper { margin: 0 0.14%; width: 14%; }';
        css += '.list-cards { margin: 0; padding: 0 2%; }';
        css += '.ticket-title { color: #555; }';

        var cards = {

        };


        setTimeout(function() {
            $('.list-wrapper .list-card-title').each(function(index, element){
                var text = element.innerText;
                var regex = new RegExp(/^[A-z]+-\d+\s-\s/);
                if (regex.test(text)) {
                    $(element).text(text.match(/^[A-z]+-\d+/)[0]).append('<small class="ticket-title"> - ' + text.split(regex)[1] + '</small>');
                }
            });
        }, 300);
    });

})();