import{j as e,r as j,an as g,G as f,c as w,ba as G,aH as z,H as M,z as A,A as R,I as D,az as $}from"./kkasil63rmfidan7.js";import{bT as O,bU as C,bV as I,aH as L,ae as _,af as E,ah as P}from"./m5ko8xkwcu432ruw.js";import{D as u,$ as T}from"./kn4ay466vw8pwdsq.js";import{F as v,aX as b,aY as N,aZ as S,a_ as U,o as V,z as B,B as F,a$ as k,m as q}from"./spwglx8qg6louqra.js";const H="#settings/BuilderProfile";function ae({selectedDomain:s,verifiedDomains:n,domains:d,onChangeDomain:r}){var h,m;const[i,t]=j.useState(!1),o=n.length>0,a=(h=g())==null?void 0:h.id,c=(m=g())==null?void 0:m.isEnterprisey(),{mutateAsync:l}=O(a);return e.jsxs("div",{className:"font-normal",children:[e.jsxs(u.Root,{children:[e.jsx(T,{children:e.jsxs("span",{className:"flex items-center gap-2 py-2",children:[s??e.jsx(f,{...p.selectADomain}),e.jsx(U,{className:"icon-md"})]})}),e.jsx(u.Portal,{children:e.jsxs(u.Content,{children:[e.jsx(u.RadioGroup,{value:s,onValueChange:x=>{x!==s&&r(x)},children:n.map(({id:x,hostname:y})=>e.jsx(u.RadioItem,{value:y,children:e.jsxs("div",{className:"flex flex-row",children:[e.jsx("span",{children:y}),e.jsx("span",{onClick:()=>{l({domainId:x}),r("")},children:e.jsx(V,{className:"icon-sm fixed right-4"})})]})},x))}),o&&e.jsx(u.Separator,{}),e.jsx(u.Item,{onClick:()=>{t(!0)},icon:B,children:e.jsx(f,{...p.addDomain})})]})})]}),a&&!c&&e.jsx(C,{domains:d,isOpen:i,onClose:()=>t(!1),workspaceId:a,showUnverifiedDomains:!0,onVerifyDomain:x=>{r(x.hostname)}})]})}function Z(){const s=A();return R({mutationFn:({verifierType:n})=>L.unverifySocialAuth(n),onSuccess:()=>{s.refetchQueries({queryKey:["builderProfile"]})}})}function Q({socialData:s}){const{type:n,display_name:d,verified_data:r}=s,i=n==="twitter"?b:n==="linkedin"?N:n==="github"?S:null;return i?e.jsxs("div",{className:"flex w-full flex-row items-center justify-between",children:[e.jsxs("div",{className:"flex flex-row items-center space-x-2 text-token-text-primary",children:[i({className:"icon-md"}),e.jsx("span",{children:d})]}),(r==null?void 0:r.link_to)&&e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:r.link_to,className:"text-sm text-token-text-tertiary hover:cursor-pointer",children:e.jsx(v,{className:"icon-sm"})})]}):null}function ne({socialData:s,icon:n}){const{id:d,type:r,display_name:i,verified:t,verified_data:o}=s,[a,c]=j.useState(!1),l=Z();return e.jsxs("div",{className:"flex flex-row items-center justify-between space-y-1",children:[e.jsxs("div",{className:w("flex items-center space-x-2"),children:[e.jsx(n,{className:"icon-sm"}),e.jsx("span",{children:i}),t&&(o==null?void 0:o.username)&&e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:o.link_to,className:"text-sm text-token-text-tertiary hover:cursor-pointer",children:o==null?void 0:o.username})]}),t?e.jsx("div",{className:"py-1 font-semibold hover:cursor-pointer",onClick:()=>{l.mutate({verifierType:r})},children:l.isPending?e.jsx(z,{}):e.jsx(F,{className:"icon-sm text-token-text-tertiary"})}):e.jsx(G,{size:"small",color:"secondary",loading:a,onClick:async()=>{c(!0),await I({id:d},H),c(!1)},children:e.jsx(f,{...p.verify})})]})}const p=M({verify:{defaultMessage:"Add",id:"GizmoSocialRow.add"},addDomain:{id:"GizmoSocialRow.addDomain",defaultMessage:"Verify new domain"},selectADomain:{id:"GizmoSocialRow.selectADomain",defaultMessage:"Select a domain"}}),W=D.div`text-sm text-token-text-tertiary`,X="community builder";function Y(s){return"gizmo"in s}function ie({gizmo:s,builderName:n,builderUrl:d,className:r,socials:i,hideLink:t=!1}){const{value:o}=$("2256850471");let a,c;s&&Y(s)?(a=s.gizmo.author.display_name,c=s.gizmo.author.link_to):(a=n,c=d),(a===""||a==null)&&(a=X);const l=i==null?void 0:i.filter(m=>m.verified),h=e.jsxs("div",{className:"w-48 space-y-4 text-sm",children:[c&&e.jsxs("div",{className:"flex w-full flex-row items-center justify-between",children:[e.jsxs("div",{className:"flex flex-row items-center space-x-2 text-token-text-primary",children:[e.jsx(k,{className:"icon-md"}),e.jsx("span",{children:e.jsx(f,{id:"gizmo.author.websiteLabel",defaultMessage:"Website"})})]}),e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:c,className:"text-token-text-tertiary hover:cursor-pointer",children:e.jsx(v,{className:"icon-sm"})})]}),o&&(l==null?void 0:l.map((m,x)=>m.verified?e.jsx(Q,{socialData:m},x):null)),e.jsxs("div",{className:"text-xs text-token-text-tertiary",children:[(c||l&&l.length>0)&&e.jsx("hr",{className:"my-2 border-token-border-light"}),e.jsx(f,{id:"gizmo.author.cannotViewLabel",defaultMessage:"The builder of this GPT cannot view your conversations."})]})]});return e.jsxs("div",{className:"flex flex-row items-center space-x-1",children:[e.jsx(W,{className:r,children:e.jsx(f,{id:"gizmo.author.byLabel",defaultMessage:"By {displayName}",values:{displayName:a}})}),!t&&e.jsx(K,{socials:i,website:c,children:h})]})}function K({website:s,socials:n,children:d}){const[r,i]=j.useState(!1);let t=[];s&&t.push(e.jsx(k,{className:"icon-xs text-token-text-secondary"})),n&&n.forEach(a=>{a.verified&&(a.type==="twitter"?t.push(e.jsx(b,{className:"icon-xs text-token-text-secondary"})):a.type==="linkedin"?t.push(e.jsx(N,{className:"icon-xs text-token-text-secondary"})):a.type==="github"&&t.push(e.jsx(S,{className:"icon-xs text-token-text-secondary"})))});const o=t.length-2;return t=t.slice(0,2),o>0&&t.push(e.jsxs("span",{className:"text-xs font-semibold text-token-text-secondary",children:["+",o]},"overflow")),e.jsx(_,{open:r,onOpenChange:i,children:e.jsxs("div",{onPointerLeave:()=>i(!1),children:[e.jsx(E,{asChild:!0,children:e.jsx("div",{onPointerEnter:()=>i(!0),children:t.length>0?e.jsx("div",{className:"flex items-center gap-1 rounded-xl bg-token-main-surface-secondary px-2 py-1",children:t}):e.jsx(q,{className:"icon-xs text-token-text-secondary"})})}),e.jsx(P,{side:"top",sideOffset:8,align:"center",className:"z-10 rounded-lg bg-token-main-surface-primary p-4 drop-shadow-md",children:d})]})})}export{ae as D,ie as G,ne as a};
//# sourceMappingURL=jwmpdi90ayhpa01i.js.map
