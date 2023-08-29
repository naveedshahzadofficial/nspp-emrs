"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3541],{7577:(e,t,l)=>{l.d(t,{M:()=>s});var n=l(8748),o=l(8542),r=l.n(o);function s(){return{filterData:function(e,t){t=Object.keys(t).reduce((function(e,l){var n=t[l];return""!==n&&null!=n&&(e[l]=n),e}),{}),n.Nd.get(route(e),t,{preserveScroll:!0,preserveState:!0,replace:!0})},destroy:function(e,t){r().fire({text:"Are you sure you want to delete this?",icon:"warning",showCancelButton:!0,confirmButtonText:"Delete",buttonsStyling:!1,customClass:{confirmButton:"btn fw-bold btn-danger",cancelButton:"btn fw-bold btn-secondary"}}).then((function(l){l.isConfirmed&&n.Nd.delete(route(e,t),{preserveScroll:!0})}))},toggleStatus:function(e,t){r().fire({text:"Are you sure?",icon:"warning",showCancelButton:!0,confirmButtonText:null!=t&&t.status?"Deactivate":"Activate",buttonsStyling:!1,customClass:{confirmButton:null!=t&&t.status?"btn fw-bold btn-danger":"btn fw-bold btn-success",cancelButton:"btn fw-bold btn-secondary"}}).then((function(l){l.isConfirmed&&n.Nd.delete(route(e,null==t?void 0:t.id),{preserveScroll:!0})}))},revoke:function(e,t,l){r().fire({text:"Are you sure you want to revoke this?",icon:"warning",showCancelButton:!0,confirmButtonText:"Revoke",buttonsStyling:!1,customClass:{confirmButton:"btn fw-bold btn-danger",cancelButton:"btn fw-bold btn-secondary"}}).then((function(o){o.isConfirmed&&n.Nd.delete(route(e,[t,l]),{preserveScroll:!0})}))},printReceipt:function(){var e,t,l,n,o,r,s,i,a,u,c=document.querySelector("#kt_wrapper"),d=document.querySelector("#kt_aside"),m=document.querySelector("#kt_header"),p=document.querySelector("#kt_toolbar"),b=document.querySelector("#kt_footer");null==d||null===(e=d.style)||void 0===e||e.setProperty("display","none"),null==m||null===(t=m.style)||void 0===t||t.setProperty("display","none"),null==p||null===(l=p.style)||void 0===l||l.setProperty("display","none"),null==b||null===(n=b.style)||void 0===n||n.setProperty("display","none"),null==c||null===(o=c.style)||void 0===o||o.setProperty("padding-top","0"),window.print(),null==d||null===(r=d.style)||void 0===r||r.removeProperty("display"),null==m||null===(s=m.style)||void 0===s||s.removeProperty("display"),null==p||null===(i=p.style)||void 0===i||i.removeProperty("display"),null==b||null===(a=b.style)||void 0===a||a.removeProperty("display"),null==c||null===(u=c.style)||void 0===u||u.removeProperty("padding-top")}}}},8706:(e,t,l)=>{l.d(t,{Z:()=>s});var n=l(821),o={key:0,class:"fv-plugins-message-container"},r={class:"fv-help-block"};const s=(0,n.aZ)({__name:"ServerErrorMessage",props:{error:String},setup:function(e){return function(t,l){return e.error?((0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("div",r,[(0,n._)("span",null,(0,n.zw)(e.error),1)])])):(0,n.kq)("",!0)}}})},3541:(e,t,l)=>{l.r(t),l.d(t,{default:()=>N});var n=l(821),o=l(8706),r=l(8748),s=l(7577),i={class:"d-flex flex-column-fluid"},a={id:"kt_content_container",class:"container-fluid"},u={class:"card card-custom"},c={class:"card-body"},d={class:"row mb-10"},m={class:"col-lg-6"},p=(0,n._)("label",{class:"required form-label"},"Role Name",-1),b={class:"col-lg-6"},f=(0,n._)("label",{class:"required form-label"},"Status",-1),v={class:"d-flex"},y=["onUpdate:modelValue","value","id"],_=["for"],g={class:"row"},k={class:"col-lg-12"},w=(0,n._)("label",{class:"form-label"},"Permissions",-1),S={class:"card-footer"},h=["disabled","data-kt-indicator"],U=[(0,n._)("span",{class:"indicator-label"}," Update ",-1),(0,n._)("span",{class:"indicator-progress"},[(0,n.Uk)(" Please wait... "),(0,n._)("span",{class:"spinner-border spinner-border-sm align-middle ms-2"})],-1)],x=(0,n._)("div",{class:"card-header mt-10"},[(0,n._)("div",{class:"card-title"},[(0,n._)("span",{class:"fw-semibold"},"Role Permissions")])],-1),P={class:"card-body"},B={class:"table-responsive"},C={class:"table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"},q=(0,n._)("thead",null,[(0,n._)("tr",{class:"fw-semibold fs-6 text-gray-800"},[(0,n._)("th",null,"Permission Name"),(0,n._)("th",{class:"text-center w-200px"},"Action")])],-1),R={class:"text-center"},D=["onClick"],A=[(0,n._)("i",{class:"fas fa-undo"},null,-1)];const N=(0,n.aZ)({__name:"Edit",props:{role:{type:Object,required:!0},permissions:Array},setup:function(e){var t,l,N=e,W=(0,s.M)().revoke,V=(0,r.cI)({name:null===(t=N.role)||void 0===t?void 0:t.name,status:null===(l=N.role)||void 0===l?void 0:l.status,permissions:[]});return(0,n.bv)((function(){var e;V.permissions=null===(e=N.role)||void 0===e?void 0:e.permissions})),(0,n.YP)((function(){return N.role}),(function(){var e;return V.permissions=null===(e=N.role)||void 0===e?void 0:e.permissions})),function(t,l){var r=(0,n.up)("Head"),s=(0,n.up)("Toolbar"),N=(0,n.up)("v-select"),Z=(0,n.up)("Link");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(r,{title:"Update Role"}),(0,n.Wm)(s,{title:"Update Role",buttons:[{label:"Back",link:t.route("roles.index")}],breadcrumbs:[{label:"System Settings",link:"#"},{label:"Roles",link:t.route("roles.index")},{label:"Update",link:null}]},null,8,["buttons","breadcrumbs"]),(0,n._)("div",i,[(0,n._)("div",a,[(0,n._)("div",u,[(0,n._)("form",{onSubmit:l[2]||(l[2]=(0,n.iM)((function(l){var o;return(0,n.SU)(V).put(t.route("roles.update",null===(o=e.role)||void 0===o?void 0:o.id))}),["prevent"]))},[(0,n._)("div",c,[(0,n._)("div",d,[(0,n._)("div",m,[p,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":l[0]||(l[0]=function(e){return(0,n.SU)(V).name=e}),type:"text",class:"form-control form-control-sm",placeholder:"Role Name"},null,512),[[n.nr,(0,n.SU)(V).name]]),(0,n.Wm)(o.Z,{error:(0,n.SU)(V).errors.name},null,8,["error"])]),(0,n._)("div",b,[f,(0,n._)("div",v,[((0,n.wg)(),(0,n.iD)(n.HY,null,(0,n.Ko)([{id:1,name:"Active"},{id:0,name:"Inactive"}],(function(e){return(0,n._)("div",{key:e.id,class:"form-check form-check-custom form-check-sm me-10"},[(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":function(e){return(0,n.SU)(V).status=e},value:e.id,class:"form-check-input",name:"status",type:"radio",id:"status_".concat(e.id)},null,8,y),[[n.G2,(0,n.SU)(V).status]]),(0,n._)("label",{class:"form-check-label",for:"status_".concat(e.id)},(0,n.zw)(e.name),9,_)])})),64))]),(0,n.Wm)(o.Z,{error:(0,n.SU)(V).errors.status},null,8,["error"])])]),(0,n._)("div",g,[(0,n._)("div",k,[w,(0,n.Wm)(N,{modelValue:(0,n.SU)(V).permissions,"onUpdate:modelValue":l[1]||(l[1]=function(e){return(0,n.SU)(V).permissions=e}),options:e.permissions,multiple:"",label:"name",class:"v-select-custom",placeholder:"Please Select"},null,8,["modelValue","options"]),(0,n.Wm)(o.Z,{error:(0,n.SU)(V).errors.permissions},null,8,["error"])])])]),(0,n._)("div",S,[(0,n._)("button",{type:"submit",ref:"submitButton",class:"btn btn-success me-2",disabled:(0,n.SU)(V).processing,"data-kt-indicator":(0,n.SU)(V).processing?"on":"off"},U,8,h),(0,n.Wm)(Z,{href:t.route("roles.index"),class:"btn btn-secondary"},{default:(0,n.w5)((function(){return[(0,n.Uk)("Cancel")]})),_:1},8,["href"])])],32),x,(0,n._)("div",P,[(0,n._)("div",B,[(0,n._)("table",C,[q,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.role.permissions,(function(t){return(0,n.wg)(),(0,n.iD)("tr",{key:t.id},[(0,n._)("td",null,(0,n.zw)(t.name),1),(0,n._)("td",R,[(0,n._)("a",{onClick:(0,n.iM)((function(l){return(0,n.SU)(W)("roles.permissions.revoke",e.role.id,t.id)}),["prevent"]),class:"btn btn-icon btn-danger btn-circle btn-sm me-2","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Revoke"},A,8,D)])])})),128))])])])])])])])],64)}}})}}]);