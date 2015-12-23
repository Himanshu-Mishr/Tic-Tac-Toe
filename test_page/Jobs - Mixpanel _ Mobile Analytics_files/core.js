(function(){ if(!window.AutopilotAnywhere) return; var jQueryContainer=window.AutopilotAnywhere; window.AutopilotAnywhere.jQuery=(function() {/*!
 * jQuery JavaScript Library v1.11.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-05-01T17:42Z
 */

return(function(e,t){if(typeof module==="object"&&typeof module.exports==="object"){module.exports=e.document?t(e,true):function(e){if(!e.document){throw new Error("jQuery requires a window with a document")}return t(e)}}else{return t(e)}})(typeof window!=="undefined"?window:this,function(e,t){function g(e){var t=e.length,n=h.type(e);if(n==="function"||h.isWindow(e)){return false}if(e.nodeType===1&&t){return true}return n==="array"||t===0||typeof t==="number"&&t>0&&t-1 in e}function S(e,t,n){if(h.isFunction(t)){return h.grep(e,function(e,r){return!!t.call(e,r,e)!==n})}if(t.nodeType){return h.grep(e,function(e){return e===t!==n})}if(typeof t==="string"){if(E.test(t)){return h.filter(t,e,n)}t=h.filter(t,e)}return h.grep(e,function(e){return h.inArray(e,t)>=0!==n})}function A(e,t){do{e=e[t]}while(e&&e.nodeType!==1);return e}function _(e){var t=M[e]={};h.each(e.match(O)||[],function(e,n){t[n]=true});return t}function P(){if(T.addEventListener){T.removeEventListener("DOMContentLoaded",H,false);e.removeEventListener("load",H,false)}else{T.detachEvent("onreadystatechange",H);e.detachEvent("onload",H)}}function H(){if(T.addEventListener||event.type==="load"||T.readyState==="complete"){P();h.ready()}}function q(e,t,n){if(n===undefined&&e.nodeType===1){var r="data-"+t.replace(I,"-$1").toLowerCase();n=e.getAttribute(r);if(typeof n==="string"){try{n=n==="true"?true:n==="false"?false:n==="null"?null:+n+""===n?+n:F.test(n)?h.parseJSON(n):n}catch(i){}h.data(e,t,n)}else{n=undefined}}return n}function R(e){var t;for(t in e){if(t==="data"&&h.isEmptyObject(e[t])){continue}if(t!=="toJSON"){return false}}return true}function U(e,t,r,i){if(!h.acceptData(e)){return}var s,o,u=h.expando,a=e.nodeType,f=a?h.cache:e,l=a?e[u]:e[u]&&u;if((!l||!f[l]||!i&&!f[l].data)&&r===undefined&&typeof t==="string"){return}if(!l){if(a){l=e[u]=n.pop()||h.guid++}else{l=u}}if(!f[l]){f[l]=a?{}:{toJSON:h.noop}}if(typeof t==="object"||typeof t==="function"){if(i){f[l]=h.extend(f[l],t)}else{f[l].data=h.extend(f[l].data,t)}}o=f[l];if(!i){if(!o.data){o.data={}}o=o.data}if(r!==undefined){o[h.camelCase(t)]=r}if(typeof t==="string"){s=o[t];if(s==null){s=o[h.camelCase(t)]}}else{s=o}return s}function z(e,t,n){if(!h.acceptData(e)){return}var r,i,s=e.nodeType,o=s?h.cache:e,u=s?e[h.expando]:h.expando;if(!o[u]){return}if(t){r=n?o[u]:o[u].data;if(r){if(!h.isArray(t)){if(t in r){t=[t]}else{t=h.camelCase(t);if(t in r){t=[t]}else{t=t.split(" ")}}}else{t=t.concat(h.map(t,h.camelCase))}i=t.length;while(i--){delete r[t[i]]}if(n?!R(r):!h.isEmptyObject(r)){return}}}if(!n){delete o[u].data;if(!R(o[u])){return}}if(s){h.cleanData([e],true)}else if(l.deleteExpando||o!=o.window){delete o[u]}else{o[u]=null}}function et(){return true}function tt(){return false}function nt(){try{return T.activeElement}catch(e){}}function rt(e){var t=it.split("|"),n=e.createDocumentFragment();if(n.createElement){while(t.length){n.createElement(t.pop())}}return n}function wt(e,t){var n,r,i=0,s=typeof e.getElementsByTagName!==B?e.getElementsByTagName(t||"*"):typeof e.querySelectorAll!==B?e.querySelectorAll(t||"*"):undefined;if(!s){for(s=[],n=e.childNodes||e;(r=n[i])!=null;i++){if(!t||h.nodeName(r,t)){s.push(r)}else{h.merge(s,wt(r,t))}}}return t===undefined||t&&h.nodeName(e,t)?h.merge([e],s):s}function Et(e){if(J.test(e.type)){e.defaultChecked=e.checked}}function St(e,t){return h.nodeName(e,"table")&&h.nodeName(t.nodeType!==11?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function xt(e){e.type=(h.find.attr(e,"type")!==null)+"/"+e.type;return e}function Tt(e){var t=vt.exec(e.type);if(t){e.type=t[1]}else{e.removeAttribute("type")}return e}function Nt(e,t){var n,r=0;for(;(n=e[r])!=null;r++){h._data(n,"globalEval",!t||h._data(t[r],"globalEval"))}}function Ct(e,t){if(t.nodeType!==1||!h.hasData(e)){return}var n,r,i,s=h._data(e),o=h._data(t,s),u=s.events;if(u){delete o.handle;o.events={};for(n in u){for(r=0,i=u[n].length;r<i;r++){h.event.add(t,n,u[n][r])}}}if(o.data){o.data=h.extend({},o.data)}}function kt(e,t){var n,r,i;if(t.nodeType!==1){return}n=t.nodeName.toLowerCase();if(!l.noCloneEvent&&t[h.expando]){i=h._data(t);for(r in i.events){h.removeEvent(t,r,i.handle)}t.removeAttribute(h.expando)}if(n==="script"&&t.text!==e.text){xt(t).text=e.text;Tt(t)}else if(n==="object"){if(t.parentNode){t.outerHTML=e.outerHTML}if(l.html5Clone&&e.innerHTML&&!h.trim(t.innerHTML)){t.innerHTML=e.innerHTML}}else if(n==="input"&&J.test(e.type)){t.defaultChecked=t.checked=e.checked;if(t.value!==e.value){t.value=e.value}}else if(n==="option"){t.defaultSelected=t.selected=e.defaultSelected}else if(n==="input"||n==="textarea"){t.defaultValue=e.defaultValue}}function Ot(t,n){var r,i=h(n.createElement(t)).appendTo(n.body),s=e.getDefaultComputedStyle&&(r=e.getDefaultComputedStyle(i[0]))?r.display:h.css(i[0],"display");i.detach();return s}function Mt(e){var t=T,n=At[e];if(!n){n=Ot(e,t);if(n==="none"||!n){Lt=(Lt||h("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement);t=(Lt[0].contentWindow||Lt[0].contentDocument).document;t.write();t.close();n=Ot(e,t);Lt.detach()}At[e]=n}return n}function jt(e,t){return{get:function(){var n=e();if(n==null){return}if(n){delete this.get;return}return(this.get=t).apply(this,arguments)}}}function Vt(e,t){if(t in e){return t}var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Xt.length;while(i--){t=Xt[i]+n;if(t in e){return t}}return r}function $t(e,t){var n,r,i,s=[],o=0,u=e.length;for(;o<u;o++){r=e[o];if(!r.style){continue}s[o]=h._data(r,"olddisplay");n=r.style.display;if(t){if(!s[o]&&n==="none"){r.style.display=""}if(r.style.display===""&&V(r)){s[o]=h._data(r,"olddisplay",Mt(r.nodeName))}}else{i=V(r);if(n&&n!=="none"||!i){h._data(r,"olddisplay",i?n:h.css(r,"display"))}}}for(o=0;o<u;o++){r=e[o];if(!r.style){continue}if(!t||r.style.display==="none"||r.style.display===""){r.style.display=t?s[o]||"":"none"}}return e}function Jt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Kt(e,t,n,r,i){var s=n===(r?"border":"content")?4:t==="width"?1:0,o=0;for(;s<4;s+=2){if(n==="margin"){o+=h.css(e,n+X[s],true,i)}if(r){if(n==="content"){o-=h.css(e,"padding"+X[s],true,i)}if(n!=="margin"){o-=h.css(e,"border"+X[s]+"Width",true,i)}}else{o+=h.css(e,"padding"+X[s],true,i);if(n!=="padding"){o+=h.css(e,"border"+X[s]+"Width",true,i)}}}return o}function Qt(e,t,n){var r=true,i=t==="width"?e.offsetWidth:e.offsetHeight,s=Pt(e),o=l.boxSizing&&h.css(e,"boxSizing",false,s)==="border-box";if(i<=0||i==null){i=Ht(e,t,s);if(i<0||i==null){i=e.style[t]}if(Dt.test(i)){return i}r=o&&(l.boxSizingReliable()||i===e.style[t]);i=parseFloat(i)||0}return i+Kt(e,t,n||(o?"border":"content"),r,s)+"px"}function Gt(e,t,n,r,i){return new Gt.prototype.init(e,t,n,r,i)}function on(){setTimeout(function(){Yt=undefined});return Yt=h.now()}function un(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t){n=X[i];r["margin"+n]=r["padding"+n]=e}if(t){r.opacity=r.width=e}return r}function an(e,t,n){var r,i=(sn[t]||[]).concat(sn["*"]),s=0,o=i.length;for(;s<o;s++){if(r=i[s].call(n,t,e)){return r}}}function fn(e,t,n){var r,i,s,o,u,a,f,c,p=this,d={},v=e.style,m=e.nodeType&&V(e),g=h._data(e,"fxshow");if(!n.queue){u=h._queueHooks(e,"fx");if(u.unqueued==null){u.unqueued=0;a=u.empty.fire;u.empty.fire=function(){if(!u.unqueued){a()}}}u.unqueued++;p.always(function(){p.always(function(){u.unqueued--;if(!h.queue(e,"fx").length){u.empty.fire()}})})}if(e.nodeType===1&&("height"in t||"width"in t)){n.overflow=[v.overflow,v.overflowX,v.overflowY];f=h.css(e,"display");c=f==="none"?h._data(e,"olddisplay")||Mt(e.nodeName):f;if(c==="inline"&&h.css(e,"float")==="none"){if(!l.inlineBlockNeedsLayout||Mt(e.nodeName)==="inline"){v.display="inline-block"}else{v.zoom=1}}}if(n.overflow){v.overflow="hidden";if(!l.shrinkWrapBlocks()){p.always(function(){v.overflow=n.overflow[0];v.overflowX=n.overflow[1];v.overflowY=n.overflow[2]})}}for(r in t){i=t[r];if(en.exec(i)){delete t[r];s=s||i==="toggle";if(i===(m?"hide":"show")){if(i==="show"&&g&&g[r]!==undefined){m=true}else{continue}}d[r]=g&&g[r]||h.style(e,r)}else{f=undefined}}if(!h.isEmptyObject(d)){if(g){if("hidden"in g){m=g.hidden}}else{g=h._data(e,"fxshow",{})}if(s){g.hidden=!m}if(m){h(e).show()}else{p.done(function(){h(e).hide()})}p.done(function(){var t;h._removeData(e,"fxshow");for(t in d){h.style(e,t,d[t])}});for(r in d){o=an(m?g[r]:0,r,p);if(!(r in g)){g[r]=o.start;if(m){o.end=o.start;o.start=r==="width"||r==="height"?1:0}}}}else if((f==="none"?Mt(e.nodeName):f)==="inline"){v.display=f}}function ln(e,t){var n,r,i,s,o;for(n in e){r=h.camelCase(n);i=t[r];s=e[n];if(h.isArray(s)){i=s[1];s=e[n]=s[0]}if(n!==r){e[r]=s;delete e[n]}o=h.cssHooks[r];if(o&&"expand"in o){s=o.expand(s);delete e[r];for(n in s){if(!(n in e)){e[n]=s[n];t[n]=i}}}else{t[r]=i}}}function cn(e,t,n){var r,i,s=0,o=rn.length,u=h.Deferred().always(function(){delete a.elem}),a=function(){if(i){return false}var t=Yt||on(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,s=1-r,o=0,a=f.tweens.length;for(;o<a;o++){f.tweens[o].run(s)}u.notifyWith(e,[f,s,n]);if(s<1&&a){return n}else{u.resolveWith(e,[f]);return false}},f=u.promise({elem:e,props:h.extend({},t),opts:h.extend(true,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Yt||on(),duration:n.duration,tweens:[],createTween:function(t,n){var r=h.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);f.tweens.push(r);return r},stop:function(t){var n=0,r=t?f.tweens.length:0;if(i){return this}i=true;for(;n<r;n++){f.tweens[n].run(1)}if(t){u.resolveWith(e,[f,t])}else{u.rejectWith(e,[f,t])}return this}}),l=f.props;ln(l,f.opts.specialEasing);for(;s<o;s++){r=rn[s].call(f,e,l,f.opts);if(r){return r}}h.map(l,an,f);if(h.isFunction(f.opts.start)){f.opts.start.call(e,f)}h.fx.timer(h.extend(a,{elem:e,anim:f,queue:f.opts.queue}));return f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Fn(e){return function(t,n){if(typeof t!=="string"){n=t;t="*"}var r,i=0,s=t.toLowerCase().match(O)||[];if(h.isFunction(n)){while(r=s[i++]){if(r.charAt(0)==="+"){r=r.slice(1)||"*";(e[r]=e[r]||[]).unshift(n)}else{(e[r]=e[r]||[]).push(n)}}}}}function In(e,t,n,r){function o(u){var a;i[u]=true;h.each(e[u]||[],function(e,u){var f=u(t,n,r);if(typeof f==="string"&&!s&&!i[f]){t.dataTypes.unshift(f);o(f);return false}else if(s){return!(a=f)}});return a}var i={},s=e===Hn;return o(t.dataTypes[0])||!i["*"]&&o("*")}function qn(e,t){var n,r,i=h.ajaxSettings.flatOptions||{};for(r in t){if(t[r]!==undefined){(i[r]?e:n||(n={}))[r]=t[r]}}if(n){h.extend(true,e,n)}return e}function Rn(e,t,n){var r,i,s,o,u=e.contents,a=e.dataTypes;while(a[0]==="*"){a.shift();if(i===undefined){i=e.mimeType||t.getResponseHeader("Content-Type")}}if(i){for(o in u){if(u[o]&&u[o].test(i)){a.unshift(o);break}}}if(a[0]in n){s=a[0]}else{for(o in n){if(!a[0]||e.converters[o+" "+a[0]]){s=o;break}if(!r){r=o}}s=s||r}if(s){if(s!==a[0]){a.unshift(s)}return n[s]}}function Un(e,t,n,r){var i,s,o,u,a,f={},l=e.dataTypes.slice();if(l[1]){for(o in e.converters){f[o.toLowerCase()]=e.converters[o]}}s=l.shift();while(s){if(e.responseFields[s]){n[e.responseFields[s]]=t}if(!a&&r&&e.dataFilter){t=e.dataFilter(t,e.dataType)}a=s;s=l.shift();if(s){if(s==="*"){s=a}else if(a!=="*"&&a!==s){o=f[a+" "+s]||f["* "+s];if(!o){for(i in f){u=i.split(" ");if(u[1]===s){o=f[a+" "+u[0]]||f["* "+u[0]];if(o){if(o===true){o=f[i]}else if(f[i]!==true){s=u[0];l.unshift(u[1])}break}}}}if(o!==true){if(o&&e["throws"]){t=o(t)}else{try{t=o(t)}catch(c){return{state:"parsererror",error:o?c:"No conversion from "+a+" to "+s}}}}}}}return{state:"success",data:t}}function Jn(e,t,n,r){var i;if(h.isArray(t)){h.each(t,function(t,i){if(n||Wn.test(e)){r(e,i)}else{Jn(e+"["+(typeof i==="object"?t:"")+"]",i,n,r)}})}else if(!n&&h.type(t)==="object"){for(i in t){Jn(e+"["+i+"]",t[i],n,r)}}else{r(e,t)}}function Yn(){try{return new e.XMLHttpRequest}catch(t){}}function Zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function ir(e){return h.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:false}var n=[];var r=n.slice;var i=n.concat;var s=n.push;var o=n.indexOf;var u={};var a=u.toString;var f=u.hasOwnProperty;var l={};var c="1.11.1",h=function(e,t){return new h.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,d=/^-ms-/,v=/-([\da-z])/gi,m=function(e,t){return t.toUpperCase()};h.fn=h.prototype={jquery:c,constructor:h,selector:"",length:0,toArray:function(){return r.call(this)},get:function(e){return e!=null?e<0?this[e+this.length]:this[e]:r.call(this)},pushStack:function(e){var t=h.merge(this.constructor(),e);t.prevObject=this;t.context=this.context;return t},each:function(e,t){return h.each(this,e,t)},map:function(e){return this.pushStack(h.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(r.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:s,sort:n.sort,splice:n.splice};h.extend=h.fn.extend=function(){var e,t,n,r,i,s,o=arguments[0]||{},u=1,a=arguments.length,f=false;if(typeof o==="boolean"){f=o;o=arguments[u]||{};u++}if(typeof o!=="object"&&!h.isFunction(o)){o={}}if(u===a){o=this;u--}for(;u<a;u++){if((i=arguments[u])!=null){for(r in i){e=o[r];n=i[r];if(o===n){continue}if(f&&n&&(h.isPlainObject(n)||(t=h.isArray(n)))){if(t){t=false;s=e&&h.isArray(e)?e:[]}else{s=e&&h.isPlainObject(e)?e:{}}o[r]=h.extend(f,s,n)}else if(n!==undefined){o[r]=n}}}}return o};h.extend({expando:"jQuery"+(c+Math.random()).replace(/\D/g,""),isReady:true,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return h.type(e)==="function"},isArray:Array.isArray||function(e){return h.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!h.isArray(e)&&e-parseFloat(e)>=0},isEmptyObject:function(e){var t;for(t in e){return false}return true},isPlainObject:function(e){var t;if(!e||h.type(e)!=="object"||e.nodeType||h.isWindow(e)){return false}try{if(e.constructor&&!f.call(e,"constructor")&&!f.call(e.constructor.prototype,"isPrototypeOf")){return false}}catch(n){return false}if(l.ownLast){for(t in e){return f.call(e,t)}}for(t in e){}return t===undefined||f.call(e,t)},type:function(e){if(e==null){return e+""}return typeof e==="object"||typeof e==="function"?u[a.call(e)]||"object":typeof e},globalEval:function(t){if(t&&h.trim(t)){(e.execScript||function(t){e["eval"].call(e,t)})(t)}},camelCase:function(e){return e.replace(d,"ms-").replace(v,m)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,s=e.length,o=g(e);if(n){if(o){for(;i<s;i++){r=t.apply(e[i],n);if(r===false){break}}}else{for(i in e){r=t.apply(e[i],n);if(r===false){break}}}}else{if(o){for(;i<s;i++){r=t.call(e[i],i,e[i]);if(r===false){break}}}else{for(i in e){r=t.call(e[i],i,e[i]);if(r===false){break}}}}return e},trim:function(e){return e==null?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];if(e!=null){if(g(Object(e))){h.merge(n,typeof e==="string"?[e]:e)}else{s.call(n,e)}}return n},inArray:function(e,t,n){var r;if(t){if(o){return o.call(t,e,n)}r=t.length;n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++){if(n in t&&t[n]===e){return n}}}return-1},merge:function(e,t){var n=+t.length,r=0,i=e.length;while(r<n){e[i++]=t[r++]}if(n!==n){while(t[r]!==undefined){e[i++]=t[r++]}}e.length=i;return e},grep:function(e,t,n){var r,i=[],s=0,o=e.length,u=!n;for(;s<o;s++){r=!t(e[s],s);if(r!==u){i.push(e[s])}}return i},map:function(e,t,n){var r,s=0,o=e.length,u=g(e),a=[];if(u){for(;s<o;s++){r=t(e[s],s,n);if(r!=null){a.push(r)}}}else{for(s in e){r=t(e[s],s,n);if(r!=null){a.push(r)}}}return i.apply([],a)},guid:1,proxy:function(e,t){var n,i,s;if(typeof t==="string"){s=e[t];t=e;e=s}if(!h.isFunction(e)){return undefined}n=r.call(arguments,2);i=function(){return e.apply(t||this,n.concat(r.call(arguments)))};i.guid=e.guid=e.guid||h.guid++;return i},now:function(){return+(new Date)},support:l});h.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){u["[object "+t+"]"]=t.toLowerCase()});var y=function(e){function st(e,t,r,i){var s,u,f,l,c,d,g,y,S,x;if((t?t.ownerDocument||t:E)!==p){h(t)}t=t||p;r=r||[];if(!e||typeof e!=="string"){return r}if((l=t.nodeType)!==1&&l!==9){return[]}if(v&&!i){if(s=Z.exec(e)){if(f=s[1]){if(l===9){u=t.getElementById(f);if(u&&u.parentNode){if(u.id===f){r.push(u);return r}}else{return r}}else{if(t.ownerDocument&&(u=t.ownerDocument.getElementById(f))&&b(t,u)&&u.id===f){r.push(u);return r}}}else if(s[2]){P.apply(r,t.getElementsByTagName(e));return r}else if((f=s[3])&&n.getElementsByClassName&&t.getElementsByClassName){P.apply(r,t.getElementsByClassName(f));return r}}if(n.qsa&&(!m||!m.test(e))){y=g=w;S=t;x=l===9&&e;if(l===1&&t.nodeName.toLowerCase()!=="object"){d=o(e);if(g=t.getAttribute("id")){y=g.replace(tt,"\\$&")}else{t.setAttribute("id",y)}y="[id='"+y+"'] ";c=d.length;while(c--){d[c]=y+mt(d[c])}S=et.test(e)&&dt(t.parentNode)||t;x=d.join(",")}if(x){try{P.apply(r,S.querySelectorAll(x));return r}catch(T){}finally{if(!g){t.removeAttribute("id")}}}}}return a(e.replace(z,"$1"),t,r,i)}function ot(){function t(n,i){if(e.push(n+" ")>r.cacheLength){delete t[e.shift()]}return t[n+" "]=i}var e=[];return t}function ut(e){e[w]=true;return e}function at(e){var t=p.createElement("div");try{return!!e(t)}catch(n){return false}finally{if(t.parentNode){t.parentNode.removeChild(t)}t=null}}function ft(e,t){var n=e.split("|"),i=e.length;while(i--){r.attrHandle[n[i]]=t}}function lt(e,t){var n=t&&e,r=n&&e.nodeType===1&&t.nodeType===1&&(~t.sourceIndex||A)-(~e.sourceIndex||A);if(r){return r}if(n){while(n=n.nextSibling){if(n===t){return-1}}}return e?1:-1}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function ht(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function pt(e){return ut(function(t){t=+t;return ut(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--){if(n[i=s[o]]){n[i]=!(r[i]=n[i])}}})})}function dt(e){return e&&typeof e.getElementsByTagName!==L&&e}function vt(){}function mt(e){var t=0,n=e.length,r="";for(;t<n;t++){r+=e[t].value}return r}function gt(e,t,n){var r=t.dir,i=n&&r==="parentNode",s=x++;return t.first?function(t,n,s){while(t=t[r]){if(t.nodeType===1||i){return e(t,n,s)}}}:function(t,n,o){var u,a,f=[S,s];if(o){while(t=t[r]){if(t.nodeType===1||i){if(e(t,n,o)){return true}}}}else{while(t=t[r]){if(t.nodeType===1||i){a=t[w]||(t[w]={});if((u=a[r])&&u[0]===S&&u[1]===s){return f[2]=u[2]}else{a[r]=f;if(f[2]=e(t,n,o)){return true}}}}}}}function yt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--){if(!e[i](t,n,r)){return false}}return true}:e[0]}function bt(e,t,n){var r=0,i=t.length;for(;r<i;r++){st(e,t[r],n)}return n}function wt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++){if(s=e[u]){if(!n||n(s,r,i)){o.push(s);if(f){t.push(u)}}}}return o}function Et(e,t,n,r,i,s){if(r&&!r[w]){r=Et(r)}if(i&&!i[w]){i=Et(i,s)}return ut(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||bt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?wt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;if(n){n(m,g,u,a)}if(r){f=wt(g,p);r(f,[],u,a);l=f.length;while(l--){if(c=f[l]){g[p[l]]=!(m[p[l]]=c)}}}if(s){if(i||e){if(i){f=[];l=g.length;while(l--){if(c=g[l]){f.push(m[l]=c)}}i(null,g=[],f,a)}l=g.length;while(l--){if((c=g[l])&&(f=i?B.call(s,c):h[l])>-1){s[f]=!(o[f]=c)}}}}else{g=wt(g===o?g.splice(d,g.length):g);if(i){i(null,o,g,a)}else{P.apply(o,g)}}})}function St(e){var t,n,i,s=e.length,o=r.relative[e[0].type],u=o||r.relative[" "],a=o?1:0,l=gt(function(e){return e===t},u,true),c=gt(function(e){return B.call(t,e)>-1},u,true),h=[function(e,n,r){return!o&&(r||n!==f)||((t=n).nodeType?l(e,n,r):c(e,n,r))}];for(;a<s;a++){if(n=r.relative[e[a].type]){h=[gt(yt(h),n)]}else{n=r.filter[e[a].type].apply(null,e[a].matches);if(n[w]){i=++a;for(;i<s;i++){if(r.relative[e[i].type]){break}}return Et(a>1&&yt(h),a>1&&mt(e.slice(0,a-1).concat({value:e[a-2].type===" "?"*":""})).replace(z,"$1"),n,a<i&&St(e.slice(a,i)),i<s&&St(e=e.slice(i)),i<s&&mt(e))}h.push(n)}}return yt(h)}function xt(e,t){var n=t.length>0,i=e.length>0,s=function(s,o,u,a,l){var c,h,d,v=0,m="0",g=s&&[],y=[],b=f,w=s||i&&r.find["TAG"]("*",l),E=S+=b==null?1:Math.random()||.1,x=w.length;if(l){f=o!==p&&o}for(;m!==x&&(c=w[m])!=null;m++){if(i&&c){h=0;while(d=e[h++]){if(d(c,o,u)){a.push(c);break}}if(l){S=E}}if(n){if(c=!d&&c){v--}if(s){g.push(c)}}}v+=m;if(n&&m!==v){h=0;while(d=t[h++]){d(g,y,o,u)}if(s){if(v>0){while(m--){if(!(g[m]||y[m])){y[m]=_.call(a)}}}y=wt(y)}P.apply(a,y);if(l&&!s&&y.length>0&&v+t.length>1){st.uniqueSort(a)}}if(l){S=E;f=b}return g};return n?ut(s):s}var t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w="sizzle"+ -(new Date),E=e.document,S=0,x=0,T=ot(),N=ot(),C=ot(),k=function(e,t){if(e===t){c=true}return 0},L=typeof undefined,A=1<<31,O={}.hasOwnProperty,M=[],_=M.pop,D=M.push,P=M.push,H=M.slice,B=M.indexOf||function(e){var t=0,n=this.length;for(;t<n;t++){if(this[t]===e){return t}}return-1},j="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",F="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",q=I.replace("w","w#"),R="\\["+F+"*("+I+")(?:"+F+"*([*^$|!~]?=)"+F+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+q+"))|)"+F+"*\\]",U=":("+I+")(?:\\(("+"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+"((?:\\\\.|[^\\\\()[\\]]|"+R+")*)|"+".*"+")\\)|)",z=new RegExp("^"+F+"+|((?:^|[^\\\\])(?:\\\\.)*)"+F+"+$","g"),W=new RegExp("^"+F+"*,"+F+"*"),X=new RegExp("^"+F+"*([>+~]|"+F+")"+F+"*"),V=new RegExp("="+F+"*([^\\]'\"]*?)"+F+"*\\]","g"),$=new RegExp(U),J=new RegExp("^"+q+"$"),K={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I.replace("w","w*")+")"),ATTR:new RegExp("^"+R),PSEUDO:new RegExp("^"+U),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+F+"*(even|odd|(([+-]|)(\\d*)n|)"+F+"*(?:([+-]|)"+F+"*(\\d+)|))"+F+"*\\)|)","i"),bool:new RegExp("^(?:"+j+")$","i"),needsContext:new RegExp("^"+F+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+F+"*((?:-\\d)?\\d*)"+F+"*\\)|)(?=[^-]|$)","i")},Q=/^(?:input|select|textarea|button)$/i,G=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/[+~]/,tt=/'|\\/g,nt=new RegExp("\\\\([\\da-f]{1,6}"+F+"?|("+F+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,r&1023|56320)};try{P.apply(M=H.call(E.childNodes),E.childNodes);M[E.childNodes.length].nodeType}catch(it){P={apply:M.length?function(e,t){D.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]){}e.length=n-1}}}n=st.support={};s=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":false};h=st.setDocument=function(e){var t,i=e?e.ownerDocument||e:E,o=i.defaultView;if(i===p||i.nodeType!==9||!i.documentElement){return p}p=i;d=i.documentElement;v=!s(i);if(o&&o!==o.top){if(o.addEventListener){o.addEventListener("unload",function(){h()},false)}else if(o.attachEvent){o.attachEvent("onunload",function(){h()})}}n.attributes=at(function(e){e.className="i";return!e.getAttribute("className")});n.getElementsByTagName=at(function(e){e.appendChild(i.createComment(""));return!e.getElementsByTagName("*").length});n.getElementsByClassName=Y.test(i.getElementsByClassName)&&at(function(e){e.innerHTML="<div class='a'></div><div class='a i'></div>";e.firstChild.className="i";return e.getElementsByClassName("i").length===2});n.getById=at(function(e){d.appendChild(e).id=w;return!i.getElementsByName||!i.getElementsByName(w).length});if(n.getById){r.find["ID"]=function(e,t){if(typeof t.getElementById!==L&&v){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}};r.filter["ID"]=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}}else{delete r.find["ID"];r.filter["ID"]=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==L&&e.getAttributeNode("id");return n&&n.value===t}}}r.find["TAG"]=n.getElementsByTagName?function(e,t){if(typeof t.getElementsByTagName!==L){return t.getElementsByTagName(e)}}:function(e,t){var n,r=[],i=0,s=t.getElementsByTagName(e);if(e==="*"){while(n=s[i++]){if(n.nodeType===1){r.push(n)}}return r}return s};r.find["CLASS"]=n.getElementsByClassName&&function(e,t){if(typeof t.getElementsByClassName!==L&&v){return t.getElementsByClassName(e)}};g=[];m=[];if(n.qsa=Y.test(i.querySelectorAll)){at(function(e){e.innerHTML="<select msallowclip=''><option selected=''></option></select>";if(e.querySelectorAll("[msallowclip^='']").length){m.push("[*^$]="+F+"*(?:''|\"\")")}if(!e.querySelectorAll("[selected]").length){m.push("\\["+F+"*(?:value|"+j+")")}if(!e.querySelectorAll(":checked").length){m.push(":checked")}});at(function(e){var t=i.createElement("input");t.setAttribute("type","hidden");e.appendChild(t).setAttribute("name","D");if(e.querySelectorAll("[name=d]").length){m.push("name"+F+"*[*^$|!~]?=")}if(!e.querySelectorAll(":enabled").length){m.push(":enabled",":disabled")}e.querySelectorAll("*,:x");m.push(",.*:")})}if(n.matchesSelector=Y.test(y=d.matches||d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector)){at(function(e){n.disconnectedMatch=y.call(e,"div");y.call(e,"[s!='']:x");g.push("!=",U)})}m=m.length&&new RegExp(m.join("|"));g=g.length&&new RegExp(g.join("|"));t=Y.test(d.compareDocumentPosition);b=t||Y.test(d.contains)?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&(n.contains?n.contains(r):e.compareDocumentPosition&&e.compareDocumentPosition(r)&16))}:function(e,t){if(t){while(t=t.parentNode){if(t===e){return true}}}return false};k=t?function(e,t){if(e===t){c=true;return 0}var r=!e.compareDocumentPosition-!t.compareDocumentPosition;if(r){return r}r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1;if(r&1||!n.sortDetached&&t.compareDocumentPosition(e)===r){if(e===i||e.ownerDocument===E&&b(E,e)){return-1}if(t===i||t.ownerDocument===E&&b(E,t)){return 1}return l?B.call(l,e)-B.call(l,t):0}return r&4?-1:1}:function(e,t){if(e===t){c=true;return 0}var n,r=0,s=e.parentNode,o=t.parentNode,u=[e],a=[t];if(!s||!o){return e===i?-1:t===i?1:s?-1:o?1:l?B.call(l,e)-B.call(l,t):0}else if(s===o){return lt(e,t)}n=e;while(n=n.parentNode){u.unshift(n)}n=t;while(n=n.parentNode){a.unshift(n)}while(u[r]===a[r]){r++}return r?lt(u[r],a[r]):u[r]===E?-1:a[r]===E?1:0};return i};st.matches=function(e,t){return st(e,null,null,t)};st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p){h(e)}t=t.replace(V,"='$1']");if(n.matchesSelector&&v&&(!g||!g.test(t))&&(!m||!m.test(t))){try{var r=y.call(e,t);if(r||n.disconnectedMatch||e.document&&e.document.nodeType!==11){return r}}catch(i){}}return st(t,p,null,[e]).length>0};st.contains=function(e,t){if((e.ownerDocument||e)!==p){h(e)}return b(e,t)};st.attr=function(e,t){if((e.ownerDocument||e)!==p){h(e)}var i=r.attrHandle[t.toLowerCase()],s=i&&O.call(r.attrHandle,t.toLowerCase())?i(e,t,!v):undefined;return s!==undefined?s:n.attributes||!v?e.getAttribute(t):(s=e.getAttributeNode(t))&&s.specified?s.value:null};st.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)};st.uniqueSort=function(e){var t,r=[],i=0,s=0;c=!n.detectDuplicates;l=!n.sortStable&&e.slice(0);e.sort(k);if(c){while(t=e[s++]){if(t===e[s]){i=r.push(s)}}while(i--){e.splice(r[i],1)}}l=null;return e};i=st.getText=function(e){var t,n="",r=0,s=e.nodeType;if(!s){while(t=e[r++]){n+=i(t)}}else if(s===1||s===9||s===11){if(typeof e.textContent==="string"){return e.textContent}else{for(e=e.firstChild;e;e=e.nextSibling){n+=i(e)}}}else if(s===3||s===4){return e.nodeValue}return n};r=st.selectors={cacheLength:50,createPseudo:ut,match:K,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){e[1]=e[1].replace(nt,rt);e[3]=(e[3]||e[4]||e[5]||"").replace(nt,rt);if(e[2]==="~="){e[3]=" "+e[3]+" "}return e.slice(0,4)},CHILD:function(e){e[1]=e[1].toLowerCase();if(e[1].slice(0,3)==="nth"){if(!e[3]){st.error(e[0])}e[4]=+(e[4]?e[5]+(e[6]||1):2*(e[3]==="even"||e[3]==="odd"));e[5]=+(e[7]+e[8]||e[3]==="odd")}else if(e[3]){st.error(e[0])}return e},PSEUDO:function(e){var t,n=!e[6]&&e[2];if(K["CHILD"].test(e[0])){return null}if(e[3]){e[2]=e[4]||e[5]||""}else if(n&&$.test(n)&&(t=o(n,true))&&(t=n.indexOf(")",n.length-t)-n.length)){e[0]=e[0].slice(0,t);e[2]=n.slice(0,t)}return e.slice(0,3)}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return e==="*"?function(){return true}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=T[e+" "];return t||(t=new RegExp("(^|"+F+")"+e+"("+F+"|$)"))&&T(e,function(e){return t.test(typeof e.className==="string"&&e.className||typeof e.getAttribute!==L&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);if(i==null){return t==="!="}if(!t){return true}i+="";return t==="="?i===n:t==="!="?i!==n:t==="^="?n&&i.indexOf(n)===0:t==="*="?n&&i.indexOf(n)>-1:t==="$="?n&&i.slice(-n.length)===n:t==="~="?(" "+i+" ").indexOf(n)>-1:t==="|="?i===n||i.slice(0,n.length+1)===n+"-":false}},CHILD:function(e,t,n,r,i){var s=e.slice(0,3)!=="nth",o=e.slice(-4)!=="last",u=t==="of-type";return r===1&&i===0?function(e){return!!e.parentNode}:function(t,n,a){var f,l,c,h,p,d,v=s!==o?"nextSibling":"previousSibling",m=t.parentNode,g=u&&t.nodeName.toLowerCase(),y=!a&&!u;if(m){if(s){while(v){c=t;while(c=c[v]){if(u?c.nodeName.toLowerCase()===g:c.nodeType===1){return false}}d=v=e==="only"&&!d&&"nextSibling"}return true}d=[o?m.firstChild:m.lastChild];if(o&&y){l=m[w]||(m[w]={});f=l[e]||[];p=f[0]===S&&f[1];h=f[0]===S&&f[2];c=p&&m.childNodes[p];while(c=++p&&c&&c[v]||(h=p=0)||d.pop()){if(c.nodeType===1&&++h&&c===t){l[e]=[S,p,h];break}}}else if(y&&(f=(t[w]||(t[w]={}))[e])&&f[0]===S){h=f[1]}else{while(c=++p&&c&&c[v]||(h=p=0)||d.pop()){if((u?c.nodeName.toLowerCase()===g:c.nodeType===1)&&++h){if(y){(c[w]||(c[w]={}))[e]=[S,h]}if(c===t){break}}}}h-=i;return h===r||h%r===0&&h/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);if(i[w]){return i(t)}if(i.length>1){n=[e,e,"",t];return r.setFilters.hasOwnProperty(e.toLowerCase())?ut(function(e,n){var r,s=i(e,t),o=s.length;while(o--){r=B.call(e,s[o]);e[r]=!(n[r]=s[o])}}):function(e){return i(e,0,n)}}return i}},pseudos:{not:ut(function(e){var t=[],n=[],r=u(e.replace(z,"$1"));return r[w]?ut(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--){if(s=o[u]){e[u]=!(t[u]=s)}}}):function(e,i,s){t[0]=e;r(t,null,s,n);return!n.pop()}}),has:ut(function(e){return function(t){return st(e,t).length>0}}),contains:ut(function(e){return function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:ut(function(e){if(!J.test(e||"")){st.error("unsupported lang: "+e)}e=e.replace(nt,rt).toLowerCase();return function(t){var n;do{if(n=v?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang")){n=n.toLowerCase();return n===e||n.indexOf(e+"-")===0}}while((t=t.parentNode)&&t.nodeType===1);return false}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===false},disabled:function(e){return e.disabled===true},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){if(e.parentNode){e.parentNode.selectedIndex}return e.selected===true},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling){if(e.nodeType<6){return false}}return true},parent:function(e){return!r.pseudos["empty"](e)},header:function(e){return G.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},text:function(e){var t;return e.nodeName.toLowerCase()==="input"&&e.type==="text"&&((t=e.getAttribute("type"))==null||t.toLowerCase()==="text")},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[n<0?n+t:n]}),even:pt(function(e,t){var n=0;for(;n<t;n+=2){e.push(n)}return e}),odd:pt(function(e,t){var n=1;for(;n<t;n+=2){e.push(n)}return e}),lt:pt(function(e,t,n){var r=n<0?n+t:n;for(;--r>=0;){e.push(r)}return e}),gt:pt(function(e,t,n){var r=n<0?n+t:n;for(;++r<t;){e.push(r)}return e})}};r.pseudos["nth"]=r.pseudos["eq"];for(t in{radio:true,checkbox:true,file:true,password:true,image:true}){r.pseudos[t]=ct(t)}for(t in{submit:true,reset:true}){r.pseudos[t]=ht(t)}vt.prototype=r.filters=r.pseudos;r.setFilters=new vt;o=st.tokenize=function(e,t){var n,i,s,o,u,a,f,l=N[e+" "];if(l){return t?0:l.slice(0)}u=e;a=[];f=r.preFilter;while(u){if(!n||(i=W.exec(u))){if(i){u=u.slice(i[0].length)||u}a.push(s=[])}n=false;if(i=X.exec(u)){n=i.shift();s.push({value:n,type:i[0].replace(z," ")});u=u.slice(n.length)}for(o in r.filter){if((i=K[o].exec(u))&&(!f[o]||(i=f[o](i)))){n=i.shift();s.push({value:n,type:o,matches:i});u=u.slice(n.length)}}if(!n){break}}return t?u.length:u?st.error(e):N(e,a).slice(0)};u=st.compile=function(e,t){var n,r=[],i=[],s=C[e+" "];if(!s){if(!t){t=o(e)}n=t.length;while(n--){s=St(t[n]);if(s[w]){r.push(s)}else{i.push(s)}}s=C(e,xt(i,r));s.selector=e}return s};a=st.select=function(e,t,i,s){var a,f,l,c,h,p=typeof e==="function"&&e,d=!s&&o(e=p.selector||e);i=i||[];if(d.length===1){f=d[0]=d[0].slice(0);if(f.length>2&&(l=f[0]).type==="ID"&&n.getById&&t.nodeType===9&&v&&r.relative[f[1].type]){t=(r.find["ID"](l.matches[0].replace(nt,rt),t)||[])[0];if(!t){return i}else if(p){t=t.parentNode}e=e.slice(f.shift().value.length)}a=K["needsContext"].test(e)?0:f.length;while(a--){l=f[a];if(r.relative[c=l.type]){break}if(h=r.find[c]){if(s=h(l.matches[0].replace(nt,rt),et.test(f[0].type)&&dt(t.parentNode)||t)){f.splice(a,1);e=s.length&&mt(f);if(!e){P.apply(i,s);return i}break}}}}(p||u(e,d))(s,t,!v,i,et.test(e)&&dt(t.parentNode)||t);return i};n.sortStable=w.split("").sort(k).join("")===w;n.detectDuplicates=!!c;h();n.sortDetached=at(function(e){return e.compareDocumentPosition(p.createElement("div"))&1});if(!at(function(e){e.innerHTML="<a href='#'></a>";return e.firstChild.getAttribute("href")==="#"})){ft("type|href|height|width",function(e,t,n){if(!n){return e.getAttribute(t,t.toLowerCase()==="type"?1:2)}})}if(!n.attributes||!at(function(e){e.innerHTML="<input/>";e.firstChild.setAttribute("value","");return e.firstChild.getAttribute("value")===""})){ft("value",function(e,t,n){if(!n&&e.nodeName.toLowerCase()==="input"){return e.defaultValue}})}if(!at(function(e){return e.getAttribute("disabled")==null})){ft(j,function(e,t,n){var r;if(!n){return e[t]===true?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}})}return st}(e);h.find=y;h.expr=y.selectors;h.expr[":"]=h.expr.pseudos;h.unique=y.uniqueSort;h.text=y.getText;h.isXMLDoc=y.isXML;h.contains=y.contains;var b=h.expr.match.needsContext;var w=/^<(\w+)\s*\/?>(?:<\/\1>|)$/;var E=/^.[^:#\[\.,]*$/;h.filter=function(e,t,n){var r=t[0];if(n){e=":not("+e+")"}return t.length===1&&r.nodeType===1?h.find.matchesSelector(r,e)?[r]:[]:h.find.matches(e,h.grep(t,function(e){return e.nodeType===1}))};h.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if(typeof e!=="string"){return this.pushStack(h(e).filter(function(){for(t=0;t<i;t++){if(h.contains(r[t],this)){return true}}}))}for(t=0;t<i;t++){h.find(e,r[t],n)}n=this.pushStack(i>1?h.unique(n):n);n.selector=this.selector?this.selector+" "+e:e;return n},filter:function(e){return this.pushStack(S(this,e||[],false))},not:function(e){return this.pushStack(S(this,e||[],true))},is:function(e){return!!S(this,typeof e==="string"&&b.test(e)?h(e):e||[],false).length}});var x,T=e.document,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=h.fn.init=function(e,t){var n,r;if(!e){return this}if(typeof e==="string"){if(e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3){n=[null,e,null]}else{n=N.exec(e)}if(n&&(n[1]||!t)){if(n[1]){t=t instanceof h?t[0]:t;h.merge(this,h.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:T,true));if(w.test(n[1])&&h.isPlainObject(t)){for(n in t){if(h.isFunction(this[n])){this[n](t[n])}else{this.attr(n,t[n])}}}return this}else{r=T.getElementById(n[2]);if(r&&r.parentNode){if(r.id!==n[2]){return x.find(e)}this.length=1;this[0]=r}this.context=T;this.selector=e;return this}}else if(!t||t.jquery){return(t||x).find(e)}else{return this.constructor(t).find(e)}}else if(e.nodeType){this.context=this[0]=e;this.length=1;return this}else if(h.isFunction(e)){return typeof x.ready!=="undefined"?x.ready(e):e(h)}if(e.selector!==undefined){this.selector=e.selector;this.context=e.context}return h.makeArray(e,this)};C.prototype=h.fn;x=h(T);var k=/^(?:parents|prev(?:Until|All))/,L={children:true,contents:true,next:true,prev:true};h.extend({dir:function(e,t,n){var r=[],i=e[t];while(i&&i.nodeType!==9&&(n===undefined||i.nodeType!==1||!h(i).is(n))){if(i.nodeType===1){r.push(i)}i=i[t]}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling){if(e.nodeType===1&&e!==t){n.push(e)}}return n}});h.fn.extend({has:function(e){var t,n=h(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++){if(h.contains(this,n[t])){return true}}})},closest:function(e,t){var n,r=0,i=this.length,s=[],o=b.test(e)||typeof e!=="string"?h(e,t||this.context):0;for(;r<i;r++){for(n=this[r];n&&n!==t;n=n.parentNode){if(n.nodeType<11&&(o?o.index(n)>-1:n.nodeType===1&&h.find.matchesSelector(n,e))){s.push(n);break}}}return this.pushStack(s.length>1?h.unique(s):s)},index:function(e){if(!e){return this[0]&&this[0].parentNode?this.first().prevAll().length:-1}if(typeof e==="string"){return h.inArray(this[0],h(e))}return h.inArray(e.jquery?e[0]:e,this)},add:function(e,t){return this.pushStack(h.unique(h.merge(this.get(),h(e,t))))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}});h.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return h.dir(e,"parentNode")},parentsUntil:function(e,t,n){return h.dir(e,"parentNode",n)},next:function(e){return A(e,"nextSibling")},prev:function(e){return A(e,"previousSibling")},nextAll:function(e){return h.dir(e,"nextSibling")},prevAll:function(e){return h.dir(e,"previousSibling")},nextUntil:function(e,t,n){return h.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return h.dir(e,"previousSibling",n)},siblings:function(e){return h.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return h.sibling(e.firstChild)},contents:function(e){return h.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:h.merge([],e.childNodes)}},function(e,t){h.fn[e]=function(n,r){var i=h.map(this,t,n);if(e.slice(-5)!=="Until"){r=n}if(r&&typeof r==="string"){i=h.filter(r,i)}if(this.length>1){if(!L[e]){i=h.unique(i)}if(k.test(e)){i=i.reverse()}}return this.pushStack(i)}});var O=/\S+/g;var M={};h.Callbacks=function(e){e=typeof e==="string"?M[e]||_(e):h.extend({},e);var t,n,r,i,s,o,u=[],a=!e.once&&[],f=function(c){n=e.memory&&c;r=true;s=o||0;o=0;i=u.length;t=true;for(;u&&s<i;s++){if(u[s].apply(c[0],c[1])===false&&e.stopOnFalse){n=false;break}}t=false;if(u){if(a){if(a.length){f(a.shift())}}else if(n){u=[]}else{l.disable()}}},l={add:function(){if(u){var r=u.length;(function s(t){h.each(t,function(t,n){var r=h.type(n);if(r==="function"){if(!e.unique||!l.has(n)){u.push(n)}}else if(n&&n.length&&r!=="string"){s(n)}})})(arguments);if(t){i=u.length}else if(n){o=r;f(n)}}return this},remove:function(){if(u){h.each(arguments,function(e,n){var r;while((r=h.inArray(n,u,r))>-1){u.splice(r,1);if(t){if(r<=i){i--}if(r<=s){s--}}}})}return this},has:function(e){return e?h.inArray(e,u)>-1:!!(u&&u.length)},empty:function(){u=[];i=0;return this},disable:function(){u=a=n=undefined;return this},disabled:function(){return!u},lock:function(){a=undefined;if(!n){l.disable()}return this},locked:function(){return!a},fireWith:function(e,n){if(u&&(!r||a)){n=n||[];n=[e,n.slice?n.slice():n];if(t){a.push(n)}else{f(n)}}return this},fire:function(){l.fireWith(this,arguments);return this},fired:function(){return!!r}};return l};h.extend({Deferred:function(e){var t=[["resolve","done",h.Callbacks("once memory"),"resolved"],["reject","fail",h.Callbacks("once memory"),"rejected"],["notify","progress",h.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){i.done(arguments).fail(arguments);return this},then:function(){var e=arguments;return h.Deferred(function(n){h.each(t,function(t,s){var o=h.isFunction(e[t])&&e[t];i[s[1]](function(){var e=o&&o.apply(this,arguments);if(e&&h.isFunction(e.promise)){e.promise().done(n.resolve).fail(n.reject).progress(n.notify)}else{n[s[0]+"With"](this===r?n.promise():this,o?[e]:arguments)}})});e=null}).promise()},promise:function(e){return e!=null?h.extend(e,r):r}},i={};r.pipe=r.then;h.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add;if(u){o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock)}i[s[0]]=function(){i[s[0]+"With"](this===i?r:this,arguments);return this};i[s[0]+"With"]=o.fireWith});r.promise(i);if(e){e.call(i,i)}return i},when:function(e){var t=0,n=r.call(arguments),i=n.length,s=i!==1||e&&h.isFunction(e.promise)?i:0,o=s===1?e:h.Deferred(),u=function(e,t,n){return function(i){t[e]=this;n[e]=arguments.length>1?r.call(arguments):i;if(n===a){o.notifyWith(t,n)}else if(!--s){o.resolveWith(t,n)}}},a,f,l;if(i>1){a=new Array(i);f=new Array(i);l=new Array(i);for(;t<i;t++){if(n[t]&&h.isFunction(n[t].promise)){n[t].promise().done(u(t,l,n)).fail(o.reject).progress(u(t,f,a))}else{--s}}}if(!s){o.resolveWith(l,n)}return o.promise()}});var D;h.fn.ready=function(e){h.ready.promise().done(e);return this};h.extend({isReady:false,readyWait:1,holdReady:function(e){if(e){h.readyWait++}else{h.ready(true)}},ready:function(e){if(e===true?--h.readyWait:h.isReady){return}if(!T.body){return setTimeout(h.ready)}h.isReady=true;if(e!==true&&--h.readyWait>0){return}D.resolveWith(T,[h]);if(h.fn.triggerHandler){h(T).triggerHandler("ready");h(T).off("ready")}}});h.ready.promise=function(t){if(!D){D=h.Deferred();if(T.readyState==="complete"){setTimeout(h.ready)}else if(T.addEventListener){T.addEventListener("DOMContentLoaded",H,false);e.addEventListener("load",H,false)}else{T.attachEvent("onreadystatechange",H);e.attachEvent("onload",H);var n=false;try{n=e.frameElement==null&&T.documentElement}catch(r){}if(n&&n.doScroll){(function i(){if(!h.isReady){try{n.doScroll("left")}catch(e){return setTimeout(i,50)}P();h.ready()}})()}}}return D.promise(t)};var B=typeof undefined;var j;for(j in h(l)){break}l.ownLast=j!=="0";l.inlineBlockNeedsLayout=false;h(function(){var e,t,n,r;n=T.getElementsByTagName("body")[0];if(!n||!n.style){return}t=T.createElement("div");r=T.createElement("div");r.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px";n.appendChild(r).appendChild(t);if(typeof t.style.zoom!==B){t.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";l.inlineBlockNeedsLayout=e=t.offsetWidth===3;if(e){n.style.zoom=1}}n.removeChild(r)});(function(){var e=T.createElement("div");if(l.deleteExpando==null){l.deleteExpando=true;try{delete e.test}catch(t){l.deleteExpando=false}}e=null})();h.acceptData=function(e){var t=h.noData[(e.nodeName+" ").toLowerCase()],n=+e.nodeType||1;return n!==1&&n!==9?false:!t||t!==true&&e.getAttribute("classid")===t};var F=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,I=/([A-Z])/g;h.extend({cache:{},noData:{"applet ":true,"embed ":true,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){e=e.nodeType?h.cache[e[h.expando]]:e[h.expando];return!!e&&!R(e)},data:function(e,t,n){return U(e,t,n)},removeData:function(e,t){return z(e,t)},_data:function(e,t,n){return U(e,t,n,true)},_removeData:function(e,t){return z(e,t,true)}});h.fn.extend({data:function(e,t){var n,r,i,s=this[0],o=s&&s.attributes;if(e===undefined){if(this.length){i=h.data(s);if(s.nodeType===1&&!h._data(s,"parsedAttrs")){n=o.length;while(n--){if(o[n]){r=o[n].name;if(r.indexOf("data-")===0){r=h.camelCase(r.slice(5));q(s,r,i[r])}}}h._data(s,"parsedAttrs",true)}}return i}if(typeof e==="object"){return this.each(function(){h.data(this,e)})}return arguments.length>1?this.each(function(){h.data(this,e,t)}):s?q(s,e,h.data(s,e)):undefined},removeData:function(e){return this.each(function(){h.removeData(this,e)})}});h.extend({queue:function(e,t,n){var r;if(e){t=(t||"fx")+"queue";r=h._data(e,t);if(n){if(!r||h.isArray(n)){r=h._data(e,t,h.makeArray(n))}else{r.push(n)}}return r||[]}},dequeue:function(e,t){t=t||"fx";var n=h.queue(e,t),r=n.length,i=n.shift(),s=h._queueHooks(e,t),o=function(){h.dequeue(e,t)};if(i==="inprogress"){i=n.shift();r--}if(i){if(t==="fx"){n.unshift("inprogress")}delete s.stop;i.call(e,o,s)}if(!r&&s){s.empty.fire()}},_queueHooks:function(e,t){var n=t+"queueHooks";return h._data(e,n)||h._data(e,n,{empty:h.Callbacks("once memory").add(function(){h._removeData(e,t+"queue");h._removeData(e,n)})})}});h.fn.extend({queue:function(e,t){var n=2;if(typeof e!=="string"){t=e;e="fx";n--}if(arguments.length<n){return h.queue(this[0],e)}return t===undefined?this:this.each(function(){var n=h.queue(this,e,t);h._queueHooks(this,e);if(e==="fx"&&n[0]!=="inprogress"){h.dequeue(this,e)}})},dequeue:function(e){return this.each(function(){h.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=h.Deferred(),s=this,o=this.length,u=function(){if(!--r){i.resolveWith(s,[s])}};if(typeof e!=="string"){t=e;e=undefined}e=e||"fx";while(o--){n=h._data(s[o],e+"queueHooks");if(n&&n.empty){r++;n.empty.add(u)}}u();return i.promise(t)}});var W=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;var X=["Top","Right","Bottom","Left"];var V=function(e,t){e=t||e;return h.css(e,"display")==="none"||!h.contains(e.ownerDocument,e)};var $=h.access=function(e,t,n,r,i,s,o){var u=0,a=e.length,f=n==null;if(h.type(n)==="object"){i=true;for(u in n){h.access(e,t,u,n[u],true,s,o)}}else if(r!==undefined){i=true;if(!h.isFunction(r)){o=true}if(f){if(o){t.call(e,r);t=null}else{f=t;t=function(e,t,n){return f.call(h(e),n)}}}if(t){for(;u<a;u++){t(e[u],n,o?r:r.call(e[u],u,t(e[u],n)))}}}return i?e:f?t.call(e):a?t(e[0],n):s};var J=/^(?:checkbox|radio)$/i;(function(){var e=T.createElement("input"),t=T.createElement("div"),n=T.createDocumentFragment();t.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";l.leadingWhitespace=t.firstChild.nodeType===3;l.tbody=!t.getElementsByTagName("tbody").length;l.htmlSerialize=!!t.getElementsByTagName("link").length;l.html5Clone=T.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>";e.type="checkbox";e.checked=true;n.appendChild(e);l.appendChecked=e.checked;t.innerHTML="<textarea>x</textarea>";l.noCloneChecked=!!t.cloneNode(true).lastChild.defaultValue;n.appendChild(t);t.innerHTML="<input type='radio' checked='checked' name='t'/>";l.checkClone=t.cloneNode(true).cloneNode(true).lastChild.checked;l.noCloneEvent=true;if(t.attachEvent){t.attachEvent("onclick",function(){l.noCloneEvent=false});t.cloneNode(true).click()}if(l.deleteExpando==null){l.deleteExpando=true;try{delete t.test}catch(r){l.deleteExpando=false}}})();(function(){var t,n,r=T.createElement("div");for(t in{submit:true,change:true,focusin:true}){n="on"+t;if(!(l[t+"Bubbles"]=n in e)){r.setAttribute(n,"t");l[t+"Bubbles"]=r.attributes[n].expando===false}}r=null})();var K=/^(?:input|select|textarea)$/i,Q=/^key/,G=/^(?:mouse|pointer|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=/^([^.]*)(?:\.(.+)|)$/;h.event={global:{},add:function(e,t,n,r,i){var s,o,u,a,f,l,c,p,d,v,m,g=h._data(e);if(!g){return}if(n.handler){a=n;n=a.handler;i=a.selector}if(!n.guid){n.guid=h.guid++}if(!(o=g.events)){o=g.events={}}if(!(l=g.handle)){l=g.handle=function(e){return typeof h!==B&&(!e||h.event.triggered!==e.type)?h.event.dispatch.apply(l.elem,arguments):undefined};l.elem=e}t=(t||"").match(O)||[""];u=t.length;while(u--){s=Z.exec(t[u])||[];d=m=s[1];v=(s[2]||"").split(".").sort();if(!d){continue}f=h.event.special[d]||{};d=(i?f.delegateType:f.bindType)||d;f=h.event.special[d]||{};c=h.extend({type:d,origType:m,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&h.expr.match.needsContext.test(i),namespace:v.join(".")},a);if(!(p=o[d])){p=o[d]=[];p.delegateCount=0;if(!f.setup||f.setup.call(e,r,v,l)===false){if(e.addEventListener){e.addEventListener(d,l,false)}else if(e.attachEvent){e.attachEvent("on"+d,l)}}}if(f.add){f.add.call(e,c);if(!c.handler.guid){c.handler.guid=n.guid}}if(i){p.splice(p.delegateCount++,0,c)}else{p.push(c)}h.event.global[d]=true}e=null},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,p,d,v,m,g=h.hasData(e)&&h._data(e);if(!g||!(l=g.events)){return}t=(t||"").match(O)||[""];f=t.length;while(f--){u=Z.exec(t[f])||[];d=m=u[1];v=(u[2]||"").split(".").sort();if(!d){for(d in l){h.event.remove(e,d+t[f],n,r,true)}continue}c=h.event.special[d]||{};d=(r?c.delegateType:c.bindType)||d;p=l[d]||[];u=u[2]&&new RegExp("(^|\\.)"+v.join("\\.(?:.*\\.|)")+"(\\.|$)");a=s=p.length;while(s--){o=p[s];if((i||m===o.origType)&&(!n||n.guid===o.guid)&&(!u||u.test(o.namespace))&&(!r||r===o.selector||r==="**"&&o.selector)){p.splice(s,1);if(o.selector){p.delegateCount--}if(c.remove){c.remove.call(e,o)}}}if(a&&!p.length){if(!c.teardown||c.teardown.call(e,v,g.handle)===false){h.removeEvent(e,d,g.handle)}delete l[d]}}if(h.isEmptyObject(l)){delete g.handle;h._removeData(e,"events")}},trigger:function(t,n,r,i){var s,o,u,a,l,c,p,d=[r||T],v=f.call(t,"type")?t.type:t,m=f.call(t,"namespace")?t.namespace.split("."):[];u=c=r=r||T;if(r.nodeType===3||r.nodeType===8){return}if(Y.test(v+h.event.triggered)){return}if(v.indexOf(".")>=0){m=v.split(".");v=m.shift();m.sort()}o=v.indexOf(":")<0&&"on"+v;t=t[h.expando]?t:new h.Event(v,typeof t==="object"&&t);t.isTrigger=i?2:3;t.namespace=m.join(".");t.namespace_re=t.namespace?new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;t.result=undefined;if(!t.target){t.target=r}n=n==null?[t]:h.makeArray(n,[t]);l=h.event.special[v]||{};if(!i&&l.trigger&&l.trigger.apply(r,n)===false){return}if(!i&&!l.noBubble&&!h.isWindow(r)){a=l.delegateType||v;if(!Y.test(a+v)){u=u.parentNode}for(;u;u=u.parentNode){d.push(u);c=u}if(c===(r.ownerDocument||T)){d.push(c.defaultView||c.parentWindow||e)}}p=0;while((u=d[p++])&&!t.isPropagationStopped()){t.type=p>1?a:l.bindType||v;s=(h._data(u,"events")||{})[t.type]&&h._data(u,"handle");if(s){s.apply(u,n)}s=o&&u[o];if(s&&s.apply&&h.acceptData(u)){t.result=s.apply(u,n);if(t.result===false){t.preventDefault()}}}t.type=v;if(!i&&!t.isDefaultPrevented()){if((!l._default||l._default.apply(d.pop(),n)===false)&&h.acceptData(r)){if(o&&r[v]&&!h.isWindow(r)){c=r[o];if(c){r[o]=null}h.event.triggered=v;try{r[v]()}catch(g){}h.event.triggered=undefined;if(c){r[o]=c}}}}return t.result},dispatch:function(e){e=h.event.fix(e);var t,n,i,s,o,u=[],a=r.call(arguments),f=(h._data(this,"events")||{})[e.type]||[],l=h.event.special[e.type]||{};a[0]=e;e.delegateTarget=this;if(l.preDispatch&&l.preDispatch.call(this,e)===false){return}u=h.event.handlers.call(this,e,f);t=0;while((s=u[t++])&&!e.isPropagationStopped()){e.currentTarget=s.elem;o=0;while((i=s.handlers[o++])&&!e.isImmediatePropagationStopped()){if(!e.namespace_re||e.namespace_re.test(i.namespace)){e.handleObj=i;e.data=i.data;n=((h.event.special[i.origType]||{}).handle||i.handler).apply(s.elem,a);if(n!==undefined){if((e.result=n)===false){e.preventDefault();e.stopPropagation()}}}}}if(l.postDispatch){l.postDispatch.call(this,e)}return e.result},handlers:function(e,t){var n,r,i,s,o=[],u=t.delegateCount,a=e.target;if(u&&a.nodeType&&(!e.button||e.type!=="click")){for(;a!=this;a=a.parentNode||this){if(a.nodeType===1&&(a.disabled!==true||e.type!=="click")){i=[];for(s=0;s<u;s++){r=t[s];n=r.selector+" ";if(i[n]===undefined){i[n]=r.needsContext?h(n,this).index(a)>=0:h.find(n,this,null,[a]).length}if(i[n]){i.push(r)}}if(i.length){o.push({elem:a,handlers:i})}}}}if(u<t.length){o.push({elem:this,handlers:t.slice(u)})}return o},fix:function(e){if(e[h.expando]){return e}var t,n,r,i=e.type,s=e,o=this.fixHooks[i];if(!o){this.fixHooks[i]=o=G.test(i)?this.mouseHooks:Q.test(i)?this.keyHooks:{}}r=o.props?this.props.concat(o.props):this.props;e=new h.Event(s);t=r.length;while(t--){n=r[t];e[n]=s[n]}if(!e.target){e.target=s.srcElement||T}if(e.target.nodeType===3){e.target=e.target.parentNode}e.metaKey=!!e.metaKey;return o.filter?o.filter(e,s):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){if(e.which==null){e.which=t.charCode!=null?t.charCode:t.keyCode}return e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button,o=t.fromElement;if(e.pageX==null&&t.clientX!=null){r=e.target.ownerDocument||T;i=r.documentElement;n=r.body;e.pageX=t.clientX+(i&&i.scrollLeft||n&&n.scrollLeft||0)-(i&&i.clientLeft||n&&n.clientLeft||0);e.pageY=t.clientY+(i&&i.scrollTop||n&&n.scrollTop||0)-(i&&i.clientTop||n&&n.clientTop||0)}if(!e.relatedTarget&&o){e.relatedTarget=o===e.target?t.toElement:o}if(!e.which&&s!==undefined){e.which=s&1?1:s&2?3:s&4?2:0}return e}},special:{load:{noBubble:true},focus:{trigger:function(){if(this!==nt()&&this.focus){try{this.focus();return false}catch(e){}}},delegateType:"focusin"},blur:{trigger:function(){if(this===nt()&&this.blur){this.blur();return false}},delegateType:"focusout"},click:{trigger:function(){if(h.nodeName(this,"input")&&this.type==="checkbox"&&this.click){this.click();return false}},_default:function(e){return h.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){if(e.result!==undefined&&e.originalEvent){e.originalEvent.returnValue=e.result}}}},simulate:function(e,t,n,r){var i=h.extend(new h.Event,n,{type:e,isSimulated:true,originalEvent:{}});if(r){h.event.trigger(i,null,t)}else{h.event.dispatch.call(t,i)}if(i.isDefaultPrevented()){n.preventDefault()}}};h.removeEvent=T.removeEventListener?function(e,t,n){if(e.removeEventListener){e.removeEventListener(t,n,false)}}:function(e,t,n){var r="on"+t;if(e.detachEvent){if(typeof e[r]===B){e[r]=null}e.detachEvent(r,n)}};h.Event=function(e,t){if(!(this instanceof h.Event)){return new h.Event(e,t)}if(e&&e.type){this.originalEvent=e;this.type=e.type;this.isDefaultPrevented=e.defaultPrevented||e.defaultPrevented===undefined&&e.returnValue===false?et:tt}else{this.type=e}if(t){h.extend(this,t)}this.timeStamp=e&&e.timeStamp||h.now();this[h.expando]=true};h.Event.prototype={isDefaultPrevented:tt,isPropagationStopped:tt,isImmediatePropagationStopped:tt,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=et;if(!e){return}if(e.preventDefault){e.preventDefault()}else{e.returnValue=false}},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=et;if(!e){return}if(e.stopPropagation){e.stopPropagation()}e.cancelBubble=true},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=et;if(e&&e.stopImmediatePropagation){e.stopImmediatePropagation()}this.stopPropagation()}};h.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){h.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj;if(!i||i!==r&&!h.contains(r,i)){e.type=s.origType;n=s.handler.apply(this,arguments);e.type=t}return n}}});if(!l.submitBubbles){h.event.special.submit={setup:function(){if(h.nodeName(this,"form")){return false}h.event.add(this,"click._submit keypress._submit",function(e){var t=e.target,n=h.nodeName(t,"input")||h.nodeName(t,"button")?t.form:undefined;if(n&&!h._data(n,"submitBubbles")){h.event.add(n,"submit._submit",function(e){e._submit_bubble=true});h._data(n,"submitBubbles",true)}})},postDispatch:function(e){if(e._submit_bubble){delete e._submit_bubble;if(this.parentNode&&!e.isTrigger){h.event.simulate("submit",this.parentNode,e,true)}}},teardown:function(){if(h.nodeName(this,"form")){return false}h.event.remove(this,"._submit")}}}if(!l.changeBubbles){h.event.special.change={setup:function(){if(K.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){h.event.add(this,"propertychange._change",function(e){if(e.originalEvent.propertyName==="checked"){this._just_changed=true}});h.event.add(this,"click._change",function(e){if(this._just_changed&&!e.isTrigger){this._just_changed=false}h.event.simulate("change",this,e,true)})}return false}h.event.add(this,"beforeactivate._change",function(e){var t=e.target;if(K.test(t.nodeName)&&!h._data(t,"changeBubbles")){h.event.add(t,"change._change",function(e){if(this.parentNode&&!e.isSimulated&&!e.isTrigger){h.event.simulate("change",this.parentNode,e,true)}});h._data(t,"changeBubbles",true)}})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox"){return e.handleObj.handler.apply(this,arguments)}},teardown:function(){h.event.remove(this,"._change");return!K.test(this.nodeName)}}}if(!l.focusinBubbles){h.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){h.event.simulate(t,e.target,h.event.fix(e),true)};h.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=h._data(r,t);if(!i){r.addEventListener(e,n,true)}h._data(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=h._data(r,t)-1;if(!i){r.removeEventListener(e,n,true);h._removeData(r,t)}else{h._data(r,t,i)}}}})}h.fn.extend({on:function(e,t,n,r,i){var s,o;if(typeof e==="object"){if(typeof t!=="string"){n=n||t;t=undefined}for(s in e){this.on(s,t,n,e[s],i)}return this}if(n==null&&r==null){r=t;n=t=undefined}else if(r==null){if(typeof t==="string"){r=n;n=undefined}else{r=n;n=t;t=undefined}}if(r===false){r=tt}else if(!r){return this}if(i===1){o=r;r=function(e){h().off(e);return o.apply(this,arguments)};r.guid=o.guid||(o.guid=h.guid++)}return this.each(function(){h.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj){r=e.handleObj;h(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler);return this}if(typeof e==="object"){for(i in e){this.off(i,t,e[i])}return this}if(t===false||typeof t==="function"){n=t;t=undefined}if(n===false){n=tt}return this.each(function(){h.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){h.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n){return h.event.trigger(e,t,n,true)}}});var it="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|"+"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",st=/ jQuery\d+="(?:null|\d+)"/g,ot=new RegExp("<(?:"+it+")[\\s/>]","i"),ut=/^\s+/,at=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ft=/<([\w:]+)/,lt=/<tbody/i,ct=/<|&#?\w+;/,ht=/<(?:script|style|link)/i,pt=/checked\s*(?:[^=]|=\s*.checked.)/i,dt=/^$|\/(?:java|ecma)script/i,vt=/^true\/(.*)/,mt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,gt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},yt=rt(T),bt=yt.appendChild(T.createElement("div"));gt.optgroup=gt.option;gt.tbody=gt.tfoot=gt.colgroup=gt.caption=gt.thead;gt.th=gt.td;h.extend({clone:function(e,t,n){var r,i,s,o,u,a=h.contains(e.ownerDocument,e);if(l.html5Clone||h.isXMLDoc(e)||!ot.test("<"+e.nodeName+">")){s=e.cloneNode(true)}else{bt.innerHTML=e.outerHTML;bt.removeChild(s=bt.firstChild)}if((!l.noCloneEvent||!l.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!h.isXMLDoc(e)){r=wt(s);u=wt(e);for(o=0;(i=u[o])!=null;++o){if(r[o]){kt(i,r[o])}}}if(t){if(n){u=u||wt(e);r=r||wt(s);for(o=0;(i=u[o])!=null;o++){Ct(i,r[o])}}else{Ct(e,s)}}r=wt(s,"script");if(r.length>0){Nt(r,!a&&wt(e,"script"))}r=u=i=null;return s},buildFragment:function(e,t,n,r){var i,s,o,u,a,f,c,p=e.length,d=rt(t),v=[],m=0;for(;m<p;m++){s=e[m];if(s||s===0){if(h.type(s)==="object"){h.merge(v,s.nodeType?[s]:s)}else if(!ct.test(s)){v.push(t.createTextNode(s))}else{u=u||d.appendChild(t.createElement("div"));a=(ft.exec(s)||["",""])[1].toLowerCase();c=gt[a]||gt._default;u.innerHTML=c[1]+s.replace(at,"<$1></$2>")+c[2];i=c[0];while(i--){u=u.lastChild}if(!l.leadingWhitespace&&ut.test(s)){v.push(t.createTextNode(ut.exec(s)[0]))}if(!l.tbody){s=a==="table"&&!lt.test(s)?u.firstChild:c[1]==="<table>"&&!lt.test(s)?u:0;i=s&&s.childNodes.length;while(i--){if(h.nodeName(f=s.childNodes[i],"tbody")&&!f.childNodes.length){s.removeChild(f)}}}h.merge(v,u.childNodes);u.textContent="";while(u.firstChild){u.removeChild(u.firstChild)}u=d.lastChild}}}if(u){d.removeChild(u)}if(!l.appendChecked){h.grep(wt(v,"input"),Et)}m=0;while(s=v[m++]){if(r&&h.inArray(s,r)!==-1){continue}o=h.contains(s.ownerDocument,s);u=wt(d.appendChild(s),"script");if(o){Nt(u)}if(n){i=0;while(s=u[i++]){if(dt.test(s.type||"")){n.push(s)}}}}u=null;return d},cleanData:function(e,t){var r,i,s,o,u=0,a=h.expando,f=h.cache,c=l.deleteExpando,p=h.event.special;for(;(r=e[u])!=null;u++){if(t||h.acceptData(r)){s=r[a];o=s&&f[s];if(o){if(o.events){for(i in o.events){if(p[i]){h.event.remove(r,i)}else{h.removeEvent(r,i,o.handle)}}}if(f[s]){delete f[s];if(c){delete r[a]}else if(typeof r.removeAttribute!==B){r.removeAttribute(a)}else{r[a]=null}n.push(s)}}}}}});h.fn.extend({text:function(e){return $(this,function(e){return e===undefined?h.text(this):this.empty().append((this[0]&&this[0].ownerDocument||T).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var t=St(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var t=St(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){if(this.parentNode){this.parentNode.insertBefore(e,this)}})},after:function(){return this.domManip(arguments,function(e){if(this.parentNode){this.parentNode.insertBefore(e,this.nextSibling)}})},remove:function(e,t){var n,r=e?h.filter(e,this):this,i=0;for(;(n=r[i])!=null;i++){if(!t&&n.nodeType===1){h.cleanData(wt(n))}if(n.parentNode){if(t&&h.contains(n.ownerDocument,n)){Nt(wt(n,"script"))}n.parentNode.removeChild(n)}}return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){if(e.nodeType===1){h.cleanData(wt(e,false))}while(e.firstChild){e.removeChild(e.firstChild)}if(e.options&&h.nodeName(e,"select")){e.options.length=0}}return this},clone:function(e,t){e=e==null?false:e;t=t==null?e:t;return this.map(function(){return h.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined){return t.nodeType===1?t.innerHTML.replace(st,""):undefined}if(typeof e==="string"&&!ht.test(e)&&(l.htmlSerialize||!ot.test(e))&&(l.leadingWhitespace||!ut.test(e))&&!gt[(ft.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(at,"<$1></$2>");try{for(;n<r;n++){t=this[n]||{};if(t.nodeType===1){h.cleanData(wt(t,false));t.innerHTML=e}}t=0}catch(i){}}if(t){this.empty().append(e)}},null,e,arguments.length)},replaceWith:function(){var e=arguments[0];this.domManip(arguments,function(t){e=this.parentNode;h.cleanData(wt(this));if(e){e.replaceChild(t,this)}});return e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,true)},domManip:function(e,t){e=i.apply([],e);var n,r,s,o,u,a,f=0,c=this.length,p=this,d=c-1,v=e[0],m=h.isFunction(v);if(m||c>1&&typeof v==="string"&&!l.checkClone&&pt.test(v)){return this.each(function(n){var r=p.eq(n);if(m){e[0]=v.call(this,n,r.html())}r.domManip(e,t)})}if(c){a=h.buildFragment(e,this[0].ownerDocument,false,this);n=a.firstChild;if(a.childNodes.length===1){a=n}if(n){o=h.map(wt(a,"script"),xt);s=o.length;for(;f<c;f++){r=a;if(f!==d){r=h.clone(r,true,true);if(s){h.merge(o,wt(r,"script"))}}t.call(this[f],r,f)}if(s){u=o[o.length-1].ownerDocument;h.map(o,Tt);for(f=0;f<s;f++){r=o[f];if(dt.test(r.type||"")&&!h._data(r,"globalEval")&&h.contains(u,r)){if(r.src){if(h._evalUrl){h._evalUrl(r.src)}}else{h.globalEval((r.text||r.textContent||r.innerHTML||"").replace(mt,""))}}}}a=n=null}}return this}});h.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){h.fn[e]=function(e){var n,r=0,i=[],o=h(e),u=o.length-1;for(;r<=u;r++){n=r===u?this:this.clone(true);h(o[r])[t](n);s.apply(i,n.get())}return this.pushStack(i)}});var Lt,At={};(function(){var e;l.shrinkWrapBlocks=function(){if(e!=null){return e}e=false;var t,n,r;n=T.getElementsByTagName("body")[0];if(!n||!n.style){return}t=T.createElement("div");r=T.createElement("div");r.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px";n.appendChild(r).appendChild(t);if(typeof t.style.zoom!==B){t.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;"+"box-sizing:content-box;display:block;margin:0;border:0;"+"padding:1px;width:1px;zoom:1";t.appendChild(T.createElement("div")).style.width="5px";e=t.offsetWidth!==3}n.removeChild(r);return e}})();var _t=/^margin/;var Dt=new RegExp("^("+W+")(?!px)[a-z%]+$","i");var Pt,Ht,Bt=/^(top|right|bottom|left)$/;if(e.getComputedStyle){Pt=function(e){return e.ownerDocument.defaultView.getComputedStyle(e,null)};Ht=function(e,t,n){var r,i,s,o,u=e.style;n=n||Pt(e);o=n?n.getPropertyValue(t)||n[t]:undefined;if(n){if(o===""&&!h.contains(e.ownerDocument,e)){o=h.style(e,t)}if(Dt.test(o)&&_t.test(t)){r=u.width;i=u.minWidth;s=u.maxWidth;u.minWidth=u.maxWidth=u.width=o;o=n.width;u.width=r;u.minWidth=i;u.maxWidth=s}}return o===undefined?o:o+""}}else if(T.documentElement.currentStyle){Pt=function(e){return e.currentStyle};Ht=function(e,t,n){var r,i,s,o,u=e.style;n=n||Pt(e);o=n?n[t]:undefined;if(o==null&&u&&u[t]){o=u[t]}if(Dt.test(o)&&!Bt.test(t)){r=u.left;i=e.runtimeStyle;s=i&&i.left;if(s){i.left=e.currentStyle.left}u.left=t==="fontSize"?"1em":o;o=u.pixelLeft+"px";u.left=r;if(s){i.left=s}}return o===undefined?o:o+""||"auto"}}(function(){function a(){var t,n,r,a;n=T.getElementsByTagName("body")[0];if(!n||!n.style){return}t=T.createElement("div");r=T.createElement("div");r.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px";n.appendChild(r).appendChild(t);t.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;"+"box-sizing:border-box;display:block;margin-top:1%;top:1%;"+"border:1px;padding:1px;width:4px;position:absolute";i=s=false;u=true;if(e.getComputedStyle){i=(e.getComputedStyle(t,null)||{}).top!=="1%";s=(e.getComputedStyle(t,null)||{width:"4px"}).width==="4px";a=t.appendChild(T.createElement("div"));a.style.cssText=t.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;"+"box-sizing:content-box;display:block;margin:0;border:0;padding:0";a.style.marginRight=a.style.width="0";t.style.width="1px";u=!parseFloat((e.getComputedStyle(a,null)||{}).marginRight)}t.innerHTML="<table><tr><td></td><td>t</td></tr></table>";a=t.getElementsByTagName("td");a[0].style.cssText="margin:0;border:0;padding:0;display:none";o=a[0].offsetHeight===0;if(o){a[0].style.display="";a[1].style.display="none";o=a[0].offsetHeight===0}n.removeChild(r)}var t,n,r,i,s,o,u;t=T.createElement("div");t.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";r=t.getElementsByTagName("a")[0];n=r&&r.style;if(!n){return}n.cssText="float:left;opacity:.5";l.opacity=n.opacity==="0.5";l.cssFloat=!!n.cssFloat;t.style.backgroundClip="content-box";t.cloneNode(true).style.backgroundClip="";l.clearCloneStyle=t.style.backgroundClip==="content-box";l.boxSizing=n.boxSizing===""||n.MozBoxSizing===""||n.WebkitBoxSizing==="";h.extend(l,{reliableHiddenOffsets:function(){if(o==null){a()}return o},boxSizingReliable:function(){if(s==null){a()}return s},pixelPosition:function(){if(i==null){a()}return i},reliableMarginRight:function(){if(u==null){a()}return u}})})();h.swap=function(e,t,n,r){var i,s,o={};for(s in t){o[s]=e.style[s];e.style[s]=t[s]}i=n.apply(e,r||[]);for(s in t){e.style[s]=o[s]}return i};var Ft=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,qt=/^(none|table(?!-c[ea]).+)/,Rt=new RegExp("^("+W+")(.*)$","i"),Ut=new RegExp("^([+-])=("+W+")","i"),zt={position:"absolute",visibility:"hidden",display:"block"},Wt={letterSpacing:"0",fontWeight:"400"},Xt=["Webkit","O","Moz","ms"];h.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Ht(e,"opacity");return n===""?"1":n}}}},cssNumber:{columnCount:true,fillOpacity:true,flexGrow:true,flexShrink:true,fontWeight:true,lineHeight:true,opacity:true,order:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(e,t,n,r){if(!e||e.nodeType===3||e.nodeType===8||!e.style){return}var i,s,o,u=h.camelCase(t),a=e.style;t=h.cssProps[u]||(h.cssProps[u]=Vt(a,u));o=h.cssHooks[t]||h.cssHooks[u];if(n!==undefined){s=typeof n;if(s==="string"&&(i=Ut.exec(n))){n=(i[1]+1)*i[2]+parseFloat(h.css(e,t));s="number"}if(n==null||n!==n){return}if(s==="number"&&!h.cssNumber[u]){n+="px"}if(!l.clearCloneStyle&&n===""&&t.indexOf("background")===0){a[t]="inherit"}if(!o||!("set"in o)||(n=o.set(e,n,r))!==undefined){try{a[t]=n}catch(f){}}}else{if(o&&"get"in o&&(i=o.get(e,false,r))!==undefined){return i}return a[t]}},css:function(e,t,n,r){var i,s,o,u=h.camelCase(t);t=h.cssProps[u]||(h.cssProps[u]=Vt(e.style,u));o=h.cssHooks[t]||h.cssHooks[u];if(o&&"get"in o){s=o.get(e,true,n)}if(s===undefined){s=Ht(e,t,r)}if(s==="normal"&&t in Wt){s=Wt[t]}if(n===""||n){i=parseFloat(s);return n===true||h.isNumeric(i)?i||0:s}return s}});h.each(["height","width"],function(e,t){h.cssHooks[t]={get:function(e,n,r){if(n){return qt.test(h.css(e,"display"))&&e.offsetWidth===0?h.swap(e,zt,function(){return Qt(e,t,r)}):Qt(e,t,r)}},set:function(e,n,r){var i=r&&Pt(e);return Jt(e,n,r?Kt(e,t,r,l.boxSizing&&h.css(e,"boxSizing",false,i)==="border-box",i):0)}}});if(!l.opacity){h.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=h.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if((t>=1||t==="")&&h.trim(s.replace(Ft,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(t===""||r&&!r.filter){return}}n.filter=Ft.test(s)?s.replace(Ft,i):s+" "+i}}}h.cssHooks.marginRight=jt(l.reliableMarginRight,function(e,t){if(t){return h.swap(e,{display:"inline-block"},Ht,[e,"marginRight"])}});h.each({margin:"",padding:"",border:"Width"},function(e,t){h.cssHooks[e+t]={expand:function(n){var r=0,i={},s=typeof n==="string"?n.split(" "):[n];for(;r<4;r++){i[e+X[r]+t]=s[r]||s[r-2]||s[0]}return i}};if(!_t.test(e)){h.cssHooks[e+t].set=Jt}});h.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,s={},o=0;if(h.isArray(t)){r=Pt(e);i=t.length;for(;o<i;o++){s[t[o]]=h.css(e,t[o],false,r)}return s}return n!==undefined?h.style(e,t,n):h.css(e,t)},e,t,arguments.length>1)},show:function(){return $t(this,true)},hide:function(){return $t(this)},toggle:function(e){if(typeof e==="boolean"){return e?this.show():this.hide()}return this.each(function(){if(V(this)){h(this).show()}else{h(this).hide()}})}});h.Tween=Gt;Gt.prototype={constructor:Gt,init:function(e,t,n,r,i,s){this.elem=e;this.prop=n;this.easing=i||"swing";this.options=t;this.start=this.now=this.cur();this.end=r;this.unit=s||(h.cssNumber[n]?"":"px")},cur:function(){var e=Gt.propHooks[this.prop];return e&&e.get?e.get(this):Gt.propHooks._default.get(this)},run:function(e){var t,n=Gt.propHooks[this.prop];if(this.options.duration){this.pos=t=h.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration)}else{this.pos=t=e}this.now=(this.end-this.start)*t+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this)}if(n&&n.set){n.set(this)}else{Gt.propHooks._default.set(this)}return this}};Gt.prototype.init.prototype=Gt.prototype;Gt.propHooks={_default:{get:function(e){var t;if(e.elem[e.prop]!=null&&(!e.elem.style||e.elem.style[e.prop]==null)){return e.elem[e.prop]}t=h.css(e.elem,e.prop,"");return!t||t==="auto"?0:t},set:function(e){if(h.fx.step[e.prop]){h.fx.step[e.prop](e)}else if(e.elem.style&&(e.elem.style[h.cssProps[e.prop]]!=null||h.cssHooks[e.prop])){h.style(e.elem,e.prop,e.now+e.unit)}else{e.elem[e.prop]=e.now}}}};Gt.propHooks.scrollTop=Gt.propHooks.scrollLeft={set:function(e){if(e.elem.nodeType&&e.elem.parentNode){e.elem[e.prop]=e.now}}};h.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}};h.fx=Gt.prototype.init;h.fx.step={};var Yt,Zt,en=/^(?:toggle|show|hide)$/,tn=new RegExp("^(?:([+-])=|)("+W+")([a-z%]*)$","i"),nn=/queueHooks$/,rn=[fn],sn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=tn.exec(t),s=i&&i[3]||(h.cssNumber[e]?"":"px"),o=(h.cssNumber[e]||s!=="px"&&+r)&&tn.exec(h.css(n.elem,e)),u=1,a=20;if(o&&o[3]!==s){s=s||o[3];i=i||[];o=+r||1;do{u=u||".5";o=o/u;h.style(n.elem,e,o+s)}while(u!==(u=n.cur()/r)&&u!==1&&--a)}if(i){o=n.start=+o||+r||0;n.unit=s;n.end=i[1]?o+(i[1]+1)*i[2]:+i[2]}return n}]};h.Animation=h.extend(cn,{tweener:function(e,t){if(h.isFunction(e)){t=e;e=["*"]}else{e=e.split(" ")}var n,r=0,i=e.length;for(;r<i;r++){n=e[r];sn[n]=sn[n]||[];sn[n].unshift(t)}},prefilter:function(e,t){if(t){rn.unshift(e)}else{rn.push(e)}}});h.speed=function(e,t,n){var r=e&&typeof e==="object"?h.extend({},e):{complete:n||!n&&t||h.isFunction(e)&&e,duration:e,easing:n&&t||t&&!h.isFunction(t)&&t};r.duration=h.fx.off?0:typeof r.duration==="number"?r.duration:r.duration in h.fx.speeds?h.fx.speeds[r.duration]:h.fx.speeds._default;if(r.queue==null||r.queue===true){r.queue="fx"}r.old=r.complete;r.complete=function(){if(h.isFunction(r.old)){r.old.call(this)}if(r.queue){h.dequeue(this,r.queue)}};return r};h.fn.extend({fadeTo:function(e,t,n,r){return this.filter(V).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=h.isEmptyObject(e),s=h.speed(t,n,r),o=function(){var t=cn(this,h.extend({},e),s);if(i||h._data(this,"finish")){t.stop(true)}};o.finish=o;return i||s.queue===false?this.each(o):this.queue(s.queue,o)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop;t(n)};if(typeof e!=="string"){n=t;t=e;e=undefined}if(t&&e!==false){this.queue(e||"fx",[])}return this.each(function(){var t=true,i=e!=null&&e+"queueHooks",s=h.timers,o=h._data(this);if(i){if(o[i]&&o[i].stop){r(o[i])}}else{for(i in o){if(o[i]&&o[i].stop&&nn.test(i)){r(o[i])}}}for(i=s.length;i--;){if(s[i].elem===this&&(e==null||s[i].queue===e)){s[i].anim.stop(n);t=false;s.splice(i,1)}}if(t||!n){h.dequeue(this,e)}})},finish:function(e){if(e!==false){e=e||"fx"}return this.each(function(){var t,n=h._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],s=h.timers,o=r?r.length:0;n.finish=true;h.queue(this,e,[]);if(i&&i.stop){i.stop.call(this,true)}for(t=s.length;t--;){if(s[t].elem===this&&s[t].queue===e){s[t].anim.stop(true);s.splice(t,1)}}for(t=0;t<o;t++){if(r[t]&&r[t].finish){r[t].finish.call(this)}}delete n.finish})}});h.each(["toggle","show","hide"],function(e,t){var n=h.fn[t];h.fn[t]=function(e,r,i){return e==null||typeof e==="boolean"?n.apply(this,arguments):this.animate(un(t,true),e,r,i)}});h.each({slideDown:un("show"),slideUp:un("hide"),slideToggle:un("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){h.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}});h.timers=[];h.fx.tick=function(){var e,t=h.timers,n=0;Yt=h.now();for(;n<t.length;n++){e=t[n];if(!e()&&t[n]===e){t.splice(n--,1)}}if(!t.length){h.fx.stop()}Yt=undefined};h.fx.timer=function(e){h.timers.push(e);if(e()){h.fx.start()}else{h.timers.pop()}};h.fx.interval=13;h.fx.start=function(){if(!Zt){Zt=setInterval(h.fx.tick,h.fx.interval)}};h.fx.stop=function(){clearInterval(Zt);Zt=null};h.fx.speeds={slow:600,fast:200,_default:400};h.fn.delay=function(e,t){e=h.fx?h.fx.speeds[e]||e:e;t=t||"fx";return this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})};(function(){var e,t,n,r,i;t=T.createElement("div");t.setAttribute("className","t");t.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";r=t.getElementsByTagName("a")[0];n=T.createElement("select");i=n.appendChild(T.createElement("option"));e=t.getElementsByTagName("input")[0];r.style.cssText="top:1px";l.getSetAttribute=t.className!=="t";l.style=/top/.test(r.getAttribute("style"));l.hrefNormalized=r.getAttribute("href")==="/a";l.checkOn=!!e.value;l.optSelected=i.selected;l.enctype=!!T.createElement("form").enctype;n.disabled=true;l.optDisabled=!i.disabled;e=T.createElement("input");e.setAttribute("value","");l.input=e.getAttribute("value")==="";e.value="t";e.setAttribute("type","radio");l.radioValue=e.value==="t"})();var hn=/\r/g;h.fn.extend({val:function(e){var t,n,r,i=this[0];if(!arguments.length){if(i){t=h.valHooks[i.type]||h.valHooks[i.nodeName.toLowerCase()];if(t&&"get"in t&&(n=t.get(i,"value"))!==undefined){return n}n=i.value;return typeof n==="string"?n.replace(hn,""):n==null?"":n}return}r=h.isFunction(e);return this.each(function(n){var i;if(this.nodeType!==1){return}if(r){i=e.call(this,n,h(this).val())}else{i=e}if(i==null){i=""}else if(typeof i==="number"){i+=""}else if(h.isArray(i)){i=h.map(i,function(e){return e==null?"":e+""})}t=h.valHooks[this.type]||h.valHooks[this.nodeName.toLowerCase()];if(!t||!("set"in t)||t.set(this,i,"value")===undefined){this.value=i}})}});h.extend({valHooks:{option:{get:function(e){var t=h.find.attr(e,"value");return t!=null?t:h.trim(h.text(e))}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(l.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!h.nodeName(n.parentNode,"optgroup"))){t=h(n).val();if(s){return t}o.push(t)}}return o},set:function(e,t){var n,r,i=e.options,s=h.makeArray(t),o=i.length;while(o--){r=i[o];if(h.inArray(h.valHooks.option.get(r),s)>=0){try{r.selected=n=true}catch(u){r.scrollHeight}}else{r.selected=false}}if(!n){e.selectedIndex=-1}return i}}}});h.each(["radio","checkbox"],function(){h.valHooks[this]={set:function(e,t){if(h.isArray(t)){return e.checked=h.inArray(h(e).val(),t)>=0}}};if(!l.checkOn){h.valHooks[this].get=function(e){return e.getAttribute("value")===null?"on":e.value}}});var pn,dn,vn=h.expr.attrHandle,mn=/^(?:checked|selected)$/i,gn=l.getSetAttribute,yn=l.input;h.fn.extend({attr:function(e,t){return $(this,h.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){h.removeAttr(this,e)})}});h.extend({attr:function(e,t,n){var r,i,s=e.nodeType;if(!e||s===3||s===8||s===2){return}if(typeof e.getAttribute===B){return h.prop(e,t,n)}if(s!==1||!h.isXMLDoc(e)){t=t.toLowerCase();r=h.attrHooks[t]||(h.expr.match.bool.test(t)?dn:pn)}if(n!==undefined){if(n===null){h.removeAttr(e,t)}else if(r&&"set"in r&&(i=r.set(e,n,t))!==undefined){return i}else{e.setAttribute(t,n+"");return n}}else if(r&&"get"in r&&(i=r.get(e,t))!==null){return i}else{i=h.find.attr(e,t);return i==null?undefined:i}},removeAttr:function(e,t){var n,r,i=0,s=t&&t.match(O);if(s&&e.nodeType===1){while(n=s[i++]){r=h.propFix[n]||n;if(h.expr.match.bool.test(n)){if(yn&&gn||!mn.test(n)){e[r]=false}else{e[h.camelCase("default-"+n)]=e[r]=false}}else{h.attr(e,n,"")}e.removeAttribute(gn?n:r)}}},attrHooks:{type:{set:function(e,t){if(!l.radioValue&&t==="radio"&&h.nodeName(e,"input")){var n=e.value;e.setAttribute("type",t);if(n){e.value=n}return t}}}}});dn={set:function(e,t,n){if(t===false){h.removeAttr(e,n)}else if(yn&&gn||!mn.test(n)){e.setAttribute(!gn&&h.propFix[n]||n,n)}else{e[h.camelCase("default-"+n)]=e[n]=true}return n}};h.each(h.expr.match.bool.source.match(/\w+/g),function(e,t){var n=vn[t]||h.find.attr;vn[t]=yn&&gn||!mn.test(t)?function(e,t,r){var i,s;if(!r){s=vn[t];vn[t]=i;i=n(e,t,r)!=null?t.toLowerCase():null;vn[t]=s}return i}:function(e,t,n){if(!n){return e[h.camelCase("default-"+t)]?t.toLowerCase():null}}});if(!yn||!gn){h.attrHooks.value={set:function(e,t,n){if(h.nodeName(e,"input")){e.defaultValue=t}else{return pn&&pn.set(e,t,n)}}}}if(!gn){pn={set:function(e,t,n){var r=e.getAttributeNode(n);if(!r){e.setAttributeNode(r=e.ownerDocument.createAttribute(n))}r.value=t+="";if(n==="value"||t===e.getAttribute(n)){return t}}};vn.id=vn.name=vn.coords=function(e,t,n){var r;if(!n){return(r=e.getAttributeNode(t))&&r.value!==""?r.value:null}};h.valHooks.button={get:function(e,t){var n=e.getAttributeNode(t);if(n&&n.specified){return n.value}},set:pn.set};h.attrHooks.contenteditable={set:function(e,t,n){pn.set(e,t===""?false:t,n)}};h.each(["width","height"],function(e,t){h.attrHooks[t]={set:function(e,n){if(n===""){e.setAttribute(t,"auto");return n}}}})}if(!l.style){h.attrHooks.style={get:function(e){return e.style.cssText||undefined},set:function(e,t){return e.style.cssText=t+""}}}var bn=/^(?:input|select|textarea|button|object)$/i,wn=/^(?:a|area)$/i;h.fn.extend({prop:function(e,t){return $(this,h.prop,e,t,arguments.length>1)},removeProp:function(e){e=h.propFix[e]||e;return this.each(function(){try{this[e]=undefined;delete this[e]}catch(t){}})}});h.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,s,o=e.nodeType;if(!e||o===3||o===8||o===2){return}s=o!==1||!h.isXMLDoc(e);if(s){t=h.propFix[t]||t;i=h.propHooks[t]}if(n!==undefined){return i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n}else{return i&&"get"in i&&(r=i.get(e,t))!==null?r:e[t]}},propHooks:{tabIndex:{get:function(e){var t=h.find.attr(e,"tabindex");return t?parseInt(t,10):bn.test(e.nodeName)||wn.test(e.nodeName)&&e.href?0:-1}}}});if(!l.hrefNormalized){h.each(["href","src"],function(e,t){h.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})}if(!l.optSelected){h.propHooks.selected={get:function(e){var t=e.parentNode;if(t){t.selectedIndex;if(t.parentNode){t.parentNode.selectedIndex}}return null}}}h.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){h.propFix[this.toLowerCase()]=this});if(!l.enctype){h.propFix.enctype="encoding"}var En=/[\t\r\n\f]/g;h.fn.extend({addClass:function(e){var t,n,r,i,s,o,u=0,a=this.length,f=typeof e==="string"&&e;if(h.isFunction(e)){return this.each(function(t){h(this).addClass(e.call(this,t,this.className))})}if(f){t=(e||"").match(O)||[];for(;u<a;u++){n=this[u];r=n.nodeType===1&&(n.className?(" "+n.className+" ").replace(En," "):" ");if(r){s=0;while(i=t[s++]){if(r.indexOf(" "+i+" ")<0){r+=i+" "}}o=h.trim(r);if(n.className!==o){n.className=o}}}}return this},removeClass:function(e){var t,n,r,i,s,o,u=0,a=this.length,f=arguments.length===0||typeof e==="string"&&e;if(h.isFunction(e)){return this.each(function(t){h(this).removeClass(e.call(this,t,this.className))})}if(f){t=(e||"").match(O)||[];for(;u<a;u++){n=this[u];r=n.nodeType===1&&(n.className?(" "+n.className+" ").replace(En," "):"");if(r){s=0;while(i=t[s++]){while(r.indexOf(" "+i+" ")>=0){r=r.replace(" "+i+" "," ")}}o=e?h.trim(r):"";if(n.className!==o){n.className=o}}}}return this},toggleClass:function(e,t){var n=typeof e;if(typeof t==="boolean"&&n==="string"){return t?this.addClass(e):this.removeClass(e)}if(h.isFunction(e)){return this.each(function(n){h(this).toggleClass(e.call(this,n,this.className,t),t)})}return this.each(function(){if(n==="string"){var t,r=0,i=h(this),s=e.match(O)||[];while(t=s[r++]){if(i.hasClass(t)){i.removeClass(t)}else{i.addClass(t)}}}else if(n===B||n==="boolean"){if(this.className){h._data(this,"__className__",this.className)}this.className=this.className||e===false?"":h._data(this,"__className__")||""}})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++){if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(En," ").indexOf(t)>=0){return true}}return false}});h.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error contextmenu").split(" "),function(e,t){h.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}});h.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)}});var Sn=h.now();var xn=/\?/;var Tn=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;h.parseJSON=function(t){if(e.JSON&&e.JSON.parse){return e.JSON.parse(t+"")}var n,r=null,i=h.trim(t+"");return i&&!h.trim(i.replace(Tn,function(e,t,i,s){if(n&&t){r=0}if(r===0){return e}n=i||t;r+=!s-!i;return""}))?Function("return "+i)():h.error("Invalid JSON: "+t)};h.parseXML=function(t){var n,r;if(!t||typeof t!=="string"){return null}try{if(e.DOMParser){r=new DOMParser;n=r.parseFromString(t,"text/xml")}else{n=new ActiveXObject("Microsoft.XMLDOM");n.async="false";n.loadXML(t)}}catch(i){n=undefined}if(!n||!n.documentElement||n.getElementsByTagName("parsererror").length){h.error("Invalid XML: "+t)}return n};var Nn,Cn,kn=/#.*$/,Ln=/([?&])_=[^&]*/,An=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,On=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mn=/^(?:GET|HEAD)$/,_n=/^\/\//,Dn=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Pn={},Hn={},Bn="*/".concat("*");try{Cn=location.href}catch(jn){Cn=T.createElement("a");Cn.href="";Cn=Cn.href}Nn=Dn.exec(Cn.toLowerCase())||[];h.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Cn,type:"GET",isLocal:On.test(Nn[1]),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Bn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":true,"text json":h.parseJSON,"text xml":h.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(e,t){return t?qn(qn(e,h.ajaxSettings),t):qn(h.ajaxSettings,e)},ajaxPrefilter:Fn(Pn),ajaxTransport:Fn(Hn),ajax:function(e,t){function x(e,t,n,r){var f,g,y,w,S,x=t;if(b===2){return}b=2;if(o){clearTimeout(o)}a=undefined;s=r||"";E.readyState=e>0?4:0;f=e>=200&&e<300||e===304;if(n){w=Rn(l,E,n)}w=Un(l,w,E,f);if(f){if(l.ifModified){S=E.getResponseHeader("Last-Modified");if(S){h.lastModified[i]=S}S=E.getResponseHeader("etag");if(S){h.etag[i]=S}}if(e===204||l.type==="HEAD"){x="nocontent"}else if(e===304){x="notmodified"}else{x=w.state;g=w.data;y=w.error;f=!y}}else{y=x;if(e||!x){x="error";if(e<0){e=0}}}E.status=e;E.statusText=(t||x)+"";if(f){d.resolveWith(c,[g,x,E])}else{d.rejectWith(c,[E,x,y])}E.statusCode(m);m=undefined;if(u){p.trigger(f?"ajaxSuccess":"ajaxError",[E,l,f?g:y])}v.fireWith(c,[E,x]);if(u){p.trigger("ajaxComplete",[E,l]);if(!--h.active){h.event.trigger("ajaxStop")}}}if(typeof e==="object"){t=e;e=undefined}t=t||{};var n,r,i,s,o,u,a,f,l=h.ajaxSetup({},t),c=l.context||l,p=l.context&&(c.nodeType||c.jquery)?h(c):h.event,d=h.Deferred(),v=h.Callbacks("once memory"),m=l.statusCode||{},g={},y={},b=0,w="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(b===2){if(!f){f={};while(t=An.exec(s)){f[t[1].toLowerCase()]=t[2]}}t=f[e.toLowerCase()]}return t==null?null:t},getAllResponseHeaders:function(){return b===2?s:null},setRequestHeader:function(e,t){var n=e.toLowerCase();if(!b){e=y[n]=y[n]||e;g[e]=t}return this},overrideMimeType:function(e){if(!b){l.mimeType=e}return this},statusCode:function(e){var t;if(e){if(b<2){for(t in e){m[t]=[m[t],e[t]]}}else{E.always(e[E.status])}}return this},abort:function(e){var t=e||w;if(a){a.abort(t)}x(0,t);return this}};d.promise(E).complete=v.add;E.success=E.done;E.error=E.fail;l.url=((e||l.url||Cn)+"").replace(kn,"").replace(_n,Nn[1]+"//");l.type=t.method||t.type||l.method||l.type;l.dataTypes=h.trim(l.dataType||"*").toLowerCase().match(O)||[""];if(l.crossDomain==null){n=Dn.exec(l.url.toLowerCase());l.crossDomain=!!(n&&(n[1]!==Nn[1]||n[2]!==Nn[2]||(n[3]||(n[1]==="http:"?"80":"443"))!==(Nn[3]||(Nn[1]==="http:"?"80":"443"))))}if(l.data&&l.processData&&typeof l.data!=="string"){l.data=h.param(l.data,l.traditional)}In(Pn,l,t,E);if(b===2){return E}u=l.global;if(u&&h.active++===0){h.event.trigger("ajaxStart")}l.type=l.type.toUpperCase();l.hasContent=!Mn.test(l.type);i=l.url;if(!l.hasContent){if(l.data){i=l.url+=(xn.test(i)?"&":"?")+l.data;delete l.data}if(l.cache===false){l.url=Ln.test(i)?i.replace(Ln,"$1_="+Sn++):i+(xn.test(i)?"&":"?")+"_="+Sn++}}if(l.ifModified){if(h.lastModified[i]){E.setRequestHeader("If-Modified-Since",h.lastModified[i])}if(h.etag[i]){E.setRequestHeader("If-None-Match",h.etag[i])}}if(l.data&&l.hasContent&&l.contentType!==false||t.contentType){E.setRequestHeader("Content-Type",l.contentType)}E.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+Bn+"; q=0.01":""):l.accepts["*"]);for(r in l.headers){E.setRequestHeader(r,l.headers[r])}if(l.beforeSend&&(l.beforeSend.call(c,E,l)===false||b===2)){return E.abort()}w="abort";for(r in{success:1,error:1,complete:1}){E[r](l[r])}a=In(Hn,l,t,E);if(!a){x(-1,"No Transport")}else{E.readyState=1;if(u){p.trigger("ajaxSend",[E,l])}if(l.async&&l.timeout>0){o=setTimeout(function(){E.abort("timeout")},l.timeout)}try{b=1;a.send(g,x)}catch(S){if(b<2){x(-1,S)}else{throw S}}}return E},getJSON:function(e,t,n){return h.get(e,t,n,"json")},getScript:function(e,t){return h.get(e,undefined,t,"script")}});h.each(["get","post"],function(e,t){h[t]=function(e,n,r,i){if(h.isFunction(n)){i=i||r;r=n;n=undefined}return h.ajax({url:e,type:t,dataType:i,data:n,success:r})}});h.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){h.fn[t]=function(e){return this.on(t,e)}});h._evalUrl=function(e){return h.ajax({url:e,type:"GET",dataType:"script",async:false,global:false,"throws":true})};h.fn.extend({wrapAll:function(e){if(h.isFunction(e)){return this.each(function(t){h(this).wrapAll(e.call(this,t))})}if(this[0]){var t=h(e,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){t.insertBefore(this[0])}t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1){e=e.firstChild}return e}).append(this)}return this},wrapInner:function(e){if(h.isFunction(e)){return this.each(function(t){h(this).wrapInner(e.call(this,t))})}return this.each(function(){var t=h(this),n=t.contents();if(n.length){n.wrapAll(e)}else{t.append(e)}})},wrap:function(e){var t=h.isFunction(e);return this.each(function(n){h(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){if(!h.nodeName(this,"body")){h(this).replaceWith(this.childNodes)}}).end()}});h.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0||!l.reliableHiddenOffsets()&&(e.style&&e.style.display||h.css(e,"display"))==="none"};h.expr.filters.visible=function(e){return!h.expr.filters.hidden(e)};var zn=/%20/g,Wn=/\[\]$/,Xn=/\r?\n/g,Vn=/^(?:submit|button|image|reset|file)$/i,$n=/^(?:input|select|textarea|keygen)/i;h.param=function(e,t){var n,r=[],i=function(e,t){t=h.isFunction(t)?t():t==null?"":t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined){t=h.ajaxSettings&&h.ajaxSettings.traditional}if(h.isArray(e)||e.jquery&&!h.isPlainObject(e)){h.each(e,function(){i(this.name,this.value)})}else{for(n in e){Jn(n,e[n],t,i)}}return r.join("&").replace(zn,"+")};h.fn.extend({serialize:function(){return h.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=h.prop(this,"elements");return e?h.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!h(this).is(":disabled")&&$n.test(this.nodeName)&&!Vn.test(e)&&(this.checked||!J.test(e))}).map(function(e,t){var n=h(this).val();return n==null?null:h.isArray(n)?h.map(n,function(e){return{name:t.name,value:e.replace(Xn,"\r\n")}}):{name:t.name,value:n.replace(Xn,"\r\n")}}).get()}});h.ajaxSettings.xhr=e.ActiveXObject!==undefined?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Yn()||Zn()}:Yn;var Kn=0,Qn={},Gn=h.ajaxSettings.xhr();if(e.ActiveXObject){h(e).on("unload",function(){for(var e in Qn){Qn[e](undefined,true)}})}l.cors=!!Gn&&"withCredentials"in Gn;Gn=l.ajax=!!Gn;if(Gn){h.ajaxTransport(function(e){if(!e.crossDomain||l.cors){var t;return{send:function(n,r){var i,s=e.xhr(),o=++Kn;s.open(e.type,e.url,e.async,e.username,e.password);if(e.xhrFields){for(i in e.xhrFields){s[i]=e.xhrFields[i]}}if(e.mimeType&&s.overrideMimeType){s.overrideMimeType(e.mimeType)}if(!e.crossDomain&&!n["X-Requested-With"]){n["X-Requested-With"]="XMLHttpRequest"}for(i in n){if(n[i]!==undefined){s.setRequestHeader(i,n[i]+"")}}s.send(e.hasContent&&e.data||null);t=function(n,i){var u,a,f;if(t&&(i||s.readyState===4)){delete Qn[o];t=undefined;s.onreadystatechange=h.noop;if(i){if(s.readyState!==4){s.abort()}}else{f={};u=s.status;if(typeof s.responseText==="string"){f.text=s.responseText}try{a=s.statusText}catch(l){a=""}if(!u&&e.isLocal&&!e.crossDomain){u=f.text?200:404}else if(u===1223){u=204}}}if(f){r(u,a,f,s.getAllResponseHeaders())}};if(!e.async){t()}else if(s.readyState===4){setTimeout(t)}else{s.onreadystatechange=Qn[o]=t}},abort:function(){if(t){t(undefined,true)}}}}})}h.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){h.globalEval(e);return e}}});h.ajaxPrefilter("script",function(e){if(e.cache===undefined){e.cache=false}if(e.crossDomain){e.type="GET";e.global=false}});h.ajaxTransport("script",function(e){if(e.crossDomain){var t,n=T.head||h("head")[0]||T.documentElement;return{send:function(r,i){t=T.createElement("script");t.async=true;if(e.scriptCharset){t.charset=e.scriptCharset}t.src=e.url;t.onload=t.onreadystatechange=function(e,n){if(n||!t.readyState||/loaded|complete/.test(t.readyState)){t.onload=t.onreadystatechange=null;if(t.parentNode){t.parentNode.removeChild(t)}t=null;if(!n){i(200,"success")}}};n.insertBefore(t,n.firstChild)},abort:function(){if(t){t.onload(undefined,true)}}}}});var er=[],tr=/(=)\?(?=&|$)|\?\?/;h.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=er.pop()||h.expando+"_"+Sn++;this[e]=true;return e}});h.ajaxPrefilter("json jsonp",function(t,n,r){var i,s,o,u=t.jsonp!==false&&(tr.test(t.url)?"url":typeof t.data==="string"&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&tr.test(t.data)&&"data");if(u||t.dataTypes[0]==="jsonp"){i=t.jsonpCallback=h.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback;if(u){t[u]=t[u].replace(tr,"$1"+i)}else if(t.jsonp!==false){t.url+=(xn.test(t.url)?"&":"?")+t.jsonp+"="+i}t.converters["script json"]=function(){if(!o){h.error(i+" was not called")}return o[0]};t.dataTypes[0]="json";s=e[i];e[i]=function(){o=arguments};r.always(function(){e[i]=s;if(t[i]){t.jsonpCallback=n.jsonpCallback;er.push(i)}if(o&&h.isFunction(s)){s(o[0])}o=s=undefined});return"script"}});h.parseHTML=function(e,t,n){if(!e||typeof e!=="string"){return null}if(typeof t==="boolean"){n=t;t=false}t=t||T;var r=w.exec(e),i=!n&&[];if(r){return[t.createElement(r[1])]}r=h.buildFragment([e],t,i);if(i&&i.length){h(i).remove()}return h.merge([],r.childNodes)};var nr=h.fn.load;h.fn.load=function(e,t,n){if(typeof e!=="string"&&nr){return nr.apply(this,arguments)}var r,i,s,o=this,u=e.indexOf(" ");if(u>=0){r=h.trim(e.slice(u,e.length));e=e.slice(0,u)}if(h.isFunction(t)){n=t;t=undefined}else if(t&&typeof t==="object"){s="POST"}if(o.length>0){h.ajax({url:e,type:s,dataType:"html",data:t}).done(function(e){i=arguments;o.html(r?h("<div>").append(h.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){o.each(n,i||[e.responseText,t,e])})}return this};h.expr.filters.animated=function(e){return h.grep(h.timers,function(t){return e===t.elem}).length};var rr=e.document.documentElement;h.offset={setOffset:function(e,t,n){var r,i,s,o,u,a,f,l=h.css(e,"position"),c=h(e),p={};if(l==="static"){e.style.position="relative"}u=c.offset();s=h.css(e,"top");a=h.css(e,"left");f=(l==="absolute"||l==="fixed")&&h.inArray("auto",[s,a])>-1;if(f){r=c.position();o=r.top;i=r.left}else{o=parseFloat(s)||0;i=parseFloat(a)||0}if(h.isFunction(t)){t=t.call(e,n,u)}if(t.top!=null){p.top=t.top-u.top+o}if(t.left!=null){p.left=t.left-u.left+i}if("using"in t){t.using.call(e,p)}else{c.css(p)}}};h.fn.extend({offset:function(e){if(arguments.length){return e===undefined?this:this.each(function(t){h.offset.setOffset(this,e,t)})}var t,n,r={top:0,left:0},i=this[0],s=i&&i.ownerDocument;if(!s){return}t=s.documentElement;if(!h.contains(t,i)){return r}if(typeof i.getBoundingClientRect!==B){r=i.getBoundingClientRect()}n=ir(s);return{top:r.top+(n.pageYOffset||t.scrollTop)-(t.clientTop||0),left:r.left+(n.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}},position:function(){if(!this[0]){return}var e,t,n={top:0,left:0},r=this[0];if(h.css(r,"position")==="fixed"){t=r.getBoundingClientRect()}else{e=this.offsetParent();t=this.offset();if(!h.nodeName(e[0],"html")){n=e.offset()}n.top+=h.css(e[0],"borderTopWidth",true);n.left+=h.css(e[0],"borderLeftWidth",true)}return{top:t.top-n.top-h.css(r,"marginTop",true),left:t.left-n.left-h.css(r,"marginLeft",true)}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||rr;while(e&&!h.nodeName(e,"html")&&h.css(e,"position")==="static"){e=e.offsetParent}return e||rr})}});h.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n=/Y/.test(t);h.fn[e]=function(r){return $(this,function(e,r,i){var s=ir(e);if(i===undefined){return s?t in s?s[t]:s.document.documentElement[r]:e[r]}if(s){s.scrollTo(!n?i:h(s).scrollLeft(),n?i:h(s).scrollTop())}else{e[r]=i}},e,r,arguments.length,null)}});h.each(["top","left"],function(e,t){h.cssHooks[t]=jt(l.pixelPosition,function(e,n){if(n){n=Ht(e,t);return Dt.test(n)?h(e).position()[t]+"px":n}})});h.each({Height:"height",Width:"width"},function(e,t){h.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){h.fn[r]=function(r,i){var s=arguments.length&&(n||typeof r!=="boolean"),o=n||(r===true||i===true?"margin":"border");return $(this,function(t,n,r){var i;if(h.isWindow(t)){return t.document.documentElement["client"+e]}if(t.nodeType===9){i=t.documentElement;return Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])}return r===undefined?h.css(t,n,o):h.style(t,n,r,o)},t,s?r:undefined,s,null)}})});h.fn.size=function(){return this.length};h.fn.andSelf=h.fn.addBack;return h})})(); {window.AutopilotAnywhere.init=function () {
      var devmode;
      if (this._inited) {
        return;
      }
      devmode = this.anywhereConfig.devmode;
      this._inited = true;
      this.initTime = this.now();
      if (this._runQueue == null) {
        this._runQueue = [];
      }
      if (!devmode) {
        this.startFormScanLoop();
      }
      if (!devmode) {
        this._runQueue.push(['visit']);
      }
      this.startWatchingLocationHref();
      if (!/MSIE [89]\./.test(navigator.userAgent)) {
        this.listenForHeadsupPostMessage();
      }
      return this.processRunQueue();
    };window.AutopilotAnywhere.now=function () {
      return (typeof Date.now === "function" ? Date.now() : void 0) || (new Date()).getTime();
    };window.AutopilotAnywhere.keys=function (o) {
      var k, ks;
      if (typeof Object !== "undefined" && Object !== null ? Object.keys : void 0) {
        return Object.keys(o);
      }
      ks = [];
      for (k in o) {
        ks.push(k);
      }
      return ks;
    };window.AutopilotAnywhere.encodeObject=function (o) {
      var encoded, i, iter, j, k, ks, l, ref1, special, stack, sv, v, vk;
      stack = [o];
      encoded = "";
      special = {
        COMMA: {},
        ENDARRAY: {},
        ENDOBJECT: {},
        KVSEP: {}
      };
      iter = 0;
      while (stack.length > 0) {
        v = stack.pop();
        if (v === special.COMMA) {
          encoded += ',';
        } else if (v === special.ENDARRAY) {
          encoded += ']';
        } else if (v === special.ENDOBJECT) {
          encoded += '}';
        } else if (v === special.KVSEP) {
          encoded += ':';
        } else if (v === null || ((ref1 = typeof v) === 'boolean' || ref1 === 'number')) {
          encoded += '' + v;
        } else if (v == null) {
          encoded += 'null';
        } else if (typeof v === 'string') {
          encoded += '"' + v.replace(/(\\|")/g, '\\$1').replace(/\n/g, "\\n").replace(/\r/g, "") + '"';
        } else if (v instanceof Array) {
          encoded += "[";
          stack.push(special.ENDARRAY);
          for (i = j = v.length - 1; j >= 0; i = j += -1) {
            sv = v[i];
            stack.push(sv);
            if (i !== 0) {
              stack.push(special.COMMA);
            }
          }
        } else {
          encoded += "{";
          stack.push(special.ENDOBJECT);
          ks = [];
          for (vk in v) {
            ks.push(vk);
          }
          for (i = l = ks.length - 1; l >= 0; i = l += -1) {
            k = ks[i];
            stack.push(v[k]);
            stack.push(special.KVSEP);
            stack.push(k);
            if (i !== 0) {
              stack.push(special.COMMA);
            }
          }
        }
      }
      return encoded;
    };window.AutopilotAnywhere.run=function () {
      var a, args, fn, fnName, i;
      fnName = arguments[0];
      fn = this[fnName];
      if (typeof fn !== 'function') {
        return;
      }
      args = [];
      i = 1;
      while (true) {
        a = arguments[i++];
        if (a == null) {
          break;
        }
        args.push(a);
      }
      return fn.apply(this, args);
    };window.AutopilotAnywhere.argListToArray=function (argList) {
      var arr, i;
      arr = [];
      i = 0;
      while (argList[i] != null) {
        arr.push(argList[i++]);
      }
      return arr;
    };window.AutopilotAnywhere.processRunQueue=function () {
      var r, ra, rcb;
      if (this._runQueue && !this._blockRunQueue) {
        if (!(r = this._runQueue.shift())) {
          return;
        }
        ra = this.argListToArray(r);
        if (ra[0] === 'associate' && ra[ra.length - 1] !== 'function') {
          ra.push(function() {});
        }
        if (typeof ra[ra.length - 1] === 'function') {
          rcb = ra[ra.length - 1];
          this._blockRunQueue = ra;
          ra[ra.length - 1] = (function(_this) {
            return function() {
              var rcbargs;
              _this._blockRunQueue = null;
              rcbargs = _this.argListToArray(arguments);
              rcb.apply(null, rcbargs);
              return _this.processRunQueue();
            };
          })(this);
        }
        this.run.apply(this, ra);
        return setTimeout((function(_this) {
          return function() {
            return _this.processRunQueue();
          };
        })(this), 1);
      }
    };window.AutopilotAnywhere.associate=function (emailOrObject, cb) {
      return this.sendEvent({
        type: 'associateSession',
        associate: emailOrObject
      }, (function(_this) {
        return function(err, resp) {
          if (err) {
            if (cb) {
              return cb(err);
            } else if (console && console.log) {
              return console.log("AutopilotAnywhere.associate error", err);
            }
          } else {
            if (resp != null ? resp.sessionId : void 0) {
              _this.sessionId = resp.sessionId;
            }
            _this.headsupCheck();
            if (cb) {
              return cb();
            }
          }
        };
      })(this));
    };window.AutopilotAnywhere.getAnywhereUrl=function () {
      if (this.sessionId) {
        return this.anywhereBaseUrl + '/' + this.sessionId;
      } else {
        return this.anywhereBaseUrl;
      }
    };window.AutopilotAnywhere.sendEvent=function (details, cb) {
      var req;
      if (details == null) {
        details = {};
      }
      if (window.autopilotAnywhereScanOnly) {
        return typeof cb === "function" ? cb(Error("in scan only mode")) : void 0;
      }
      if (/MSIE [89]\./.test(typeof navigator !== "undefined" && navigator !== null ? navigator.userAgent : void 0)) {
        return this.sendEventLegacyBrowser(details, cb);
      }
      if (!window.XMLHttpRequest) {
        return typeof cb === "function" ? cb(Error("missing XMLHttpRequest")) : void 0;
      }
      req = new XMLHttpRequest();
      req.open("PUT", this.getAnywhereUrl(), true);
      if (cb) {
        req.onreadystatechange = function() {
          var err, error, res;
          if (req.readyState !== 4) {
            return;
          }
          if (req.status !== 200) {
            return cb(Error(req.status + ": " + req.responseText));
          }
          try {
            res = JSON.parse(req.responseText);
          } catch (error) {
            err = error;
            return cb(err);
          }
          return cb(null, res);
        };
      }
      return req.send(this.encodeObject(details));
    };window.AutopilotAnywhere.sendEventLegacyBrowser=function (details, cb) {
      var err, p, req, u;
      if (!window.XDomainRequest) {
        return typeof cb === "function" ? cb(Error("missing XDomainRequest")) : void 0;
      }
      req = new window.XDomainRequest();
      req.timeout = 0;
      req.onprogress = req.ontimeout = function() {};
      req.onload = function() {
        var err, error, res;
        if (cb) {
          if (req.responseText === "") {
            return cb(null, "");
          }
          try {
            res = JSON.parse(req.responseText);
          } catch (error) {
            err = error;
            return cb(Error(req.responseText));
          }
          return cb(null, res);
        }
      };
      req.onerror = function(err) {
        if (cb) {
          return cb(err || Error("unknown XDomainRequest error"));
        }
      };
      if (p = document.location.href.match(/^(https?:)/)) {
        u = this.getAnywhereUrl() + '/legacybrowser';
        u = u.replace(/^https?:/, p[1]);
        req.open("POST", u, true);
        return req.send(this.encodeObject(details));
      } else {
        err = Error("current location not http or https");
        if (cb) {
          return cb(err);
        }
        throw err;
      }
    };window.AutopilotAnywhere.serializeForm=function (form, scannedForm) {
      var field, hourMinSecPm, i, j, l, len, len1, len2, len3, len4, m, moddedTextAreas, n, q, ref1, ref2, ref3, ref4, ref5, ref6, ref7, serializedForm, subfield, subfieldName, yearMonthDay;
      moddedTextAreas = jQueryContainer.jQuery(form).find("TEXTAREA[id]:not([name])");
      moddedTextAreas.each(function() {
        return jQueryContainer.jQuery(this).attr("name", jQueryContainer.jQuery(this).attr("id"));
      });
      yearMonthDay = ["year", "month", "day"];
      hourMinSecPm = ["hour", "minute", "second", "ampm"];
      ref1 = scannedForm.fields;
      for (j = 0, len = ref1.length; j < len; j++) {
        field = ref1[j];
        if (field.type === 'date') {
          ref2 = field.subfields;
          for (i = l = 0, len1 = ref2.length; l < len1; i = ++l) {
            subfield = ref2[i];
            subfield.originalName = subfield.name;
            subfield.name = field.name + "[" + yearMonthDay[i] + "]";
          }
        }
        if (field.type === 'time') {
          ref3 = field.subfields;
          for (i = m = 0, len2 = ref3.length; m < len2; i = ++m) {
            subfield = ref3[i];
            subfield.originalName = subfield.name;
            subfield.name = field.name + "[" + hourMinSecPm[i] + "]";
          }
        }
        if (field.type === 'phone') {
          ref4 = field.subfields;
          for (subfieldName in ref4) {
            subfield = ref4[subfieldName];
            if (subfield) {
              subfield.originalName = subfield.name;
              subfield.name = field.name + "[" + subfieldName + "]";
            }
          }
        }
        if (field.type === 'currency' || field.type === 'number') {
          if (field.subfield) {
            field.subfield.originalName = field.subfield.name;
            field.subfield.name = field.name;
          }
        }
      }
      serializedForm = form.serialize();
      moddedTextAreas.each(function() {
        return jQueryContainer.jQuery(this).removeAttr("name");
      });
      ref5 = scannedForm.fields;
      for (n = 0, len3 = ref5.length; n < len3; n++) {
        field = ref5[n];
        if (field.type === 'date' || field.type === 'time') {
          ref6 = field.subfields;
          for (q = 0, len4 = ref6.length; q < len4; q++) {
            subfield = ref6[q];
            subfield.name = subfield.originalName;
          }
        }
        if (field.type === 'phone') {
          ref7 = field.subfields;
          for (subfieldName in ref7) {
            subfield = ref7[subfieldName];
            if (subfield) {
              subfield.name = subfield.originalName;
            }
          }
        }
        if (field.type === 'currency' || field.type === 'number') {
          if (field.subfield) {
            field.subfield.name = field.subfield.originalName;
          }
        }
      }
      return serializedForm;
    };window.AutopilotAnywhere.FV2SendSerializedForm=function (serializedForm, cb) {
      var req;
      if (/MSIE [89]\./.test(typeof navigator !== "undefined" && navigator !== null ? navigator.userAgent : void 0)) {
        return this.FV2SendSerializedFormLegacyBrowser(serializedForm, cb);
      }
      if (!window.XMLHttpRequest) {
        return cb(Error("Missing XMLHttpRequest"));
      }
      req = new window.XMLHttpRequest();
      req.open("POST", this.getAnywhereUrl(), true);
      req.onreadystatechange = function() {
        if (req.readyState !== 4) {
          return;
        }
        if (req.status !== 200) {
          return cb(Error(req.status + ": " + req.responseText));
        }
        return cb(null);
      };
      req.send(serializedForm);
    };window.AutopilotAnywhere.FV2SendSerializedFormLegacyBrowser=function (serializedForm, cb) {
      var p, req, u;
      if (!window.XDomainRequest) {
        return cb(Error("missing XDomainRequest"));
      }
      req = new window.XDomainRequest();
      req.timeout = 0;
      req.onprogress = req.ontimeout = function() {};
      req.onload = function() {
        if (req.responseText === "") {
          return cb(null, "");
        }
        return cb(Error(req.responseText));
      };
      req.onerror = function(err) {
        return cb(err || Error("unknown XDomainRequest error"));
      };
      if (p = document.location.href.match(/^(https?:)/)) {
        u = this.getAnywhereUrl();
        u = u.replace(/^https?:/, p[1]);
        req.open("POST", u, true);
        req.send(serializedForm);
      } else {
        cb(Error("current location not http or https"));
      }
    };window.AutopilotAnywhere.paramlessHref=function () {
      var ref1;
      return (ref1 = document.location.href.match(/^(.*?)(#|\?|$)/)) != null ? ref1[1] : void 0;
    };window.AutopilotAnywhere.queryParameters=function () {
      var extractor, parts, qpHash, qps, ref1;
      qps = (ref1 = document.location.href.match(/\?(.*?)(#|$)/)) != null ? ref1[1] : void 0;
      extractor = /(.*?)(?:\=(.*?))?(&|$)/g;
      qpHash = {};
      while (true) {
        parts = extractor.exec(qps);
        if (!parts[1]) {
          break;
        }
        qpHash[parts[1]] = parts[2];
      }
      return qpHash;
    };window.AutopilotAnywhere.utmQueryParameters=function () {
      var j, k, len, qp, ref1, utm;
      utm = {};
      qp = this.queryParameters();
      ref1 = ['utm_campaign', 'utm_source', 'utm_medium', 'utm_term', 'utm_content'];
      for (j = 0, len = ref1.length; j < len; j++) {
        k = ref1[j];
        if (qp[k] != null) {
          utm[k] = qp[k];
        }
      }
      return utm;
    };window.AutopilotAnywhere.visit=function () {
      var utm;
      utm = this.utmQueryParameters();
      url = this.anywhereConfig.devmode ? document.location.href : this.paramlessHref();
      return this.sendEvent({
        type: 'visit',
        url: url,
        utm: utm
      });
    };window.AutopilotAnywhere.forms=function (options) {
      var _t, c, configUrl, configs, currentPageUrl, f, fn1, hash, id, j, len, ref1, results, scanTime, scannedForm, scannedForms, squarespace, version;
      if (options == null) {
        options = {};
      }
      this.populateSessionIdFields();
      scanTime = this.now();
      if (!((configs = this.configuredForms) && (configs.length != null) && configs.length > 0)) {
        return;
      }
      _t = this;
      squarespace = jQueryContainer.jQuery('.sqs-layout').length > 0;
      currentPageUrl = document.location.href.toLowerCase().replace(/^https?:/, '').replace(/^\/\/www\./, '//').replace(/[\?#].*$/, '').replace(/\/$/, '');
      scannedForms = _t.formScan(window);
      fn1 = function(c, scannedForm, configUrl) {
        var autopilotAnywhereMeta, base, base1, details, form, formElement, id, k, l, latestScan, len1, ref1, ref2, ref3, ref4, v;
        if (scannedForm) {
          if (c.formOnMultiplePages || currentPageUrl === configUrl) {
            if (_t.trackedForms == null) {
              _t.trackedForms = {};
            }
            _t.trackedForms[c.hash] = scannedForm;
            ref1 = scannedForm.elements;
            for (l = 0, len1 = ref1.length; l < len1; l++) {
              formElement = ref1[l];
              form = jQueryContainer.jQuery(formElement);
              if (!form.attr('data-autopilot-anywhere')) {
                autopilotAnywhereMeta = {
                  origmethod: form.attr('method'),
                  origaction: form.attr('action'),
                  tfid: c.id
                };
                (function(form, autopilotAnywhereMeta) {
                  form.attr('data-autopilot-anywhere', c.id);
                  if (/MSIE [89]\./.test(navigator.userAgent)) {
                    c.useVersion = 2;
                  }
                  if (parseInt(c.useVersion) === 2) {
                    return _t.FV2TrackForm(form, c, scannedForm, autopilotAnywhereMeta);
                  } else {
                    return _t.FV1TrackForm(form, c, scannedForm, autopilotAnywhereMeta);
                  }
                })(form, autopilotAnywhereMeta);
              }
            }
          } else {
            if (_t.notTrackingForms == null) {
              _t.notTrackingForms = {};
            }
            if ((base = _t.notTrackingForms)[scanTime] == null) {
              base[scanTime] = {};
            }
            _t.notTrackingForms[scanTime][c.hash] = "url mismatch '" + currentPageUrl + "' not '" + configUrl + "'";
          }
          if (currentPageUrl === configUrl) {
            if (_t.presentForms == null) {
              _t.presentForms = {};
            }
            return _t.presentForms[c.hash] = {
              id: c.id,
              version: c.useVersion || 1
            };
          }
        } else {
          if (_t.notTrackingForms == null) {
            _t.notTrackingForms = {};
          }
          if ((base1 = _t.notTrackingForms)[scanTime] == null) {
            base1[scanTime] = {};
          }
          _t.notTrackingForms[scanTime][c.hash] = "form hash " + c.hash + " not found on page";
          if (currentPageUrl === configUrl) {
            if (options.finalScan && !((ref2 = _t.presentForms) != null ? ref2[c.hash] : void 0) && !_t.formPresenceCheckDisabled) {
              latestScan = {};
              for (id in scannedForms) {
                details = scannedForms[id];
                latestScan[id] = {};
                for (k in details) {
                  v = details[k];
                  if (k !== 'elements') {
                    latestScan[id][k] = v;
                  }
                }
              }
              return _t.sendEvent({
                type: 'formerror',
                hash: c.hash,
                id: c.id,
                formMissing: true,
                message: "form missing",
                presentForms: _t.presentForms,
                notTrackingForms: _t.notTrackingForms,
                latestScan: latestScan,
                userAgent: (ref3 = window.navigator) != null ? ref3.userAgent : void 0,
                href: (ref4 = window.location) != null ? ref4.href : void 0
              });
            }
          }
        }
      };
      for (j = 0, len = configs.length; j < len; j++) {
        c = configs[j];
        scannedForm = scannedForms[c.hash];
        configUrl = c.url.toLowerCase().replace(/^https?:/, '').replace(/^\/\/www\./, '//').replace(/[\?#].*$/, '').replace(/\/$/, '');
        fn1(c, scannedForm, configUrl);
      }
      if (options.finalScan && _t.presentForms && !_t.formPresenceCheckDisabled) {
        ref1 = _t.presentForms;
        results = [];
        for (hash in ref1) {
          f = ref1[hash];
          id = f.id;
          version = f.version;
          results.push(_t.sendEvent({
            type: 'formpresent',
            hash: hash,
            id: id,
            version: version
          }));
        }
        return results;
      }
    };window.AutopilotAnywhere.FV1TrackForm=function (form, c, scannedForm, autopilotAnywhereMeta) {
      var _t, existingOnClick, existingOnsubmit, mFormSubmit, mf, processForm, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9;
      _t = this;
      existingOnsubmit = form[0].onsubmit;
      mFormSubmit = (ref1 = form.find('#mktFrmSubmit')) != null ? ref1[0] : void 0;
      mf = mFormSubmit ? true : false;
      if (mf) {
        existingOnClick = mFormSubmit.onclick;
        mFormSubmit.onclick = function() {};
      }
      if (((ref2 = window.location) != null ? (ref3 = ref2.href) != null ? ref3.match(/freshdesk\.com/) : void 0 : void 0) && window.frmValidation && !window.frmValidationModified) {
        window.frmValidation = eval("window.frmValidation = " + window.frmValidation.toString().replace('$(".success")', 'jQueryContainer.jQuery("form")[0].onsubmit();$(".success")'));
        window.frmValidationModified = true;
      }
      if (((ref4 = window.location) != null ? (ref5 = ref4.href) != null ? ref5.match(/freshservice\.com/) : void 0 : void 0) && window.frmValidation && !window.frmValidationModified) {
        window.frmValidation = eval("window.frmValidation = " + window.frmValidation.toString().replace('$(".success").css("display","block")', '$(".success").css("display","block"),window.fsForm()'));
        window.frmValidationModified = true;
      }
      if ((ref6 = window.location) != null ? (ref7 = ref6.href) != null ? ref7.match(/freshdesk.com\/customer-support-glossary\/suggest-term/) : void 0 : void 0) {
        form.attr('id', 'suggestform2');
      }
      processForm = function(e) {
        var field, j, k, l, len, len1, ref10, ref11, ref12, ref13, ref14, ref15, ref16, ref17, ref18, ref19, ref20, ref8, ref9, success, validated, value, xhrRequest;
        _t.abortFormScanLoop();
        validated = true;
        if (c.wantsValidation && typeof c.requiredFields === 'object' && Object.keys(c.requiredFields).length > 0) {
          ref8 = c.requiredFields;
          for (j = 0, len = ref8.length; j < len; j++) {
            k = ref8[j];
            field = form.find("input[name=\"" + k + "\"]");
            if (field.length === 0) {
              field = form.find("#" + k);
            }
            value = field != null ? field.first().val() : void 0;
            if (!value) {
              validated = false;
              if (field != null) {
                field.addClass('autopilotRequired');
              }
              if (field != null) {
                field.attr('placeholder', 'Please enter a value');
              }
            }
          }
        }
        if (!validated) {
          if (e.preventDefault) {
            e.preventDefault();
          }
          return false;
        }
        if (c.wantsFieldVerification && typeof c.requiredFields === 'object' && Object.keys(c.requiredFields).length > 0) {
          autopilotAnywhereMeta.requiredFields = [];
          ref9 = c.requiredFields;
          for (l = 0, len1 = ref9.length; l < len1; l++) {
            k = ref9[l];
            autopilotAnywhereMeta.requiredFields.push(k);
          }
        }
        if (c.passthroughSubmit) {
          success = function() {};
        } else {
          if (e.preventDefault) {
            e.preventDefault();
          }
          success = function() {
            return window.location = c.successUrl;
          };
        }
        if (mf) {
          if (existingOnClick && !((ref10 = window.location) != null ? (ref11 = ref10.href) != null ? ref11.match(/freshdesk\.com/) : void 0 : void 0)) {
            existingOnClick.call(this, e);
          }
          if (((ref12 = form.find('.mktField').find('.textfield.error')) != null ? ref12.length : void 0) > 0 || ((ref13 = form.find('.mktFormMsg').text()) != null ? ref13.replace(/\s/g, '').length : void 0) > 0) {
            e.preventDefault();
            return false;
          } else if (((ref14 = window.location) != null ? (ref15 = ref14.href) != null ? ref15.match(/customerhappinesstour\.com/) : void 0 : void 0) && ((ref16 = form.find('.mktField.error')) != null ? ref16.length : void 0) > 0) {
            e.preventDefault();
            return false;
          }
          xhrRequest = _t.FV1SendForm(form, scannedForm, {
            autopilotAnywhereMeta: autopilotAnywhereMeta
          });
          if ((xhrRequest != null ? xhrRequest.status : void 0) === 200) {
            success();
          } else if (xhrRequest) {
            _t.sendEvent({
              type: 'formerror',
              message: 'form could not be submitted to seadrift: ' + (xhrRequest.responseText || xhrRequest.response)
            });
          }
          if (c.passthroughSubmit) {
            return true;
          } else {
            return false;
          }
        } else if ((ref17 = window.location) != null ? (ref18 = ref17.href) != null ? ref18.match(/freshdesk\.com/) : void 0 : void 0) {
          if (!(form.find('.textfield.error').length > 0 || form.find('fieldError').length > 0)) {
            xhrRequest = _t.FV1SendForm(form, scannedForm, {
              autopilotAnywhereMeta: autopilotAnywhereMeta
            });
            if ((xhrRequest != null ? xhrRequest.status : void 0) === 200) {
              success();
              if ((ref19 = window.location) != null ? (ref20 = ref19.href) != null ? ref20.match(/freshdesk.com\/customer-support-glossary\/suggest-term/) : void 0 : void 0) {
                jQueryContainer.jQuery('#suggestform2').children().each(function() {
                  return jQueryContainer.jQuery(this).not('input[type=submit]').val('');
                });
              }
            } else if (xhrRequest) {
              _t.sendEvent({
                type: 'formerror',
                message: 'form could not be submitted to seadrift: ' + (xhrRequest.responseText || xhrRequest.response)
              });
            }
            if (c.passthroughSubmit) {
              return true;
            } else {
              return false;
            }
          }
        } else {
          xhrRequest = _t.FV1SendForm(form, scannedForm, {
            autopilotAnywhereMeta: autopilotAnywhereMeta
          });
          if ((xhrRequest != null ? xhrRequest.status : void 0) === 200) {
            success();
            true;
          } else if (xhrRequest) {
            _t.sendEvent({
              type: 'formerror',
              message: 'form could not be submitted to seadrift: ' + (xhrRequest.responseText || xhrRequest.response)
            });
          }
          if (c.passthroughSubmit) {
            if (typeof existingOnsubmit === 'function') {
              return existingOnsubmit.call(this, e);
            } else {
              return true;
            }
          } else {
            return false;
          }
        }
      };
      form[0].onsubmit = processForm;
      if ((ref8 = window.location) != null ? (ref9 = ref8.href) != null ? ref9.match(/freshservice\.com/) : void 0 : void 0) {
        window.fsForm = processForm;
      }
      return form.find("input[id]:not([name])").each(function() {
        var field;
        field = jQueryContainer.jQuery(this);
        return field.attr('name', field.attr('id'));
      });
    };window.AutopilotAnywhere.FV1SendForm=function (form, scannedForm, options) {
      var field, fieldTest, fieldsValid, j, len, missingFields, ref1, req, serializedForm;
      if (options == null) {
        options = {};
      }
      if (!window.XMLHttpRequest) {
        return;
      }
      serializedForm = this.serializeForm(form, scannedForm, options);
      if (!serializedForm.match(/\=[^\&]+/)) {
        if (typeof console !== "undefined" && console !== null) {
          console.log("Not sending blank form to Autopilot");
        }
        return;
      }
      if (options.autopilotAnywhereMeta.requiredFields) {
        fieldsValid = true;
        missingFields = [];
        ref1 = options.autopilotAnywhereMeta.requiredFields;
        for (j = 0, len = ref1.length; j < len; j++) {
          field = ref1[j];
          fieldTest = new RegExp((encodeURIComponent(field).replace(/\%20/g, '\\+').replace(/\?/g, '\%3F').replace(/\s/g, '\\+').replace(/\//ig, '%2F').replace(/\%/g, '\\%').replace(/\(/g, "\\(").replace(/\)/g, '\\)')) + "\=[^\&]+");
          if (!fieldTest.test(serializedForm)) {
            missingFields.push(field);
            this.missingFields = [field, fieldTest];
            fieldsValid = false;
          }
        }
        if (!fieldsValid) {
          if (typeof console !== "undefined" && console !== null) {
            console.log("Not submitting to Autopilot: not all valid fields are present, missing fields are", missingFields, serializedForm);
          }
          return;
        }
      }
      if (options.autopilotAnywhereMeta) {
        serializedForm += '&AutopilotAnywhereMeta=' + encodeURIComponent(this.encodeObject(options.autopilotAnywhereMeta));
      }
      req = new XMLHttpRequest();
      req.open("POST", this.getAnywhereUrl(), false);
      req.send(serializedForm);
      return req;
    };window.AutopilotAnywhere.FV2TrackForm=function (form, c, scannedForm, autopilotAnywhereMeta) {
      var submitActions, submitSeen;
      form.find("input[id]:not([name])").each(function() {
        var field;
        field = jQueryContainer.jQuery(this);
        return field.attr('name', field.attr('id'));
      });
      submitSeen = false;
      return submitActions = this.FV2CaptureExistingSubmitActions(form, (function(_this) {
        return function(submitAction) {
          var serializedForm;
          if (submitSeen) {
            return;
          }
          submitSeen = true;
          _this.abortFormScanLoop();
          if (_this.FV2TestFormValidity(c, form)) {
            serializedForm = _this.serializeForm(submitActions.replacementForm, scannedForm);
            if (!serializedForm.match(/\=[^\&]+/)) {
              submitSeen = false;
              if (typeof console !== "undefined" && console !== null) {
                console.log("Not sending blank form to Autopilot");
              }
              return;
            }
            serializedForm += '&AutopilotAnywhereMeta=' + encodeURIComponent(_this.encodeObject(autopilotAnywhereMeta));
            return _this.FV2SendSerializedForm(serializedForm, function(err) {
              if (err) {
                _this.sendEvent({
                  type: 'formerror',
                  message: "form could not be submitted: " + err
                });
              }
              if (c.passthroughSubmit) {
                _this.FV2ReplaceOriginalSubmitActions(submitActions);
                return _this.FV2ReplaySubmitAction(submitAction);
              } else {
                return window.location = c.successUrl;
              }
            });
          } else {
            return submitSeen = false;
          }
        };
      })(this));
    };window.AutopilotAnywhere.FV2SubstituteElement=function (el, replacement) {
      var c, childNodes, j, len;
      childNodes = [];
      if (el.childNodes) {
        while (c = el.childNodes[0]) {
          el.removeChild(c);
          childNodes.push(c);
        }
      }
      if (replacement == null) {
        replacement = el.cloneNode(false);
      }
      for (j = 0, len = childNodes.length; j < len; j++) {
        c = childNodes[j];
        replacement.appendChild(c);
      }
      el.parentNode.replaceChild(replacement, el);
      return replacement;
    };window.AutopilotAnywhere.FV2CaptureExistingSubmitActions=function (form, actionFn) {
      var b, button, buttons, fn1, j, l, len, len1, newForm, ref1, submitActions;
      submitActions = {
        originalForm: form,
        buttons: []
      };
      buttons = [];
      ref1 = form.find("input[type=submit], button, #mktFrmSubmit").toArray();
      for (j = 0, len = ref1.length; j < len; j++) {
        b = ref1[j];
        buttons.push(b);
      }
      newForm = this.FV2SubstituteElement(form[0]);
      newForm.removeAttribute("onsubmit");
      newForm.onsubmit = function(evt) {
        if (evt != null) {
          if (typeof evt.preventDefault === "function") {
            evt.preventDefault();
          }
        }
        if (evt != null) {
          if (typeof evt.stopPropagation === "function") {
            evt.stopPropagation();
          }
        }
        actionFn({
          originalEl: form[0],
          type: "submit",
          event: evt
        });
        return false;
      };
      submitActions.replacementForm = jQueryContainer.jQuery(newForm);
      fn1 = (function(_this) {
        return function(button) {
          var newButton;
          newButton = _this.FV2SubstituteElement(button);
          newButton.removeAttribute("onclick");
          newButton.onclick = function(evt) {
            if (evt != null) {
              if (typeof evt.preventDefault === "function") {
                evt.preventDefault();
              }
            }
            if (evt != null) {
              if (typeof evt.stopPropagation === "function") {
                evt.stopPropagation();
              }
            }
            actionFn({
              originalEl: button,
              type: "click",
              event: evt
            });
            return false;
          };
          return submitActions.buttons.push({
            original: button,
            replacement: newButton
          });
        };
      })(this);
      for (l = 0, len1 = buttons.length; l < len1; l++) {
        button = buttons[l];
        fn1(button);
      }
      return submitActions;
    };window.AutopilotAnywhere.FV2ReplaceOriginalSubmitActions=function (submitActions) {
      var b, j, len, ref1, results;
      this.FV2SubstituteElement(submitActions.replacementForm[0], submitActions.originalForm[0]);
      ref1 = submitActions.buttons;
      results = [];
      for (j = 0, len = ref1.length; j < len; j++) {
        b = ref1[j];
        results.push(this.FV2SubstituteElement(b.replacement, b.original));
      }
      return results;
    };window.AutopilotAnywhere.FV2ReplaySubmitAction=function (submitAction) {
      var err, error, fallbackEvent;
      if (/MSIE 8\./.test(typeof navigator !== "undefined" && navigator !== null ? navigator.userAgent : void 0)) {
        return this.FV2ReplaySubmitActionLegacyBrowser(submitAction);
      }
      try {
        return submitAction.originalEl.dispatchEvent(submitAction.event);
      } catch (error) {
        err = error;
        fallbackEvent = document.createEvent("Event");
        fallbackEvent.initEvent(submitAction.type, true, false);
        return submitAction.originalEl.dispatchEvent(fallbackEvent);
      }
    };window.AutopilotAnywhere.FV2ReplaySubmitActionLegacyBrowser=function (submitAction) {
      var e, fn;
      if (fn = submitAction.originalEl[submitAction.type]) {
        return fn();
      } else {
        e = submitAction.event || documment.createEventObject();
        return submitAction.originalEl.fireEvent("on" + submitAction.type, e);
      }
    };window.AutopilotAnywhere.FV2TestFormValidity=function (config, form) {
      var field, j, k, len, ref1, validated, value;
      if (config.wantsValidation && config.requiredFields && !Array.isArray(config.requiredFields) && typeof config.requiredFields === 'object' && this.keys(config.requiredFields).length > 0) {
        validated = true;
        ref1 = config.requiredFields;
        for (j = 0, len = ref1.length; j < len; j++) {
          k = ref1[j];
          field = form.find("input[name=\"" + k + "\"]");
          if (field.length === 0) {
            field = form.find("#" + k);
          }
          value = field != null ? field.first().val() : void 0;
          if (!value) {
            validated = false;
            if (field != null) {
              field.addClass('autopilotRequired');
            }
            if (field != null) {
              field.attr('placeholder', 'Please enter a value');
            }
          }
        }
        return validated;
      } else {
        return true;
      }
    };window.AutopilotAnywhere.formScan=function (window, options) {
    var DOMWalk, Sha256, allIndividualFields, allTimingFields, ampmField, ampmNameOrId, areaCodeField, base, countryCodeField, dayField, divId, divInput, emailGuess, field, fieldType, form, formElement, forms, hoursField, individualField, individualNameOrId, jQueryWalk, k, len, len1, len2, len3, len4, len5, len6, m, minutesField, monthField, name, nameOrId, ninjaSpamField, ninjaTrapFieldName, o, option, optionValues, p, phonePrefixField, phoneSuffixField, q, r, ref, ref1, ref10, ref11, ref12, ref13, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, secondsField, squareSpacePage, textContent, timingField, u, unbouncePage, values, walk, yearField;
    if (options == null) {
      options = {};
    }
    Sha256 = {};
    Sha256.hash = function(msg) {
      var H, K, M, N, T1, T2, W, a, b, c, d, e, f, g, h, i, j, l, t;
      K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];
      H = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
      msg += String.fromCharCode(0x80);
      l = msg.length / 4 + 2;
      N = Math.ceil(l / 16);
      M = new Array(N);
      i = 0;
      while (i < N) {
        M[i] = new Array(16);
        j = 0;
        while (j < 16) {
          M[i][j] = (msg.charCodeAt(i * 64 + j * 4) << 24) | (msg.charCodeAt(i * 64 + j * 4 + 1) << 16) | (msg.charCodeAt(i * 64 + j * 4 + 2) << 8) | (msg.charCodeAt(i * 64 + j * 4 + 3));
          j++;
        }
        i++;
      }
      M[N - 1][14] = ((msg.length - 1) * 8) / Math.pow(2, 32);
      M[N - 1][14] = Math.floor(M[N - 1][14]);
      M[N - 1][15] = ((msg.length - 1) * 8) & 0xffffffff;
      W = new Array(64);
      a = void 0;
      b = void 0;
      c = void 0;
      d = void 0;
      e = void 0;
      f = void 0;
      g = void 0;
      h = void 0;
      i = 0;
      while (i < N) {
        t = 0;
        while (t < 16) {
          W[t] = M[i][t];
          t++;
        }
        t = 16;
        while (t < 64) {
          W[t] = (Sha256.a1(W[t - 2]) + W[t - 7] + Sha256.a0(W[t - 15]) + W[t - 16]) & 0xffffffff;
          t++;
        }
        a = H[0];
        b = H[1];
        c = H[2];
        d = H[3];
        e = H[4];
        f = H[5];
        g = H[6];
        h = H[7];
        t = 0;
        while (t < 64) {
          T1 = h + Sha256.b1(e) + Sha256.Ch(e, f, g) + K[t] + W[t];
          T2 = Sha256.b0(a) + Sha256.Maj(a, b, c);
          h = g;
          g = f;
          f = e;
          e = (d + T1) & 0xffffffff;
          d = c;
          c = b;
          b = a;
          a = (T1 + T2) & 0xffffffff;
          t++;
        }
        H[0] = (H[0] + a) & 0xffffffff;
        H[1] = (H[1] + b) & 0xffffffff;
        H[2] = (H[2] + c) & 0xffffffff;
        H[3] = (H[3] + d) & 0xffffffff;
        H[4] = (H[4] + e) & 0xffffffff;
        H[5] = (H[5] + f) & 0xffffffff;
        H[6] = (H[6] + g) & 0xffffffff;
        H[7] = (H[7] + h) & 0xffffffff;
        i++;
      }
      return Sha256.toHexStr(H[0]) + Sha256.toHexStr(H[1]) + Sha256.toHexStr(H[2]) + Sha256.toHexStr(H[3]) + Sha256.toHexStr(H[4]) + Sha256.toHexStr(H[5]) + Sha256.toHexStr(H[6]) + Sha256.toHexStr(H[7]);
    };
    Sha256.ROTR = function(n, x) {
      return (x >>> n) | (x << (32 - n));
    };
    Sha256.b0 = function(x) {
      return Sha256.ROTR(2, x) ^ Sha256.ROTR(13, x) ^ Sha256.ROTR(22, x);
    };
    Sha256.b1 = function(x) {
      return Sha256.ROTR(6, x) ^ Sha256.ROTR(11, x) ^ Sha256.ROTR(25, x);
    };
    Sha256.a0 = function(x) {
      return Sha256.ROTR(7, x) ^ Sha256.ROTR(18, x) ^ (x >>> 3);
    };
    Sha256.a1 = function(x) {
      return Sha256.ROTR(17, x) ^ Sha256.ROTR(19, x) ^ (x >>> 10);
    };
    Sha256.Ch = function(x, y, z) {
      return (x & y) ^ (~x & z);
    };
    Sha256.Maj = function(x, y, z) {
      return (x & y) ^ (x & z) ^ (y & z);
    };
    Sha256.toHexStr = function(n) {
      var i, s, v;
      s = "";
      v = void 0;
      i = 7;
      while (i >= 0) {
        v = (n >>> (i * 4)) & 0xf;
        s += v.toString(16);
        i--;
      }
      return s;
    };
    DOMWalk = {};
    DOMWalk.descend = function(from, selector) {
      if (selector == null) {
        return window.document.querySelectorAll(from);
      } else {
        return from.querySelectorAll(selector);
      }
    };
    DOMWalk.nameOrId = function(element) {
      return element.name || element.id;
    };
    DOMWalk.hasClass = function(element, className) {
      var re;
      re = new RegExp("\\b" + className + "\\b");
      return (element != null ? element.className : void 0) && re.test(element.className);
    };
    DOMWalk.attr = function(element, attrName) {
      return element[attrName];
    };
    DOMWalk.hasAncestorOfType = function(element, nodeName) {
      while (true) {
        if (element.nodeName === nodeName) {
          return true;
        }
        element = element.parentNode;
        if (!element) {
          return false;
        }
      }
    };
    jQueryWalk = {};
    jQueryWalk.$ = (typeof jQuery !== "undefined" && jQuery !== null) && jQuery || (typeof jQueryContainer !== "undefined" && jQueryContainer !== null ? jQueryContainer.jQuery : void 0);
    jQueryWalk.descend = function(from, selector) {
      if (!selector) {
        return jQueryWalk.$(from).toArray();
      } else {
        return jQueryWalk.$(from).find(selector).toArray();
      }
    };
    jQueryWalk.nameOrId = function(element) {
      var el;
      el = jQueryWalk.$(element);
      return el.attr('name') || el.attr('id');
    };
    jQueryWalk.hasClass = function(element, className) {
      return jQueryWalk.$(element).hasClass(className);
    };
    jQueryWalk.attr = function(element, attrName) {
      return jQueryWalk.$(element).attr(attrName);
    };
    jQueryWalk.hasAncestorOfType = function(element, nodeName) {
      return jQueryWalk.$(element).parents(nodeName).length > 0;
    };
    walk = options.useDOM && DOMWalk || jQueryWalk;
    unbouncePage = walk.descend('#ubpoverlay-overlay').length;
    squareSpacePage = walk.descend('.sqs-layout').length;
    forms = {};
    ref = walk.descend('FORM');
    for (k = 0, len = ref.length; k < len; k++) {
      formElement = ref[k];
      if (walk.hasAncestorOfType(formElement, 'NOSCRIPT')) {
        continue;
      }
      if (ninjaSpamField = (ref1 = walk.descend(formElement, "INPUT[type=hidden][name=_hp_name]")) != null ? ref1[0] : void 0) {
        ninjaTrapFieldName = walk.attr(ninjaSpamField, 'value');
      } else {
        ninjaTrapFieldName = null;
      }
      form = {
        fields: [],
        radioFields: {},
        fingerprint: "",
        duplicate: false,
        ignoredNamesOrIds: {},
        alreadyUsedGuesses: {}
      };
      ref2 = walk.descend(formElement, 'INPUT, SELECT, TEXTAREA, FIELDSET, DIV[id], BUTTON');
      for (m = 0, len1 = ref2.length; m < len1; m++) {
        field = ref2[m];
        if (squareSpacePage && (field.nodeName === 'INPUT' || field.nodeName === 'BUTTON') && (walk.attr(field, 'type') || '').toLowerCase() === 'submit') {
          if (field.nodeName === 'INPUT') {
            form.fingerprint += "SQUARESPACEINPUTSUBMIT/" + (walk.attr(field, 'value') || '') + " ";
          } else {
            form.fingerprint += "SQUARESPACEBUTTONSUBMIT/" + (walk.attr(field, 'value') || '') + " ";
          }
        }
        if (!(nameOrId = walk.nameOrId(field))) {
          continue;
        }
        if (form.ignoredNamesOrIds[nameOrId]) {
          continue;
        }
        if (nameOrId.match(/^captcha$/i)) {
          continue;
        }
        if (walk.hasClass(field, 'screenReader')) {
          continue;
        }
        if (ninjaTrapFieldName && walk.attr(field, 'type') === 'text' && walk.attr(field, 'name') === ninjaTrapFieldName) {
          continue;
        }
        switch (field.nodeName) {
          case 'DIV':
            divId = (walk.attr(field, 'id') || "").toLowerCase();
            if (divId.match(/^currency-yui/)) {
              divInput = walk.descend(field, 'INPUT');
              if ((divInput != null ? divInput.length : void 0) === 1 && !walk.nameOrId(divInput[0])) {
                form.fields.push({
                  type: 'currency',
                  name: divId,
                  guess: null,
                  probablySearch: false,
                  subfield: divInput[0]
                });
                form.fingerprint += "INPUT.text/" + divId + " ";
              }
            } else if (divId.match(/^number-yui/)) {
              divInput = walk.descend(field, 'INPUT');
              if ((divInput != null ? divInput.length : void 0) === 1 && !walk.nameOrId(divInput[0])) {
                form.fields.push({
                  type: 'number',
                  name: divId,
                  guess: null,
                  probablySearch: false,
                  subfield: divInput[0]
                });
                form.fingerprint += "INPUT.text/" + divId + " ";
              }
            }
            break;
          case 'INPUT':
            fieldType = (walk.attr(field, 'type') || "text").toLowerCase();
            if (fieldType === 'email' || fieldType === 'text' || fieldType === 'search' || fieldType === 'tel' || fieldType === 'url') {
              if (unbouncePage && nameOrId.match(/^ubafs-/)) {
                continue;
              }
              emailGuess = (fieldType === 'email' || nameOrId.match(/email/i)) && !form.alreadyUsedGuesses['regular_Email'] ? 'regular_Email' : null;
              form.fields.push({
                type: 'text',
                name: nameOrId,
                guess: emailGuess,
                probablySearch: fieldType === 'search' || (nameOrId === 'search' || nameOrId === 'query' || nameOrId === 'q' || nameOrId === 's' || nameOrId === 'qu')
              });
              form.fingerprint += "INPUT." + fieldType + "/" + nameOrId + " ";
              if (emailGuess) {
                form.alreadyUsedGuesses[emailGuess] = true;
              }
            } else if (fieldType === 'checkbox') {
              form.fields.push({
                type: 'checkbox',
                name: nameOrId,
                guess: null,
                probablySearch: false
              });
              form.fingerprint += "INPUT.checkbox/" + nameOrId + " ";
            } else if (fieldType === 'radio') {
              if ((base = form.radioFields)[nameOrId] == null) {
                base[nameOrId] = [];
              }
              form.radioFields[nameOrId].push(walk.attr(field, 'value'));
            }
            break;
          case 'SELECT':
            optionValues = [];
            ref3 = walk.descend(field, 'OPTION') || [];
            for (o = 0, len2 = ref3.length; o < len2; o++) {
              option = ref3[o];
              if (textContent = walk.attr(option, 'textContent')) {
                optionValues.push(textContent);
              }
            }
            form.fields.push({
              type: 'select',
              name: nameOrId,
              guess: null,
              probablySearch: false,
              optionValues: optionValues
            });
            form.fingerprint += "SELECT/" + nameOrId + " ";
            break;
          case 'TEXTAREA':
            form.fields.push({
              type: 'text',
              name: nameOrId,
              guess: null,
              textArea: true
            });
            form.fingerprint += "TEXTAREA/" + nameOrId + " ";
            break;
          case 'FIELDSET':
            if (nameOrId.match(/^date-yui/)) {
              allIndividualFields = walk.descend(field, 'INPUT');
              if (allIndividualFields.length === 3) {
                dayField = walk.descend(field, '.day INPUT');
                monthField = walk.descend(field, '.month INPUT');
                yearField = walk.descend(field, '.year INPUT');
                if (((dayField.length === (ref5 = monthField.length) && ref5 === (ref4 = yearField.length)) && ref4 === 1)) {
                  for (p = 0, len3 = allIndividualFields.length; p < len3; p++) {
                    individualField = allIndividualFields[p];
                    if (individualNameOrId = walk.nameOrId(individualField)) {
                      form.ignoredNamesOrIds[individualNameOrId] = true;
                    }
                  }
                  form.fields.push({
                    type: 'date',
                    name: nameOrId,
                    guess: null,
                    probablySearch: false,
                    subfields: [yearField[0], monthField[0], dayField[0]]
                  });
                  form.fingerprint += "FIELDSET/" + nameOrId + " ";
                }
              }
            } else if (nameOrId.match(/^phone-yui/)) {
              countryCodeField = walk.descend(field, 'INPUT[x-autocompletetype="phone-country-code"]');
              areaCodeField = walk.descend(field, 'INPUT[x-autocompletetype="phone-area-code"]');
              phonePrefixField = walk.descend(field, 'INPUT[x-autocompletetype="phone-local-prefix"]');
              phoneSuffixField = walk.descend(field, 'INPUT[x-autocompletetype="phone-local-suffix"]');
              if ((countryCodeField != null ? countryCodeField.length : void 0) <= 1 && ((((areaCodeField != null ? areaCodeField.length : void 0) === (ref7 = phonePrefixField != null ? phonePrefixField.length : void 0) && ref7 === (ref6 = phoneSuffixField != null ? phoneSuffixField.length : void 0)) && ref6 === 1))) {
                ref8 = [countryCodeField, areaCodeField, phonePrefixField, phoneSuffixField];
                for (q = 0, len4 = ref8.length; q < len4; q++) {
                  individualField = ref8[q];
                  if (individualNameOrId = walk.nameOrId(individualField)) {
                    form.ignoredNamesOrIds[individualNameOrId] = true;
                  }
                }
                form.fields.push({
                  type: 'phone',
                  name: nameOrId,
                  guess: null,
                  probablySearch: false,
                  subfields: {
                    countryCode: (countryCodeField != null ? countryCodeField.length : void 0) === 1 ? countryCodeField[0] : null,
                    areaCode: areaCodeField != null ? areaCodeField[0] : void 0,
                    phonePrefix: phonePrefixField != null ? phonePrefixField[0] : void 0,
                    phoneSuffix: phoneSuffixField != null ? phoneSuffixField[0] : void 0
                  }
                });
                form.fingerprint += "FIELDSET/" + nameOrId + " ";
              }
            } else if (nameOrId.match(/^time-yui/)) {
              allTimingFields = walk.descend(field, 'INPUT');
              if (allTimingFields.length === 3) {
                hoursField = walk.descend(field, '.hour INPUT');
                minutesField = walk.descend(field, '.minute INPUT');
                secondsField = walk.descend(field, '.second INPUT');
                ampmField = walk.descend(field, '.ampm SELECT');
                if ((((hoursField.length === (ref11 = minutesField.length) && ref11 === (ref10 = secondsField.length)) && ref10 === (ref9 = ampmField.length)) && ref9 === 1)) {
                  for (r = 0, len5 = allTimingFields.length; r < len5; r++) {
                    timingField = allTimingFields[r];
                    if (individualNameOrId = walk.nameOrId(timingField)) {
                      form.ignoredNamesOrIds[individualNameOrId] = true;
                    }
                  }
                  if (ampmNameOrId = walk.nameOrId(ampmField)) {
                    form.ignoredNamesOrIds[ampmNameOrId] = true;
                  }
                  form.fields.push({
                    type: 'time',
                    name: nameOrId,
                    guess: null,
                    probablySearch: false,
                    subfields: [hoursField[0], minutesField[0], secondsField[0], ampmField[0]]
                  });
                  form.fingerprint += "FIELDSET/" + nameOrId + " ";
                }
              }
            }
        }
      }
      ref12 = form.radioFields;
      for (name in ref12) {
        values = ref12[name];
        form.fields.push({
          type: 'radio',
          name: name,
          guess: null,
          probablySearch: false,
          optionValues: values
        });
        form.fingerprint += "INPUT.radio/" + name + " ";
      }
      ref13 = form.fields;
      for (u = 0, len6 = ref13.length; u < len6; u++) {
        field = ref13[u];
        if (field.guess) {
          continue;
        }
        if (field.name.match(/company|organization/i)) {
          if (!form.alreadyUsedGuesses['regular_Company']) {
            field.guess = 'regular_Company';
          }
        } else if (field.name.match(/last|^lname/i)) {
          if (!form.alreadyUsedGuesses['regular_LastName']) {
            field.guess = 'regular_LastName';
          }
        } else if (field.name.match(/first|fullname|contact_name|fname|name/i)) {
          if (!form.alreadyUsedGuesses['regular_FirstName']) {
            field.guess = 'regular_FirstName';
          }
        } else if (field.name.match(/title|role/i)) {
          if (!form.alreadyUsedGuesses['regular_Title']) {
            field.guess = 'regular_Title';
          }
        } else if (field.name.match(/salutation|greeting/i)) {
          if (!form.alreadyUsedGuesses['regular_Salutation']) {
            field.guess = 'regular_Salutation';
          }
        } else if (field.name.match(/nick/i)) {
          if (!form.alreadyUsedGuesses['regular_Nickname']) {
            field.guess = 'regular_Nickname';
          }
        } else if (field.name.match(/employee/i)) {
          if (!form.alreadyUsedGuesses['regular_NumberOfEmployees']) {
            field.guess = 'regular_NumberOfEmployees';
          }
        } else if (field.name.match(/birth|dob/i)) {
          if (!form.alreadyUsedGuesses['regular_Birthday']) {
            field.guess = 'regular_Birthday';
          }
        } else if (field.name.match(/industry|sector/i)) {
          if (!form.alreadyUsedGuesses['regular_Industry']) {
            field.guess = 'regular_Industry';
          }
        } else if (field.name.match(/phone/i)) {
          if (!form.alreadyUsedGuesses['regular_Phone']) {
            field.guess = 'regular_Phone';
          }
        } else if (field.name.match(/mobile|cell/i)) {
          if (!form.alreadyUsedGuesses['regular_MobilePhone']) {
            field.guess = 'regular_MobilePhone';
          }
        } else if (field.name.match(/fax/i)) {
          if (!form.alreadyUsedGuesses['regular_Fax']) {
            field.guess = 'regular_Fax';
          }
        } else if (field.name.match(/site|web|page/i)) {
          if (!form.alreadyUsedGuesses['regular_Website']) {
            field.guess = 'regular_Website';
          }
        } else if (field.name.match(/street/i)) {
          if (!form.alreadyUsedGuesses['regular_MailingStreet']) {
            field.guess = 'regular_MailingStreet';
          }
        } else if (field.name.match(/city/i)) {
          if (!form.alreadyUsedGuesses['regular_MailingCity']) {
            field.guess = 'regular_MailingCity';
          }
        } else if (field.name.match(/state|province/i)) {
          if (!form.alreadyUsedGuesses['regular_MailingState']) {
            field.guess = 'regular_MailingState';
          }
        } else if (field.name.match(/postal|code|zip/i)) {
          if (!form.alreadyUsedGuesses['regular_MailingPostalCode']) {
            field.guess = 'regular_MailingPostalCode';
          }
        } else if (field.name.match(/country|nation/i)) {
          if (!form.alreadyUsedGuesses['regular_MailingCountry']) {
            field.guess = 'regular_MailingCountry';
          }
        } else if (field.name.match(/lead|source|refer/i)) {
          if (!form.alreadyUsedGuesses['regular_LeadSource']) {
            field.guess = 'regular_LeadSource';
          }
        } else if (field.name.match(/notes/i)) {
          if (!form.alreadyUsedGuesses['regular_notes']) {
            field.guess = 'regular_notes';
          }
        } else if (field.name.match(/twitter|handle/i)) {
          if (!form.alreadyUsedGuesses['regular_twitter']) {
            field.guess = 'regular_twitter';
          }
        } else if (field.name.match(/opted/i)) {
          if (!form.alreadyUsedGuesses['regular_HasOptedOutOfEmail']) {
            field.guess = 'regular_HasOptedOutOfEmail';
          }
        }
        if (field.guess) {
          form.alreadyUsedGuesses[field.guess] = true;
        }
      }
      if (!(form.fields.length > 0)) {
        continue;
      }
      if (form.fields.length === 1 && form.fields[0].probablySearch) {
        continue;
      }
      if (!walk.attr(formElement, 'action') && form.fields.length === 1 && form.fields[0].type === 'select') {
        continue;
      }
      form.hash = Sha256.hash(form.fingerprint);
      form.id = walk.attr(formElement, 'id');
      form.action = walk.attr(formElement, 'action');
      form.elements = [formElement];
      if (forms[form.hash]) {
        forms[form.hash].elements.push(formElement);
      } else {
        forms[form.hash] = form;
      }
    }
    return forms;
  };window.AutopilotAnywhere.startFormScanLoop=function () {
      var _t, interval, scans;
      _t = this;
      scans = 1;
      _t.forms({
        finalScan: false
      });
      interval = setInterval(function() {
        var finalScan;
        if (_t.formScanLoopAborted) {
          return;
        }
        scans++;
        finalScan = scans >= 5;
        _t.forms({
          finalScan: finalScan
        });
        if (finalScan) {
          return clearInterval(interval);
        }
      }, 750);
      return window.jQuery && window.jQuery('.wsite-button').each(function(_, el) {
        return window.jQuery(el).attr('onclick', window.jQuery(el).attr('onclick').replace(/^document.getElementById\('/, "jQuery('#"));
      });
    };window.AutopilotAnywhere.abortFormScanLoop=function () {
      return this.formScanLoopAborted = true;
    };window.AutopilotAnywhere.populateSessionIdFields=function () {
      return jQueryContainer.jQuery("input[name=_autopilot_session_id][type=hidden]:not([value])").attr("value", this.sessionId);
    };window.AutopilotAnywhere.headsupCheck=function (count) {
      var _t;
      _t = this;
      if (count == null) {
        count = 0;
      }
      if (this.headsupVisible || this.headsupRequestInProgress) {
        return;
      }
      this.headsupRequestInProgress = true;
      return this.sendEvent({
        type: 'headsupcheck',
        url: document.location.href
      }, function(err, hu) {
        _t.headsupRequestInProgress = false;
        if (err) {
          return;
        }
        if (hu != null ? hu.refDoc : void 0) {
          _t.headsupRefDoc = hu.refDoc;
          return _t.showHeadsup(hu.refDoc);
        } else if (count < 4) {
          clearTimeout(_t.headsupRecheckTimeout);
          return _t.headsupRecheckTimeout = setTimeout(function() {
            return _t.headsupCheck(count + 1);
          }, 500 + Math.pow(2.25, count) * 1000);
        }
      });
    };window.AutopilotAnywhere.showHeadsup=function (ref) {
      var _t;
      _t = this;
      if (this.headsupVisible || this.headsupRequestInProgress) {
        return;
      }
      this.headsupVisible = true;
      this.headsupIframeUrl = this.anywhereBaseUrl.replace(/\/anywhere\//, "/anywhere/headsup/") + "/" + encodeURIComponent(ref) + "/" + _t.initTime + "/" + encodeURIComponent(document.location.href);
      this.headsupIframe = jQueryContainer.jQuery("<iframe>");
      this.headsupIframe.attr("src", this.headsupIframeUrl);
      this.headsupIframe.attr("style", "border: none; z-index: 999998; position: fixed; bottom: 0px; width: 355px; right: 0px; height: 135px; opacity: 1; background: transparent; max-width: 100%;");
      return jQueryContainer.jQuery('body').append(this.headsupIframe);
    };window.AutopilotAnywhere.hideHeadsup=function () {
      this.headsupIframe.remove();
      this.headsupIframe = null;
      return this.headsupVisible = false;
    };window.AutopilotAnywhere.startWatchingLocationHref=function () {
      var _t, prevHref;
      _t = this;
      prevHref = null;
      return setInterval(function() {
        var ref1, ref2;
        if (prevHref !== ((ref1 = document.location) != null ? ref1.href : void 0)) {
          prevHref = (ref2 = document.location) != null ? ref2.href : void 0;
          return _t.locationChanged();
        }
      }, 500);
    };window.AutopilotAnywhere.locationChanged=function () {
      if (this.anywhereConfig.devmode) {
        this.run(["visit"]);
      }
      if (!/MSIE 8\./.test(navigator.userAgent)) {
        return this.run(["headsupCheck"]);
      }
    };window.AutopilotAnywhere.listenForHeadsupPostMessage=function () {
      var _t;
      _t = this;
      if (!typeof window.addEventListener) {
        return;
      }
      return window.addEventListener("message", function(event) {
        var replyData, rt;
        _t.lastpostMessageOrigin = event != null ? event.origin : void 0;
        if ((event != null ? event.origin : void 0) !== _t.anywhereBaseDomain) {
          return;
        }
        if (!_t.headsupIframe) {
          return;
        }
        if (event != null ? event.data.init : void 0) {
          _t.headsupMessageText = event.data.messageText;
          _t.headsupShortMessageText = event.data.shortMessageText;
          _t.headsupFromName = event.data.fromName;
          _t.headsupTitleAndCompany = event.data.titleAndCompany;
          _t.headsupButtonText = event.data.buttonText;
          _t.subscribeContactListId = event.data.subscribeContactListId;
        }
        if (event != null ? event.data.close : void 0) {
          _t.hideHeadsup();
        }
        if (event != null ? event.data.height : void 0) {
          _t.headsupIframe.css("height", event != null ? event.data.height : void 0);
        }
        if (event != null ? event.data.width : void 0) {
          _t.headsupIframe.css("width", event != null ? event.data.width : void 0);
        }
        if (event != null ? event.data.left : void 0) {
          _t.headsupIframe.css("left", event != null ? event.data.left : void 0);
        }
        if (event != null ? event.data.right : void 0) {
          _t.headsupIframe.css("right", event != null ? event.data.right : void 0);
        }
        if (event != null ? event.data.top : void 0) {
          _t.headsupIframe.css("top", event != null ? event.data.top : void 0);
        }
        if (event != null ? event.data.bottom : void 0) {
          _t.headsupIframe.css("bottom", event != null ? event.data.bottom : void 0);
        }
        if (event != null ? event.data.shown : void 0) {
          _t.sendEvent({
            type: "headsup",
            action: "onShown",
            url: document.location.href,
            refDoc: _t.headsupRefDoc,
            text: _t.headsupShortMessageText
          });
        }
        if (event != null ? event.data.open : void 0) {
          _t.sendEvent({
            type: "headsup",
            action: "onOpen",
            url: document.location.href,
            refDoc: _t.headsupRefDoc,
            text: _t.headsupMessageText,
            fromName: _t.headsupFromName,
            titleAndCompany: _t.headsupTitleAndCompany,
            buttonText: _t.headsupButtonText
          });
        }
        if (event != null ? event.data.dismiss : void 0) {
          _t.sendEvent({
            type: "headsup",
            action: "onDismiss",
            url: document.location.href,
            refDoc: _t.headsupRefDoc
          });
        }
        if (event != null ? event.data.subscribe : void 0) {
          _t.sendEvent({
            type: "headsupSubscribe",
            action: "onSubscribe",
            url: document.location.href,
            refDoc: _t.headsupRefDoc,
            subscribeContactListId: _t.subscribeContactListId
          });
        }
        if (replyData = event != null ? event.data.reply : void 0) {
          _t.sendEvent({
            type: "headsupReply",
            action: "onReply",
            url: document.location.href,
            refDoc: _t.headsupRefDoc,
            text: _t.headsupMessageText,
            reply: replyData,
            fromName: event.data.fromName,
            titleAndCompany: event.data.titleAndCompany,
            imgUrl: event.data.imgUrl
          });
        }
        if (rt = event != null ? event.data.redirectTo : void 0) {
          window.location = rt;
        }
      }, false);
    };}; window.AutopilotAnywhere.init()})();