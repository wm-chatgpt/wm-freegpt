import{r as x,m as e,bd as O,q as D,a5 as i,a1 as G,a2 as Se,a3 as Pe,Z as I,a6 as J,f2 as y,d8 as M,u as U,a$ as ee,ad as Oe,d2 as Ne,cl as Ge,e3 as Ae,aK as ae,aN as _e,bN as Re,e as ie,f3 as Q,e5 as De,e6 as Z,e7 as ge}from"./cbv020t7gzp4f872.js";import{a4 as d,I as ve,b1 as S,T as Me,C as se,aD as Ee,a1 as We,fo as xe,M as Ie}from"./gpe91l6ql3o0s610.js";import{S as k}from"./fte4amidzwa0x0i9.js";import{a as Le,b as ze}from"./ezn856flhb2ps4rq.js";import{N as te,bk as Fe,a as he,bl as Be,t as He,I as fe,al as Te,P as je,aI as Ue,a4 as qe,b9 as Ke,S as Ye}from"./kq3cjnjkkiu42wsi.js";import{B as we,S as Ve}from"./mtlrkw38s52rl4zz.js";import{g as ye}from"./jgkto3cr2kt9gbfy.js";import{m as Qe}from"./eprwd5wd9a7hvvfw.js";import{D as C}from"./jcecw02o1g7i3lgl.js";import{G as Je}from"./lnjq7tpfav8s4s8h.js";import{S as $e,c as Xe}from"./l412eurdlmxtutkw.js";import{A as Ze}from"./bzamflhx5y6p55cd.js";import{V as es}from"./d3y72ugnrmac5z1v.js";import{R as ss}from"./emwpab8ugh2jm8tb.js";import{a as ts,b as as,c as ke,d as is,e as ns,f as rs,A as ls}from"./irau9fsi5xrg6mmu.js";import{u as os,b as cs}from"./f8kermoewu62hyth.js";import"./ef38o0dpd1vmn8u6.js";import"./n1m1f2dq4jbayfm0.js";import"./lw9lle2awfx0m3zh.js";import"./j1mltnb4g3et1nfv.js";import"./hte00x4vz53jf7hc.js";import"./c039xathbpqv7hjp.js";import"./4kmoegar8udth7vh.js";import"./dwg1uidtx2z6dpb7.js";import"./bb0qky2a2rq1faet.js";import"./dwwkkgcng7rj4n70.js";import"./cf35vab9q82m0zj4.js";import"./ihhnf33zws1gyw0j.js";import"./fsddy3bxlesj6ecw.js";import"./c6olt6o2cwaf8mcg.js";import"./l29l32kuno0zg8js.js";import"./m9c7p1d7qbcooudb.js";import"./nriec8vah7hgye40.js";import"./hryykjcwq4fvumfr.js";import"./le0igyxp535xhyki.js";import"./op9obis5fwukoa18.js";import"./jaab2qdql5x1ymip.js";import"./dtgyxk1jks2sr306.js";import"./hpiio21pr81kn19y.js";import"./caan1pg3ww016xl8.js";import"./lwyj5zt61cufjetj.js";import"./h73djwrxeutdwgij.js";import"./gjpw3bbtuwvhdku2.js";import"./nbel0869cnaupjnl.js";import"./k41xbylswt58q6cl.js";import"./gxxn630wwaiwqexe.js";import"./d4jm481ulqu2vodx.js";import"./cu7i7jyqvstu6net.js";import"./dbgdub3j6oud2mlg.js";import"./f3w8itoe7emsubbd.js";import"./fnzhfm00fqotlxu9.js";import"./mhh49srxed98l7h3.js";import"./lz692dfkus5ccwf9.js";import"./ilogoyhgitfd5d0z.js";import"./cun8vd12wfkw5ldz.js";function ds({value:s,title:t,valueClassName:a,onChange:n,emptyMessage:r}){const[o,l]=x.useState(!1),[g,h]=x.useState(""),f=x.useRef(null),p=()=>{if(g!==""){const m=g.trim();n([...s,m]),l(!1),h("")}};return e.jsxs(d.Root,{className:"w-auto",children:[e.jsxs(d.Header,{children:[e.jsx(d.HeaderCell,{children:t}),e.jsx(d.HeaderCell,{})]}),e.jsxs(d.Body,{children:[s.map((m,T)=>e.jsxs(d.Row,{children:[e.jsx(d.Cell,{className:a,children:m}),e.jsx(d.Cell,{textAlign:"right",children:e.jsx(O,{type:"button",onClick:()=>{n(s.filter((N,j)=>j!==T))},children:e.jsx(te,{className:"icon-sm"})})})]},T)),r&&s.length===0?e.jsx(d.Row,{children:e.jsx(d.Cell,{colSpan:2,className:"text-center text-sm italic",children:r})}):null,e.jsxs(d.Row,{children:[e.jsxs("div",{className:D("mt-2 flex flex-row gap-2 p-1",!o&&"hidden"),children:[e.jsx(ve,{className:"w-80",name:"newDomain",value:g,onChange:m=>{h(m.target.value)},ref:f,onPressEnter:p,placeholder:"example.com"}),e.jsx(O,{className:"grow-0",onClick:p,children:e.jsx(i,{id:"svRVol",defaultMessage:"Add"})})]}),!o&&e.jsxs(O,{type:"button",onClick:()=>{l(!0),setTimeout(()=>{var m;(m=f.current)==null||m.focus()},0)},className:"mt-2",children:[e.jsx(Fe,{className:"icon-sm inline-block"}),e.jsx(i,{id:"J5y3+M",defaultMessage:"Add new domain"})]})]})]})]})}function ps({isOpen:s,onClose:t,account:a,gpt:n}){const r=G(),[o,l]=x.useState(!1),[g,h]=x.useState(""),[f,p]=x.useState(!0);return e.jsxs(Se,{size:"custom",className:"max-w-lg text-sm",isOpen:s,onClose:Pe,type:"success",title:r.formatMessage(B.deleteModalTitle),children:[e.jsx("p",{className:"mb-4 text-token-text-primary",children:e.jsx(i,{...B.deleteModalPrompt,values:{gptName:n.gizmo.display.name}})}),!f&&e.jsx("p",{className:"text-red-500",children:e.jsx(i,{...B.invalidEmail})}),e.jsx(ve,{className:D("px-3 py-2",f?"":"border-red-500"),name:"email",type:"email",value:g,placeholder:"Email",onChange:m=>{h(m.target.value)}}),e.jsxs("div",{className:"mt-4 flex justify-end gap-2",children:[e.jsx(O,{color:"secondary",onClick:()=>{t(!1),l(!1),p(!0)},loading:o,children:e.jsx(i,{...B.cancelButtonText})}),e.jsx(O,{color:"primary",loading:o,onClick:()=>{l(!0),p(!0),g==""||!es.test(g)?(p(!1),l(!1)):I.updateWorkspaceGPTOwner(a.id,n.gizmo.id,g).then(()=>{t(!0),l(!1),p(!0)},()=>{p(!1),l(!1)})},children:e.jsx(i,{...B.deleteButtonText})})]})]})}const B=J({deleteModalTitle:{id:"changeOwnerModal.changeModalTitle",defaultMessage:"Change Owner"},deleteModalPrompt:{id:"changeOwnerModal.changeModalPrompt",defaultMessage:"New owner of {gptName}"},cancelButtonText:{id:"changeOwnerModal.cancelButtonText",defaultMessage:"Cancel"},deleteButtonText:{id:"changeOwnerModal.changeOwnerButtonText",defaultMessage:"Change owner"},invalidEmail:{id:"changeOwnerModal.invalidEmail",defaultMessage:"Email is invalid or does not belong to a member in this workspace"}});function ms({isOpen:s,onClose:t,account:a,gpt:n}){const r=G(),[o,l]=x.useState(!1);return e.jsxs(Se,{size:"custom",className:"max-w-lg text-sm",isOpen:s,onClose:Pe,type:"success",title:r.formatMessage(Y.deleteModalTitle),children:[e.jsx("p",{className:"mb-4 text-token-text-primary",children:e.jsx(i,{...Y.deleteModalPrompt,values:{gptName:n.gizmo.display.name}})}),e.jsxs("div",{className:"mt-4 flex justify-end gap-2",children:[e.jsx(O,{color:"secondary",onClick:()=>{t(!1)},loading:o,children:e.jsx(i,{...Y.cancelButtonText})}),e.jsx(O,{color:"danger",loading:o,onClick:()=>{l(!0),I.deleteWorkspaceGPT(a.id,n.gizmo.id).finally(()=>{t(!0),l(!1)})},children:e.jsx(i,{...Y.deleteButtonText})})]})]})}const Y=J({deleteModalTitle:{id:"deleteGPTModal.accessModalTitle",defaultMessage:"Delete GPT"},deleteModalPrompt:{id:"deleteGPTModal.accessModalPrompt",defaultMessage:"Are you sure you would like to delete {gptName}? This action can not be undone."},cancelButtonText:{id:"deleteGPTModal.cancelButtonText",defaultMessage:"Cancel"},deleteButtonText:{id:"deleteGPTModal.deleteButtonText",defaultMessage:"Delete"}}),H=10;function us({account:s,gpt:t,thirdParty:a=!1}){var L,A;const n=U(),[r,o]=x.useState(!1),[l,g]=x.useState(!1),[h,f]=x.useState(!1),[p,m]=x.useState(!1),T=Oe(),N=new Date(a?t.gizmo.workspace_approval_date??"":t.gizmo.created_at).toLocaleDateString("en-US",{month:"short",day:"numeric"}),j=t.tools.filter(P=>P.type===M.JIT_PLUGIN).map(P=>P.type===M.JIT_PLUGIN?P.metadata.domain:"");let b="";return j.length===0?b="":j.length===1?b=j[0]:b=`${j.length} domains`,e.jsxs(e.Fragment,{children:[e.jsxs(d.Row,{children:[e.jsx(d.Cell,{className:"py-4 pr-4",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"h-10 w-10 flex-shrink-0",children:e.jsx(Je,{src:t.gizmo.display.profile_picture_url,isFirstParty:((L=t.gizmo.tags)==null?void 0:L.includes(We.FirstParty))??!1,alt:t.gizmo.display.name,className:"h-10 w-10"})}),e.jsx("div",{className:"ml-4",children:e.jsx("div",{className:"text-sm font-semibold text-token-text-primary",children:t.gizmo.display.name})})]})}),e.jsx(d.Cell,{className:"p-4 text-sm text-token-text-secondary",children:t.gizmo.author.display_name}),e.jsx(d.Cell,{className:"p-4 text-sm text-token-text-secondary",children:b}),!a&&e.jsx(d.Cell,{className:"p-4 text-sm text-token-text-secondary",children:e.jsx(ws,{gizmo:t,account:s})}),!a&&e.jsx(d.Cell,{className:"p-4 text-sm text-token-text-secondary",children:((A=t.gizmo.vanity_metrics)==null?void 0:A.num_conversations_str)??0}),e.jsx(d.Cell,{className:"p-4 text-sm text-token-text-secondary",children:N}),e.jsx(d.Cell,{children:e.jsxs(C.Root,{children:[e.jsx(C.Trigger,{className:"-my-2",children:e.jsx(qe,{className:"icon-sm"})}),e.jsx(C.Portal,{children:a?e.jsx(C.Content,{children:e.jsx(C.Item,{onClick:()=>{m(!0)},color:"danger",icon:te,children:e.jsx(i,{...c.removeFromWorkspace})})}):e.jsxs(C.Content,{children:[e.jsx(C.Item,{onClick:()=>{o(t)},icon:Ke,children:e.jsx(i,{...c.changeAccess})}),e.jsx(C.Item,{onClick:()=>{f(!0)},icon:Ye,children:e.jsx(i,{...c.changeOwner})}),e.jsx(C.Item,{onClick:()=>{g(!0)},icon:te,color:"danger",children:e.jsx(i,{...c.deleteGPT})})]})})]})})]}),r&&e.jsx($e,{publishedGizmo:r,gizmo:Xe(r),promoteGizmo:async()=>{},onClose:()=>{o(!1)},showActionsModal:()=>{},appealGizmo:async()=>{T.push(Qe(r.gizmo.id))},setAppealState:()=>{},shareOnly:!0,updateGizmo:()=>{},workspaceOwner:!0}),e.jsx(ps,{isOpen:h,gpt:t,account:s,onClose:P=>{f(!1),P&&n.invalidateQueries({queryKey:["workspace",s.id,y.WORKSPACE]})}}),e.jsx(ms,{isOpen:l,gpt:t,account:s,onClose:P=>{g(!1),P&&n.invalidateQueries({queryKey:["workspace",s.id,y.WORKSPACE]})}}),e.jsx(ss,{isOpen:p,gpt:t,account:s,onClose:P=>{m(!1),P&&n.invalidateQueries({queryKey:["workspace",s.id,y.THIRD_PARTY]})}})]})}function gs(s,t,a){return s.sort((n,r)=>{var g,h;let o,l;if(t==="created_at")o=new Date(n.gizmo.created_at).getTime(),l=new Date(r.gizmo.created_at).getTime();else if(t==="workspace_approval_date")o=new Date(n.gizmo.workspace_approval_date??"").getTime(),l=new Date(r.gizmo.workspace_approval_date??"").getTime();else if(t==="vanity_metrics.num_conversations_str")o=((g=n.gizmo.vanity_metrics)==null?void 0:g.num_conversations)??0,l=((h=r.gizmo.vanity_metrics)==null?void 0:h.num_conversations)??0;else throw new Error(`Invalid field: ${t}`);if(a==="asc")return o-l;if(a==="desc")return l-o;throw new Error(`Invalid direction: ${a}`)})}function xs(s){switch(s){case S.User:case S.Group:return S.Private;case S.WorkspaceLink:return S.Workspace;default:return s}}function hs(s,t){return s.filter(a=>{const n=a.tools.some(l=>l.type===M.MEMORY||l.type===M.INTENT||l.type===M.CONTACTS?!1:t.tools[l.type]),r=xs(a.gizmo.share_recipient),o=t.share_recipient[r];return n||o})}function fs(s,t){const a=t.toLowerCase();return s.filter(n=>{const r=n.gizmo.author.display_name&&n.gizmo.author.display_name.toLowerCase(),o=n.gizmo.display.name.toLowerCase();return r&&r.includes(a)||o.includes(a)})}function Ts({account:s,showThirdParty:t}){const[a,n]=x.useState(y.WORKSPACE),{data:r,fetchNextPage:o,hasNextPage:l,isError:g,isFetchingNextPage:h}=js(s.id,a),f=G(),[p,m]=x.useState(!1),T=(r==null?void 0:r.pages.flatMap(w=>w.items))??[];x.useEffect(()=>{!g&&!h&&l&&o()},[h,l,g,o]);const N=l,j=x.useRef(null),[b,L]=x.useState(""),[A,P]=x.useState(!1),[_,ne]=x.useState(a==y.WORKSPACE?"created_at":"workspace_approval_date"),[R,E]=x.useState("desc"),re={tools:{[M.BROWSER]:!1,[M.PYTHON]:!1,[M.JIT_PLUGIN]:!1,[M.RETRIEVAL]:!1,[M.DALLE]:!1},share_recipient:{[S.Private]:!1,[S.Workspace]:!1,[S.Link]:!1,[S.Marketplace]:!1}},[W,le]=x.useState(re),[$,q]=x.useState(0),be=U();x.useEffect(()=>{A&&j.current&&j.current.focus()},[A]);function oe(w,z){const{id:F,checked:Ce}=w.currentTarget,ue={...W};ue[z][F]=Ce,le(ue),q(0)}let ce=0,de=0;const X=Object.values(W.tools).filter(Boolean).length+Object.values(W.share_recipient).filter(Boolean).length;let v=[],pe=0;const K=r===void 0,me=!K&&T.length>0;return K||(pe=Math.min(T.length,H),de=Math.ceil(T.length/H),N?v=T:v=gs(T,_,R),b!==""&&(v=fs(v,b)),X>0&&(v=hs(v,W)),ce=Math.ceil(v.length/H),v=v.slice($*H,($+1)*H)),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between border-b border-token-border-light",children:[e.jsxs("div",{className:"flex space-x-4 pt-2",children:[e.jsx("a",{className:D("text-l pb-4 font-semibold",a===y.WORKSPACE?"border-b border-token-text-secondary text-token-text-primary":"cursor-pointer text-token-text-tertiary"),onClick:()=>{n(y.WORKSPACE)},children:e.jsx(i,{...c.workspaceTab})}),t&&e.jsx("a",{className:D("text-l pb-4 font-semibold",a===y.THIRD_PARTY?"border-b border-token-text-secondary text-token-text-primary":"cursor-pointer text-token-text-tertiary"),onClick:()=>{n(y.THIRD_PARTY)},children:e.jsx(i,{...c.thirdPartyTab})})]}),!K&&e.jsxs("div",{className:"flex items-center space-x-4 pb-2",children:[X>0&&e.jsxs("div",{className:"mx-0 flex items-center space-x-1",onClick:()=>{le(re)},children:[e.jsx("span",{children:X}),e.jsx(he,{className:"cursor-pointer"})]}),e.jsx(Me,{theme:"white",label:e.jsxs("div",{className:"w-64 space-y-4 p-2 font-normal text-token-text-primary",children:[e.jsxs("div",{className:"flex-col space-y-2",children:[e.jsx("span",{className:"flex font-semibold",children:e.jsx(i,{...c.capabilitiesTitle})}),Object.entries(W.tools).map(([w,z])=>e.jsx(se,{id:w,checked:z,label:ye(s,w),onChange:F=>{oe(F,"tools")}},w))]}),e.jsxs("div",{className:"flex-col space-y-2",children:[e.jsx("span",{className:"flex font-semibold",children:e.jsx(i,{...c.whoHasAccessTitle})}),Object.entries(W.share_recipient).map(([w,z])=>e.jsx(se,{id:w,checked:z,label:ye(s,w),onChange:F=>{oe(F,"share_recipient")}},w))]})]}),className:"bg-token-main-surface-primary",side:"bottom",withArrow:!1,align:"end",sideOffset:4,wide:!0,interactive:!0,children:e.jsx(Be,{className:"cursor-pointer"})}),e.jsx("div",{className:"cursor-pointer",onClick:()=>{P(!0)},children:e.jsx(He,{className:"icon-sm"})}),e.jsx("input",{type:"text",ref:j,placeholder:f.formatMessage(c.filterByNameOrBuilderPlaceholder),className:D("border-none bg-token-main-surface-primary px-0 transition-width duration-300 ease-in-out focus:ring-0",A?"w-64":"w-0"),value:b,onChange:()=>{var w;q(0),L(((w=j.current)==null?void 0:w.value)??"")}}),e.jsx("div",{className:D("cursor-pointer",A?"":"hidden"),onClick:()=>{P(!1),L(""),q(0)},children:e.jsx(he,{className:"icon-sm"})}),t&&e.jsx(O,{color:"secondary",onClick:()=>{m(!0)},icon:fe,children:e.jsx(i,{...c.approveAGPTButton})})]})]}),K?e.jsx("div",{className:"mt-8 flex items-center justify-center",children:e.jsx(ee,{})}):e.jsxs("div",{style:{height:pe*85+75},className:"mb-8",children:[v.length>0?e.jsxs(d.Root,{size:"normal",className:"min-w-full overflow-hidden bg-token-main-surface-primary sm:rounded-lg",children:[e.jsxs(d.Header,{children:[e.jsx(d.HeaderCell,{className:"py-2 pr-4 text-left text-xs text-token-text-secondary",children:e.jsx(i,{...c.nameCellTitle})}),e.jsx(d.HeaderCell,{className:"px-4 py-2 text-left text-xs text-token-text-secondary",children:e.jsx(i,{...c.builderCellTitle})}),e.jsx(d.HeaderCell,{className:"px-4 py-2 text-left text-xs text-token-text-secondary",children:e.jsx(i,{...c.customActionsCellTitle})}),a==y.WORKSPACE&&e.jsx(d.HeaderCell,{className:"px-4 py-2 text-left text-xs text-token-text-secondary",children:e.jsx(i,{...c.whoHasAccessTitle})}),a==y.WORKSPACE&&e.jsx(d.HeaderCell,{className:"cursor-pointer px-4 py-2 text-left text-xs text-token-text-secondary",children:e.jsxs("div",{className:"flex items-center gap-1",onClick:()=>{_==="vanity_metrics.num_conversations_str"?E(R==="asc"?"desc":"asc"):(ne("vanity_metrics.num_conversations_str"),E("desc"))},children:[e.jsx("span",{children:e.jsx(i,{...c.chatsCellTitle})}),_==="vanity_metrics.num_conversations_str"&&R==="asc"&&e.jsx(Te,{className:"icon-sm"}),_==="vanity_metrics.num_conversations_str"&&R==="desc"&&e.jsx(je,{className:"icon-sm"})]})}),e.jsx(d.HeaderCell,{className:"cursor-pointer px-4 py-2 text-left text-xs text-token-text-secondary",children:e.jsxs("div",{className:"flex items-center gap-1",onClick:()=>{_==="created_at"?E(R==="asc"?"desc":"asc"):(ne("created_at"),E("desc"))},children:[e.jsx("span",{children:a==y.WORKSPACE?e.jsx(i,{...c.createdCellTitle}):e.jsx(i,{...c.approvedCellTitle})}),_==="created_at"&&R==="asc"&&e.jsx(Te,{className:"icon-sm"}),_==="created_at"&&R==="desc"&&e.jsx(je,{className:"icon-sm"})]})}),e.jsx(d.HeaderCell,{className:"w-16"})]}),e.jsx(d.Body,{children:v.map(w=>e.jsx(us,{account:s,gpt:w,thirdParty:a==y.THIRD_PARTY},w.gizmo.id))})]}):e.jsxs("div",{className:"flex h-full w-full flex-col items-center gap-4 py-16",children:[e.jsx(Ue,{className:"h-12 w-12 text-gray-400"}),e.jsx("p",{className:"text-token-text-secondary",children:a==y.THIRD_PARTY?me?e.jsx(i,{...c.noWorkspaceApprovedGPTsFound}):e.jsx(i,{...c.noWorkspaceApprovedGPTs}):me?e.jsx(i,{...c.noWorkspaceGPTsFound}):e.jsx(i,{...c.noWorkspaceGPTs})}),a==y.THIRD_PARTY&&e.jsx(O,{color:"secondary",onClick:()=>{m(!0)},icon:fe,children:e.jsx(i,{...c.approveAGPTButton})})]}),N&&e.jsxs("div",{className:"my-4 flex w-full items-center justify-center gap-4 text-token-text-tertiary",children:[e.jsx(ee,{}),e.jsx(i,{...c.stillLoadingData})]}),de>1&&e.jsx("div",{className:"mt-2 flex justify-center",children:e.jsx(Ee,{currentPage:$,onChangeIndex:q,length:Math.max(ce,1)})})]}),e.jsx(Ze,{isOpen:p,onClose:()=>{m(!1),be.invalidateQueries({queryKey:["workspace",s.id,y.THIRD_PARTY]})},account:s})]})}function js(s,t){return Ne({queryKey:["workspace",s,"gizmos",t],queryFn:({pageParam:a})=>I.getWorkspaceGPTs(s,t,a),initialPageParam:"",getNextPageParam:a=>a.cursor})}function ws({gizmo:s,account:t}){const a=G(),n={[S.Private]:a.formatMessage(c.shareRecipientTitlePrivate),[S.User]:a.formatMessage(c.shareRecipientTitlePrivate),[S.Group]:a.formatMessage(c.shareRecipientTitlePrivate),[S.Link]:a.formatMessage(c.shareRecipientTitleLink),[S.Marketplace]:a.formatMessage(c.shareRecipientTitlePublic),[S.Workspace]:t.data.name,[S.WorkspaceLink]:t.data.name};if(["private","user","group"].includes(s.gizmo.sharing.recipient)){const{users:r,groups:o}=ys(s);return r===0&&o===0?e.jsx("span",{className:"text-token-text-secondary",children:e.jsx(i,{...c.shareRecipientTitlePrivate})}):r>0&&o>0?e.jsxs("span",{className:"text-token-text-secondary",children:[n[s.gizmo.share_recipient],e.jsx("br",{}),e.jsx(i,{id:"fQ+tJG",defaultMessage:"Shared with {users} and {groups}",values:{users:a.formatMessage(c.userCount,{numUsers:r}),groups:a.formatMessage(c.groupCount,{numGroups:o})}})]}):r>0?e.jsxs("span",{className:"text-token-text-secondary",children:[n[s.gizmo.share_recipient],e.jsx("br",{}),e.jsx(i,{...c.userCount,values:{numUsers:r}})]}):e.jsxs("span",{className:"text-token-text-secondary",children:[n[s.gizmo.share_recipient],e.jsx("br",{}),e.jsx(i,{...c.groupCount,values:{numGroups:o}})]})}return e.jsx("span",{children:n[s.gizmo.share_recipient]})}function ys(s){if(s.gizmo.sharing.subjects){const t=s.gizmo.sharing.subjects.filter(n=>n.type===xe.USER).length,a=s.gizmo.sharing.subjects.filter(n=>n.type===xe.GROUP).length;return{users:t,groups:a}}return{users:0,groups:0}}const c=J({stillLoadingData:{id:"workspaceSettings.stillLoadingData",defaultMessage:"Don't see what you're looking for? Some GPTs are still loading..."},noWorkspaceGPTs:{id:"workspaceSettings.noWorkspaceGPTs",defaultMessage:"This workspace does not have any GPTs"},noWorkspaceGPTsFound:{id:"workspaceSettings.noWorkspaceGPTsFound",defaultMessage:"No workspace GPTs found"},noWorkspaceApprovedGPTs:{id:"workspaceSettings.noWorkspaceApprovedGPTs",defaultMessage:"You havent approved any third-party GPTs"},noWorkspaceApprovedGPTsFound:{id:"workspaceSettings.noWorkspaceApprovedGPTsFound",defaultMessage:"No approved third-party GPTs found"},workspaceTab:{id:"workspaceSettings.workspaceTab",defaultMessage:"Workspace"},thirdPartyTab:{id:"workspaceSettings.thirdPartyTab",defaultMessage:"Third-party"},capabilitiesTitle:{id:"workspaceSettings.capabilitiesTitle",defaultMessage:"Capabilities"},whoHasAccessTitle:{id:"workspaceSettings.whoHasAccessTitle",defaultMessage:"Who has access"},filterByNameOrBuilderPlaceholder:{id:"workspaceSettings.filterByNameOrBuilderPlaceholder",defaultMessage:"Filter by name or builder..."},nameCellTitle:{id:"workspaceSettings.nameCellTitle",defaultMessage:"Name"},builderCellTitle:{id:"workspaceSettings.builderCellTitle",defaultMessage:"Builder"},customActionsCellTitle:{id:"workspaceSettings.customActionsCellTitle",defaultMessage:"Custom Actions"},chatsCellTitle:{id:"workspaceSettings.chatsCellTitle",defaultMessage:"Chats"},createdCellTitle:{id:"workspaceSettings.createdCellTitle",defaultMessage:"Created"},approvedCellTitle:{id:"workspaceSettings.approvedCellTitle",defaultMessage:"Approved"},approveAGPTButton:{id:"workspaceSettings.approveAGPTButton",defaultMessage:"Approve a GPT"},shareRecipientTitlePrivate:{id:"vyjlzc",defaultMessage:"Invite only"},shareRecipientTitleLink:{id:"workspaceSettings.shareRecipientTitleLink",defaultMessage:"Link"},shareRecipientTitlePublic:{id:"workspaceSettings.shareRecipientTitlePublic",defaultMessage:"Public"},changeAccess:{id:"workspaceSettings.changeAccess",defaultMessage:"Change who has access"},changeOwner:{id:"workspaceSettings.changeOwner",defaultMessage:"Change Owner"},deleteGPT:{id:"workspaceSettings.deleteGPT",defaultMessage:"Delete GPT"},removeFromWorkspace:{id:"workspaceSettings.removeFromWorkspace",defaultMessage:"Remove from workspace"},userCount:{id:"P1xo2B",defaultMessage:"{numUsers, plural, one {# user} other {# users}}"},groupCount:{id:"4zRUED",defaultMessage:"{numGroups, plural, one {# group} other {# groups}}"}});function V({title:s,description:t,children:a,upsellEnterprise:n=!1,className:r=""}){return e.jsx(Ie,{label:e.jsx(i,{...u.enterpriseRequiredMessage}),side:"top",sideOffset:4,disabled:!n,className:"max-w-5xl",children:e.jsxs(is,{className:D(n&&"text-token-text-tertiary","max-w-4xl",r),children:[e.jsxs(ns,{className:"flex items-center gap-3",children:[e.jsx(i,{...s}),n&&e.jsx("span",{className:"rounded-xl bg-token-main-surface-tertiary px-2 pb-0.5 text-sm",children:e.jsx(i,{...u.enterpriseUpsellPill})})]}),t&&e.jsx(rs,{className:"py-2 text-token-text-secondary",children:e.jsx(i,{...t})}),a]})})}function ks({workspaceId:s,label:t,setting:a,defaultValue:n,values:r,disabled:o=!1}){const l=G(),g=ae(),h=U(),{variables:f,mutate:p}=ie({mutationFn:({setting:m,value:T})=>I.setWorkspaceShareSetting(s,m,T),onSettled:()=>{h.invalidateQueries({queryKey:["workspace-settings"]}),h.invalidateQueries({queryKey:["workspace"]})},onError:()=>{g.danger(l.formatMessage(u.featureSettingsUpdateFailed))}});return e.jsxs(ls,{children:[e.jsx("p",{className:"text-md inline-flex items-center",children:e.jsx(i,{...t})}),e.jsxs(k.Root,{defaultValue:(f==null?void 0:f.value)??n,onValueChange:m=>{p({setting:a,value:m})},disabled:o,children:[e.jsxs(k.Trigger,{className:"text-md focus-visible:border-none",children:[e.jsx(k.Value,{}),e.jsx(k.Icon,{})]}),e.jsx(k.Portal,{children:e.jsx(k.Content,{children:r.map((m,T)=>e.jsx(k.Item,{className:"text-md",value:m.value,children:e.jsx(i,{...m.display})},T))})})]})]})}function Ss({workspaceId:s,value:t,upsellEnterprise:a=!1}){const n=G(),r=ae(),o=U(),{variables:l,mutate:g}=ie({mutationFn:({value:h})=>I.setWorkspaceThirdPartyGPTSetting(s,h),onSettled:()=>{o.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{r.danger(n.formatMessage(u.featureSettingsUpdateFailed))}});return e.jsxs(k.Root,{defaultValue:(l==null?void 0:l.value)??t,onValueChange:h=>{g({value:h})},children:[e.jsxs(k.Trigger,{className:"border border-token-border-light text-base focus-visible:border-token-border-light",children:[e.jsx(k.Value,{}),e.jsx(k.Icon,{})]}),e.jsx(k.Portal,{children:e.jsxs(k.Content,{children:[e.jsx(k.Item,{className:"text-base",value:Q.ALLOW_ALL,children:e.jsx(i,{...u.allowAllOption})}),!a&&e.jsx(k.Item,{className:"text-base",value:Q.ALLOW_SPECIFIC,children:e.jsx(i,{...u.ownerApprovedOnlyOption})}),e.jsx(k.Item,{className:"text-base",value:Q.ALLOW_NONE,children:e.jsx(i,{...u.dontAllowOption})})]})})]})}function Ps({workspaceId:s,data:t}){const a=G(),n=ae(),r=_e(),o=U(),[l,g]=x.useState([]),{value:h}=Re("3298726333"),f=ie({mutationFn:({value:j})=>I.setWorkspaceCustomActionsDomains(s,j),onSettled:()=>{o.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{n.danger(a.formatMessage(u.featureSettingsUpdateFailed))}});if(r==null)return null;const p=r.isTeam(),m=e.jsx(V,{title:u.thirdPartyGPTsTitle,description:u.thirdPartyGPTsDescription,className:"border-b border-token-border-light pb-4",children:e.jsx("div",{children:e.jsx(Ss,{workspaceId:s,value:t.allow_third_party_gpts,upsellEnterprise:p})})}),T=e.jsx(V,{title:u.sidebarTitle,children:e.jsx(Ts,{account:r,showThirdParty:!p&&t.allow_third_party_gpts===Q.ALLOW_SPECIFIC})}),N=t.allowed_custom_actions_domains!=null||t.beta_settings.workspace_gpt_custom_actions===!1;return e.jsxs(ts,{className:"max-w-5xl",children:[p&&m,p&&r.isOwnerOfAccount()&&T,p&&e.jsx(as,{}),e.jsx(V,{title:u.sharingSettingsTitle,upsellEnterprise:p,children:e.jsx(ke,{children:e.jsx(ks,{workspaceId:s,label:u.gptSharingTitle,disabled:p,setting:De.GPT_SHARE_SETTINGS,defaultValue:t.share_settings.gpt_share_setting,values:[{display:u.anyOneSelect,value:Z.ANYONE},{display:u.workspaceMembersOnlySelect,value:Z.WORKSPACE_ONLY},{display:u.inviteOnlySelect,value:Z.NO_ONE}]})})}),e.jsx(V,{title:u.workspaceGPTsTitle,description:u.workspaceGPTsDescription,upsellEnterprise:p,children:e.jsxs(ke,{children:[e.jsx(we,{label:u.browseOptionTitle,feature:ge.BROWSING,value:t.beta_settings.browsing,workspaceId:s,tooltip:u.browseTooltip,disabled:p}),h?e.jsxs("div",{className:"flex flex-col gap-4 py-6",children:[e.jsx("div",{className:"text-xl font-semibold",children:e.jsx(i,{id:"ugI3Yt",defaultMessage:"GPT actions"})}),e.jsx("div",{className:"py-2 text-sm text-token-text-secondary",children:e.jsx(i,{id:"HY2eof",defaultMessage:"GPT actions allow GPTs to call third-party APIs for tasks such as retrieving or modifying data. GPT actions are defined by GPT builders, and you can limit the domains that can be used for GPTs created in your workspace."})}),e.jsxs("div",{className:"flex flex-row items-center gap-4",children:[e.jsx(se,{checked:!N,id:"allow-all-domains",onChange:j=>{j.currentTarget.checked?(g(t.allowed_custom_actions_domains),f.mutate({value:null})):f.mutate({value:l??[]})},label:e.jsxs("span",{className:"flex flex-row items-center",children:[e.jsx(i,{id:"WnWoqJ",defaultMessage:"Allow all domains for GPT actions"}),e.jsx(Me,{sideOffset:4,interactive:!0,delayDuration:0,label:e.jsx(i,{id:"KjJtEm",defaultMessage:"Limit the Internet domains that can be used by GPTs created in your workspace. This does not apply to third-party GPTs."}),side:"top",children:e.jsx(Ve,{})})]})}),f.isPending&&e.jsx(ee,{})]}),N&&e.jsx(ds,{value:t.allowed_custom_actions_domains??[],title:a.formatMessage({id:"YetDcq",defaultMessage:"Domains"}),onChange:j=>{f.mutate({value:j})},emptyMessage:a.formatMessage({id:"rFH4IP",defaultMessage:"No domains added. No GPT actions will be allowed."})})]}):e.jsx(we,{label:u.customActionsOptionTitle,feature:ge.WORKSPACE_GPT_CUSTOM_ACTIONS,value:t.beta_settings.workspace_gpt_custom_actions,workspaceId:s,tooltip:u.customActionsTooltip,disabled:p})]})}),!p&&m,!p&&r.isOwnerOfAccount()&&T]})}function vs({currentWorkspaceId:s}){const{data:t,isLoading:a}=Ge(s),n=G();return e.jsxs(e.Fragment,{children:[e.jsx(Ae,{children:e.jsx("title",{children:n.formatMessage(u.sidebarTitle)})}),e.jsx(Le,{title:n.formatMessage(u.sidebarTitle)}),e.jsx(ze,{showSpinner:a,children:t===void 0?null:e.jsx(Ps,{workspaceId:s,data:t})})]})}const u=J({sidebarTitle:{id:"workspaceSettingsOld.sidebarTitle",defaultMessage:"GPTs"},allowAllOption:{id:"workspaceSettingsOld.allowAllOption",defaultMessage:"Allow all"},ownerApprovedOnlyOption:{id:"workspaceSettingsOld.ownerApprovedOnlyOption",defaultMessage:"Owner-approved only"},dontAllowOption:{id:"workspaceSettingsOld.dontAllowOption",defaultMessage:"Don't allow"},retentionPolicyTitle:{id:"workspaceSettingsOld.retentionPolicyTitle",defaultMessage:"Retention policy"},thirdPartyGPTsTitle:{id:"workspaceSettingsOld.thirdPartyGPTsTitle",defaultMessage:"Third-party"},thirdPartyGPTsDescription:{id:"workspaceSettingsOld.thirdPartyGPTsDescription",defaultMessage:"Manage whether members can use GPTs created outside your workspace."},customActionsTooltip:{id:"workspaceSettingsOld.customActionsTooltip",defaultMessage:"Allow GPTs to use third-party services for tasks such as finding flights. Actions are defined by GPT builders."},browseTooltip:{id:"workspaceSettingsOld.browseTooltip",defaultMessage:"Allow ChatGPT and GPTs to browse the internet to answer questions about recent topics and events."},customActionsOptionTitle:{id:"workspaceSettingsOld.pluginsOptionTitle.0",defaultMessage:"Custom actions"},browseOptionTitle:{id:"workspaceSettingsOld.browseOptionTitle",defaultMessage:"Browsing with Bing"},workspaceGPTsTitle:{id:"workspaceSettingsOld.workspaceGPTsTitle",defaultMessage:"Workspace"},appearanceTitle:{id:"workspaceSettingsOld.appearanceTitle",defaultMessage:"Appearance"},sharingSettingsTitle:{id:"workspaceSettingsOld.sharingSettingsTitle",defaultMessage:"Sharing"},gptSharingTitle:{id:"workspaceSettingsOld.gptSharingTitle",defaultMessage:"GPTs can be shared with..."},chatSharingTitle:{id:"workspaceSettingsOld.chatSharingTitle",defaultMessage:"Chats can be shared with..."},workspaceMembersOnlySelect:{id:"workspaceSettingsOld.workspaceMembersOnlySelect",defaultMessage:"Workspace members only"},anyOneSelect:{id:"workspaceSettingsOld.anyOneSelect",defaultMessage:"Anyone"},noOneSelect:{id:"workspaceSettingsOld.noOneSelect",defaultMessage:"No one"},inviteOnlySelect:{id:"workspaceSettingsOld.inviteOnlySelect",defaultMessage:"Invite only"},featureSettingsUpdateFailed:{id:"workspaceSettingsOld.featureSettingsUpdateFailed",defaultMessage:"Failed to update feature setting"},conversationRetention:{id:"workspaceSettingsOld.conversationRetention",defaultMessage:"Chat retention"},retentionInfinite:{id:"workspaceSettingsOld.retentionInfinite",defaultMessage:"Infinite"},retentionNinetyDays:{id:"workspaceSettingsOld.retentionNinetyDays",defaultMessage:"90 days"},retentionOneYear:{id:"workspaceSettingsOld.retentionOneYear",defaultMessage:"1 year"},retentionCustomDays:{id:"workspaceSettingsOld.retentionCustomDays",defaultMessage:"{num} days"},retentionChange:{id:"workspaceSettingsOld.retentionChange",defaultMessage:"Contact your account manager to change this setting."},workspaceGPTsDescription:{id:"workspaceSettingsOld.workspaceGPTsDescription",defaultMessage:"Manage which capabilities are available for GPTs built in your workspace or by ChatGPT. This does not apply to third-party GPTs."},enterpriseUpsellPill:{id:"workspaceSettingsOld.enterpriseUpsellPill",defaultMessage:"Enterprise"},retentionSettingTooltip:{id:"workspaceSettingsOld.retentionSettingTooltip",defaultMessage:"Contact your account manager to change this setting"},enterpriseRequiredMessage:{id:"workspaceSettingsOld.enterpriseRequiredMessage",defaultMessage:"Only workspaces with the Enterprise plan can change these settings"},shareRecipientTitlePrivate:{id:"workspaceSettingsOld.shareRecipientTitlePrivate",defaultMessage:"Private"},shareRecipientTitleLink:{id:"workspaceSettingsOld.shareRecipientTitleLink",defaultMessage:"Link"},shareRecipientTitlePublic:{id:"workspaceSettingsOld.shareRecipientTitlePublic",defaultMessage:"Public"}});function bt(){const s=os();return cs(),e.jsx(vs,{...s})}export{bt as default};
//# sourceMappingURL=nt9qbsnpgbus009d.js.map
