"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2418],{5093:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(821),s={class:"d-flex flex-column"},o=["textContent"],i=["textContent"],l=(0,r._)("button",{type:"button",class:"position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto","data-bs-dismiss":"alert"},[(0,r._)("i",{class:"bi bi-x fs-1 text-black"})],-1);const a=(0,r.aZ)({__name:"AlertMessage",props:{title:{type:String,required:!0},message:{type:String,required:!0}},setup:function(e){var t=e,n=(0,r.iH)("");return(0,r.bv)((function(){switch(t.title){case"Success":n.value="/media/icons/duotune/general/gen048.svg";break;case"Error":n.value="/media/icons/duotune/general/gen050.svg";break;case"Warning":n.value="/media/icons/duotune/general/gen044.svg";break;case"Info":n.value="/media/icons/duotune/general/gen045.svg"}})),function(t,a){var c=(0,r.up)("inline-svg");return(0,r.wg)(),(0,r.iD)("div",{class:(0,r.C_)([{"alert-success":"Success"===e.title,"alert-danger":"Error"===e.title,"alert-warning":"Warning"===e.title,"alert-info":"Info"===e.title},"alert alert-success alert-dismissible d-flex align-items-center p-5"])},[(0,r._)("span",{class:(0,r.C_)(["svg-icon svg-icon-2hx me-4",{"svg-icon-success":"Success"===e.title,"svg-icon-danger":"Error"===e.title,"svg-icon-warning":"Warning"===e.title,"svg-icon-info":"Info"===e.title}])},[(0,r.Wm)(c,{src:n.value},null,8,["src"])],2),(0,r._)("div",s,[(0,r._)("h4",{class:(0,r.C_)(["mb-2",{"text-success":"Success"===e.title,"text-danger":"Error"===e.title,"text-warning":"Warning"===e.title,"text-info":"Info"===e.title}]),textContent:(0,r.zw)(e.title)},null,10,o),(0,r._)("span",{textContent:(0,r.zw)(e.message)},null,8,i)]),l],2)}}})},8706:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(821),s={key:0,class:"fv-plugins-message-container"},o={class:"fv-help-block"};const i=(0,r.aZ)({__name:"ServerErrorMessage",props:{error:String},setup:function(e){return function(t,n){return e.error?((0,r.wg)(),(0,r.iD)("div",s,[(0,r._)("div",o,[(0,r._)("span",null,(0,r.zw)(e.error),1)])])):(0,r.kq)("",!0)}}})},8991:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(821),s={class:"d-flex flex-center flex-column flex-column-fluid position-relative overflow-hidden p-15 pb-lg-20 w-100"},o={class:"d-flex gap-3"},i=(0,r._)("img",{alt:"Logo",src:"/media/logos/nspp-logo.png",class:"h-100px w-100px"},null,-1),l=(0,r._)("div",{class:"d-flex flex-column"},[(0,r._)("span",{class:"auth-logo-title"},"Electronic Medical Record System"),(0,r._)("span",{class:"auth-logo-subtitle"},"National School of Public Policy"),(0,r._)("span",{class:"auth-logo-caption"},"Government of Pakistan")],-1),a=(0,r._)("div",{class:"d-flex flex-center flex-column-auto pb-4 auth-footer"},[(0,r._)("div",{class:"d-flex align-items-center fw-bold fs-6"},[(0,r._)("span",{class:"px-2"},[(0,r.Uk)("Powered by : "),(0,r._)("a",{href:"https://pitb.gov.pk",target:"_blank"},"Punjab Information Technology Board")])])],-1);var c=n(3907),u=n(6169);const f=(0,r.aZ)({name:"AuthLayout",components:{},setup:function(){var e=(0,c.oR)();return(0,r.bv)((function(){e.dispatch(u.e.ADD_BODY_CLASSNAME,"bg-body")})),(0,r.SK)((function(){e.dispatch(u.e.REMOVE_BODY_CLASSNAME,"bg-body")})),{}}});const p=(0,n(3744).Z)(f,[["render",function(e,t,n,c,u,f){var p=(0,r.up)("Link");return(0,r.wg)(),(0,r.iD)("div",{class:"d-flex flex-column flex-column-fluid auth-bg",style:(0,r.j5)({backgroundImage:"url(/media/patterns/bg-nspp.jpg)"})},[(0,r._)("div",s,[(0,r._)("div",o,[(0,r._)("div",null,[(0,r.Wm)(p,{href:e.route("login"),class:"mb-12"},{default:(0,r.w5)((function(){return[i]})),_:1},8,["href"])]),l]),(0,r.WI)(e.$slots,"default")]),a],4)}]])},2418:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var r=n(821),s=n(8706),o=n(8748),i=n(5093),l=n(8991);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===a(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p={class:"w-lg-500px rounded shadow-sm p-10 p-lg-15 mx-auto"},d={class:"fv-row mb-10"},g=(0,r._)("label",{class:"form-label fs-6 fw-bolder text-white required"},"Email",-1),m={class:"text-center"},b=["disabled","data-kt-indicator"],v=[(0,r._)("span",{class:"indicator-label"}," Send Password Reset Link ",-1),(0,r._)("span",{class:"indicator-progress"},[(0,r.Uk)(" Please wait... "),(0,r._)("span",{class:"spinner-border spinner-border-sm align-middle ms-2"})],-1)],_={class:"d-flex flex-stack justify-content-end mt-5"},y={layout:l.Z};const w=(0,r.aZ)(u(u({},y),{},{__name:"ForgotPassword",setup:function(e){var t=(0,o.cI)({email:""});return function(e,n){var o=(0,r.up)("Head"),l=(0,r.up)("Link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(o,{title:"Forgot Password"}),(0,r._)("div",p,[e.$page.props.flash.title?((0,r.wg)(),(0,r.j4)(i.Z,{key:0,title:e.$page.props.flash.title,message:e.$page.props.flash.message},null,8,["title","message"])):(0,r.kq)("",!0),(0,r._)("form",{class:"form w-100",id:"kt_login_signin_form",onSubmit:n[1]||(n[1]=(0,r.iM)((function(n){return(0,r.SU)(t).post(e.route("password.email"),{preserveScroll:!0,onSuccess:function(){return(0,r.SU)(t).reset("email")}})}),["prevent"]))},[(0,r._)("div",d,[g,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":n[0]||(n[0]=function(e){return(0,r.SU)(t).email=e}),class:"form-control form-control-sm",type:"email",name:"email",autocomplete:"off"},null,512),[[r.nr,(0,r.SU)(t).email]]),(0,r.Wm)(s.Z,{error:(0,r.SU)(t).errors.email},null,8,["error"])]),(0,r._)("div",m,[(0,r._)("button",{type:"submit",ref:"submitButton",id:"kt_sign_in_submit",class:"btn auth-btn w-100 mb-5",disabled:(0,r.SU)(t).processing,"data-kt-indicator":(0,r.SU)(t).processing?"on":"off"},v,8,b)]),(0,r._)("div",_,[(0,r.Wm)(l,{href:e.route("login"),class:"fs-6 fw-bolder auth-link"},{default:(0,r.w5)((function(){return[(0,r.Uk)(" Back to Login ")]})),_:1},8,["href"])])],32)])],64)}}}))}}]);