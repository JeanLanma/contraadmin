import{h as G,o as n,d as r,a as e,g as v,e as m,t as _,n as L,i as F,r as A,T as M,j as W,c as j,w as l,u as a,b as d,k as w,v as y,F as $,f as T,l as P,m as U,P as N,O as I}from"./app-e971657c.js";import{_ as H}from"./AdminLayout-bb0b5ae2.js";import q from"./WarehouseList-c9f86409.js";import{_ as J}from"./DialogModal-35b24cc6.js";import{_ as D}from"./SecondaryButton-42597434.js";import{_ as K}from"./DangerButton-38b37b87.js";import{_ as Q}from"./PrimaryButton-e17396ab.js";import{_ as X}from"./ConfirmationModal-f6ac9210.js";import"./DropdownLink-45458ce2.js";import"./_plugin-vue_export-helper-c27b6911.js";const Y={class:"flex items-center"},Z={key:0,class:"mr-1"},ee=F('<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><circle cx="12" cy="12" r="10" stroke="#374151" stroke-width="1.5"></circle> <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="#374151" stroke-width="1.5" stroke-linecap="round"></path></g></svg>',1),te=[ee],oe={key:1,class:"mr-1"},se=F('<svg width="24px" height="24px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#374151"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g fill="none" fill-rule="evenodd"><path d="m0 0h32v32h-32z"></path> <path d="m16 0c8.836556 0 16 7.163444 16 16s-7.163444 16-16 16-16-7.163444-16-16 7.163444-16 16-16zm0 2c-7.7319865 0-14 6.2680135-14 14s6.2680135 14 14 14 14-6.2680135 14-14-6.2680135-14-14-14zm5 13c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-10c-.5522847 0-1-.4477153-1-1s.4477153-1 1-1z" fill="#374151" fill-rule="nonzero"></path></g></g></svg>',1),ne=[se],re={key:2,class:"mr-1"},le=e("svg",{height:"24px",width:"24px",version:"1.1",id:"_x32_",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512","xml:space":"preserve",fill:"#374151"},[e("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),e("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),e("g",{id:"SVGRepo_iconCarrier"},[e("g",null,[e("path",{class:"st0",d:"M331.736,165.752c-8.792-8.8-23.054-8.784-31.854,0l-13.571,13.587l46.367,46.359l13.578-13.57 c8.784-8.801,8.784-23.071,0-31.872L331.736,165.752z"}),m(),e("path",{class:"st0",d:"M256,0C114.84,0,0,114.831,0,256C0,397.152,114.84,512,256,512c141.168,0,256-114.848,256-256 C512,114.831,397.168,0,256,0z M256,466.051c-115.998,0-210.051-94.053-210.051-210.051C45.949,140.002,140.002,45.94,256,45.94 c115.998,0,210.051,94.062,210.051,210.059C466.051,371.998,371.998,466.051,256,466.051z"}),m(),e("polygon",{class:"st0",points:"159.164,306.485 159.164,352.845 205.531,352.845 311.352,247.022 264.993,200.664 "})])])],-1),ie=[le],R={__name:"NavButton",props:{title:{type:String,default:"Button"},isRoute:String,icon:{type:String,default:""},active:{type:Boolean,default:!1},children:{type:Array,default:()=>[]}},setup(k){const c=k,f=G(()=>c.active?"NavButton__active":"NavButton"),u=(x,b)=>x===""?!1:{"+":"plus","-":"minus",edit:"pencil"}[x]===b;return(x,b)=>(n(),r("button",{class:L(f.value)},[e("span",Y,[u(c.icon,"plus")?(n(),r("span",Z,te)):v("",!0),u(c.icon,"minus")?(n(),r("span",oe,ne)):v("",!0),u(c.icon,"pencil")?(n(),r("span",re,ie)):v("",!0),m(" "+_(c.title),1)])],2))}},ae={class:"font-semibold text-xl text-gray-800 leading-tight"},de={class:"flex justify-between items-center"},ce=e("span",null," Editar almacen ",-1),ue={class:"flex flex-col gap-4"},me={class:"flex flex-col gap-4"},pe=e("label",{for:"name",class:"block text-sm font-medium text-gray-700"}," Nombre ",-1),he={class:"flex flex-col gap-4"},fe=e("label",{for:"location",class:"block text-sm font-medium text-gray-700"}," Dirección ",-1),xe={class:"w-full py-12"},ge={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},_e={class:"w-full"},be={class:"px-4 md:px-0 flex flex-col md:flex-row gap-4"},ve={key:0,class:"hidden md:block mx-auto max-w-xs md:max-w-none overflow-hidden shadow-xl sm:rounded-lg mt-4 border-2"},we={class:"bg-white shadow-md rounded my-6 overflow-auto"},ye=e("div",null,[e("h2",{class:"text-2xl font-bold py-4 pl-6 text-gray-700"},"Lista de almacenes")],-1),ke={class:"text-left w-full"},Ce=e("thead",null,[e("tr",null,[e("th",{class:"py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light"},"Nombre"),e("th",{class:"py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light"},"Locación"),e("th",{class:"py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light"},"Actions")])],-1),Ee={class:"hover:bg-gray-100"},Ae={class:"py-4 px-6 border-b border-grey-light"},$e={class:"py-4 px-6 border-b border-grey-light"},Te={class:"py-4 px-6 border-b border-grey-light flex"},Ne=["onClick"],Re=["onClick"],Se={class:"mb-2 flex justify-center"},Ve={"aria-label":"Page navigation example"},Be={class:"inline-flex -space-x-px"},Me=["href"],De=["innerHTML"],Le=["href"],Fe=["innerHTML"],Oe={key:1,class:"bg-white overflow-hidden shadow-xl sm:rounded-lg mt-4 border-2"},ze={class:"px-4 md:py-4 py-2"},Ge=e("div",{class:"my-4"},[e("h2",{class:"text-2xl font-bold text-gray-700 md:text-center"},"Nuevo almacen.")],-1),We={class:"w-full sm:w-1/2 mb-4"},je={class:"mb-5 md:flex md:items-end"},Pe=e("label",{for:"name",class:"mb-3 block text-base font-medium text-[#07074D] md:mr-4"}," Nombre ",-1),Ue={class:"w-full sm:w-1/2 mb-4"},Ie={class:"mb-5 md:flex md:items-end"},He=e("label",{for:"location",class:"mb-3 block text-base font-medium text-[#07074D] md:mr-4"}," Dirección ",-1),qe=e("div",{class:"md:w-1/3"},[e("button",{class:"hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none w-full"}," Agregar ")],-1),Je={class:"md:hidden max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3"},Ke={class:"md:flex"},Qe={class:"p-8"},Xe=e("div",{class:"uppercase tracking-wide text-sm text-indigo-500 font-semibold"}," ",-1),Ye={class:"block mt-1 text-lg leading-tight font-medium text-black"},Ze={class:"mt-2 text-gray-500"},et=["onClick"],tt=["onClick"],ot={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},pt={__name:"WarehouseIndex",props:{warehouses:{type:Object,required:!0}},setup(k){const c=k,f={READ:"read",CREATE:"create",EDIT:"edit",DELETE:"delete"},u=A("read"),x=s=>{u.value=s},b=s=>u.value===s,S=s=>{i.name=s.name,i.location=s.location,i.id=s.id},h=A(!1),C=s=>{S(s),h.value=!0},i=M({name:"",location:"",user_id:null}),O=()=>{i.put(route("admin.warehouse.update",{id:i.id}),{onSuccess:s=>{g.success("Almacen actualizado con exito!",{position:N.TOP_CENTER}),h.value=!1},onError:()=>{g.error("Algo salio mal, intentalo de nuevo"),h.value=!1},onFinish:()=>{h.value=!1}})},g=W(),p=M({name:"",location:"",user_id:null}),z=()=>{p.post(route("admin.warehouse.store"),{onSuccess:s=>{g.success("Almacen creado con exito!",{position:N.TOP_CENTER}),p.reset()},onError:()=>{g.error("Algo salio mal, intentalo de nuevo")},onFinish:()=>{p.reset()}})},V=A(!1),B=s=>{I.delete(route("admin.warehouse.destroy",{id:s}),{onSuccess:o=>{g.success("Almacen eliminado con exito!",{position:N.TOP_CENTER})},onError:()=>{g.error("Algo salio mal, intentalo de nuevo")},onFinish:()=>{p.reset()}})};return(s,o)=>(n(),j(H,{title:"Almacen"},{header:l(()=>[e("h2",ae,_(a(i)?a(i).name:"Almacen"),1)]),content:l(()=>[d(J,{show:h.value,onClose:o[5]||(o[5]=t=>h.value=!1)},{title:l(()=>[e("div",de,[ce,e("button",{onClick:o[0]||(o[0]=t=>B(a(i).id)),class:"mt-5 ml-3 px-4 py-2 border border-red-500 text-sm font-medium rounded-md text-red-500 hover:text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"}," Eliminar ")])]),content:l(()=>[e("div",ue,[e("div",me,[pe,w(e("input",{type:"text",name:"name",id:"name","onUpdate:modelValue":o[1]||(o[1]=t=>a(i).name=t),placeholder:"Nombre del almacen..",class:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},null,512),[[y,a(i).name]])]),e("div",he,[fe,w(e("input",{type:"text",name:"location",id:"location","onUpdate:modelValue":o[2]||(o[2]=t=>a(i).location=t),placeholder:"Calle 123, Ciudad, Estado...",class:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},null,512),[[y,a(i).location]])])])]),footer:l(()=>[d(D,{onClick:o[3]||(o[3]=t=>h.value=!1)},{default:l(()=>[m(" Cancelar ")]),_:1}),d(Q,{onClick:o[4]||(o[4]=t=>O()),class:"ml-2"},{default:l(()=>[m(" Guardar ")]),_:1})]),_:1},8,["show"]),d(X,{show:V.value,onClose:o[7]||(o[7]=t=>V.value=!1)},{title:l(()=>[m(" Delete Account ")]),content:l(()=>[m(" Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. ")]),footer:l(()=>[d(D,{onClick:o[6]||(o[6]=t=>s.confirmingUserDeletion=!1)},{default:l(()=>[m(" Nevermind ")]),_:1}),d(K,{class:L(["ml-2",{"opacity-25":s.form.processing}]),onClick:s.deleteUser,disabled:s.form.processing},{default:l(()=>[m(" Delete Account ")]),_:1},8,["onClick","class","disabled"])]),_:1},8,["show"]),e("div",xe,[e("div",ge,[e("div",_e,[e("div",be,[d(R,{title:"Añadir",route:"warehouse.index",onClick:o[8]||(o[8]=t=>x(f.CREATE)),active:b(f.CREATE)},null,8,["active"]),d(R,{title:"Mostrar",route:"warehouse.index",onClick:o[9]||(o[9]=t=>x(f.READ)),active:b(f.READ)},null,8,["active"]),d(R,{title:"Editar",route:"warehouse.index"})])]),d(U,{name:"slide-up",mode:"out-in"},{default:l(()=>[u.value==="read"?(n(),r("div",ve,[e("div",null,[e("div",we,[ye,e("table",ke,[Ce,e("tbody",null,[(n(!0),r($,null,T(c.warehouses.data,t=>(n(),r("tr",Ee,[e("td",Ae,_(t.name),1),e("td",$e,_(t.location),1),e("td",Te,[e("button",{onClick:E=>C(t),class:"inline text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark"},"editar",8,Ne),e("button",{onClick:E=>C(t),class:"inline text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark"},"ver",8,Re)])]))),256))])])])]),e("div",Se,[e("nav",Ve,[e("ul",Be,[(n(!0),r($,null,T(c.warehouses.links,t=>(n(),r("li",null,[t.active?(n(),r("a",{key:0,href:t.url,"aria-current":"page",class:"bg-blue-50 rounded text-blue-600 hover:bg-blue-100 hover:text-blue-700 py-2 px-3"},[e("span",{innerHTML:t.label},null,8,De)],8,Me)):(n(),r("a",{key:1,href:t.url,class:"bg-white rounded text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0 leading-tight py-2 px-3"},[e("span",{innerHTML:t.label},null,8,Fe)],8,Le))]))),256))])])])])):u.value==="create"?(n(),r("div",Oe,[e("div",ze,[Ge,e("form",{onSubmit:P(z,["prevent"]),class:"md:flex md:flex-col md:items-center"},[e("div",We,[e("div",je,[Pe,w(e("input",{type:"text",name:"name",id:"name","onUpdate:modelValue":o[10]||(o[10]=t=>a(p).name=t),placeholder:"Nombre del almacen..",class:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},null,512),[[y,a(p).name]])])]),e("div",Ue,[e("div",Ie,[He,w(e("input",{type:"text",name:"location",id:"location","onUpdate:modelValue":o[11]||(o[11]=t=>a(p).location=t),placeholder:"Calle 123, Ciudad, Estado...",class:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},null,512),[[y,a(p).location]])])]),qe],32)])])):v("",!0)]),_:1}),u.value==="read"?(n(!0),r($,{key:0},T(c.warehouses.data,t=>(n(),r("div",Je,[e("div",Ke,[e("div",Qe,[Xe,e("p",Ye,_(t.name),1),e("p",Ze,_(t.location),1),e("button",{onClick:E=>C(t),class:"mt-5 px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"}," Editar ",8,et),e("button",{onClick:E=>B(t.id),class:"mt-5 ml-3 px-4 py-2 border border-red-500 text-sm font-medium rounded-md text-red-500 hover:text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"}," Eliminar ",8,tt)])])]))),256)):v("",!0),e("div",ot,[d(q)])])])]),_:1}))}};export{pt as default};