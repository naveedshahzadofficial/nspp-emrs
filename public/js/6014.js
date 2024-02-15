"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6014],{6014:(e,l,i)=>{i.r(l),i.d(l,{default:()=>H});var n=i(821),t={class:"d-flex flex-column-fluid"},o={id:"kt_content_container",class:"container-fluid"},a={class:"card card-custom"},s={class:"card-body"},r={class:"row mb-10"},m={class:"col-lg-12"},d=(0,n._)("label",{class:"form-label fw-semibold"},"Patient",-1),u={class:"form-control form-control-solid"},c={key:0},p={key:1},b={class:"row mb-10"},v={class:"col-lg-6"},_=(0,n._)("label",{class:"form-label fw-semibold"},"Attachment",-1),f={class:"form-control form-control-solid"},w={key:0},k=["href"],y={class:"row mb-10"},g={class:"col-lg-6"},h=(0,n._)("label",{class:"form-label fw-semibold"},"Actual Amount",-1),z={class:"form-control form-control-solid"},A={class:"col-lg-6"},q=(0,n._)("label",{class:"form-label fw-semibold"},"Approved Amount by MO",-1),x={class:"form-control form-control-solid"},D={class:"row"},V={class:"col-lg-12"},C=(0,n._)("label",{class:"form-label fw-semibold"},"Comments",-1),R={class:"form-control form-control-solid"};const H=(0,n.aZ)({__name:"Show",props:{reimbursement:{type:Object,required:!0}},setup:function(e){return function(l,i){var H,I,O,W,j,B,F,M,P,S,T,U,Y,Z,E,G,J,K,L,N,Q,X,$,ee,le,ie,ne,te=(0,n.up)("Head"),oe=(0,n.up)("Toolbar");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(te,{title:"View Reimbursement"}),(0,n.Wm)(oe,{title:"View Reimbursement",buttons:[{label:"Back",link:l.route("reimbursements.index")}],breadcrumbs:[{label:"Reimbursements",link:l.route("reimbursements.index")},{label:"View",link:null}]},null,8,["buttons","breadcrumbs"]),(0,n._)("div",t,[(0,n._)("div",o,[(0,n._)("div",a,[(0,n._)("div",s,[(0,n._)("div",r,[(0,n._)("div",m,[d,(0,n._)("span",u,[(0,n.Uk)((0,n.zw)(null===(H=e.reimbursement)||void 0===H||null===(I=H.patient)||void 0===I?void 0:I.patient_name)+" --- "+(0,n.zw)(null===(O=e.reimbursement)||void 0===O||null===(W=O.patient)||void 0===W||null===(j=W.patient_type)||void 0===j?void 0:j.type_name)+" ",1),[1,3].includes(parseInt(null===(B=e.reimbursement)||void 0===B||null===(F=B.patient)||void 0===F?void 0:F.patient_type_id))&&null!==(M=e.reimbursement)&&void 0!==M&&null!==(P=M.patient)&&void 0!==P&&P.patient_employee?((0,n.wg)(),(0,n.iD)("span",c," --- ("+(0,n.zw)(null===(S=e.reimbursement)||void 0===S||null===(T=S.patient)||void 0===T||null===(U=T.patient_employee)||void 0===U?void 0:U.officer_name)+", "+(0,n.zw)(null===(Y=e.reimbursement)||void 0===Y||null===(Z=Y.patient)||void 0===Z||null===(E=Z.patient_employee)||void 0===E?void 0:E.designation)+")",1)):(0,n.kq)("",!0),2===parseInt(null===(G=e.reimbursement)||void 0===G||null===(J=G.patient)||void 0===J?void 0:J.patient_type_id)&&null!==(K=e.reimbursement)&&void 0!==K&&null!==(L=K.patient)&&void 0!==L&&L.patient_participant?((0,n.wg)(),(0,n.iD)("span",p," --- ("+(0,n.zw)(null===(N=e.reimbursement)||void 0===N||null===(Q=N.patient)||void 0===Q||null===(X=Q.patient_participant)||void 0===X?void 0:X.participant_name)+", "+(0,n.zw)(null===($=e.reimbursement)||void 0===$||null===(ee=$.patient)||void 0===ee||null===(le=ee.patient_participant)||void 0===le?void 0:le.participant_designation)+")",1)):(0,n.kq)("",!0)])])]),(0,n._)("div",b,[(0,n._)("div",v,[_,(0,n._)("span",f,[null!==(ie=e.reimbursement)&&void 0!==ie&&ie.attachment_file?((0,n.wg)(),(0,n.iD)("span",w,[(0,n._)("a",{href:null===(ne=e.reimbursement)||void 0===ne?void 0:ne.attachment_file,target:"_blank"},"View File",8,k)])):(0,n.kq)("",!0)])])]),(0,n._)("div",y,[(0,n._)("div",g,[h,(0,n._)("span",z,(0,n.zw)(e.reimbursement.actual_amount),1)]),(0,n._)("div",A,[q,(0,n._)("span",x,(0,n.zw)(e.reimbursement.approved_amount),1)])]),(0,n._)("div",D,[(0,n._)("div",V,[C,(0,n._)("span",R,(0,n.zw)(e.reimbursement.comments),1)])])])])])])],64)}}})}}]);