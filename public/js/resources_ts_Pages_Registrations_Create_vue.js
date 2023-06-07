"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_ts_Pages_Registrations_Create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Components/alerts/ServerErrorMessage.vue?vue&type=script&setup=true&lang=ts":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Components/alerts/ServerErrorMessage.vue?vue&type=script&setup=true&lang=ts ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  __name: 'ServerErrorMessage',
  props: {
    error: String
  },
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var __returned__ = {};
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Registrations/Create.vue?vue&type=script&lang=ts&setup=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Registrations/Create.vue?vue&type=script&lang=ts&setup=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/vue3 */ "./node_modules/@inertiajs/vue3/dist/index.esm.js");
/* harmony import */ var _Components_alerts_ServerErrorMessage_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/alerts/ServerErrorMessage.vue */ "./resources/ts/Components/alerts/ServerErrorMessage.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  __name: 'Create',
  props: {
    patientTypes: {
      type: Object,
      required: true
    },
    genders: {
      type: Object,
      required: true
    }
  },
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var registerForm = (0,_inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm)({
      patient_type_id: '',
      patient_name: '',
      gender_id: '',
      patient_age: '',
      relationship_with_employee: '',
      designation: '',
      patient_cnic: '',
      temperature: '',
      bp_systolic: '',
      bp_diastolic: '',
      pulse: '',
      sugar: '',
      weight: '',
      height: '',
      notes: ''
    });
    var submit = function submit() {
      registerForm.post(route('registrations.store'));
    };
    var __returned__ = {
      registerForm: registerForm,
      submit: submit,
      ServerErrorMessage: _Components_alerts_ServerErrorMessage_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Components/alerts/ServerErrorMessage.vue?vue&type=template&id=c870456e&ts=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Components/alerts/ServerErrorMessage.vue?vue&type=template&id=c870456e&ts=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "fv-plugins-message-container"
};
var _hoisted_2 = {
  "class": "fv-help-block"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.error ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.error), 1 /* TEXT */)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Registrations/Create.vue?vue&type=template&id=ba6a3ab8&ts=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Registrations/Create.vue?vue&type=template&id=ba6a3ab8&ts=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "card card-custom gutter-b"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "card-title"
}, "Registration")], -1 /* HOISTED */);
var _hoisted_3 = ["onSubmit"];
var _hoisted_4 = {
  "class": "card-body"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "pb-5 pb-lg-5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "fw-bold text-dark"
}, "Patient Details")], -1 /* HOISTED */);
var _hoisted_6 = {
  "class": "mb-10"
};
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "required form-label"
}, "Type of Patient", -1 /* HOISTED */);
var _hoisted_8 = {
  "class": "d-flex"
};
var _hoisted_9 = ["value", "id"];
var _hoisted_10 = ["for"];
var _hoisted_11 = {
  "class": "mb-10 row"
};
var _hoisted_12 = {
  "class": "col-lg-4"
};
var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "required form-label"
}, "Name of Patient", -1 /* HOISTED */);
var _hoisted_14 = {
  "class": "col-lg-8"
};
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "required form-label"
}, "Gender", -1 /* HOISTED */);
var _hoisted_16 = {
  "class": "d-flex"
};
var _hoisted_17 = ["value", "id"];
var _hoisted_18 = ["for"];
var _hoisted_19 = {
  "class": "mb-10 row"
};
var _hoisted_20 = {
  "class": "col-lg-4"
};
var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "required form-label"
}, "Age", -1 /* HOISTED */);
var _hoisted_22 = {
  "class": "col-lg-4"
};
var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "required form-label"
}, "Relationship with Employee", -1 /* HOISTED */);
var _hoisted_24 = {
  "class": "col-lg-4"
};
var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "required form-label"
}, "Designation", -1 /* HOISTED */);
var _hoisted_26 = {
  "class": "mb-10 row"
};
var _hoisted_27 = {
  "class": "col-lg-4"
};
var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "required form-label"
}, "CNIC No.", -1 /* HOISTED */);
var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "separator my-10"
}, null, -1 /* HOISTED */);
var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "pb-5 pb-lg-5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "fw-bold text-dark"
}, "Vitals")], -1 /* HOISTED */);
var _hoisted_31 = {
  "class": "mb-10 row"
};
var _hoisted_32 = {
  "class": "col-lg-4"
};
var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Temperature (°F)", -1 /* HOISTED */);
var _hoisted_34 = {
  "class": "col-lg-4"
};
var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "B.P. Systolic (mmHg)", -1 /* HOISTED */);
var _hoisted_36 = {
  "class": "col-lg-4"
};
var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "B.P. Diastolic (mmHg)", -1 /* HOISTED */);
var _hoisted_38 = {
  "class": "mb-10 row"
};
var _hoisted_39 = {
  "class": "col-lg-4"
};
var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Pulse (bpm)", -1 /* HOISTED */);
var _hoisted_41 = {
  "class": "col-lg-4"
};
var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Sugar (mg/dL)", -1 /* HOISTED */);
var _hoisted_43 = {
  "class": "col-lg-4"
};
var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Weight (kg)", -1 /* HOISTED */);
var _hoisted_45 = {
  "class": "mb-10 row"
};
var _hoisted_46 = {
  "class": "col-lg-4"
};
var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Height (cm)", -1 /* HOISTED */);
var _hoisted_48 = {
  "class": "mb-10 row"
};
var _hoisted_49 = {
  "class": "col-lg-12"
};
var _hoisted_50 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Notes", -1 /* HOISTED */);
var _hoisted_51 = {
  "class": "card-footer"
};
var _hoisted_52 = ["disabled", "data-kt-indicator"];
var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "indicator-label"
}, " Submit ", -1 /* HOISTED */);
var _hoisted_54 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "indicator-progress"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Please wait... "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "spinner-border spinner-border-sm align-middle ms-2"
})], -1 /* HOISTED */);
var _hoisted_55 = [_hoisted_53, _hoisted_54];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  var _component_v_select = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-select");
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "Add Registration"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Card"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Form"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.submit, ["prevent"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.patientTypes, function (patientType) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: patientType.id,
      "class": "form-check form-check-custom form-check-sm me-10"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
        return $setup.registerForm.patient_type_id = $event;
      }),
      value: patientType.id,
      "class": "form-check-input",
      name: "patient_type_id",
      type: "radio",
      id: "patient_type_id_".concat(patientType.id)
    }, null, 8 /* PROPS */, _hoisted_9), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $setup.registerForm.patient_type_id]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
      "class": "form-check-label",
      "for": "patient_type_id_".concat(patientType.id)
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(patientType.patient_type), 9 /* TEXT, PROPS */, _hoisted_10)]);
  }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.registerForm.errors.patient_type_id
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.registerForm.patient_name = $event;
    }),
    type: "text",
    "class": "form-control form-control-sm",
    placeholder: "Patient Name"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.registerForm.patient_name]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.registerForm.errors.patient_name
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.genders, function (gender) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: gender.id,
      "class": "form-check form-check-custom form-check-sm me-10"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
        return $setup.registerForm.gender_id = $event;
      }),
      value: gender.id,
      "class": "form-check-input",
      name: "gender_id",
      type: "radio",
      id: "gender_id_".concat(gender.id)
    }, null, 8 /* PROPS */, _hoisted_17), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $setup.registerForm.gender_id]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
      "class": "form-check-label",
      "for": "gender_id_".concat(gender.id)
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(gender.gender_name), 9 /* TEXT, PROPS */, _hoisted_18)]);
  }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.registerForm.errors.gender_id
  }, null, 8 /* PROPS */, ["error"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.registerForm.patient_age = $event;
    }),
    type: "text",
    "class": "form-control form-control-sm",
    placeholder: "Patient Age"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.registerForm.patient_age]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.registerForm.errors.patient_age
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $setup.registerForm.relationship_with_employee = $event;
    }),
    type: "text",
    "class": "form-control form-control-sm",
    placeholder: "Relationship with Employee"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.registerForm.relationship_with_employee]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.registerForm.errors.relationship_with_employee
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [_hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $setup.registerForm.designation = $event;
    }),
    type: "text",
    "class": "form-control form-control-sm",
    placeholder: "Designation"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.registerForm.designation]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.registerForm.errors.designation
  }, null, 8 /* PROPS */, ["error"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $setup.registerForm.patient_cnic = $event;
    }),
    type: "text",
    "class": "form-control form-control-sm",
    placeholder: "Patient CNIC"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.registerForm.patient_cnic]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.registerForm.errors.patient_cnic
  }, null, 8 /* PROPS */, ["error"])])]), _hoisted_29, _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.registerForm.temperature,
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $setup.registerForm.temperature = $event;
    }),
    options: _ctx.range(97.0, 106.0, .1).reverse(),
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.registerForm.errors.temperature
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [_hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.registerForm.bp_systolic,
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $setup.registerForm.bp_systolic = $event;
    }),
    options: _ctx.range(40, 300, 5, 0),
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.registerForm.errors.bp_systolic
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [_hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.registerForm.bp_diastolic,
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $setup.registerForm.bp_diastolic = $event;
    }),
    options: _ctx.range(40, 300, 5, 0),
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.registerForm.errors.bp_diastolic
  }, null, 8 /* PROPS */, ["error"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [_hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.registerForm.pulse,
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $setup.registerForm.pulse = $event;
    }),
    options: _ctx.range(50, 120, 1, 0),
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.registerForm.errors.pulse
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [_hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return $setup.registerForm.sugar = $event;
    }),
    type: "text",
    "class": "form-control form-control-sm",
    placeholder: "Sugar (mg/dL)"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.registerForm.sugar]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.registerForm.errors.sugar
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [_hoisted_44, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.registerForm.weight,
    "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
      return $setup.registerForm.weight = $event;
    }),
    options: _ctx.range(1.0, 200.0, .1),
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.registerForm.errors.weight
  }, null, 8 /* PROPS */, ["error"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [_hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
      return $setup.registerForm.height = $event;
    }),
    type: "text",
    "class": "form-control form-control-sm",
    placeholder: "Height (cm)"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.registerForm.height]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.registerForm.errors.height
  }, null, 8 /* PROPS */, ["error"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [_hoisted_50, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
      return $setup.registerForm.notes = $event;
    }),
    "class": "form-control form-control-sm",
    rows: "4"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.registerForm.notes]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.registerForm.errors.notes
  }, null, 8 /* PROPS */, ["error"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    ref: "submitButton",
    "class": "btn btn-primary me-2",
    disabled: $setup.registerForm.processing,
    "data-kt-indicator": $setup.registerForm.processing ? 'on' : 'off'
  }, _hoisted_55, 8 /* PROPS */, _hoisted_52), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.route('registrations.index'),
    "class": "btn btn-secondary"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Cancel")];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["href"])])], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_3), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Form")])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./resources/ts/Components/alerts/ServerErrorMessage.vue":
/*!***************************************************************!*\
  !*** ./resources/ts/Components/alerts/ServerErrorMessage.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ServerErrorMessage_vue_vue_type_template_id_c870456e_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServerErrorMessage.vue?vue&type=template&id=c870456e&ts=true */ "./resources/ts/Components/alerts/ServerErrorMessage.vue?vue&type=template&id=c870456e&ts=true");
/* harmony import */ var _ServerErrorMessage_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ServerErrorMessage.vue?vue&type=script&setup=true&lang=ts */ "./resources/ts/Components/alerts/ServerErrorMessage.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _home_naveed_sites_nspp_emrs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_naveed_sites_nspp_emrs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ServerErrorMessage_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ServerErrorMessage_vue_vue_type_template_id_c870456e_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/Components/alerts/ServerErrorMessage.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/Pages/Registrations/Create.vue":
/*!*****************************************************!*\
  !*** ./resources/ts/Pages/Registrations/Create.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_ba6a3ab8_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=ba6a3ab8&ts=true */ "./resources/ts/Pages/Registrations/Create.vue?vue&type=template&id=ba6a3ab8&ts=true");
/* harmony import */ var _Create_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=ts&setup=true */ "./resources/ts/Pages/Registrations/Create.vue?vue&type=script&lang=ts&setup=true");
/* harmony import */ var _home_naveed_sites_nspp_emrs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_naveed_sites_nspp_emrs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Create_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Create_vue_vue_type_template_id_ba6a3ab8_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/Pages/Registrations/Create.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/Components/alerts/ServerErrorMessage.vue?vue&type=script&setup=true&lang=ts":
/*!**************************************************************************************************!*\
  !*** ./resources/ts/Components/alerts/ServerErrorMessage.vue?vue&type=script&setup=true&lang=ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ServerErrorMessage_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ServerErrorMessage_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ServerErrorMessage.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Components/alerts/ServerErrorMessage.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./resources/ts/Pages/Registrations/Create.vue?vue&type=script&lang=ts&setup=true":
/*!****************************************************************************************!*\
  !*** ./resources/ts/Pages/Registrations/Create.vue?vue&type=script&lang=ts&setup=true ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=script&lang=ts&setup=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Registrations/Create.vue?vue&type=script&lang=ts&setup=true");
 

/***/ }),

/***/ "./resources/ts/Components/alerts/ServerErrorMessage.vue?vue&type=template&id=c870456e&ts=true":
/*!*****************************************************************************************************!*\
  !*** ./resources/ts/Components/alerts/ServerErrorMessage.vue?vue&type=template&id=c870456e&ts=true ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ServerErrorMessage_vue_vue_type_template_id_c870456e_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ServerErrorMessage_vue_vue_type_template_id_c870456e_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ServerErrorMessage.vue?vue&type=template&id=c870456e&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Components/alerts/ServerErrorMessage.vue?vue&type=template&id=c870456e&ts=true");


/***/ }),

/***/ "./resources/ts/Pages/Registrations/Create.vue?vue&type=template&id=ba6a3ab8&ts=true":
/*!*******************************************************************************************!*\
  !*** ./resources/ts/Pages/Registrations/Create.vue?vue&type=template&id=ba6a3ab8&ts=true ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_template_id_ba6a3ab8_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_template_id_ba6a3ab8_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=template&id=ba6a3ab8&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Registrations/Create.vue?vue&type=template&id=ba6a3ab8&ts=true");


/***/ })

}]);