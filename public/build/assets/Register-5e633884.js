import{T as g,o as c,e as f,b as s,u as o,Z as _,w as l,a,f as d,h as w,q as h,n as v,p as y,F as V}from"./app-bd231437.js";import{A as b}from"./AuthenticationCard-3023fb61.js";import{_ as k}from"./Checkbox-8c754afe.js";import{_ as u,a as n}from"./TextInput-46cc14ed.js";import{_ as i}from"./InputLabel-78cba77e.js";import{_ as x}from"./PrimaryButton-e3f19a6a.js";import"./_plugin-vue_export-helper-c27b6911.js";const C=a("img",{class:"h-14",src:"/assets/contradminlogo.png",alt:"Admin Logo"},null,-1),q={class:"mt-4"},$={class:"mt-4"},A={class:"mt-4"},N={key:0,class:"mt-4"},U={class:"flex items-center"},F={class:"ms-2"},B=["href"],P=["href"],R={class:"flex items-center justify-end mt-4"},Z={__name:"Register",setup(T){const e=g({name:"",email:"",password:"",password_confirmation:"",terms:!1}),p=()=>{e.post(route("register"),{onFinish:()=>e.reset("password","password_confirmation")})};return(m,t)=>(c(),f(V,null,[s(o(_),{title:"Register"}),s(b,null,{logo:l(()=>[C]),default:l(()=>[a("form",{onSubmit:y(p,["prevent"])},[a("div",null,[s(i,{for:"name",value:"Nombre"}),s(u,{id:"name",modelValue:o(e).name,"onUpdate:modelValue":t[0]||(t[0]=r=>o(e).name=r),type:"text",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),s(n,{class:"mt-2",message:o(e).errors.name},null,8,["message"])]),a("div",q,[s(i,{for:"email",value:"Correo electronico"}),s(u,{id:"email",modelValue:o(e).email,"onUpdate:modelValue":t[1]||(t[1]=r=>o(e).email=r),type:"email",class:"mt-1 block w-full",required:"",autocomplete:"username"},null,8,["modelValue"]),s(n,{class:"mt-2",message:o(e).errors.email},null,8,["message"])]),a("div",$,[s(i,{for:"password",value:"Contraseña"}),s(u,{id:"password",modelValue:o(e).password,"onUpdate:modelValue":t[2]||(t[2]=r=>o(e).password=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),s(n,{class:"mt-2",message:o(e).errors.password},null,8,["message"])]),a("div",A,[s(i,{for:"password_confirmation",value:"Confirmar Contraseña"}),s(u,{id:"password_confirmation",modelValue:o(e).password_confirmation,"onUpdate:modelValue":t[3]||(t[3]=r=>o(e).password_confirmation=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),s(n,{class:"mt-2",message:o(e).errors.password_confirmation},null,8,["message"])]),m.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature?(c(),f("div",N,[s(i,{for:"terms"},{default:l(()=>[a("div",U,[s(k,{id:"terms",checked:o(e).terms,"onUpdate:checked":t[4]||(t[4]=r=>o(e).terms=r),name:"terms",required:""},null,8,["checked"]),a("div",F,[d(" Acepto "),a("a",{target:"_blank",href:m.route("terms.show"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Los terminos y condiciones",8,B),d(" y la "),a("a",{target:"_blank",href:m.route("policy.show"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Politica de privacidad",8,P)])]),s(n,{class:"mt-2",message:o(e).errors.terms},null,8,["message"])]),_:1})])):w("",!0),a("div",R,[s(o(h),{href:m.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:l(()=>[d(" Ya esta registrado? ")]),_:1},8,["href"]),s(x,{class:v(["ms-4",{"opacity-25":o(e).processing}]),disabled:o(e).processing},{default:l(()=>[d(" Registrarse ")]),_:1},8,["class","disabled"])])],32)]),_:1})],64))}};export{Z as default};