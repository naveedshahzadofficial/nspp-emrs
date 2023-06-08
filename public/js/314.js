"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[314],{9314:(t,i,e)=>{e.r(i),e.d(i,{default:()=>A});var l=e(821),a={class:"d-flex flex-column-fluid"},s={id:"kt_content_container",class:"container-fluid"},n={class:"card card-custom"},r={class:"card-body"},o={class:"card bg-secondary"},d={class:"card-body"},c={class:"d-flex"},u={class:"d-flex align-items-center bg-white p-4"},p={class:"symbol symbol-125px me-5"},m=["src"],_={class:"d-flex justify-content-start flex-column"},b={href:"#",class:"text-dark fw-bolder text-hover-primary mb-1 fs-6"},g={href:"#",class:"text-muted text-hover-primary fw-bold text-muted d-block fs-7"},v=(0,l._)("span",{class:"text-dark"},"Designation",-1),f={href:"#",class:"text-muted text-hover-primary fw-bold text-muted d-block fs-7"},w=(0,l._)("span",{class:"text-dark"},"Age",-1),k={class:"flex-grow-1 align-items-center flex-column p-4"},x=(0,l._)("h3",null," Vitals  ",-1),h=(0,l._)("div",{class:"separator border-primary my-2"},null,-1),y={class:"list-group list-group-horizontal"},z={class:"list-group-item m-1"},V=(0,l._)("b",null,"Pulse: ",-1),U={class:"list-group-item m-1"},P=(0,l._)("b",null,"Temp: ",-1),D={class:"list-group-item m-1"},j=(0,l._)("b",null,"BP: ",-1),q={class:"list-group-item m-1"},C=(0,l._)("b",null,"Height (cm): ",-1),H={class:"list-group-item m-1"},W=(0,l._)("b",null,"Weight (kg): ",-1);const A=(0,l.aZ)({__name:"Show",props:{patient:{type:Object,required:!0},patientVisit:{type:Object,required:!0}},setup:function(t){return function(i,e){var A,B,O,T,R,S,Y=(0,l.up)("Head"),Z=(0,l.up)("Toolbar");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(Y,{title:"View Patient"}),(0,l.Wm)(Z,{title:"View Patient",buttons:[{label:"Back",link:i.route("registrations.index")}],breadcrumbs:[{label:"Registrations",link:i.route("registrations.index")},{label:"View",link:null}]},null,8,["buttons","breadcrumbs"]),(0,l._)("div",a,[(0,l._)("div",s,[(0,l._)("div",n,[(0,l._)("div",r,[(0,l._)("div",o,[(0,l._)("div",d,[(0,l._)("div",c,[(0,l._)("div",u,[(0,l._)("div",p,[t.patient.patient_image?((0,l.wg)(),(0,l.iD)("img",{key:0,alt:"Pic",src:t.patient.patient_image},null,8,m)):t.patient.patient_name?((0,l.wg)(),(0,l.iD)("span",{key:1,class:(0,l.C_)(["bg-light-primary text-primary","symbol-label fw-bolder fa-10x"])},(0,l.zw)(t.patient.patient_name.charAt(0)),1)):(0,l.kq)("",!0)]),(0,l._)("div",_,[(0,l._)("a",b,(0,l.zw)(t.patient.patient_name),1),(0,l._)("a",g,[v,(0,l.Uk)(": "+(0,l.zw)(t.patient.designation),1)]),(0,l._)("a",f,[w,(0,l.Uk)(": "+(0,l.zw)(t.patient.patient_age),1)])])]),(0,l._)("div",k,[x,h,(0,l._)("ul",y,[(0,l._)("li",z,[V,(0,l.Uk)((0,l.zw)(null===(A=t.patientVisit)||void 0===A?void 0:A.pulse),1)]),(0,l._)("li",U,[P,(0,l.Uk)((0,l.zw)(null===(B=t.patientVisit)||void 0===B?void 0:B.temperature),1)]),(0,l._)("li",D,[j,(0,l.Uk)((0,l.zw)(null===(O=t.patientVisit)||void 0===O?void 0:O.bp_systolic)+"/"+(0,l.zw)(null===(T=t.patientVisit)||void 0===T?void 0:T.bp_diastolic),1)]),(0,l._)("li",q,[C,(0,l.Uk)((0,l.zw)(null===(R=t.patientVisit)||void 0===R?void 0:R.height),1)]),(0,l._)("li",H,[W,(0,l.Uk)((0,l.zw)(null===(S=t.patientVisit)||void 0===S?void 0:S.weight),1)])])])])])])])])])])],64)}}})}}]);