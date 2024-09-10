import{r as y,j as s,_ as l,bA as f,f4 as mr}from"./kkasil63rmfidan7.js";import"./spwglx8qg6louqra.js";var H={},G=y.createContext(H),fr=(r,e)=>l({},r,e),jr=()=>y.useContext(G),F=y.createContext(()=>{});F.displayName="JVR.DispatchShowTools";function hr(){return y.useReducer(fr,H)}function X(){return y.useContext(F)}var Y=r=>{var{initial:e,dispatch:a,children:t}=r;return s.jsx(G.Provider,{value:e,children:s.jsx(F.Provider,{value:a,children:t})})};Y.displayName="JVR.ShowTools";var ee={},re=y.createContext(ee),xr=(r,e)=>l({},r,e),_=()=>y.useContext(re),K=y.createContext(()=>{});K.displayName="JVR.DispatchExpands";function Nr(){return y.useReducer(xr,ee)}function wr(){return y.useContext(K)}var ae=r=>{var{initial:e,dispatch:a,children:t}=r;return s.jsx(re.Provider,{value:e,children:s.jsx(K.Provider,{value:a,children:t})})};ae.displayName="JVR.Expands";var te={Str:{as:"span","data-type":"string",style:{color:"var(--w-rjv-type-string-color, #cb4b16)"},className:"w-rjv-type",children:"string"},Url:{as:"a",style:{color:"var(--w-rjv-type-url-color, #0969da)"},"data-type":"url",className:"w-rjv-type",children:"url"},Undefined:{style:{color:"var(--w-rjv-type-undefined-color, #586e75)"},as:"span","data-type":"undefined",className:"w-rjv-type",children:"undefined"},Null:{style:{color:"var(--w-rjv-type-null-color, #d33682)"},as:"span","data-type":"null",className:"w-rjv-type",children:"null"},Map:{style:{color:"var(--w-rjv-type-map-color, #268bd2)",marginRight:3},as:"span","data-type":"map",className:"w-rjv-type",children:"Map"},Nan:{style:{color:"var(--w-rjv-type-nan-color, #859900)"},as:"span","data-type":"nan",className:"w-rjv-type",children:"NaN"},Bigint:{style:{color:"var(--w-rjv-type-bigint-color, #268bd2)"},as:"span","data-type":"bigint",className:"w-rjv-type",children:"bigint"},Int:{style:{color:"var(--w-rjv-type-int-color, #268bd2)"},as:"span","data-type":"int",className:"w-rjv-type",children:"int"},Set:{style:{color:"var(--w-rjv-type-set-color, #268bd2)",marginRight:3},as:"span","data-type":"set",className:"w-rjv-type",children:"Set"},Float:{style:{color:"var(--w-rjv-type-float-color, #859900)"},as:"span","data-type":"float",className:"w-rjv-type",children:"float"},True:{style:{color:"var(--w-rjv-type-boolean-color, #2aa198)"},as:"span","data-type":"bool",className:"w-rjv-type",children:"bool"},False:{style:{color:"var(--w-rjv-type-boolean-color, #2aa198)"},as:"span","data-type":"bool",className:"w-rjv-type",children:"bool"},Date:{style:{color:"var(--w-rjv-type-date-color, #268bd2)"},as:"span","data-type":"date",className:"w-rjv-type",children:"date"}},le=y.createContext(te),Cr=(r,e)=>l({},r,e),N=()=>y.useContext(le),U=y.createContext(()=>{});U.displayName="JVR.DispatchTypes";function br(){return y.useReducer(Cr,te)}function gr(){return y.useContext(U)}function se(r){var{initial:e,dispatch:a,children:t}=r;return s.jsx(le.Provider,{value:e,children:s.jsx(U.Provider,{value:a,children:t})})}se.displayName="JVR.Types";var Rr=["style"];function ne(r){var{style:e}=r,a=f(r,Rr),t=l({cursor:"pointer",height:"1em",width:"1em",userSelect:"none",display:"inline-flex"},e);return s.jsx("svg",l({viewBox:"0 0 24 24",fill:"var(--w-rjv-arrow-color, currentColor)",style:t},a,{children:s.jsx("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"})}))}ne.displayName="JVR.TriangleArrow";var ie={Arrow:{as:"span",className:"w-rjv-arrow",style:{transform:"rotate(0deg)",transition:"all 0.3s"},children:s.jsx(ne,{})},Colon:{as:"span",style:{color:"var(--w-rjv-colon-color, var(--w-rjv-color))",marginLeft:0,marginRight:2},className:"w-rjv-colon",children:":"},Quote:{as:"span",style:{color:"var(--w-rjv-quotes-color, #236a7c)"},className:"w-rjv-quotes",children:'"'},ValueQuote:{as:"span",style:{color:"var(--w-rjv-quotes-string-color, #cb4b16)"},className:"w-rjv-quotes",children:'"'},BracketsLeft:{as:"span",style:{color:"var(--w-rjv-brackets-color, #236a7c)"},className:"w-rjv-brackets-start",children:"["},BracketsRight:{as:"span",style:{color:"var(--w-rjv-brackets-color, #236a7c)"},className:"w-rjv-brackets-end",children:"]"},BraceLeft:{as:"span",style:{color:"var(--w-rjv-curlybraces-color, #236a7c)"},className:"w-rjv-curlybraces-start",children:"{"},BraceRight:{as:"span",style:{color:"var(--w-rjv-curlybraces-color, #236a7c)"},className:"w-rjv-curlybraces-end",children:"}"}},oe=y.createContext(ie),kr=(r,e)=>l({},r,e),g=()=>y.useContext(oe),O=y.createContext(()=>{});O.displayName="JVR.DispatchSymbols";function Vr(){return y.useReducer(kr,ie)}function Lr(){return y.useContext(O)}var ve=r=>{var{initial:e,dispatch:a,children:t}=r;return s.jsx(oe.Provider,{value:e,children:s.jsx(O.Provider,{value:a,children:t})})};ve.displayName="JVR.Symbols";var de={Copied:{className:"w-rjv-copied",style:{height:"1em",width:"1em",cursor:"pointer",verticalAlign:"middle",marginLeft:5}},CountInfo:{as:"span",className:"w-rjv-object-size",style:{color:"var(--w-rjv-info-color, #0000004d)",paddingLeft:8,fontStyle:"italic"}},CountInfoExtra:{as:"span",className:"w-rjv-object-extra",style:{paddingLeft:8}},Ellipsis:{as:"span",style:{cursor:"pointer",color:"var(--w-rjv-ellipsis-color, #cb4b16)",userSelect:"none"},className:"w-rjv-ellipsis",children:"..."},Row:{as:"div",className:"w-rjv-line"},KeyName:{as:"span",className:"w-rjv-object-key"}},ce=y.createContext(de),Sr=(r,e)=>l({},r,e),k=()=>y.useContext(ce),Q=y.createContext(()=>{});Q.displayName="JVR.DispatchSection";function Tr(){return y.useReducer(Sr,de)}function Jr(){return y.useContext(Q)}var ue=r=>{var{initial:e,dispatch:a,children:t}=r;return s.jsx(ce.Provider,{value:e,children:s.jsx(Q.Provider,{value:a,children:t})})};ue.displayName="JVR.Section";var pe={objectSortKeys:!1,indentWidth:15},P=y.createContext(pe);P.displayName="JVR.Context";var ye=y.createContext(()=>{});ye.displayName="JVR.DispatchContext";function Er(r,e){return l({},r,e)}var J=()=>y.useContext(P),me=r=>{var{children:e,initialState:a,initialTypes:t}=r,[v,o]=y.useReducer(Er,Object.assign({},pe,a)),[i,n]=hr(),[d,c]=Nr(),[u,p]=br(),[m,j]=Vr(),[x,w]=Tr();return y.useEffect(()=>o(l({},a)),[a]),s.jsx(P.Provider,{value:v,children:s.jsx(ye.Provider,{value:o,children:s.jsx(Y,{initial:i,dispatch:n,children:s.jsx(ae,{initial:d,dispatch:c,children:s.jsx(se,{initial:l({},u,t),dispatch:p,children:s.jsx(ve,{initial:m,dispatch:j,children:s.jsx(ue,{initial:x,dispatch:w,children:e})})})})})})})};me.displayName="JVR.Provider";function Br(r){if(r==null)throw new TypeError("Cannot destructure "+r)}var Dr=["isNumber"],$r=["as","render"],Mr=["as","render"],Ar=["as","render"],_r=["as","style","render"],Ir=["as","render"],Fr=["as","render"],Kr=["as","render"],Ur=["as","render"],I=r=>{var{Quote:e={}}=g(),{isNumber:a}=r,t=f(r,Dr);if(a)return null;var{as:v,render:o}=e,i=f(e,$r),n=v||"span",d=l({},t,i),c=o&&typeof o=="function"&&o(d);return c||s.jsx(n,l({},d))};I.displayName="JVR.Quote";var M=r=>{var{ValueQuote:e={}}=g(),a=l({},(Br(r),r)),{as:t,render:v}=e,o=f(e,Mr),i=t||"span",n=l({},a,o),d=v&&typeof v=="function"&&v(n);return d||s.jsx(i,l({},n))};M.displayName="JVR.ValueQuote";var fe=()=>{var{Colon:r={}}=g(),{as:e,render:a}=r,t=f(r,Ar),v=e||"span",o=a&&typeof a=="function"&&a(t);return o||s.jsx(v,l({},t))};fe.displayName="JVR.Colon";var je=r=>{var{Arrow:e={}}=g(),a=_(),{expandKey:t}=r,v=!!a[t],{as:o,style:i,render:n}=e,d=f(e,_r),c=o||"span",u=n&&typeof n=="function",p=u&&n(l({},d,{"data-expanded":v,style:l({},i,r.style)}));return p||s.jsx(c,l({},d,{style:l({},i,r.style)}))};je.displayName="JVR.Arrow";var he=r=>{var{isBrackets:e}=r,{BracketsLeft:a={},BraceLeft:t={}}=g();if(e){var{as:v,render:o}=a,i=f(a,Ir),n=v||"span",d=o&&typeof o=="function"&&o(i);return d||s.jsx(n,l({},i))}var{as:c,render:u}=t,p=f(t,Fr),m=c||"span",j=u&&typeof u=="function"&&u(p);return j||s.jsx(m,l({},p))};he.displayName="JVR.BracketsOpen";var Z=r=>{var{isBrackets:e,isVisiable:a}=r;if(!a)return null;var{BracketsRight:t={},BraceRight:v={}}=g();if(e){var{as:o,render:i}=t,n=f(t,Kr),d=o||"span",c=i&&typeof i=="function"&&i(n);return c||s.jsx(d,l({},n))}var{as:u,render:p}=v,m=f(v,Ur),j=u||"span",x=p&&typeof p=="function"&&p(m);return x||s.jsx(j,l({},m))};Z.displayName="JVR.BracketsClose";var xe=r=>{var e,{value:a,expandKey:t,level:v}=r,o=_(),i=Array.isArray(a),{collapsed:n}=J(),d=a instanceof Set,c=(e=o[t])!=null?e:typeof n=="boolean"?n:typeof n=="number"?v>n:!1,u=Object.keys(a).length;if(c||u===0)return null;var p={paddingLeft:4};return s.jsx("div",{style:p,children:s.jsx(Z,{isBrackets:i||d,isVisiable:!0})})};xe.displayName="JVR.NestedClose";var Or=["as","render"],Qr=["as","render"],Pr=["as","render"],Zr=["as","render"],qr=["as","render"],zr=["as","render"],Wr=["as","render"],Hr=["as","render"],Gr=["as","render"],Xr=["as","render"],Yr=["as","render"],ea=["as","render"],ra=["as","render"],Ne=r=>{var{value:e,keyName:a}=r,{Set:t={},displayDataTypes:v}=N(),o=e instanceof Set;if(!o||!v)return null;var{as:i,render:n}=t,d=f(t,Or),c=n&&typeof n=="function",u=c&&n(d,{type:"type",value:e,keyName:a});if(u)return u;var p=i||"span";return s.jsx(p,l({},d))};Ne.displayName="JVR.SetComp";var we=r=>{var{value:e,keyName:a}=r,{Map:t={},displayDataTypes:v}=N(),o=e instanceof Map;if(!o||!v)return null;var{as:i,render:n}=t,d=f(t,Qr),c=n&&typeof n=="function",u=c&&n(d,{type:"type",value:e,keyName:a});if(u)return u;var p=i||"span";return s.jsx(p,l({},d))};we.displayName="JVR.MapComp";var V={opacity:.75,paddingRight:4},Ce=r=>{var{children:e="",keyName:a}=r,{Str:t={},displayDataTypes:v}=N(),{shortenTextAfterLength:o=30}=J(),{as:i,render:n}=t,d=f(t,Pr),c=e,[u,p]=y.useState(o&&c.length>=o);y.useEffect(()=>p(o&&c.length>=o),[o]);var m=i||"span",j=l({},V,t.style||{});o>0&&(d.style=l({},d.style,{cursor:c.length<=o?"initial":"pointer"}),c.length>o&&(d.onClick=()=>{p(!u)}));var x=u?c.slice(0,o)+"...":c,w=n&&typeof n=="function",C=w&&n(l({},d,{style:j}),{type:"type",value:e,keyName:a}),b=w&&n(l({},d,{children:x,className:"w-rjv-value"}),{type:"value",value:e,keyName:a});return s.jsxs(y.Fragment,{children:[v&&(C||s.jsx(m,l({},d,{style:j}))),b||s.jsxs(y.Fragment,{children:[s.jsx(M,{}),s.jsx(m,l({},d,{className:"w-rjv-value",children:x})),s.jsx(M,{})]})]})};Ce.displayName="JVR.TypeString";var be=r=>{var{children:e,keyName:a}=r,{True:t={},displayDataTypes:v}=N(),{as:o,render:i}=t,n=f(t,Zr),d=o||"span",c=l({},V,t.style||{}),u=i&&typeof i=="function",p=u&&i(l({},n,{style:c}),{type:"type",value:e,keyName:a}),m=u&&i(l({},n,{children:e,className:"w-rjv-value"}),{type:"value",value:e,keyName:a});return s.jsxs(y.Fragment,{children:[v&&(p||s.jsx(d,l({},n,{style:c}))),m||s.jsx(d,l({},n,{className:"w-rjv-value",children:e==null?void 0:e.toString()}))]})};be.displayName="JVR.TypeTrue";var ge=r=>{var{children:e,keyName:a}=r,{False:t={},displayDataTypes:v}=N(),{as:o,render:i}=t,n=f(t,qr),d=o||"span",c=l({},V,t.style||{}),u=i&&typeof i=="function",p=u&&i(l({},n,{style:c}),{type:"type",value:e,keyName:a}),m=u&&i(l({},n,{children:e,className:"w-rjv-value"}),{type:"value",value:e,keyName:a});return s.jsxs(y.Fragment,{children:[v&&(p||s.jsx(d,l({},n,{style:c}))),m||s.jsx(d,l({},n,{className:"w-rjv-value",children:e==null?void 0:e.toString()}))]})};ge.displayName="JVR.TypeFalse";var Re=r=>{var{children:e,keyName:a}=r,{Float:t={},displayDataTypes:v}=N(),{as:o,render:i}=t,n=f(t,zr),d=o||"span",c=l({},V,t.style||{}),u=i&&typeof i=="function",p=u&&i(l({},n,{style:c}),{type:"type",value:e,keyName:a}),m=u&&i(l({},n,{children:e,className:"w-rjv-value"}),{type:"value",value:e,keyName:a});return s.jsxs(y.Fragment,{children:[v&&(p||s.jsx(d,l({},n,{style:c}))),m||s.jsx(d,l({},n,{className:"w-rjv-value",children:e==null?void 0:e.toString()}))]})};Re.displayName="JVR.TypeFloat";var ke=r=>{var{children:e,keyName:a}=r,{Int:t={},displayDataTypes:v}=N(),{as:o,render:i}=t,n=f(t,Wr),d=o||"span",c=l({},V,t.style||{}),u=i&&typeof i=="function",p=u&&i(l({},n,{style:c}),{type:"type",value:e,keyName:a}),m=u&&i(l({},n,{children:e,className:"w-rjv-value"}),{type:"value",value:e,keyName:a});return s.jsxs(y.Fragment,{children:[v&&(p||s.jsx(d,l({},n,{style:c}))),m||s.jsx(d,l({},n,{className:"w-rjv-value",children:e==null?void 0:e.toString()}))]})};ke.displayName="JVR.TypeInt";var Ve=r=>{var{children:e,keyName:a}=r,{Bigint:t={},displayDataTypes:v}=N(),{as:o,render:i}=t,n=f(t,Hr),d=o||"span",c=l({},V,t.style||{}),u=i&&typeof i=="function",p=u&&i(l({},n,{style:c}),{type:"type",value:e,keyName:a}),m=u&&i(l({},n,{children:e,className:"w-rjv-value"}),{type:"value",value:e,keyName:a});return s.jsxs(y.Fragment,{children:[v&&(p||s.jsx(d,l({},n,{style:c}))),m||s.jsx(d,l({},n,{className:"w-rjv-value",children:(e==null?void 0:e.toString())+"n"}))]})};Ve.displayName="JVR.TypeFloat";var Le=r=>{var{children:e,keyName:a}=r,{Url:t={},displayDataTypes:v}=N(),{as:o,render:i}=t,n=f(t,Gr),d=o||"span",c=l({},V,t.style),u=i&&typeof i=="function",p=u&&i(l({},n,{style:c}),{type:"type",value:e,keyName:a}),m=u&&i(l({},n,{children:e==null?void 0:e.href,className:"w-rjv-value"}),{type:"value",value:e,keyName:a});return s.jsxs(y.Fragment,{children:[v&&(p||s.jsx(d,l({},n,{style:c}))),m||s.jsxs("a",l({href:e==null?void 0:e.href,target:"_blank"},n,{className:"w-rjv-value",children:[s.jsx(M,{}),e==null?void 0:e.href,s.jsx(M,{})]}))]})};Le.displayName="JVR.TypeUrl";var Se=r=>{var{children:e,keyName:a}=r,{Date:t={},displayDataTypes:v}=N(),{as:o,render:i}=t,n=f(t,Xr),d=o||"span",c=l({},V,t.style||{}),u=i&&typeof i=="function",p=u&&i(l({},n,{style:c}),{type:"type",value:e,keyName:a}),m=e instanceof Date?e.toLocaleString():e,j=u&&i(l({},n,{children:m,className:"w-rjv-value"}),{type:"value",value:e,keyName:a});return s.jsxs(y.Fragment,{children:[v&&(p||s.jsx(d,l({},n,{style:c}))),j||s.jsx(d,l({},n,{className:"w-rjv-value",children:m}))]})};Se.displayName="JVR.TypeDate";var Te=r=>{var{children:e,keyName:a}=r,{Undefined:t={},displayDataTypes:v}=N(),{as:o,render:i}=t,n=f(t,Yr),d=o||"span",c=l({},V,t.style||{}),u=i&&typeof i=="function",p=u&&i(l({},n,{style:c}),{type:"type",value:e,keyName:a}),m=u&&i(l({},n,{children:e,className:"w-rjv-value"}),{type:"value",value:e,keyName:a});return s.jsxs(y.Fragment,{children:[v&&(p||s.jsx(d,l({},n,{style:c}))),m]})};Te.displayName="JVR.TypeUndefined";var Je=r=>{var{children:e,keyName:a}=r,{Null:t={},displayDataTypes:v}=N(),{as:o,render:i}=t,n=f(t,ea),d=o||"span",c=l({},V,t.style||{}),u=i&&typeof i=="function",p=u&&i(l({},n,{style:c}),{type:"type",value:e,keyName:a}),m=u&&i(l({},n,{children:e,className:"w-rjv-value"}),{type:"value",value:e,keyName:a});return s.jsxs(y.Fragment,{children:[v&&(p||s.jsx(d,l({},n,{style:c}))),m]})};Je.displayName="JVR.TypeNull";var Ee=r=>{var{children:e,keyName:a}=r,{Nan:t={},displayDataTypes:v}=N(),{as:o,render:i}=t,n=f(t,ra),d=o||"span",c=l({},V,t.style||{}),u=i&&typeof i=="function",p=u&&i(l({},n,{style:c}),{type:"type",value:e,keyName:a}),m=u&&i(l({},n,{children:e==null?void 0:e.toString(),className:"w-rjv-value"}),{type:"value",value:e,keyName:a});return s.jsxs(y.Fragment,{children:[v&&(p||s.jsx(d,l({},n,{style:c}))),m]})};Ee.displayName="JVR.TypeNan";var aa=r=>Number(r)===r&&r%1!==0||isNaN(r),Be=r=>{var{value:e,keyName:a}=r,t={keyName:a};return e instanceof URL?s.jsx(Le,l({},t,{children:e})):typeof e=="string"?s.jsx(Ce,l({},t,{children:e})):e===!0?s.jsx(be,l({},t,{children:e})):e===!1?s.jsx(ge,l({},t,{children:e})):e===null?s.jsx(Je,l({},t,{children:e})):e===void 0?s.jsx(Te,l({},t,{children:e})):e instanceof Date?s.jsx(Se,l({},t,{children:e})):typeof e=="number"&&isNaN(e)?s.jsx(Ee,l({},t,{children:e})):typeof e=="number"&&aa(e)?s.jsx(Re,l({},t,{children:e})):typeof e=="bigint"?s.jsx(Ve,l({},t,{children:e})):typeof e=="number"?s.jsx(ke,l({},t,{children:e})):null};Be.displayName="JVR.Value";function T(r,e,a){var t=Lr(),v=[r.className,e.className].filter(Boolean).join(" "),o=l({},r,e,{className:v,style:l({},r.style,e.style),children:e.children||r.children});y.useEffect(()=>t({[a]:o}),[e])}function R(r,e,a){var t=gr(),v=[r.className,e.className].filter(Boolean).join(" "),o=l({},r,e,{className:v,style:l({},r.style,e.style),children:e.children||r.children});y.useEffect(()=>t({[a]:o}),[e])}function E(r,e,a){var t=Jr(),v=[r.className,e.className].filter(Boolean).join(" "),o=l({},r,e,{className:v,style:l({},r.style,e.style),children:e.children||r.children});y.useEffect(()=>t({[a]:o}),[e])}var ta=["as","render"],De=r=>{var{KeyName:e={}}=k();return E(e,r,"KeyName"),null};De.displayName="JVR.KeyName";var $e=r=>{var{children:e,value:a,parentValue:t,keyName:v,keys:o}=r,i=typeof e=="number",n={color:i?"var(--w-rjv-key-number, #268bd2)":"var(--w-rjv-key-string, #002b36)"},{KeyName:d={}}=k(),{as:c,render:u}=d,p=f(d,ta);p.style=l({},p.style,n);var m=c||"span",j=u&&typeof u=="function"&&u(l({},p,{children:e}),{value:a,parentValue:t,keyName:v,keys:o});return j||s.jsx(m,l({},p,{children:e}))};$e.displayName="JVR.KeyNameComp";var la=["children","value","parentValue","keyName","keys"],sa=["as","render","children"],Me=r=>{var{Row:e={}}=k();return E(e,r,"Row"),null};Me.displayName="JVR.Row";var Ae=r=>{var{children:e,value:a,parentValue:t,keyName:v,keys:o}=r,i=f(r,la),{Row:n={}}=k(),{as:d,render:c}=n,u=f(n,sa),p=d||"div",m=c&&typeof c=="function"&&c(l({},i,u,{children:e}),{value:a,keyName:v,parentValue:t,keys:o});return m||s.jsx(p,l({},i,u,{children:e}))};Ae.displayName="JVR.RowComp";function na(r){var e=y.useRef();return y.useEffect(()=>{e.current=r}),e.current}function ia(r){var{value:e,highlightUpdates:a,highlightContainer:t}=r,v=na(e),o=y.useMemo(()=>{if(!a||v===void 0)return!1;if(typeof e!=typeof v)return!0;if(typeof e=="number")return isNaN(e)&&isNaN(v)?!1:e!==v;if(Array.isArray(e)!==Array.isArray(v))return!0;if(typeof e=="object"||typeof e=="function")return!1;if(e!==v)return!0},[a,e]);y.useEffect(()=>{t&&t.current&&o&&"animate"in t.current&&t.current.animate([{backgroundColor:"var(--w-rjv-update-color, #ebcb8b)"},{backgroundColor:""}],{duration:1e3,easing:"ease-in"})},[o,e,t])}var oa=["keyName","value","parentValue","expandKey","keys"],va=["as","render"],q=r=>{var{keyName:e,value:a,parentValue:t,expandKey:v,keys:o}=r,i=f(r,oa),{onCopied:n,enableClipboard:d}=J(),c=jr(),u=c[v],[p,m]=y.useState(!1),{Copied:j={}}=k();if(d===!1||!u)return null;var x=D=>{D.stopPropagation();var S="";typeof a=="number"&&a===1/0?S="Infinity":typeof a=="number"&&isNaN(a)?S="NaN":typeof a=="bigint"?S=a+"n":a instanceof Date?S=a.toLocaleString():S=JSON.stringify(a,null,2),n&&n(S,a),m(!0),navigator.clipboard.writeText(S).then(()=>{var $=setTimeout(()=>{m(!1),clearTimeout($)},3e3)}).catch($=>{})},w={style:{display:"inline-flex"},fill:p?"var(--w-rjv-copied-success-color, #28a745)":"var(--w-rjv-copied-color, currentColor)",onClick:x},{render:C}=j,b=f(j,va),L=l({},b,i,w,{style:l({},b.style,i.style,w.style)}),B=C&&typeof C=="function",A=B&&C(l({},L,{"data-copied":p}),{value:a,keyName:e,keys:o,parentValue:t});return A||(p?s.jsx("svg",l({viewBox:"0 0 32 36"},L,{children:s.jsx("path",{d:"M27.5,33 L2.5,33 L2.5,12.5 L27.5,12.5 L27.5,15.2249049 C29.1403264,13.8627542 29.9736597,13.1778155 30,13.1700887 C30,11.9705278 30,10.0804982 30,7.5 C30,6.1 28.9,5 27.5,5 L20,5 C20,2.2 17.8,0 15,0 C12.2,0 10,2.2 10,5 L2.5,5 C1.1,5 0,6.1 0,7.5 L0,33 C0,34.4 1.1,36 2.5,36 L27.5,36 C28.9,36 30,34.4 30,33 L30,26.1114493 L27.5,28.4926435 L27.5,33 Z M7.5,7.5 L10,7.5 C10,7.5 12.5,6.4 12.5,5 C12.5,3.6 13.6,2.5 15,2.5 C16.4,2.5 17.5,3.6 17.5,5 C17.5,6.4 18.8,7.5 20,7.5 L22.5,7.5 C22.5,7.5 25,8.6 25,10 L5,10 C5,8.5 6.1,7.5 7.5,7.5 Z M5,27.5 L10,27.5 L10,25 L5,25 L5,27.5 Z M28.5589286,16 L32,19.6 L21.0160714,30.5382252 L13.5303571,24.2571429 L17.1303571,20.6571429 L21.0160714,24.5428571 L28.5589286,16 Z M17.5,15 L5,15 L5,17.5 L17.5,17.5 L17.5,15 Z M10,20 L5,20 L5,22.5 L10,22.5 L10,20 Z"})})):s.jsx("svg",l({viewBox:"0 0 32 36"},L,{children:s.jsx("path",{d:"M27.5,33 L2.5,33 L2.5,12.5 L27.5,12.5 L27.5,20 L30,20 L30,7.5 C30,6.1 28.9,5 27.5,5 L20,5 C20,2.2 17.8,0 15,0 C12.2,0 10,2.2 10,5 L2.5,5 C1.1,5 0,6.1 0,7.5 L0,33 C0,34.4 1.1,36 2.5,36 L27.5,36 C28.9,36 30,34.4 30,33 L30,29 L27.5,29 L27.5,33 Z M7.5,7.5 L10,7.5 C10,7.5 12.5,6.4 12.5,5 C12.5,3.6 13.6,2.5 15,2.5 C16.4,2.5 17.5,3.6 17.5,5 C17.5,6.4 18.8,7.5 20,7.5 L22.5,7.5 C22.5,7.5 25,8.6 25,10 L5,10 C5,8.5 6.1,7.5 7.5,7.5 Z M5,27.5 L10,27.5 L10,25 L5,25 L5,27.5 Z M22.5,21.5 L22.5,16.5 L12.5,24 L22.5,31.5 L22.5,26.5 L32,26.5 L32,21.5 L22.5,21.5 Z M17.5,15 L5,15 L5,17.5 L17.5,17.5 L17.5,15 Z M10,20 L5,20 L5,22.5 L10,22.5 L10,20 Z"})})))};q.displayName="JVR.Copied";var _e=r=>{var e,{value:a,expandKey:t="",level:v,keys:o=[]}=r,i=_(),{objectSortKeys:n,indentWidth:d,collapsed:c}=J(),u=Array.isArray(a),p=(e=i[t])!=null?e:typeof c=="boolean"?c:typeof c=="number"?v>c:!1;if(p)return null;var m=u?Object.entries(a).map(x=>[Number(x[0]),x[1]]):Object.entries(a);n&&(m=n===!0?m.sort((x,w)=>{var[C]=x,[b]=w;return typeof C=="string"&&typeof b=="string"?C.localeCompare(b):0}):m.sort((x,w)=>{var[C,b]=x,[L,B]=w;return typeof C=="string"&&typeof L=="string"?n(C,L,b,B):0}));var j={borderLeft:"var(--w-rjv-border-left-width, 1px) var(--w-rjv-line-style, solid) var(--w-rjv-line-color, #ebebeb)",paddingLeft:d,marginLeft:6};return s.jsx("div",{className:"w-rjv-wrap",style:j,children:m.map((x,w)=>{var[C,b]=x;return s.jsx(Ie,{parentValue:a,keyName:C,keys:[...o,C],value:b,level:v},w)})})};_e.displayName="JVR.KeyValues";var z=r=>{var{keyName:e,parentValue:a,keys:t,value:v}=r,{highlightUpdates:o}=J(),i=typeof e=="number",n=y.useRef(null);return ia({value:v,highlightUpdates:o,highlightContainer:n}),s.jsxs(y.Fragment,{children:[s.jsxs("span",{ref:n,children:[s.jsx(I,{isNumber:i,"data-placement":"left"}),s.jsx($e,{keyName:e,value:v,keys:t,parentValue:a,children:e}),s.jsx(I,{isNumber:i,"data-placement":"right"})]}),s.jsx(fe,{})]})};z.displayName="JVR.KayName";var Ie=r=>{var{keyName:e,value:a,parentValue:t,level:v=0,keys:o=[]}=r,i=X(),n=y.useId(),d=Array.isArray(a),c=a instanceof Set,u=a instanceof Map,p=a instanceof Date,m=a instanceof URL,j=a&&typeof a=="object"&&!d&&!c&&!u&&!p&&!m,x=j||d||c||u;if(x){var w=c?Array.from(a):u?Object.fromEntries(a):a;return s.jsx(W,{keyName:e,value:w,parentValue:t,initialValue:a,keys:o,level:v+1})}var C={onMouseEnter:()=>i({[n]:!0}),onMouseLeave:()=>i({[n]:!1})};return s.jsxs(Ae,l({className:"w-rjv-line",value:a,keyName:e,keys:o,parentValue:t},C,{children:[s.jsx(z,{keyName:e,value:a,keys:o,parentValue:t}),s.jsx(Be,{keyName:e,value:a}),s.jsx(q,{keyName:e,value:a,keys:o,parentValue:t,expandKey:n})]}))};Ie.displayName="JVR.KeyValuesItem";var da=["value","keyName"],ca=["as","render"],Fe=r=>{var{CountInfoExtra:e={}}=k();return E(e,r,"CountInfoExtra"),null};Fe.displayName="JVR.CountInfoExtra";var Ke=r=>{var{value:e={},keyName:a}=r,t=f(r,da),{CountInfoExtra:v={}}=k(),{as:o,render:i}=v,n=f(v,ca);if(!i&&!n.children)return null;var d=o||"span",c=i&&typeof i=="function",u=l({},n,t),p=c&&i(u,{value:e,keyName:a});return p||s.jsx(d,l({},u))};Ke.displayName="JVR.CountInfoExtraComps";var ua=["value","keyName"],pa=["as","render"],Ue=r=>{var{CountInfo:e={}}=k();return E(e,r,"CountInfo"),null};Ue.displayName="JVR.CountInfo";var Oe=r=>{var{value:e={},keyName:a}=r,t=f(r,ua),{displayObjectSize:v}=J(),{CountInfo:o={}}=k();if(!v)return null;var{as:i,render:n}=o,d=f(o,pa),c=i||"span";d.style=l({},d.style,r.style);var u=Object.keys(e).length;d.children||(d.children=u+" items");var p=l({},d,t),m=n&&typeof n=="function",j=m&&n(l({},p,{"data-length":u}),{value:e,keyName:a});return j||s.jsx(c,l({},p))};Oe.displayName="JVR.CountInfoComp";var ya=["as","render"],Qe=r=>{var{Ellipsis:e={}}=k();return E(e,r,"Ellipsis"),null};Qe.displayName="JVR.Ellipsis";var Pe=r=>{var{isExpanded:e,value:a,keyName:t}=r,{Ellipsis:v={}}=k(),{as:o,render:i}=v,n=f(v,ya),d=o||"span",c=i&&typeof i=="function"&&i(l({},n,{"data-expanded":e}),{value:a,keyName:t});return c||(e?s.jsx(d,l({},n)):null)};Pe.displayName="JVR.EllipsisComp";var Ze=r=>{var e,{keyName:a,expandKey:t,keys:v,initialValue:o,value:i,parentValue:n,level:d}=r,c=_(),u=wr(),{onExpand:p,collapsed:m}=J(),j=Array.isArray(i),x=i instanceof Set,w=(e=c[t])!=null?e:typeof m=="boolean"?m:typeof m=="number"?d>m:!1,C=typeof i=="object",b=()=>{var $={expand:!w,value:i,keyid:t,keyName:a};p&&p($),u({[t]:$.expand})},L={display:"inline-flex",alignItems:"center"},B={transform:"rotate("+(w?"-90":"0")+"deg)",transition:"all 0.3s"},A=Object.keys(i).length,D=A!==0&&(j||x||C),S={style:L};return D&&(S.onClick=b),s.jsxs("span",l({},S,{children:[D&&s.jsx(je,{style:B,expandKey:t}),(a||typeof a=="number")&&s.jsx(z,{keyName:a}),s.jsx(Ne,{value:o,keyName:a}),s.jsx(we,{value:o,keyName:a}),s.jsx(he,{isBrackets:j||x}),s.jsx(Pe,{keyName:a,value:i,isExpanded:w}),s.jsx(Z,{isVisiable:w||!D,isBrackets:j||x}),s.jsx(Oe,{value:i,keyName:a}),s.jsx(Ke,{value:i,keyName:a}),s.jsx(q,{keyName:a,value:i,expandKey:t,parentValue:n,keys:v})]}))};Ze.displayName="JVR.NestedOpen";var ma=["className","children","parentValue","keyid","level","value","initialValue","keys","keyName"],W=y.forwardRef((r,e)=>{var{className:a="",parentValue:t,level:v=1,value:o,initialValue:i,keys:n,keyName:d}=r,c=f(r,ma),u=X(),p=y.useId(),m=[a,"w-rjv-inner"].filter(Boolean).join(" "),j={onMouseEnter:()=>u({[p]:!0}),onMouseLeave:()=>u({[p]:!1})};return s.jsxs("div",l({className:m,ref:e},c,j,{children:[s.jsx(Ze,{expandKey:p,value:o,level:v,keys:n,parentValue:t,keyName:d,initialValue:i}),s.jsx(_e,{expandKey:p,value:o,level:v,keys:n,parentValue:t,keyName:d}),s.jsx(xe,{expandKey:p,value:o,level:v})]}))});W.displayName="JVR.Container";var qe=r=>{var{BraceLeft:e={}}=g();return T(e,r,"BraceLeft"),null};qe.displayName="JVR.BraceLeft";var ze=r=>{var{BraceRight:e={}}=g();return T(e,r,"BraceRight"),null};ze.displayName="JVR.BraceRight";var We=r=>{var{BracketsLeft:e={}}=g();return T(e,r,"BracketsLeft"),null};We.displayName="JVR.BracketsLeft";var He=r=>{var{BracketsRight:e={}}=g();return T(e,r,"BracketsRight"),null};He.displayName="JVR.BracketsRight";var Ge=r=>{var{Arrow:e={}}=g();return T(e,r,"Arrow"),null};Ge.displayName="JVR.Arrow";var Xe=r=>{var{Colon:e={}}=g();return T(e,r,"Colon"),null};Xe.displayName="JVR.Colon";var Ye=r=>{var{Quote:e={}}=g();return T(e,r,"Quote"),null};Ye.displayName="JVR.Quote";var er=r=>{var{ValueQuote:e={}}=g();return T(e,r,"ValueQuote"),null};er.displayName="JVR.ValueQuote";var rr=r=>{var{Bigint:e={}}=N();return R(e,r,"Bigint"),null};rr.displayName="JVR.Bigint";var ar=r=>{var{Date:e={}}=N();return R(e,r,"Date"),null};ar.displayName="JVR.Date";var tr=r=>{var{False:e={}}=N();return R(e,r,"False"),null};tr.displayName="JVR.False";var lr=r=>{var{Float:e={}}=N();return R(e,r,"Float"),null};lr.displayName="JVR.Float";var sr=r=>{var{Int:e={}}=N();return R(e,r,"Int"),null};sr.displayName="JVR.Int";var nr=r=>{var{Map:e={}}=N();return R(e,r,"Map"),null};nr.displayName="JVR.Map";var ir=r=>{var{Nan:e={}}=N();return R(e,r,"Nan"),null};ir.displayName="JVR.Nan";var or=r=>{var{Null:e={}}=N();return R(e,r,"Null"),null};or.displayName="JVR.Null";var vr=r=>{var{Set:e={}}=N();return R(e,r,"Set"),null};vr.displayName="JVR.Set";var dr=r=>{var{Str:e={}}=N();return R(e,r,"Str"),null};dr.displayName="JVR.StringText";var cr=r=>{var{True:e={}}=N();return R(e,r,"True"),null};cr.displayName="JVR.True";var ur=r=>{var{Undefined:e={}}=N();return R(e,r,"Undefined"),null};ur.displayName="JVR.Undefined";var pr=r=>{var{Url:e={}}=N();return R(e,r,"Url"),null};pr.displayName="JVR.Url";var yr=r=>{var{Copied:e={}}=k();return E(e,r,"Copied"),null};yr.displayName="JVR.Copied";var fa=["className","style","value","children","collapsed","indentWidth","displayObjectSize","shortenTextAfterLength","highlightUpdates","enableClipboard","displayDataTypes","objectSortKeys","onExpand","onCopied"],h=y.forwardRef((r,e)=>{var{className:a="",style:t,value:v,children:o,collapsed:i,indentWidth:n=15,displayObjectSize:d=!0,shortenTextAfterLength:c=30,highlightUpdates:u=!0,enableClipboard:p=!0,displayDataTypes:m=!0,objectSortKeys:j=!1,onExpand:x,onCopied:w}=r,C=f(r,fa),b=l({lineHeight:1.4,fontFamily:"var(--w-rjv-font-family, Menlo, monospace)",color:"var(--w-rjv-color, #002b36)",backgroundColor:"var(--w-rjv-background-color, #00000000)",fontSize:13},t),L=["w-json-view-container","w-rjv",a].filter(Boolean).join(" ");return s.jsxs(me,{initialState:{value:v,objectSortKeys:j,indentWidth:n,displayObjectSize:d,collapsed:i,enableClipboard:p,shortenTextAfterLength:c,highlightUpdates:u,onCopied:w,onExpand:x},initialTypes:{displayDataTypes:m},children:[s.jsx(W,l({value:v},C,{ref:e,className:L,style:b})),o]})});h.Bigint=rr;h.Date=ar;h.False=tr;h.Float=lr;h.Int=sr;h.Map=nr;h.Nan=ir;h.Null=or;h.Set=vr;h.String=dr;h.True=cr;h.Undefined=ur;h.Url=pr;h.ValueQuote=er;h.Arrow=Ge;h.Colon=Xe;h.Quote=Ye;h.Ellipsis=Qe;h.BraceLeft=qe;h.BraceRight=ze;h.BracketsLeft=We;h.BracketsRight=He;h.Copied=yr;h.CountInfo=Ue;h.CountInfoExtra=Fe;h.KeyName=De;h.Row=Me;h.displayName="JVR.JsonView";const ja=h;var ha={"--w-rjv-font-family":"monospace","--w-rjv-color":"#0184a6","--w-rjv-key-string":"#0184a6","--w-rjv-background-color":"#202020","--w-rjv-line-color":"#323232","--w-rjv-arrow-color":"var(--w-rjv-color)","--w-rjv-edit-color":"var(--w-rjv-color)","--w-rjv-info-color":"#656565","--w-rjv-update-color":"#ebcb8b","--w-rjv-copied-color":"#0184a6","--w-rjv-copied-success-color":"#28a745","--w-rjv-curlybraces-color":"#1896b6","--w-rjv-brackets-color":"#1896b6","--w-rjv-quotes-color":"var(--w-rjv-key-string)","--w-rjv-quotes-string-color":"var(--w-rjv-type-string-color)","--w-rjv-type-string-color":"#cb4b16","--w-rjv-type-int-color":"#268bd2","--w-rjv-type-float-color":"#859900","--w-rjv-type-bigint-color":"#268bd2","--w-rjv-type-boolean-color":"#2aa198","--w-rjv-type-date-color":"#586e75","--w-rjv-type-url-color":"#649bd8","--w-rjv-type-null-color":"#d33682","--w-rjv-type-nan-color":"#076678","--w-rjv-type-undefined-color":"#586e75"},xa={"--w-rjv-font-family":"monospace","--w-rjv-color":"#002b36","--w-rjv-key-string":"#002b36","--w-rjv-background-color":"#ffffff","--w-rjv-line-color":"#ebebeb","--w-rjv-arrow-color":"var(--w-rjv-color)","--w-rjv-edit-color":"var(--w-rjv-color)","--w-rjv-info-color":"#0000004d","--w-rjv-update-color":"#ebcb8b","--w-rjv-copied-color":"#002b36","--w-rjv-copied-success-color":"#28a745","--w-rjv-curlybraces-color":"#236a7c","--w-rjv-colon-color":"#002b36","--w-rjv-brackets-color":"#236a7c","--w-rjv-quotes-color":"var(--w-rjv-key-string)","--w-rjv-quotes-string-color":"var(--w-rjv-type-string-color)","--w-rjv-type-string-color":"#cb4b16","--w-rjv-type-int-color":"#268bd2","--w-rjv-type-float-color":"#859900","--w-rjv-type-bigint-color":"#268bd2","--w-rjv-type-boolean-color":"#2aa198","--w-rjv-type-date-color":"#586e75","--w-rjv-type-url-color":"#0969da","--w-rjv-type-null-color":"#d33682","--w-rjv-type-nan-color":"#859900","--w-rjv-type-undefined-color":"#586e75"};function Ca({json:r,jsonViewProps:e}){const a=mr();return s.jsx(ja,{enableClipboard:!0,displayDataTypes:!1,displayObjectSize:!1,value:r,style:a?ha:xa,shortenTextAfterLength:120,...e})}export{Ca as default};
//# sourceMappingURL=oryfbwjd107deeir.js.map
