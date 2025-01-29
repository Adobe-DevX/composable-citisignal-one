/*! Copyright 2025 Adobe
All Rights Reserved. */
import{jsx as E,Fragment as Z,jsxs as U}from"@dropins/tools/preact-jsx-runtime.js";import{useState as R,useCallback as L,useRef as H,useEffect as P}from"@dropins/tools/preact-hooks.js";import*as f from"@dropins/tools/preact-compat.js";import{memo as W,useCallback as _}from"@dropins/tools/preact-compat.js";import{initReCaptcha as G}from"@dropins/tools/recaptcha.js";import{useText as j}from"@dropins/tools/i18n.js";import{classes as M}from"@dropins/tools/lib.js";import{Field as w,Picker as q,Input as C,InputDate as X,Checkbox as z,TextArea as B,Button as g}from"@dropins/tools/components.js";/* empty css      */const Ir=r=>{if(!r)return null;const t=new FormData(r);if(t&&typeof t.entries=="function"){const o=t.entries();if(o&&typeof o[Symbol.iterator]=="function")return JSON.parse(JSON.stringify(Object.fromEntries(o)))||{}}return{}},Dr=r=>typeof r=="function",J=r=>f.createElement("svg",{id:"Icon_Warning_Base",width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},f.createElement("g",{clipPath:"url(#clip0_841_1324)"},f.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M11.9949 2.30237L0.802734 21.6977H23.1977L11.9949 2.30237Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),f.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M12.4336 10.5504L12.3373 14.4766H11.6632L11.5669 10.5504V9.51273H12.4336V10.5504ZM11.5883 18.2636V17.2687H12.4229V18.2636H11.5883Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})),f.createElement("defs",null,f.createElement("clipPath",{id:"clip0_841_1324"},f.createElement("rect",{width:24,height:21,fill:"white",transform:"translate(0 1.5)"})))),Y=r=>f.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},f.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M0.75 12C0.75 5.78421 5.78421 0.75 12 0.75C18.2158 0.75 23.25 5.78421 23.25 12C23.25 18.2158 18.2158 23.25 12 23.25C5.78421 23.25 0.75 18.2158 0.75 12Z",stroke:"currentColor"}),f.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M6.75 12.762L10.2385 15.75L17.25 9",stroke:"currentColor"})),K=r=>f.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},f.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M0.75 12C0.75 5.78421 5.78421 0.75 12 0.75C18.2158 0.75 23.25 5.78421 23.25 12C23.25 18.2158 18.2158 23.25 12 23.25C5.78421 23.25 0.75 18.2158 0.75 12Z",stroke:"currentColor"}),f.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M11.75 5.88423V4.75H12.25V5.88423L12.0485 13.0713H11.9515L11.75 5.88423ZM11.7994 18.25V16.9868H12.2253V18.25H11.7994Z",stroke:"currentColor"})),Q={success:E(Y,{}),warning:E(J,{}),error:E(K,{})},xr=()=>{const[r,t]=R({}),o=L(s=>{if(!s||!s.type){t({});return}const c=Q[s.type];t({...s,icon:c})},[]);return{inLineAlertProps:r,handleSetInLineAlertProps:o}};var v=(r=>(r.BOOLEAN="BOOLEAN",r.DATE="DATE",r.DATETIME="DATETIME",r.DROPDOWN="DROPDOWN",r.FILE="FILE",r.GALLERY="GALLERY",r.HIDDEN="HIDDEN",r.IMAGE="IMAGE",r.MEDIA_IMAGE="MEDIA_IMAGE",r.MULTILINE="MULTILINE",r.MULTISELECT="MULTISELECT",r.PRICE="PRICE",r.SELECT="SELECT",r.TEXT="TEXT",r.TEXTAREA="TEXTAREA",r.UNDEFINED="UNDEFINED",r.VISUAL="VISUAL",r.WEIGHT="WEIGHT",r.EMPTY="",r))(v||{});const rr=W(({loading:r,values:t,fields:o=[],errors:s,className:c="",onChange:d,onBlur:p,onFocus:A})=>{const l=`${c}__field`,$=_((e,n,a)=>{var T;const h=(T=e.options.find(N=>N.isDefault))==null?void 0:T.value;return E(w,{error:a,className:M([l,`${l}--${e.id}`,[`${l}--${e.id}-hidden`,e.isHidden],e.className]),"data-testid":`${c}--${e.id}`,disabled:r||e.disabled,children:E(q,{name:e.customUpperCode,floatingLabel:`${e.label} ${e.required?"*":""}`,placeholder:e.label,"aria-label":e.label,options:e.options,onBlur:p,handleSelect:d,defaultValue:h??n??e.defaultValue,value:h??n??e.defaultValue})},e.id)},[c,r,l,p,d]),m=_((e,n,a)=>E(w,{error:a,className:M([l,`${l}--${e.id}`,[`${l}--${e.id}-hidden`,e.isHidden],e.className]),"data-testid":`${c}--${e.id}`,disabled:r,children:E(C,{type:"text",name:e.customUpperCode,value:n??e.defaultValue,placeholder:e.label,floatingLabel:`${e.label} ${e.required?"*":""}`,onBlur:p,onChange:d,onFocus:A})},e.id),[c,r,l,p,d,A]),I=_((e,n,a)=>E(w,{error:a,className:M([l,`${l}--${e.id}`,[`${l}--${e.id}-hidden`,e.isHidden],e.className]),"data-testid":`${c}--${e.id}`,disabled:r||e.disabled,children:E(X,{type:"text",name:e.customUpperCode,value:n||e.defaultValue,placeholder:e.label,floatingLabel:`${e.label} ${e.required?"*":""}`,onBlur:p,onChange:d,disabled:r||e.disabled})},e.id),[c,r,l,p,d]),x=_((e,n,a)=>E(w,{error:a,className:M([l,`${l}--${e.id}`,[`${l}--${e.id}-hidden`,e.isHidden],e.className]),"data-testid":`${c}--${e.id}`,disabled:r,children:E(z,{name:e.customUpperCode,checked:n||e.defaultValue,placeholder:e.label,label:`${e.label} ${e.required?"*":""}`,onBlur:p,onChange:d})},e.id),[c,r,l,p,d]),D=_((e,n,a)=>E(w,{error:a,className:M([l,`${l}--${e.id}`,[`${l}--${e.id}-hidden`,e.isHidden],e.className]),"data-testid":`${c}--${e.id}`,disabled:r,children:E(B,{type:"text",name:e.customUpperCode,value:n??e.defaultValue,label:`${e.label} ${e.required?"*":""}`,onBlur:p,onChange:d})},e.id),[c,r,l,p,d]);return o.length?E(Z,{children:o.map(e=>{const n=s==null?void 0:s[e.customUpperCode],a=t==null?void 0:t[e.customUpperCode];switch(e.fieldType){case v.TEXT:return e.options.length?$(e,a,n):m(e,a,n);case v.MULTILINE:return m(e,a,n);case v.SELECT:return $(e,a,n);case v.DATE:return I(e,a,n);case v.BOOLEAN:return x(e,a,n);case v.TEXTAREA:return D(e,a,n);default:return null}})}):null}),er=r=>r.reduce((t,{customUpperCode:o,required:s,defaultValue:c})=>(s&&o&&(t.initialData[o]=c||"",t.errorList[o]=""),t),{initialData:{},errorList:{}}),tr=r=>r.reduce((t,o)=>({...t,[o.name]:o.value}),{}),ar=r=>/^\d+$/.test(r),nr=r=>/^[a-zA-Z0-9\s]+$/.test(r),or=r=>/^[a-zA-Z0-9]+$/.test(r),sr=r=>/^[a-zA-Z]+$/.test(r),lr=r=>/^[a-z0-9,!\#\$%&'\*\+\/=\?\^_`\{\|\}~-]+(\.[a-z0-9,!\#\$%&'\*\+\/=\?\^_`\{\|\}~-]+)*@([a-z0-9-]+\.)+[a-z]{2,}$/i.test(r),cr=r=>/^\d{4}-\d{2}-\d{2}$/.test(r)&&!isNaN(Date.parse(r)),ur=(r,t,o)=>{const s=new Date(r).getTime()/1e3;return!(isNaN(s)||s<0||typeof t<"u"&&s<t||typeof o<"u"&&s>o)},k=r=>{if(!r||r.trim()==="")return"";const t=parseInt(r,10);if(!isNaN(t)){const c=new Date(t*1e3);return isNaN(c.getTime())?"":c.toISOString().split("T")[0]}const o=new Date(r);if(isNaN(o.getTime()))return"";const s=parseInt(r.split("-")[1],10);return s>12||s<1?"":o.toISOString().split("T")[0]},dr=r=>/^(https?|ftp):\/\/(([A-Z0-9]([A-Z0-9_-]*[A-Z0-9]|))(\.[A-Z0-9]([A-Z0-9_-]*[A-Z0-9]|))*)(:(\d+))?(\/[A-Z0-9~](([A-Z0-9_~-]|\.)*[A-Z0-9~]|))*\/?(.*)?$/i.test(r),ir=(r,t,o)=>{const s=r.length;return s>=t&&s<=o},O=(r,t,o,s)=>{var F,y;const{requiredFieldError:c,lengthTextError:d,numericError:p,alphaNumWithSpacesError:A,alphaNumericError:l,alphaError:$,emailError:m,dateError:I,urlError:x,dateLengthError:D,dateMaxError:e,dateMinError:n}=o,a=t==null?void 0:t.customUpperCode,h={[a]:""};if(s[a]&&delete s[a],t!=null&&t.required&&!r)return{[a]:c};if(!(t!=null&&t.required)&&!r||!((F=t==null?void 0:t.validateRules)!=null&&F.length))return h;const T=tr(t==null?void 0:t.validateRules),N=T.MIN_TEXT_LENGTH??1,b=T.MAX_TEXT_LENGTH??255,u=T.DATE_RANGE_MIN,i=T.DATE_RANGE_MAX;if(!ir(r,+N,+b)&&!(u||i))return{[a]:d.replace("{min}",N).replace("{max}",b)};if(!ur(r,+u,+i)&&(u||i)){if(u&&u)return{[a]:D.replace("{min}",k(u)).replace("{max}",k(i))};if(typeof u>"u"||typeof i>"u")return{[a]:i?e.replace("{max}",k(i)):n.replace("{min}",k(u))}}const V={numeric:{validate:ar,error:p},"alphanum-with-spaces":{validate:nr,error:A},alphanumeric:{validate:or,error:l},alpha:{validate:sr,error:$},email:{validate:lr,error:m},date:{validate:cr,error:I},url:{validate:dr,error:x}}[T.INPUT_VALIDATION];return V&&!V.validate(r)&&!((y=s[a])!=null&&y.length)?{[a]:V.error}:h},pr=["auth-reset-password-form__buttons--signin","auth-sign-up-form-buttons--signin","auth-sign-in-form__button--forgot","auth-sign-in-form__button--signup"],hr=({fieldsConfig:r,onSubmit:t})=>{const o=j({requiredFieldError:"Auth.FormText.requiredFieldError",lengthTextError:"Auth.FormText.lengthTextError",numericError:"Auth.FormText.numericError",alphaNumWithSpacesError:"Account.FormText.alphaNumWithSpacesError",alphaNumericError:"Auth.FormText.alphaNumericError",alphaError:"Auth.FormText.alphaError",emailError:"Auth.FormText.emailError",dateError:"Auth.FormText.dateError",dateLengthError:"Auth.FormText.dateLengthError",dateMaxError:"Auth.FormText.dateMaxError",dateMinError:"Auth.FormText.dateMinError",urlError:"Auth.FormText.urlError"}),s=H(null),c=H(!1),[d,p]=R({}),[A,l]=R({}),$=L(()=>{let e=!0;const n={...A};let a=null;for(const[h,T]of Object.entries(d)){const N=r==null?void 0:r.find(u=>{var i;return(i=u==null?void 0:u.customUpperCode)==null?void 0:i.includes(h)}),b=O(T.toString(),N,o,n);b[h]&&(Object.assign(n,b),e=!1),a||(a=Object.keys(n).find(u=>n[u])??null)}if(l(n),a&&s.current){const h=s.current.elements.namedItem(a);h==null||h.focus()}return e},[A,r,d,o]);P(()=>{if(r!=null&&r.length){const{initialData:e,errorList:n}=er(r);p(a=>({...e,...a})),l(n)}},[JSON.stringify(r)]);const m=L(async e=>{const n=e.target,a=!pr.some(h=>n.classList.contains(h));!c.current&&a&&(await G(0),c.current=!0)},[]),I=L(e=>{const{name:n,value:a,type:h,checked:T}=e==null?void 0:e.target,N=h==="checkbox"?T:a;p(i=>({...i,[n]:N}));const b=r==null?void 0:r.find(i=>{var S;return(S=i==null?void 0:i.customUpperCode)==null?void 0:S.includes(n)});let u={...A};if(b){const i=O(N.toString(),b,o,u);i&&Object.assign(u,i),l(u)}},[r,A,o]),x=L(e=>{const{name:n,value:a,type:h,checked:T}=e==null?void 0:e.target,N=h==="checkbox"?T:a,b=r==null?void 0:r.find(u=>u.customUpperCode===n);if(b){const u={...A},i=O(N.toString(),b,o,u);i&&Object.assign(u,i),l(u)}},[A,r,o]),D=L(e=>{e.preventDefault();const n=$();t==null||t(e,n)},[$,t]);return{formData:d,errors:A,formRef:s,handleChange:I,handleBlur:x,handleSubmit:D,handleFocus:m}},vr=({name:r,loading:t,children:o,className:s="defaultForm",fieldsConfig:c=[],onSubmit:d,...p})=>{const{formData:A,errors:l,formRef:$,handleChange:m,handleBlur:I,handleSubmit:x,handleFocus:D}=hr({onSubmit:d,fieldsConfig:c});return U("form",{className:s,onSubmit:x,name:r,ref:$,onFocus:D,...p,children:[E(rr,{className:s,onFocus:D,fields:c,onChange:m,onBlur:I,errors:l,values:A,loading:t}),o]})},Lr=({type:r,buttonText:t,variant:o,className:s="",enableLoader:c=!1,onClick:d,style:p,icon:A,...l})=>{const $=L(I=>{d==null||d(I)},[d]);return U(g,{icon:A,style:p,type:r,variant:o,className:M(["auth-button",s,c?"enableLoader":""]),onClick:$,...l,children:[E("span",{className:"auth-button__text",children:t}),c?E("div",{className:"auth-button__wrapper",children:E("span",{className:"auth-button__loader"})}):null]})};export{Lr as B,vr as F,Dr as c,Ir as g,xr as u};
