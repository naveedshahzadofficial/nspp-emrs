"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9182],{8706:(e,s,r)=>{r.d(s,{Z:()=>n});var a=r(821),l={key:0,class:"fv-plugins-message-container"},t={class:"fv-help-block"};const n=(0,a.aZ)({__name:"ServerErrorMessage",props:{error:String},setup:function(e){return function(s,r){return e.error?((0,a.wg)(),(0,a.iD)("div",l,[(0,a._)("div",t,[(0,a._)("span",null,(0,a.zw)(e.error),1)])])):(0,a.kq)("",!0)}}})},9182:(e,s,r)=>{r.r(s),r.d(s,{default:()=>x});var a=r(821),l=r(8748),t=r(8706),n={class:"d-flex flex-column-fluid"},i={id:"kt_content_container",class:"container-fluid"},o={class:"card card-custom"},d={class:"card-body"},c={class:"row mb-10"},u={class:"col-lg-6"},m=(0,a._)("label",{class:"form-label required"},"Disease Type",-1),p={class:"col-lg-6"},_=(0,a._)("label",{class:"required form-label"},"Disease Name",-1),f={class:"row"},b={class:"col-lg-6"},v=(0,a._)("label",{class:"form-label"},"Description",-1),k={class:"col-lg-6"},S=(0,a._)("label",{class:"required form-label"},"Status",-1),U={class:"d-flex"},y=["onUpdate:modelValue","value","id"],g=["for"],w={class:"card-footer"},h=["disabled","data-kt-indicator"],D=[(0,a._)("span",{class:"indicator-label"}," Submit ",-1),(0,a._)("span",{class:"indicator-progress"},[(0,a.Uk)(" Please wait... "),(0,a._)("span",{class:"spinner-border spinner-border-sm align-middle ms-2"})],-1)];const x=(0,a.aZ)({__name:"Create",props:{diseaseTypes:{type:Array,required:!0}},setup:function(e){var s=(0,l.cI)({disease_type_id:"",disease_name:"",disease_description:"",status:""});return function(r,l){var x=(0,a.up)("Head"),W=(0,a.up)("Toolbar"),V=(0,a.up)("v-select"),Z=(0,a.up)("Link");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(x,{title:"Add Disease"}),(0,a.Wm)(W,{title:"Add Disease",buttons:[{label:"Back",link:r.route("diseases.index")}],breadcrumbs:[{label:"System Settings",link:"#"},{label:"Diseases",link:r.route("diseases.index")},{label:"Add",link:null}]},null,8,["buttons","breadcrumbs"]),(0,a._)("div",n,[(0,a._)("div",i,[(0,a._)("div",o,[(0,a._)("form",{onSubmit:l[3]||(l[3]=(0,a.iM)((function(e){return(0,a.SU)(s).post(r.route("diseases.store"))}),["prevent"]))},[(0,a._)("div",d,[(0,a._)("div",c,[(0,a._)("div",u,[m,(0,a.Wm)(V,{modelValue:(0,a.SU)(s).disease_type_id,"onUpdate:modelValue":l[0]||(l[0]=function(e){return(0,a.SU)(s).disease_type_id=e}),options:e.diseaseTypes,reduce:function(e){return e.id},label:"type_name",class:"v-select-custom",placeholder:"Please Select"},null,8,["modelValue","options","reduce"]),(0,a.Wm)(t.Z,{error:(0,a.SU)(s).errors.disease_type_id},null,8,["error"])]),(0,a._)("div",p,[_,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":l[1]||(l[1]=function(e){return(0,a.SU)(s).disease_name=e}),type:"text",class:"form-control form-control-sm",placeholder:"Disease Name"},null,512),[[a.nr,(0,a.SU)(s).disease_name]]),(0,a.Wm)(t.Z,{error:(0,a.SU)(s).errors.disease_name},null,8,["error"])])]),(0,a._)("div",f,[(0,a._)("div",b,[v,(0,a.wy)((0,a._)("textarea",{"onUpdate:modelValue":l[2]||(l[2]=function(e){return(0,a.SU)(s).disease_description=e}),class:"form-control form-control-sm",rows:"4"},null,512),[[a.nr,(0,a.SU)(s).disease_description]]),(0,a.Wm)(t.Z,{error:(0,a.SU)(s).errors.disease_description},null,8,["error"])]),(0,a._)("div",k,[S,(0,a._)("div",U,[((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)([{id:1,name:"Active"},{id:0,name:"Inactive"}],(function(e){return(0,a._)("div",{key:e.id,class:"form-check form-check-custom form-check-sm me-10"},[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":function(e){return(0,a.SU)(s).status=e},value:e.id,class:"form-check-input",name:"status",type:"radio",id:"status_".concat(e.id)},null,8,y),[[a.G2,(0,a.SU)(s).status]]),(0,a._)("label",{class:"form-check-label",for:"status_".concat(e.id)},(0,a.zw)(e.name),9,g)])})),64))]),(0,a.Wm)(t.Z,{error:(0,a.SU)(s).errors.status},null,8,["error"])])])]),(0,a._)("div",w,[(0,a._)("button",{type:"submit",ref:"submitButton",class:"btn btn-success me-2",disabled:(0,a.SU)(s).processing,"data-kt-indicator":(0,a.SU)(s).processing?"on":"off"},D,8,h),(0,a.Wm)(Z,{href:r.route("diseases.index"),class:"btn btn-secondary"},{default:(0,a.w5)((function(){return[(0,a.Uk)("Cancel")]})),_:1},8,["href"])])],32)])])])],64)}}})}}]);