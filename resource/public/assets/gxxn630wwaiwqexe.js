import{a7 as E,a1 as G,r as d,m as e,a5 as c,a2 as P,bd as z}from"./cbv020t7gzp4f872.js";import{d as A,G as L,I as U}from"./gpe91l6ql3o0s610.js";import{a as _}from"./kq3cjnjkkiu42wsi.js";import{m as y}from"./j1mltnb4g3et1nfv.js";const $=5,D="Default";function R(i){const n={};return i.forEach(o=>{const a=o.group??D;n[a]||(n[a]=[]),n[a].push(o)}),n}function K({tagOptions:i,onSubmit:n,onMoreClicked:o,onCancel:a,maxInlineTags:N=$,modalOnly:u=!1,modalTitle:M,multiple:F,children:I,allowEmptySubmit:S=!1}){const C=G(),[m,r]=d.useState(u?"modal":"inline"),[l,h]=d.useState([]),[x,B]=d.useState(void 0),b=d.useCallback(s=>{n(s),r("submitted"),setTimeout(()=>{r("closed")},1500)},[n]),p=d.useMemo(()=>A(b,500),[b]),g=s=>{let t=[];return F?t=l.includes(s)?l.filter(w=>w!==s):[...l,s]:t=[s],h(t),t},v=()=>{b({tags:l,textFeedback:x,tagChoices:k,source:"modal"})},k=i.map(s=>s.value),j=R(i),T=Object.keys(j);return e.jsxs(e.Fragment,{children:[!u&&e.jsx(L,{children:m!=="closed"&&e.jsxs(y.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},className:"min-h-[96px] w-full",children:[m==="submitted"&&e.jsx(y.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},className:"text-center",children:e.jsx("div",{className:"inline-flex rounded-lg border border-token-border-light p-4",children:e.jsx("div",{className:"text-sm",children:e.jsx(c,{id:"ConversationTurnInlineMessageFeedback.submitted",defaultMessage:"Thanks for your feedback!"})})})}),["inline","modal"].includes(m)&&e.jsxs("div",{className:"relative mt-2 flex w-full flex-col gap-3 rounded-lg border border-token-border-light p-4",children:[e.jsx("button",{className:"absolute right-4 top-4 text-sm font-bold",onClick:()=>{r("closed"),p.cancel(),a==null||a()},children:e.jsx(_,{className:"icon-md text-token-text-secondary hover:text-token-text-primary"})}),e.jsx("div",{className:"text-sm text-token-text-secondary",children:e.jsx(c,{id:"ConversationTurnInlineMessageFeedback.inlineTitle",defaultMessage:"Tell us more:"})}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[i.slice(0,N).map(s=>e.jsx(f,{$selected:l.includes(s.value),onClick:()=>{const t=g(s.value);p({tags:t,tagChoices:k,source:"inline"})},children:s.label},s.value)),e.jsx(f,{onClick:()=>{o==null||o(),p.cancel(),r("modal")},children:e.jsx(c,{id:"ConversationTurnInlineMessageFeedback.moreOptions.1",defaultMessage:"More..."})})]})]})]},"main")}),m==="modal"&&e.jsxs(P,{type:"success",isOpen:!0,className:"max-w-xl",size:"custom",title:M??e.jsx(c,{id:"ConversationTurnInlineMessageFeedback.modalTitle",defaultMessage:"Provide additional feedback"}),onClose:()=>{h([]),r(u?"closed":"inline"),u&&(a==null||a())},showCloseButton:!0,primaryButton:e.jsx(z,{color:"primary",disabled:l.length===0&&!x&&!S,onClick:v,children:e.jsx(c,{id:"ConversationTurnInlineMessageFeedback.submit",defaultMessage:"Submit"})}),rootClassName:"z-50",children:[e.jsx("div",{className:"flex flex-col gap-6",children:T.map(s=>e.jsxs("div",{children:[T.length>1&&e.jsx("div",{className:"mb-3 text-sm font-semibold",children:s}),e.jsx("div",{className:"flex flex-wrap gap-3",children:j[s].map(t=>e.jsx(f,{$selected:l.includes(t.value),onClick:()=>g(t.value),children:t.label},t.value))},s)]},s))}),e.jsx(U,{name:"feedback",type:"text",className:"mt-6",placeholder:C.formatMessage({id:"ConversationTurnInlineMessageFeedback.feedbackPlaceholder.1",defaultMessage:"(Optional) Feel free to add specific details"}),value:x??"",onChange:s=>B(s.target.value),onPressEnter:v}),I]})]})}const f=E.button`
  rounded-lg border border-token-border-light px-3 py-1 text-sm text-token-text-secondary hover:text-token-text-primary hover:bg-token-main-surface-secondary
  ${({$selected:i})=>i&&"!bg-token-text-primary !text-token-main-surface-primary"}
`;export{K as I,f as T};
//# sourceMappingURL=gxxn630wwaiwqexe.js.map
