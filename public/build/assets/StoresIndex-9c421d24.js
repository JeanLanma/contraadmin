import{T as B,i as F,d as g,o as c,c as V,w as l,a as e,t as _,u as a,b as d,j as b,v as w,f as y,e as u,h as k,k as R,g as S,F as j,P as C,O as D}from"./app-bd874aa3.js";import{_ as P}from"./AdminLayout-246b8b3c.js";import{_ as $}from"./NavButton-be9d974c.js";import{a as I}from"./DialogModal-9b80ef2e.js";import{_ as U}from"./SecondaryButton-9f2905a7.js";import{_ as z}from"./PrimaryButton-73961126.js";import q from"./StoresTable-480f2a80.js";import{_ as G}from"./WarehousePagination-58f31a24.js";import E from"./CreateStoresForm-3830e57f.js";import{C as f}from"./Utils-1182c8ae.js";import"./DropdownLink-14dd1606.js";import"./_plugin-vue_export-helper-c27b6911.js";const L={class:"font-semibold text-xl text-gray-800 leading-tight"},W={class:"flex justify-between items-center"},H=e("span",null," Editar almacen ",-1),J={class:"flex flex-col gap-4"},K={class:"flex flex-col gap-4"},Q=e("label",{for:"name",class:"block text-sm font-medium text-gray-700"}," Nombre ",-1),X={class:"flex flex-col gap-4"},Y=e("label",{for:"location",class:"block text-sm font-medium text-gray-700"}," Dirección ",-1),Z={class:"w-full py-12"},ee={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},te={class:"w-full"},oe={class:"px-4 md:px-0 flex flex-col md:flex-row gap-4"},se={key:0,class:"hidden md:block mx-auto max-w-xs md:max-w-none overflow-hidden shadow-xl sm:rounded-lg mt-4 border-2"},ne={class:"bg-white shadow-md rounded my-6 overflow-auto"},ae=e("div",null,[e("h2",{class:"text-2xl font-bold py-4 pl-6 text-gray-700"},"Tiendas")],-1),ie={class:"mb-2 flex justify-center"},de={key:1,class:"bg-white overflow-hidden shadow-xl sm:rounded-lg mt-4 border-2"},le={class:"px-4 md:py-4 py-2"},re=e("div",{class:"my-4"},[e("h2",{class:"text-2xl font-bold text-gray-700 md:text-center"},"Nueva tienda.")],-1),ce={class:"md:hidden max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3"},me={class:"md:flex"},ue={class:"p-8"},fe=e("div",{class:"uppercase tracking-wide text-sm text-indigo-500 font-semibold"}," ",-1),xe={class:"block mt-1 text-lg leading-tight font-medium text-black"},_e={class:"mt-2 text-gray-500"},pe=["onClick"],ve=["onClick"],he=e("div",{class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},null,-1),Ae={__name:"StoresIndex",props:{stores:{type:Object,required:!0}},setup(T){const x=T,n=B({name:"",location:"",user_id:null}),m=F(),r=g("read"),p=o=>{r.value=o},v=o=>r.value===o,N=o=>{n.name=o.name,n.location=o.location,n.id=o.id},i=g(!1),h=o=>{N(o),i.value=!0},O=()=>{n.put(route("admin.store.update",{id:n.id}),{onSuccess:o=>{m.success("Almacen actualizado con exito!",{position:C.TOP_CENTER}),i.value=!1},onError:()=>{m.error("Algo salio mal, intentalo de nuevo"),i.value=!1},onFinish:()=>{i.value=!1}})},M=o=>{D.delete(route("admin.store.destroy",{id:o}),{onSuccess:t=>{m.success("Eliminación realizada con exito!",{position:C.TOP_CENTER}),i.value=!1},onError:()=>{m.error("Algo salio mal, intentalo de nuevo")},onFinish:()=>{E.reset(),i.value=!1}})};return(o,t)=>(c(),V(P,{title:"Tiendas"},{header:l(()=>[e("h2",L,_(a(n)?a(n).name:"Tienda ¿?"),1)]),content:l(()=>[d(I,{show:i.value,onClose:t[5]||(t[5]=s=>i.value=!1)},{title:l(()=>[e("div",W,[H,e("button",{onClick:t[0]||(t[0]=s=>M(a(n).id)),class:"mt-5 ml-3 px-4 py-2 border border-red-500 text-sm font-medium rounded-md text-red-500 hover:text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"}," Eliminar ")])]),content:l(()=>[e("div",J,[e("div",K,[Q,b(e("input",{type:"text",name:"name",id:"name","onUpdate:modelValue":t[1]||(t[1]=s=>a(n).name=s),placeholder:"Nombre del almacen..",class:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},null,512),[[w,a(n).name]])]),e("div",X,[Y,b(e("input",{type:"text",name:"location",id:"location","onUpdate:modelValue":t[2]||(t[2]=s=>a(n).location=s),placeholder:"Calle 123, Ciudad, Estado...",class:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},null,512),[[w,a(n).location]])])])]),footer:l(()=>[d(U,{onClick:t[3]||(t[3]=s=>i.value=!1)},{default:l(()=>[y(" Cancelar ")]),_:1}),d(z,{disabled:a(n).processing,onClick:t[4]||(t[4]=s=>O()),class:"ml-2"},{default:l(()=>[y(" Guardar ")]),_:1},8,["disabled"])]),_:1},8,["show"]),e("div",Z,[e("div",ee,[e("div",te,[e("div",oe,[d($,{title:"Añadir",route:"warehouse.index",onClick:t[6]||(t[6]=s=>p(a(f).Create)),active:v(a(f).Create)},null,8,["active"]),d($,{title:"Mostrar",route:"warehouse.index",onClick:t[7]||(t[7]=s=>p(a(f).Read)),active:v(a(f).Read)},null,8,["active"])])]),d(R,{name:"slide-up",mode:"out-in"},{default:l(()=>[r.value==="read"?(c(),u("div",se,[e("div",null,[e("div",ne,[ae,d(q,{stores:x.stores,setModal:h},null,8,["stores"])])]),e("div",ie,[d(G,{links:x.stores.links},null,8,["links"])])])):r.value==="create"?(c(),u("div",de,[e("div",le,[re,d(E)])])):k("",!0)]),_:1}),r.value==="read"?(c(!0),u(j,{key:0},S(x.stores.data,s=>(c(),u("div",ce,[e("div",me,[e("div",ue,[fe,e("p",xe,_(s.name),1),e("p",_e,_(s.location),1),e("button",{onClick:A=>h(s),class:"mt-5 px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"}," Editar ",8,pe),e("button",{onClick:A=>o.deleteWarehouse(s.id),class:"mt-5 ml-3 px-4 py-2 border border-red-500 text-sm font-medium rounded-md text-red-500 hover:text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"}," Eliminar ",8,ve)])])]))),256)):k("",!0),he])])]),_:1}))}};export{Ae as default};
