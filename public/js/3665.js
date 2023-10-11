"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3665],{8706:(e,r,l)=>{l.d(r,{Z:()=>n});var s=l(821),o={key:0,class:"fv-plugins-message-container"},a={class:"fv-help-block"};const n=(0,s.aZ)({__name:"ServerErrorMessage",props:{error:String},setup:function(e){return function(r,l){return e.error?((0,s.wg)(),(0,s.iD)("div",o,[(0,s._)("div",a,[(0,s._)("span",null,(0,s.zw)(e.error),1)])])):(0,s.kq)("",!0)}}})},3665:(e,r,l)=>{l.r(r),l.d(r,{default:()=>N});var s=l(821),o=l(8748),a=l(8706),n={class:"d-flex flex-column-fluid"},t={id:"kt_content_container",class:"container-fluid"},i={class:"card card-custom"},c={class:"card-body"},u={class:"row mb-10"},d={class:"col-lg-6"},m=(0,s._)("label",{class:"required form-label"},"Name",-1),p={class:"col-lg-6"},f=(0,s._)("label",{class:"required form-label"},"Username",-1),_={class:"row mb-10"},b={class:"col-lg-6"},U=(0,s._)("label",{class:"required form-label"},"Email",-1),v={class:"col-lg-6"},S=(0,s._)("label",{class:"required form-label"},"Status",-1),w={class:"d-flex"},k=["onUpdate:modelValue","value","id"],g=["for"],y={class:"row mb-10"},h={class:"col-lg-6"},V=(0,s._)("label",{class:"required form-label"},"Password",-1),W={class:"col-lg-6"},Z=(0,s._)("label",{class:"required form-label"},"Confirm Password",-1),P={class:"row mb-10"},x={class:"col-lg-12"},q=(0,s._)("label",{class:"form-label"},"Institute",-1),A={class:"row mb-10"},C={class:"col-lg-12"},D=(0,s._)("label",{class:"form-label"},"Roles",-1),E={class:"row mb-10"},H={class:"col-lg-12"},I=(0,s._)("label",{class:"form-label"},"Permissions",-1),z={class:"card-footer"},B=["disabled","data-kt-indicator"],M=[(0,s._)("span",{class:"indicator-label"}," Submit ",-1),(0,s._)("span",{class:"indicator-progress"},[(0,s.Uk)(" Please wait... "),(0,s._)("span",{class:"spinner-border spinner-border-sm align-middle ms-2"})],-1)];const N=(0,s.aZ)({__name:"Create",props:{institutes:Array,roles:Array,permissions:Array},setup:function(e){var r=(0,o.cI)({name:"",username:"",email:"",password:"",password_confirmation:"",status:"",institute_id:"",roles:[],permissions:[]});return function(l,o){var N=(0,s.up)("Head"),Y=(0,s.up)("Toolbar"),F=(0,s.up)("v-select"),G=(0,s.up)("Link");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(N,{title:"Add User"}),(0,s.Wm)(Y,{title:"Add User",buttons:[{label:"Back",link:l.route("users.index")}],breadcrumbs:[{label:"System Settings",link:"#"},{label:"Users",link:l.route("users.index")},{label:"Add",link:null}]},null,8,["buttons","breadcrumbs"]),(0,s._)("div",n,[(0,s._)("div",t,[(0,s._)("div",i,[(0,s._)("form",{onSubmit:o[8]||(o[8]=(0,s.iM)((function(e){return(0,s.SU)(r).post(l.route("users.store"))}),["prevent"]))},[(0,s._)("div",c,[(0,s._)("div",u,[(0,s._)("div",d,[m,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":o[0]||(o[0]=function(e){return(0,s.SU)(r).name=e}),type:"text",class:"form-control form-control-sm",placeholder:"Full Name"},null,512),[[s.nr,(0,s.SU)(r).name]]),(0,s.Wm)(a.Z,{error:(0,s.SU)(r).errors.name},null,8,["error"])]),(0,s._)("div",p,[f,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":o[1]||(o[1]=function(e){return(0,s.SU)(r).username=e}),type:"text",class:"form-control form-control-sm",placeholder:"Username"},null,512),[[s.nr,(0,s.SU)(r).username]]),(0,s.Wm)(a.Z,{error:(0,s.SU)(r).errors.username},null,8,["error"])])]),(0,s._)("div",_,[(0,s._)("div",b,[U,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":o[2]||(o[2]=function(e){return(0,s.SU)(r).email=e}),type:"email",class:"form-control form-control-sm",placeholder:"Email"},null,512),[[s.nr,(0,s.SU)(r).email]]),(0,s.Wm)(a.Z,{error:(0,s.SU)(r).errors.email},null,8,["error"])]),(0,s._)("div",v,[S,(0,s._)("div",w,[((0,s.wg)(),(0,s.iD)(s.HY,null,(0,s.Ko)([{id:1,name:"Active"},{id:0,name:"Inactive"}],(function(e){return(0,s._)("div",{key:e.id,class:"form-check form-check-custom form-check-sm me-10"},[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":function(e){return(0,s.SU)(r).status=e},value:e.id,class:"form-check-input",name:"status",type:"radio",id:"status_".concat(e.id)},null,8,k),[[s.G2,(0,s.SU)(r).status]]),(0,s._)("label",{class:"form-check-label",for:"status_".concat(e.id)},(0,s.zw)(e.name),9,g)])})),64))]),(0,s.Wm)(a.Z,{error:(0,s.SU)(r).errors.status},null,8,["error"])])]),(0,s._)("div",y,[(0,s._)("div",h,[V,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":o[3]||(o[3]=function(e){return(0,s.SU)(r).password=e}),type:"password",class:"form-control form-control-sm",placeholder:"Password"},null,512),[[s.nr,(0,s.SU)(r).password]]),(0,s.Wm)(a.Z,{error:(0,s.SU)(r).errors.password},null,8,["error"])]),(0,s._)("div",W,[Z,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":o[4]||(o[4]=function(e){return(0,s.SU)(r).password_confirmation=e}),type:"password",class:"form-control form-control-sm",placeholder:"Confirm Password"},null,512),[[s.nr,(0,s.SU)(r).password_confirmation]]),(0,s.Wm)(a.Z,{error:(0,s.SU)(r).errors.password_confirmation},null,8,["error"])])]),(0,s._)("div",P,[(0,s._)("div",x,[q,(0,s.Wm)(F,{modelValue:(0,s.SU)(r).institute_id,"onUpdate:modelValue":o[5]||(o[5]=function(e){return(0,s.SU)(r).institute_id=e}),options:e.institutes,reduce:function(e){return e.id},label:"name",class:"v-select-custom",placeholder:"Please Select"},null,8,["modelValue","options","reduce"]),(0,s.Wm)(a.Z,{error:(0,s.SU)(r).errors.institute_id},null,8,["error"])])]),(0,s._)("div",A,[(0,s._)("div",C,[D,(0,s.Wm)(F,{modelValue:(0,s.SU)(r).roles,"onUpdate:modelValue":o[6]||(o[6]=function(e){return(0,s.SU)(r).roles=e}),options:e.roles,multiple:"",label:"name",class:"v-select-custom",placeholder:"Please Select"},null,8,["modelValue","options"]),(0,s.Wm)(a.Z,{error:(0,s.SU)(r).errors.roles},null,8,["error"])])]),(0,s._)("div",E,[(0,s._)("div",H,[I,(0,s.Wm)(F,{modelValue:(0,s.SU)(r).permissions,"onUpdate:modelValue":o[7]||(o[7]=function(e){return(0,s.SU)(r).permissions=e}),options:e.permissions,multiple:"",label:"name",class:"v-select-custom",placeholder:"Please Select"},null,8,["modelValue","options"]),(0,s.Wm)(a.Z,{error:(0,s.SU)(r).errors.permissions},null,8,["error"])])])]),(0,s._)("div",z,[(0,s._)("button",{type:"submit",ref:"submitButton",class:"btn btn-success me-2",disabled:(0,s.SU)(r).processing,"data-kt-indicator":(0,s.SU)(r).processing?"on":"off"},M,8,B),(0,s.Wm)(G,{href:l.route("users.index"),class:"btn btn-secondary"},{default:(0,s.w5)((function(){return[(0,s.Uk)("Cancel")]})),_:1},8,["href"])])],32)])])])],64)}}})}}]);