import{o,e as s,a as e,F as n,g as c,t as l}from"./app-c92b77ad.js";const b={class:"text-left w-full"},g=e("thead",null,[e("tr",null,[e("th",{class:"py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light"},"Nombre"),e("th",{class:"py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light"},"Locación"),e("th",{class:"py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light"},"Actions")])],-1),i={class:"hover:bg-gray-100"},p={class:"py-4 px-6 border-b border-grey-light"},h={class:"py-4 px-6 border-b border-grey-light"},y={class:"py-4 px-6 border-b border-grey-light flex"},u=["onClick"],x=["onClick"],m={__name:"StoresTable",props:{stores:{type:Object,required:!0},setModal:{type:Function,required:!0}},setup(r){const d=r;return(_,f)=>(o(),s("table",b,[g,e("tbody",null,[(o(!0),s(n,null,c(d.stores.data,t=>(o(),s("tr",i,[e("td",p,l(t.name),1),e("td",h,l(t.location),1),e("td",y,[e("button",{onClick:a=>r.setModal(t),class:"inline text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark"},"editar",8,u),e("button",{onClick:a=>r.setModal(t),class:"inline text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark"},"ver",8,x)])]))),256))])]))}};export{m as default};
