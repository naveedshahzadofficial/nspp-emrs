"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9458],{7577:(e,t,n)=>{n.d(t,{M:()=>i});var l=n(8748),s=n(8542),o=n.n(s);function i(){return{filterData:function(e,t){t=Object.keys(t).reduce((function(e,n){var l=t[n];return""!==l&&null!=l&&(e[n]=l),e}),{}),l.Nd.get(route(e),t,{preserveScroll:!0,preserveState:!0,replace:!0})},destroy:function(e,t){o().fire({text:"Are you sure you want to delete this?",icon:"warning",showCancelButton:!0,confirmButtonText:"Delete",buttonsStyling:!1,customClass:{confirmButton:"btn fw-bold btn-danger",cancelButton:"btn fw-bold btn-secondary"}}).then((function(n){n.isConfirmed&&l.Nd.delete(route(e,t),{preserveScroll:!0})}))},toggleStatus:function(e,t){o().fire({text:"Are you sure?",icon:"warning",showCancelButton:!0,confirmButtonText:null!=t&&t.status?"Deactivate":"Activate",buttonsStyling:!1,customClass:{confirmButton:null!=t&&t.status?"btn fw-bold btn-danger":"btn fw-bold btn-success",cancelButton:"btn fw-bold btn-secondary"}}).then((function(n){n.isConfirmed&&l.Nd.delete(route(e,null==t?void 0:t.id),{preserveScroll:!0})}))},revoke:function(e,t,n){o().fire({text:"Are you sure you want to revoke this?",icon:"warning",showCancelButton:!0,confirmButtonText:"Revoke",buttonsStyling:!1,customClass:{confirmButton:"btn fw-bold btn-danger",cancelButton:"btn fw-bold btn-secondary"}}).then((function(s){s.isConfirmed&&l.Nd.delete(route(e,[t,n]),{preserveScroll:!0})}))},printReceipt:function(){var e,t,n,l,s,o,i,a,r,c,u=document.querySelector("#kt_wrapper"),d=document.querySelector("#kt_aside"),g=document.querySelector("#kt_header"),v=document.querySelector("#kt_toolbar"),p=document.querySelector("#kt_footer");null==d||null===(e=d.style)||void 0===e||e.setProperty("display","none"),null==g||null===(t=g.style)||void 0===t||t.setProperty("display","none"),null==v||null===(n=v.style)||void 0===n||n.setProperty("display","none"),null==p||null===(l=p.style)||void 0===l||l.setProperty("display","none"),null==u||null===(s=u.style)||void 0===s||s.setProperty("padding-top","0"),window.print(),null==d||null===(o=d.style)||void 0===o||o.removeProperty("display"),null==g||null===(i=g.style)||void 0===i||i.removeProperty("display"),null==v||null===(a=v.style)||void 0===a||a.removeProperty("display"),null==p||null===(r=p.style)||void 0===r||r.removeProperty("display"),null==u||null===(c=u.style)||void 0===c||c.removeProperty("padding-top")}}}},5093:(e,t,n)=>{n.d(t,{Z:()=>r});var l=n(821),s={class:"d-flex flex-column"},o=["textContent"],i=["textContent"],a=(0,l._)("button",{type:"button",class:"position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto","data-bs-dismiss":"alert"},[(0,l._)("i",{class:"bi bi-x fs-1 text-black"})],-1);const r=(0,l.aZ)({__name:"AlertMessage",props:{title:{type:String,required:!0},message:{type:String,required:!0}},setup:function(e){var t=e,n=(0,l.iH)("");return(0,l.bv)((function(){switch(t.title){case"Success":n.value="/media/icons/duotune/general/gen048.svg";break;case"Error":n.value="/media/icons/duotune/general/gen050.svg";break;case"Warning":n.value="/media/icons/duotune/general/gen044.svg";break;case"Info":n.value="/media/icons/duotune/general/gen045.svg"}})),function(t,r){var c=(0,l.up)("inline-svg");return(0,l.wg)(),(0,l.iD)("div",{class:(0,l.C_)([{"alert-success":"Success"===e.title,"alert-danger":"Error"===e.title,"alert-warning":"Warning"===e.title,"alert-info":"Info"===e.title},"alert alert-success alert-dismissible d-flex align-items-center p-5"])},[(0,l._)("span",{class:(0,l.C_)(["svg-icon svg-icon-2hx me-4",{"svg-icon-success":"Success"===e.title,"svg-icon-danger":"Error"===e.title,"svg-icon-warning":"Warning"===e.title,"svg-icon-info":"Info"===e.title}])},[(0,l.Wm)(c,{src:n.value},null,8,["src"])],2),(0,l._)("div",s,[(0,l._)("h4",{class:(0,l.C_)(["mb-2",{"text-success":"Success"===e.title,"text-danger":"Error"===e.title,"text-warning":"Warning"===e.title,"text-info":"Info"===e.title}]),textContent:(0,l.zw)(e.title)},null,10,o),(0,l._)("span",{textContent:(0,l.zw)(e.message)},null,8,i)]),a],2)}}})},7814:(e,t,n)=>{n.d(t,{Z:()=>d});var l=n(821),s={class:"row d-flex align-items-center"},o={class:"col-sm-12 col-md-3"},i={class:"pagination-info"},a={key:0,class:"col-sm-12 col-md-9"},r={class:"pagination pagination-circle pagination-outline justify-content-end"},c={key:0,class:"previous"},u={key:1,class:"next"};const d=(0,l.aZ)({__name:"Pagination",props:{meta:{type:Object,required:!0},links:{type:Object,required:!0}},setup:function(e){return function(t,n){var d,g,v,p,f,m,b=(0,l.up)("Link");return(0,l.wg)(),(0,l.iD)("div",s,[(0,l._)("div",o,[(0,l._)("div",i,"Showing "+(0,l.zw)((null===(d=e.meta)||void 0===d?void 0:d.from)||0)+" to "+(0,l.zw)((null===(g=e.meta)||void 0===g?void 0:g.to)||0)+" of "+(0,l.zw)(null===(v=e.meta)||void 0===v?void 0:v.total)+" records",1)]),(null===(p=e.meta)||void 0===p?void 0:p.total)>(null===(f=e.meta)||void 0===f?void 0:f.per_page)?((0,l.wg)(),(0,l.iD)("div",a,[(0,l._)("ul",r,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(null===(m=e.meta)||void 0===m?void 0:m.links,(function(e){return(0,l.wg)(),(0,l.iD)("li",{class:(0,l.C_)(["page-item m-1",{active:e.active,disabled:!e.url}])},[(0,l.Wm)(b,{replace:"",href:e.url||"#",class:"page-link"},{default:(0,l.w5)((function(){return[e.label.includes("Previous")?((0,l.wg)(),(0,l.iD)("i",c)):e.label.includes("Next")?((0,l.wg)(),(0,l.iD)("i",u)):((0,l.wg)(),(0,l.iD)(l.HY,{key:2},[(0,l.Uk)((0,l.zw)(e.label),1)],64))]})),_:2},1032,["href"])],2)})),256))])])):(0,l.kq)("",!0)])}}})},9458:(e,t,n)=>{n.r(t),n.d(t,{default:()=>B});var l=n(821),s=n(5093),o=n(7814),i=n(6486),a=n(7577),r=n(3642),c={class:"d-flex flex-column-fluid"},u={id:"kt_content_container",class:"container-fluid"},d={class:"card card-custom"},g={class:"card-header"},v={class:"card-title"},p=["value"],f={class:"card-toolbar"},m={class:"d-flex align-items-center position-relative"},b={class:"svg-icon svg-icon-1 position-absolute ms-6"},y={class:"card-body"},w={class:"table-responsive"},_={class:"table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"},k=(0,l._)("thead",null,[(0,l._)("tr",{class:"fw-semibold fs-6 text-gray-800"},[(0,l._)("th",null,"Role Name"),(0,l._)("th",{class:"text-center"},"Status"),(0,l._)("th",{class:"text-center w-200px"},"Action")])],-1),h={class:"text-center"},x={class:"text-center"},S=(0,l._)("i",{class:"fas fa-eye"},null,-1),C=(0,l._)("i",{class:"fas fa-edit"},null,-1),D=["onClick","title"],q=["onClick"],P=[(0,l._)("i",{class:"fas fa-trash"},null,-1)];const B=(0,l.aZ)({__name:"Index",props:{roles:{type:Object,required:!0},filters:Object},setup:function(e){var t,n,B=e,U=(0,a.M)(),W=U.filterData,j=U.destroy,z=U.toggleStatus,A=(0,r.g)().hasPermission,H=(0,l.iH)(null===(t=B.filters)||void 0===t?void 0:t.search),M=(0,l.iH)((null===(n=B.filters)||void 0===n?void 0:n.limit)||"30");return(0,l.YP)([H,M],(0,i.debounce)((function(e){W("roles.index",{search:H.value,limit:M.value})}),500)),function(t,n){var i,a,r=(0,l.up)("Head"),B=(0,l.up)("Toolbar"),U=(0,l.up)("inline-svg"),R=(0,l.up)("Link");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(r,{title:"Roles"}),(0,l.Wm)(B,{title:"Roles",buttons:[{label:"Add Role",link:t.route("roles.create"),permission:"create roles"}],breadcrumbs:[{label:"System Settings",link:"#"},{label:"Roles",link:null}]},null,8,["buttons"]),(0,l._)("div",c,[(0,l._)("div",u,[t.$page.props.flash.title?((0,l.wg)(),(0,l.j4)(s.Z,{key:0,title:t.$page.props.flash.title,message:t.$page.props.flash.message},null,8,["title","message"])):(0,l.kq)("",!0),(0,l._)("div",d,[(0,l._)("div",g,[(0,l._)("div",v,[(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":n[0]||(n[0]=function(e){return M.value=e}),onChange:n[1]||(n[1]=(0,l.iM)((function(){return(0,l.SU)(W)&&(0,l.SU)(W).apply(void 0,arguments)}),["prevent"])),class:"form-select form-select-sm form-select-solid"},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.range(30,100,10,0),(function(e){return(0,l.wg)(),(0,l.iD)("option",{value:e},(0,l.zw)(e),9,p)})),256))],544),[[l.bM,M.value]])]),(0,l._)("div",f,[(0,l._)("div",m,[(0,l._)("span",b,[(0,l.Wm)(U,{src:"/media/icons/duotune/general/gen021.svg"})]),(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":n[2]||(n[2]=function(e){return H.value=e}),type:"text",class:"form-control form-control-solid w-250px ps-15",placeholder:"Search"},null,512),[[l.nr,H.value]])])])]),(0,l._)("div",y,[(0,l._)("div",w,[(0,l._)("table",_,[k,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.roles.data,(function(e){return(0,l.wg)(),(0,l.iD)("tr",{key:e.id},[(0,l._)("td",null,(0,l.zw)(e.name),1),(0,l._)("td",h,[(0,l._)("span",{class:(0,l.C_)(["badge font-weight-bold",[e.status?"badge-success":"badge-danger"]])},(0,l.zw)(e.status?"Active":"Inactive"),3)]),(0,l._)("td",x,[(0,l.SU)(A)("view roles")?((0,l.wg)(),(0,l.j4)(R,{key:0,href:t.route("roles.show",e.id),class:"btn btn-icon btn-primary btn-circle btn-sm me-2","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"View"},{default:(0,l.w5)((function(){return[S]})),_:2},1032,["href"])):(0,l.kq)("",!0),(0,l.SU)(A)("update roles")?((0,l.wg)(),(0,l.j4)(R,{key:1,href:t.route("roles.edit",e.id),class:"btn btn-icon btn-secondary btn-circle btn-sm me-2","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Edit"},{default:(0,l.w5)((function(){return[C]})),_:2},1032,["href"])):(0,l.kq)("",!0),(0,l.SU)(A)("toggle status roles")?((0,l.wg)(),(0,l.iD)("a",{key:2,onClick:(0,l.iM)((function(t){return(0,l.SU)(z)("roles.toggle-status",e)}),["prevent"]),class:(0,l.C_)(["btn btn-icon btn-circle btn-sm me-2",[e.status?"btn-danger":"btn-success"]]),"data-bs-toggle":"tooltip","data-bs-placement":"top",title:[e.status?"Deactivate":"Activate"]},[(0,l._)("i",{class:(0,l.C_)(["icon-xl fas",[e.status?"fa-toggle-off":"fa-toggle-on"]])},null,2)],10,D)):(0,l.kq)("",!0),(0,l.SU)(A)("delete roles")?((0,l.wg)(),(0,l.iD)("a",{key:3,onClick:(0,l.iM)((function(t){return(0,l.SU)(j)("roles.destroy",e.id)}),["prevent"]),class:"btn btn-icon btn-danger btn-circle btn-sm me-2","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Delete"},P,8,q)):(0,l.kq)("",!0)])])})),128))])])]),(0,l.Wm)(o.Z,{meta:null===(i=e.roles)||void 0===i?void 0:i.meta,links:null===(a=e.roles)||void 0===a?void 0:a.links},null,8,["meta","links"])])])])])],64)}}})}}]);