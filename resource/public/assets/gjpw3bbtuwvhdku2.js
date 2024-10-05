import{D as w,S as I,P as h,a as F,bB as v,a3 as _}from"./cbv020t7gzp4f872.js";import{aO as E,aP as y,aQ as g,aR as b,aS as k,H as D}from"./gpe91l6ql3o0s610.js";import{g as M}from"./m9c7p1d7qbcooudb.js";function P(e){var t,a;return((a=(t=e.metadata)==null?void 0:t.dalle)==null?void 0:a.prompt)??""}async function C(e,t,a="image/png"){return new Promise((r,n)=>{e.toBlob(o=>{o!=null?r(new File([o],t,{type:a})):n(new Error("Failed to convert canvas to blob"))},a)})}async function L(e,t){const a=document.createElement("canvas");a.width=e.width,a.height=e.height;const r=a.getContext("2d");if(r==null)throw new Error("Failed to get 2d context for mask canvas");const n=r.createImageData(e.width,e.height);for(let o=0;o<e.data.length;o+=4)e.data[o+3]!==0?(n.data[o]=0,n.data[o+1]=0,n.data[o+2]=0,n.data[o+3]=255):(n.data[o]=255,n.data[o+1]=255,n.data[o+2]=255,n.data[o+3]=255);return r.putImageData(n,0,0),C(a,t)}async function S(e,t){const r=await(await fetch(e)).blob(),n=document.createElement("a");n.href=URL.createObjectURL(r),n.download=t,n.click(),n.remove()}function G(e){const t=D(new Date,"yyyy-MM-dd HH.mm.ss");let a=e.slice(0,150);return a.endsWith(".")&&(a=a.slice(0,-1)),`DALL·E ${t} - ${a}.webp`}async function O(e,t,a){var o,d,i,s,l,c,u,m,p,f;const r=P(e),n=G(r);await S(e.url,n),I.logEvent("chatgpt_dalle_image_download",null,{sourceOperation:((d=(o=e.metadata)==null?void 0:o.dalle)==null?void 0:d.edit_op)??"none",hasParent:((s=(i=e.metadata)==null?void 0:i.dalle)==null?void 0:s.parent_gen_id)!=null?"true":"false"}),h.logEvent(F.dalleImageDownload,{conversationId:t,messageId:a,generationId:(c=(l=e.metadata)==null?void 0:l.dalle)==null?void 0:c.gen_id,parentGenerationId:(m=(u=e.metadata)==null?void 0:u.dalle)==null?void 0:m.parent_gen_id,fileId:g(e.asset_pointer),sourceOperation:(f=(p=e.metadata)==null?void 0:p.dalle)==null?void 0:f.edit_op})}function N(e){const t=M(e),a=E(),r=t&&"gizmo"in t?t.gizmo:void 0;return!a&&(r==null?void 0:r.gizmo.id)===y}function R(e,t){var n,o;const a=(o=(n=t.metadata)==null?void 0:n.dalle)==null?void 0:o.gen_id,r=g(t.asset_pointer);return r==null||a==null?e:{...e,messageMetadata:{...e.messageMetadata,dalle:{from_client:{operation:{type:"transformation",original_gen_id:a,original_file_id:r}}}}}}async function U(e,t,a,r){return new Promise((n,o)=>{b(k(e),e,t,a,{kind:v.DalleAgent},{onFileCreated:_,onFileUploadProgress:_,onFileUploaded:(d,i)=>n(i),onError:(d,i)=>{o(new Error(`Failed to upload file with reason: ${i}`))}},r)})}async function $(e,t,a,r,n){var i,s;const o=(s=(i=t.metadata)==null?void 0:i.dalle)==null?void 0:s.gen_id,d=g(t.asset_pointer);if(d==null||o==null||a==null)return e;try{const l=await L(a,"mask.png"),c=await U(l,r,n,{imageDimensions:{width:t.width,height:t.height}});return{...e,messageMetadata:{...e.messageMetadata,dalle:{from_client:{operation:{type:"inpainting",original_gen_id:o,original_file_id:d,mask_file_id:c}}}}}}catch(l){return w.addError(l),e}}export{N as a,O as d,P as g,R as s,$ as u};
//# sourceMappingURL=gjpw3bbtuwvhdku2.js.map
