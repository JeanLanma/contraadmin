import{_ as c}from"./AppLayout-615783b4.js";import p from"./DeleteUserForm-46badbf9.js";import l from"./LogoutOtherBrowserSessionsForm-c356c160.js";import{S as s}from"./SectionBorder-befdf8b5.js";import f from"./TwoFactorAuthenticationForm-c737e895.js";import u from"./UpdatePasswordForm-04262ee6.js";import _ from"./UpdateProfileInformationForm-b33fbc02.js";import{o,c as d,w as n,a as i,e as r,b as t,f as a,F as h}from"./app-530c6c2f.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./DropdownLink-cd0bf265.js";import"./DialogModal-f4ca4e81.js";import"./SectionTitle-8d2ababb.js";import"./DangerButton-1e882d71.js";import"./TextInput-926adcb7.js";import"./SecondaryButton-5c516753.js";import"./ActionMessage-b76d71a8.js";import"./PrimaryButton-40778d2d.js";import"./InputLabel-8e8cf55f.js";import"./FormSection-a38c9bc4.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},G={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),d(c,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",w,[t(_,{user:e.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{G as default};