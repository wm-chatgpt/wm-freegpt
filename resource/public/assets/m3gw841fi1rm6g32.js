import{u as p}from"./dcwz736z3yngw0c7.js";import{ad as m,u as A,r as e,dG as R}from"./cbv020t7gzp4f872.js";import"./kq3cjnjkkiu42wsi.js";function y(){const s=p(),r=m(),u=A(),[o,d]=e.useState(!1),[c,f]=e.useState(!1),t=s.accountId;e.useEffect(()=>{let n=!1;if(t&&!o){const i=()=>{if(n)return;const{updatedAccount:l}=R(u,t);l?d(!0):setTimeout(i,100)};i()}return()=>{n=!0}},[t,o,u]);const a=!t||o;return e.useEffect(()=>{!c&&a&&(r.replace(s.toUrl),f(!0))},[c,a,s.toUrl,r]),null}export{y as default};
//# sourceMappingURL=m3gw841fi1rm6g32.js.map