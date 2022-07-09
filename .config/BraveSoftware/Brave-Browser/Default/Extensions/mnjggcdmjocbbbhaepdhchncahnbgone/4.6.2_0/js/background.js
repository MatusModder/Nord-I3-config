(()=>{"use strict";var e,t={51:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const o=n(181),s=n(542);window.SB=s.default;const i=new(n(147).default)({registerFirefoxContentScript:l,unregisterFirefoxContentScript:d}),a={};function c(e){chrome.tabs.sendMessage(e,{message:"update"},(()=>{chrome.runtime.lastError}))}function u(e){e.navigationApiAvailable&&(e.navigationApiAvailable.newValue?chrome.tabs.onUpdated.removeListener(c):chrome.tabs.onUpdated.addListener(c))}function l(e){const t=a[e.id];t&&t.unregister(),browser.contentScripts.register({allFrames:e.allFrames,js:e.js,css:e.css,matches:e.matches}).then((t=>{a[e.id]=t}))}function d(e){a[e].unregister(),delete a[e]}function f(e,t,n={}){return r(this,void 0,void 0,(function*(){return"get"===e.toLowerCase()&&(t=i.objectToURI(t,n,!0),n=null),yield fetch(t,{method:e,headers:{"Content-Type":"application/json"},redirect:"follow",body:n?JSON.stringify(n):null})}))}i.isFirefox()&&i.wait((()=>null!==s.default.config)).then((function(){s.default.config.supportInvidious&&i.setupExtraSiteContentScripts()})),chrome.tabs.onUpdated.addListener(c),i.wait((()=>null!==s.default.local)).then((()=>{s.default.local.navigationApiAvailable&&chrome.tabs.onUpdated.removeListener(c)})),s.default.configSyncListeners.includes(u)||s.default.configSyncListeners.push(u),chrome.runtime.onMessage.addListener((function(e,t,n){switch(e.message){case"openConfig":return void chrome.tabs.create({url:chrome.runtime.getURL("options/options.html"+(e.hash?"#"+e.hash:""))});case"openHelp":return void chrome.tabs.create({url:chrome.runtime.getURL("help/index.html")});case"openPage":return void chrome.tabs.create({url:chrome.runtime.getURL(e.url)});case"sendRequest":return f(e.type,e.url,e.data).then((e=>r(this,void 0,void 0,(function*(){n({responseText:yield e.text(),status:e.status,ok:e.ok})})))),!0;case"submitVote":return function(e,t,n){return r(this,void 0,void 0,(function*(){let a=s.default.config.userID;null!=a&&"undefined"!==a||(a=i.generateUserID(),s.default.config.userID=a);const c=void 0!==e?"&type="+e:"&category="+n,u=yield function(e,t,n={}){return r(this,void 0,void 0,(function*(){const r=s.default.config.testingServer?o.testingServerAddress:s.default.config.serverAddress;return yield f(e,r+t,n)}))}("POST","/api/voteOnSponsorTime?UUID="+t+"&userID="+a+c);return u.ok?{successType:1,responseText:yield u.text()}:405==u.status?{successType:0,statusCode:u.status,responseText:yield u.text()}:{successType:-1,statusCode:u.status,responseText:yield u.text()}}))}(e.type,e.UUID,e.category).then(n),!0;case"registerContentScript":return l(e),!1;case"unregisterContentScript":return d(e.id),!1;case"tabs":return chrome.tabs.query({active:!0,currentWindow:!0},(t=>{chrome.tabs.sendMessage(t[0].id,e.data,(e=>{n(e)}))})),!0}})),chrome.runtime.onInstalled.addListener((function(){setTimeout((function(){if(!s.default.config.userID){chrome.tabs.create({url:chrome.extension.getURL("/help/index.html")});const e=i.generateUserID();s.default.config.userID=e,s.default.config.categoryPillUpdate=!0}}),1500)}))}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var s=n[e]={exports:{}};return t[e].call(s.exports,s,s.exports,r),s.exports}r.m=t,e=[],r.O=(t,n,o,s)=>{if(!n){var i=1/0;for(l=0;l<e.length;l++){for(var[n,o,s]=e[l],a=!0,c=0;c<n.length;c++)(!1&s||i>=s)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(a=!1,s<i&&(i=s));if(a){e.splice(l--,1);var u=o();void 0!==u&&(t=u)}}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[n,o,s]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={352:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,s,[i,a,c]=n,u=0;if(i.some((t=>0!==e[t]))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(c)var l=c(r)}for(t&&t(n);u<i.length;u++)s=i[u],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(l)},n=self.webpackChunksponsorblock=self.webpackChunksponsorblock||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,[736],(()=>r(51)));o=r.O(o)})();