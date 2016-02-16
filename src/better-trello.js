// ==UserScript==
// @name         better-trello
// @namespace    https://github.com/andretf/better-trello
// @version      0.1.0
// @description  Userscript to improve Trello user experience
// @author       Andre Figueiredo
// @match        https://trello.com/b/oMbuK9ki/greencents
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  jQuery('head').append('<style>\
.list-wrapper{margin:0 .14%;width:14%;min-width:110px;max-width:270px}.list-wrapper:first-child{margin-left:.1%}.list-cards{margin:0;padding:0 2%}.list-card{border-bottom:0;box-shadow:-2px 2px 5px 0 #888;margin-bottom:8px}.list-card-labels{bottom:0;left:0;margin:0;position:absolute;right:0;top:0;opacity:.5;z-index:-1}.list-card-labels .card-label{bottom:0;left:0;margin:0;position:absolute;right:0;top:0;font-size:12px;height:auto;line-height:normal;text-align:right;width:auto}.ticket-title{opacity:.8}@media(max-width:1200px){.ticket-title{display:none}}.list-card-details{color:#3d3d3d;min-height:45px}\
</style>');

  var betterTrello = (function() {

    function getText(element) {
      var i = element.childNodes.length;
      while (--i) {
        if (element.childNodes[i].nodeType === Node.TEXT_NODE) {
          return element.childNodes[i].nodeValue;
        }
      }
      return '';
    }

    function formatJiraTicket(_, element) {
      var regexp = betterTrello.options.jiraTicketRegex;
      var text = getText(element);
      var ticketID = (text.match(regexp) || [text])[0];
      if (ticketID !== text) {
        jQuery(element)
          .text(ticketID)
          .append('<small class="ticket-title"> ' + text.replace(regexp, '') + '</small>');
      }
    }

    return {
      options: {
        jiraTicketRegex: /^[A-z]+-\d+/
      },
      formatJiraCards: function () {
        jQuery('.list-card-title').each(formatJiraTicket);
      }
    };
  })();

  setTimeout(betterTrello.formatJiraCards, 500);
  setInterval(betterTrello.formatJiraCards, 1000);
})();
