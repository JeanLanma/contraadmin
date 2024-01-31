import{k as i,T as c,o as u,e as b,a as e,l as d,v as l,u as t,p as f,P as p}from"./app-bd231437.js";const x={class:"w-full sm:w-1/2 mb-4"},_={class:"mb-5 md:flex md:items-end"},h=e("label",{for:"name",class:"mb-3 block text-base font-medium text-[#07074D] md:mr-4"}," Nombre ",-1),w={class:"w-full sm:w-1/2 mb-4"},v={class:"mb-5 md:flex md:items-end"},g=e("label",{for:"location",class:"mb-3 block text-base font-medium text-[#07074D] md:mr-4"}," Dirección ",-1),A={class:"md:w-1/3"},F=["disabled"],y={__name:"CreateWarehouseForm",setup(T){const a=i(),o=c({name:"",location:"",user_id:null}),r=()=>{o.post(route("admin.warehouse.store"),{onSuccess:m=>{a.success("Almacen creado con exito!",{position:p.TOP_CENTER}),o.reset()},onError:()=>{a.error("Algo salio mal, intentalo de nuevo")},onFinish:()=>{o.reset()}})};return(m,s)=>(u(),b("form",{onSubmit:f(r,["prevent"]),class:"md:flex md:flex-col md:items-center"},[e("div",x,[e("div",_,[h,d(e("input",{type:"text",name:"name",id:"name","onUpdate:modelValue":s[0]||(s[0]=n=>t(o).name=n),placeholder:"Nombre del almacen..",class:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},null,512),[[l,t(o).name]])])]),e("div",w,[e("div",v,[g,d(e("input",{type:"text",name:"location",id:"location","onUpdate:modelValue":s[1]||(s[1]=n=>t(o).location=n),placeholder:"Calle 123, Ciudad, Estado...",class:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},null,512),[[l,t(o).location]])])]),e("div",A,[e("button",{disabled:t(o).processing,class:"hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none w-full"}," Agregar ",8,F)])],32))}};export{y as default};
