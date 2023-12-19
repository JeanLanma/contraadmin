import{T as d,o as i,e as m,b as e,u as a,w as o,F as c,Z as f,t as _,f as p,a as t,n as w,g,i as y}from"./app-b1710f2c.js";import{A as b}from"./AuthenticationCard-8c01c1c9.js";import{_ as x}from"./AuthenticationCardLogo-aa6d9a2c.js";import{_ as h,a as k}from"./TextInput-2bdb8298.js";import{_ as V}from"./InputLabel-14dd56a5.js";import{_ as v}from"./PrimaryButton-33a8abf7.js";import"./_plugin-vue_export-helper-c27b6911.js";const F=t("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),N={key:0,class:"mb-4 font-medium text-sm text-green-600"},$={class:"flex items-center justify-end mt-4"},q={__name:"ForgotPassword",props:{status:String},setup(l){const s=d({email:""}),n=()=>{s.post(route("password.email"))};return(C,r)=>(i(),m(c,null,[e(a(f),{title:"Forgot Password"}),e(b,null,{logo:o(()=>[e(x)]),default:o(()=>[F,l.status?(i(),m("div",N,_(l.status),1)):p("",!0),t("form",{onSubmit:y(n,["prevent"])},[t("div",null,[e(V,{for:"email",value:"Email"}),e(h,{id:"email",modelValue:a(s).email,"onUpdate:modelValue":r[0]||(r[0]=u=>a(s).email=u),type:"email",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),e(k,{class:"mt-2",message:a(s).errors.email},null,8,["message"])]),t("div",$,[e(v,{class:w({"opacity-25":a(s).processing}),disabled:a(s).processing},{default:o(()=>[g(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],32)]),_:1})],64))}};export{q as default};
