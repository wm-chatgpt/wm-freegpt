import{a1 as h,r as g,m as e,a2 as x,a5 as m,dN as R,bN as f}from"./cbv020t7gzp4f872.js";import{b as v}from"./eprwd5wd9a7hvvfw.js";import{b as j}from"./lw9lle2awfx0m3zh.js";import{aW as z,aX as G,aY as M,aZ as y,a_ as T,a$ as b}from"./gpe91l6ql3o0s610.js";import{R as C}from"./jaab2qdql5x1ymip.js";function S({gizmoId:s,onClose:r}){const{data:o}=v(s),{data:t}=y(R.Gizmo),n=h(),i=T(n,s,R.Gizmo);if(t==null)return null;const a=o!=null?`Report ${o.gizmo.display.name}`:"Report";return e.jsx(b,{reasons:t.reasons,submitReport:i,title:a,onClose:r,header:t.header,subHeader:t.header_explanation})}function B({gizmoId:s,clientThreadId:r,onClose:o}){var u,c;const t=h(),n=(u=f("1855896025"))==null?void 0:u.value,i=(c=f("3376455464"))==null?void 0:c.value,a=j(r),[d,p]=g.useState();return!n||!i||d==="gpt"||a==null?e.jsx(S,{gizmoId:s,onClose:o}):d==="conversation"?e.jsx(C,{serverThreadId:a,onClose:o}):e.jsxs(x,{title:t.formatMessage({id:"gizmo.report.selectorModal.title",defaultMessage:"Report"}),onClose:o,isOpen:!0,showCloseButton:!0,type:"success",children:[e.jsx(z,{header:t.formatMessage({id:"gizmo.report.selectorModal.header",defaultMessage:"What would you like to report?"})}),e.jsxs(G,{children:[e.jsx(M,{onClick:l=>{l.preventDefault(),p("conversation")},children:e.jsx(m,{id:"gizmo.report.selectorModal.conversation",defaultMessage:"The conversation"})}),e.jsx(M,{onClick:l=>{l.preventDefault(),p("gpt")},children:e.jsx(m,{id:"gizmo.report.selectorModal.gpt",defaultMessage:"The GPT"})})]})]})}export{S as G,B as a};
//# sourceMappingURL=lz692dfkus5ccwf9.js.map
