"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[448],{8706:(e,l,r)=>{r.d(l,{Z:()=>s});var o=r(821),t={key:0,class:"fv-plugins-message-container"},a={class:"fv-help-block"};const s=(0,o.aZ)({__name:"ServerErrorMessage",props:{error:String},setup:function(e){return function(l,r){return e.error?((0,o.wg)(),(0,o.iD)("div",t,[(0,o._)("div",a,[(0,o._)("span",null,(0,o.zw)(e.error),1)])])):(0,o.kq)("",!0)}}})},587:(e,l,r)=>{r.r(l),r.d(l,{default:()=>ae});var o=r(821),t=r(8748),a=r(8706),s={class:"card card-custom gutter-b"},n=(0,o._)("div",{class:"card-header"},[(0,o._)("h3",{class:"card-title"},"Registration")],-1),i=["onSubmit"],c={class:"card-body"},d=(0,o._)("div",{class:"pb-5 pb-lg-5"},[(0,o._)("h2",{class:"fw-bold text-dark"},"Patient Details")],-1),u={class:"mb-10"},m=(0,o._)("label",{class:"required form-label"},"Type of Patient",-1),p={class:"d-flex"},_=["value","id"],f=["for"],g={class:"mb-10 row"},b={class:"col-lg-4"},U=(0,o._)("label",{class:"required form-label"},"Name of Patient",-1),S={class:"col-lg-8"},h=(0,o._)("label",{class:"required form-label"},"Gender",-1),v={class:"d-flex"},y=["value","id"],w=["for"],k={class:"mb-10 row"},V={class:"col-lg-4"},W=(0,o._)("label",{class:"required form-label"},"Age",-1),Z={class:"col-lg-4"},P=(0,o._)("label",{class:"required form-label"},"Relationship with Employee",-1),x={class:"col-lg-4"},q=(0,o._)("label",{class:"required form-label"},"Designation",-1),D={class:"mb-10 row"},C={class:"col-lg-4"},H=(0,o._)("label",{class:"required form-label"},"CNIC No.",-1),N=(0,o._)("div",{class:"separator my-10"},null,-1),R=(0,o._)("div",{class:"pb-5 pb-lg-5"},[(0,o._)("h2",{class:"fw-bold text-dark"},"Vitals")],-1),T={class:"mb-10 row"},z={class:"col-lg-4"},A=(0,o._)("label",{class:"form-label"},"Temperature (°F)",-1),B={class:"col-lg-4"},E=(0,o._)("label",{class:"form-label"},"B.P. Systolic (mmHg)",-1),G={class:"col-lg-4"},I=(0,o._)("label",{class:"form-label"},"B.P. Diastolic (mmHg)",-1),L={class:"mb-10 row"},Y={class:"col-lg-4"},j=(0,o._)("label",{class:"form-label"},"Pulse (bpm)",-1),K={class:"col-lg-4"},M=(0,o._)("label",{class:"form-label"},"Sugar (mg/dL)",-1),O={class:"col-lg-4"},F=(0,o._)("label",{class:"form-label"},"Weight (kg)",-1),J={class:"mb-10 row"},Q={class:"col-lg-4"},X=(0,o._)("label",{class:"form-label"},"Height (cm)",-1),$={class:"mb-10 row"},ee={class:"col-lg-12"},le=(0,o._)("label",{class:"form-label"},"Notes",-1),re={class:"card-footer"},oe=["disabled","data-kt-indicator"],te=[(0,o._)("span",{class:"indicator-label"}," Submit ",-1),(0,o._)("span",{class:"indicator-progress"},[(0,o.Uk)(" Please wait... "),(0,o._)("span",{class:"spinner-border spinner-border-sm align-middle ms-2"})],-1)];const ae=(0,o.aZ)({__name:"Create",props:{patientTypes:{type:Object,required:!0},genders:{type:Object,required:!0}},setup:function(e){var l=(0,t.cI)({patient_type_id:"",patient_name:"",gender_id:"",patient_age:"",relationship_with_employee:"",designation:"",patient_cnic:"",temperature:"",bp_systolic:"",bp_diastolic:"",pulse:"",sugar:"",weight:"",height:"",notes:""}),r=function(){l.post(route("registrations.store"))};return function(t,ae){var se=(0,o.up)("Head"),ne=(0,o.up)("v-select"),ie=(0,o.up)("Link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(se,{title:"Add Registration"}),(0,o._)("div",s,[n,(0,o._)("form",{onSubmit:(0,o.iM)(r,["prevent"])},[(0,o._)("div",c,[d,(0,o._)("div",u,[m,(0,o._)("div",p,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.patientTypes,(function(e){return(0,o.wg)(),(0,o.iD)("div",{key:e.id,class:"form-check form-check-custom form-check-sm me-10"},[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":ae[0]||(ae[0]=function(e){return(0,o.SU)(l).patient_type_id=e}),value:e.id,class:"form-check-input",name:"patient_type_id",type:"radio",id:"patient_type_id_".concat(e.id)},null,8,_),[[o.G2,(0,o.SU)(l).patient_type_id]]),(0,o._)("label",{class:"form-check-label",for:"patient_type_id_".concat(e.id)},(0,o.zw)(e.patient_type),9,f)])})),128))]),(0,o.Wm)(a.Z,{error:(0,o.SU)(l).errors.patient_type_id},null,8,["error"])]),(0,o._)("div",g,[(0,o._)("div",b,[U,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":ae[1]||(ae[1]=function(e){return(0,o.SU)(l).patient_name=e}),type:"text",class:"form-control form-control-sm",placeholder:"Patient Name"},null,512),[[o.nr,(0,o.SU)(l).patient_name]]),(0,o.Wm)(a.Z,{error:(0,o.SU)(l).errors.patient_name},null,8,["error"])]),(0,o._)("div",S,[h,(0,o._)("div",v,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.genders,(function(e){return(0,o.wg)(),(0,o.iD)("div",{key:e.id,class:"form-check form-check-custom form-check-sm me-10"},[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":ae[2]||(ae[2]=function(e){return(0,o.SU)(l).gender_id=e}),value:e.id,class:"form-check-input",name:"gender_id",type:"radio",id:"gender_id_".concat(e.id)},null,8,y),[[o.G2,(0,o.SU)(l).gender_id]]),(0,o._)("label",{class:"form-check-label",for:"gender_id_".concat(e.id)},(0,o.zw)(e.gender_name),9,w)])})),128))]),(0,o.Wm)(a.Z,{error:(0,o.SU)(l).errors.gender_id},null,8,["error"])])]),(0,o._)("div",k,[(0,o._)("div",V,[W,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":ae[3]||(ae[3]=function(e){return(0,o.SU)(l).patient_age=e}),type:"text",class:"form-control form-control-sm",placeholder:"Patient Age"},null,512),[[o.nr,(0,o.SU)(l).patient_age]]),(0,o.Wm)(a.Z,{error:(0,o.SU)(l).errors.patient_age},null,8,["error"])]),(0,o._)("div",Z,[P,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":ae[4]||(ae[4]=function(e){return(0,o.SU)(l).relationship_with_employee=e}),type:"text",class:"form-control form-control-sm",placeholder:"Relationship with Employee"},null,512),[[o.nr,(0,o.SU)(l).relationship_with_employee]]),(0,o.Wm)(a.Z,{error:(0,o.SU)(l).errors.relationship_with_employee},null,8,["error"])]),(0,o._)("div",x,[q,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":ae[5]||(ae[5]=function(e){return(0,o.SU)(l).designation=e}),type:"text",class:"form-control form-control-sm",placeholder:"Designation"},null,512),[[o.nr,(0,o.SU)(l).designation]]),(0,o.Wm)(a.Z,{error:(0,o.SU)(l).errors.designation},null,8,["error"])])]),(0,o._)("div",D,[(0,o._)("div",C,[H,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":ae[6]||(ae[6]=function(e){return(0,o.SU)(l).patient_cnic=e}),type:"text",class:"form-control form-control-sm",placeholder:"Patient CNIC"},null,512),[[o.nr,(0,o.SU)(l).patient_cnic]]),(0,o.Wm)(a.Z,{error:(0,o.SU)(l).errors.patient_cnic},null,8,["error"])])]),N,R,(0,o._)("div",T,[(0,o._)("div",z,[A,(0,o.Wm)(ne,{modelValue:(0,o.SU)(l).temperature,"onUpdate:modelValue":ae[7]||(ae[7]=function(e){return(0,o.SU)(l).temperature=e}),options:t.range(97,106,.1).reverse(),class:"v-select-custom",placeholder:"Please Select"},null,8,["modelValue","options"]),(0,o.Wm)(a.Z,{error:(0,o.SU)(l).errors.temperature},null,8,["error"])]),(0,o._)("div",B,[E,(0,o.Wm)(ne,{modelValue:(0,o.SU)(l).bp_systolic,"onUpdate:modelValue":ae[8]||(ae[8]=function(e){return(0,o.SU)(l).bp_systolic=e}),options:t.range(40,300,5,0),class:"v-select-custom",placeholder:"Please Select"},null,8,["modelValue","options"]),(0,o.Wm)(a.Z,{error:(0,o.SU)(l).errors.bp_systolic},null,8,["error"])]),(0,o._)("div",G,[I,(0,o.Wm)(ne,{modelValue:(0,o.SU)(l).bp_diastolic,"onUpdate:modelValue":ae[9]||(ae[9]=function(e){return(0,o.SU)(l).bp_diastolic=e}),options:t.range(40,300,5,0),class:"v-select-custom",placeholder:"Please Select"},null,8,["modelValue","options"]),(0,o.Wm)(a.Z,{error:(0,o.SU)(l).errors.bp_diastolic},null,8,["error"])])]),(0,o._)("div",L,[(0,o._)("div",Y,[j,(0,o.Wm)(ne,{modelValue:(0,o.SU)(l).pulse,"onUpdate:modelValue":ae[10]||(ae[10]=function(e){return(0,o.SU)(l).pulse=e}),options:t.range(50,120,1,0),class:"v-select-custom",placeholder:"Please Select"},null,8,["modelValue","options"]),(0,o.Wm)(a.Z,{error:(0,o.SU)(l).errors.pulse},null,8,["error"])]),(0,o._)("div",K,[M,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":ae[11]||(ae[11]=function(e){return(0,o.SU)(l).sugar=e}),type:"text",class:"form-control form-control-sm",placeholder:"Sugar (mg/dL)"},null,512),[[o.nr,(0,o.SU)(l).sugar]]),(0,o.Wm)(a.Z,{error:(0,o.SU)(l).errors.sugar},null,8,["error"])]),(0,o._)("div",O,[F,(0,o.Wm)(ne,{modelValue:(0,o.SU)(l).weight,"onUpdate:modelValue":ae[12]||(ae[12]=function(e){return(0,o.SU)(l).weight=e}),options:t.range(1,200,.1),class:"v-select-custom",placeholder:"Please Select"},null,8,["modelValue","options"]),(0,o.Wm)(a.Z,{error:(0,o.SU)(l).errors.weight},null,8,["error"])])]),(0,o._)("div",J,[(0,o._)("div",Q,[X,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":ae[13]||(ae[13]=function(e){return(0,o.SU)(l).height=e}),type:"text",class:"form-control form-control-sm",placeholder:"Height (cm)"},null,512),[[o.nr,(0,o.SU)(l).height]]),(0,o.Wm)(a.Z,{error:(0,o.SU)(l).errors.height},null,8,["error"])])]),(0,o._)("div",$,[(0,o._)("div",ee,[le,(0,o.wy)((0,o._)("textarea",{"onUpdate:modelValue":ae[14]||(ae[14]=function(e){return(0,o.SU)(l).notes=e}),class:"form-control form-control-sm",rows:"4"},null,512),[[o.nr,(0,o.SU)(l).notes]]),(0,o.Wm)(a.Z,{error:(0,o.SU)(l).errors.notes},null,8,["error"])])])]),(0,o._)("div",re,[(0,o._)("button",{type:"submit",ref:"submitButton",class:"btn btn-primary me-2",disabled:(0,o.SU)(l).processing,"data-kt-indicator":(0,o.SU)(l).processing?"on":"off"},te,8,oe),(0,o.Wm)(ie,{href:t.route("registrations.index"),class:"btn btn-secondary"},{default:(0,o.w5)((function(){return[(0,o.Uk)("Cancel")]})),_:1},8,["href"])])],40,i)])],64)}}})}}]);