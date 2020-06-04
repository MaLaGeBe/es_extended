var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function o(e){e.forEach(t)}function l(e){return"function"==typeof e}function r(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function c(e){return null==e?"":e}function s(e,t){e.appendChild(t)}function a(e,t,n){e.insertBefore(t,n||null)}function u(e){e.parentNode.removeChild(e)}function i(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function d(e){return document.createElement(e)}function f(e){return document.createTextNode(e)}function v(){return f(" ")}function p(){return f("")}function m(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function h(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function g(e,t){t=""+t,e.data!==t&&(e.data=t)}function y(e,t){e.value=null==t?"":t}function b(e,t,n,o){e.style.setProperty(t,n,o?"important":"")}let k;function x(e){k=e}function $(){if(!k)throw new Error("Function called outside component initialization");return k}function w(e){$().$$.on_mount.push(e)}function E(){const e=$();return(t,n)=>{const o=e.$$.callbacks[t];if(o){const l=function(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}(t,n);o.slice().forEach(t=>{t.call(e,l)})}}}const j=[],q=[],S=[],F=[],L=Promise.resolve();let C=!1;function _(e){S.push(e)}let M=!1;const T=new Set;function N(){if(!M){M=!0;do{for(let e=0;e<j.length;e+=1){const t=j[e];x(t),X(t.$$)}for(j.length=0;q.length;)q.pop()();for(let e=0;e<S.length;e+=1){const t=S[e];T.has(t)||(T.add(t),t())}S.length=0}while(j.length);for(;F.length;)F.pop()();C=!1,M=!1,T.clear()}}function X(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(_)}}const A=new Set;let B;function R(){B={r:0,c:[],p:B}}function I(){B.r||o(B.c),B=B.p}function Y(e,t){e&&e.i&&(A.delete(e),e.i(t))}function P(e,t,n,o){if(e&&e.o){if(A.has(e))return;A.add(e),B.c.push(()=>{A.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}}function z(e,n,r){const{fragment:c,on_mount:s,on_destroy:a,after_update:u}=e.$$;c&&c.m(n,r),_(()=>{const n=s.map(t).filter(l);a?a.push(...n):o(n),e.$$.on_mount=[]}),u.forEach(_)}function O(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function U(e,t){-1===e.$$.dirty[0]&&(j.push(e),C||(C=!0,L.then(N)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function D(t,l,r,c,s,a,i=[-1]){const d=k;x(t);const f=l.props||{},v=t.$$={fragment:null,ctx:null,props:a,update:e,not_equal:s,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:i};let p=!1;if(v.ctx=r?r(t,f,(e,n,...o)=>{const l=o.length?o[0]:n;return v.ctx&&s(v.ctx[e],v.ctx[e]=l)&&(v.bound[e]&&v.bound[e](l),p&&U(t,e)),n}):[],v.update(),p=!0,o(v.before_update),v.fragment=!!c&&c(v.ctx),l.target){if(l.hydrate){const e=function(e){return Array.from(e.childNodes)}(l.target);v.fragment&&v.fragment.l(e),e.forEach(u)}else v.fragment&&v.fragment.c();l.intro&&Y(t.$$.fragment),z(t,l.target,l.anchor),N()}x(d)}class G{$destroy(){O(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function H(t){let n,l,r,c,i,p,y,b,k,x,$,w,E,j,q,S,F,L,C,_,M,T,N,X,A,B,R,I,Y,P,z,O,U,D,G,H,K,J,Q,V,W,Z,ee,te,ne,oe,le;return{c(){n=d("div"),l=d("div"),r=d("div"),c=d("div"),i=d("div"),p=v(),y=d("div"),b=v(),k=d("div"),x=d("div"),$=v(),w=d("div"),E=v(),j=d("div"),q=d("div"),S=v(),F=d("div"),L=v(),C=d("div"),_=v(),M=d("div"),T=d("div"),T.innerHTML='<div class="color-picked svelte-8esefu"></div>',N=v(),X=d("div"),A=d("p"),B=f(t[3]),R=v(),I=d("div"),Y=d("div"),P=d("p"),z=f(t[0]),O=v(),U=d("p"),U.textContent="R",D=v(),G=d("div"),H=d("p"),K=f(t[1]),J=v(),Q=d("p"),Q.textContent="G",V=v(),W=d("div"),Z=d("p"),ee=f(t[2]),te=v(),ne=d("p"),ne.textContent="B",h(i,"id","colorsquare-picker"),h(i,"class","svelte-8esefu"),h(y,"id","colorsquare-event"),h(y,"class","svelte-8esefu"),h(c,"class","value-gradient svelte-8esefu"),h(r,"class","saturation-gradient svelte-8esefu"),h(l,"class","colorsquare size svelte-8esefu"),h(x,"id","hue-picker"),h(x,"class","svelte-8esefu"),h(w,"id","hue-event"),h(w,"class","svelte-8esefu"),h(k,"class","hue-selector svelte-8esefu"),h(q,"class","alpha-value svelte-8esefu"),h(F,"id","alpha-picker"),h(F,"class","svelte-8esefu"),h(C,"id","alpha-event"),h(C,"class","svelte-8esefu"),h(j,"class","alpha-selector svelte-8esefu"),h(T,"class","color-picked-bg svelte-8esefu"),h(A,"class","text svelte-8esefu"),h(X,"class","hex-text-block svelte-8esefu"),h(P,"class","text svelte-8esefu"),h(U,"class","text-label svelte-8esefu"),h(Y,"class","rgb-text-block svelte-8esefu"),h(H,"class","text svelte-8esefu"),h(Q,"class","text-label svelte-8esefu"),h(G,"class","rgb-text-block svelte-8esefu"),h(Z,"class","text svelte-8esefu"),h(ne,"class","text-label svelte-8esefu"),h(W,"class","rgb-text-block svelte-8esefu"),h(I,"class","rgb-text-div svelte-8esefu"),h(M,"class","color-info-box svelte-8esefu"),h(n,"class","main-container svelte-8esefu")},m(e,o){a(e,n,o),s(n,l),s(l,r),s(r,c),s(c,i),s(c,p),s(c,y),s(n,b),s(n,k),s(k,x),s(k,$),s(k,w),s(n,E),s(n,j),s(j,q),s(j,S),s(j,F),s(j,L),s(j,C),s(n,_),s(n,M),s(M,T),s(M,N),s(M,X),s(X,A),s(A,B),s(M,R),s(M,I),s(I,Y),s(Y,P),s(P,z),s(Y,O),s(Y,U),s(I,D),s(I,G),s(G,H),s(H,K),s(G,J),s(G,Q),s(I,V),s(I,W),s(W,Z),s(Z,ee),s(W,te),s(W,ne),oe||(le=[m(y,"mousedown",t[4]),m(y,"touchstart",t[5]),m(w,"mousedown",t[6]),m(w,"touchstart",t[7]),m(C,"mousedown",t[8]),m(C,"touchstart",t[9])],oe=!0)},p(e,[t]){8&t&&g(B,e[3]),1&t&&g(z,e[0]),2&t&&g(K,e[1]),4&t&&g(ee,e[2])},i:e,o:e,d(e){e&&u(n),oe=!1,o(le)}}}function K(e,t,n){let o=document.querySelector(e);o&&o.removeEventListener(t,n)}function J(e,t,n){var o,l,r,c=Math.floor(6*e),s=6*e-c,a=n*(1-t),u=n*(1-s*t),i=n*(1-(1-s)*t);switch(c%6){case 0:o=n,l=i,r=a;break;case 1:o=u,l=n,r=a;break;case 2:o=a,l=n,r=i;break;case 3:o=a,l=u,r=n;break;case 4:o=i,l=a,r=n;break;case 5:o=n,l=a,r=u}return[Math.round(255*o),Math.round(255*l),Math.round(255*r)]}function Q(e,t,n){let{startColor:o="#FF0000"}=t;w(()=>{document.addEventListener("mouseup",k),document.addEventListener("touchend",k),document.addEventListener("mousemove",h),document.addEventListener("touchmove",g),document.addEventListener("touchstart",p),document.addEventListener("mousedown",m),function(){let e=o.replace("#","");if(6!==e.length&&3!==e.length&&!e.match(/([^A-F0-9])/gi))return void alert("Invalid property value (startColor)");let t="";3===e.length?e.split("").forEach(e=>{t+=e+e}):t=e;n(3,v=t),n(0,i=parseInt(t.substring(0,2),16)),n(1,d=parseInt(t.substring(2,4),16)),n(2,f=parseInt(t.substring(4,6),16)),function(e,t,n,o){let l,r,u,i,d,f,v,p,m,h;l=e/255,r=t/255,u=n/255,i=Math.max(l,r,u),d=Math.min(l,r,u),f=i-d,h=i,m=0==h?0:f/i;for(let e=0;e<3;e++)if([l,r,u][e]===i){v=e;break}if(0==f)return p=0,o?(c=p,s=m,a=h,void j()):{h:p,s:m,v:h};switch(v){case 0:p=(r-u)/f%6*60/360;break;case 1:p=60*((u-l)/f+2)/360;break;case 2:p=60*((l-r)/f+4)/360}p<0&&(p+=6);if(!o)return{h:p,s:m,v:h};c=p,s=m,a=h,j()}(i,d,f,!0),function(){let e=document.querySelector("#colorsquare-picker"),t=100*s,n=100*(1-a);e.style.top=n+"%",e.style.left=t+"%"}(),function(){let e=document.querySelector("#hue-picker"),t=100*c;e.style.left=t+"%"}()}()}),Number.prototype.mod=function(e){return(this%e+e)%e};const l=E();let r,c=1,s=1,a=1,u=1,i=255,d=0,f=0,v="#FF0000";function p(){K("#alpha-event","mousedown",S),K("#colorsquare-event","mousedown",y),K("#hue-event","mousedown",x),document.removeEventListener("mouseup",k),document.removeEventListener("mousemove",h),document.removeEventListener("touchstart",p),document.removeEventListener("mousedown",m)}function m(){K("#alpha-event","touchstart",F),K("#colorsquare-event","touchstart",b),K("#hue-event","touchstart",$),document.removeEventListener("touchend",k),document.removeEventListener("touchmove",g),document.removeEventListener("touchstart",p),document.removeEventListener("mousedown",m)}function h(e){if(r){let t,n,o,l=e.clientX,i=e.clientY,d=r.getBoundingClientRect();switch(r.id){case"colorsquare-event":t=(l-d.x)/240*100,n=(i-d.y)/160*100,t>100?t=100:t<0&&(t=0),n>100?n=100:n<0&&(n=0),o=document.querySelector("#colorsquare-picker"),n=n.toFixed(2),t=t.toFixed(2),o.style.top=n+"%",o.style.left=t+"%",s=t/100,a=1-n/100,q();break;case"hue-event":t=(l-10-d.x)/220*100,t>100?t=100:t<0&&(t=0),t=t.toFixed(2),o=document.querySelector("#hue-picker"),o.style.left=t+"%",c=t/100,j();break;case"alpha-event":t=(l-10-d.x)/220*100,t>100?t=100:t<0&&(t=0),t=t.toFixed(2),o=document.querySelector("#alpha-picker"),o.style.left=t+"%",u=t/100,q()}}}function g(e){if(r){let t,n,o,l=e.touches[0].clientX,i=e.touches[0].clientY,d=r.getBoundingClientRect();switch(r.id){case"colorsquare-event":t=(l-d.x)/240*100,n=(i-d.y)/160*100,t>100?t=100:t<0&&(t=0),n>100?n=100:n<0&&(n=0),o=document.querySelector("#colorsquare-picker"),n=n.toFixed(2),t=t.toFixed(2),o.style.top=n+"%",o.style.left=t+"%",s=t/100,a=1-n/100,q();break;case"hue-event":t=(l-10-d.x)/220*100,t>100?t=100:t<0&&(t=0),t=t.toFixed(2),o=document.querySelector("#hue-picker"),o.style.left=t+"%",c=t/100,j();break;case"alpha-event":t=(l-10-d.x)/220*100,t>100?t=100:t<0&&(t=0),t=t.toFixed(2),o=document.querySelector("#alpha-picker"),o.style.left=t+"%",u=t/100,q()}}}function y(e){r=e.currentTarget;let t=(e.offsetX+1)/240*100,n=(e.offsetY+1)/160*100;n=n.toFixed(2),t=t.toFixed(2);let o=document.querySelector("#colorsquare-picker");o.style.top=n+"%",o.style.left=t+"%",s=t/100,a=1-n/100,q()}function b(e){r=e.currentTarget;let t=e.target.getBoundingClientRect(),n=(e.targetTouches[0].clientX-t.left+1)/240*100,o=(e.targetTouches[0].clientY-t.top+1)/160*100;o=o.toFixed(2),n=n.toFixed(2);let l=document.querySelector("#colorsquare-picker");l.style.top=o+"%",l.style.left=n+"%",s=n/100,a=1-o/100,q()}function k(e){r=null}function x(e){r=e.currentTarget;let t=(e.offsetX-9)/220*100;t=t.toFixed(2),document.querySelector("#hue-picker").style.left=t+"%",c=t/100,j()}function $(e){r=e.currentTarget;let t=e.target.getBoundingClientRect(),n=(e.targetTouches[0].clientX-t.left-9)/220*100;n=n.toFixed(2),document.querySelector("#hue-picker").style.left=n+"%",c=n/100,j()}function j(){let e=J(c,1,1);document.querySelector(".colorsquare").style.background=`rgba(${e[0]},${e[1]},${e[2]},1)`,q()}function q(){let e=J(c,s,a);n(0,i=e[0]),n(1,d=e[1]),n(2,f=e[2]),n(3,v=function(){let e=i.toString(16),t=d.toString(16),n=f.toString(16);1==e.length&&(e="0"+e);1==t.length&&(t="0"+t);1==n.length&&(n="0"+n);return("#"+e+t+n).toUpperCase()}()),document.querySelector(".color-picked").style.background=`rgba(${e[0]},${e[1]},${e[2]},${u})`,l("colorChange",{r:i,g:d,b:f,a:u})}function S(e){r=e.currentTarget;let t=(e.offsetX-9)/220*100;t=t.toFixed(2),document.querySelector("#alpha-picker").style.left=t+"%",u=t/100,q()}function F(e){r=e.currentTarget;let t=e.target.getBoundingClientRect(),n=(e.targetTouches[0].clientX-t.left-9)/220*100;n=n.toFixed(2),document.querySelector("#alpha-picker").style.left=n+"%",u=n/100,q()}return e.$set=e=>{"startColor"in e&&n(10,o=e.startColor)},[i,d,f,v,y,b,x,$,S,F,o]}class V extends G{constructor(e){super(),D(this,e,Q,H,r,{startColor:10})}}var W=(e,t,n,o)=>{const l=(e+(o||"")).toString().includes("%");if("string"==typeof e?[e,t,n,o]=e.match(/(0?\.?\d{1,3})%?\b/g).map(Number):void 0!==o&&(o=parseFloat(o)),"number"!=typeof e||"number"!=typeof t||"number"!=typeof n||e>255||t>255||n>255)throw new TypeError("Expected three numbers below 256");if("number"==typeof o){if(!l&&o>=0&&o<=1)o=Math.round(255*o);else{if(!(l&&o>=0&&o<=100))throw new TypeError(`Expected alpha value (${o}) as a fraction or percentage`);o=Math.round(255*o/100)}o=(256|o).toString(16).slice(1)}else o="";return(n|t<<8|e<<16|1<<24).toString(16).slice(1)+o};const Z=new RegExp("[^#a-f\\d]","gi"),ee=new RegExp("^#?[a-f\\d]{3}[a-f\\d]?$|^#?[a-f\\d]{6}([a-f\\d]{2})?$","i");function te(e,t,n){const o=e.slice();return o[30]=t[n],o}function ne(e,t,n){const o=e.slice();return o[27]=t[n],o[28]=t,o[29]=n,o}function oe(e){let t,n,o,l,r,c,s=("default"===e[27].type||"button"===e[27].type)&&le(e),i="slider"===e[27].type&&re(e),d="check"===e[27].type&&ce(e),f="text"===e[27].type&&se(e),m="color"===e[27].type&&ae(e);return{c(){s&&s.c(),t=v(),i&&i.c(),n=v(),d&&d.c(),o=v(),f&&f.c(),l=v(),m&&m.c(),r=p()},m(e,u){s&&s.m(e,u),a(e,t,u),i&&i.m(e,u),a(e,n,u),d&&d.m(e,u),a(e,o,u),f&&f.m(e,u),a(e,l,u),m&&m.m(e,u),a(e,r,u),c=!0},p(e,c){"default"===e[27].type||"button"===e[27].type?s?s.p(e,c):(s=le(e),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null),"slider"===e[27].type?i?i.p(e,c):(i=re(e),i.c(),i.m(n.parentNode,n)):i&&(i.d(1),i=null),"check"===e[27].type?d?d.p(e,c):(d=ce(e),d.c(),d.m(o.parentNode,o)):d&&(d.d(1),d=null),"text"===e[27].type?f?f.p(e,c):(f=se(e),f.c(),f.m(l.parentNode,l)):f&&(f.d(1),f=null),"color"===e[27].type?m?(m.p(e,c),4&c[0]&&Y(m,1)):(m=ae(e),m.c(),Y(m,1),m.m(r.parentNode,r)):m&&(R(),P(m,1,1,()=>{m=null}),I())},i(e){c||(Y(m),c=!0)},o(e){P(m),c=!1},d(e){s&&s.d(e),e&&u(t),i&&i.d(e),e&&u(n),d&&d.d(e),e&&u(o),f&&f.d(e),e&&u(l),m&&m.d(e),e&&u(r)}}}function le(e){let t,n,o,l,r,i=e[27].label+"";function v(...t){return e[15](e[27],e[29],...t)}return{c(){t=d("item"),n=f(i),h(t,"class",o=c("button"===e[27].type?"button":"")+" svelte-1kj68va")},m(e,o){a(e,t,o),s(t,n),l||(r=m(t,"click",v),l=!0)},p(l,r){e=l,4&r[0]&&i!==(i=e[27].label+"")&&g(n,i),4&r[0]&&o!==(o=c("button"===e[27].type?"button":"")+" svelte-1kj68va")&&h(t,"class",o)},d(e){e&&u(t),l=!1,r()}}}function re(e){let t,n,l,r,c,i,p,b,k,x,$=e[27].label+"";function w(){e[16].call(i,e[27])}function E(...t){return e[17](e[27],e[29],...t)}function j(...t){return e[18](e[27],e[29],...t)}return{c(){t=d("item"),n=d("div"),l=f($),r=v(),c=d("div"),i=d("input"),h(n,"class","label svelte-1kj68va"),h(i,"type","range"),h(i,"min",p=e[27].min),h(i,"max",b=e[27].max),h(i,"class","svelte-1kj68va"),h(c,"class","svelte-1kj68va"),h(t,"class","slider svelte-1kj68va")},m(o,u){a(o,t,u),s(t,n),s(n,l),s(t,r),s(t,c),s(c,i),y(i,e[27].value),k||(x=[m(i,"change",w),m(i,"input",w),m(t,"click",E),m(t,"wheel",j),m(t,"mouseenter",e[4]),m(t,"mouseleave",e[5])],k=!0)},p(t,n){e=t,4&n[0]&&$!==($=e[27].label+"")&&g(l,$),4&n[0]&&p!==(p=e[27].min)&&h(i,"min",p),4&n[0]&&b!==(b=e[27].max)&&h(i,"max",b),4&n[0]&&y(i,e[27].value)},d(e){e&&u(t),k=!1,o(x)}}}function ce(e){let t,n,l,r,c,i,p,y=e[27].label+"";function b(){e[19].call(c,e[27])}function k(...t){return e[20](e[27],e[29],...t)}return{c(){t=d("item"),n=d("span"),l=f(y),r=v(),c=d("input"),h(n,"class","label svelte-1kj68va"),h(c,"type","checkbox"),h(c,"class","svelte-1kj68va"),h(t,"class","check svelte-1kj68va")},m(o,u){a(o,t,u),s(t,n),s(n,l),s(t,r),s(t,c),c.checked=e[27].value,i||(p=[m(c,"change",b),m(t,"click",k)],i=!0)},p(t,n){e=t,4&n[0]&&y!==(y=e[27].label+"")&&g(l,y),4&n[0]&&(c.checked=e[27].value)},d(e){e&&u(t),i=!1,o(p)}}}function se(e){let t,n,l,r,c,i,p,b,k,x=e[27].label+"";function $(){e[21].call(i,e[27])}function w(...t){return e[22](e[27],e[29],...t)}return{c(){t=d("item"),n=d("div"),l=f(x),r=v(),c=d("div"),i=d("input"),h(n,"class","label svelte-1kj68va"),h(i,"type","text"),h(i,"placeholder",p=e[27].placeholder||""),h(i,"autocomplete","off"),h(i,"autocorrect","off"),h(i,"autocapitalize","off"),h(i,"spellcheck","false"),h(i,"class","svelte-1kj68va"),h(c,"class","svelte-1kj68va"),h(t,"class","text svelte-1kj68va")},m(o,u){a(o,t,u),s(t,n),s(n,l),s(t,r),s(t,c),s(c,i),y(i,e[27].value),b||(k=[m(i,"input",$),m(t,"click",w)],b=!0)},p(t,n){e=t,4&n[0]&&x!==(x=e[27].label+"")&&g(l,x),4&n[0]&&p!==(p=e[27].placeholder||"")&&h(i,"placeholder",p),4&n[0]&&i.value!==e[27].value&&y(i,e[27].value)},d(e){e&&u(t),b=!1,o(k)}}}function ae(e){let t,n,o,l,r,c,i,p,y,b=e[27].label+"",k=!e[27].restrict&&ue(e),x=e[27].restrict instanceof Array&&ie(e);function $(...t){return e[25](e[27],e[29],...t)}return{c(){t=d("item"),n=d("div"),o=f(b),l=v(),k&&k.c(),r=v(),x&&x.c(),c=v(),h(n,"class","label svelte-1kj68va"),h(t,"class","color svelte-1kj68va")},m(e,u){a(e,t,u),s(t,n),s(n,o),s(t,l),k&&k.m(t,null),s(t,r),x&&x.m(t,null),s(t,c),i=!0,p||(y=m(t,"click",$),p=!0)},p(n,l){e=n,(!i||4&l[0])&&b!==(b=e[27].label+"")&&g(o,b),e[27].restrict?k&&(R(),P(k,1,1,()=>{k=null}),I()):k?(k.p(e,l),4&l[0]&&Y(k,1)):(k=ue(e),k.c(),Y(k,1),k.m(t,r)),e[27].restrict instanceof Array?x?x.p(e,l):(x=ie(e),x.c(),x.m(t,c)):x&&(x.d(1),x=null)},i(e){i||(Y(k),i=!0)},o(e){P(k),i=!1},d(e){e&&u(t),k&&k.d(),x&&x.d(),p=!1,y()}}}function ue(e){let t,n;const o=new V({props:{startColor:e[27].value?"string"==typeof e[27].value?e[27].value:"#"+W(e[27].value.r||0,e[27].value.g||0,e[27].value.b||0):void 0}});return o.$on("colorChange",(function(...t){return e[23](e[27],...t)})),{c(){var e;t=d("div"),(e=o.$$.fragment)&&e.c(),h(t,"class","color-picker svelte-1kj68va")},m(e,l){a(e,t,l),z(o,t,null),n=!0},p(t,n){e=t;const l={};4&n[0]&&(l.startColor=e[27].value?"string"==typeof e[27].value?e[27].value:"#"+W(e[27].value.r||0,e[27].value.g||0,e[27].value.b||0):void 0),o.$set(l)},i(e){n||(Y(o.$$.fragment,e),n=!0)},o(e){P(o.$$.fragment,e),n=!1},d(e){e&&u(t),O(o)}}}function ie(e){let t,n,o,l,r,c=e[27].restrict,f=[];for(let t=0;t<c.length;t+=1)f[t]=de(te(e,c,t));return{c(){t=d("div"),n=d("div"),o=d("div"),l=v(),r=d("div");for(let e=0;e<f.length;e+=1)f[e].c();h(o,"class","color-restrict-preview svelte-1kj68va"),b(o,"background-color",e[27].value?"string"==typeof e[27].value?e[27].value:"#"+W(e[27].value.r,e[27].value.g,e[27].value.b,e[27].value.a):"transparent"),h(n,"class","color-restrict-entry svelte-1kj68va"),h(t,"class","color-restrict-preview svelte-1kj68va"),h(r,"class","color-restrict svelte-1kj68va")},m(e,c){a(e,t,c),s(t,n),s(n,o),a(e,l,c),a(e,r,c);for(let e=0;e<f.length;e+=1)f[e].m(r,null)},p(e,t){if(4&t[0]&&b(o,"background-color",e[27].value?"string"==typeof e[27].value?e[27].value:"#"+W(e[27].value.r,e[27].value.g,e[27].value.b,e[27].value.a):"transparent"),260&t[0]){let n;for(c=e[27].restrict,n=0;n<c.length;n+=1){const o=te(e,c,n);f[n]?f[n].p(o,t):(f[n]=de(o),f[n].c(),f[n].m(r,null))}for(;n<f.length;n+=1)f[n].d(1);f.length=c.length}},d(e){e&&u(t),e&&u(l),e&&u(r),i(f,e)}}}function de(e){let t,n,o,l,r;function c(...t){return e[24](e[27],e[30],...t)}return{c(){t=d("div"),n=d("div"),o=v(),h(n,"class","color-restrict-entry-inner svelte-1kj68va"),b(n,"background-color","string"==typeof e[30]?e[30]:"#"+W(e[30].r||0,e[30].g||0,e[30].b||0)),h(t,"class","color-restrict-entry svelte-1kj68va")},m(e,u){a(e,t,u),s(t,n),s(t,o),l||(r=m(n,"click",c),l=!0)},p(t,o){e=t,4&o[0]&&b(n,"background-color","string"==typeof e[30]?e[30]:"#"+W(e[30].r||0,e[30].g||0,e[30].b||0))},d(e){e&&u(t),l=!1,r()}}}function fe(e){let t,n,o=e[27].visible&&oe(e);return{c(){o&&o.c(),t=p()},m(e,l){o&&o.m(e,l),a(e,t,l),n=!0},p(e,n){e[27].visible?o?(o.p(e,n),4&n[0]&&Y(o,1)):(o=oe(e),o.c(),Y(o,1),o.m(t.parentNode,t)):o&&(R(),P(o,1,1,()=>{o=null}),I())},i(e){n||(Y(o),n=!0)},o(e){P(o),n=!1},d(e){o&&o.d(e),e&&u(t)}}}function ve(e){let t,n,o,l,r,p,m,y=e[2],b=[];for(let t=0;t<y.length;t+=1)b[t]=fe(ne(e,y,t));const k=e=>P(b[e],1,1,()=>{b[e]=null});return{c(){t=d("main"),n=d("main-wrap"),o=d("item"),l=f(e[1]),r=v();for(let e=0;e<b.length;e+=1)b[e].c();var s,a,u;h(o,"class","title svelte-1kj68va"),u="svelte-1kj68va",(a="class")in(s=n)?s[a]=u:h(s,a,u),h(t,"class",p=c(e[0].split("|").map(pe).join(" "))+" svelte-1kj68va")},m(c,u){a(c,t,u),s(t,n),s(n,o),s(o,l),s(n,r);for(let e=0;e<b.length;e+=1)b[e].m(n,null);e[26](t),m=!0},p(e,o){if((!m||2&o[0])&&g(l,e[1]),500&o[0]){let t;for(y=e[2],t=0;t<y.length;t+=1){const l=ne(e,y,t);b[t]?(b[t].p(l,o),Y(b[t],1)):(b[t]=fe(l),b[t].c(),Y(b[t],1),b[t].m(n,null))}for(R(),t=y.length;t<b.length;t+=1)k(t);I()}(!m||1&o[0]&&p!==(p=c(e[0].split("|").map(pe).join(" "))+" svelte-1kj68va"))&&h(t,"class",p)},i(e){if(!m){for(let e=0;e<y.length;e+=1)Y(b[e]);m=!0}},o(e){b=b.filter(Boolean);for(let e=0;e<b.length;e+=1)P(b[e]);m=!1},d(n){n&&u(t),i(b,n),e[26](null)}}}const pe=e=>"float-"+e;function me(e,t,n){let{float:o="left|top"}=t,{title:l="Untitled ESX Menu"}=t,{items:r=[]}=t,c=[],s=null,a=!1;window.addEventListener("message",e=>{const t=e.data;switch(t.action){case"set":n(0,o=t.data.float||"left|top"),n(1,l=t.data.title||"Untitled ESX Menu"),n(9,r=t.data.items||[]);break;case"set_item":n(9,r[t.index][t.prop]=t.val,r),n(9,r=[...r])}});const u=()=>{n(2,c.length=0,c);for(let e=0;e<r.length;e++)(e=>{"color"===r[e].type&&r[e].restrict instanceof Array&&void 0===r[e].value&&n(9,r[e].value=r[e].restrict[0]||"#FFF",r),n(2,c[e]=new Proxy(r[e],{get:(e,t)=>e[t],set:(t,o,l)=>(n(9,r[e][o]=l,r),window.parent.postMessage({action:"item.change",index:e,prop:o,val:l},"*"),!0),has:(e,t)=>void 0!==e[t],ownKeys:e=>Object.keys(e)}),c)})(e);n(2,c=[...c])},i=e=>{window.parent.postMessage({action:"mouse.in"},"*")},d=e=>{window.parent.postMessage({action:"mouse.out"},"*")},f=e=>{if(a)return console.log("block"),e.preventDefault(),e.stopPropagation(),!1},v=(e,t,n)=>{window.parent.postMessage({action:"item.click",index:n},"*")},p=(e,t,n)=>{e.deltaY>0&&t.value>t.min?t.value--:e.deltaY<0&&t.value<t.max&&t.value++},m=(e,t)=>{if("string"==typeof t){const n=((e,t={})=>{if("string"!=typeof e||Z.test(e)||!ee.test(e))throw new TypeError("Expected a valid hex string");let n=1;8===(e=e.replace(/^#/,"")).length&&(n=parseInt(e.slice(6,8),16)/255,e=e.slice(0,6)),4===e.length&&(n=parseInt(e.slice(3,4).repeat(2),16)/255,e=e.slice(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);const o=parseInt(e,16),l=o>>16,r=o>>8&255,c=255&o;return"array"===t.format?[l,r,c,n]:{red:l,green:r,blue:c,alpha:n}})(t);e.value={r:n.red,g:n.green,b:n.blue,a:n.alpha}}else e.value=t};var h;w(()=>{window.addEventListener("scroll",f),window.parent.postMessage({action:"ready"},"*"),s.addEventListener("mouseenter",i),s.addEventListener("mouseleave",d)}),h=()=>{window.removeEventListener("scroll",f),s.removeEventListener("mouseenter",i),s.removeEventListener("mouseleave",d)},$().$$.on_destroy.push(h),function(e){$().$$.before_update.push(e)}(u);return e.$set=e=>{"float"in e&&n(0,o=e.float),"title"in e&&n(1,l=e.title),"items"in e&&n(9,r=e.items)},[o,l,c,s,e=>{a=!0},e=>{a=!1},v,p,m,r,a,u,i,d,f,(e,t,n)=>v(0,0,t),function(e){var t;e.value=""===(t=this.value)?void 0:+t,n(2,c)},(e,t,n)=>v(0,0,t),(e,t,n)=>p(n,e),function(e){e.value=this.checked,n(2,c)},(e,t,o)=>{v(0,0,t),n(2,e.value=!e.value,c)},function(e){e.value=this.value,n(2,c)},(e,t,n)=>v(0,0,t),(e,t)=>m(e,t.detail),(e,t,n)=>m(e,t),(e,t,n)=>v(0,0,t),function(e){q[e?"unshift":"push"](()=>{n(3,s=e)})}]}return new class extends G{constructor(e){super(),D(this,e,me,ve,r,{float:0,title:1,items:9},[-1,-1])}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
