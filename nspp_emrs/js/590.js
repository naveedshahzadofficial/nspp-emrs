"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[590],{8706:(e,t,s)=>{s.d(t,{Z:()=>n});var r=s(821),l={key:0,class:"fv-plugins-message-container"},a={class:"fv-help-block"};const n=(0,r.aZ)({__name:"ServerErrorMessage",props:{error:String},setup:function(e){return function(t,s){return e.error?((0,r.wg)(),(0,r.iD)("div",l,[(0,r._)("div",a,[(0,r._)("span",null,(0,r.zw)(e.error),1)])])):(0,r.kq)("",!0)}}})},590:(e,t,s)=>{s.r(t),s.d(t,{default:()=>w});var r=s(821),l=s(8706),a=s(8748),n={class:"d-flex flex-column-fluid"},o={id:"kt_content_container",class:"container-fluid"},i={class:"card card-custom"},u={class:"card-body"},c={class:"row"},d={class:"col-lg-6"},m=(0,r._)("label",{class:"required form-label"},"Test Types",-1),p={class:"col-lg-6"},_=(0,r._)("label",{class:"required form-label"},"Test Name",-1),f={class:"row mt-5"},b={class:"col-lg-6"},v=(0,r._)("label",{class:"required form-label"},"Status",-1),k={class:"d-flex"},y=["onUpdate:modelValue","value","id"],U=["for"],S={class:"card-footer"},g=["disabled","data-kt-indicator"],h=[(0,r._)("span",{class:"indicator-label"}," Update ",-1),(0,r._)("span",{class:"indicator-progress"},[(0,r.Uk)(" Please wait... "),(0,r._)("span",{class:"spinner-border spinner-border-sm align-middle ms-2"})],-1)];const w=(0,r.aZ)({__name:"Edit",props:{testTypes:{type:Array,required:!0},test:{type:Object,required:!0}},setup:function(e){var t,s,w,T=e,x=(0,a.cI)({test_type_id:null===(t=T.test)||void 0===t?void 0:t.test_type_id,test_name:null===(s=T.test)||void 0===s?void 0:s.test_name,status:null===(w=T.test)||void 0===w?void 0:w.status});return function(t,s){var a=(0,r.up)("Head"),w=(0,r.up)("Toolbar"),T=(0,r.up)("v-select"),W=(0,r.up)("Link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(a,{title:"Update Test"}),(0,r.Wm)(w,{title:"Update Test",buttons:[{label:"Back",link:t.route("tests.index")}],breadcrumbs:[{label:"System Settings",link:"#"},{label:"Tests",link:t.route("tests.index")},{label:"Update",link:null}]},null,8,["buttons","breadcrumbs"]),(0,r._)("div",n,[(0,r._)("div",o,[(0,r._)("div",i,[(0,r._)("form",{onSubmit:s[2]||(s[2]=(0,r.iM)((function(s){var l;return(0,r.SU)(x).put(t.route("tests.update",null===(l=e.test)||void 0===l?void 0:l.id))}),["prevent"]))},[(0,r._)("div",u,[(0,r._)("div",c,[(0,r._)("div",d,[m,(0,r.Wm)(T,{modelValue:(0,r.SU)(x).test_type_id,"onUpdate:modelValue":s[0]||(s[0]=function(e){return(0,r.SU)(x).test_type_id=e}),options:e.testTypes,label:"type_name",reduce:function(e){return e.id},class:"v-select-custom",placeholder:"Please Select"},null,8,["modelValue","options","reduce"]),(0,r.Wm)(l.Z,{error:(0,r.SU)(x).errors.test_type_id},null,8,["error"])]),(0,r._)("div",p,[_,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":s[1]||(s[1]=function(e){return(0,r.SU)(x).test_name=e}),type:"text",class:"form-control form-control-sm",placeholder:"Type Name"},null,512),[[r.nr,(0,r.SU)(x).test_name]]),(0,r.Wm)(l.Z,{error:(0,r.SU)(x).errors.test_name},null,8,["error"])])]),(0,r._)("div",f,[(0,r._)("div",b,[v,(0,r._)("div",k,[((0,r.wg)(),(0,r.iD)(r.HY,null,(0,r.Ko)([{id:1,name:"Active"},{id:0,name:"Inactive"}],(function(e){return(0,r._)("div",{key:e.id,class:"form-check form-check-custom form-check-sm me-10"},[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":function(e){return(0,r.SU)(x).status=e},value:e.id,class:"form-check-input",name:"status",type:"radio",id:"status_".concat(e.id)},null,8,y),[[r.G2,(0,r.SU)(x).status]]),(0,r._)("label",{class:"form-check-label",for:"status_".concat(e.id)},(0,r.zw)(e.name),9,U)])})),64))]),(0,r.Wm)(l.Z,{error:(0,r.SU)(x).errors.status},null,8,["error"])])])]),(0,r._)("div",S,[(0,r._)("button",{type:"submit",ref:"submitButton",class:"btn btn-success me-2",disabled:(0,r.SU)(x).processing,"data-kt-indicator":(0,r.SU)(x).processing?"on":"off"},h,8,g),(0,r.Wm)(W,{href:t.route("tests.index"),class:"btn btn-secondary"},{default:(0,r.w5)((function(){return[(0,r.Uk)("Cancel")]})),_:1},8,["href"])])],32)])])])],64)}}})}}]);