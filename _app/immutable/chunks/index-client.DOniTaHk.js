import{_ as p,$ as h,b as u,a0 as k,R as v,c as e,a1 as o,a2 as x,a as y,j as E}from"./runtime.DiR2kL_g.js";function i(t,s){return t===s||(t==null?void 0:t[k])===s}function M(t={},s,c,r){return p(()=>{var a,n;return h(()=>{a=n,n=[],u(()=>{t!==c(...n)&&(s(t,...n),a&&i(c(...a),t)&&s(null,...a))})}),()=>{v(()=>{n&&i(c(...n),t)&&s(null,...n)})}}),t}function S(t){e===null&&o(),x&&e.l!==null?b(e).m.push(t):y(()=>{const s=u(t);if(typeof s=="function")return s})}function $(t,s,{bubbles:c=!1,cancelable:r=!1}={}){return new CustomEvent(t,{detail:s,bubbles:c,cancelable:r})}function T(){const t=e;return t===null&&o(),(s,c,r)=>{var n;const a=(n=t.s.$$events)==null?void 0:n[s];if(a){const l=E(a)?a.slice():[a],f=$(s,c,r);for(const _ of l)_.call(t.x,f);return!f.defaultPrevented}return!0}}function b(t){var s=t.l;return s.u??(s.u={a:[],b:[],m:[]})}export{M as b,T as c,S as o};
