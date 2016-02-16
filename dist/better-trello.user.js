// ==UserScript==
// @name         better-trello
// @namespace    https://github.com/andretf/better-trello
// @version      0.1.0
// @description  Userscript to improve Trello user experience
// @author       Andre Figueiredo
// @match        https://trello.com/b/oMbuK9ki/greencents
// @grant        none
// ==/UserScript==
!function(){"use strict";jQuery("head").append("<style>.list-wrapper { margin:0 0.14%; width:14%; }.list-wrapper:first-child { margin-left:0.1% }.list-cards { margin:0; padding:0 2%; }.list-card { box-shadow: -2px 2px 5px 0px #888 }.list-card-labels { margin:0; opacity:0.7; position:absolute;top:0;right:0;bottom:0;left:0; z-index:-1; }.list-card-labels .card-label { display:block; font-size:12px; line-height:normal; margin:0; position:absolute;top:0;right:0;bottom:0;left:0; text-align:right; }.ticket-title { opacity:.6; }  </style>");
//.list-card-labels .card-label { margin:0; position:absolute; top:0; right:0; bottom:0; left:0; display:none; height:auto; text-align:right; width:auto; }\
var t=function(){function e(e,a){0===e&&console.log("start:"+Date.now());var r=a.innerText;new RegExp(t.cards.options.jiraRegex.source+"\\s.+").test(r)&&(jQuery(a).text(r.match(t.cards.options.jiraRegex)[0]).append('<small class="ticket-title">'+r.split(new RegExp(t.cards.options.jiraRegex.source+"\\s"))[1]+"</small>"),e===i-1&&console.log("end:"+Date.now()))}var i=0;return{cards:{options:{jiraRegex:/^[A-z]+-\d+/},formatJiraTickets:function(){i=jQuery(".list-wrapper .list-card-title").length,jQuery(".list-wrapper .list-card-title").each(e)}}}}();setTimeout(t.cards.formatJiraTickets,2e3)}();