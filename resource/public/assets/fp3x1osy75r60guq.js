import{I as o,D as c,j as e,e6 as j,ak as v,G as i,H as w,C as L,d2 as A,r as m}from"./kkasil63rmfidan7.js";import{C as M,a as C,L as W,P as _,B as P,p as U,b as D,c as N,d as T}from"./vwbttxho62xur7y2.js";import{a as V,b as S}from"./ivob0jami7433u2z.js";import{u as q,a as R}from"./h5df8t6lrx16jopu.js";import"./spwglx8qg6louqra.js";import"./m5ko8xkwcu432ruw.js";import"./cx18eyjdoqhm6wym.js";import"./mj8peo9z2289cr8u.js";import"./gazk9g3ps3xf2gya.js";import"./ebnn6k9808w4u7tm.js";import"./c701sb993wyon030.js";import"./kn4ay466vw8pwdsq.js";import"./oftwnvl1jmjhvp0w.js";import"./otgfxa9drn6yfgzy.js";import"./celc67mw5gzy5u94.js";import"./o9kbfeeefi73xxcs.js";import"./c8spuoldjzhkt44r.js";import"./ccekf5b4p6qn06fd.js";import"./n6qeugiyhx7dwak2.js";import"./gyginfcruiicugx2.js";import"./c2j3p94ulwvtdlsc.js";M.register(C,W,_,P,U,D,N);async function B({queryKey:[s,{workspaceId:t}]}){return L.getWorkspaceAnalytics(t)}function E(s){return v({queryKey:["workspace-analytics",{workspaceId:s}],queryFn:B})}function F(s){const t=getComputedStyle(document.body);return{animation:!1,scales:{y:{position:"right",beginAtZero:!0,ticks:{stepSize:3,color:t.getPropertyValue("--text-tertiary"),padding:12},grid:{tickLength:0,color:t.getPropertyValue("--border-medium")},border:{display:!1}},x:{grid:{display:!1},ticks:{color:t.getPropertyValue("--text-tertiary"),padding:20}}},plugins:{legend:!1,tooltip:{backgroundColor:t.getPropertyValue("--surface-primary"),titleColor:t.getPropertyValue("--text-primary"),bodyColor:t.getPropertyValue("--text-secondary"),displayColors:!1,padding:{top:8,left:8,right:8,bottom:8}}}}}function g({data:s,label:t,getWeekValue:r}){const l=c(),d=A().theme,k=m.useMemo(()=>F(),[d]),h=m.useMemo(()=>getComputedStyle(document.body).getPropertyValue("--text-secondary"),[d]),b={labels:s.weekly_data.map(u=>l.formatDate(u.week,{month:"numeric",day:"numeric"})),datasets:[{label:t,data:s.weekly_data.map(r),borderWidth:0,backgroundColor:h,barThickness:20}]};return e.jsx("div",{className:"flex h-full w-full items-center justify-center bg-token-main-surface-secondary p-4",children:e.jsx(T,{options:k,data:b,height:192})})}function n({label:s,value:t}){return e.jsxs("div",{className:"w-1/3 rounded bg-token-main-surface-secondary px-4 py-2",children:[e.jsx("label",{className:"text-sm text-token-text-secondary",children:s}),e.jsx("div",{className:"text-xl font-semibold text-token-text-primary",children:t})]})}function H({data:s}){const t=c(),r=s.weekly_data[s.weekly_data.length-2];return e.jsxs("div",{className:"mt-10",children:[e.jsx("div",{className:"mb-2 font-semibold text-token-text-primary",children:e.jsx(i,{...a.totals})}),e.jsxs("div",{className:"mb-16 flex gap-4",children:[e.jsx(n,{label:t.formatMessage(a.usersLabel),value:s.total_users}),e.jsx(n,{label:t.formatMessage(a.conversationsLabel),value:s.total_conversations}),e.jsx(n,{label:t.formatMessage(a.messagesLabel),value:s.total_messages})]}),e.jsxs(p,{children:[e.jsx("div",{className:"flex flex-col justify-between p-4",children:e.jsxs("div",{children:[e.jsx(y,{children:e.jsx(i,{...a.usageTitle})}),r!=null&&e.jsxs("div",{children:[e.jsx(x,{children:r.message_count}),e.jsx(f,{children:e.jsx(i,{...a.messagesLastWeek})})]})]})}),e.jsx("div",{children:e.jsx(g,{data:s,label:t.formatMessage(a.messagesChartLabel),getWeekValue:l=>l.message_count})})]}),e.jsxs(p,{children:[e.jsx("div",{children:e.jsx(g,{data:s,label:t.formatMessage(a.activeUsersChartLabel),getWeekValue:l=>l.active_users_count})}),e.jsx("div",{className:"flex grow flex-col justify-between p-4",children:e.jsxs("div",{children:[e.jsx(y,{children:e.jsx(i,{...a.weeklyUsersTitle})}),r!=null&&e.jsxs("div",{children:[e.jsx(x,{children:r.active_users_count}),e.jsx(f,{children:e.jsx(i,{...a.activeUsersLastWeek})})]})]})})]})]})}const p=o.div`mb-12 grid grid-cols-1 rounded-lg overflow-hidden border border-token-border-light sm:grid-cols-2`,y=o.div`font-semibold`,x=o.div`font-semibold text-3xl`,f=o.div`text-sm text-token-text-tertiary`;function z({currentWorkspaceId:s}){const t=c(),{data:r,isLoading:l}=E(s);return e.jsxs(e.Fragment,{children:[e.jsx(j,{children:e.jsx("title",{children:t.formatMessage(a.title)})}),e.jsx(V,{title:t.formatMessage(a.title),subtitle:t.formatMessage(a.pageDescription)}),e.jsx(S,{showSpinner:l,children:r!==void 0?e.jsx(H,{data:r}):null})]})}const a=w({title:{id:"workspaceAnalytics.title",defaultMessage:"Workspace Analytics"},pageDescription:{id:"workspaceAnalytics.understand",defaultMessage:"Understand how your workspace is using ChatGPT"},totals:{id:"workspaceAnalytics.totals",defaultMessage:"Totals over last 30 days"},usersLabel:{id:"workspaceAnalytics.usersLabel",defaultMessage:"Users"},conversationsLabel:{id:"workspaceAnalytics.conversationsLabel",defaultMessage:"Conversations"},messagesLabel:{id:"workspaceAnalytics.messagesLabel",defaultMessage:"Messages"},usageTitle:{id:"workspaceAnalytics.usageTitle",defaultMessage:"Usage"},messagesLastWeek:{id:"workspaceAnalytics.messagesLastWeek",defaultMessage:"Messages processed last week"},messagesLast30Days:{id:"workspaceAnalytics.messagesLast30Days",defaultMessage:"{count, plural, =0 {No messages} one {# message} other {# messages}} processed over last 30 days"},messagesChartLabel:{id:"workspaceAnalytics.messagesChartLabel",defaultMessage:"Messages"},weeklyUsersTitle:{id:"workspaceAnalytics.weeklyUsersTitle",defaultMessage:"Weekly users"},activeUsersChartLabel:{id:"workspaceAnalytics.activeUsersChartLabel",defaultMessage:"Active users"},activeUsersLastWeek:{id:"workspaceAnalytics.activeUsersLastWeek",defaultMessage:"Active users last week"},usersLast30Days:{id:"workspaceAnalytics.usersLast30Days",defaultMessage:"{count, plural, =0 {No active users} one {# active user} other {# active user}} over last 30 days"}});function G(s){return e.jsx(z,{...s})}function me(){const s=q();return R(),e.jsx(G,{...s})}export{me as default};
//# sourceMappingURL=fp3x1osy75r60guq.js.map
