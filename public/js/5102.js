"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5102],{7577:(t,e,n)=>{n.d(e,{M:()=>a});var l=n(8748),s=n(8542),i=n.n(s);function a(){return{filterData:function(t,e){e=Object.keys(e).reduce((function(t,n){var l=e[n];return""!==l&&null!=l&&(t[n]=l),t}),{}),l.Nd.get(route(t),e,{preserveScroll:!0,preserveState:!0,replace:!0})},destroy:function(t,e){i().fire({text:"Are you sure you want to delete this?",icon:"warning",showCancelButton:!0,confirmButtonText:"Delete",buttonsStyling:!1,customClass:{confirmButton:"btn fw-bold btn-danger",cancelButton:"btn fw-bold btn-secondary"}}).then((function(n){n.isConfirmed&&l.Nd.delete(route(t,e),{preserveScroll:!0})}))},toggleStatus:function(t,e){i().fire({text:"Are you sure?",icon:"warning",showCancelButton:!0,confirmButtonText:null!=e&&e.status?"Deactivate":"Activate",buttonsStyling:!1,customClass:{confirmButton:null!=e&&e.status?"btn fw-bold btn-danger":"btn fw-bold btn-success",cancelButton:"btn fw-bold btn-secondary"}}).then((function(n){n.isConfirmed&&l.Nd.delete(route(t,null==e?void 0:e.id),{preserveScroll:!0})}))},revoke:function(t,e,n){i().fire({text:"Are you sure you want to revoke this?",icon:"warning",showCancelButton:!0,confirmButtonText:"Revoke",buttonsStyling:!1,customClass:{confirmButton:"btn fw-bold btn-danger",cancelButton:"btn fw-bold btn-secondary"}}).then((function(s){s.isConfirmed&&l.Nd.delete(route(t,[e,n]),{preserveScroll:!0})}))}}}},5093:(t,e,n)=>{n.d(e,{Z:()=>r});var l=n(821),s={class:"d-flex flex-column"},i=["textContent"],a=["textContent"],o=(0,l._)("button",{type:"button",class:"position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto","data-bs-dismiss":"alert"},[(0,l._)("i",{class:"bi bi-x fs-1 text-black"})],-1);const r=(0,l.aZ)({__name:"AlertMessage",props:{title:{type:String,required:!0},message:{type:String,required:!0}},setup:function(t){var e=t,n=(0,l.iH)("");return(0,l.bv)((function(){switch(e.title){case"Success":n.value="/media/icons/duotune/general/gen048.svg";break;case"Error":n.value="/media/icons/duotune/general/gen050.svg";break;case"Warning":n.value="/media/icons/duotune/general/gen044.svg";break;case"Info":n.value="/media/icons/duotune/general/gen045.svg"}})),function(e,r){var c=(0,l.up)("inline-svg");return(0,l.wg)(),(0,l.iD)("div",{class:(0,l.C_)([{"alert-success":"Success"===t.title,"alert-danger":"Error"===t.title,"alert-warning":"Warning"===t.title,"alert-info":"Info"===t.title},"alert alert-success alert-dismissible d-flex align-items-center p-5"])},[(0,l._)("span",{class:(0,l.C_)(["svg-icon svg-icon-2hx me-4",{"svg-icon-success":"Success"===t.title,"svg-icon-danger":"Error"===t.title,"svg-icon-warning":"Warning"===t.title,"svg-icon-info":"Info"===t.title}])},[(0,l.Wm)(c,{src:n.value},null,8,["src"])],2),(0,l._)("div",s,[(0,l._)("h4",{class:(0,l.C_)(["mb-2",{"text-success":"Success"===t.title,"text-danger":"Error"===t.title,"text-warning":"Warning"===t.title,"text-info":"Info"===t.title}]),textContent:(0,l.zw)(t.title)},null,10,i),(0,l._)("span",{textContent:(0,l.zw)(t.message)},null,8,a)]),o],2)}}})},7814:(t,e,n)=>{n.d(e,{Z:()=>d});var l=n(821),s={class:"row d-flex align-items-center"},i={class:"col-sm-12 col-md-3"},a={class:"pagination-info"},o={key:0,class:"col-sm-12 col-md-9"},r={class:"pagination pagination-circle pagination-outline justify-content-end"},c={key:0,class:"previous"},u={key:1,class:"next"};const d=(0,l.aZ)({__name:"Pagination",props:{meta:{type:Object,required:!0},links:{type:Object,required:!0}},setup:function(t){return function(e,n){var d,g,m,p,f,b,v=(0,l.up)("Link");return(0,l.wg)(),(0,l.iD)("div",s,[(0,l._)("div",i,[(0,l._)("div",a,"Showing "+(0,l.zw)((null===(d=t.meta)||void 0===d?void 0:d.from)||0)+" to "+(0,l.zw)((null===(g=t.meta)||void 0===g?void 0:g.to)||0)+" of "+(0,l.zw)(null===(m=t.meta)||void 0===m?void 0:m.total)+" records",1)]),(null===(p=t.meta)||void 0===p?void 0:p.total)>(null===(f=t.meta)||void 0===f?void 0:f.per_page)?((0,l.wg)(),(0,l.iD)("div",o,[(0,l._)("ul",r,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(null===(b=t.meta)||void 0===b?void 0:b.links,(function(t){return(0,l.wg)(),(0,l.iD)("li",{class:(0,l.C_)(["page-item m-1",{active:t.active,disabled:!t.url}])},[(0,l.Wm)(v,{replace:"",href:t.url||"#",class:"page-link"},{default:(0,l.w5)((function(){return[t.label.includes("Previous")?((0,l.wg)(),(0,l.iD)("i",c)):t.label.includes("Next")?((0,l.wg)(),(0,l.iD)("i",u)):((0,l.wg)(),(0,l.iD)(l.HY,{key:2},[(0,l.Uk)((0,l.zw)(t.label),1)],64))]})),_:2},1032,["href"])],2)})),256))])])):(0,l.kq)("",!0)])}}})},5102:(t,e,n)=>{n.r(e),n.d(e,{default:()=>U});var l=n(821),s=n(5093),i=n(7814),a=n(6486),o=n(7577),r=n(3642),c={class:"d-flex flex-column-fluid"},u={id:"kt_content_container",class:"container-fluid"},d={class:"card card-custom"},g={class:"card-header"},m={class:"card-title"},p=["value"],f={class:"card-toolbar"},b={class:"d-flex align-items-center position-relative"},v={class:"svg-icon svg-icon-1 position-absolute ms-6"},w={class:"card-body"},_={class:"table-responsive"},k={class:"table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"},y=(0,l._)("thead",null,[(0,l._)("tr",{class:"fw-semibold fs-6 text-gray-800"},[(0,l._)("th",null,"Complaint Name"),(0,l._)("th",{class:"text-center"},"Status"),(0,l._)("th",{class:"text-center w-200px"},"Action")])],-1),h={class:"text-center"},x={class:"text-center"},C=(0,l._)("i",{class:"fas fa-eye"},null,-1),S=(0,l._)("i",{class:"fas fa-edit"},null,-1),D=["onClick","title"],B=["onClick"],q=[(0,l._)("i",{class:"fas fa-trash"},null,-1)];const U=(0,l.aZ)({__name:"Index",props:{complaints:{type:Object,required:!0},filters:Object},setup:function(t){var e,n,U=t,W=(0,o.M)(),j=W.filterData,z=W.destroy,A=W.toggleStatus,H=(0,r.g)().hasPermission,M=(0,l.iH)(null===(e=U.filters)||void 0===e?void 0:e.search),Z=(0,l.iH)((null===(n=U.filters)||void 0===n?void 0:n.limit)||"30");return(0,l.YP)([M,Z],(0,a.debounce)((function(t){j("complaints.index",{search:M.value,limit:Z.value})}),500)),function(e,n){var a,o,r=(0,l.up)("Head"),U=(0,l.up)("Toolbar"),W=(0,l.up)("inline-svg"),I=(0,l.up)("Link");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(r,{title:"Complaints"}),(0,l.Wm)(U,{title:"Complaints",buttons:[{label:"Add Complaint",link:e.route("complaints.create"),permission:"create complaints"}],breadcrumbs:[{label:"System Settings",link:"#"},{label:"Complaints",link:null}]},null,8,["buttons"]),(0,l._)("div",c,[(0,l._)("div",u,[e.$page.props.flash.title?((0,l.wg)(),(0,l.j4)(s.Z,{key:0,title:e.$page.props.flash.title,message:e.$page.props.flash.message},null,8,["title","message"])):(0,l.kq)("",!0),(0,l._)("div",d,[(0,l._)("div",g,[(0,l._)("div",m,[(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":n[0]||(n[0]=function(t){return Z.value=t}),onChange:n[1]||(n[1]=(0,l.iM)((function(){return(0,l.SU)(j)&&(0,l.SU)(j).apply(void 0,arguments)}),["prevent"])),class:"form-select form-select-sm form-select-solid"},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.range(30,100,10,0),(function(t){return(0,l.wg)(),(0,l.iD)("option",{value:t},(0,l.zw)(t),9,p)})),256))],544),[[l.bM,Z.value]])]),(0,l._)("div",f,[(0,l._)("div",b,[(0,l._)("span",v,[(0,l.Wm)(W,{src:"/media/icons/duotune/general/gen021.svg"})]),(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":n[2]||(n[2]=function(t){return M.value=t}),type:"text",class:"form-control form-control-solid w-250px ps-15",placeholder:"Search"},null,512),[[l.nr,M.value]])])])]),(0,l._)("div",w,[(0,l._)("div",_,[(0,l._)("table",k,[y,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.complaints.data,(function(t){return(0,l.wg)(),(0,l.iD)("tr",{key:t.id},[(0,l._)("td",null,(0,l.zw)(t.complaint_name),1),(0,l._)("td",h,[(0,l._)("span",{class:(0,l.C_)(["badge font-weight-bold",[t.status?"badge-success":"badge-danger"]])},(0,l.zw)(t.status?"Active":"Inactive"),3)]),(0,l._)("td",x,[(0,l.SU)(H)("view complaints")?((0,l.wg)(),(0,l.j4)(I,{key:0,href:e.route("complaints.show",t.id),class:"btn btn-icon btn-primary btn-circle btn-sm me-2","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"View"},{default:(0,l.w5)((function(){return[C]})),_:2},1032,["href"])):(0,l.kq)("",!0),(0,l.SU)(H)("update complaints")?((0,l.wg)(),(0,l.j4)(I,{key:1,href:e.route("complaints.edit",t.id),class:"btn btn-icon btn-secondary btn-circle btn-sm me-2","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Edit"},{default:(0,l.w5)((function(){return[S]})),_:2},1032,["href"])):(0,l.kq)("",!0),(0,l.SU)(H)("toggle status complaints")?((0,l.wg)(),(0,l.iD)("a",{key:2,onClick:(0,l.iM)((function(e){return(0,l.SU)(A)("complaints.change-status",t)}),["prevent"]),class:(0,l.C_)(["btn btn-icon btn-circle btn-sm me-2",[t.status?"btn-danger":"btn-success"]]),"data-bs-toggle":"tooltip","data-bs-placement":"top",title:[t.status?"Deactivate":"Activate"]},[(0,l._)("i",{class:(0,l.C_)(["icon-xl fas",[t.status?"fa-toggle-off":"fa-toggle-on"]])},null,2)],10,D)):(0,l.kq)("",!0),(0,l.SU)(H)("delete complaints")?((0,l.wg)(),(0,l.iD)("a",{key:3,onClick:(0,l.iM)((function(e){return(0,l.SU)(z)("complaints.destroy",t.id)}),["prevent"]),class:"btn btn-icon btn-danger btn-circle btn-sm me-2","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Delete"},q,8,B)):(0,l.kq)("",!0)])])})),128))])])]),(0,l.Wm)(i.Z,{meta:null===(a=t.complaints)||void 0===a?void 0:a.meta,links:null===(o=t.complaints)||void 0===o?void 0:o.links},null,8,["meta","links"])])])])])],64)}}})}}]);