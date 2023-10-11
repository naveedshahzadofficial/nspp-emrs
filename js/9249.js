"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9249],{8706:(e,n,r)=>{r.d(n,{Z:()=>t});var i=r(821),a={key:0,class:"fv-plugins-message-container"},s={class:"fv-help-block"};const t=(0,i.aZ)({__name:"ServerErrorMessage",props:{error:String},setup:function(e){return function(n,r){return e.error?((0,i.wg)(),(0,i.iD)("div",a,[(0,i._)("div",s,[(0,i._)("span",null,(0,i.zw)(e.error),1)])])):(0,i.kq)("",!0)}}})},9249:(e,n,r)=>{r.r(n),r.d(n,{default:()=>S});var i=r(821),a=r(8706),s=r(8748),t={class:"d-flex flex-column-fluid"},c={id:"kt_content_container",class:"container-fluid"},l={class:"card card-custom"},o={class:"card-body"},d={class:"row"},u={class:"col-lg-6"},m=(0,i._)("label",{class:"required form-label"},"Generic Name",-1),p={class:"col-lg-6"},f=(0,i._)("label",{class:"required form-label"},"Status",-1),_={class:"d-flex"},b=["onUpdate:modelValue","value","id"],v=["for"],k={class:"card-footer"},g=["disabled","data-kt-indicator"],U=[(0,i._)("span",{class:"indicator-label"}," Update ",-1),(0,i._)("span",{class:"indicator-progress"},[(0,i.Uk)(" Please wait... "),(0,i._)("span",{class:"spinner-border spinner-border-sm align-middle ms-2"})],-1)];const S=(0,i.aZ)({__name:"Edit",props:{medicineGeneric:{type:Object,required:!0}},setup:function(e){var n,r,S=e,h=(0,s.cI)({generic_name:null===(n=S.medicineGeneric)||void 0===n?void 0:n.generic_name,status:null===(r=S.medicineGeneric)||void 0===r?void 0:r.status});return function(n,r){var s=(0,i.up)("Head"),S=(0,i.up)("Toolbar"),w=(0,i.up)("Link");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(s,{title:"Update Medicine Generic"}),(0,i.Wm)(S,{title:"Update Medicine Generic",buttons:[{label:"Back",link:n.route("medicine-generics.index")}],breadcrumbs:[{label:"System Settings",link:"#"},{label:"Medicine Generics",link:n.route("medicine-generics.index")},{label:"Update",link:null}]},null,8,["buttons","breadcrumbs"]),(0,i._)("div",t,[(0,i._)("div",c,[(0,i._)("div",l,[(0,i._)("form",{onSubmit:r[1]||(r[1]=(0,i.iM)((function(r){var a;return(0,i.SU)(h).put(n.route("medicine-generics.update",null===(a=e.medicineGeneric)||void 0===a?void 0:a.id))}),["prevent"]))},[(0,i._)("div",o,[(0,i._)("div",d,[(0,i._)("div",u,[m,(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":r[0]||(r[0]=function(e){return(0,i.SU)(h).generic_name=e}),type:"text",class:"form-control form-control-sm",placeholder:"Generic Name"},null,512),[[i.nr,(0,i.SU)(h).generic_name]]),(0,i.Wm)(a.Z,{error:(0,i.SU)(h).errors.generic_name},null,8,["error"])]),(0,i._)("div",p,[f,(0,i._)("div",_,[((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)([{id:1,name:"Active"},{id:0,name:"Inactive"}],(function(e){return(0,i._)("div",{key:e.id,class:"form-check form-check-custom form-check-sm me-10"},[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":function(e){return(0,i.SU)(h).status=e},value:e.id,class:"form-check-input",name:"status",type:"radio",id:"status_".concat(e.id)},null,8,b),[[i.G2,(0,i.SU)(h).status]]),(0,i._)("label",{class:"form-check-label",for:"status_".concat(e.id)},(0,i.zw)(e.name),9,v)])})),64))]),(0,i.Wm)(a.Z,{error:(0,i.SU)(h).errors.status},null,8,["error"])])])]),(0,i._)("div",k,[(0,i._)("button",{type:"submit",ref:"submitButton",class:"btn btn-success me-2",disabled:(0,i.SU)(h).processing,"data-kt-indicator":(0,i.SU)(h).processing?"on":"off"},U,8,g),(0,i.Wm)(w,{href:n.route("medicine-generics.index"),class:"btn btn-secondary"},{default:(0,i.w5)((function(){return[(0,i.Uk)("Cancel")]})),_:1},8,["href"])])],32)])])])],64)}}})}}]);