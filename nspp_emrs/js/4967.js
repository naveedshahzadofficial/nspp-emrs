"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4967],{8706:(e,s,r)=>{r.d(s,{Z:()=>t});var n=r(821),i={key:0,class:"fv-plugins-message-container"},a={class:"fv-help-block"};const t=(0,n.aZ)({__name:"ServerErrorMessage",props:{error:String},setup:function(e){return function(s,r){return e.error?((0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("div",a,[(0,n._)("span",null,(0,n.zw)(e.error),1)])])):(0,n.kq)("",!0)}}})},4967:(e,s,r)=>{r.r(s),r.d(s,{default:()=>_});var n=r(821),i=r(8706),a=r(8748),t={class:"d-flex flex-column-fluid"},o={id:"kt_content_container",class:"container-fluid"},l={class:"card card-custom"},d={class:"card-body"},c={class:"row"},u={class:"col-lg-6"},m=(0,n._)("label",{class:"required form-label"},"Permission Name",-1),p={class:"card-footer"},b=["disabled","data-kt-indicator"],f=[(0,n._)("span",{class:"indicator-label"}," Update ",-1),(0,n._)("span",{class:"indicator-progress"},[(0,n.Uk)(" Please wait... "),(0,n._)("span",{class:"spinner-border spinner-border-sm align-middle ms-2"})],-1)];const _=(0,n.aZ)({__name:"Edit",props:{permission:{type:Object,required:!0}},setup:function(e){var s,r=e,_=(0,a.cI)({name:null===(s=r.permission)||void 0===s?void 0:s.name});return function(s,r){var a=(0,n.up)("Head"),v=(0,n.up)("Toolbar"),k=(0,n.up)("Link");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(a,{title:"Update Permission"}),(0,n.Wm)(v,{title:"Update Permission",buttons:[{label:"Back",link:s.route("permissions.index")}],breadcrumbs:[{label:"System Settings",link:"#"},{label:"Permissions",link:s.route("permissions.index")},{label:"Update",link:null}]},null,8,["buttons","breadcrumbs"]),(0,n._)("div",t,[(0,n._)("div",o,[(0,n._)("div",l,[(0,n._)("form",{onSubmit:r[1]||(r[1]=(0,n.iM)((function(r){var i;return(0,n.SU)(_).put(s.route("permissions.update",null===(i=e.permission)||void 0===i?void 0:i.id))}),["prevent"]))},[(0,n._)("div",d,[(0,n._)("div",c,[(0,n._)("div",u,[m,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":r[0]||(r[0]=function(e){return(0,n.SU)(_).name=e}),type:"text",class:"form-control form-control-sm",placeholder:"Permission Name"},null,512),[[n.nr,(0,n.SU)(_).name]]),(0,n.Wm)(i.Z,{error:(0,n.SU)(_).errors.name},null,8,["error"])])])]),(0,n._)("div",p,[(0,n._)("button",{type:"submit",ref:"submitButton",class:"btn btn-success me-2",disabled:(0,n.SU)(_).processing,"data-kt-indicator":(0,n.SU)(_).processing?"on":"off"},f,8,b),(0,n.Wm)(k,{href:s.route("permissions.index"),class:"btn btn-secondary"},{default:(0,n.w5)((function(){return[(0,n.Uk)("Cancel")]})),_:1},8,["href"])])],32)])])])],64)}}})}}]);