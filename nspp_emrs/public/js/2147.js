"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2147],{8706:(e,r,t)=>{t.d(r,{Z:()=>o});var l=t(821),n={key:0,class:"fv-plugins-message-container"},a={class:"fv-help-block"};const o=(0,l.aZ)({__name:"ServerErrorMessage",props:{error:String},setup:function(e){return function(r,t){return e.error?((0,l.wg)(),(0,l.iD)("div",n,[(0,l._)("div",a,[(0,l._)("span",null,(0,l.zw)(e.error),1)])])):(0,l.kq)("",!0)}}})},2147:(e,r,t)=>{t.r(r),t.d(r,{default:()=>B});var l=t(821),n=t(8748),a=t(8706);function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var l,n,a,o,c=[],i=!0,u=!1;try{if(a=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;i=!1}else for(;!(i=(l=a.call(t)).done)&&(c.push(l.value),c.length!==r);i=!0);}catch(e){u=!0,n=e}finally{try{if(!i&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(u)throw n}}return c}}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return c(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,l=new Array(r);t<r;t++)l[t]=e[t];return l}var i={class:"d-flex flex-column-fluid"},u={id:"kt_content_container",class:"container-fluid"},s={class:"card card-custom"},d={class:"card-body"},m={class:"row mb-10"},f={class:"col-lg-6"},p=(0,l._)("label",{class:"form-label required"},"Item Type",-1),_={class:"col-lg-6"},b=(0,l._)("label",{class:"form-label required"},"Medicine",-1),y={class:"row mb-10"},v={class:"col-lg-4"},S=(0,l._)("label",{class:"required form-label"},"Quantity",-1),U={class:"col-lg-4"},g=(0,l._)("label",{class:"form-label"},"Unit Rate",-1),k={class:"col-lg-4"},h=(0,l._)("label",{class:"form-label"},"Amount",-1),w={class:"row mb-10"},x={class:"col-lg-4"},V=(0,l._)("label",{class:"form-label"},"Manufacturing Date",-1),W={class:"col-lg-4"},q=(0,l._)("label",{class:"required form-label"},"Expiry Date",-1),Z={class:"col-lg-4"},A=(0,l._)("label",{class:"required form-label"},"Pack Size",-1),M={class:"row mb-10"},D={class:"col-lg-4"},z=(0,l._)("label",{class:"form-label"},"Manufacturer",-1),C={class:"col-lg-4"},I=(0,l._)("label",{class:"form-label"},"Supplier",-1),P={class:"col-lg-4"},j=(0,l._)("label",{class:"required form-label"},"Status",-1),O={class:"d-flex"},Y=["onUpdate:modelValue","value","id"],E=["for"],H={class:"card-footer"},F=["disabled","data-kt-indicator"],T=[(0,l._)("span",{class:"indicator-label"}," Submit ",-1),(0,l._)("span",{class:"indicator-progress"},[(0,l.Uk)(" Please wait... "),(0,l._)("span",{class:"spinner-border spinner-border-sm align-middle ms-2"})],-1)];const B=(0,l.aZ)({__name:"Create",props:{medicineCategories:{type:Object,required:!0},medicines:{type:Array,required:!0}},setup:function(e){var r=e,t=(0,n.cI)({medicine_category_id:"",medicine_id:"",qty:"",unit_rate:"",amount:"0.00",manufacturing_date:"",expiry_date:"",pack_size:1,manufacturer:"",supplier:"",status:1}),c=(0,l.iH)(),B=function(e){var r=e.getDate()<10?"0"+e.getDate():e.getDate(),t=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1,l=e.getFullYear();return"".concat(r,"-").concat(t,"-").concat(l)};return(0,l.YP)((function(){return t.medicine_category_id}),(function(e){var l;t.reset("medicine_id"),c.value=null===(l=r.medicines)||void 0===l?void 0:l.filter((function(r){return r.medicine_category_id===e}))})),(0,l.YP)((function(){return[t.qty,t.unit_rate]}),(function(e){var r=o(e,2),l=r[0],n=r[1];t.amount="0.00",l&&n&&(t.amount=(parseInt(l)*parseFloat(n)).toFixed(2))})),function(r,n){var o=(0,l.up)("Head"),Q=(0,l.up)("Toolbar"),R=(0,l.up)("v-select"),G=(0,l.up)("v-date-picker"),K=(0,l.up)("Link");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(o,{title:"Add Stock"}),(0,l.Wm)(Q,{title:"Add Stock",buttons:[{label:"Back",link:r.route("stocks.index")}],breadcrumbs:[{label:"Stocks",link:r.route("stocks.index")},{label:"Add",link:null}]},null,8,["buttons","breadcrumbs"]),(0,l._)("div",i,[(0,l._)("div",u,[(0,l._)("div",s,[(0,l._)("form",{onSubmit:n[10]||(n[10]=(0,l.iM)((function(e){return(0,l.SU)(t).post(r.route("stocks.store"))}),["prevent"]))},[(0,l._)("div",d,[(0,l._)("div",m,[(0,l._)("div",f,[p,(0,l.Wm)(R,{modelValue:(0,l.SU)(t).medicine_category_id,"onUpdate:modelValue":n[0]||(n[0]=function(e){return(0,l.SU)(t).medicine_category_id=e}),options:e.medicineCategories,label:"category_name",reduce:function(e){return e.id},class:"v-select-custom",placeholder:"Please Select"},null,8,["modelValue","options","reduce"]),(0,l.Wm)(a.Z,{error:(0,l.SU)(t).errors.medicine_category_id},null,8,["error"])]),(0,l._)("div",_,[b,(0,l.Wm)(R,{modelValue:(0,l.SU)(t).medicine_id,"onUpdate:modelValue":n[1]||(n[1]=function(e){return(0,l.SU)(t).medicine_id=e}),options:c.value,reduce:function(e){return e.id},label:"medicine_name",class:"v-select-custom",placeholder:"Please Select"},null,8,["modelValue","options","reduce"]),(0,l.Wm)(a.Z,{error:(0,l.SU)(t).errors.medicine_id},null,8,["error"])])]),(0,l._)("div",y,[(0,l._)("div",v,[S,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":n[2]||(n[2]=function(e){return(0,l.SU)(t).qty=e}),type:"text",class:"form-control form-control-sm",placeholder:"Quantity"},null,512),[[l.nr,(0,l.SU)(t).qty]]),(0,l.Wm)(a.Z,{error:(0,l.SU)(t).errors.qty},null,8,["error"])]),(0,l._)("div",U,[g,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":n[3]||(n[3]=function(e){return(0,l.SU)(t).unit_rate=e}),type:"text",class:"form-control form-control-sm",placeholder:"Unit Rate"},null,512),[[l.nr,(0,l.SU)(t).unit_rate]]),(0,l.Wm)(a.Z,{error:(0,l.SU)(t).errors.unit_rate},null,8,["error"])]),(0,l._)("div",k,[h,(0,l.wy)((0,l._)("input",{style:{"background-color":"#eef1f5"},"onUpdate:modelValue":n[4]||(n[4]=function(e){return(0,l.SU)(t).amount=e}),readonly:"",type:"text",class:"form-control form-control-sm",placeholder:"Amount"},null,512),[[l.nr,(0,l.SU)(t).amount]]),(0,l.Wm)(a.Z,{error:(0,l.SU)(t).errors.amount},null,8,["error"])])]),(0,l._)("div",w,[(0,l._)("div",x,[V,(0,l.Wm)(G,{modelValue:(0,l.SU)(t).manufacturing_date,"onUpdate:modelValue":n[5]||(n[5]=function(e){return(0,l.SU)(t).manufacturing_date=e}),"enable-time-picker":!1,clearable:!0,"auto-apply":"",format:B,"preview-format":B,placeholder:"Manufacturing Date"},null,8,["modelValue"]),(0,l.Wm)(a.Z,{error:(0,l.SU)(t).errors.manufacturing_date},null,8,["error"])]),(0,l._)("div",W,[q,(0,l.Wm)(G,{modelValue:(0,l.SU)(t).expiry_date,"onUpdate:modelValue":n[6]||(n[6]=function(e){return(0,l.SU)(t).expiry_date=e}),"enable-time-picker":!1,clearable:!0,"auto-apply":"",format:B,"preview-format":B,placeholder:"Expiry Date"},null,8,["modelValue"]),(0,l.Wm)(a.Z,{error:(0,l.SU)(t).errors.expiry_date},null,8,["error"])]),(0,l._)("div",Z,[A,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":n[7]||(n[7]=function(e){return(0,l.SU)(t).pack_size=e}),type:"text",class:"form-control form-control-sm",placeholder:"Pack Size"},null,512),[[l.nr,(0,l.SU)(t).pack_size]]),(0,l.Wm)(a.Z,{error:(0,l.SU)(t).errors.pack_size},null,8,["error"])])]),(0,l._)("div",M,[(0,l._)("div",D,[z,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":n[8]||(n[8]=function(e){return(0,l.SU)(t).manufacturer=e}),type:"text",class:"form-control form-control-sm",placeholder:"Manufacturer"},null,512),[[l.nr,(0,l.SU)(t).manufacturer]]),(0,l.Wm)(a.Z,{error:(0,l.SU)(t).errors.manufacturer},null,8,["error"])]),(0,l._)("div",C,[I,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":n[9]||(n[9]=function(e){return(0,l.SU)(t).supplier=e}),type:"text",class:"form-control form-control-sm",placeholder:"Supplier"},null,512),[[l.nr,(0,l.SU)(t).supplier]]),(0,l.Wm)(a.Z,{error:(0,l.SU)(t).errors.supplier},null,8,["error"])]),(0,l._)("div",P,[j,(0,l._)("div",O,[((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)([{id:1,name:"Active"},{id:0,name:"Inactive"}],(function(e){return(0,l._)("div",{key:e.id,class:"form-check form-check-custom form-check-sm me-10"},[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":function(e){return(0,l.SU)(t).status=e},value:e.id,class:"form-check-input",name:"status",type:"radio",id:"status_".concat(e.id)},null,8,Y),[[l.G2,(0,l.SU)(t).status]]),(0,l._)("label",{class:"form-check-label",for:"status_".concat(e.id)},(0,l.zw)(e.name),9,E)])})),64))]),(0,l.Wm)(a.Z,{error:(0,l.SU)(t).errors.status},null,8,["error"])])])]),(0,l._)("div",H,[(0,l._)("button",{type:"submit",ref:"submitButton",class:"btn btn-success me-2",disabled:(0,l.SU)(t).processing,"data-kt-indicator":(0,l.SU)(t).processing?"on":"off"},T,8,F),(0,l.Wm)(K,{href:r.route("stocks.index"),class:"btn btn-secondary"},{default:(0,l.w5)((function(){return[(0,l.Uk)("Cancel")]})),_:1},8,["href"])])],32)])])])],64)}}})}}]);