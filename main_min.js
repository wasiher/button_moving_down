// 😊 😊 😊 😊 😊 😊 😊 😊 😊 😊 😊 😊 😊 😊 😊 😊 😊 😊 😊 😊 😊 😊 😊 😊 😊 😊 😊
// Copy paste it to developer console or in site URL
// 😊 😊 😊 😊 😊 😊 😊 😊 😊 😊 😊 😊 😊 😊 😊 😊 😊 😊 😊 😊 😊 😊 😊 😊 😊 😊 😊

javascript:for(;0;);!function(){"use strict";function t(t){document.body.getBoundingClientRect();for(var e=0;e<t.length;++e){var n=t[e];n.classList.add("no_touch");var i=o.get(n);void 0!==i&&clearTimeout(i),i=setTimeout(function(t){return function(){t.classList.remove("no_touch")}}(n),400),o.set(n,i)}}function e(t,n,o,i){if("getBoundingClientRect"in n){var a=n.getBoundingClientRect(),c=o.get(n);(!c||Math.abs(c.x-a.x)>30||Math.abs(c.y-a.y)>30||Math.abs(c.width-a.width)>30||Math.abs(c.height-a.height)>30)&&i.push(n),o.set(n,a)}for(var r=0;r<n.childNodes.length;++r)e(a,n.childNodes[r],o,i)}var n=document.createElement("style");n.type="text/css",n.innerHTML=".no_touch { pointer-events: none !important; background-color: black !important; }",document.head.appendChild(n);var o=new Map,i=new Map;setInterval(function(){var n=[];e(null,document.body,i,n),n.length>0&&t(n)},0)}();
