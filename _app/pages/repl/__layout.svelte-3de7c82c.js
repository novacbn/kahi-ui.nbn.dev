import{S as t,i as e,s,L as $,j as n,m as r,o as a,x as o,u as c,v as l,N as p,O as f,k as u,n as m,f as d,d as i,t as g,g as x,T as w,l as y,E as h,aB as v,al as j,K as k,a4 as E,a5 as L,a6 as b,a7 as J}from"../../chunks/vendor-b0ddde81.js";import{f as P}from"../../chunks/snippet-b5034dfc.js";function R(t){let e;return{c(){e=g("Unsupported")},l(t){e=x(t,"Unsupported")},m(t,s){d(t,e,s)},d(t){t&&i(e)}}}function U(t){let e;return{c(){e=g("does not")},l(t){e=x(t,"does not")},m(t,s){d(t,e,s)},d(t){t&&i(e)}}}function Y(t){let e;return{c(){e=g("Javascript")},l(t){e=x(t,"Javascript")},m(t,s){d(t,e,s)},d(t){t&&i(e)}}}function B(t){let e;return{c(){e=g("REPL")},l(t){e=x(t,"REPL")},m(t,s){d(t,e,s)},d(t){t&&i(e)}}}function K(t){let e,s,$,p,f,u,m,y;return s=new w({props:{is:"strong",$$slots:{default:[U]},$$scope:{ctx:t}}}),p=new w({props:{is:"strong",$$slots:{default:[Y]},$$scope:{ctx:t}}}),u=new w({props:{is:"strong",$$slots:{default:[B]},$$scope:{ctx:t}}}),{c(){e=g("Your client "),n(s.$$.fragment),$=g(" support "),n(p.$$.fragment),f=g(",\n        failed to load "),n(u.$$.fragment),m=g(".")},l(t){e=x(t,"Your client "),r(s.$$.fragment,t),$=x(t," support "),r(p.$$.fragment,t),f=x(t,",\n        failed to load "),r(u.$$.fragment,t),m=x(t,".")},m(t,n){d(t,e,n),a(s,t,n),d(t,$,n),a(p,t,n),d(t,f,n),a(u,t,n),d(t,m,n),y=!0},p(t,e){const $={};1&e&&($.$$scope={dirty:e,ctx:t}),s.$set($);const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),p.$set(n);const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),u.$set(r)},i(t){y||(o(s.$$.fragment,t),o(p.$$.fragment,t),o(u.$$.fragment,t),y=!0)},o(t){c(s.$$.fragment,t),c(p.$$.fragment,t),c(u.$$.fragment,t),y=!1},d(t){t&&i(e),l(s,t),t&&i($),l(p,t),t&&i(f),l(u,t),t&&i(m)}}}function N(t){let e,s,$,g;return e=new p({props:{$$slots:{default:[R]},$$scope:{ctx:t}}}),$=new f({props:{$$slots:{default:[K]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment),s=u(),n($.$$.fragment)},l(t){r(e.$$.fragment,t),s=m(t),r($.$$.fragment,t)},m(t,n){a(e,t,n),d(t,s,n),a($,t,n),g=!0},p(t,s){const n={};1&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n);const r={};1&s&&(r.$$scope={dirty:s,ctx:t}),$.$set(r)},i(t){g||(o(e.$$.fragment,t),o($.$$.fragment,t),g=!0)},o(t){c(e.$$.fragment,t),c($.$$.fragment,t),g=!1},d(t){l(e,t),t&&i(s),l($,t)}}}function O(t){let e,s;return e=new $({props:{palette:"negative",height:"viewport-100",$$slots:{default:[N]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment)},l(t){r(e.$$.fragment,t)},m(t,$){a(e,t,$),s=!0},p(t,[s]){const $={};1&s&&($.$$scope={dirty:s,ctx:t}),e.$set($)},i(t){s||(o(e.$$.fragment,t),s=!0)},o(t){c(e.$$.fragment,t),s=!1},d(t){l(e,t)}}}class S extends t{constructor(t){super(),e(this,t,null,O,s,{})}}function T(t){let e,s;return e=new S({}),{c(){n(e.$$.fragment)},l(t){r(e.$$.fragment,t)},m(t,$){a(e,t,$),s=!0},p:k,i(t){s||(o(e.$$.fragment,t),s=!0)},o(t){c(e.$$.fragment,t),s=!1},d(t){l(e,t)}}}function q(t){let e;const s=t[3].default,$=E(s,t,t[2],null);return{c(){$&&$.c()},l(t){$&&$.l(t)},m(t,s){$&&$.m(t,s),e=!0},p(t,n){$&&$.p&&(!e||4&n)&&L($,s,t,t[2],e?J(s,t[2],n,null):b(t[2]),null)},i(t){e||(o($,t),e=!0)},o(t){c($,t),e=!1},d(t){$&&$.d(t)}}}function z(t){let e,s,$,n;const r=[q,T],a=[];return e=0,s=a[0]=r[0](t),{c(){s.c(),$=y()},l(t){s.l(t),$=y()},m(t,e){a[0].m(t,e),d(t,$,e),n=!0},p(t,[e]){s.p(t,e)},i(t){n||(o(s),n=!0)},o(t){c(s),n=!1},d(t){a[0].d(t),t&&i($)}}}function A(t,e,s){let $,n;h(t,P,(t=>s(1,$=t)));let{$$slots:r={},$$scope:a}=e;const o=v();return h(t,o,(t=>s(4,n=t))),t.$$set=t=>{"$$scope"in t&&s(2,a=t.$$scope)},t.$$.update=()=>{2&t.$$.dirty&&j(o,n=$,n)},[o,$,a,r]}class C extends t{constructor(t){super(),e(this,t,A,z,s,{})}}export{C as default};
