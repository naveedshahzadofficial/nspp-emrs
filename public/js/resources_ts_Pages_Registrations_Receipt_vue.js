"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_ts_Pages_Registrations_Receipt_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Registrations/Receipt.vue?vue&type=script&lang=ts&setup=true":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Registrations/Receipt.vue?vue&type=script&lang=ts&setup=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  __name: 'Receipt',
  props: {
    patientVisit: {
      type: Object,
      required: true
    }
  },
  setup: function setup(__props, _ref) {
    var _props$patientVisit;
    var __expose = _ref.expose;
    __expose();
    var props = __props;
    var patient = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)((_props$patientVisit = props.patientVisit) === null || _props$patientVisit === void 0 ? void 0 : _props$patientVisit.patient);
    var printReceipt = function printReceipt() {
      var _kt_aside$style, _kt_header$style, _kt_toolbar$style, _kt_footer$style, _kt_wrapper$style, _kt_aside$style2, _kt_header$style2, _kt_toolbar$style2, _kt_footer$style2, _kt_wrapper$style2;
      var kt_wrapper = document.querySelector('#kt_wrapper');
      var kt_aside = document.querySelector('#kt_aside');
      var kt_header = document.querySelector('#kt_header');
      var kt_toolbar = document.querySelector('#kt_toolbar');
      var kt_footer = document.querySelector('#kt_footer');
      kt_aside === null || kt_aside === void 0 ? void 0 : (_kt_aside$style = kt_aside.style) === null || _kt_aside$style === void 0 ? void 0 : _kt_aside$style.setProperty('display', 'none');
      kt_header === null || kt_header === void 0 ? void 0 : (_kt_header$style = kt_header.style) === null || _kt_header$style === void 0 ? void 0 : _kt_header$style.setProperty('display', 'none');
      kt_toolbar === null || kt_toolbar === void 0 ? void 0 : (_kt_toolbar$style = kt_toolbar.style) === null || _kt_toolbar$style === void 0 ? void 0 : _kt_toolbar$style.setProperty('display', 'none');
      kt_footer === null || kt_footer === void 0 ? void 0 : (_kt_footer$style = kt_footer.style) === null || _kt_footer$style === void 0 ? void 0 : _kt_footer$style.setProperty('display', 'none');
      kt_wrapper === null || kt_wrapper === void 0 ? void 0 : (_kt_wrapper$style = kt_wrapper.style) === null || _kt_wrapper$style === void 0 ? void 0 : _kt_wrapper$style.setProperty('padding-top', '0');
      window.print();
      kt_aside === null || kt_aside === void 0 ? void 0 : (_kt_aside$style2 = kt_aside.style) === null || _kt_aside$style2 === void 0 ? void 0 : _kt_aside$style2.removeProperty('display');
      kt_header === null || kt_header === void 0 ? void 0 : (_kt_header$style2 = kt_header.style) === null || _kt_header$style2 === void 0 ? void 0 : _kt_header$style2.removeProperty('display');
      kt_toolbar === null || kt_toolbar === void 0 ? void 0 : (_kt_toolbar$style2 = kt_toolbar.style) === null || _kt_toolbar$style2 === void 0 ? void 0 : _kt_toolbar$style2.removeProperty('display');
      kt_footer === null || kt_footer === void 0 ? void 0 : (_kt_footer$style2 = kt_footer.style) === null || _kt_footer$style2 === void 0 ? void 0 : _kt_footer$style2.removeProperty('display');
      kt_wrapper === null || kt_wrapper === void 0 ? void 0 : (_kt_wrapper$style2 = kt_wrapper.style) === null || _kt_wrapper$style2 === void 0 ? void 0 : _kt_wrapper$style2.removeProperty('padding-top');
    };
    var __returned__ = {
      props: props,
      patient: patient,
      printReceipt: printReceipt
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Registrations/Receipt.vue?vue&type=template&id=4fd37dc0&scoped=true&ts=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Registrations/Receipt.vue?vue&type=template&id=4fd37dc0&scoped=true&ts=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-4fd37dc0"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "d-flex flex-column-fluid"
};
var _hoisted_2 = {
  id: "kt_content_container",
  "class": "container-fluid"
};
var _hoisted_3 = {
  "class": "card card-custom",
  id: "print-receipt"
};
var _hoisted_4 = {
  "class": "card-header"
};
var _hoisted_5 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-title"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "text-uppercase"
  }, "Patient Slip")], -1 /* HOISTED */);
});
var _hoisted_6 = {
  "class": "card-toolbar"
};
var _hoisted_7 = {
  "class": "flex flex-column"
};
var _hoisted_8 = {
  "class": "text-dark text-hover-primary fw-bold d-block fs-7"
};
var _hoisted_9 = {
  "class": "text-dark fw-semibold"
};
var _hoisted_10 = {
  "class": "text-dark text-hover-primary fw-bold d-block fs-7"
};
var _hoisted_11 = {
  "class": "text-dark fw-semibold"
};
var _hoisted_12 = {
  "class": "text-dark text-hover-primary fw-bold d-block fs-7"
};
var _hoisted_13 = {
  "class": "text-dark fw-semibold"
};
var _hoisted_14 = {
  "class": "card-body"
};
var _hoisted_15 = {
  "class": "d-flex align-items-center justify-content-between flex-sm-column flex-md-row"
};
var _hoisted_16 = {
  "class": "d-flex align-items-center bg-white p-4"
};
var _hoisted_17 = {
  "class": "symbol symbol-125px me-5"
};
var _hoisted_18 = ["src"];
var _hoisted_19 = {
  "class": "d-flex justify-content-start flex-column"
};
var _hoisted_20 = {
  "class": "text-dark fw-bolder text-hover-primary mb-1 fs-5"
};
var _hoisted_21 = {
  "class": "text-dark text-hover-primary fw-bold d-block fs-7"
};
var _hoisted_22 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "text-dark fw-semibold"
  }, "Gender", -1 /* HOISTED */);
});
var _hoisted_23 = {
  "class": "text-dark text-hover-primary fw-bold d-block fs-7"
};
var _hoisted_24 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "text-dark fw-semibold"
  }, "Age", -1 /* HOISTED */);
});
var _hoisted_25 = {
  "class": "text-dark text-hover-primary fw-bold d-block fs-7"
};
var _hoisted_26 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "text-dark fw-semibold"
  }, "Designation", -1 /* HOISTED */);
});
var _hoisted_27 = {
  "class": "flex-column p-4"
};
var _hoisted_28 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
    "class": "min-w-md-100px"
  }, "Vitals", -1 /* HOISTED */);
});
var _hoisted_29 = {
  "class": "text-dark text-hover-primary fw-bold d-block fs-7"
};
var _hoisted_30 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "text-dark fw-semibold"
  }, "Temp", -1 /* HOISTED */);
});
var _hoisted_31 = {
  "class": "text-dark text-hover-primary fw-bold d-block fs-7"
};
var _hoisted_32 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "text-dark fw-semibold"
  }, "BP", -1 /* HOISTED */);
});
var _hoisted_33 = {
  "class": "text-dark text-hover-primary fw-bold d-block fs-7"
};
var _hoisted_34 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "text-dark fw-semibold"
  }, "Pulse", -1 /* HOISTED */);
});
var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\" data-v-4fd37dc0><div class=\"col-md-12 col-xs-12\" data-v-4fd37dc0><div class=\"col-md-12 col-xs-12 border-frame-vitals\" data-v-4fd37dc0><h5 data-v-4fd37dc0>Presenting Complaints</h5></div><div class=\"col-md-12 col-xs-12 border-frame-vitals\" data-v-4fd37dc0><h5 data-v-4fd37dc0>Diagnosis:</h5></div><div class=\"col-md-12 col-xs-12 border-frame-vitals\" style=\"height:280px;\" data-v-4fd37dc0><img src=\"/media/logos/rx.png\" width=\"20\" height=\"20\" style=\"margin:5px;\" data-v-4fd37dc0></div><div class=\"col-md-12 col-xs-12 border-frame-vitals\" data-v-4fd37dc0><h5 data-v-4fd37dc0>Disposal:</h5></div><div class=\"col-md-12 col-xs-12 border-frame-vitals\" data-v-4fd37dc0><h5 data-v-4fd37dc0>Follow up:</h5></div></div></div><div class=\"row mt-5\" data-v-4fd37dc0><div class=\"col-md-7\" data-v-4fd37dc0><p data-v-4fd37dc0>Total Visits: 0</p><p data-v-4fd37dc0>Last Visit: 2023-07-05 8:00 PM</p><p data-v-4fd37dc0>PITB TEST / Medical Officer / CW1831551 <br data-v-4fd37dc0> Jul 05, 2023</p></div><div class=\"col-md-5 text-end mt-15\" data-v-4fd37dc0><span style=\"border-top:1px solid;\" data-v-4fd37dc0> Stamp / Signature </span></div></div>", 2);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$setup$patient, _$setup$patient2, _$setup$patient3, _$setup$patient4, _$setup$patient5, _$setup$patient5$gend, _$props$patientVisit, _$props$patientVisit2, _$props$patientVisit3, _$props$patientVisit4;
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  var _component_Toolbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Toolbar");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "Receipt Patient"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Toolbar, {
    title: "Receipt Patient",
    buttons: [{
      label: 'Print',
      link: null,
      type: 'button',
      click: $setup.printReceipt
    }, {
      label: 'Back',
      link: _ctx.route('registrations.index')
    }],
    breadcrumbs: [{
      label: 'Registrations',
      link: _ctx.route('registrations.index')
    }, {
      label: 'Receipt',
      link: null
    }]
  }, null, 8 /* PROPS */, ["buttons", "breadcrumbs"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" begin:: Content Body "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Container"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Card header"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Card title"), _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Card title"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Card toolbar"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Token No: "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.patientVisit.token_no), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Date: "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.patientVisit.date), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Time: "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.patientVisit.time), 1 /* TEXT */)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Card toolbar")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Card header"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Card body"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Avatar"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(_$setup$patient = $setup.patient) !== null && _$setup$patient !== void 0 && _$setup$patient.patient_image ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
    key: 0,
    alt: "Pic",
    src: (_$setup$patient2 = $setup.patient) === null || _$setup$patient2 === void 0 ? void 0 : _$setup$patient2.patient_image
  }, null, 8 /* PROPS */, _hoisted_18)) : (_$setup$patient3 = $setup.patient) !== null && _$setup$patient3 !== void 0 && _$setup$patient3.patient_name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 1,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["bg-light-primary text-primary", "symbol-label fw-bolder fa-10x"])
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$setup$patient4 = $setup.patient) === null || _$setup$patient4 === void 0 ? void 0 : _$setup$patient4.patient_name.charAt(0)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Avatar"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Profile Detail"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.patient.patient_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_21, [_hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(": " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$setup$patient5 = $setup.patient) === null || _$setup$patient5 === void 0 ? void 0 : (_$setup$patient5$gend = _$setup$patient5.gender) === null || _$setup$patient5$gend === void 0 ? void 0 : _$setup$patient5$gend.gender_name), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(": " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.patient.patient_age), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_25, [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(": " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.patient.designation), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Profile Detail")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_29, [_hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(": " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$props$patientVisit = $props.patientVisit) === null || _$props$patientVisit === void 0 ? void 0 : _$props$patientVisit.temperature), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_31, [_hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(": " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$props$patientVisit2 = $props.patientVisit) === null || _$props$patientVisit2 === void 0 ? void 0 : _$props$patientVisit2.bp_systolic) + "/" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$props$patientVisit3 = $props.patientVisit) === null || _$props$patientVisit3 === void 0 ? void 0 : _$props$patientVisit3.bp_diastolic), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_33, [_hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(": " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$props$patientVisit4 = $props.patientVisit) === null || _$props$patientVisit4 === void 0 ? void 0 : _$props$patientVisit4.pulse), 1 /* TEXT */)])])]), _hoisted_35]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Card body")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Container")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end:: Content Body ")], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Registrations/Receipt.vue?vue&type=style&index=0&id=4fd37dc0&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Registrations/Receipt.vue?vue&type=style&index=0&id=4fd37dc0&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n@media print {\n@page { margin: 0 15px;\n}\nbody[data-v-4fd37dc0] { margin: 1.6cm;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Registrations/Receipt.vue?vue&type=style&index=0&id=4fd37dc0&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Registrations/Receipt.vue?vue&type=style&index=0&id=4fd37dc0&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Receipt_vue_vue_type_style_index_0_id_4fd37dc0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Receipt.vue?vue&type=style&index=0&id=4fd37dc0&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Registrations/Receipt.vue?vue&type=style&index=0&id=4fd37dc0&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Receipt_vue_vue_type_style_index_0_id_4fd37dc0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Receipt_vue_vue_type_style_index_0_id_4fd37dc0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/ts/Pages/Registrations/Receipt.vue":
/*!******************************************************!*\
  !*** ./resources/ts/Pages/Registrations/Receipt.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Receipt_vue_vue_type_template_id_4fd37dc0_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Receipt.vue?vue&type=template&id=4fd37dc0&scoped=true&ts=true */ "./resources/ts/Pages/Registrations/Receipt.vue?vue&type=template&id=4fd37dc0&scoped=true&ts=true");
/* harmony import */ var _Receipt_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Receipt.vue?vue&type=script&lang=ts&setup=true */ "./resources/ts/Pages/Registrations/Receipt.vue?vue&type=script&lang=ts&setup=true");
/* harmony import */ var _Receipt_vue_vue_type_style_index_0_id_4fd37dc0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Receipt.vue?vue&type=style&index=0&id=4fd37dc0&scoped=true&lang=css */ "./resources/ts/Pages/Registrations/Receipt.vue?vue&type=style&index=0&id=4fd37dc0&scoped=true&lang=css");
/* harmony import */ var _Users_naveed_Documents_nspp_emrs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_naveed_Documents_nspp_emrs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Receipt_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Receipt_vue_vue_type_template_id_4fd37dc0_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-4fd37dc0"],['__file',"resources/ts/Pages/Registrations/Receipt.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/Pages/Registrations/Receipt.vue?vue&type=script&lang=ts&setup=true":
/*!*****************************************************************************************!*\
  !*** ./resources/ts/Pages/Registrations/Receipt.vue?vue&type=script&lang=ts&setup=true ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Receipt_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Receipt_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Receipt.vue?vue&type=script&lang=ts&setup=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Registrations/Receipt.vue?vue&type=script&lang=ts&setup=true");
 

/***/ }),

/***/ "./resources/ts/Pages/Registrations/Receipt.vue?vue&type=template&id=4fd37dc0&scoped=true&ts=true":
/*!********************************************************************************************************!*\
  !*** ./resources/ts/Pages/Registrations/Receipt.vue?vue&type=template&id=4fd37dc0&scoped=true&ts=true ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Receipt_vue_vue_type_template_id_4fd37dc0_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Receipt_vue_vue_type_template_id_4fd37dc0_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Receipt.vue?vue&type=template&id=4fd37dc0&scoped=true&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Registrations/Receipt.vue?vue&type=template&id=4fd37dc0&scoped=true&ts=true");


/***/ }),

/***/ "./resources/ts/Pages/Registrations/Receipt.vue?vue&type=style&index=0&id=4fd37dc0&scoped=true&lang=css":
/*!**************************************************************************************************************!*\
  !*** ./resources/ts/Pages/Registrations/Receipt.vue?vue&type=style&index=0&id=4fd37dc0&scoped=true&lang=css ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Receipt_vue_vue_type_style_index_0_id_4fd37dc0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Receipt.vue?vue&type=style&index=0&id=4fd37dc0&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Registrations/Receipt.vue?vue&type=style&index=0&id=4fd37dc0&scoped=true&lang=css");


/***/ })

}]);