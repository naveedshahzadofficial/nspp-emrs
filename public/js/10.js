"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10],{7577:(e,t,n)=>{n.d(t,{M:()=>a});var s=n(8748),l=n(8542),i=n.n(l);function a(){return{filterData:function(e,t){t=Object.keys(t).reduce((function(e,n){var s=t[n];return""!==s&&null!=s&&(e[n]=s),e}),{}),s.Nd.get(route(e),t,{preserveScroll:!0,preserveState:!0,replace:!0})},destroy:function(e,t){i().fire({text:"Are you sure you want to delete this?",icon:"warning",showCancelButton:!0,confirmButtonText:"Delete",buttonsStyling:!1,customClass:{confirmButton:"btn fw-bold btn-danger",cancelButton:"btn fw-bold btn-secondary"}}).then((function(n){n.isConfirmed&&s.Nd.delete(route(e,t),{preserveScroll:!0})}))},toggleStatus:function(e,t){i().fire({text:"Are you sure?",icon:"warning",showCancelButton:!0,confirmButtonText:null!=t&&t.status?"Deactivate":"Activate",buttonsStyling:!1,customClass:{confirmButton:null!=t&&t.status?"btn fw-bold btn-danger":"btn fw-bold btn-success",cancelButton:"btn fw-bold btn-secondary"}}).then((function(n){n.isConfirmed&&s.Nd.delete(route(e,null==t?void 0:t.id),{preserveScroll:!0})}))},revoke:function(e,t,n){i().fire({text:"Are you sure you want to revoke this?",icon:"warning",showCancelButton:!0,confirmButtonText:"Revoke",buttonsStyling:!1,customClass:{confirmButton:"btn fw-bold btn-danger",cancelButton:"btn fw-bold btn-secondary"}}).then((function(l){l.isConfirmed&&s.Nd.delete(route(e,[t,n]),{preserveScroll:!0})}))}}}},5093:(e,t,n)=>{n.d(t,{Z:()=>o});var s=n(821),l={class:"d-flex flex-column"},i=["textContent"],a=["textContent"],r=(0,s._)("button",{type:"button",class:"position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto","data-bs-dismiss":"alert"},[(0,s._)("i",{class:"bi bi-x fs-1 text-black"})],-1);const o=(0,s.aZ)({__name:"AlertMessage",props:{title:{type:String,required:!0},message:{type:String,required:!0}},setup:function(e){var t=e,n=(0,s.iH)("");return(0,s.bv)((function(){switch(t.title){case"Success":n.value="/media/icons/duotune/general/gen048.svg";break;case"Error":n.value="/media/icons/duotune/general/gen050.svg";break;case"Warning":n.value="/media/icons/duotune/general/gen044.svg";break;case"Info":n.value="/media/icons/duotune/general/gen045.svg"}})),function(t,o){var u=(0,s.up)("inline-svg");return(0,s.wg)(),(0,s.iD)("div",{class:(0,s.C_)([{"alert-success":"Success"===e.title,"alert-danger":"Error"===e.title,"alert-warning":"Warning"===e.title,"alert-info":"Info"===e.title},"alert alert-success alert-dismissible d-flex align-items-center p-5"])},[(0,s._)("span",{class:(0,s.C_)(["svg-icon svg-icon-2hx me-4",{"svg-icon-success":"Success"===e.title,"svg-icon-danger":"Error"===e.title,"svg-icon-warning":"Warning"===e.title,"svg-icon-info":"Info"===e.title}])},[(0,s.Wm)(u,{src:n.value},null,8,["src"])],2),(0,s._)("div",l,[(0,s._)("h4",{class:(0,s.C_)(["mb-2",{"text-success":"Success"===e.title,"text-danger":"Error"===e.title,"text-warning":"Warning"===e.title,"text-info":"Info"===e.title}]),textContent:(0,s.zw)(e.title)},null,10,i),(0,s._)("span",{textContent:(0,s.zw)(e.message)},null,8,a)]),r],2)}}})},7814:(e,t,n)=>{n.d(t,{Z:()=>d});var s=n(821),l={class:"row d-flex align-items-center"},i={class:"col-sm-12 col-md-3"},a={class:"pagination-info"},r={key:0,class:"col-sm-12 col-md-9"},o={class:"pagination pagination-circle pagination-outline justify-content-end"},u={key:0,class:"previous"},c={key:1,class:"next"};const d=(0,s.aZ)({__name:"Pagination",props:{meta:{type:Object,required:!0},links:{type:Object,required:!0}},setup:function(e){return function(t,n){var d,m,b,g,v,f,p=(0,s.up)("Link");return(0,s.wg)(),(0,s.iD)("div",l,[(0,s._)("div",i,[(0,s._)("div",a,"Showing "+(0,s.zw)((null===(d=e.meta)||void 0===d?void 0:d.from)||0)+" to "+(0,s.zw)((null===(m=e.meta)||void 0===m?void 0:m.to)||0)+" of "+(0,s.zw)(null===(b=e.meta)||void 0===b?void 0:b.total)+" records",1)]),(null===(g=e.meta)||void 0===g?void 0:g.total)>(null===(v=e.meta)||void 0===v?void 0:v.per_page)?((0,s.wg)(),(0,s.iD)("div",r,[(0,s._)("ul",o,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(null===(f=e.meta)||void 0===f?void 0:f.links,(function(e){return(0,s.wg)(),(0,s.iD)("li",{class:(0,s.C_)(["page-item m-1",{active:e.active,disabled:!e.url}])},[(0,s.Wm)(p,{replace:"",href:e.url||"#",class:"page-link"},{default:(0,s.w5)((function(){return[e.label.includes("Previous")?((0,s.wg)(),(0,s.iD)("i",u)):e.label.includes("Next")?((0,s.wg)(),(0,s.iD)("i",c)):((0,s.wg)(),(0,s.iD)(s.HY,{key:2},[(0,s.Uk)((0,s.zw)(e.label),1)],64))]})),_:2},1032,["href"])],2)})),256))])])):(0,s.kq)("",!0)])}}})},7619:(e,t,n)=>{n.r(t),n.d(t,{default:()=>B});var s=n(821),l=n(5093),i=n(7814),a=n(6486),r=n(7577),o=n(3642),u={class:"d-flex flex-column-fluid"},c={id:"kt_content_container",class:"container-fluid"},d={class:"card card-custom"},m={class:"card-header"},b={class:"card-title"},g=["value"],v={class:"card-toolbar"},f={class:"d-flex align-items-center position-relative"},p={class:"svg-icon svg-icon-1 position-absolute ms-6"},w={class:"card-body"},_={class:"table-responsive"},y={class:"table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"},k=(0,s._)("thead",null,[(0,s._)("tr",{class:"fw-semibold fs-6 text-gray-800"},[(0,s._)("th",null,"Patient Name"),(0,s._)("th",{class:"text-start"},"Actual Amount"),(0,s._)("th",{class:"text-start"},"Approved Amount by MO"),(0,s._)("th",{class:"text-center w-200px"},"Action")])],-1),h={class:"text-center"},x=(0,s._)("i",{class:"fas fa-eye"},null,-1),S=(0,s._)("i",{class:"fas fa-edit"},null,-1),C=["onClick"],D=[(0,s._)("i",{class:"fas fa-trash"},null,-1)];const B=(0,s.aZ)({__name:"Index",props:{reimbursements:{type:Object,required:!0},filters:Object},setup:function(e){var t,n,B=e,A=(0,r.M)(),q=A.filterData,z=A.destroy,W=(A.toggleStatus,(0,o.g)().hasPermission),j=(0,s.iH)(null===(t=B.filters)||void 0===t?void 0:t.search),H=(0,s.iH)((null===(n=B.filters)||void 0===n?void 0:n.limit)||"30");return(0,s.YP)([j,H],(0,a.debounce)((function(e){q("reimbursements.index",{search:j.value,limit:H.value})}),500)),function(t,n){var a,r,o=(0,s.up)("Head"),B=(0,s.up)("Toolbar"),A=(0,s.up)("inline-svg"),U=(0,s.up)("Link");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(o,{title:"Reimbursements"}),(0,s.Wm)(B,{title:"Reimbursements",buttons:[{label:"Add Reimbursement",link:t.route("reimbursements.create"),permission:"create reimbursements"}],breadcrumbs:[{label:"Reimbursements",link:null}]},null,8,["buttons"]),(0,s._)("div",u,[(0,s._)("div",c,[t.$page.props.flash.title?((0,s.wg)(),(0,s.j4)(l.Z,{key:0,title:t.$page.props.flash.title,message:t.$page.props.flash.message},null,8,["title","message"])):(0,s.kq)("",!0),(0,s._)("div",d,[(0,s._)("div",m,[(0,s._)("div",b,[(0,s.wy)((0,s._)("select",{"onUpdate:modelValue":n[0]||(n[0]=function(e){return H.value=e}),onChange:n[1]||(n[1]=(0,s.iM)((function(){return(0,s.SU)(q)&&(0,s.SU)(q).apply(void 0,arguments)}),["prevent"])),class:"form-select form-select-sm form-select-solid"},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.range(30,100,10,0),(function(e){return(0,s.wg)(),(0,s.iD)("option",{value:e},(0,s.zw)(e),9,g)})),256))],544),[[s.bM,H.value]])]),(0,s._)("div",v,[(0,s._)("div",f,[(0,s._)("span",p,[(0,s.Wm)(A,{src:"/media/icons/duotune/general/gen021.svg"})]),(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":n[2]||(n[2]=function(e){return j.value=e}),type:"text",class:"form-control form-control-solid w-250px ps-15",placeholder:"Search"},null,512),[[s.nr,j.value]])])])]),(0,s._)("div",w,[(0,s._)("div",_,[(0,s._)("table",y,[k,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.reimbursements.data,(function(e){var n;return(0,s.wg)(),(0,s.iD)("tr",{key:e.id},[(0,s._)("td",null,(0,s.zw)(null==e||null===(n=e.patient)||void 0===n?void 0:n.patient_name),1),(0,s._)("td",null,(0,s.zw)(e.actual_amount),1),(0,s._)("td",null,(0,s.zw)(e.approved_amount),1),(0,s._)("td",h,[(0,s.SU)(W)("view reimbursements")?((0,s.wg)(),(0,s.j4)(U,{key:0,href:t.route("reimbursements.show",e.id),class:"btn btn-icon btn-primary btn-circle btn-sm me-2","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"View"},{default:(0,s.w5)((function(){return[x]})),_:2},1032,["href"])):(0,s.kq)("",!0),(0,s.SU)(W)("update reimbursements")?((0,s.wg)(),(0,s.j4)(U,{key:1,href:t.route("reimbursements.edit",e.id),class:"btn btn-icon btn-secondary btn-circle btn-sm me-2","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Edit"},{default:(0,s.w5)((function(){return[S]})),_:2},1032,["href"])):(0,s.kq)("",!0),(0,s.SU)(W)("delete reimbursements")?((0,s.wg)(),(0,s.iD)("a",{key:2,onClick:(0,s.iM)((function(t){return(0,s.SU)(z)("reimbursements.destroy",e.id)}),["prevent"]),class:"btn btn-icon btn-danger btn-circle btn-sm me-2","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Delete"},D,8,C)):(0,s.kq)("",!0)])])})),128))])])]),(0,s.Wm)(i.Z,{meta:null===(a=e.reimbursements)||void 0===a?void 0:a.meta,links:null===(r=e.reimbursements)||void 0===r?void 0:r.links},null,8,["meta","links"])])])])])],64)}}})}}]);