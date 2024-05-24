import{r as p,j as t,S as T,w as C,e as w,F as _}from"./index-DDEbqi_R.js";import{N as R}from"./Navbar-Bw6PiQQg.js";class f{constructor(r=0,s="Network Error"){this.status=r,this.text=s}}const H=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,r)=>Promise.resolve(localStorage.setItem(e,r)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},n={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:H()},g=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},B=(e,r="https://api.emailjs.com")=>{if(!e)return;const s=g(e);n.publicKey=s.publicKey,n.blockHeadless=s.blockHeadless,n.storageProvider=s.storageProvider,n.blockList=s.blockList,n.limitRate=s.limitRate,n.origin=s.origin||r},v=async(e,r,s={})=>{const o=await fetch(n.origin+e,{method:"POST",headers:s,body:r}),a=await o.text(),l=new f(o.status,a);if(o.ok)return l;throw l},N=(e,r,s)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!r||typeof r!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s||typeof s!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},q=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},k=e=>e.webdriver||!e.languages||e.languages.length===0,L=()=>new f(451,"Unavailable For Headless Browser"),V=(e,r)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof r!="string")throw"The BlockList watchVariable has to be a string"},I=e=>{var r;return!((r=e.list)!=null&&r.length)||!e.watchVariable},K=(e,r)=>e instanceof FormData?e.get(r):e[r],E=(e,r)=>{if(I(e))return!1;V(e.list,e.watchVariable);const s=K(r,e.watchVariable);return typeof s!="string"?!1:e.list.includes(s)},P=()=>new f(403,"Forbidden"),M=(e,r)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(r&&typeof r!="string")throw"The LimitRate ID has to be a string"},O=async(e,r,s)=>{const o=Number(await s.get(e)||0);return r-Date.now()+o},S=async(e,r,s)=>{if(!r.throttle||!s)return!1;M(r.throttle,r.id);const o=r.id||e;return await O(o,r.throttle,s)>0?!0:(await s.set(o,Date.now().toString()),!1)},F=()=>new f(429,"Too Many Requests"),D=async(e,r,s,o)=>{const a=g(o),l=a.publicKey||n.publicKey,h=a.blockHeadless||n.blockHeadless,i=n.storageProvider||a.storageProvider,d={...n.blockList,...a.blockList},m={...n.limitRate,...a.limitRate};return h&&k(navigator)?Promise.reject(L()):(N(l,e,r),q(s),s&&E(d,s)?Promise.reject(P()):await S(location.pathname,m,i)?Promise.reject(F()):v("/api/v1.0/email/send",JSON.stringify({lib_version:"4.3.3",user_id:l,service_id:e,template_id:r,template_params:s}),{"Content-type":"application/json"}))},A=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},Z=e=>typeof e=="string"?document.querySelector(e):e,J=async(e,r,s,o)=>{const a=g(o),l=a.publicKey||n.publicKey,h=a.blockHeadless||n.blockHeadless,i=n.storageProvider||a.storageProvider,d={...n.blockList,...a.blockList},m={...n.limitRate,...a.limitRate};if(h&&k(navigator))return Promise.reject(L());const u=Z(s);N(l,e,r),A(u);const c=new FormData(u);return E(d,c)?Promise.reject(P()):await S(location.pathname,m,i)?Promise.reject(F()):(c.append("lib_version","4.3.3"),c.append("service_id",e),c.append("template_id",r),c.append("user_id",l),v("/api/v1.0/email/send-form",c))},U={init:B,send:D,sendForm:J,EmailJSResponseStatus:f};function W(){const[e,r]=p.useState(!1),[s,o]=p.useState(!1),a=p.useRef(),l=()=>{console.log("code gets to this point"),U.sendForm("service_eahmcs9","contact_form",a.current,"UfB4pSdLlpE4v_uk5").then(i=>{console.log(i.text),r(!1),o(!0),w("Your message has been received! We will get back to you soon.",{variant:"success",persist:!0})},i=>{console.log(i.text),w("Error occurred!",{variant:"error",persist:!0})})},h=i=>{i.preventDefault();const d=i.target.elements.user_name.value.trim(),m=i.target.elements.user_surname.value.trim(),u=i.target.elements.user_email.value.trim(),c=i.target.elements.message.value.trim(),b=document.getElementById("firstNameError"),x=document.getElementById("surnameError"),j=document.getElementById("emailError"),y=document.getElementById("messageError");d?b.innerText="":b.innerText="Please enter your first name",m?x.innerText="":x.innerText="Please enter your surname",u?j.innerText="":j.innerText="Please enter your email address",c?y.innerText="":y.innerText="Please enter your message",!(!d||!m||!u||!c)&&(r(!0),l(),i.target.reset())};return t.jsxs("div",{className:"mb-16 md:w-[1040px] px-8 md:mx-auto",children:[t.jsx(T,{}),t.jsx("h2",{className:"font-saeada-regular text-[22px] text-[#922263] mb-4 font-bold md:text-[30px] text-center",children:"Reach Out and Connect"}),t.jsx("p",{className:"font-saeada-light md:tracking-widest mb-8 text-[#888888] text-center",children:"For general Inquiries, partnerships and collaborations, feedback and suggestions, please feel free to reach out to us using the contact form provided, and we'll be happy to assist and connect with you."}),t.jsxs("form",{ref:a,onSubmit:h,id:"myForm",className:"p-8 border border-gray-300 grid gap-4 grid-cols-1 md:grid-cols-2 rounded-[32px] mb-4",children:[t.jsxs("div",{className:"",children:[t.jsxs("label",{className:"font-saeada-extraLight font-bold tracking-widest",htmlFor:"user_name",children:["First Name",t.jsx("span",{style:{color:"red"},children:"*"})]}),t.jsx("div",{className:"p-2 md:p-4 border rounded-md mt-4 border-gray-300",children:t.jsx("input",{id:"firstName",type:"text",name:"user_name",placeholder:"first name",className:"appearance-none w-full h-full outline-none border-none focus:outline-none required"})}),t.jsx("span",{id:"firstNameError",className:"font-saeada-extraLight tracking-widest text-red-500 text-xs"})]}),t.jsxs("div",{className:"",children:[t.jsxs("label",{className:"font-saeada-extraLight font-bold tracking-widest",htmlFor:"user_surname",children:["Surname",t.jsx("span",{style:{color:"red"},children:"*"})]}),t.jsx("div",{className:"p-2 md:p-4 border rounded-md mt-4 border-gray-300",children:t.jsx("input",{id:"surname",type:"text",name:"user_surname",placeholder:"surname",className:"appearance-none w-full h-full outline-none border-none focus:outline-none required"})}),t.jsx("span",{id:"surnameError",className:"font-saeada-extraLight tracking-widest text-red-500 text-xs"})]}),t.jsxs("div",{className:"col-span-full",children:[t.jsxs("label",{className:"font-saeada-extraLight font-bold tracking-widest",htmlFor:"user_email",children:["Email Address",t.jsx("span",{style:{color:"red"},children:"*"})]}),t.jsx("div",{className:"p-2 md:p-4 border rounded-md mt-4 border-gray-300",children:t.jsx("input",{id:"email",type:"text",name:"user_email",placeholder:"email address",className:"appearance-none w-full h-full outline-none border-none focus:outline-none required"})}),t.jsx("span",{id:"emailError",className:"font-saeada-extraLight tracking-widest text-red-500 text-xs"})]}),t.jsxs("div",{className:"col-span-full",children:[t.jsx("label",{className:"font-saeada-extraLight font-bold tracking-widest",htmlFor:"user_number",children:"Phone Number"}),t.jsx("div",{className:"p-2 md:p-4 border rounded-md mt-4 border-gray-300",children:t.jsx("input",{id:"number",type:"text",name:"user_number",placeholder:"phone number",className:"bg-transparent appearance-none w-full h-full outline-none border-none focus:outline-none"})})]}),t.jsxs("div",{className:"col-span-full",children:[t.jsxs("label",{className:"font-saeada-extraLight font-bold tracking-widest",htmlFor:"message",children:["Message",t.jsx("span",{style:{color:"red"},children:"*"})]}),t.jsx("div",{className:"p-4 border rounded-md mt-4 border-gray-300",children:t.jsx("textarea",{id:"message",name:"message",placeholder:"message",className:"bg-transparent appearance-none w-full h-full outline-none border-none focus:outline-none required"})}),t.jsx("span",{id:"messageError",className:"font-saeada-extraLight tracking-widest text-red-500 text-xs"})]}),t.jsxs("button",{type:"submit",disabled:e,className:"outline-none border-none col-span-full relative text-white bg-gradient-to-r from-[#0070FF] to-[#0070FF] h-[50px] rounded-[25px] w-full font-saeada-light",children:[t.jsx("img",{src:C,alt:"background Image",className:"opacity-20 w-full h-full object-cover top-0 absolute mix-blend-overlay "}),s?"Submitted":e?t.jsxs("div",{role:"status",children:[t.jsxs("svg",{"aria-hidden":"true",className:"inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),t.jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),t.jsx("span",{className:"sr-only",children:"Loading..."})]}):"Submit"]})]})]})}function G(){return t.jsxs("div",{children:[t.jsx(R,{}),t.jsx(W,{}),t.jsx(_,{})]})}export{G as default};
