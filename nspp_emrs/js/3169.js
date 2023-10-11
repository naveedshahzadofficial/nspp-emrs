"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3169],{8706:(e,r,t)=>{t.d(r,{Z:()=>a});var l=t(821),n={key:0,class:"fv-plugins-message-container"},s={class:"fv-help-block"};const a=(0,l.aZ)({__name:"ServerErrorMessage",props:{error:String},setup:function(e){return function(r,t){return e.error?((0,l.wg)(),(0,l.iD)("div",n,[(0,l._)("div",s,[(0,l._)("span",null,(0,l.zw)(e.error),1)])])):(0,l.kq)("",!0)}}})},3169:(e,r,t)=>{t.r(r),t.d(r,{default:()=>H});var l=t(821),n=t(8706),s=t(8748),a={class:"d-flex flex-column-fluid"},o={id:"kt_content_container",class:"container-fluid"},i={class:"card card-custom"},d={class:"card-body"},u={class:"row mb-10"},c={class:"col-lg-6"},m=(0,l._)("label",{class:"form-label"},"Head",-1),_={class:"col-lg-6"},f=(0,l._)("label",{class:"form-label"},"Head of Wing",-1),p={class:"row mb-10"},b={class:"col-lg-6"},v=(0,l._)("label",{class:"required form-label"},"Institute Name",-1),h={class:"col-lg-6"},U=(0,l._)("label",{class:"required form-label"},"Short Name",-1),S={class:"row mb-10"},g={class:"col-lg-6"},k=(0,l._)("label",{class:"required form-label"},"Order",-1),w={class:"col-lg-6"},y=(0,l._)("label",{class:"required form-label"},"Status",-1),W={class:"d-flex"},V=["onUpdate:modelValue","value","id"],x=["for"],I={class:"card-footer"},Z=["disabled","data-kt-indicator"],q=[(0,l._)("span",{class:"indicator-label"}," Update ",-1),(0,l._)("span",{class:"indicator-progress"},[(0,l.Uk)(" Please wait... "),(0,l._)("span",{class:"spinner-border spinner-border-sm align-middle ms-2"})],-1)];const H=(0,l.aZ)({__name:"Edit",props:{heads:Array,headOfWings:Array,institute:{type:Object,required:!0}},setup:function(e){var r,t,H,O,N,A,C=e,D=(0,s.cI)({head_id:null===(r=C.institute)||void 0===r?void 0:r.head_id,head_of_wing_id:null===(t=C.institute)||void 0===t?void 0:t.head_of_wing_id,name:null===(H=C.institute)||void 0===H?void 0:H.name,short_name:null===(O=C.institute)||void 0===O?void 0:O.short_name,order:null===(N=C.institute)||void 0===N?void 0:N.order,status:null===(A=C.institute)||void 0===A?void 0:A.status});return function(r,t){var s=(0,l.up)("Head"),H=(0,l.up)("Toolbar"),O=(0,l.up)("v-select"),N=(0,l.up)("Link");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(s,{title:"Update Institute"}),(0,l.Wm)(H,{title:"Update Institute",buttons:[{label:"Back",link:r.route("institutes.index")}],breadcrumbs:[{label:"System Settings",link:"#"},{label:"Institutes",link:r.route("institutes.index")},{label:"Update",link:null}]},null,8,["buttons","breadcrumbs"]),(0,l._)("div",a,[(0,l._)("div",o,[(0,l._)("div",i,[(0,l._)("form",{onSubmit:t[5]||(t[5]=(0,l.iM)((function(t){var n;return(0,l.SU)(D).put(r.route("institutes.update",null===(n=e.institute)||void 0===n?void 0:n.id))}),["prevent"]))},[(0,l._)("div",d,[(0,l._)("div",u,[(0,l._)("div",c,[m,(0,l.Wm)(O,{modelValue:(0,l.SU)(D).head_id,"onUpdate:modelValue":t[0]||(t[0]=function(e){return(0,l.SU)(D).head_id=e}),options:e.heads,reduce:function(e){return e.id},label:"name",class:"v-select-custom",placeholder:"Please Select"},null,8,["modelValue","options","reduce"]),(0,l.Wm)(n.Z,{error:(0,l.SU)(D).errors.head_id},null,8,["error"])]),(0,l._)("div",_,[f,(0,l.Wm)(O,{modelValue:(0,l.SU)(D).head_of_wing_id,"onUpdate:modelValue":t[1]||(t[1]=function(e){return(0,l.SU)(D).head_of_wing_id=e}),options:e.headOfWings,reduce:function(e){return e.id},label:"name",class:"v-select-custom",placeholder:"Please Select"},null,8,["modelValue","options","reduce"]),(0,l.Wm)(n.Z,{error:(0,l.SU)(D).errors.head_of_wing_id},null,8,["error"])])]),(0,l._)("div",p,[(0,l._)("div",b,[v,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return(0,l.SU)(D).name=e}),type:"text",class:"form-control form-control-sm",placeholder:"Institute Name"},null,512),[[l.nr,(0,l.SU)(D).name]]),(0,l.Wm)(n.Z,{error:(0,l.SU)(D).errors.name},null,8,["error"])]),(0,l._)("div",h,[U,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return(0,l.SU)(D).short_name=e}),type:"text",class:"form-control form-control-sm",placeholder:"Institute Short Name"},null,512),[[l.nr,(0,l.SU)(D).short_name]]),(0,l.Wm)(n.Z,{error:(0,l.SU)(D).errors.short_name},null,8,["error"])])]),(0,l._)("div",S,[(0,l._)("div",g,[k,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return(0,l.SU)(D).order=e}),type:"text",class:"form-control form-control-sm",placeholder:"Institute Order"},null,512),[[l.nr,(0,l.SU)(D).order]]),(0,l.Wm)(n.Z,{error:(0,l.SU)(D).errors.order},null,8,["error"])]),(0,l._)("div",w,[y,(0,l._)("div",W,[((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)([{id:1,name:"Active"},{id:0,name:"Inactive"}],(function(e){return(0,l._)("div",{key:e.id,class:"form-check form-check-custom form-check-sm me-10"},[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":function(e){return(0,l.SU)(D).status=e},value:e.id,class:"form-check-input",name:"status",type:"radio",id:"status_".concat(e.id)},null,8,V),[[l.G2,(0,l.SU)(D).status]]),(0,l._)("label",{class:"form-check-label",for:"status_".concat(e.id)},(0,l.zw)(e.name),9,x)])})),64))]),(0,l.Wm)(n.Z,{error:(0,l.SU)(D).errors.status},null,8,["error"])])])]),(0,l._)("div",I,[(0,l._)("button",{type:"submit",ref:"submitButton",class:"btn btn-success me-2",disabled:(0,l.SU)(D).processing,"data-kt-indicator":(0,l.SU)(D).processing?"on":"off"},q,8,Z),(0,l.Wm)(N,{href:r.route("institutes.index"),class:"btn btn-secondary"},{default:(0,l.w5)((function(){return[(0,l.Uk)("Cancel")]})),_:1},8,["href"])])],32)])])])],64)}}})}}]);