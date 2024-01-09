"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_ts_Pages_Registrations_Create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Components/alerts/AlertMessage.vue?vue&type=script&setup=true&lang=ts":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Components/alerts/AlertMessage.vue?vue&type=script&setup=true&lang=ts ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  __name: 'AlertMessage',
  props: {
    title: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    }
  },
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var props = __props;
    var iconUrl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      switch (props.title) {
        case 'Success':
          iconUrl.value = '/media/icons/duotune/general/gen048.svg';
          break;
        case 'Error':
          iconUrl.value = '/media/icons/duotune/general/gen050.svg';
          break;
        case 'Warning':
          iconUrl.value = '/media/icons/duotune/general/gen044.svg';
          break;
        case 'Info':
          iconUrl.value = '/media/icons/duotune/general/gen045.svg';
          break;
      }
    });
    var __returned__ = {
      props: props,
      iconUrl: iconUrl
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
}));

/***/ }),

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
/* harmony import */ var _Components_alerts_AlertMessage_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/alerts/AlertMessage.vue */ "./resources/ts/Components/alerts/AlertMessage.vue");





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
    },
    heightUnits: {
      type: Array,
      required: true
    },
    patients: Object,
    employees: Object,
    participants: Object,
    filters: Object
  },
  setup: function setup(__props, _ref) {
    var _props$filters, _props$filters2, _props$filters3;
    var __expose = _ref.expose;
    __expose();
    var props = __props;
    var filterPatients = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return props.patients;
    });
    var form = (0,_inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm)({
      employee: "",
      participant: "",
      patient_id: "",
      patient_type_id: "",
      patient_name: "",
      gender_id: "",
      patient_age: "",
      relationship_with_employee: "",
      designation: "",
      patient_cnic: "",
      patient_email: "",
      patient_phone: "",
      temperature: "",
      bp_systolic: "",
      bp_diastolic: "",
      pulse: "",
      sugar: "",
      weight: "",
      height: "",
      height_unit: "",
      notes: ""
    });
    var searchForm = (0,_inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm)({
      mobile_no: (_props$filters = props.filters) === null || _props$filters === void 0 ? void 0 : _props$filters.mobile_no,
      cnic_no: (_props$filters2 = props.filters) === null || _props$filters2 === void 0 ? void 0 : _props$filters2.cnic_no,
      patient_name: (_props$filters3 = props.filters) === null || _props$filters3 === void 0 ? void 0 : _props$filters3.patient_name
    });
    var fillForm = function fillForm(patient) {
      form.patient_id = patient === null || patient === void 0 ? void 0 : patient.id;
      form.patient_type_id = patient === null || patient === void 0 ? void 0 : patient.patient_type_id;
      form.patient_name = patient === null || patient === void 0 ? void 0 : patient.patient_name;
      form.gender_id = patient === null || patient === void 0 ? void 0 : patient.gender_id;
      form.patient_age = patient === null || patient === void 0 ? void 0 : patient.patient_age;
      form.relationship_with_employee = patient === null || patient === void 0 ? void 0 : patient.relationship_with_employee;
      form.designation = patient === null || patient === void 0 ? void 0 : patient.designation;
      form.patient_cnic = patient === null || patient === void 0 ? void 0 : patient.patient_cnic;
      form.patient_phone = patient === null || patient === void 0 ? void 0 : patient.patient_phone;
      form.patient_email = patient === null || patient === void 0 ? void 0 : patient.patient_email;
      form.employee = patient === null || patient === void 0 ? void 0 : patient.patient_employee;
      form.participant = patient === null || patient === void 0 ? void 0 : patient.patient_participant;
    };
    var resetForm = function resetForm() {
      form.employee = "";
      form.participant = "";
      form.patient_id = "";
      form.patient_type_id = "";
      form.patient_name = "";
      form.gender_id = "";
      form.patient_age = "";
      form.relationship_with_employee = "";
      form.designation = "";
      form.patient_cnic = "";
      form.patient_phone = "";
      form.patient_email = "";
    };
    var resetSearchForm = function resetSearchForm() {
      searchForm.mobile_no = "";
      searchForm.cnic_no = "";
      searchForm.patient_name = "";
      _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__.router.get(route("registrations.create"), searchForm.data(), {
        preserveScroll: true,
        replace: true
      });
    };
    var onEmployeeSelected = function onEmployeeSelected(employee) {
      var _props$genders;
      form.participant = "";
      if (parseInt(form.patient_type_id) === 3) return;
      var gender = (_props$genders = props.genders) === null || _props$genders === void 0 ? void 0 : _props$genders.find(function (gender) {
        return gender.gender_name === (employee === null || employee === void 0 ? void 0 : employee.gender);
      });
      form.patient_name = employee === null || employee === void 0 ? void 0 : employee.officer_name;
      form.gender_id = gender === null || gender === void 0 ? void 0 : gender.id;
      form.patient_age = employee === null || employee === void 0 ? void 0 : employee.age;
      form.designation = employee === null || employee === void 0 ? void 0 : employee.designation;
      form.patient_cnic = employee === null || employee === void 0 ? void 0 : employee.cnic;
      form.patient_phone = employee === null || employee === void 0 ? void 0 : employee.offical_contact;
      form.patient_email = employee === null || employee === void 0 ? void 0 : employee.offical_email;
    };
    var onParticipantSelected = function onParticipantSelected(participant) {
      var _props$genders2;
      var gender = (_props$genders2 = props.genders) === null || _props$genders2 === void 0 ? void 0 : _props$genders2.find(function (gender) {
        return gender.gender_name === (participant === null || participant === void 0 ? void 0 : participant.participant_gender);
      });
      form.patient_name = participant === null || participant === void 0 ? void 0 : participant.participant_name;
      form.gender_id = gender === null || gender === void 0 ? void 0 : gender.id;
      form.patient_age = participant === null || participant === void 0 ? void 0 : participant.age;
      form.designation = participant === null || participant === void 0 ? void 0 : participant.participant_designation;
      form.patient_cnic = participant === null || participant === void 0 ? void 0 : participant.participant_cnic;
      form.patient_phone = participant === null || participant === void 0 ? void 0 : participant.participant_mobile;
      form.patient_email = participant === null || participant === void 0 ? void 0 : participant.participant_email;
      form.employee = "";
    };
    var __returned__ = {
      props: props,
      filterPatients: filterPatients,
      form: form,
      searchForm: searchForm,
      fillForm: fillForm,
      resetForm: resetForm,
      resetSearchForm: resetSearchForm,
      onEmployeeSelected: onEmployeeSelected,
      onParticipantSelected: onParticipantSelected,
      ServerErrorMessage: _Components_alerts_ServerErrorMessage_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
      AlertMessage: _Components_alerts_AlertMessage_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Components/alerts/AlertMessage.vue?vue&type=template&id=340fdb52&ts=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Components/alerts/AlertMessage.vue?vue&type=template&id=340fdb52&ts=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "d-flex flex-column"
};
var _hoisted_2 = ["textContent"];
var _hoisted_3 = ["textContent"];
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto",
  "data-bs-dismiss": "alert"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-x fs-1 text-black"
})], -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_inline_svg = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("inline-svg");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'alert-success': $props.title === 'Success',
      'alert-danger': $props.title === 'Error',
      'alert-warning': $props.title === 'Warning',
      'alert-info': $props.title === 'Info'
    }, "alert alert-success alert-dismissible d-flex align-items-center p-5"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["svg-icon svg-icon-2hx me-4", {
      'svg-icon-success': $props.title === 'Success',
      'svg-icon-danger': $props.title === 'Error',
      'svg-icon-warning': $props.title === 'Warning',
      'svg-icon-info': $props.title === 'Info'
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inline_svg, {
    src: $setup.iconUrl
  }, null, 8 /* PROPS */, ["src"])], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Content"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["mb-2", {
      'text-success': $props.title === 'Success',
      'text-danger': $props.title === 'Error',
      'text-warning': $props.title === 'Warning',
      'text-info': $props.title === 'Info'
    }]),
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title)
  }, null, 10 /* CLASS, PROPS */, _hoisted_2), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.message)
  }, null, 8 /* PROPS */, _hoisted_3)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Content"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Close"), _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Close")], 2 /* CLASS */);
}

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
  "class": "d-flex flex-column-fluid"
};
var _hoisted_2 = {
  id: "kt_content_container",
  "class": "container-fluid"
};
var _hoisted_3 = {
  "class": "card card-custom gutter-b"
};
var _hoisted_4 = {
  "class": "card-body"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mb-5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "fw-bold text-dark"
}, "Search")], -1 /* HOISTED */);
var _hoisted_6 = {
  "class": "row mb-10"
};
var _hoisted_7 = {
  "class": "col-lg-3"
};
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Mobile No.", -1 /* HOISTED */);
var _hoisted_9 = {
  "class": "col-lg-3"
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "CNIC No.", -1 /* HOISTED */);
var _hoisted_11 = {
  "class": "col-lg-3"
};
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Patient Name", -1 /* HOISTED */);
var _hoisted_13 = {
  "class": "col-lg-3"
};
var _hoisted_14 = ["disabled", "data-kt-indicator"];
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "indicator-label"
}, " Search ", -1 /* HOISTED */);
var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "indicator-progress"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Please wait... "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "spinner-border spinner-border-sm align-middle"
})], -1 /* HOISTED */);
var _hoisted_17 = [_hoisted_15, _hoisted_16];
var _hoisted_18 = {
  key: 0,
  "class": "table-responsive"
};
var _hoisted_19 = {
  "class": "table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
};
var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "fw-semibold fs-6 text-gray-800"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Patient Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Mobile No"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "CNIC No"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center w-200px"
}, "Action")])], -1 /* HOISTED */);
var _hoisted_21 = {
  "class": "text-center"
};
var _hoisted_22 = ["onClick"];
var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-fill"
}, null, -1 /* HOISTED */);
var _hoisted_24 = [_hoisted_23];
var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-undo"
}, null, -1 /* HOISTED */);
var _hoisted_26 = [_hoisted_25];
var _hoisted_27 = {
  "class": "card-body"
};
var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "pb-5 pb-lg-5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "fw-bold text-dark"
}, "Patient Details")], -1 /* HOISTED */);
var _hoisted_29 = {
  "class": "mb-10"
};
var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "required form-label"
}, "Type of Patient", -1 /* HOISTED */);
var _hoisted_31 = {
  "class": "d-flex"
};
var _hoisted_32 = ["value", "id"];
var _hoisted_33 = ["for"];
var _hoisted_34 = {
  key: 0,
  "class": "mb-10 row"
};
var _hoisted_35 = {
  key: 0,
  "class": "col-lg-4"
};
var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "required form-label"
}, "Employees", -1 /* HOISTED */);
var _hoisted_37 = {
  key: 1,
  "class": "col-lg-4"
};
var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "required form-label"
}, "Participants", -1 /* HOISTED */);
var _hoisted_39 = {
  "class": "mb-10 row"
};
var _hoisted_40 = {
  "class": "col-lg-4"
};
var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "required form-label"
}, "Name of Patient", -1 /* HOISTED */);
var _hoisted_42 = {
  "class": "col-lg-8"
};
var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "required form-label"
}, "Gender", -1 /* HOISTED */);
var _hoisted_44 = {
  "class": "d-flex"
};
var _hoisted_45 = ["value", "id"];
var _hoisted_46 = ["for"];
var _hoisted_47 = {
  "class": "mb-10 row"
};
var _hoisted_48 = {
  "class": "col-lg-4"
};
var _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "required form-label"
}, "Age", -1 /* HOISTED */);
var _hoisted_50 = {
  "class": "col-lg-4"
};
var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Relationship with Employee", -1 /* HOISTED */);
var _hoisted_52 = {
  "class": "col-lg-4"
};
var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "required form-label"
}, "Designation", -1 /* HOISTED */);
var _hoisted_54 = {
  "class": "mb-10 row"
};
var _hoisted_55 = {
  "class": "col-lg-4"
};
var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "required form-label"
}, "Mobile No.", -1 /* HOISTED */);
var _hoisted_57 = {
  "class": "col-lg-4"
};
var _hoisted_58 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "required form-label"
}, "CNIC No.", -1 /* HOISTED */);
var _hoisted_59 = {
  "class": "col-lg-4"
};
var _hoisted_60 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Email", -1 /* HOISTED */);
var _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "separator my-10"
}, null, -1 /* HOISTED */);
var _hoisted_62 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "pb-5 pb-lg-5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "fw-bold text-dark"
}, "Vitals")], -1 /* HOISTED */);
var _hoisted_63 = {
  "class": "mb-10 row"
};
var _hoisted_64 = {
  "class": "col-lg-4"
};
var _hoisted_65 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Temperature (°F)", -1 /* HOISTED */);
var _hoisted_66 = {
  "class": "col-lg-4"
};
var _hoisted_67 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "B.P. Systolic (mmHg)", -1 /* HOISTED */);
var _hoisted_68 = {
  "class": "col-lg-4"
};
var _hoisted_69 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "B.P. Diastolic (mmHg)", -1 /* HOISTED */);
var _hoisted_70 = {
  "class": "mb-10 row"
};
var _hoisted_71 = {
  "class": "col-lg-4"
};
var _hoisted_72 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Pulse (bpm)", -1 /* HOISTED */);
var _hoisted_73 = {
  "class": "col-lg-4"
};
var _hoisted_74 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Sugar (mg/dL)", -1 /* HOISTED */);
var _hoisted_75 = {
  "class": "col-lg-4"
};
var _hoisted_76 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Weight (kg)", -1 /* HOISTED */);
var _hoisted_77 = {
  "class": "mb-10 row"
};
var _hoisted_78 = {
  "class": "col-lg-4"
};
var _hoisted_79 = {
  "class": "row"
};
var _hoisted_80 = {
  "class": "col-lg-6"
};
var _hoisted_81 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Height", -1 /* HOISTED */);
var _hoisted_82 = {
  "class": "col-lg-6 ps-0"
};
var _hoisted_83 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, " ", -1 /* HOISTED */);
var _hoisted_84 = {
  "class": "mb-10 row"
};
var _hoisted_85 = {
  "class": "col-lg-12"
};
var _hoisted_86 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Notes", -1 /* HOISTED */);
var _hoisted_87 = {
  "class": "card-footer"
};
var _hoisted_88 = ["disabled", "data-kt-indicator"];
var _hoisted_89 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "indicator-label"
}, " Submit ", -1 /* HOISTED */);
var _hoisted_90 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "indicator-progress"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Please wait... "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "spinner-border spinner-border-sm align-middle ms-2"
})], -1 /* HOISTED */);
var _hoisted_91 = [_hoisted_89, _hoisted_90];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$setup$filterPatient;
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  var _component_Toolbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Toolbar");
  var _component_v_select = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-select");
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "Add Registration"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Toolbar, {
    title: "Add Registration",
    buttons: [{
      label: 'Back',
      link: _ctx.route('registrations.index')
    }],
    breadcrumbs: [{
      label: 'Registrations',
      link: _ctx.route('registrations.index')
    }, {
      label: 'Add',
      link: null
    }]
  }, null, 8 /* PROPS */, ["buttons", "breadcrumbs"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" begin:: Content Body "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Container"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Card"), _ctx.$page.props.flash.title ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["AlertMessage"], {
    key: 0,
    title: _ctx.$page.props.flash.title,
    message: _ctx.$page.props.flash.message
  }, null, 8 /* PROPS */, ["title", "message"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $setup.searchForm.get(_ctx.route('registrations.create'), {
        preserveScroll: true,
        replace: true
      });
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.searchForm.mobile_no = $event;
    }),
    type: "text",
    "class": "form-control form-control-sm",
    placeholder: "Mobile No."
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.searchForm.mobile_no]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.searchForm.cnic_no = $event;
    }),
    type: "text",
    "class": "form-control form-control-sm",
    placeholder: "CNIC No."
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.searchForm.cnic_no]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.searchForm.patient_name = $event;
    }),
    type: "text",
    "class": "form-control form-control-sm",
    placeholder: "Patient Name"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.searchForm.patient_name]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    "class": "btn btn-primary btn-sm mt-8",
    disabled: $setup.searchForm.processing,
    "data-kt-indicator": $setup.searchForm.processing ? 'on' : 'off'
  }, _hoisted_17, 8 /* PROPS */, _hoisted_14), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $setup.resetSearchForm();
    }, ["prevent"])),
    "class": "btn btn-secondary btn-sm mt-8 ms-2"
  }, "Reset")])])], 32 /* HYDRATE_EVENTS */), (_$setup$filterPatient = $setup.filterPatients) !== null && _$setup$filterPatient !== void 0 && _$setup$filterPatient.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Table head"), _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.filterPatients, function (patient) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: patient.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(patient.patient_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(patient.patient_phone), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(patient.patient_cnic), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_21, [!$setup.form.patient_id || $setup.form.patient_id !== patient.id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: 0,
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $setup.fillForm(patient);
      }, ["prevent"]),
      "class": "btn btn-icon btn-primary btn-circle btn-sm me-2",
      "data-bs-toggle": "tooltip",
      "data-bs-placement": "top",
      title: "Use this Patient"
    }, _hoisted_24, 8 /* PROPS */, _hoisted_22)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.form.patient_id === patient.id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: 1,
      onClick: _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $setup.resetForm();
      }, ["prevent"])),
      "class": "btn btn-icon btn-warning btn-circle btn-sm me-2",
      "data-bs-toggle": "tooltip",
      "data-bs-placement": "top",
      title: "Reset Patient"
    }, _hoisted_26)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]);
  }), 128 /* KEYED_FRAGMENT */))])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Form"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[26] || (_cache[26] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $setup.form.post(_ctx.route('registrations.store'));
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [_hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.patientTypes, function (patientType) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: patientType.id,
      "class": "form-check form-check-custom form-check-sm me-10"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
        return $setup.form.patient_type_id = $event;
      }),
      value: patientType.id,
      "class": "form-check-input",
      name: "patient_type_id",
      type: "radio",
      id: "patient_type_id_".concat(patientType.id)
    }, null, 8 /* PROPS */, _hoisted_32), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $setup.form.patient_type_id]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
      "class": "form-check-label",
      "for": "patient_type_id_".concat(patientType.id)
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(patientType.type_name), 9 /* TEXT, PROPS */, _hoisted_33)]);
  }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.form.errors.patient_type_id
  }, null, 8 /* PROPS */, ["error"])]), parseInt($setup.form.patient_type_id) === 1 || parseInt($setup.form.patient_type_id) === 2 || parseInt($setup.form.patient_type_id) === 3 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_34, [parseInt($setup.form.patient_type_id) === 1 || parseInt($setup.form.patient_type_id) === 3 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_35, [_hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    label: "officer_name",
    modelValue: $setup.form.employee,
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $setup.form.employee = $event;
    }),
    options: $props.employees,
    reduce: function reduce(option) {
      return option;
    },
    "class": "v-select-custom",
    placeholder: "Please Select",
    "onOption:selected": $setup.onEmployeeSelected
  }, null, 8 /* PROPS */, ["modelValue", "options", "reduce"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.form.errors.employee
  }, null, 8 /* PROPS */, ["error"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), parseInt($setup.form.patient_type_id) === 2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_37, [_hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    label: "participant_name",
    modelValue: $setup.form.participant,
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $setup.form.participant = $event;
    }),
    options: $props.participants,
    reduce: function reduce(option) {
      return option;
    },
    "class": "v-select-custom",
    placeholder: "Please Select",
    "onOption:selected": $setup.onParticipantSelected
  }, null, 8 /* PROPS */, ["modelValue", "options", "reduce"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.form.errors.participant
  }, null, 8 /* PROPS */, ["error"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [_hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $setup.form.patient_name = $event;
    }),
    type: "text",
    "class": "form-control form-control-sm",
    placeholder: "Patient Name"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.patient_name]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.form.errors.patient_name
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [_hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.genders, function (gender) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: gender.id,
      "class": "form-check form-check-custom form-check-sm me-10"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
        return $setup.form.gender_id = $event;
      }),
      value: gender.id,
      "class": "form-check-input",
      name: "gender_id",
      type: "radio",
      id: "gender_id_".concat(gender.id)
    }, null, 8 /* PROPS */, _hoisted_45), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $setup.form.gender_id]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
      "class": "form-check-label",
      "for": "gender_id_".concat(gender.id)
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(gender.gender_name), 9 /* TEXT, PROPS */, _hoisted_46)]);
  }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.form.errors.gender_id
  }, null, 8 /* PROPS */, ["error"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [_hoisted_49, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return $setup.form.patient_age = $event;
    }),
    type: "text",
    "class": "form-control form-control-sm",
    placeholder: "Patient Age"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.patient_age]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.form.errors.patient_age
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [_hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
      return $setup.form.relationship_with_employee = $event;
    }),
    type: "text",
    "class": "form-control form-control-sm",
    placeholder: "Relationship with Employee"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.relationship_with_employee]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.form.errors.relationship_with_employee
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, [_hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
      return $setup.form.designation = $event;
    }),
    type: "text",
    "class": "form-control form-control-sm",
    placeholder: "Designation"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.designation]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.form.errors.designation
  }, null, 8 /* PROPS */, ["error"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [_hoisted_56, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
      return $setup.form.patient_phone = $event;
    }),
    type: "text",
    "class": "form-control form-control-sm",
    placeholder: "Patient Mobile"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.patient_phone]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.form.errors.patient_phone
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [_hoisted_58, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
      return $setup.form.patient_cnic = $event;
    }),
    type: "text",
    "class": "form-control form-control-sm",
    placeholder: "Patient CNIC"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.patient_cnic]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.form.errors.patient_cnic
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_59, [_hoisted_60, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
      return $setup.form.patient_email = $event;
    }),
    type: "email",
    "class": "form-control form-control-sm",
    placeholder: "Patient Email"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.patient_email]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.form.errors.patient_email
  }, null, 8 /* PROPS */, ["error"])])]), _hoisted_61, _hoisted_62, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_64, [_hoisted_65, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.form.temperature,
    "onUpdate:modelValue": _cache[17] || (_cache[17] = function ($event) {
      return $setup.form.temperature = $event;
    }),
    options: _ctx.range(97.0, 106.0, 0.1).reverse(),
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.form.errors.temperature
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_66, [_hoisted_67, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.form.bp_systolic,
    "onUpdate:modelValue": _cache[18] || (_cache[18] = function ($event) {
      return $setup.form.bp_systolic = $event;
    }),
    options: _ctx.range(40, 300, 5, 0),
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.form.errors.bp_systolic
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_68, [_hoisted_69, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.form.bp_diastolic,
    "onUpdate:modelValue": _cache[19] || (_cache[19] = function ($event) {
      return $setup.form.bp_diastolic = $event;
    }),
    options: _ctx.range(40, 300, 5, 0),
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.form.errors.bp_diastolic
  }, null, 8 /* PROPS */, ["error"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_70, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_71, [_hoisted_72, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.form.pulse,
    "onUpdate:modelValue": _cache[20] || (_cache[20] = function ($event) {
      return $setup.form.pulse = $event;
    }),
    options: _ctx.range(50, 120, 1, 0),
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.form.errors.pulse
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_73, [_hoisted_74, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[21] || (_cache[21] = function ($event) {
      return $setup.form.sugar = $event;
    }),
    type: "text",
    "class": "form-control form-control-sm",
    placeholder: "Sugar (mg/dL)"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.sugar]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.form.errors.sugar
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_75, [_hoisted_76, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.form.weight,
    "onUpdate:modelValue": _cache[22] || (_cache[22] = function ($event) {
      return $setup.form.weight = $event;
    }),
    options: _ctx.range(1.0, 200.0, 0.1),
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.form.errors.weight
  }, null, 8 /* PROPS */, ["error"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_77, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_78, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_79, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_80, [_hoisted_81, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[23] || (_cache[23] = function ($event) {
      return $setup.form.height = $event;
    }),
    type: "text",
    "class": "form-control form-control-sm",
    placeholder: "Height"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.height]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.form.errors.height
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_82, [_hoisted_83, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.form.height_unit,
    "onUpdate:modelValue": _cache[24] || (_cache[24] = function ($event) {
      return $setup.form.height_unit = $event;
    }),
    options: $props.heightUnits,
    "class": "v-select-custom",
    placeholder: "Unit"
  }, null, 8 /* PROPS */, ["modelValue", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.form.errors.height_unit
  }, null, 8 /* PROPS */, ["error"])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_84, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_85, [_hoisted_86, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[25] || (_cache[25] = function ($event) {
      return $setup.form.notes = $event;
    }),
    "class": "form-control form-control-sm",
    rows: "4"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.notes]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.form.errors.notes
  }, null, 8 /* PROPS */, ["error"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_87, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    ref: "submitButton",
    "class": "btn btn-success me-2",
    disabled: $setup.form.processing,
    "data-kt-indicator": $setup.form.processing ? 'on' : 'off'
  }, _hoisted_91, 8 /* PROPS */, _hoisted_88), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.route('registrations.index'),
    "class": "btn btn-secondary"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Cancel")];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["href"])])], 32 /* HYDRATE_EVENTS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Form")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Container")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end:: Content Body ")], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./resources/ts/Components/alerts/AlertMessage.vue":
/*!*********************************************************!*\
  !*** ./resources/ts/Components/alerts/AlertMessage.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AlertMessage_vue_vue_type_template_id_340fdb52_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlertMessage.vue?vue&type=template&id=340fdb52&ts=true */ "./resources/ts/Components/alerts/AlertMessage.vue?vue&type=template&id=340fdb52&ts=true");
/* harmony import */ var _AlertMessage_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlertMessage.vue?vue&type=script&setup=true&lang=ts */ "./resources/ts/Components/alerts/AlertMessage.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var C_laragon_www_nspp_emrs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_nspp_emrs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AlertMessage_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AlertMessage_vue_vue_type_template_id_340fdb52_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/Components/alerts/AlertMessage.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

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
/* harmony import */ var C_laragon_www_nspp_emrs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_nspp_emrs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ServerErrorMessage_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ServerErrorMessage_vue_vue_type_template_id_c870456e_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/Components/alerts/ServerErrorMessage.vue"]])
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
/* harmony import */ var C_laragon_www_nspp_emrs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_nspp_emrs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Create_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Create_vue_vue_type_template_id_ba6a3ab8_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/Pages/Registrations/Create.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/Components/alerts/AlertMessage.vue?vue&type=script&setup=true&lang=ts":
/*!********************************************************************************************!*\
  !*** ./resources/ts/Components/alerts/AlertMessage.vue?vue&type=script&setup=true&lang=ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AlertMessage_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AlertMessage_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AlertMessage.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Components/alerts/AlertMessage.vue?vue&type=script&setup=true&lang=ts");
 

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

/***/ "./resources/ts/Components/alerts/AlertMessage.vue?vue&type=template&id=340fdb52&ts=true":
/*!***********************************************************************************************!*\
  !*** ./resources/ts/Components/alerts/AlertMessage.vue?vue&type=template&id=340fdb52&ts=true ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AlertMessage_vue_vue_type_template_id_340fdb52_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AlertMessage_vue_vue_type_template_id_340fdb52_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AlertMessage.vue?vue&type=template&id=340fdb52&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Components/alerts/AlertMessage.vue?vue&type=template&id=340fdb52&ts=true");


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