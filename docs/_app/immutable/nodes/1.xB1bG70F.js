import{s as S,n as _,c as x}from"../chunks/COSaXkqD.js";import{S as j,i as q,d as u,s as f,a as m,b as d,c as g,e as h,f as v,g as y,h as $,t as E,j as C}from"../chunks/C-K6hAg6.js";import{s as H}from"../chunks/DJfmr4z6.js";const P=()=>{const s=H;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},k={subscribe(s){return P().page.subscribe(s)}};function w(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",l;return{c(){t=$("h1"),o=E(r),n=C(),i=$("p"),l=E(c)},l(e){t=g(e,"H1",{});var a=h(t);o=v(a,r),a.forEach(u),n=y(e),i=g(e,"P",{});var p=h(i);l=v(p,c),p.forEach(u)},m(e,a){m(e,t,a),d(t,o),m(e,n,a),m(e,i,a),d(i,l)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&f(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&f(l,c)},i:_,o:_,d(e){e&&(u(t),u(n),u(i))}}}function z(s,t,r){let o;return x(s,k,n=>r(0,o=n)),[o]}let F=class extends j{constructor(t){super(),q(this,t,z,w,S,{})}};export{F as component};
