"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9056],{9056:(s,l,e)=>{e.r(l),e.d(l,{default:()=>h});var a=e(821),i={class:"d-flex flex-column-fluid"},o={id:"kt_content_container",class:"container-fluid"},c={class:"card card-custom"},d={class:"card-body"},n={class:"row mb-10"},r={class:"col-lg-6"},t=(0,a._)("label",{class:"form-label fw-semibold"},"Disease Type",-1),b={class:"form-control form-control-solid"},m={class:"col-lg-6"},u=(0,a._)("label",{class:"form-label fw-semibold"},"Disease Name",-1),_={class:"form-control form-control-solid"},f={class:"row mb-10"},p={class:"col-lg-6"},v=(0,a._)("label",{class:"form-label fw-semibold"},"Status",-1),w={class:"form-control form-control-solid"},k={class:"row mb-10"},D={class:"col-lg-12"},g=(0,a._)("label",{class:"form-label fw-semibold"},"Description",-1),y={class:"form-control form-control-solid"};const h=(0,a.aZ)({__name:"Show",props:{disease:{type:Object,required:!0}},setup:function(s){return function(l,e){var h,x,z=(0,a.up)("Head"),S=(0,a.up)("Toolbar");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(z,{title:"View Disease"}),(0,a.Wm)(S,{title:"View Disease",buttons:[{label:"Back",link:l.route("diseases.index")}],breadcrumbs:[{label:"System Settings",link:"#"},{label:"Diseases",link:l.route("diseases.index")},{label:"View",link:null}]},null,8,["buttons","breadcrumbs"]),(0,a._)("div",i,[(0,a._)("div",o,[(0,a._)("div",c,[(0,a._)("div",d,[(0,a._)("div",n,[(0,a._)("div",r,[t,(0,a._)("span",b,(0,a.zw)(null===(h=s.disease)||void 0===h||null===(x=h.disease_type)||void 0===x?void 0:x.type_name),1)]),(0,a._)("div",m,[u,(0,a._)("span",_,(0,a.zw)(s.disease.disease_name),1)])]),(0,a._)("div",f,[(0,a._)("div",p,[v,(0,a._)("span",w,(0,a.zw)(s.disease.status?"Active":"Inactive"),1)])]),(0,a._)("div",k,[(0,a._)("div",D,[g,(0,a._)("span",y,(0,a.zw)(s.disease.disease_description),1)])])])])])])],64)}}})}}]);