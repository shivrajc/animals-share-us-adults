var de=Object.defineProperty;var he=(e,t,n)=>t in e?de(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var B=(e,t,n)=>(he(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const v of c.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&l(v)}).observe(document,{childList:!0,subtree:!0});function n(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(s){if(s.ep)return;s.ep=!0;const c=n(s);fetch(s.href,c)}})();function _(){}function ce(e){return e()}function W(){return Object.create(null)}function T(e){e.forEach(ce)}function fe(e){return typeof e=="function"}function k(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function me(e){return Object.keys(e).length===0}function pe(e,...t){if(e==null){for(const l of t)l(void 0);return _}const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function ge(e,t,n){e.$$.on_destroy.push(pe(t,n))}function m(e,t){e.appendChild(t)}function M(e,t,n){e.insertBefore(t,n||null)}function A(e){e.parentNode&&e.parentNode.removeChild(e)}function U(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function $(e){return document.createElement(e)}function H(e){return document.createTextNode(e)}function L(){return H(" ")}function b(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function _e(e){return Array.from(e.childNodes)}function X(e,t){t=""+t,e.data!==t&&(e.data=t)}let Y;function P(e){Y=e}const E=[],Z=[];let N=[];const ee=[],ve=Promise.resolve();let F=!1;function $e(){F||(F=!0,ve.then(ue))}function G(e){N.push(e)}const D=new Set;let j=0;function ue(){if(j!==0)return;const e=Y;do{try{for(;j<E.length;){const t=E[j];j++,P(t),be(t.$$)}}catch(t){throw E.length=0,j=0,t}for(P(null),E.length=0,j=0;Z.length;)Z.pop()();for(let t=0;t<N.length;t+=1){const n=N[t];D.has(n)||(D.add(n),n())}N.length=0}while(E.length);for(;ee.length;)ee.pop()();F=!1,D.clear(),P(e)}function be(e){if(e.fragment!==null){e.update(),T(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(G)}}function ye(e){const t=[],n=[];N.forEach(l=>e.indexOf(l)===-1?t.push(l):n.push(l)),n.forEach(l=>l()),N=t}const I=new Set;let we;function K(e,t){e&&e.i&&(I.delete(e),e.i(t))}function te(e,t,n,l){if(e&&e.o){if(I.has(e))return;I.add(e),we.c.push(()=>{I.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}else l&&l()}function C(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function ne(e){e&&e.c()}function R(e,t,n){const{fragment:l,after_update:s}=e.$$;l&&l.m(t,n),G(()=>{const c=e.$$.on_mount.map(ce).filter(fe);e.$$.on_destroy?e.$$.on_destroy.push(...c):T(c),e.$$.on_mount=[]}),s.forEach(G)}function V(e,t){const n=e.$$;n.fragment!==null&&(ye(n.after_update),T(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function xe(e,t){e.$$.dirty[0]===-1&&(E.push(e),$e(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function J(e,t,n,l,s,c,v=null,d=[-1]){const h=Y;P(e);const r=e.$$={fragment:null,ctx:[],props:c,update:_,not_equal:s,bound:W(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:W(),dirty:d,skip_bound:!1,root:t.target||h.$$.root};v&&v(r.root);let y=!1;if(r.ctx=n?n(e,t.props||{},(f,i,...w)=>{const u=w.length?w[0]:i;return r.ctx&&s(r.ctx[f],r.ctx[f]=u)&&(!r.skip_bound&&r.bound[f]&&r.bound[f](u),y&&xe(e,f)),i}):[],r.update(),y=!0,T(r.before_update),r.fragment=l?l(r.ctx):!1,t.target){if(t.hydrate){const f=_e(t.target);r.fragment&&r.fragment.l(f),f.forEach(A)}else r.fragment&&r.fragment.c();t.intro&&K(e.$$.fragment),R(e,t.target,t.anchor),ue()}P(h)}class Q{constructor(){B(this,"$$");B(this,"$$set")}$destroy(){V(this,1),this.$destroy=_}$on(t,n){if(!fe(n))return _;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const s=l.indexOf(n);s!==-1&&l.splice(s,1)}}$set(t){this.$$set&&!me(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const qe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(qe);const O=[];function Ae(e,t=_){let n;const l=new Set;function s(d){if(k(e,d)&&(e=d,n)){const h=!O.length;for(const r of l)r[1](),O.push(r,e);if(h){for(let r=0;r<O.length;r+=2)O[r][0](O[r+1]);O.length=0}}}function c(d){s(d(e))}function v(d,h=_){const r=[d,h];return l.add(r),l.size===1&&(n=t(s,c)||_),d(e),()=>{l.delete(r),l.size===0&&n&&(n(),n=null)}}return{set:s,update:c,subscribe:v}}const Se=Ae([{animal:"Chimpanzee",total:75,male:68,female:82},{animal:"Dog",total:73,male:67,female:78},{animal:"Cat",total:70,male:62,female:78},{animal:"Dolphin",total:62,male:51,female:74},{animal:"Horse",total:55,male:45,female:63},{animal:"Octopus",total:24,male:22,female:26},{animal:"Deer",total:20,male:20,female:19},{animal:"Salmon",total:12,male:16,female:9},{animal:"Cow",total:11,male:12,female:10},{animal:"Chicken",total:7,male:7,female:8}]);function je(e){let t;return{c(){t=$("div"),t.innerHTML='<span class="item svelte-14m7je2"><a href="https://shivrajc.github.io/" class="svelte-14m7je2">Shivaraj</a></span> <span class="divider svelte-14m7je2">●</span> <span class="item svelte-14m7je2"><a href="https://makeovermonday.co.uk/" class="svelte-14m7je2">Source: MakeoverMonday | YouGov</a> | 1000 US Adults (18+) surveyed online Apr 5-7, 2023</span>',b(t,"class","footer svelte-14m7je2")},m(n,l){M(n,t,l)},p:_,i:_,o:_,d(n){n&&A(t)}}}class Oe extends Q{constructor(t){super(),J(this,t,null,je,k,{})}}function Ee(e){let t;return{c(){t=$("div"),t.innerHTML='<p class="title svelte-1a5yw4l">3 out of 4 Americans say it&#39;s wrong to eat chimps, dogs, and cats</p> <p class="sub-title svelte-1a5yw4l">Share of US adults say it&#39;s morally <span class="svelte-1a5yw4l">unacceptable</span> to eat the following animals under normal circumstances</p>',b(t,"class","header svelte-1a5yw4l")},m(n,l){M(n,t,l)},p:_,i:_,o:_,d(n){n&&A(t)}}}class Le extends Q{constructor(t){super(),J(this,t,null,Ee,k,{})}}function le(e,t,n){const l=e.slice();return l[1]=t[n],l}function se(e,t,n){const l=e.slice();return l[4]=t[n],l}function re(e,t,n){const l=e.slice();return l[4]=t[n],l}function oe(e){let t;return{c(){t=$("div"),b(t,"class","cell empty svelte-q8fttp")},m(n,l){M(n,t,l)},p:_,d(n){n&&A(t)}}}function ie(e){let t;return{c(){t=$("div"),t.innerHTML="",b(t,"class","cell fill svelte-q8fttp")},m(n,l){M(n,t,l)},p:_,d(n){n&&A(t)}}}function ae(e){let t,n,l,s=e[1].animal+"",c,v,d,h=e[1].total+"",r,y,f,i,w,u,x=C(Array.from({length:100-e[1].total})),p=[];for(let a=0;a<x.length;a+=1)p[a]=oe(re(e,x,a));let S=C(Array.from({length:e[1].total})),g=[];for(let a=0;a<S.length;a+=1)g[a]=ie(se(e,S,a));return{c(){t=$("div"),n=$("div"),l=$("span"),c=H(s),v=L(),d=$("span"),r=H(h),y=H("%"),f=L(),i=$("div");for(let a=0;a<p.length;a+=1)p[a].c();w=L();for(let a=0;a<g.length;a+=1)g[a].c();u=L(),b(l,"class","name svelte-q8fttp"),b(d,"class","value svelte-q8fttp"),b(n,"class","row-header svelte-q8fttp"),b(i,"class","waffle-grid svelte-q8fttp"),b(t,"class","row svelte-q8fttp")},m(a,q){M(a,t,q),m(t,n),m(n,l),m(l,c),m(n,v),m(n,d),m(d,r),m(d,y),m(t,f),m(t,i);for(let o=0;o<p.length;o+=1)p[o]&&p[o].m(i,null);m(i,w);for(let o=0;o<g.length;o+=1)g[o]&&g[o].m(i,null);m(t,u)},p(a,q){if(q&1&&s!==(s=a[1].animal+"")&&X(c,s),q&1&&h!==(h=a[1].total+"")&&X(r,h),q&1){x=C(Array.from({length:100-a[1].total}));let o;for(o=0;o<x.length;o+=1){const z=re(a,x,o);p[o]?p[o].p(z,q):(p[o]=oe(),p[o].c(),p[o].m(i,w))}for(;o<p.length;o+=1)p[o].d(1);p.length=x.length}if(q&1){S=C(Array.from({length:a[1].total}));let o;for(o=0;o<S.length;o+=1){const z=se(a,S,o);g[o]?g[o].p(z,q):(g[o]=ie(),g[o].c(),g[o].m(i,null))}for(;o<g.length;o+=1)g[o].d(1);g.length=S.length}},d(a){a&&A(t),U(p,a),U(g,a)}}}function Ce(e){let t,n,l,s,c,v,d,h,r;l=new Le({});let y=C(e[0]),f=[];for(let i=0;i<y.length;i+=1)f[i]=ae(le(e,y,i));return h=new Oe({}),{c(){t=$("main"),n=$("div"),ne(l.$$.fragment),s=L(),c=$("div");for(let i=0;i<f.length;i+=1)f[i].c();v=L(),d=$("div"),ne(h.$$.fragment),b(n,"class","header svelte-q8fttp"),b(c,"class","container svelte-q8fttp"),b(d,"class","footer svelte-q8fttp"),b(t,"class","svelte-q8fttp")},m(i,w){M(i,t,w),m(t,n),R(l,n,null),m(t,s),m(t,c);for(let u=0;u<f.length;u+=1)f[u]&&f[u].m(c,null);m(t,v),m(t,d),R(h,d,null),r=!0},p(i,[w]){if(w&1){y=C(i[0]);let u;for(u=0;u<y.length;u+=1){const x=le(i,y,u);f[u]?f[u].p(x,w):(f[u]=ae(x),f[u].c(),f[u].m(c,null))}for(;u<f.length;u+=1)f[u].d(1);f.length=y.length}},i(i){r||(K(l.$$.fragment,i),K(h.$$.fragment,i),r=!0)},o(i){te(l.$$.fragment,i),te(h.$$.fragment,i),r=!1},d(i){i&&A(t),V(l),U(f,i),V(h)}}}function Ne(e,t,n){let l;return ge(e,Se,s=>n(0,l=s)),[l]}class Me extends Q{constructor(t){super(),J(this,t,Ne,Ce,k,{})}}new Me({target:document.getElementById("app")});