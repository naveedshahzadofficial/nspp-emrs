"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1729],{8706:(e,l,r)=>{r.d(l,{Z:()=>o});var i=r(821),n={key:0,class:"fv-plugins-message-container"},c={class:"fv-help-block"};const o=(0,i.aZ)({__name:"ServerErrorMessage",props:{error:String},setup:function(e){return function(l,r){return e.error?((0,i.wg)(),(0,i.iD)("div",n,[(0,i._)("div",c,[(0,i._)("span",null,(0,i.zw)(e.error),1)])])):(0,i.kq)("",!0)}}})},1729:(e,l,r)=>{r.r(l),r.d(l,{default:()=>$});var i=r(821),n=r(8748),c=r(8706),o={class:"d-flex flex-column-fluid"},s={id:"kt_content_container",class:"container-fluid"},t={class:"card card-custom"},a={class:"card-body"},d={class:"row mb-10"},u={class:"col-lg-6"},m=(0,i._)("label",{class:"required form-label"},"Medicine Category",-1),_={class:"col-lg-6"},f=(0,i._)("label",{class:"required form-label"},"Medicine Generic",-1),p={class:"row mb-10"},b={class:"col-lg-6"},v=(0,i._)("label",{class:"form-label"},"Medicine Type",-1),y={class:"col-lg-6"},k=(0,i._)("label",{class:"required form-label"},"Medicine Name",-1),U={class:"row mb-10"},g={class:"col-lg-6"},S=(0,i._)("label",{class:"form-label"},"Strength",-1),h={class:"col-lg-6"},w=(0,i._)("label",{class:"required form-label"},"Controlled",-1),q={class:"d-flex"},V=["value","id"],W=["for"],Z={class:"row mb-10"},x={class:"col-lg-6"},M=(0,i._)("label",{class:"required form-label"},"Multiply",-1),Y={class:"d-flex"},C=["value","id"],G=["for"],D={class:"col-lg-6"},H=(0,i._)("label",{class:"required form-label"},"Over Counter",-1),z={class:"d-flex"},N=["value","id"],K=["for"],A={class:"row"},O={class:"col-lg-6"},P=(0,i._)("label",{class:"required form-label"},"Frequently Used",-1),T={class:"d-flex"},j=["value","id"],B=["for"],I={class:"col-lg-6"},E=(0,i._)("label",{class:"required form-label"},"Status",-1),F={class:"d-flex"},L=["onUpdate:modelValue","value","id"],J=["for"],Q={class:"card-footer"},R=["disabled","data-kt-indicator"],X=[(0,i._)("span",{class:"indicator-label"}," Submit ",-1),(0,i._)("span",{class:"indicator-progress"},[(0,i.Uk)(" Please wait... "),(0,i._)("span",{class:"spinner-border spinner-border-sm align-middle ms-2"})],-1)];const $=(0,i.aZ)({__name:"Create",props:{medicineCategories:{type:Object,required:!0},medicineGenerics:{type:Object,required:!0},medicineTypes:{type:Object,required:!0}},setup:function(e){var l=(0,n.cI)({medicine_category_id:"",medicine_generic_id:"",medicine_type_id:"",medicine_name:"",strength:"",is_controlled:"",is_multiply:"",is_over_counter:"",is_frequently_used:"",status:""});return function(r,n){var $=(0,i.up)("Head"),ee=(0,i.up)("Toolbar"),le=(0,i.up)("v-select"),re=(0,i.up)("Link");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)($,{title:"Add Medicine"}),(0,i.Wm)(ee,{title:"Add Medicine",buttons:[{label:"Back",link:r.route("medicines.index")}],breadcrumbs:[{label:"System Settings",link:"#"},{label:"Medicines",link:r.route("medicines.index")},{label:"Add",link:null}]},null,8,["buttons","breadcrumbs"]),(0,i._)("div",o,[(0,i._)("div",s,[(0,i._)("div",t,[(0,i._)("form",{onSubmit:n[9]||(n[9]=(0,i.iM)((function(e){return(0,i.SU)(l).post(r.route("medicines.store"))}),["prevent"]))},[(0,i._)("div",a,[(0,i._)("div",d,[(0,i._)("div",u,[m,(0,i.Wm)(le,{modelValue:(0,i.SU)(l).medicine_category_id,"onUpdate:modelValue":n[0]||(n[0]=function(e){return(0,i.SU)(l).medicine_category_id=e}),options:e.medicineCategories,label:"category_name",reduce:function(e){return e.id},class:"v-select-custom",placeholder:"Please Select"},null,8,["modelValue","options","reduce"]),(0,i.Wm)(c.Z,{error:(0,i.SU)(l).errors.medicine_category_id},null,8,["error"])]),(0,i._)("div",_,[f,(0,i.Wm)(le,{modelValue:(0,i.SU)(l).medicine_generic_id,"onUpdate:modelValue":n[1]||(n[1]=function(e){return(0,i.SU)(l).medicine_generic_id=e}),options:e.medicineGenerics,label:"generic_name",reduce:function(e){return e.id},class:"v-select-custom",placeholder:"Please Select"},null,8,["modelValue","options","reduce"]),(0,i.Wm)(c.Z,{error:(0,i.SU)(l).errors.medicine_generic_id},null,8,["error"])])]),(0,i._)("div",p,[(0,i._)("div",b,[v,(0,i.Wm)(le,{modelValue:(0,i.SU)(l).medicine_type_id,"onUpdate:modelValue":n[2]||(n[2]=function(e){return(0,i.SU)(l).medicine_type_id=e}),options:e.medicineTypes,label:"type_name",reduce:function(e){return e.id},class:"v-select-custom",placeholder:"Please Select"},null,8,["modelValue","options","reduce"]),(0,i.Wm)(c.Z,{error:(0,i.SU)(l).errors.medicine_type_id},null,8,["error"])]),(0,i._)("div",y,[k,(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":n[3]||(n[3]=function(e){return(0,i.SU)(l).medicine_name=e}),type:"text",class:"form-control form-control-sm",placeholder:"Medicine Name"},null,512),[[i.nr,(0,i.SU)(l).medicine_name]]),(0,i.Wm)(c.Z,{error:(0,i.SU)(l).errors.medicine_name},null,8,["error"])])]),(0,i._)("div",U,[(0,i._)("div",g,[S,(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":n[4]||(n[4]=function(e){return(0,i.SU)(l).strength=e}),type:"text",class:"form-control form-control-sm",placeholder:"Strength"},null,512),[[i.nr,(0,i.SU)(l).strength]]),(0,i.Wm)(c.Z,{error:(0,i.SU)(l).errors.strength},null,8,["error"])]),(0,i._)("div",h,[w,(0,i._)("div",q,[((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)([{id:1,name:"Yes"},{id:0,name:"No"}],(function(e){return(0,i._)("div",{key:e.id,class:"form-check form-check-custom form-check-sm me-10"},[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":n[5]||(n[5]=function(e){return(0,i.SU)(l).is_controlled=e}),value:e.id,class:"form-check-input",name:"is_controlled",type:"radio",id:"controlled_".concat(e.id)},null,8,V),[[i.G2,(0,i.SU)(l).is_controlled]]),(0,i._)("label",{class:"form-check-label",for:"controlled_".concat(e.id)},(0,i.zw)(e.name),9,W)])})),64))]),(0,i.Wm)(c.Z,{error:(0,i.SU)(l).errors.is_controlled},null,8,["error"])])]),(0,i._)("div",Z,[(0,i._)("div",x,[M,(0,i._)("div",Y,[((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)([{id:1,name:"Yes"},{id:0,name:"No"}],(function(e){return(0,i._)("div",{key:e.id,class:"form-check form-check-custom form-check-sm me-10"},[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":n[6]||(n[6]=function(e){return(0,i.SU)(l).is_multiply=e}),value:e.id,class:"form-check-input",name:"is_multiply",type:"radio",id:"multiply_".concat(e.id)},null,8,C),[[i.G2,(0,i.SU)(l).is_multiply]]),(0,i._)("label",{class:"form-check-label",for:"multiply_".concat(e.id)},(0,i.zw)(e.name),9,G)])})),64))]),(0,i.Wm)(c.Z,{error:(0,i.SU)(l).errors.is_multiply},null,8,["error"])]),(0,i._)("div",D,[H,(0,i._)("div",z,[((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)([{id:1,name:"Yes"},{id:0,name:"No"}],(function(e){return(0,i._)("div",{key:e.id,class:"form-check form-check-custom form-check-sm me-10"},[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":n[7]||(n[7]=function(e){return(0,i.SU)(l).is_over_counter=e}),value:e.id,class:"form-check-input",name:"is_over_counter",type:"radio",id:"over_counter_".concat(e.id)},null,8,N),[[i.G2,(0,i.SU)(l).is_over_counter]]),(0,i._)("label",{class:"form-check-label",for:"over_counter_".concat(e.id)},(0,i.zw)(e.name),9,K)])})),64))]),(0,i.Wm)(c.Z,{error:(0,i.SU)(l).errors.is_over_counter},null,8,["error"])])]),(0,i._)("div",A,[(0,i._)("div",O,[P,(0,i._)("div",T,[((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)([{id:1,name:"Yes"},{id:0,name:"No"}],(function(e){return(0,i._)("div",{key:e.id,class:"form-check form-check-custom form-check-sm me-10"},[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":n[8]||(n[8]=function(e){return(0,i.SU)(l).is_frequently_used=e}),value:e.id,class:"form-check-input",name:"is_frequently_used",type:"radio",id:"frequently_used_".concat(e.id)},null,8,j),[[i.G2,(0,i.SU)(l).is_frequently_used]]),(0,i._)("label",{class:"form-check-label",for:"frequently_used_".concat(e.id)},(0,i.zw)(e.name),9,B)])})),64))]),(0,i.Wm)(c.Z,{error:(0,i.SU)(l).errors.is_frequently_used},null,8,["error"])]),(0,i._)("div",I,[E,(0,i._)("div",F,[((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)([{id:1,name:"Active"},{id:0,name:"Inactive"}],(function(e){return(0,i._)("div",{key:e.id,class:"form-check form-check-custom form-check-sm me-10"},[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":function(e){return(0,i.SU)(l).status=e},value:e.id,class:"form-check-input",name:"status",type:"radio",id:"status_".concat(e.id)},null,8,L),[[i.G2,(0,i.SU)(l).status]]),(0,i._)("label",{class:"form-check-label",for:"status_".concat(e.id)},(0,i.zw)(e.name),9,J)])})),64))]),(0,i.Wm)(c.Z,{error:(0,i.SU)(l).errors.status},null,8,["error"])])])]),(0,i._)("div",Q,[(0,i._)("button",{type:"submit",ref:"submitButton",class:"btn btn-success me-2",disabled:(0,i.SU)(l).processing,"data-kt-indicator":(0,i.SU)(l).processing?"on":"off"},X,8,R),(0,i.Wm)(re,{href:r.route("medicines.index"),class:"btn btn-secondary"},{default:(0,i.w5)((function(){return[(0,i.Uk)("Cancel")]})),_:1},8,["href"])])],32)])])])],64)}}})}}]);