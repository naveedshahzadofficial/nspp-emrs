"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[300],{7577:(e,t,n)=>{n.d(t,{M:()=>a});var s=n(8748),l=n(8542),i=n.n(l);function a(){return{filterData:function(e,t){t=Object.keys(t).reduce((function(e,n){var s=t[n];return""!==s&&null!=s&&(e[n]=s),e}),{}),s.Nd.get(route(e),t,{preserveScroll:!0,preserveState:!0,replace:!0})},destroy:function(e,t){i().fire({text:"Are you sure you want to delete this?",icon:"warning",showCancelButton:!0,confirmButtonText:"Delete",buttonsStyling:!1,customClass:{confirmButton:"btn fw-bold btn-danger",cancelButton:"btn fw-bold btn-secondary"}}).then((function(n){n.isConfirmed&&s.Nd.delete(route(e,t),{preserveScroll:!0})}))},changeStatus:function(e,t){i().fire({text:"Are you sure?",icon:"warning",showCancelButton:!0,confirmButtonText:null!=t&&t.status?"Deactivate":"Activate",buttonsStyling:!1,customClass:{confirmButton:null!=t&&t.status?"btn fw-bold btn-danger":"btn fw-bold btn-success",cancelButton:"btn fw-bold btn-secondary"}}).then((function(n){n.isConfirmed&&s.Nd.delete(route(e,null==t?void 0:t.id),{preserveScroll:!0})}))},revoke:function(e,t,n){i().fire({text:"Are you sure you want to revoke this?",icon:"warning",showCancelButton:!0,confirmButtonText:"Revoke",buttonsStyling:!1,customClass:{confirmButton:"btn fw-bold btn-danger",cancelButton:"btn fw-bold btn-secondary"}}).then((function(l){l.isConfirmed&&s.Nd.delete(route(e,[t,n]),{preserveScroll:!0})}))}}}},5093:(e,t,n)=>{n.d(t,{Z:()=>r});var s=n(821),l={class:"d-flex flex-column"},i=["textContent"],a=["textContent"],o=(0,s._)("button",{type:"button",class:"position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto","data-bs-dismiss":"alert"},[(0,s._)("i",{class:"bi bi-x fs-1 text-black"})],-1);const r=(0,s.aZ)({__name:"AlertMessage",props:{title:{type:String,required:!0},message:{type:String,required:!0}},setup:function(e){var t=e,n=(0,s.iH)("");return(0,s.bv)((function(){switch(t.title){case"Success":n.value="/media/icons/duotune/general/gen048.svg";break;case"Error":n.value="/media/icons/duotune/general/gen050.svg";break;case"Warning":n.value="/media/icons/duotune/general/gen044.svg";break;case"Info":n.value="/media/icons/duotune/general/gen045.svg"}})),function(t,r){var c=(0,s.up)("inline-svg");return(0,s.wg)(),(0,s.iD)("div",{class:(0,s.C_)([{"alert-success":"Success"===e.title,"alert-danger":"Error"===e.title,"alert-warning":"Warning"===e.title,"alert-info":"Info"===e.title},"alert alert-success alert-dismissible d-flex align-items-center p-5"])},[(0,s._)("span",{class:(0,s.C_)(["svg-icon svg-icon-2hx me-4",{"svg-icon-success":"Success"===e.title,"svg-icon-danger":"Error"===e.title,"svg-icon-warning":"Warning"===e.title,"svg-icon-info":"Info"===e.title}])},[(0,s.Wm)(c,{src:n.value},null,8,["src"])],2),(0,s._)("div",l,[(0,s._)("h4",{class:(0,s.C_)(["mb-2",{"text-success":"Success"===e.title,"text-danger":"Error"===e.title,"text-warning":"Warning"===e.title,"text-info":"Info"===e.title}]),textContent:(0,s.zw)(e.title)},null,10,i),(0,s._)("span",{textContent:(0,s.zw)(e.message)},null,8,a)]),o],2)}}})},7814:(e,t,n)=>{n.d(t,{Z:()=>d});var s=n(821),l={class:"row d-flex align-items-center"},i={class:"col-sm-12 col-md-3"},a={class:"pagination-info"},o={key:0,class:"col-sm-12 col-md-9"},r={class:"pagination pagination-circle pagination-outline justify-content-end"},c={key:0,class:"previous"},u={key:1,class:"next"};const d=(0,s.aZ)({__name:"Pagination",props:{meta:{type:Object,required:!0},links:{type:Object,required:!0}},setup:function(e){return function(t,n){var d,g,f,b,v,m,p=(0,s.up)("Link");return(0,s.wg)(),(0,s.iD)("div",l,[(0,s._)("div",i,[(0,s._)("div",a,"Showing "+(0,s.zw)((null===(d=e.meta)||void 0===d?void 0:d.from)||0)+" to "+(0,s.zw)((null===(g=e.meta)||void 0===g?void 0:g.to)||0)+" of "+(0,s.zw)(null===(f=e.meta)||void 0===f?void 0:f.total)+" records",1)]),(null===(b=e.meta)||void 0===b?void 0:b.total)>(null===(v=e.meta)||void 0===v?void 0:v.per_page)?((0,s.wg)(),(0,s.iD)("div",o,[(0,s._)("ul",r,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(null===(m=e.meta)||void 0===m?void 0:m.links,(function(e){return(0,s.wg)(),(0,s.iD)("li",{class:(0,s.C_)(["page-item m-1",{active:e.active,disabled:!e.url}])},[(0,s.Wm)(p,{replace:"",href:e.url||"#",class:"page-link"},{default:(0,s.w5)((function(){return[e.label.includes("Previous")?((0,s.wg)(),(0,s.iD)("i",c)):e.label.includes("Next")?((0,s.wg)(),(0,s.iD)("i",u)):((0,s.wg)(),(0,s.iD)(s.HY,{key:2},[(0,s.Uk)((0,s.zw)(e.label),1)],64))]})),_:2},1032,["href"])],2)})),256))])])):(0,s.kq)("",!0)])}}})},2300:(e,t,n)=>{n.r(t),n.d(t,{default:()=>W});var s=n(821),l=n(5093),i=n(7814),a=n(6486),o=n(7577),r={class:"d-flex flex-column-fluid"},c={id:"kt_content_container",class:"container-fluid"},u={class:"card card-custom"},d={class:"card-header"},g={class:"card-title"},f=["value"],b={class:"card-toolbar"},v={class:"d-flex align-items-center position-relative"},m={class:"svg-icon svg-icon-1 position-absolute ms-6"},p={class:"card-body"},_={class:"table-responsive"},w={class:"table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"},y=(0,s._)("thead",null,[(0,s._)("tr",{class:"fw-semibold fs-6 text-gray-800"},[(0,s._)("th",null,"Disease Name"),(0,s._)("th",null,"Disease Type"),(0,s._)("th",{class:"text-center"},"Status"),(0,s._)("th",{class:"text-center w-200px"},"Action")])],-1),h={class:"text-center"},k={class:"text-center"},x=(0,s._)("i",{class:"fas fa-eye"},null,-1),C=(0,s._)("i",{class:"fas fa-edit"},null,-1),D=["onClick","title"],S=["onClick"],B=[(0,s._)("i",{class:"fas fa-trash"},null,-1)];const W=(0,s.aZ)({__name:"Index",props:{diseases:{type:Object,required:!0},filters:Object},setup:function(e){var t,n,W=e,z=(0,o.M)(),A=z.filterData,H=z.destroy,j=z.changeStatus,q=(0,s.iH)(null===(t=W.filters)||void 0===t?void 0:t.search),M=(0,s.iH)((null===(n=W.filters)||void 0===n?void 0:n.limit)||"30");return(0,s.YP)([q,M],(0,a.debounce)((function(e){A("diseases.index",{search:q.value,limit:M.value})}),500)),function(t,n){var a,o,W=(0,s.up)("Head"),z=(0,s.up)("Toolbar"),U=(0,s.up)("inline-svg"),Z=(0,s.up)("Link");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(W,{title:"Diseases"}),(0,s.Wm)(z,{title:"Diseases",buttons:[{label:"Add Disease",link:t.route("diseases.create")}],breadcrumbs:[{label:"System Settings",link:"#"},{label:"Diseases",link:null}]},null,8,["buttons"]),(0,s._)("div",r,[(0,s._)("div",c,[t.$page.props.flash.title?((0,s.wg)(),(0,s.j4)(l.Z,{key:0,title:t.$page.props.flash.title,message:t.$page.props.flash.message},null,8,["title","message"])):(0,s.kq)("",!0),(0,s._)("div",u,[(0,s._)("div",d,[(0,s._)("div",g,[(0,s.wy)((0,s._)("select",{"onUpdate:modelValue":n[0]||(n[0]=function(e){return M.value=e}),onChange:n[1]||(n[1]=(0,s.iM)((function(){return(0,s.SU)(A)&&(0,s.SU)(A).apply(void 0,arguments)}),["prevent"])),class:"form-select form-select-sm form-select-solid"},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.range(30,100,10,0),(function(e){return(0,s.wg)(),(0,s.iD)("option",{value:e},(0,s.zw)(e),9,f)})),256))],544),[[s.bM,M.value]])]),(0,s._)("div",b,[(0,s._)("div",v,[(0,s._)("span",m,[(0,s.Wm)(U,{src:"/media/icons/duotune/general/gen021.svg"})]),(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":n[2]||(n[2]=function(e){return q.value=e}),type:"text",class:"form-control form-control-solid w-250px ps-15",placeholder:"Search"},null,512),[[s.nr,q.value]])])])]),(0,s._)("div",p,[(0,s._)("div",_,[(0,s._)("table",w,[y,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.diseases.data,(function(e){var n;return(0,s.wg)(),(0,s.iD)("tr",{key:e.id},[(0,s._)("td",null,(0,s.zw)(e.disease_name),1),(0,s._)("td",null,(0,s.zw)(null==e||null===(n=e.disease_type)||void 0===n?void 0:n.type_name),1),(0,s._)("td",h,[(0,s._)("span",{class:(0,s.C_)(["badge font-weight-bold",[e.status?"badge-success":"badge-danger"]])},(0,s.zw)(e.status?"Active":"Inactive"),3)]),(0,s._)("td",k,[(0,s.Wm)(Z,{href:t.route("diseases.show",e.id),class:"btn btn-icon btn-primary btn-circle btn-sm me-2","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"View"},{default:(0,s.w5)((function(){return[x]})),_:2},1032,["href"]),(0,s.Wm)(Z,{href:t.route("diseases.edit",e.id),class:"btn btn-icon btn-secondary btn-circle btn-sm me-2","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Edit"},{default:(0,s.w5)((function(){return[C]})),_:2},1032,["href"]),(0,s._)("a",{onClick:(0,s.iM)((function(t){return(0,s.SU)(j)("diseases.change-status",e)}),["prevent"]),class:(0,s.C_)(["btn btn-icon btn-circle btn-sm me-2",[e.status?"btn-danger":"btn-success"]]),"data-bs-toggle":"tooltip","data-bs-placement":"top",title:[e.status?"Deactivate":"Activate"]},[(0,s._)("i",{class:(0,s.C_)(["icon-xl fas",[e.status?"fa-toggle-off":"fa-toggle-on"]])},null,2)],10,D),(0,s._)("a",{onClick:(0,s.iM)((function(t){return(0,s.SU)(H)("diseases.destroy",e.id)}),["prevent"]),class:"btn btn-icon btn-danger btn-circle btn-sm me-2","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Delete"},B,8,S)])])})),128))])])]),(0,s.Wm)(i.Z,{meta:null===(a=e.diseases)||void 0===a?void 0:a.meta,links:null===(o=e.diseases)||void 0===o?void 0:o.links},null,8,["meta","links"])])])])])],64)}}})}}]);