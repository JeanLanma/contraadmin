import{o as t,d as a,b as l,u as s,Z as f,a as o,c,w as r,e as n,q as i,F as u,g as h,i as g}from"./app-e971657c.js";const x={class:"relative sm:flex sm:justify-center sm:items-center min-h-screen bg-center bg-gray-100 dark:bg-gray-900 selection:bg-red-500 selection:text-white bg-[url('/assets/landingcontraadmin-gradient.png')]",style:{"background-size":"cover"}},m={key:0,class:"sm:fixed sm:top-0 sm:end-0 p-6 text-end z-10 w-full"},y={class:"max-w-7xl mx-auto p-6 lg:p-8"},v=g('<div class="flex justify-center flex-col gap-4"><div class="text-center"><h2 class="text-white font-bold text-4xl">Bienvenido</h2></div><div class="w-72 mx-auto md:w-96 h-1 bg-white"></div><div class="text-center"><h2 class="text-white font-bold text-4xl">Contra Admin Panel</h2></div></div>',1),_={class:"flex justify-center mt-12"},b=["href"],p=o("button",{class:"text-white font-bold text-2xl bg-cyan-400 px-6 py-3 hover:bg-cyan-500 transition-all duration-300 rounded-full"},"Comenzar",-1),k=[p],V={__name:"Welcome",props:{canLogin:Boolean,canRegister:Boolean,laravelVersion:String,phpVersion:String},setup(d){return(e,w)=>(t(),a(u,null,[l(s(f),{title:"Contraadmin"}),o("div",x,[d.canLogin?(t(),a("div",m,[e.$page.props.auth.user?(t(),c(s(i),{key:0,href:e.route("dashboard"),class:"font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500 transition-all duration-200 border border-cyan-300 px-6 py-3 rounded hover:bg-cyan-400"},{default:r(()=>[n("Dashboard")]),_:1},8,["href"])):(t(),a(u,{key:1},[l(s(i),{href:e.route("login"),class:"font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"},{default:r(()=>[n("Log in")]),_:1},8,["href"]),d.canRegister?(t(),c(s(i),{key:0,href:e.route("register"),class:"ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"},{default:r(()=>[n("Register")]),_:1},8,["href"])):h("",!0)],64))])):h("",!0),o("div",y,[v,o("div",_,[o("a",{href:e.route("dashboard")},k,8,b)])])])],64))}};export{V as default};
