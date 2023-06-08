"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[102],{7577:(t,e,n)=>{n.d(e,{M:()=>a});var l=n(8748),s=n(8542),i=n.n(s);function a(){return{filterData:function(t,e){e=Object.keys(e).reduce((function(t,n){var l=e[n];return""!==l&&null!=l&&(t[n]=l),t}),{}),l.Nd.get(route(t),e,{preserveScroll:!0,preserveState:!0,replace:!0})},destroy:function(t,e){i().fire({text:"Are you sure you want to delete this?",icon:"warning",showCancelButton:!0,confirmButtonText:"Delete",buttonsStyling:!1,customClass:{confirmButton:"btn fw-bold btn-danger",cancelButton:"btn fw-bold btn-secondary"}}).then((function(n){n.isConfirmed&&l.Nd.delete(route(t,e),{preserveScroll:!0})}))},changeStatus:function(t,e){i().fire({text:"Are you sure?",icon:"warning",showCancelButton:!0,confirmButtonText:null!=e&&e.status?"Deactivate":"Activate",buttonsStyling:!1,customClass:{confirmButton:null!=e&&e.status?"btn fw-bold btn-danger":"btn fw-bold btn-success",cancelButton:"btn fw-bold btn-secondary"}}).then((function(n){n.isConfirmed&&l.Nd.delete(route(t,null==e?void 0:e.id),{preserveScroll:!0})}))},revoke:function(t,e,n){i().fire({text:"Are you sure you want to revoke this?",icon:"warning",showCancelButton:!0,confirmButtonText:"Revoke",buttonsStyling:!1,customClass:{confirmButton:"btn fw-bold btn-danger",cancelButton:"btn fw-bold btn-secondary"}}).then((function(s){s.isConfirmed&&l.Nd.delete(route(t,[e,n]),{preserveScroll:!0})}))}}}},5093:(t,e,n)=>{n.d(e,{Z:()=>c});var l=n(821),s={class:"svg-icon svg-icon-2hx svg-icon-success me-4"},i={class:"d-flex flex-column"},a=["textContent"],o=["textContent"],r=(0,l._)("button",{type:"button",class:"position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto","data-bs-dismiss":"alert"},[(0,l._)("i",{class:"bi bi-x fs-1 text-black"})],-1);const c=(0,l.aZ)({__name:"AlertMessage",props:{title:{type:String,required:!0},message:{type:String,required:!0}},setup:function(t){return function(e,n){var c=(0,l.up)("inline-svg");return(0,l.wg)(),(0,l.iD)("div",{class:(0,l.C_)([{"alert-success":"Success"===t.title,"alert-danger":"Error"===t.title,"alert-warning":"Warning"===t.title,"alert-info":"Info"===t.title},"alert alert-success alert-dismissible d-flex align-items-center p-5"])},[(0,l._)("span",s,[(0,l.Wm)(c,{src:"/media/icons/duotune/general/gen048.svg"})]),(0,l._)("div",i,[(0,l._)("h4",{class:(0,l.C_)(["mb-2",{"text-success":"Success"===t.title,"text-danger":"Error"===t.title,"text-warning":"Warning"===t.title,"text-info":"Info"===t.title}]),textContent:(0,l.zw)(t.title)},null,10,a),(0,l._)("span",{textContent:(0,l.zw)(t.message)},null,8,o)]),r],2)}}})},7814:(t,e,n)=>{n.d(e,{Z:()=>d});var l=n(821),s={class:"row d-flex align-items-center"},i={class:"col-sm-12 col-md-3"},a={class:"pagination-info"},o={key:0,class:"col-sm-12 col-md-9"},r={class:"pagination pagination-circle pagination-outline justify-content-end"},c={key:0,class:"previous"},u={key:1,class:"next"};const d=(0,l.aZ)({__name:"Pagination",props:{meta:{type:Object,required:!0},links:{type:Object,required:!0}},setup:function(t){return function(e,n){var d,m,f,p,b,g,v=(0,l.up)("Link");return(0,l.wg)(),(0,l.iD)("div",s,[(0,l._)("div",i,[(0,l._)("div",a,"Showing "+(0,l.zw)((null===(d=t.meta)||void 0===d?void 0:d.from)||0)+" to "+(0,l.zw)((null===(m=t.meta)||void 0===m?void 0:m.to)||0)+" of "+(0,l.zw)(null===(f=t.meta)||void 0===f?void 0:f.total)+" records",1)]),(null===(p=t.meta)||void 0===p?void 0:p.total)>(null===(b=t.meta)||void 0===b?void 0:b.per_page)?((0,l.wg)(),(0,l.iD)("div",o,[(0,l._)("ul",r,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(null===(g=t.meta)||void 0===g?void 0:g.links,(function(t){return(0,l.wg)(),(0,l.iD)("li",{class:(0,l.C_)(["page-item m-1",{active:t.active,disabled:!t.url}])},[(0,l.Wm)(v,{replace:"",href:t.url||"#",class:"page-link"},{default:(0,l.w5)((function(){return[t.label.includes("Previous")?((0,l.wg)(),(0,l.iD)("i",c)):t.label.includes("Next")?((0,l.wg)(),(0,l.iD)("i",u)):((0,l.wg)(),(0,l.iD)(l.HY,{key:2},[(0,l.Uk)((0,l.zw)(t.label),1)],64))]})),_:2},1032,["href"])],2)})),256))])])):(0,l.kq)("",!0)])}}})},5102:(t,e,n)=>{n.r(e),n.d(e,{default:()=>W});var l=n(821),s=n(5093),i=n(7814),a=n(6486),o=n(7577),r={class:"d-flex flex-column-fluid"},c={id:"kt_content_container",class:"container-fluid"},u={class:"card card-custom"},d={class:"card-header"},m={class:"card-title"},f=["value"],p={class:"card-toolbar"},b={class:"d-flex align-items-center position-relative"},g={class:"svg-icon svg-icon-1 position-absolute ms-6"},v={class:"card-body"},w={class:"table-responsive"},_={class:"table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"},y=(0,l._)("thead",null,[(0,l._)("tr",{class:"fw-semibold fs-6 text-gray-800"},[(0,l._)("th",null,"Complaint Name"),(0,l._)("th",{class:"text-center"},"Status"),(0,l._)("th",{class:"text-center w-200px"},"Action")])],-1),h={class:"text-center"},x={class:"text-center"},k=(0,l._)("i",{class:"fas fa-eye"},null,-1),C=(0,l._)("i",{class:"fas fa-edit"},null,-1),S=["onClick","title"],D=["onClick"],B=[(0,l._)("i",{class:"fas fa-trash"},null,-1)];const W=(0,l.aZ)({__name:"Index",props:{complaints:{type:Object,required:!0},filters:Object},setup:function(t){var e,n,W=t,z=(0,o.M)(),A=z.filterData,H=z.destroy,j=z.changeStatus,q=(0,l.iH)(null===(e=W.filters)||void 0===e?void 0:e.search),M=(0,l.iH)((null===(n=W.filters)||void 0===n?void 0:n.limit)||"30");return(0,l.YP)(q,(0,a.debounce)((function(t){A("complaints.index",{search:q.value,limit:M.value})}),500)),function(e,n){var a,o,W=(0,l.up)("Head"),z=(0,l.up)("Toolbar"),U=(0,l.up)("inline-svg"),Z=(0,l.up)("Link");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(W,{title:"Complaints"}),(0,l.Wm)(z,{title:"Complaints",buttons:[{label:"Add Complaint",link:e.route("complaints.create")}],breadcrumbs:[{label:"System Settings",link:"#"},{label:"Complaints",link:null}]},null,8,["buttons"]),(0,l._)("div",r,[(0,l._)("div",c,[e.$page.props.flash.title?((0,l.wg)(),(0,l.j4)(s.Z,{key:0,title:e.$page.props.flash.title,message:e.$page.props.flash.message},null,8,["title","message"])):(0,l.kq)("",!0),(0,l._)("div",u,[(0,l._)("div",d,[(0,l._)("div",m,[(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":n[0]||(n[0]=function(t){return M.value=t}),onChange:n[1]||(n[1]=(0,l.iM)((function(){return(0,l.SU)(A)&&(0,l.SU)(A).apply(void 0,arguments)}),["prevent"])),class:"form-select form-select-sm form-select-solid"},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.range(30,100,10,0),(function(t){return(0,l.wg)(),(0,l.iD)("option",{value:t},(0,l.zw)(t),9,f)})),256))],544),[[l.bM,M.value]])]),(0,l._)("div",p,[(0,l._)("div",b,[(0,l._)("span",g,[(0,l.Wm)(U,{src:"/media/icons/duotune/general/gen021.svg"})]),(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":n[2]||(n[2]=function(t){return q.value=t}),type:"text",class:"form-control form-control-solid w-250px ps-15",placeholder:"Search"},null,512),[[l.nr,q.value]])])])]),(0,l._)("div",v,[(0,l._)("div",w,[(0,l._)("table",_,[y,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.complaints.data,(function(t){return(0,l.wg)(),(0,l.iD)("tr",{key:t.id},[(0,l._)("td",null,(0,l.zw)(t.complaint_name),1),(0,l._)("td",h,[(0,l._)("span",{class:(0,l.C_)(["badge font-weight-bold",[t.status?"badge-success":"badge-danger"]])},(0,l.zw)(t.status?"Active":"Inactive"),3)]),(0,l._)("td",x,[(0,l.Wm)(Z,{href:e.route("complaints.show",t.id),class:"btn btn-icon btn-primary btn-circle btn-sm me-2","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"View"},{default:(0,l.w5)((function(){return[k]})),_:2},1032,["href"]),(0,l.Wm)(Z,{href:e.route("complaints.edit",t.id),class:"btn btn-icon btn-secondary btn-circle btn-sm me-2","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Edit"},{default:(0,l.w5)((function(){return[C]})),_:2},1032,["href"]),(0,l._)("a",{onClick:(0,l.iM)((function(e){return(0,l.SU)(j)("complaints.change-status",t)}),["prevent"]),class:(0,l.C_)(["btn btn-icon btn-circle btn-sm me-2",[t.status?"btn-danger":"btn-success"]]),"data-bs-toggle":"tooltip","data-bs-placement":"top",title:[t.status?"Deactivate":"Activate"]},[(0,l._)("i",{class:(0,l.C_)(["icon-xl fas",[t.status?"fa-toggle-off":"fa-toggle-on"]])},null,2)],10,S),(0,l._)("a",{onClick:(0,l.iM)((function(e){return(0,l.SU)(H)("complaints.destroy",t.id)}),["prevent"]),class:"btn btn-icon btn-danger btn-circle btn-sm me-2","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Delete"},B,8,D)])])})),128))])])]),(0,l.Wm)(i.Z,{meta:null===(a=t.complaints)||void 0===a?void 0:a.meta,links:null===(o=t.complaints)||void 0===o?void 0:o.links},null,8,["meta","links"])])])])])],64)}}})}}]);