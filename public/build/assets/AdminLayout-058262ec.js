import{o as c,e as p,a as o,d as k,r as v,n as f,y as b,F as w,b as s,w as e,u as m,Z as y,t as x,k as u,f as i,O as L}from"./app-988a0f8c.js";import{_ as V,a as S,b as R}from"./DropdownLink-4fa55bfd.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";const M={},B={width:"64px",height:"64px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},G=o("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),O=o("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),$=o("g",{id:"SVGRepo_iconCarrier"},[o("path",{d:"M20 11.6211V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V11.6211M7.5 9.75C7.5 10.9926 6.49264 12 5.25 12C4.09397 12 3.14157 11.1282 3.01442 10.0062C2.99524 9.83688 3.02176 9.66657 3.06477 9.50173L4.10996 5.49516C4.3397 4.6145 5.13506 4 6.04519 4H17.9548C18.8649 4 19.6603 4.6145 19.89 5.49516L20.9352 9.50173C20.9782 9.66657 21.0048 9.83688 20.9856 10.0062C20.8584 11.1282 19.906 12 18.75 12C17.5074 12 16.5 10.9926 16.5 9.75M7.5 9.75C7.5 10.9926 8.50736 12 9.75 12C10.9926 12 12 10.9926 12 9.75M7.5 9.75L8 4M12 9.75C12 10.9926 13.0074 12 14.25 12C15.4926 12 16.5 10.9926 16.5 9.75M12 9.75V4M16.5 9.75L16 4",stroke:"#000000","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),N=[G,O,$];function A(l,d){return c(),p("svg",B,N)}const _=C(M,[["render",A]]),H={},I={width:"64px",height:"64px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},j=o("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),Z=o("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),F=o("g",{id:"SVGRepo_iconCarrier"},[o("path",{d:"M7 10L12 15L17 10",stroke:"#000000","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1),P=[j,Z,F];function E(l,d){return c(),p("svg",I,P)}const U=C(H,[["render",E]]),n={__name:"NavLink",props:{isOpen:{type:Boolean,default:!1}},setup(l){const a=k(l.isOpen),h=k("0px"),t=()=>{a.value=!a.value,h.value=a.value?"auto":"0px"};return(r,g)=>(c(),p(w,null,[o("div",{onClick:t,class:f([{"bg-gray-200 mr-0 rounded-b-none":a.value},"block cursor-pointer text-gray-500 py-2.5 px-4 mx-2 rounded transition-all duration-300 hover:bg-gray-100"])},[v(r.$slots,"NavLink")],2),o("div",{style:b({height:h.value,transition:"all",transitionDuration:"300"}),class:"bg-gray-200 ml-2 overflow-hidden transition-transform duration-300"},[v(r.$slots,"NavLinkItems")],4)],64))}},T={},q={width:"64px",height:"64px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},z=o("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),D=o("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),W=o("g",{id:"SVGRepo_iconCarrier"},[o("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9ZM12 20.5C13.784 20.5 15.4397 19.9504 16.8069 19.0112C17.4108 18.5964 17.6688 17.8062 17.3178 17.1632C16.59 15.8303 15.0902 15 11.9999 15C8.90969 15 7.40997 15.8302 6.68214 17.1632C6.33105 17.8062 6.5891 18.5963 7.19296 19.0111C8.56018 19.9503 10.2159 20.5 12 20.5Z",fill:"#6b7280"})],-1),J=[z,D,W];function K(l,d){return c(),p("svg",q,J)}const Q=C(T,[["render",K]]),X=l=>l.length>18?l.substring(0,18)+"...":l,Y=o("link",{rel:"icon",type:"image/ico",href:"/favicon.ico"},null,-1),oo={class:"min-h-screen bg-gray-100"},eo={class:"w-full bg-white h-16 shadow-md border-b-2 border-b-cyan-300"},to={class:"w-full flex justify-between px-4 py-2"},so=o("h2",{class:"hidden md:block text-sm opacity-50 font-bold mx-2 group-hover:opacity-75 transition-opacity duration-200"},"Contra Admin",-1),ro=o("div",{class:"w-fit py-2 px-4 flex items-center cursor-pointer group hover:bg-gray-100 rounded-md transition-all duration-200"},[o("img",{class:"h-8",src:"/assets/contradminlogo.png",alt:"Admin Logo"})],-1),no={class:"w-fit py-2 px-4 flex items-center cursor-pointer group hover:bg-gray-100 rounded-md transition-all duration-200"},io={class:"hidden md:block text-sm opacity-50 font-bold mx-2 group-hover:opacity-75 transition-opacity duration-200"},lo={class:"flex"},ao={class:"bg-white hidden md:block md:w-60 min-h-screen"},co={class:"py-4"},po=o("a",{href:"#"},[o("span",{class:"flex"},[o("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"#000000"},[o("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),o("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round",stroke:"#CCCCCC","stroke-width":"0.4800000000000001"}),o("g",{id:"SVGRepo_iconCarrier"},[o("path",{opacity:"0.5",d:"M2.36407 12.9579C1.98463 10.3208 1.79491 9.00229 2.33537 7.87495C2.87583 6.7476 4.02619 6.06234 6.32691 4.69181L7.71175 3.86687C9.80104 2.62229 10.8457 2 12 2C13.1543 2 14.199 2.62229 16.2882 3.86687L17.6731 4.69181C19.9738 6.06234 21.1242 6.7476 21.6646 7.87495C22.2051 9.00229 22.0154 10.3208 21.6359 12.9579L21.3572 14.8952C20.8697 18.2827 20.626 19.9764 19.451 20.9882C18.2759 22 16.5526 22 13.1061 22H10.8939C7.44737 22 5.72409 22 4.54903 20.9882C3.37396 19.9764 3.13025 18.2827 2.64284 14.8952L2.36407 12.9579Z",stroke:"#000000","stroke-width":"1.5"}),i(),o("path",{d:"M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16",stroke:"#000000","stroke-width":"1.5","stroke-linecap":"round"})])]),o("span",{class:"ml-4 font-bold"},"Inicio")])],-1),ho=o("a",{href:"#"},[o("span",{class:"flex"},[o("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[o("path",{d:"M3.79424 12.0291C4.33141 9.34329 4.59999 8.00036 5.48746 7.13543C5.65149 6.97557 5.82894 6.8301 6.01786 6.70061C7.04004 6 8.40956 6 11.1486 6H12.8515C15.5906 6 16.9601 6 17.9823 6.70061C18.1712 6.8301 18.3486 6.97557 18.5127 7.13543C19.4001 8.00036 19.6687 9.34329 20.2059 12.0291C20.9771 15.8851 21.3627 17.8131 20.475 19.1793C20.3143 19.4267 20.1267 19.6555 19.9157 19.8616C18.7501 21 16.7839 21 12.8515 21H11.1486C7.21622 21 5.25004 21 4.08447 19.8616C3.87342 19.6555 3.68582 19.4267 3.5251 19.1793C2.63744 17.8131 3.02304 15.8851 3.79424 12.0291Z",stroke:"black"}),o("path",{d:"M9 6V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V6",stroke:"black","stroke-linecap":"round"}),o("path",{d:"M9.1709 15C9.58273 16.1652 10.694 17 12.0002 17C13.3064 17 14.4177 16.1652 14.8295 15",stroke:"black","stroke-linecap":"round"})]),o("span",{class:"ml-4 font-bold"},"Catologo")])],-1),uo=["href"],go=o("div",null,[o("span",null,"Productos")],-1),_o=[go],ko=o("a",{href:"#",class:"block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100"},[o("div",null,[o("span",null,"Categorias")])],-1),vo=o("a",{href:"#",class:"block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100"},[o("div",null,[o("span",null,"Etiquetas")])],-1),Co=o("a",{href:"#"},[o("span",{class:"flex"},[o("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[o("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),o("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),o("g",{id:"SVGRepo_iconCarrier"},[o("circle",{cx:"12",cy:"6",r:"4",stroke:"#6B7280","stroke-width":"1.5"}),i(),o("path",{d:"M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634",stroke:"#6B7280","stroke-width":"1.5","stroke-linecap":"round"})])]),o("span",{class:"ml-4 font-bold"},"Usuarios")])],-1),mo=o("a",{href:"#",class:"block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100"},[o("div",null,[o("span",null,"Usuarios")])],-1),fo=o("a",{href:"#",class:"block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100"},[o("div",null,[o("span",null,"Roles y Permisos")])],-1),bo={href:"#"},wo={class:"flex"},yo=o("span",{class:"ml-4 font-bold"},"Sucursales",-1),xo=["href"],Lo=o("div",null,[o("span",null,"Tiendas")],-1),Vo=[Lo],So=["href"],Ro=o("div",null,[o("span",null,"Almacenes")],-1),Mo=[Ro],Bo=o("a",{href:"#",class:"block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100"},[o("div",null,[o("span",null,"Inventario")])],-1),Go=o("a",{href:"#"},[o("span",{class:"flex"},[o("svg",{class:"stroke-gray-500",width:"25px",height:"25px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[o("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),o("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),o("g",{id:"SVGRepo_iconCarrier"},[o("rect",{x:"5",y:"4",width:"14",height:"17",rx:"2",stroke:"#6B7280","stroke-width":"2"}),i(),o("path",{d:"M9 9H15",stroke:"#6B7280","stroke-width":"2","stroke-linecap":"round"}),i(),o("path",{d:"M9 13H15",stroke:"#6B7280","stroke-width":"2","stroke-linecap":"round"}),i(),o("path",{d:"M9 17H13",stroke:"#6B7280","stroke-width":"2","stroke-linecap":"round"})])]),o("span",{class:"ml-4 font-bold"},"Pedidos")])],-1),Oo=o("a",{href:"#",class:"block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100"},[o("div",null,[o("span",null,"Ordenes")])],-1),$o=o("a",{href:"#",class:"block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100"},[o("div",null,[o("span",null,"Envios")])],-1),No=o("a",{href:"#",class:"block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100"},[o("div",null,[o("span",null,"Facturación")])],-1),Ao=o("a",{href:"#"},[o("span",{class:"flex"},[o("svg",{fill:"#6B7280",width:"25px",height:"25px",viewBox:"0 0 256 256",id:"Flat",xmlns:"http://www.w3.org/2000/svg",stroke:"#6B7280","stroke-width":"3.84"},[o("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),o("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round",stroke:"#CCCCCC","stroke-width":"0.512"}),o("g",{id:"SVGRepo_iconCarrier"},[o("path",{d:"M111.13672,158.97681a56.00028,56.00028,0,1,0-46.27246-.00025,92.23328,92.23328,0,0,0-52.13867,36.11719,3.99985,3.99985,0,1,0,6.541,4.60547A84.01746,84.01746,0,0,1,156.73,199.69434a4.00014,4.00014,0,0,0,6.541-4.60645A92.23237,92.23237,0,0,0,111.13672,158.97681ZM40.00049,108a48,48,0,1,1,48,48A48.05436,48.05436,0,0,1,40.00049,108Zm203.82519,92.66162a3.99923,3.99923,0,0,1-5.57373-.96728A84.17363,84.17363,0,0,0,169.522,164a4,4,0,0,1,0-8,48,48,0,1,0-13.02636-94.2124,4,4,0,1,1-2.166-7.70117A55.99661,55.99661,0,0,1,192.6582,158.97681,92.23507,92.23507,0,0,1,244.793,195.08789,4.0002,4.0002,0,0,1,243.82568,200.66162Z"})])]),o("span",{class:"ml-4 font-bold"},"Clientes")])],-1),Ho=o("a",{href:"#",class:"block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100"},[o("div",null,[o("span",null,"Clientes")])],-1),Io=o("a",{href:"#",class:"block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100"},[o("div",null,[o("span",null,"Facturación")])],-1),jo={class:"absolute z-40 py-4 bg-white w-60 min-h-screen"},Zo=o("a",{href:"#"},[o("span",{class:"flex"},[o("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"#000000"},[o("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),o("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round",stroke:"#CCCCCC","stroke-width":"0.4800000000000001"}),o("g",{id:"SVGRepo_iconCarrier"},[o("path",{opacity:"0.5",d:"M2.36407 12.9579C1.98463 10.3208 1.79491 9.00229 2.33537 7.87495C2.87583 6.7476 4.02619 6.06234 6.32691 4.69181L7.71175 3.86687C9.80104 2.62229 10.8457 2 12 2C13.1543 2 14.199 2.62229 16.2882 3.86687L17.6731 4.69181C19.9738 6.06234 21.1242 6.7476 21.6646 7.87495C22.2051 9.00229 22.0154 10.3208 21.6359 12.9579L21.3572 14.8952C20.8697 18.2827 20.626 19.9764 19.451 20.9882C18.2759 22 16.5526 22 13.1061 22H10.8939C7.44737 22 5.72409 22 4.54903 20.9882C3.37396 19.9764 3.13025 18.2827 2.64284 14.8952L2.36407 12.9579Z",stroke:"#000000","stroke-width":"1.5"}),i(),o("path",{d:"M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16",stroke:"#000000","stroke-width":"1.5","stroke-linecap":"round"})])]),o("span",{class:"ml-4 font-bold"},"Inicio")])],-1),Fo=o("a",{href:"#"},[o("span",{class:"flex"},[o("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[o("path",{d:"M3.79424 12.0291C4.33141 9.34329 4.59999 8.00036 5.48746 7.13543C5.65149 6.97557 5.82894 6.8301 6.01786 6.70061C7.04004 6 8.40956 6 11.1486 6H12.8515C15.5906 6 16.9601 6 17.9823 6.70061C18.1712 6.8301 18.3486 6.97557 18.5127 7.13543C19.4001 8.00036 19.6687 9.34329 20.2059 12.0291C20.9771 15.8851 21.3627 17.8131 20.475 19.1793C20.3143 19.4267 20.1267 19.6555 19.9157 19.8616C18.7501 21 16.7839 21 12.8515 21H11.1486C7.21622 21 5.25004 21 4.08447 19.8616C3.87342 19.6555 3.68582 19.4267 3.5251 19.1793C2.63744 17.8131 3.02304 15.8851 3.79424 12.0291Z",stroke:"black"}),o("path",{d:"M9 6V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V6",stroke:"black","stroke-linecap":"round"}),o("path",{d:"M9.1709 15C9.58273 16.1652 10.694 17 12.0002 17C13.3064 17 14.4177 16.1652 14.8295 15",stroke:"black","stroke-linecap":"round"})]),o("span",{class:"ml-4 font-bold"},"Catologo")])],-1),Po=["href"],Eo=o("div",null,[o("span",null,"Productos")],-1),Uo=[Eo],To=o("a",{href:"#",class:"block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100"},[o("div",null,[o("span",null,"Categorias")])],-1),qo=o("a",{href:"#",class:"block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100"},[o("div",null,[o("span",null,"Etiquetas")])],-1),zo=o("a",{href:"#"},[o("span",{class:"flex"},[o("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[o("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),o("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),o("g",{id:"SVGRepo_iconCarrier"},[o("circle",{cx:"12",cy:"6",r:"4",stroke:"#6B7280","stroke-width":"1.5"}),i(),o("path",{d:"M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634",stroke:"#6B7280","stroke-width":"1.5","stroke-linecap":"round"})])]),o("span",{class:"ml-4 font-bold"},"Usuarios")])],-1),Do=o("a",{href:"#",class:"block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100"},[o("div",null,[o("span",null,"Usuarios")])],-1),Wo=o("a",{href:"#",class:"block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100"},[o("div",null,[o("span",null,"Roles y Permisos")])],-1),Jo={href:"#"},Ko={class:"flex"},Qo=o("span",{class:"ml-4 font-bold"},"Sucursales",-1),Xo=["href"],Yo=o("div",null,[o("span",null,"Tiendas")],-1),o1=[Yo],e1=["href"],t1=o("div",null,[o("span",null,"Almacenes")],-1),s1=[t1],r1=o("a",{href:"#",class:"block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100"},[o("div",null,[o("span",null,"Inventario")])],-1),n1=o("a",{href:"#"},[o("span",{class:"flex"},[o("svg",{class:"stroke-gray-500",width:"25px",height:"25px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[o("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),o("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),o("g",{id:"SVGRepo_iconCarrier"},[o("rect",{x:"5",y:"4",width:"14",height:"17",rx:"2",stroke:"#6B7280","stroke-width":"2"}),i(),o("path",{d:"M9 9H15",stroke:"#6B7280","stroke-width":"2","stroke-linecap":"round"}),i(),o("path",{d:"M9 13H15",stroke:"#6B7280","stroke-width":"2","stroke-linecap":"round"}),i(),o("path",{d:"M9 17H13",stroke:"#6B7280","stroke-width":"2","stroke-linecap":"round"})])]),o("span",{class:"ml-4 font-bold"},"Pedidos")])],-1),i1=o("a",{href:"#",class:"block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100"},[o("div",null,[o("span",null,"Ordenes")])],-1),l1=o("a",{href:"#",class:"block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100"},[o("div",null,[o("span",null,"Envios")])],-1),a1=o("a",{href:"#",class:"block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100"},[o("div",null,[o("span",null,"Facturación")])],-1),d1=o("a",{href:"#"},[o("span",{class:"flex"},[o("svg",{fill:"#6B7280",width:"25px",height:"25px",viewBox:"0 0 256 256",id:"Flat",xmlns:"http://www.w3.org/2000/svg",stroke:"#6B7280","stroke-width":"3.84"},[o("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),o("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round",stroke:"#CCCCCC","stroke-width":"0.512"}),o("g",{id:"SVGRepo_iconCarrier"},[o("path",{d:"M111.13672,158.97681a56.00028,56.00028,0,1,0-46.27246-.00025,92.23328,92.23328,0,0,0-52.13867,36.11719,3.99985,3.99985,0,1,0,6.541,4.60547A84.01746,84.01746,0,0,1,156.73,199.69434a4.00014,4.00014,0,0,0,6.541-4.60645A92.23237,92.23237,0,0,0,111.13672,158.97681ZM40.00049,108a48,48,0,1,1,48,48A48.05436,48.05436,0,0,1,40.00049,108Zm203.82519,92.66162a3.99923,3.99923,0,0,1-5.57373-.96728A84.17363,84.17363,0,0,0,169.522,164a4,4,0,0,1,0-8,48,48,0,1,0-13.02636-94.2124,4,4,0,1,1-2.166-7.70117A55.99661,55.99661,0,0,1,192.6582,158.97681,92.23507,92.23507,0,0,1,244.793,195.08789,4.0002,4.0002,0,0,1,243.82568,200.66162Z"})])]),o("span",{class:"ml-4 font-bold"},"Clientes")])],-1),c1=o("a",{href:"#",class:"block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100"},[o("div",null,[o("span",null,"Clientes")])],-1),p1=o("a",{href:"#",class:"block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100"},[o("div",null,[o("span",null,"Facturación")])],-1),h1={class:"grow"},k1={__name:"AdminLayout",props:{title:String},setup(l){k(!1);const d=()=>{L.post(route("logout"))},a=t=>{t.target.classList.contains("navigation-dropdown")&&t.target.classList.add("hidden")},h=()=>{document.querySelector(".navigation-dropdown").classList.remove("hidden")};return(t,r)=>(c(),p("div",null,[s(m(y),{title:l.title},{default:e(()=>[Y]),_:1},8,["title"]),s(V),o("div",oo,[o("header",eo,[o("div",to,[o("div",{onClick:r[0]||(r[0]=g=>h()),class:"w-fit py-2 px-4 flex items-center cursor-pointer group hover:bg-gray-100 rounded-md transition-all duration-200"},[s(_,{class:"block opacity-50 h-8 w-auto group-hover:opacity-75 transition-opacity duration-200 shadow-md"}),so,s(U,{class:"block opacity-50 h-6 w-auto group-hover:opacity-75 transition-opacity duration-200"})]),ro,o("div",null,[s(R,{align:"right",width:"48"},{trigger:e(()=>[o("div",no,[s(Q,{class:"block opacity-50 h-10 md:h-8 w-auto group-hover:opacity-75 transition-opacity duration-200"}),o("h2",io,x(m(X)(t.$page.props.auth.user.name)),1)])]),content:e(()=>[o("form",{onSubmit:u(d,["prevent"])},[s(S,{as:"button"},{default:e(()=>[i(" Cerrar sesión ")]),_:1})],32)]),_:1})])])]),o("div",lo,[o("aside",ao,[o("nav",co,[o("div",null,[s(n,{isOpen:t.route().current("dashboard")},{NavLink:e(()=>[po]),_:1},8,["isOpen"])]),o("div",null,[s(n,{isOpen:t.route().current("products")},{NavLink:e(()=>[ho]),NavLinkItems:e(()=>[o("a",{href:t.route("admin.product.index"),class:"block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100"},_o,8,uo),ko,vo]),_:1},8,["isOpen"])]),o("div",null,[s(n,{isOpen:t.route().current("products")},{NavLink:e(()=>[Co]),NavLinkItems:e(()=>[mo,fo]),_:1},8,["isOpen"])]),o("div",null,[s(n,{isOpen:t.route().current("products")},{NavLink:e(()=>[o("a",bo,[o("span",wo,[s(_,{class:"block opacity-50 h-8 w-auto group-hover:opacity-75 transition-opacity duration-200 shadow-md"}),yo])])]),NavLinkItems:e(()=>[o("a",{href:t.route("admin.store.index"),class:"block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100"},Vo,8,xo),o("a",{href:t.route("admin.warehouse.index"),class:"block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100"},Mo,8,So),Bo]),_:1},8,["isOpen"])]),o("div",null,[s(n,{isOpen:t.route().current("products")},{NavLink:e(()=>[Go]),NavLinkItems:e(()=>[Oo,$o,No]),_:1},8,["isOpen"])]),o("div",null,[s(n,{isOpen:t.route().current("products")},{NavLink:e(()=>[Ao]),NavLinkItems:e(()=>[Ho,Io]),_:1},8,["isOpen"])])])]),o("aside",{onClick:r[1]||(r[1]=g=>a(g)),class:"hidden bg-black/40 backdrop-blur fixed w-full min-h-screen navigation-dropdown",onWheel:r[2]||(r[2]=u(()=>{},["prevent"])),onTouchmove:r[3]||(r[3]=u(()=>{},["prevent"])),onScroll:r[4]||(r[4]=u(()=>{},["prevent"]))},[o("nav",jo,[o("div",null,[s(n,{isOpen:t.route().current("dashboard")},{NavLink:e(()=>[Zo]),_:1},8,["isOpen"])]),o("div",null,[s(n,{isOpen:t.route().current("products")},{NavLink:e(()=>[Fo]),NavLinkItems:e(()=>[o("a",{href:t.route("admin.product.index"),class:"block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100"},Uo,8,Po),To,qo]),_:1},8,["isOpen"])]),o("div",null,[s(n,{isOpen:t.route().current("products")},{NavLink:e(()=>[zo]),NavLinkItems:e(()=>[Do,Wo]),_:1},8,["isOpen"])]),o("div",null,[s(n,{isOpen:t.route().current("products")},{NavLink:e(()=>[o("a",Jo,[o("span",Ko,[s(_,{class:"block opacity-50 h-8 w-auto group-hover:opacity-75 transition-opacity duration-200 shadow-md"}),Qo])])]),NavLinkItems:e(()=>[o("a",{href:t.route("admin.store.index"),class:"block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100"},o1,8,Xo),o("a",{href:t.route("admin.warehouse.index"),class:"block font-bold rounded-l-md py-2.5 px-4 ml-10 text-gray-500 hover:bg-gray-100"},s1,8,e1),r1]),_:1},8,["isOpen"])]),o("div",null,[s(n,{isOpen:t.route().current("products")},{NavLink:e(()=>[n1]),NavLinkItems:e(()=>[i1,l1,a1]),_:1},8,["isOpen"])]),o("div",null,[s(n,{isOpen:t.route().current("products")},{NavLink:e(()=>[d1]),NavLinkItems:e(()=>[c1,p1]),_:1},8,["isOpen"])])])],32),o("div",h1,[v(t.$slots,"content")])])])]))}};export{k1 as _};