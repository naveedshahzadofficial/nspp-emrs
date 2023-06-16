"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[887],{3887:(l,s,o)=>{o.r(s),o.d(s,{default:()=>B});var e=o(821),r={class:"d-flex flex-column-fluid"},a={id:"kt_content_container",class:"container-fluid"},n={class:"card card-custom"},i={class:"card-body"},c={class:"row"},t={class:"col-lg-6"},m=(0,e._)("label",{class:"form-label fw-semibold"},"Name",-1),d={class:"form-control form-control-solid"},u={class:"col-lg-6"},f=(0,e._)("label",{class:"form-label fw-semibold"},"Username",-1),b={class:"form-control form-control-solid"},w={class:"row mt-10"},v={class:"col-lg-6"},_=(0,e._)("label",{class:"form-label fw-semibold"},"Email",-1),p={class:"form-control form-control-solid"},g={class:"col-lg-6"},k=(0,e._)("label",{class:"form-label fw-semibold"},"Status",-1),y={class:"form-control form-control-solid"},h={class:"row mt-10"},z={class:"col-lg-12"},D=(0,e._)("label",{class:"form-label fw-semibold"},"Institute",-1),U={key:0,class:"form-control form-control-solid"},x={key:1,class:"form-control form-control-solid"},S={class:"row mt-10"},T={class:"col-lg-12"},j=(0,e._)("label",{class:"form-label fw-semibold"},"User Roles",-1),A={key:0,class:"form-control form-control-solid"},V={key:1,class:"form-control form-control-solid"},C={class:"row mt-10"},H={class:"col-lg-12"},I=(0,e._)("label",{class:"form-label fw-semibold"},"User Permissions",-1),W={key:0,class:"form-control form-control-solid"},q={key:1,class:"form-control form-control-solid"};const B=(0,e.aZ)({__name:"Show",props:{user:{type:Object,required:!0},roles:Array,permissions:Array},setup:function(l){return function(s,o){var B,E,N,O,P,R,Y=(0,e.up)("Head"),Z=(0,e.up)("Toolbar");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(Y,{title:"View User"}),(0,e.Wm)(Z,{title:"View User",buttons:[{label:"Back",link:s.route("users.index")}],breadcrumbs:[{label:"System Settings",link:"#"},{label:"Users",link:s.route("users.index")},{label:"View",link:null}]},null,8,["buttons","breadcrumbs"]),(0,e._)("div",r,[(0,e._)("div",a,[(0,e._)("div",n,[(0,e._)("div",i,[(0,e._)("div",c,[(0,e._)("div",t,[m,(0,e._)("span",d,(0,e.zw)(l.user.name),1)]),(0,e._)("div",u,[f,(0,e._)("span",b,(0,e.zw)(l.user.username),1)])]),(0,e._)("div",w,[(0,e._)("div",v,[_,(0,e._)("span",p,(0,e.zw)(l.user.email),1)]),(0,e._)("div",g,[k,(0,e._)("span",y,(0,e.zw)(l.user.status?"Active":"Inactive"),1)])]),(0,e._)("div",h,[(0,e._)("div",z,[D,null!==(B=l.user)&&void 0!==B&&null!==(E=B.institute)&&void 0!==E&&E.name?((0,e.wg)(),(0,e.iD)("span",U,(0,e.zw)(null===(N=l.user)||void 0===N||null===(O=N.institute)||void 0===O?void 0:O.name),1)):((0,e.wg)(),(0,e.iD)("span",x,"The "+(0,e.zw)(l.user.name)+" have not any institute",1))])]),(0,e._)("div",S,[(0,e._)("div",T,[j,l.user.roles.length>0?((0,e.wg)(),(0,e.iD)("span",A,(0,e.zw)(null===(P=l.user.roles)||void 0===P?void 0:P.map((function(l){return l.name})).join(", ")),1)):((0,e.wg)(),(0,e.iD)("span",V,"The "+(0,e.zw)(l.user.name)+" have not any role",1))])]),(0,e._)("div",C,[(0,e._)("div",H,[I,l.user.permissions.length>0?((0,e.wg)(),(0,e.iD)("span",W,(0,e.zw)(null===(R=l.user.permissions)||void 0===R?void 0:R.map((function(l){return l.name})).join(", ")),1)):((0,e.wg)(),(0,e.iD)("span",q,"The "+(0,e.zw)(l.user.name)+" have not any direct permission",1))])])])])])])],64)}}})}}]);