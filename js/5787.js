"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5787],{8706:(e,l,r)=>{r.d(l,{Z:()=>o});var a=r(821),s={key:0,class:"fv-plugins-message-container"},t={class:"fv-help-block"};const o=(0,a.aZ)({__name:"ServerErrorMessage",props:{error:String},setup:function(e){return function(l,r){return e.error?((0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("div",t,[(0,a._)("span",null,(0,a.zw)(e.error),1)])])):(0,a.kq)("",!0)}}})},5787:(e,l,r)=>{r.r(l),r.d(l,{default:()=>V});var a=r(821),s=r(8706),t=r(8748),o={class:"d-flex flex-column-fluid"},n={id:"kt_content_container",class:"container-fluid"},i={class:"card card-custom"},c={class:"card-body"},d={class:"row mb-10"},u={class:"col-lg-6"},p=(0,a._)("label",{class:"required form-label"},"Hospital Name",-1),m={class:"col-lg-6"},f=(0,a._)("label",{class:"required form-label"},"Speciality",-1),_={class:"row mb-10"},b={class:"col-lg-6"},v=(0,a._)("label",{class:"required form-label"},"Address",-1),h={class:"col-lg-6"},U=(0,a._)("label",{class:"required form-label"},"Contact",-1),S={class:"row"},k={class:"col-lg-6"},y=(0,a._)("label",{class:"required form-label"},"Status",-1),g={class:"d-flex"},w=["onUpdate:modelValue","value","id"],x=["for"],W={class:"card-footer"},Z=["disabled","data-kt-indicator"],q=[(0,a._)("span",{class:"indicator-label"}," Update ",-1),(0,a._)("span",{class:"indicator-progress"},[(0,a.Uk)(" Please wait... "),(0,a._)("span",{class:"spinner-border spinner-border-sm align-middle ms-2"})],-1)];const V=(0,a.aZ)({__name:"Edit",props:{hospital:{type:Object,required:!0}},setup:function(e){var l,r,V,C,H,L=e,A=(0,t.cI)({hospital_name:null===(l=L.hospital)||void 0===l?void 0:l.hospital_name,speciality:null===(r=L.hospital)||void 0===r?void 0:r.speciality,address:null===(V=L.hospital)||void 0===V?void 0:V.address,contact:null===(C=L.hospital)||void 0===C?void 0:C.contact,status:null===(H=L.hospital)||void 0===H?void 0:H.status});return function(l,r){var t=(0,a.up)("Head"),V=(0,a.up)("Toolbar"),C=(0,a.up)("Link");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(t,{title:"Update Lab"}),(0,a.Wm)(V,{title:"Update Lab",buttons:[{label:"Back",link:l.route("hospitals.index")}],breadcrumbs:[{label:"System Settings",link:"#"},{label:"Labs",link:l.route("hospitals.index")},{label:"Update",link:null}]},null,8,["buttons","breadcrumbs"]),(0,a._)("div",o,[(0,a._)("div",n,[(0,a._)("div",i,[(0,a._)("form",{onSubmit:r[4]||(r[4]=(0,a.iM)((function(r){var s;return(0,a.SU)(A).put(l.route("hospitals.update",null===(s=e.hospital)||void 0===s?void 0:s.id))}),["prevent"]))},[(0,a._)("div",c,[(0,a._)("div",d,[(0,a._)("div",u,[p,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":r[0]||(r[0]=function(e){return(0,a.SU)(A).hospital_name=e}),type:"text",class:"form-control form-control-sm",placeholder:"Hospital Name"},null,512),[[a.nr,(0,a.SU)(A).hospital_name]]),(0,a.Wm)(s.Z,{error:(0,a.SU)(A).errors.hospital_name},null,8,["error"])]),(0,a._)("div",m,[f,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":r[1]||(r[1]=function(e){return(0,a.SU)(A).speciality=e}),type:"text",class:"form-control form-control-sm",placeholder:"Speciality"},null,512),[[a.nr,(0,a.SU)(A).speciality]]),(0,a.Wm)(s.Z,{error:(0,a.SU)(A).errors.speciality},null,8,["error"])])]),(0,a._)("div",_,[(0,a._)("div",b,[v,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":r[2]||(r[2]=function(e){return(0,a.SU)(A).address=e}),type:"text",class:"form-control form-control-sm",placeholder:"Address"},null,512),[[a.nr,(0,a.SU)(A).address]]),(0,a.Wm)(s.Z,{error:(0,a.SU)(A).errors.address},null,8,["error"])]),(0,a._)("div",h,[U,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":r[3]||(r[3]=function(e){return(0,a.SU)(A).contact=e}),type:"text",class:"form-control form-control-sm",placeholder:"Contract"},null,512),[[a.nr,(0,a.SU)(A).contact]]),(0,a.Wm)(s.Z,{error:(0,a.SU)(A).errors.contact},null,8,["error"])])]),(0,a._)("div",S,[(0,a._)("div",k,[y,(0,a._)("div",g,[((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)([{id:1,name:"Active"},{id:0,name:"Inactive"}],(function(e){return(0,a._)("div",{key:e.id,class:"form-check form-check-custom form-check-sm me-10"},[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":function(e){return(0,a.SU)(A).status=e},value:e.id,class:"form-check-input",name:"status",type:"radio",id:"status_".concat(e.id)},null,8,w),[[a.G2,(0,a.SU)(A).status]]),(0,a._)("label",{class:"form-check-label",for:"status_".concat(e.id)},(0,a.zw)(e.name),9,x)])})),64))]),(0,a.Wm)(s.Z,{error:(0,a.SU)(A).errors.status},null,8,["error"])])])]),(0,a._)("div",W,[(0,a._)("button",{type:"submit",ref:"submitButton",class:"btn btn-success me-2",disabled:(0,a.SU)(A).processing,"data-kt-indicator":(0,a.SU)(A).processing?"on":"off"},q,8,Z),(0,a.Wm)(C,{href:l.route("hospitals.index"),class:"btn btn-secondary"},{default:(0,a.w5)((function(){return[(0,a.Uk)("Cancel")]})),_:1},8,["href"])])],32)])])])],64)}}})}}]);