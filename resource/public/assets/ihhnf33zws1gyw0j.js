import{T as r,Q as o,r as h,ad as g,cf as l,aK as y,aw as f,Z as p,D as v}from"./cbv020t7gzp4f872.js";import{bN as n,bO as R,bP as T}from"./gpe91l6ql3o0s610.js";import{P as i,k as A}from"./eprwd5wd9a7hvvfw.js";import{s as P}from"./hte00x4vz53jf7hc.js";import{e as b,i as C,T as w}from"./lw9lle2awfx0m3zh.js";const x="prompt-textarea";function M(){var e;(e=document.getElementById(x))==null||e.focus()}const F={getAndReset:(e,s)=>{const t=r.getItem(o.RestoreMessageAfterOauthRedirect);return r.removeItem(o.RestoreMessageAfterOauthRedirect),!t||t.userId!==e||s!==t.serverThreadId||Date.now()>t.expiresAt?null:t},set:(e,s,t)=>{const a={userId:e,serverThreadId:s,inputText:t,expiresAt:Date.now()+6e4};r.setItem(o.RestoreMessageAfterOauthRedirect,a)}},q=()=>i.useState(i.getPersistedSystemHints).has(n.Search),z=()=>{const e=i.useStore();return h.useCallback(s=>{s?e.addPersistedSystemHint(n.Search):e.removePersistedSystemHint(n.Search)},[e])};async function H(e,s){const t=T(e),a=t??await p.getConversation(e);return s==null&&t&&(s=!0),t||v.addTiming("chatgpt.web.chatPage.loadExistingConversation"),w.initThreadFromServerData(e,a,s,void 0,s),P(a.conversation_id,a.async_status??null),a}const K=e=>{const{asPath:s,replace:t}=g(),a=l(),u=b(),d=y();f({queryKey:["conversation",e],queryFn:()=>H(e).catch(m=>{const c=R(s),S=c!=null?A(c):"/";throw t(S,void 0,{shallow:!0}),d.danger(`Unable to load conversation ${e}`,{testId:"conversation-fetch-error-toaster"}),m}),enabled:!C(e)&&!a&&!u,refetchOnMount:!0})};export{F as P,x as T,z as a,q as b,H as f,M as t,K as u};
//# sourceMappingURL=ihhnf33zws1gyw0j.js.map
