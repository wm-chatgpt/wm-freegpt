const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/oryfbwjd107deeir.js","assets/kkasil63rmfidan7.js","assets/spwglx8qg6louqra.js","assets/root-cpnh8fjk.css"])))=>i.map(i=>d[i]);
import{eh as z,ch as E,bY as F,j as e,E as T,I as H,r as p,ba as P,bh as U,c as L}from"./kkasil63rmfidan7.js";import{C as A}from"./coywfjku9lalq2nv.js";import{P as B}from"./spwglx8qg6louqra.js";import{D as I}from"./lcvurcrum2gl1hvh.js";import{u as J,a as G,U as M,b as X}from"./ghhzd5x9f0mrb7pn.js";import{a as Y}from"./nv6i59p62btvvr0g.js";import{$ as q,B as K,D as g,E as v,F as Q,cA as W}from"./m5ko8xkwcu432ruw.js";import"./kn4ay466vw8pwdsq.js";import"./f8avu24q942gnyhs.js";import"./o9kbfeeefi73xxcs.js";import"./b6emvvdnvz6l5zsn.js";import"./i7tilwvp76zyc05m.js";function Z(t){return z({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M9 9H4v1h5V9z"}},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M5 3l1-1h7l1 1v7l-1 1h-2v2l-1 1H3l-1-1V6l1-1h2V3zm1 2h4l1 1v4h2V3H6v2zm4 1H3v7h7V6z"}}]})(t)}function ee(t){return z({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M9 9H4v1h5V9z"}},{tag:"path",attr:{d:"M7 12V7H6v5h1z"}},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M5 3l1-1h7l1 1v7l-1 1h-2v2l-1 1H3l-1-1V6l1-1h2V3zm1 2h4l1 1v4h2V3H6v2zm4 1H3v7h7V6z"}}]})(t)}const se=E(()=>F(()=>import("./oryfbwjd107deeir.js"),__vite__mapDeps([0,1,2,3])),{ssr:!1});function be({threadId:t,threadUserId:a}){return J(G.isDebugModalOpen)&&e.jsx(T,{isOpen:!0,onClose:()=>M.toggleDebugModalOpen(),type:"success",size:"fullscreen",noPadding:!0,rootClassName:"z-50",children:e.jsx(ne,{threadId:t,threadUserId:a,onClose:()=>M.toggleDebugModalOpen()})})}const te=(t,a)=>{const l=JSON.stringify(a,null,2),r=new Blob([l],{type:"application/json"}),o=window.URL.createObjectURL(r),n=document.createElement("a");n.href=o,n.download=t,n.click(),window.URL.revokeObjectURL(o)},S="<|im_start|>",V="<|im_sep|>",D="<|im_end|>",le="<|fim_suffix|>";function ae({prompt:t}){const a=[];let l=0;for(;;){const r=t.indexOf(S,l);if(r===-1)break;const o=t.indexOf(V,r);if(o===-1)break;let n=t.indexOf(D,o);const d=t.indexOf(le,o);if(d!==-1&&(n===-1||d<n)&&(n=d),n===-1)break;const m=t.substring(r+S.length,o),j=t.substring(o+V.length,n);a.push(e.jsxs("div",{children:[e.jsxs("span",{className:"font-semibold",children:["[",m,"]"]})," ",j]},r)),l=n+D.length}return a}const b=H.div`mb-[-5px] px-2 pb-1 font-semibold uppercase border-b-2 ${({$isSelected:t})=>t?"border-black dark:border-white":"border-transparent"}`;function ne({threadId:t,threadUserId:a,message:l,onClose:r}){var N,y,k;const{sessionUser:o}=X(),[n,d]=p.useState(l?"message":"json"),{data:m,isLoading:j,refetch:R}=Y({threadId:t,threadUserId:a,refetchOnMount:"always"}),s=m==null?void 0:m.thread;if(p.useEffect(()=>{d(l?"message":s!=null&&s.turns.length?`turn${(s==null?void 0:s.turns.length)-1}`:"thread")},[s==null?void 0:s.turns.length,l]),!j&&!s&&!l)return e.jsxs(I,{onClickRetry:()=>R(),children:["Failed to load."," "]});if(j)return e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:"Loading..."});const x=s==null?void 0:s.turns,w=(k=(y=(N=s==null?void 0:s.turns[s.turns.length-1])==null?void 0:N.artifacts__)==null?void 0:y.model_snapshots)==null?void 0:k.default_id,C=a&&t?W(a,t):null;return e.jsx("div",{className:"flex flex-col gap-2 break-words font-mono text-xs",children:e.jsxs(q,{orientation:"vertical",value:n,onValueChange:i=>d(i),children:[e.jsxs(K,{className:"flex items-center justify-center gap-2 px-4 py-1",children:[l&&e.jsx(g,{value:"message",children:e.jsx(b,{$isSelected:n==="message",children:"Message"})},"message"),s&&e.jsx(g,{value:"thread",children:e.jsx(b,{$isSelected:n==="thread",children:"Thread"})},"thread"),x==null?void 0:x.map((i,c)=>{var h,u;return e.jsxs(p.Fragment,{children:[e.jsx(g,{value:`turn${c}`,children:e.jsxs(b,{$isSelected:n===`turn${c}`,children:["Turn[",c,"]"]})},c),(u=(h=i.artifacts__)==null?void 0:h.debug_ddtrace_urls)==null?void 0:u.map(f=>e.jsx(b,{$isSelected:!1,children:e.jsxs("a",{target:"_blank",href:f,className:"text-nowrap",children:["Trace[",c,"] ↗"]})},f))]},c)}),e.jsx("div",{className:"flex-grow"}),w&&e.jsxs(e.Fragment,{children:[e.jsx(_,{name:"Model",id:w})," ",e.jsx("span",{className:"text-gray-500 dark:text-white",children:"|"})]}),o&&e.jsxs(e.Fragment,{children:[e.jsx(_,{name:"User ID",id:o.id})," ",e.jsx("span",{className:"text-gray-500 dark:text-white",children:"|"})]}),C&&e.jsxs(e.Fragment,{children:[e.jsx(_,{name:"Permalink",id:C}),e.jsx("span",{className:"text-gray-500 dark:text-white",children:"|"})]}),s&&e.jsxs(P,{size:"small",color:"secondary",onClick:()=>te("thread.json",s),children:[e.jsx(B,{className:"icon-sm"})," thread.json"]}),e.jsx(U,{onClick:r})]}),x==null?void 0:x.map((i,c)=>{var h,u,f,$;return e.jsxs(v,{value:`turn${c}`,className:"max-h-[calc(100vh-46px)] w-full overflow-y-scroll scroll-smooth",children:[e.jsxs("div",{className:L("flex flex-col gap-1 p-6",i.index%2===0&&"bg-token-main-surface-tertiary"),children:[e.jsx(ae,{prompt:((f=(u=(h=i.artifacts__)==null?void 0:h.debug_info)==null?void 0:u.main_model_response)==null?void 0:f.prompt_string)??""}),e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold",children:"[assistant]"})," ",($=i.model_response)==null?void 0:$.text]})]})," "]},c)}),s&&e.jsx(v,{value:"thread",className:"max-h-[calc(100vh-46px)] w-full overflow-y-scroll scroll-smooth p-6",children:e.jsx(O,{data:s,collapsed:4})}),l&&e.jsx(v,{value:"message",className:"max-h-[calc(100vh-46px)] w-full overflow-y-scroll scroll-smooth p-6",children:e.jsx(O,{data:l,collapsed:4})})]},(s==null?void 0:s.turns.length)??"message")})}function O({data:t,collapsed:a}){const[l,r]=p.useState(a??!0);return e.jsxs("div",{className:"flex flex-col items-start gap-1",children:[e.jsx("button",{onClick:()=>r(!l),className:"flex items-center gap-1",children:l?e.jsxs(e.Fragment,{children:[e.jsx(ee,{size:14})," Expand all"]}):e.jsxs(e.Fragment,{children:[e.jsx(Z,{size:14})," Collapse all"]})}),e.jsx("div",{className:"w-full",children:e.jsx(se,{json:t,jsonViewProps:{collapsed:l,shortenTextAfterLength:0}},String(l))})]})}function _({name:t,id:a}){const l=p.useCallback(()=>{Q(a)},[a]);return e.jsxs("div",{className:"flex items-center gap-2 truncate",children:[e.jsxs("span",{className:"text-nowrap font-semibold",children:[t,":"]}),e.jsx("span",{title:a,className:"truncate text-gray-500 dark:text-white",children:a}),e.jsx(A,{onCopy:l})]})}export{O as DebugJsonViewer,be as DebugModal,ne as DebugModalContents};
//# sourceMappingURL=hiptmpc2iy6axaim.js.map
