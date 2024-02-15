"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4534],{7577:(e,t,n)=>{n.d(t,{M:()=>o});var l=n(8748),s=n(8542),i=n.n(s);function o(){return{filterData:function(e,t){t=Object.keys(t).reduce((function(e,n){var l=t[n];return""!==l&&null!=l&&(e[n]=l),e}),{}),l.Nd.get(route(e),t,{preserveScroll:!0,preserveState:!0,replace:!0})},destroy:function(e,t){i().fire({text:"Are you sure you want to delete this?",icon:"warning",showCancelButton:!0,confirmButtonText:"Delete",buttonsStyling:!1,customClass:{confirmButton:"btn fw-bold btn-danger",cancelButton:"btn fw-bold btn-secondary"}}).then((function(n){n.isConfirmed&&l.Nd.delete(route(e,t),{preserveScroll:!0})}))},toggleStatus:function(e,t){i().fire({text:"Are you sure?",icon:"warning",showCancelButton:!0,confirmButtonText:null!=t&&t.status?"Deactivate":"Activate",buttonsStyling:!1,customClass:{confirmButton:null!=t&&t.status?"btn fw-bold btn-danger":"btn fw-bold btn-success",cancelButton:"btn fw-bold btn-secondary"}}).then((function(n){n.isConfirmed&&l.Nd.delete(route(e,null==t?void 0:t.id),{preserveScroll:!0})}))},revoke:function(e,t,n){i().fire({text:"Are you sure you want to revoke this?",icon:"warning",showCancelButton:!0,confirmButtonText:"Revoke",buttonsStyling:!1,customClass:{confirmButton:"btn fw-bold btn-danger",cancelButton:"btn fw-bold btn-secondary"}}).then((function(s){s.isConfirmed&&l.Nd.delete(route(e,[t,n]),{preserveScroll:!0})}))},printReceipt:function(){var e,t,n,l,s,i,o,r,a,u,c=document.querySelector("#kt_wrapper"),d=document.querySelector("#kt_aside"),p=document.querySelector("#kt_header"),m=document.querySelector("#kt_toolbar"),v=document.querySelector("#kt_footer");null==d||null===(e=d.style)||void 0===e||e.setProperty("display","none"),null==p||null===(t=p.style)||void 0===t||t.setProperty("display","none"),null==m||null===(n=m.style)||void 0===n||n.setProperty("display","none"),null==v||null===(l=v.style)||void 0===l||l.setProperty("display","none"),null==c||null===(s=c.style)||void 0===s||s.setProperty("padding-top","0"),window.print(),null==d||null===(i=d.style)||void 0===i||i.removeProperty("display"),null==p||null===(o=p.style)||void 0===o||o.removeProperty("display"),null==m||null===(r=m.style)||void 0===r||r.removeProperty("display"),null==v||null===(a=v.style)||void 0===a||a.removeProperty("display"),null==c||null===(u=c.style)||void 0===u||u.removeProperty("padding-top")}}}},5093:(e,t,n)=>{n.d(t,{Z:()=>a});var l=n(821),s={class:"d-flex flex-column"},i=["textContent"],o=["textContent"],r=(0,l._)("button",{type:"button",class:"position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto","data-bs-dismiss":"alert"},[(0,l._)("i",{class:"bi bi-x fs-1 text-black"})],-1);const a=(0,l.aZ)({__name:"AlertMessage",props:{title:{type:String,required:!0},message:{type:String,required:!0}},setup:function(e){var t=e,n=(0,l.iH)("");return(0,l.bv)((function(){switch(t.title){case"Success":n.value="/media/icons/duotune/general/gen048.svg";break;case"Error":n.value="/media/icons/duotune/general/gen050.svg";break;case"Warning":n.value="/media/icons/duotune/general/gen044.svg";break;case"Info":n.value="/media/icons/duotune/general/gen045.svg"}})),function(t,a){var u=(0,l.up)("inline-svg");return(0,l.wg)(),(0,l.iD)("div",{class:(0,l.C_)([{"alert-success":"Success"===e.title,"alert-danger":"Error"===e.title,"alert-warning":"Warning"===e.title,"alert-info":"Info"===e.title},"alert alert-success alert-dismissible d-flex align-items-center p-5"])},[(0,l._)("span",{class:(0,l.C_)(["svg-icon svg-icon-2hx me-4",{"svg-icon-success":"Success"===e.title,"svg-icon-danger":"Error"===e.title,"svg-icon-warning":"Warning"===e.title,"svg-icon-info":"Info"===e.title}])},[(0,l.Wm)(u,{src:n.value},null,8,["src"])],2),(0,l._)("div",s,[(0,l._)("h4",{class:(0,l.C_)(["mb-2",{"text-success":"Success"===e.title,"text-danger":"Error"===e.title,"text-warning":"Warning"===e.title,"text-info":"Info"===e.title}]),textContent:(0,l.zw)(e.title)},null,10,i),(0,l._)("span",{textContent:(0,l.zw)(e.message)},null,8,o)]),r],2)}}})},7814:(e,t,n)=>{n.d(t,{Z:()=>d});var l=n(821),s={class:"row d-flex align-items-center"},i={class:"col-sm-12 col-md-3"},o={class:"pagination-info"},r={key:0,class:"col-sm-12 col-md-9"},a={class:"pagination pagination-circle pagination-outline justify-content-end"},u={key:0,class:"previous"},c={key:1,class:"next"};const d=(0,l.aZ)({__name:"Pagination",props:{meta:{type:Object,required:!0},links:{type:Object,required:!0}},setup:function(e){return function(t,n){var d,p,m,v,g,f,b=(0,l.up)("Link");return(0,l.wg)(),(0,l.iD)("div",s,[(0,l._)("div",i,[(0,l._)("div",o,"Showing "+(0,l.zw)((null===(d=e.meta)||void 0===d?void 0:d.from)||0)+" to "+(0,l.zw)((null===(p=e.meta)||void 0===p?void 0:p.to)||0)+" of "+(0,l.zw)(null===(m=e.meta)||void 0===m?void 0:m.total)+" records",1)]),(null===(v=e.meta)||void 0===v?void 0:v.total)>(null===(g=e.meta)||void 0===g?void 0:g.per_page)?((0,l.wg)(),(0,l.iD)("div",r,[(0,l._)("ul",a,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(null===(f=e.meta)||void 0===f?void 0:f.links,(function(e){return(0,l.wg)(),(0,l.iD)("li",{class:(0,l.C_)(["page-item m-1",{active:e.active,disabled:!e.url}])},[(0,l.Wm)(b,{replace:"",href:e.url||"#",class:"page-link"},{default:(0,l.w5)((function(){return[e.label.includes("Previous")?((0,l.wg)(),(0,l.iD)("i",u)):e.label.includes("Next")?((0,l.wg)(),(0,l.iD)("i",c)):((0,l.wg)(),(0,l.iD)(l.HY,{key:2},[(0,l.Uk)((0,l.zw)(e.label),1)],64))]})),_:2},1032,["href"])],2)})),256))])])):(0,l.kq)("",!0)])}}})},4534:(e,t,n)=>{n.r(t),n.d(t,{default:()=>q});var l=n(821),s=n(5093),i=n(7814),o=n(6486),r=n(7577),a=n(3642),u={class:"d-flex flex-column-fluid"},c={id:"kt_content_container",class:"container-fluid"},d={class:"card card-custom"},p={class:"card-header"},m={class:"card-title"},v=["value"],g={class:"card-toolbar"},f={class:"d-flex align-items-center position-relative"},b={class:"svg-icon svg-icon-1 position-absolute ms-6"},y={class:"card-body"},w={class:"table-responsive"},_={class:"table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"},k=(0,l._)("thead",null,[(0,l._)("tr",{class:"fw-semibold fs-6 text-gray-800"},[(0,l._)("th",null,"Permission Name"),(0,l._)("th",{class:"text-center w-200px"},"Action")])],-1),h={class:"text-center"},x=(0,l._)("i",{class:"fas fa-eye"},null,-1),S=(0,l._)("i",{class:"fas fa-edit"},null,-1),C=["onClick"],D=[(0,l._)("i",{class:"fas fa-trash"},null,-1)];const P=(0,l.aZ)({__name:"Index",props:{permissions:{type:Object,required:!0},filters:Object},setup:function(e){var t,n,P=e,q=(0,r.M)(),B=q.filterData,W=q.destroy,j=(0,a.g)().hasPermission,H=(0,l.iH)(null===(t=P.filters)||void 0===t?void 0:t.search),U=(0,l.iH)((null===(n=P.filters)||void 0===n?void 0:n.limit)||"30");return(0,l.YP)([H,U],(0,o.debounce)((function(e){B("permissions.index",{search:H.value,limit:U.value})}),500)),function(t,n){var o,r,a=(0,l.up)("Head"),P=(0,l.up)("Toolbar"),q=(0,l.up)("inline-svg"),z=(0,l.up)("Link");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(a,{title:"Permissions"}),(0,l.Wm)(P,{title:"Permissions",buttons:[{label:"Add Permission",link:t.route("permissions.create"),permission:"create permissions"}],breadcrumbs:[{label:"System Settings",link:"#"},{label:"Permissions",link:null}]},null,8,["buttons"]),(0,l._)("div",u,[(0,l._)("div",c,[t.$page.props.flash.title?((0,l.wg)(),(0,l.j4)(s.Z,{key:0,title:t.$page.props.flash.title,message:t.$page.props.flash.message},null,8,["title","message"])):(0,l.kq)("",!0),(0,l._)("div",d,[(0,l._)("div",p,[(0,l._)("div",m,[(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":n[0]||(n[0]=function(e){return U.value=e}),onChange:n[1]||(n[1]=(0,l.iM)((function(){return(0,l.SU)(B)&&(0,l.SU)(B).apply(void 0,arguments)}),["prevent"])),class:"form-select form-select-sm form-select-solid"},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.range(30,100,10,0),(function(e){return(0,l.wg)(),(0,l.iD)("option",{value:e},(0,l.zw)(e),9,v)})),256))],544),[[l.bM,U.value]])]),(0,l._)("div",g,[(0,l._)("div",f,[(0,l._)("span",b,[(0,l.Wm)(q,{src:"/media/icons/duotune/general/gen021.svg"})]),(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":n[2]||(n[2]=function(e){return H.value=e}),type:"text",class:"form-control form-control-solid w-250px ps-15",placeholder:"Search"},null,512),[[l.nr,H.value]])])])]),(0,l._)("div",y,[(0,l._)("div",w,[(0,l._)("table",_,[k,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.permissions.data,(function(e){return(0,l.wg)(),(0,l.iD)("tr",{key:e.id},[(0,l._)("td",null,(0,l.zw)(e.name),1),(0,l._)("td",h,[(0,l.SU)(j)("view permissions")?((0,l.wg)(),(0,l.j4)(z,{key:0,href:t.route("permissions.show",e.id),class:"btn btn-icon btn-primary btn-circle btn-sm me-2","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"View"},{default:(0,l.w5)((function(){return[x]})),_:2},1032,["href"])):(0,l.kq)("",!0),(0,l.SU)(j)("update permissions")?((0,l.wg)(),(0,l.j4)(z,{key:1,href:t.route("permissions.edit",e.id),class:"btn btn-icon btn-secondary btn-circle btn-sm me-2","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Edit"},{default:(0,l.w5)((function(){return[S]})),_:2},1032,["href"])):(0,l.kq)("",!0),(0,l.SU)(j)("delete permissions")?((0,l.wg)(),(0,l.iD)("a",{key:2,onClick:(0,l.iM)((function(t){return(0,l.SU)(W)("permissions.destroy",e.id)}),["prevent"]),class:"btn btn-icon btn-danger btn-circle btn-sm me-2","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Delete"},D,8,C)):(0,l.kq)("",!0)])])})),128))])])]),(0,l.Wm)(i.Z,{meta:null===(o=e.permissions)||void 0===o?void 0:o.meta,links:null===(r=e.permissions)||void 0===r?void 0:r.links},null,8,["meta","links"])])])])])],64)}}}),q=P}}]);