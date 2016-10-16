// ==UserScript==
// @name         better-trello
// @namespace    https://github.com/andretf/better-trello
// @version      0.1.0
// @description  Userscript to improve Trello user experience
// @author       Andre Figueiredo
// @match        https://trello.com/b/oMbuK9ki/greencents
// @grant        none
// ==/UserScript==
!function(){"use strict";jQuery("head").append("<style>.list-wrapper{margin:0 .14%;max-width:270px;min-width:110px;width:14%}.list-wrapper:first-child{margin-left:.1%}.list{box-shadow:-2px 2px 7px 0 rgba(0,0,0,0.6)}.list-cards{background-color:#fefefe;border-bottom:1px solid #ccc;border-top:1px solid #ccc;margin:0;padding:5px 2% 0 2%}.list-card{border:1px solid rgba(0,0,0,0.3);border-radius:4px;box-shadow:-2px 2px 6px 0 rgba(0,0,0,0.4);margin-bottom:8px}.list-card-title{padding-top:5px}.list-card-labels{bottom:0;left:0;margin:0;position:absolute;right:0;top:0;opacity:.5;z-index:-1}.list-card-labels .card-label{bottom:0;left:0;margin:0;position:absolute;right:0;top:0;font-size:12px;height:auto;line-height:normal;text-align:right;width:auto}.ticket-title{display:block;opacity:.8}@media(max-width:1999px){.ticket-title{display:none}}.list-card-details{color:#3d3d3d;min-height:45px}</style>");var t=function(){function i(t){for(var i=t.childNodes.length;--i;)if(t.childNodes[i].nodeType===Node.TEXT_NODE)return t.childNodes[i].nodeValue;return""}function e(e,a){var r=t.options.jiraTicketRegex,o=i(a),d=(o.match(r)||[o])[0];d!==o&&jQuery(a).text(d).append('<small class="ticket-title"> '+o.replace(r,"")+"</small>")}return{options:{jiraTicketRegex:/^[A-z]+-\d+/},formatJiraCards:function(){jQuery(".list-card-title").each(e)}}}();setTimeout(t.formatJiraCards,500),setInterval(t.formatJiraCards,1e3)}();