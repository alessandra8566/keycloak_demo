import{j as e}from"./index-V3NunKWz.js";import{u as a,C as n,a as i,b as l,c as r,d as t,B as c}from"./card-CoWvAlbK.js";const m=()=>{var o;const{keycloak:s}=a();return console.log(`${window.location.protocol}://${window.location.host}`),e.jsx("div",{className:"h-screen w-screen flex justify-center items-center bg-slate-50",children:e.jsxs(n,{className:"w-[600px]",children:[e.jsxs(i,{children:[e.jsxs(l,{children:["Hi, ",(o=s.tokenParsed)==null?void 0:o.preferred_username]}),e.jsx(r,{children:"final demo"}),s.tokenParsed&&e.jsxs(r,{children:["domain: ",window.location.href]})]}),e.jsx(t,{className:"flex justify-between",children:e.jsx(c,{className:"w-full",onClick:()=>s.logout({redirectUri:window.location.origin}),children:"Logout"})})]})})};export{m as default};
