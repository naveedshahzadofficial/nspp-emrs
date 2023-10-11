"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9403],{7577:(t,e,n)=>{n.d(e,{M:()=>a});var i=n(8748),l=n(8542),s=n.n(l);function a(){return{filterData:function(t,e){e=Object.keys(e).reduce((function(t,n){var i=e[n];return""!==i&&null!=i&&(t[n]=i),t}),{}),i.Nd.get(route(t),e,{preserveScroll:!0,preserveState:!0,replace:!0})},destroy:function(t,e){s().fire({text:"Are you sure you want to delete this?",icon:"warning",showCancelButton:!0,confirmButtonText:"Delete",buttonsStyling:!1,customClass:{confirmButton:"btn fw-bold btn-danger",cancelButton:"btn fw-bold btn-secondary"}}).then((function(n){n.isConfirmed&&i.Nd.delete(route(t,e),{preserveScroll:!0})}))},toggleStatus:function(t,e){s().fire({text:"Are you sure?",icon:"warning",showCancelButton:!0,confirmButtonText:null!=e&&e.status?"Deactivate":"Activate",buttonsStyling:!1,customClass:{confirmButton:null!=e&&e.status?"btn fw-bold btn-danger":"btn fw-bold btn-success",cancelButton:"btn fw-bold btn-secondary"}}).then((function(n){n.isConfirmed&&i.Nd.delete(route(t,null==e?void 0:e.id),{preserveScroll:!0})}))},revoke:function(t,e,n){s().fire({text:"Are you sure you want to revoke this?",icon:"warning",showCancelButton:!0,confirmButtonText:"Revoke",buttonsStyling:!1,customClass:{confirmButton:"btn fw-bold btn-danger",cancelButton:"btn fw-bold btn-secondary"}}).then((function(l){l.isConfirmed&&i.Nd.delete(route(t,[e,n]),{preserveScroll:!0})}))},printReceipt:function(){var t,e,n,i,l,s,a,r,o,c,u=document.querySelector("#kt_wrapper"),d=document.querySelector("#kt_aside"),p=document.querySelector("#kt_header"),m=document.querySelector("#kt_toolbar"),g=document.querySelector("#kt_footer");null==d||null===(t=d.style)||void 0===t||t.setProperty("display","none"),null==p||null===(e=p.style)||void 0===e||e.setProperty("display","none"),null==m||null===(n=m.style)||void 0===n||n.setProperty("display","none"),null==g||null===(i=g.style)||void 0===i||i.setProperty("display","none"),null==u||null===(l=u.style)||void 0===l||l.setProperty("padding-top","0"),window.print(),null==d||null===(s=d.style)||void 0===s||s.removeProperty("display"),null==p||null===(a=p.style)||void 0===a||a.removeProperty("display"),null==m||null===(r=m.style)||void 0===r||r.removeProperty("display"),null==g||null===(o=g.style)||void 0===o||o.removeProperty("display"),null==u||null===(c=u.style)||void 0===c||c.removeProperty("padding-top")}}}},5093:(t,e,n)=>{n.d(e,{Z:()=>o});var i=n(821),l={class:"d-flex flex-column"},s=["textContent"],a=["textContent"],r=(0,i._)("button",{type:"button",class:"position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto","data-bs-dismiss":"alert"},[(0,i._)("i",{class:"bi bi-x fs-1 text-black"})],-1);const o=(0,i.aZ)({__name:"AlertMessage",props:{title:{type:String,required:!0},message:{type:String,required:!0}},setup:function(t){var e=t,n=(0,i.iH)("");return(0,i.bv)((function(){switch(e.title){case"Success":n.value="/media/icons/duotune/general/gen048.svg";break;case"Error":n.value="/media/icons/duotune/general/gen050.svg";break;case"Warning":n.value="/media/icons/duotune/general/gen044.svg";break;case"Info":n.value="/media/icons/duotune/general/gen045.svg"}})),function(e,o){var c=(0,i.up)("inline-svg");return(0,i.wg)(),(0,i.iD)("div",{class:(0,i.C_)([{"alert-success":"Success"===t.title,"alert-danger":"Error"===t.title,"alert-warning":"Warning"===t.title,"alert-info":"Info"===t.title},"alert alert-success alert-dismissible d-flex align-items-center p-5"])},[(0,i._)("span",{class:(0,i.C_)(["svg-icon svg-icon-2hx me-4",{"svg-icon-success":"Success"===t.title,"svg-icon-danger":"Error"===t.title,"svg-icon-warning":"Warning"===t.title,"svg-icon-info":"Info"===t.title}])},[(0,i.Wm)(c,{src:n.value},null,8,["src"])],2),(0,i._)("div",l,[(0,i._)("h4",{class:(0,i.C_)(["mb-2",{"text-success":"Success"===t.title,"text-danger":"Error"===t.title,"text-warning":"Warning"===t.title,"text-info":"Info"===t.title}]),textContent:(0,i.zw)(t.title)},null,10,s),(0,i._)("span",{textContent:(0,i.zw)(t.message)},null,8,a)]),r],2)}}})},7814:(t,e,n)=>{n.d(e,{Z:()=>d});var i=n(821),l={class:"row d-flex align-items-center"},s={class:"col-sm-12 col-md-3"},a={class:"pagination-info"},r={key:0,class:"col-sm-12 col-md-9"},o={class:"pagination pagination-circle pagination-outline justify-content-end"},c={key:0,class:"previous"},u={key:1,class:"next"};const d=(0,i.aZ)({__name:"Pagination",props:{meta:{type:Object,required:!0},links:{type:Object,required:!0}},setup:function(t){return function(e,n){var d,p,m,g,f,b,v=(0,i.up)("Link");return(0,i.wg)(),(0,i.iD)("div",l,[(0,i._)("div",s,[(0,i._)("div",a,"Showing "+(0,i.zw)((null===(d=t.meta)||void 0===d?void 0:d.from)||0)+" to "+(0,i.zw)((null===(p=t.meta)||void 0===p?void 0:p.to)||0)+" of "+(0,i.zw)(null===(m=t.meta)||void 0===m?void 0:m.total)+" records",1)]),(null===(g=t.meta)||void 0===g?void 0:g.total)>(null===(f=t.meta)||void 0===f?void 0:f.per_page)?((0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("ul",o,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(null===(b=t.meta)||void 0===b?void 0:b.links,(function(t){return(0,i.wg)(),(0,i.iD)("li",{class:(0,i.C_)(["page-item m-1",{active:t.active,disabled:!t.url}])},[(0,i.Wm)(v,{replace:"",href:t.url||"#",class:"page-link"},{default:(0,i.w5)((function(){return[t.label.includes("Previous")?((0,i.wg)(),(0,i.iD)("i",c)):t.label.includes("Next")?((0,i.wg)(),(0,i.iD)("i",u)):((0,i.wg)(),(0,i.iD)(i.HY,{key:2},[(0,i.Uk)((0,i.zw)(t.label),1)],64))]})),_:2},1032,["href"])],2)})),256))])])):(0,i.kq)("",!0)])}}})},9403:(t,e,n)=>{n.r(e),n.d(e,{default:()=>E});var i=n(821),l=n(5093),s=n(7814),a=n(6486),r=n(7577),o=n(3642),c={class:"d-flex flex-column-fluid"},u={id:"kt_content_container",class:"container-fluid"},d={class:"card card-custom"},p={class:"card-header"},m={class:"card-title"},g=["value"],f={class:"card-toolbar"},b={class:"d-flex align-items-center position-relative"},v={class:"svg-icon svg-icon-1 position-absolute ms-6"},y={class:"card-body"},w={class:"table-responsive"},_={class:"table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"},k=(0,i._)("thead",null,[(0,i._)("tr",{class:"fw-semibold fs-6 text-gray-800"},[(0,i._)("th",{class:"p-0 min-w-150px"},"Patient"),(0,i._)("th",{class:"p-0 min-w-200px text-center"},"Token No."),(0,i._)("th",{class:"p-0 min-w-200px text-center"},"Date"),(0,i._)("th",{class:"p-0 min-w-200px text-center"},"Time"),(0,i._)("th",{class:"p-0 min-w-100px text-center"},"Action")])],-1),h={class:"d-flex align-items-center"},x={class:"symbol symbol-45px me-5"},S=["src"],D={class:"d-flex justify-content-start flex-column"},C={href:"#",class:"text-dark fw-bolder text-hover-primary mb-1 fs-6"},q={href:"#",class:"text-muted text-hover-primary fw-bold text-muted d-block fs-7"},P=(0,i._)("span",{class:"text-dark"},"Designation",-1),U={href:"#",class:"text-muted text-hover-primary fw-bold text-muted d-block fs-7"},j=(0,i._)("span",{class:"text-dark"},"Age",-1),z={class:"fw-semibold text-center"},B={class:"fw-semibold text-center"},H={class:"fw-semibold text-center"},W={class:"text-center"},A=(0,i._)("i",{class:"fas fa-eye"},null,-1),M=(0,i._)("i",{class:"fas fa-receipt"},null,-1),R=(0,i._)("i",{class:"fas fa-history"},null,-1),V=(0,i._)("i",{class:"fas fa-step-forward"},null,-1),Z=(0,i._)("i",{class:"fas fa-book-medical"},null,-1),N=(0,i._)("i",{class:"fas fa-edit"},null,-1),T=["onClick"],Y=[(0,i._)("i",{class:"fas fa-trash"},null,-1)];const E=(0,i.aZ)({__name:"Index",props:{patientVisits:{type:Object,required:!0},filters:Object},setup:function(t){var e,n,E=t,I=(0,r.M)(),O=I.filterData,K=I.destroy,$=(0,o.g)().hasPermission,L=(0,i.iH)(null===(e=E.filters)||void 0===e?void 0:e.search),F=(0,i.iH)((null===(n=E.filters)||void 0===n?void 0:n.limit)||"30");return(0,i.YP)([L,F],(0,a.debounce)((function(t){O("registrations.index",{search:L.value,limit:F.value})}),500)),function(e,n){var a,r,o=(0,i.up)("Head"),E=(0,i.up)("Toolbar"),I=(0,i.up)("inline-svg"),G=(0,i.up)("Link");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(o,{title:"Registrations"}),(0,i.Wm)(E,{title:"Registrations",buttons:[{label:"Add Registration",link:e.route("registrations.create"),permission:"create registrations"}],breadcrumbs:[{label:"Registrations",link:null}]},null,8,["buttons"]),(0,i._)("div",c,[(0,i._)("div",u,[e.$page.props.flash.title?((0,i.wg)(),(0,i.j4)(l.Z,{key:0,title:e.$page.props.flash.title,message:e.$page.props.flash.message},null,8,["title","message"])):(0,i.kq)("",!0),(0,i._)("div",d,[(0,i._)("div",p,[(0,i._)("div",m,[(0,i.wy)((0,i._)("select",{"onUpdate:modelValue":n[0]||(n[0]=function(t){return F.value=t}),onChange:n[1]||(n[1]=(0,i.iM)((function(){return(0,i.SU)(O)&&(0,i.SU)(O).apply(void 0,arguments)}),["prevent"])),class:"form-select form-select-sm form-select-solid"},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.range(30,100,10,0),(function(t){return(0,i.wg)(),(0,i.iD)("option",{value:t},(0,i.zw)(t),9,g)})),256))],544),[[i.bM,F.value]])]),(0,i._)("div",f,[(0,i._)("div",b,[(0,i._)("span",v,[(0,i.Wm)(I,{src:"/media/icons/duotune/general/gen021.svg"})]),(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":n[2]||(n[2]=function(t){return L.value=t}),type:"text",class:"form-control form-control-solid w-250px ps-15",placeholder:"Search"},null,512),[[i.nr,L.value]])])])]),(0,i._)("div",y,[(0,i._)("div",w,[(0,i._)("table",_,[k,(0,i._)("tbody",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.patientVisits.data,(function(t){return(0,i.wg)(),(0,i.iD)("tr",{key:t.id},[(0,i._)("td",null,[(0,i._)("div",h,[(0,i._)("div",x,[t.patient.patient_image?((0,i.wg)(),(0,i.iD)("img",{key:0,alt:"Pic",src:t.patient.patient_image},null,8,S)):t.patient?((0,i.wg)(),(0,i.iD)("span",{key:1,class:(0,i.C_)(["bg-light-primary text-primary","symbol-label fw-bolder"])},(0,i.zw)(t.patient.patient_name.charAt(0)),1)):(0,i.kq)("",!0)]),(0,i._)("div",D,[(0,i._)("a",C,(0,i.zw)(t.patient.patient_name),1),(0,i._)("a",q,[P,(0,i.Uk)(": "+(0,i.zw)(t.patient.designation),1)]),(0,i._)("a",U,[j,(0,i.Uk)(": "+(0,i.zw)(t.patient.patient_age),1)])])])]),(0,i._)("td",z,(0,i.zw)(t.token_no),1),(0,i._)("td",B,(0,i.zw)(t.date),1),(0,i._)("td",H,(0,i.zw)(t.time),1),(0,i._)("td",W,[(0,i.SU)($)("view registrations")?((0,i.wg)(),(0,i.j4)(G,{key:0,href:e.route("registrations.show",t.id),class:"btn btn-icon btn-primary btn-circle btn-sm me-2 mb-2","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"View"},{default:(0,i.w5)((function(){return[A]})),_:2},1032,["href"])):(0,i.kq)("",!0),(0,i.SU)($)("receipt registrations")?((0,i.wg)(),(0,i.j4)(G,{key:1,href:e.route("registrations.receipt",t.id),class:"btn btn-icon btn-primary btn-circle btn-sm me-2 mb-2","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Receipt"},{default:(0,i.w5)((function(){return[M]})),_:2},1032,["href"])):(0,i.kq)("",!0),(0,i.SU)($)("history registrations")?((0,i.wg)(),(0,i.j4)(G,{key:2,href:e.route("registrations.history",t.id),class:"btn btn-icon btn-primary btn-circle btn-sm me-2 mb-2","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"History"},{default:(0,i.w5)((function(){return[R]})),_:2},1032,["href"])):(0,i.kq)("",!0),(0,i.SU)($)("proceed registrations")?((0,i.wg)(),(0,i.j4)(G,{key:3,href:e.route("registrations.proceed",t.id),class:"btn btn-icon btn-warning btn-circle btn-sm me-2 mb-2","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Proceed"},{default:(0,i.w5)((function(){return[V]})),_:2},1032,["href"])):(0,i.kq)("",!0),(0,i.SU)($)("pharmacy registrations")?((0,i.wg)(),(0,i.j4)(G,{key:4,href:e.route("registrations.pharmacy.view",t.id),class:"btn btn-icon btn-warning btn-circle btn-sm me-2 mb-2","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Dispense Medicine"},{default:(0,i.w5)((function(){return[Z]})),_:2},1032,["href"])):(0,i.kq)("",!0),(0,i.SU)($)("update registrations")?((0,i.wg)(),(0,i.j4)(G,{key:5,href:e.route("registrations.edit",t.id),class:"btn btn-icon btn-secondary btn-circle btn-sm me-2 mb-2","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Edit"},{default:(0,i.w5)((function(){return[N]})),_:2},1032,["href"])):(0,i.kq)("",!0),(0,i.SU)($)("delete registrations")?((0,i.wg)(),(0,i.iD)("a",{key:6,onClick:(0,i.iM)((function(e){return(0,i.SU)(K)("registrations.destroy",t.id)}),["prevent"]),class:"btn btn-icon btn-danger btn-circle btn-sm me-2 mb-2","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Delete"},Y,8,T)):(0,i.kq)("",!0)])])})),128))])])]),(0,i.Wm)(s.Z,{meta:null===(a=t.patientVisits)||void 0===a?void 0:a.meta,links:null===(r=t.patientVisits)||void 0===r?void 0:r.links},null,8,["meta","links"])])])])])],64)}}})}}]);