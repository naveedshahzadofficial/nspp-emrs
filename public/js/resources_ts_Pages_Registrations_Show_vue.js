"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_ts_Pages_Registrations_Show_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Registrations/Show.vue?vue&type=script&setup=true&lang=ts":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Registrations/Show.vue?vue&type=script&setup=true&lang=ts ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _Components_alerts_ServerErrorMessage_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/alerts/ServerErrorMessage.vue */ "./resources/ts/Components/alerts/ServerErrorMessage.vue");
/* harmony import */ var _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/vue3 */ "./node_modules/@inertiajs/vue3/dist/index.esm.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  __name: 'Show',
  props: {
    patient: {
      type: Object,
      required: true
    },
    patientVisit: {
      type: Object,
      required: true
    },
    complaints: {
      type: Array,
      required: true
    },
    diseases: {
      type: Array,
      required: true
    },
    diseaseTypes: {
      type: Array,
      required: true
    },
    procedures: {
      type: Array,
      required: true
    },
    riskFactors: {
      type: Array,
      required: true
    },
    medicines: {
      type: Array,
      required: true
    },
    routes: {
      type: Array,
      required: true
    },
    frequencies: {
      type: Array,
      required: true
    }
  },
  setup: function setup(__props, _ref) {
    var _props$patientVisit, _props$patientVisit2, _props$patientVisit3, _props$patientVisit4, _props$patientVisit5, _props$patientVisit6, _props$patientVisit7, _props$patientVisit8;
    var __expose = _ref.expose;
    __expose();
    var props = __props;
    var filterDiseases = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
    var filterProcedures = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
    var filterMedicines = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
    var filterOtherMedicines = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
    var medicineOption = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
    var optionsTakenMeals = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(["Before Meal", "After Meal", "During Meal"]);
    var optionsAcquireFrom = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(["In-House", "External"]);
    var diagForm = (0,_inertiajs_vue3__WEBPACK_IMPORTED_MODULE_2__.useForm)({
      disease_type_id: null,
      disease_id: null,
      procedure_id: null
    });
    var medicineForm = (0,_inertiajs_vue3__WEBPACK_IMPORTED_MODULE_2__.useForm)({
      medicine_id: null,
      medicine_type_id: null,
      medicine_type: null,
      route_id: 1,
      dosage: null,
      frequency_id: null,
      duration_unit: "Days",
      duration_value: 1,
      qty: 1,
      taken_meal: null,
      medicine_instructions: null,
      acquire_from: null
    });
    var otherMedicineForm = (0,_inertiajs_vue3__WEBPACK_IMPORTED_MODULE_2__.useForm)({
      medicine_id: null,
      qty: null,
      medicine_instructions: null
    });
    var preForm = (0,_inertiajs_vue3__WEBPACK_IMPORTED_MODULE_2__.useForm)({
      vital: {
        temperature: (_props$patientVisit = props.patientVisit) === null || _props$patientVisit === void 0 ? void 0 : _props$patientVisit.temperature,
        bp_systolic: (_props$patientVisit2 = props.patientVisit) === null || _props$patientVisit2 === void 0 ? void 0 : _props$patientVisit2.bp_systolic,
        bp_diastolic: (_props$patientVisit3 = props.patientVisit) === null || _props$patientVisit3 === void 0 ? void 0 : _props$patientVisit3.bp_diastolic,
        pulse: (_props$patientVisit4 = props.patientVisit) === null || _props$patientVisit4 === void 0 ? void 0 : _props$patientVisit4.pulse,
        sugar: (_props$patientVisit5 = props.patientVisit) === null || _props$patientVisit5 === void 0 ? void 0 : _props$patientVisit5.sugar,
        weight: (_props$patientVisit6 = props.patientVisit) === null || _props$patientVisit6 === void 0 ? void 0 : _props$patientVisit6.weight,
        height: (_props$patientVisit7 = props.patientVisit) === null || _props$patientVisit7 === void 0 ? void 0 : _props$patientVisit7.height,
        notes: (_props$patientVisit8 = props.patientVisit) === null || _props$patientVisit8 === void 0 ? void 0 : _props$patientVisit8.notes
      },
      risk_factor_ids: [],
      risk_factor_notes: '',
      complaint_ids: [],
      complaint_notes: '',
      disease_ids: [],
      disease_notes: '',
      diagnoses: [],
      diagnosis_advise: '',
      patient_medicines: [],
      patient_other_medicines: []
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      var _props$medicines, _props$medicines2;
      filterMedicines.value = (_props$medicines = props.medicines) === null || _props$medicines === void 0 ? void 0 : _props$medicines.filter(function (medicine) {
        return medicine.medicine_category_id === 1;
      });
      filterOtherMedicines.value = (_props$medicines2 = props.medicines) === null || _props$medicines2 === void 0 ? void 0 : _props$medicines2.filter(function (medicine) {
        return medicine.medicine_category_id !== 1;
      });
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(function () {
      return diagForm.disease_type_id;
    }, function (value) {
      var _props$diseases, _props$procedures;
      diagForm.reset("disease_id", "procedure_id");
      filterDiseases.value = (_props$diseases = props.diseases) === null || _props$diseases === void 0 ? void 0 : _props$diseases.filter(function (disease) {
        return disease.disease_type_id === value;
      });
      filterProcedures.value = (_props$procedures = props.procedures) === null || _props$procedures === void 0 ? void 0 : _props$procedures.filter(function (procedure) {
        return procedure.disease_type_id === value;
      });
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(function () {
      return medicineOption.value;
    }, function (option) {
      medicineForm.reset();
      if (option !== null && option !== void 0 && option.id) {
        var _option$medicine_type;
        medicineForm.medicine_id = option.id;
        medicineForm.medicine_type_id = option.medicine_type_id;
        medicineForm.medicine_type = (_option$medicine_type = option.medicine_type) === null || _option$medicine_type === void 0 ? void 0 : _option$medicine_type.type_name;
      } else {
        medicineForm.medicine_id = null;
        medicineForm.medicine_type_id = null;
        medicineForm.medicine_type = null;
      }
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(function () {
      return [medicineForm.dosage, medicineForm.frequency_id, medicineForm.duration_value];
    }, function (_ref2) {
      var _medicineOption$value, _medicineOption$value2;
      var _ref3 = _slicedToArray(_ref2, 3),
        dosage = _ref3[0],
        frequency_id = _ref3[1],
        duration_value = _ref3[2];
      var total = 1;
      var isMultiply = (_medicineOption$value = medicineOption.value) === null || _medicineOption$value === void 0 ? void 0 : (_medicineOption$value2 = _medicineOption$value.medicine_type) === null || _medicineOption$value2 === void 0 ? void 0 : _medicineOption$value2.is_multiply;
      if (isMultiply) {
        var _dosage = medicineForm.dosage || 1;
        var multiplyFactor = 1;
        if (frequency_id !== null) {
          var _props$frequencies;
          var frequency = (_props$frequencies = props.frequencies) === null || _props$frequencies === void 0 ? void 0 : _props$frequencies.find(function (freq) {
            return freq.id === frequency_id;
          });
          multiplyFactor = (frequency === null || frequency === void 0 ? void 0 : frequency.multiply_factor) || 1;
        }
        total = Math.ceil(eval(String(_dosage)) * multiplyFactor * (duration_value || 1));
      }
      medicineForm.qty = total;
    });
    var addDiagnosis = function addDiagnosis() {
      diagForm.clearErrors();
      var row = diagForm.data();
      if (row.disease_type_id === null) {
        diagForm.setError("disease_type_id", "Category is required.");
      }
      if (row.disease_id === null) {
        diagForm.setError("disease_id", "Diagnosis is required.");
      }
      if (row.disease_type_id === null || row.disease_id === null) return;
      preForm.diagnoses.push(diagForm.data());
      diagForm.reset();
    };
    var deleteDiagnosis = function deleteDiagnosis(dig) {
      preForm.diagnoses = preForm.diagnoses.filter(function (obj) {
        return obj !== dig;
      });
    };
    var getDiseaseTypeName = function getDiseaseTypeName(id) {
      var _props$diseaseTypes, _props$diseaseTypes$f;
      return (_props$diseaseTypes = props.diseaseTypes) === null || _props$diseaseTypes === void 0 ? void 0 : (_props$diseaseTypes$f = _props$diseaseTypes.find(function (diseaseType) {
        return diseaseType.id === id;
      })) === null || _props$diseaseTypes$f === void 0 ? void 0 : _props$diseaseTypes$f.type_name;
    };
    var getDiseaseName = function getDiseaseName(id) {
      var _props$diseases$find;
      return (_props$diseases$find = props.diseases.find(function (disease) {
        return disease.id === id;
      })) === null || _props$diseases$find === void 0 ? void 0 : _props$diseases$find.disease_name;
    };
    var getProcedureName = function getProcedureName(id) {
      var _props$procedures$fin;
      return ((_props$procedures$fin = props.procedures.find(function (procedure) {
        return procedure.id === id;
      })) === null || _props$procedures$fin === void 0 ? void 0 : _props$procedures$fin.procedure_name) || 'Not Available';
    };
    var addMedicine = function addMedicine() {
      medicineForm.clearErrors();
      var row = medicineForm.data();
      if (row.medicine_id === null) medicineForm.setError("medicine_id", "Medicine is required.");
      if (row.route_id === null) medicineForm.setError("route_id", "Route is required.");
      if (row.acquire_from === null) medicineForm.setError("acquire_from", "Acquire From is required.");
      if (row.medicine_id === null || row.route_id === null || row.acquire_from === null) return;
      preForm.patient_medicines.push(medicineForm.data());
      medicineOption.value = null;
      medicineForm.reset();
    };
    var deleteMedicine = function deleteMedicine(pmed) {
      return preForm.patient_medicines = preForm.patient_medicines.filter(function (obj) {
        return obj !== pmed;
      });
    };
    var getMedicineName = function getMedicineName(id) {
      var _props$medicines3, _props$medicines3$fin;
      return (_props$medicines3 = props.medicines) === null || _props$medicines3 === void 0 ? void 0 : (_props$medicines3$fin = _props$medicines3.find(function (medicine) {
        return medicine.id === id;
      })) === null || _props$medicines3$fin === void 0 ? void 0 : _props$medicines3$fin.medicine_name;
    };
    var getRouteName = function getRouteName(id) {
      var _props$routes, _props$routes$find;
      return (_props$routes = props.routes) === null || _props$routes === void 0 ? void 0 : (_props$routes$find = _props$routes.find(function (route) {
        return route.id === id;
      })) === null || _props$routes$find === void 0 ? void 0 : _props$routes$find.route_name;
    };
    var getFrequencyName = function getFrequencyName(id) {
      var _props$frequencies2, _props$frequencies2$f;
      return (_props$frequencies2 = props.frequencies) === null || _props$frequencies2 === void 0 ? void 0 : (_props$frequencies2$f = _props$frequencies2.find(function (frequency) {
        return frequency.id === id;
      })) === null || _props$frequencies2$f === void 0 ? void 0 : _props$frequencies2$f.frequency_name;
    };
    var addOtherMedicine = function addOtherMedicine() {
      otherMedicineForm.clearErrors();
      var row = otherMedicineForm.data();
      if (row.medicine_id === null) otherMedicineForm.setError("medicine_id", "Medicine is required.");
      if (row.qty === null) otherMedicineForm.setError("qty", "Qty is required.");
      if (row.medicine_id === null || row.qty === null) return;
      preForm.patient_other_medicines.push(otherMedicineForm.data());
      otherMedicineForm.reset();
    };
    var deleteOtherMedicine = function deleteOtherMedicine(pmed) {
      return preForm.patient_other_medicines = preForm.patient_other_medicines.filter(function (obj) {
        return obj !== pmed;
      });
    };
    var __returned__ = {
      props: props,
      filterDiseases: filterDiseases,
      filterProcedures: filterProcedures,
      filterMedicines: filterMedicines,
      filterOtherMedicines: filterOtherMedicines,
      medicineOption: medicineOption,
      optionsTakenMeals: optionsTakenMeals,
      optionsAcquireFrom: optionsAcquireFrom,
      get diagForm() {
        return diagForm;
      },
      set diagForm(v) {
        diagForm = v;
      },
      get medicineForm() {
        return medicineForm;
      },
      set medicineForm(v) {
        medicineForm = v;
      },
      get otherMedicineForm() {
        return otherMedicineForm;
      },
      set otherMedicineForm(v) {
        otherMedicineForm = v;
      },
      get preForm() {
        return preForm;
      },
      set preForm(v) {
        preForm = v;
      },
      addDiagnosis: addDiagnosis,
      deleteDiagnosis: deleteDiagnosis,
      getDiseaseTypeName: getDiseaseTypeName,
      getDiseaseName: getDiseaseName,
      getProcedureName: getProcedureName,
      addMedicine: addMedicine,
      deleteMedicine: deleteMedicine,
      getMedicineName: getMedicineName,
      getRouteName: getRouteName,
      getFrequencyName: getFrequencyName,
      addOtherMedicine: addOtherMedicine,
      deleteOtherMedicine: deleteOtherMedicine,
      ServerErrorMessage: _Components_alerts_ServerErrorMessage_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Registrations/Show.vue?vue&type=template&id=35143825&ts=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Registrations/Show.vue?vue&type=template&id=35143825&ts=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "card"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Card title"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-title"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Page title"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "kt_page_title",
  "data-kt-swapper": "true",
  "data-kt-swapper-mode": "prepend",
  "data-kt-swapper-parent": "{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}",
  "class": "page-title d-flex flex-column justify-content-center flex-wrap me-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Title"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "d-flex align-items-center text-dark fw-bolder my-1 fs-3"
}, " Prescription "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Title")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Page title")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Card title")], -1 /* HOISTED */);
var _hoisted_3 = {
  "class": "card-body pt-0 position-relative"
};
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<ul class=\"nav nav-tabs nav-line-tabs mb-5 fs-5\"><li class=\"nav-item\"><a class=\"nav-link active\" data-bs-toggle=\"tab\" href=\"#kt_tab_pane_1\">Vitals</a></li><li class=\"nav-item\"><a class=\"nav-link\" data-bs-toggle=\"tab\" href=\"#kt_tab_pane_2\">Risk Factors</a></li><li class=\"nav-item\"><a class=\"nav-link\" data-bs-toggle=\"tab\" href=\"#kt_tab_pane_3\">Presenting Complaints</a></li><li class=\"nav-item\"><a class=\"nav-link\" data-bs-toggle=\"tab\" href=\"#kt_tab_pane_4\">Diagnosis</a></li><li class=\"nav-item\"><a class=\"nav-link\" data-bs-toggle=\"tab\" href=\"#kt_tab_pane_5\">Medicine Prescription</a></li><li class=\"nav-item\"><a class=\"nav-link\" data-bs-toggle=\"tab\" href=\"#kt_tab_pane_6\">Referrals</a></li></ul>", 1);
var _hoisted_5 = {
  "class": "card bg-secondary"
};
var _hoisted_6 = {
  "class": "card-body"
};
var _hoisted_7 = {
  "class": "d-flex"
};
var _hoisted_8 = {
  "class": "d-flex align-items-center bg-white p-4"
};
var _hoisted_9 = {
  "class": "symbol symbol-125px me-5"
};
var _hoisted_10 = ["src"];
var _hoisted_11 = {
  "class": "d-flex justify-content-start flex-column"
};
var _hoisted_12 = {
  href: "#",
  "class": "text-dark fw-bolder text-hover-primary mb-1 fs-6"
};
var _hoisted_13 = {
  href: "#",
  "class": "text-muted text-hover-primary fw-bold text-muted d-block fs-7"
};
var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-dark"
}, "Designation", -1 /* HOISTED */);
var _hoisted_15 = {
  href: "#",
  "class": "text-muted text-hover-primary fw-bold text-muted d-block fs-7"
};
var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-dark"
}, "Age", -1 /* HOISTED */);
var _hoisted_17 = {
  "class": "flex-grow-1 align-items-center flex-column p-4"
};
var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, " Vitals  ", -1 /* HOISTED */);
var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "separator border-primary my-2"
}, null, -1 /* HOISTED */);
var _hoisted_20 = {
  "class": "list-group list-group-horizontal"
};
var _hoisted_21 = {
  "class": "list-group-item m-1"
};
var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Pulse: ", -1 /* HOISTED */);
var _hoisted_23 = {
  "class": "list-group-item m-1"
};
var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Temp: ", -1 /* HOISTED */);
var _hoisted_25 = {
  "class": "list-group-item m-1"
};
var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "BP: ", -1 /* HOISTED */);
var _hoisted_27 = {
  "class": "list-group-item m-1"
};
var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Height (cm): ", -1 /* HOISTED */);
var _hoisted_29 = {
  "class": "list-group-item m-1"
};
var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Weight (kg): ", -1 /* HOISTED */);
var _hoisted_31 = {
  "class": "tab-content"
};
var _hoisted_32 = {
  "class": "tab-pane fade show active",
  id: "kt_tab_pane_1",
  role: "tabpanel"
};
var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading mt-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "Vitals")], -1 /* HOISTED */);
var _hoisted_34 = {
  "class": "section_box"
};
var _hoisted_35 = {
  "class": "mb-10 row"
};
var _hoisted_36 = {
  "class": "col-lg-4"
};
var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Temperature (°F)", -1 /* HOISTED */);
var _hoisted_38 = {
  "class": "col-lg-4"
};
var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "B.P. Systolic (mmHg)", -1 /* HOISTED */);
var _hoisted_40 = {
  "class": "col-lg-4"
};
var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "B.P. Diastolic (mmHg)", -1 /* HOISTED */);
var _hoisted_42 = {
  "class": "mb-10 row"
};
var _hoisted_43 = {
  "class": "col-lg-4"
};
var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Pulse (bpm)", -1 /* HOISTED */);
var _hoisted_45 = {
  "class": "col-lg-4"
};
var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Sugar (mg/dL)", -1 /* HOISTED */);
var _hoisted_47 = {
  "class": "col-lg-4"
};
var _hoisted_48 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Weight (kg)", -1 /* HOISTED */);
var _hoisted_49 = {
  "class": "mb-10 row"
};
var _hoisted_50 = {
  "class": "col-lg-4"
};
var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Height (cm)", -1 /* HOISTED */);
var _hoisted_52 = {
  "class": "mb-10 row"
};
var _hoisted_53 = {
  "class": "col-lg-12"
};
var _hoisted_54 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Notes", -1 /* HOISTED */);
var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "History")], -1 /* HOISTED */);
var _hoisted_56 = {
  "class": "section_box"
};
var _hoisted_57 = {
  "class": "table-responsive"
};
var _hoisted_58 = {
  "class": "table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
};
var _hoisted_59 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "fw-semibold fs-6 text-gray-800"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, "Vital Date"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, "Pulse"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, "Temperature"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, "BP"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, "Height"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, "Weight")])], -1 /* HOISTED */);
var _hoisted_60 = {
  "class": "text-center"
};
var _hoisted_61 = {
  "class": "text-center"
};
var _hoisted_62 = {
  "class": "text-center"
};
var _hoisted_63 = {
  "class": "text-center"
};
var _hoisted_64 = {
  "class": "text-center"
};
var _hoisted_65 = {
  "class": "text-center"
};
var _hoisted_66 = {
  "class": "tab-pane fade",
  id: "kt_tab_pane_2",
  role: "tabpanel"
};
var _hoisted_67 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading mt-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "Risk Factors")], -1 /* HOISTED */);
var _hoisted_68 = {
  "class": "section_box"
};
var _hoisted_69 = {
  "class": "mb-10 row"
};
var _hoisted_70 = {
  "class": "col-lg-4"
};
var _hoisted_71 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Risk Factors", -1 /* HOISTED */);
var _hoisted_72 = {
  "class": "col-lg-8"
};
var _hoisted_73 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Notes", -1 /* HOISTED */);
var _hoisted_74 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "History")], -1 /* HOISTED */);
var _hoisted_75 = {
  "class": "section_box"
};
var _hoisted_76 = {
  "class": "table-responsive"
};
var _hoisted_77 = {
  "class": "table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
};
var _hoisted_78 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "fw-semibold fs-6 text-gray-800"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, "Date"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, "Risk Factor"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, "Notes")])], -1 /* HOISTED */);
var _hoisted_79 = {
  "class": "text-center"
};
var _hoisted_80 = {
  "class": "text-center"
};
var _hoisted_81 = {
  "class": "text-left"
};
var _hoisted_82 = {
  "class": "tab-pane fade",
  id: "kt_tab_pane_3",
  role: "tabpanel"
};
var _hoisted_83 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading mt-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "Presenting Complaints")], -1 /* HOISTED */);
var _hoisted_84 = {
  "class": "section_box"
};
var _hoisted_85 = {
  "class": "mb-10 row"
};
var _hoisted_86 = {
  "class": "col-lg-4"
};
var _hoisted_87 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Complaints", -1 /* HOISTED */);
var _hoisted_88 = {
  "class": "col-lg-8"
};
var _hoisted_89 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Complaint Notes", -1 /* HOISTED */);
var _hoisted_90 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading mt-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "Disease")], -1 /* HOISTED */);
var _hoisted_91 = {
  "class": "section_box"
};
var _hoisted_92 = {
  "class": "mb-10 row"
};
var _hoisted_93 = {
  "class": "col-lg-4"
};
var _hoisted_94 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Diseases", -1 /* HOISTED */);
var _hoisted_95 = {
  "class": "col-lg-8"
};
var _hoisted_96 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Disease Notes", -1 /* HOISTED */);
var _hoisted_97 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "Complaint History")], -1 /* HOISTED */);
var _hoisted_98 = {
  "class": "section_box"
};
var _hoisted_99 = {
  "class": "table-responsive"
};
var _hoisted_100 = {
  "class": "table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
};
var _hoisted_101 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "fw-semibold fs-6 text-gray-800"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, "Date"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, "Complaint"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, "Complaint Notes")])], -1 /* HOISTED */);
var _hoisted_102 = {
  "class": "text-center"
};
var _hoisted_103 = {
  "class": "text-center"
};
var _hoisted_104 = {
  "class": "text-left"
};
var _hoisted_105 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "Disease History")], -1 /* HOISTED */);
var _hoisted_106 = {
  "class": "section_box"
};
var _hoisted_107 = {
  "class": "table-responsive"
};
var _hoisted_108 = {
  "class": "table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
};
var _hoisted_109 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "fw-semibold fs-6 text-gray-800"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, "Date"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, "Disease"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, "Disease Notes")])], -1 /* HOISTED */);
var _hoisted_110 = {
  "class": "text-center"
};
var _hoisted_111 = {
  "class": "text-center"
};
var _hoisted_112 = {
  "class": "text-left"
};
var _hoisted_113 = {
  "class": "tab-pane fade",
  id: "kt_tab_pane_4",
  role: "tabpanel"
};
var _hoisted_114 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading mt-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "Preliminary Diagnosis")], -1 /* HOISTED */);
var _hoisted_115 = {
  "class": "section_box"
};
var _hoisted_116 = {
  "class": "mb-10 row"
};
var _hoisted_117 = {
  "class": "col-lg-3"
};
var _hoisted_118 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label required"
}, "Category", -1 /* HOISTED */);
var _hoisted_119 = {
  "class": "col-lg-3"
};
var _hoisted_120 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label required"
}, "Diagnosis", -1 /* HOISTED */);
var _hoisted_121 = {
  key: 0,
  "class": "col-lg-3"
};
var _hoisted_122 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Procedure", -1 /* HOISTED */);
var _hoisted_123 = {
  "class": "col-lg-3"
};
var _hoisted_124 = ["onClick"];
var _hoisted_125 = {
  "class": "mb-10 row"
};
var _hoisted_126 = {
  "class": "table-responsive"
};
var _hoisted_127 = {
  "class": "table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
};
var _hoisted_128 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "fw-semibold fs-6 text-gray-800"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, "Category"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, "Diagnosis"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, "Procedure"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, "Action")])], -1 /* HOISTED */);
var _hoisted_129 = {
  "class": "text-center"
};
var _hoisted_130 = {
  "class": "text-center"
};
var _hoisted_131 = {
  "class": "text-center"
};
var _hoisted_132 = {
  "class": "text-center"
};
var _hoisted_133 = ["onClick"];
var _hoisted_134 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "las la-trash fs-1"
}, null, -1 /* HOISTED */);
var _hoisted_135 = [_hoisted_134];
var _hoisted_136 = {
  "class": "mb-10 row"
};
var _hoisted_137 = {
  "class": "col-lg-12"
};
var _hoisted_138 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Advise", -1 /* HOISTED */);
var _hoisted_139 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "History")], -1 /* HOISTED */);
var _hoisted_140 = {
  "class": "section_box"
};
var _hoisted_141 = {
  "class": "table-responsive"
};
var _hoisted_142 = {
  "class": "table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
};
var _hoisted_143 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "fw-semibold fs-6 text-gray-800"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, "Date"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, "Diagnosis")])], -1 /* HOISTED */);
var _hoisted_144 = {
  "class": "text-center"
};
var _hoisted_145 = {
  "class": "text-center"
};
var _hoisted_146 = {
  "class": "tab-pane fade",
  id: "kt_tab_pane_5",
  role: "tabpanel"
};
var _hoisted_147 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading mt-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "Medicine Prescription")], -1 /* HOISTED */);
var _hoisted_148 = {
  "class": "section_box"
};
var _hoisted_149 = {
  "class": "mb-10 row"
};
var _hoisted_150 = {
  "class": "col-lg-6"
};
var _hoisted_151 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label required"
}, "Medicine", -1 /* HOISTED */);
var _hoisted_152 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "--- (0)", -1 /* HOISTED */);
var _hoisted_153 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "--- (0)", -1 /* HOISTED */);
var _hoisted_154 = {
  "class": "col-lg-2"
};
var _hoisted_155 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Dosage Form", -1 /* HOISTED */);
var _hoisted_156 = {
  "class": "col-lg-2"
};
var _hoisted_157 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Route", -1 /* HOISTED */);
var _hoisted_158 = {
  "class": "col-lg-2"
};
var _hoisted_159 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Dosage", -1 /* HOISTED */);
var _hoisted_160 = {
  "class": "mb-10 row"
};
var _hoisted_161 = {
  "class": "col-lg-4"
};
var _hoisted_162 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Frequency", -1 /* HOISTED */);
var _hoisted_163 = {
  "class": "col-lg-2"
};
var _hoisted_164 = {
  "class": "form-label"
};
var _hoisted_165 = {
  "class": "col-lg-2"
};
var _hoisted_166 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Qty", -1 /* HOISTED */);
var _hoisted_167 = {
  "class": "col-lg-4"
};
var _hoisted_168 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "To be Taken", -1 /* HOISTED */);
var _hoisted_169 = {
  "class": "d-flex"
};
var _hoisted_170 = ["onUpdate:modelValue", "value", "id"];
var _hoisted_171 = ["for"];
var _hoisted_172 = {
  "class": "mb-10 row"
};
var _hoisted_173 = {
  "class": "col-lg-8"
};
var _hoisted_174 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Instructions", -1 /* HOISTED */);
var _hoisted_175 = {
  "class": "col-lg-4"
};
var _hoisted_176 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Acquire From", -1 /* HOISTED */);
var _hoisted_177 = {
  "class": "d-flex"
};
var _hoisted_178 = ["onUpdate:modelValue", "value", "id"];
var _hoisted_179 = ["for"];
var _hoisted_180 = {
  "class": "mb-10 row"
};
var _hoisted_181 = {
  "class": "col-lg-12 text-end"
};
var _hoisted_182 = ["onClick"];
var _hoisted_183 = {
  "class": "row"
};
var _hoisted_184 = {
  "class": "table-responsive"
};
var _hoisted_185 = {
  "class": "table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
};
var _hoisted_186 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "fw-semibold fs-6 text-gray-800"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Medicine"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Route"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, " Dosage"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Frequency"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, " Duration"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, " Qty"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, " Action ")])], -1 /* HOISTED */);
var _hoisted_187 = {
  "class": "text-start"
};
var _hoisted_188 = {
  "class": "text-start"
};
var _hoisted_189 = {
  "class": "text-center"
};
var _hoisted_190 = {
  "class": "text-start"
};
var _hoisted_191 = {
  "class": "text-center"
};
var _hoisted_192 = {
  "class": "text-center"
};
var _hoisted_193 = {
  "class": "text-center"
};
var _hoisted_194 = ["onClick"];
var _hoisted_195 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "las la-trash fs-1"
}, null, -1 /* HOISTED */);
var _hoisted_196 = [_hoisted_195];
var _hoisted_197 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading mt-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "Other Items")], -1 /* HOISTED */);
var _hoisted_198 = {
  "class": "section_box"
};
var _hoisted_199 = {
  "class": "mb-10 row"
};
var _hoisted_200 = {
  "class": "col-lg-6"
};
var _hoisted_201 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label required"
}, "Name", -1 /* HOISTED */);
var _hoisted_202 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "--- (0)", -1 /* HOISTED */);
var _hoisted_203 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "--- (0)", -1 /* HOISTED */);
var _hoisted_204 = {
  "class": "col-lg-1"
};
var _hoisted_205 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Qty", -1 /* HOISTED */);
var _hoisted_206 = {
  "class": "col-lg-5"
};
var _hoisted_207 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Instructions", -1 /* HOISTED */);
var _hoisted_208 = {
  "class": "mb-10 row"
};
var _hoisted_209 = {
  "class": "col-lg-12 text-end"
};
var _hoisted_210 = ["onClick"];
var _hoisted_211 = {
  "class": "row"
};
var _hoisted_212 = {
  "class": "table-responsive"
};
var _hoisted_213 = {
  "class": "table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
};
var _hoisted_214 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "fw-semibold fs-6 text-gray-800"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Medicine"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, " Qty"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Instructions"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, " Action ")])], -1 /* HOISTED */);
var _hoisted_215 = {
  "class": "text-start"
};
var _hoisted_216 = {
  "class": "text-center"
};
var _hoisted_217 = {
  "class": "text-start"
};
var _hoisted_218 = {
  "class": "text-center"
};
var _hoisted_219 = ["onClick"];
var _hoisted_220 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "las la-trash fs-1"
}, null, -1 /* HOISTED */);
var _hoisted_221 = [_hoisted_220];
var _hoisted_222 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "History")], -1 /* HOISTED */);
var _hoisted_223 = {
  "class": "section_box"
};
var _hoisted_224 = {
  "class": "table-responsive"
};
var _hoisted_225 = {
  "class": "table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
};
var _hoisted_226 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "fw-semibold fs-6 text-gray-800"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, "Order Date"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Generic"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Route"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Dosage"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Frequency"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Days"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Instructions")])], -1 /* HOISTED */);
var _hoisted_227 = {
  "class": "text-start"
};
var _hoisted_228 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "kt_tab_pane_6",
  role: "tabpanel"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading mt-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "Referrals")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "section_box"
})], -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$props$patientVisit, _$props$patientVisit2, _$props$patientVisit3, _$props$patientVisit4, _$props$patientVisit5, _$props$patientVisit6, _$setup$preForm$error, _$setup$preForm$error2, _$setup$preForm$error3, _$setup$preForm$error4, _$setup$preForm$error5, _$setup$preForm$error6, _$setup$preForm$error7, _$setup$preForm$error8, _$props$patient, _$props$patient2, _$props$patient3, _$props$patient4, _$props$patient5, _$props$patient6;
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  var _component_v_select = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-select");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "Add Prescription"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Card header"), _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Card header"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Card body"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Header vitals"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Avatar"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [$props.patient.patient_image ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
    key: 0,
    alt: "Pic",
    src: $props.patient.patient_image
  }, null, 8 /* PROPS */, _hoisted_10)) : $props.patient.patient_name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 1,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["bg-light-primary text-primary", "symbol-label fw-bolder fa-10x"])
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.patient.patient_name.charAt(0)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Avatar"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Name"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.patient.patient_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(": " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.patient.designation), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_15, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(": " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.patient.patient_age), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Name")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_hoisted_18, _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_21, [_hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$props$patientVisit = $props.patientVisit) === null || _$props$patientVisit === void 0 ? void 0 : _$props$patientVisit.pulse), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$props$patientVisit2 = $props.patientVisit) === null || _$props$patientVisit2 === void 0 ? void 0 : _$props$patientVisit2.temperature), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_25, [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$props$patientVisit3 = $props.patientVisit) === null || _$props$patientVisit3 === void 0 ? void 0 : _$props$patientVisit3.bp_systolic) + "/" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$props$patientVisit4 = $props.patientVisit) === null || _$props$patientVisit4 === void 0 ? void 0 : _$props$patientVisit4.bp_diastolic), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_27, [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$props$patientVisit5 = $props.patientVisit) === null || _$props$patientVisit5 === void 0 ? void 0 : _$props$patientVisit5.height), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_29, [_hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$props$patientVisit6 = $props.patientVisit) === null || _$props$patientVisit6 === void 0 ? void 0 : _$props$patientVisit6.weight), 1 /* TEXT */)])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Header vitals"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [_hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.preForm.vital.temperature,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.preForm.vital.temperature = $event;
    }),
    options: _ctx.range(97.0, 106.0, .1).reverse(),
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: (_$setup$preForm$error = $setup.preForm.errors.vital) === null || _$setup$preForm$error === void 0 ? void 0 : _$setup$preForm$error.temperature
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [_hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.preForm.vital.bp_systolic,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.preForm.vital.bp_systolic = $event;
    }),
    options: _ctx.range(40, 300, 5, 0),
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: (_$setup$preForm$error2 = $setup.preForm.errors.vital) === null || _$setup$preForm$error2 === void 0 ? void 0 : _$setup$preForm$error2.bp_systolic
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [_hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.preForm.vital.bp_diastolic,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.preForm.vital.bp_diastolic = $event;
    }),
    options: _ctx.range(40, 300, 5, 0),
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: (_$setup$preForm$error3 = $setup.preForm.errors.vital) === null || _$setup$preForm$error3 === void 0 ? void 0 : _$setup$preForm$error3.bp_diastolic
  }, null, 8 /* PROPS */, ["error"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [_hoisted_44, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.preForm.vital.pulse,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.preForm.vital.pulse = $event;
    }),
    options: _ctx.range(50, 120, 1, 0),
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: (_$setup$preForm$error4 = $setup.preForm.errors.vital) === null || _$setup$preForm$error4 === void 0 ? void 0 : _$setup$preForm$error4.pulse
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [_hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $setup.preForm.vital.sugar = $event;
    }),
    type: "text",
    "class": "form-control form-control-sm",
    placeholder: "Sugar (mg/dL)"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.preForm.vital.sugar]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: (_$setup$preForm$error5 = $setup.preForm.errors.vital) === null || _$setup$preForm$error5 === void 0 ? void 0 : _$setup$preForm$error5.sugar
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [_hoisted_48, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.preForm.vital.weight,
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $setup.preForm.vital.weight = $event;
    }),
    options: _ctx.range(1.0, 200.0, .1),
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: (_$setup$preForm$error6 = $setup.preForm.errors.vital) === null || _$setup$preForm$error6 === void 0 ? void 0 : _$setup$preForm$error6.weight
  }, null, 8 /* PROPS */, ["error"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [_hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $setup.preForm.vital.height = $event;
    }),
    type: "text",
    "class": "form-control form-control-sm",
    placeholder: "Height (cm)"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.preForm.vital.height]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: (_$setup$preForm$error7 = $setup.preForm.errors.vital) === null || _$setup$preForm$error7 === void 0 ? void 0 : _$setup$preForm$error7.height
  }, null, 8 /* PROPS */, ["error"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [_hoisted_54, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $setup.preForm.vital.notes = $event;
    }),
    "class": "form-control form-control-sm",
    rows: "4"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.preForm.vital.notes]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: (_$setup$preForm$error8 = $setup.preForm.errors.vital) === null || _$setup$preForm$error8 === void 0 ? void 0 : _$setup$preForm$error8.notes
  }, null, 8 /* PROPS */, ["error"])])])]), _hoisted_55, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_56, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_58, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Table head"), _hoisted_59, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)((_$props$patient = $props.patient) === null || _$props$patient === void 0 ? void 0 : _$props$patient.patient_visits, function (history) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: history.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_60, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.created_at), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_61, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.pulse), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_62, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.temperature), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_63, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.bp_systolic) + "/" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.bp_diastolic), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_64, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.height), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_65, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.weight), 1 /* TEXT */)]);
  }), 128 /* KEYED_FRAGMENT */))])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_66, [_hoisted_67, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_68, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_69, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_70, [_hoisted_71, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.preForm.risk_factor_ids,
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $setup.preForm.risk_factor_ids = $event;
    }),
    options: $props.riskFactors,
    label: "factor_name",
    reduce: function reduce(option) {
      return option.id;
    },
    multiple: "",
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options", "reduce"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.preForm.errors.risk_factor_ids
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_72, [_hoisted_73, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $setup.preForm.risk_factor_notes = $event;
    }),
    "class": "form-control form-control-sm",
    rows: "4"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.preForm.risk_factor_notes]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.preForm.errors.risk_factor_notes
  }, null, 8 /* PROPS */, ["error"])])])]), _hoisted_74, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_75, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_76, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_77, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Table head"), _hoisted_78, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)((_$props$patient2 = $props.patient) === null || _$props$patient2 === void 0 ? void 0 : _$props$patient2.patient_risk_factors, function (history) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: history.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_79, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.created_at), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_80, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.factor_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_81, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.factor_notes), 1 /* TEXT */)]);
  }), 128 /* KEYED_FRAGMENT */))])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_82, [_hoisted_83, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_84, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_85, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_86, [_hoisted_87, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.preForm.complaint_ids,
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $setup.preForm.complaint_ids = $event;
    }),
    options: $props.complaints,
    label: "complaint_name",
    reduce: function reduce(option) {
      return option.id;
    },
    multiple: "",
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options", "reduce"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.preForm.errors.complaint_ids
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_88, [_hoisted_89, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return $setup.preForm.complaint_notes = $event;
    }),
    "class": "form-control form-control-sm",
    rows: "4"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.preForm.complaint_notes]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.preForm.errors.complaint_notes
  }, null, 8 /* PROPS */, ["error"])])])]), _hoisted_90, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_91, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_92, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_93, [_hoisted_94, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.preForm.disease_ids,
    "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
      return $setup.preForm.disease_ids = $event;
    }),
    options: $props.diseases,
    label: "disease_name",
    reduce: function reduce(option) {
      return option.id;
    },
    multiple: "",
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options", "reduce"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.preForm.errors.disease_ids
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_95, [_hoisted_96, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
      return $setup.preForm.disease_notes = $event;
    }),
    "class": "form-control form-control-sm",
    rows: "4"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.preForm.disease_notes]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.preForm.errors.disease_notes
  }, null, 8 /* PROPS */, ["error"])])])]), _hoisted_97, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_98, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_99, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_100, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Table head"), _hoisted_101, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)((_$props$patient3 = $props.patient) === null || _$props$patient3 === void 0 ? void 0 : _$props$patient3.patient_complaints, function (history) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: history.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_102, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.created_at), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_103, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.complaint_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_104, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.complaint_notes), 1 /* TEXT */)]);
  }), 128 /* KEYED_FRAGMENT */))])])])]), _hoisted_105, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_106, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_107, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_108, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Table head"), _hoisted_109, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)((_$props$patient4 = $props.patient) === null || _$props$patient4 === void 0 ? void 0 : _$props$patient4.patient_diseases, function (history) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: history.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_110, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.created_at), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_111, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.disease_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_112, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.disease_notes), 1 /* TEXT */)]);
  }), 128 /* KEYED_FRAGMENT */))])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_113, [_hoisted_114, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_115, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_116, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_117, [_hoisted_118, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.diagForm.disease_type_id,
    "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
      return $setup.diagForm.disease_type_id = $event;
    }),
    options: $props.diseaseTypes,
    label: "type_name",
    reduce: function reduce(option) {
      return option.id;
    },
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options", "reduce"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.diagForm.errors.disease_type_id
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_119, [_hoisted_120, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.diagForm.disease_id,
    "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
      return $setup.diagForm.disease_id = $event;
    }),
    options: $setup.filterDiseases,
    label: "disease_name",
    reduce: function reduce(option) {
      return option.id;
    },
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options", "reduce"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.diagForm.errors.disease_id
  }, null, 8 /* PROPS */, ["error"])]), $setup.diagForm.disease_type_id === 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_121, [_hoisted_122, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.diagForm.procedure_id,
    "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
      return $setup.diagForm.procedure_id = $event;
    }),
    options: $setup.filterProcedures,
    label: "procedure_name",
    reduce: function reduce(option) {
      return option.id;
    },
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options", "reduce"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.diagForm.errors.procedure_id
  }, null, 8 /* PROPS */, ["error"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_123, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-success btn-sm mt-7",
    onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.addDiagnosis, ["prevent"])
  }, "Save", 8 /* PROPS */, _hoisted_124)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_125, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_126, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_127, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Table head"), _hoisted_128, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.preForm.diagnoses, function (dig) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_129, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getDiseaseTypeName(dig.disease_type_id)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_130, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getDiseaseName(dig.disease_id)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_131, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getProcedureName(dig.procedure_id)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_132, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-icon btn-sm btn-danger",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $setup.deleteDiagnosis(dig);
      }, ["prevent"])
    }, _hoisted_135, 8 /* PROPS */, _hoisted_133)])]);
  }), 256 /* UNKEYED_FRAGMENT */))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_136, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_137, [_hoisted_138, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[17] || (_cache[17] = function ($event) {
      return $setup.preForm.diagnosis_advise = $event;
    }),
    "class": "form-control form-control-sm",
    rows: "4"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.preForm.diagnosis_advise]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.preForm.errors.diagnosis_advise
  }, null, 8 /* PROPS */, ["error"])])])]), _hoisted_139, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_140, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_141, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_142, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Table head"), _hoisted_143, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)((_$props$patient5 = $props.patient) === null || _$props$patient5 === void 0 ? void 0 : _$props$patient5.patient_diagnosis, function (history) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: history.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_144, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.created_at), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_145, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.diagnosis_name), 1 /* TEXT */)]);
  }), 128 /* KEYED_FRAGMENT */))])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_146, [_hoisted_147, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_148, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_149, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_150, [_hoisted_151, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.medicineOption,
    "onUpdate:modelValue": _cache[18] || (_cache[18] = function ($event) {
      return $setup.medicineOption = $event;
    }),
    options: $setup.filterMedicines,
    reduce: function reduce(option) {
      return option;
    },
    label: "medicine_name",
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, {
    option: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (option) {
      var _option$medicine_gene;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.medicine_name), 1 /* TEXT */), (_option$medicine_gene = option.medicine_generic) !== null && _option$medicine_gene !== void 0 && _option$medicine_gene.generic_name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: 0
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" --- [ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.medicine_generic.generic_name) + " ]", 1 /* TEXT */), _hoisted_152], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    "selected-option": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
      var medicine_name = _ref.medicine_name,
        medicine_generic = _ref.medicine_generic;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(medicine_name), 1 /* TEXT */), medicine_generic !== null && medicine_generic !== void 0 && medicine_generic.generic_name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: 0
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" --- [ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(medicine_generic.generic_name) + " ]", 1 /* TEXT */), _hoisted_153], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["modelValue", "options", "reduce"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.medicineForm.errors.medicine_id
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_154, [_hoisted_155, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[19] || (_cache[19] = function ($event) {
      return $setup.medicineForm.medicine_type = $event;
    }),
    type: "text",
    "class": "form-control form-control-sm form-control-solid",
    readonly: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.medicineForm.medicine_type]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_156, [_hoisted_157, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.medicineForm.route_id,
    "onUpdate:modelValue": _cache[20] || (_cache[20] = function ($event) {
      return $setup.medicineForm.route_id = $event;
    }),
    options: $props.routes,
    label: "route_name",
    reduce: function reduce(option) {
      return option.id;
    },
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options", "reduce"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.medicineForm.errors.route_id
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_158, [_hoisted_159, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.medicineForm.dosage,
    "onUpdate:modelValue": _cache[21] || (_cache[21] = function ($event) {
      return $setup.medicineForm.dosage = $event;
    }),
    options: ['1/4', '1/3', '1/2', '3/4'].concat(_ctx.range(1, 180, 1, 0)),
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.medicineForm.errors.dosage
  }, null, 8 /* PROPS */, ["error"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_160, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_161, [_hoisted_162, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.medicineForm.frequency_id,
    "onUpdate:modelValue": _cache[22] || (_cache[22] = function ($event) {
      return $setup.medicineForm.frequency_id = $event;
    }),
    options: $props.frequencies,
    label: "frequency_name",
    reduce: function reduce(option) {
      return option.id;
    },
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options", "reduce"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.medicineForm.errors.frequency_id
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_163, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_164, "Duration (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.medicineForm.duration_unit) + ")", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[23] || (_cache[23] = function ($event) {
      return $setup.medicineForm.duration_value = $event;
    }),
    type: "text",
    "class": "form-control form-control-sm"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.medicineForm.duration_value]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_165, [_hoisted_166, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[24] || (_cache[24] = function ($event) {
      return $setup.medicineForm.qty = $event;
    }),
    type: "text",
    "class": "form-control form-control-sm"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.medicineForm.qty]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_167, [_hoisted_168, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_169, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.optionsTakenMeals, function (taken_meal) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: taken_meal,
      "class": "form-check form-check-custom form-check-sm me-10"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return $setup.medicineForm.taken_meal = $event;
      },
      value: taken_meal,
      "class": "form-check-input",
      name: "taken_meal",
      type: "radio",
      id: "taken_meal_".concat(taken_meal)
    }, null, 8 /* PROPS */, _hoisted_170), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $setup.medicineForm.taken_meal]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
      "class": "form-check-label",
      "for": "taken_meal_".concat(taken_meal)
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(taken_meal), 9 /* TEXT, PROPS */, _hoisted_171)]);
  }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.medicineForm.errors.taken_meal
  }, null, 8 /* PROPS */, ["error"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_172, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_173, [_hoisted_174, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[25] || (_cache[25] = function ($event) {
      return $setup.medicineForm.medicine_instructions = $event;
    }),
    "class": "form-control form-control-sm",
    rows: "2"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.medicineForm.medicine_instructions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.medicineForm.errors.medicine_instructions
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_175, [_hoisted_176, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_177, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.optionsAcquireFrom, function (acquire_from) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: acquire_from,
      "class": "form-check form-check-custom form-check-sm me-10"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return $setup.medicineForm.acquire_from = $event;
      },
      value: acquire_from,
      "class": "form-check-input",
      name: "acquire_from",
      type: "radio",
      id: "acquire_from_".concat(acquire_from)
    }, null, 8 /* PROPS */, _hoisted_178), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $setup.medicineForm.acquire_from]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
      "class": "form-check-label",
      "for": "acquire_from_".concat(acquire_from)
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(acquire_from), 9 /* TEXT, PROPS */, _hoisted_179)]);
  }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.medicineForm.errors.acquire_from
  }, null, 8 /* PROPS */, ["error"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_180, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_181, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-success btn-sm",
    onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.addMedicine, ["prevent"])
  }, "Save", 8 /* PROPS */, _hoisted_182)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_183, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_184, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_185, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Table head"), _hoisted_186, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.preForm.patient_medicines, function (pmed) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_187, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getMedicineName(pmed.medicine_id)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_188, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getRouteName(pmed.route_id)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_189, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pmed.dosage), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_190, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getFrequencyName(pmed.frequency_id)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_191, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pmed.duration_value), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_192, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pmed.qty), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_193, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-icon btn-sm btn-danger",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $setup.deleteMedicine(pmed);
      }, ["prevent"])
    }, _hoisted_196, 8 /* PROPS */, _hoisted_194)])]);
  }), 256 /* UNKEYED_FRAGMENT */))])])])])]), _hoisted_197, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_198, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_199, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_200, [_hoisted_201, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.otherMedicineForm.medicine_id,
    "onUpdate:modelValue": _cache[26] || (_cache[26] = function ($event) {
      return $setup.otherMedicineForm.medicine_id = $event;
    }),
    options: $setup.filterOtherMedicines,
    reduce: function reduce(option) {
      return option.id;
    },
    label: "medicine_name",
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, {
    option: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (option) {
      var _option$medicine_gene2;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.medicine_name), 1 /* TEXT */), (_option$medicine_gene2 = option.medicine_generic) !== null && _option$medicine_gene2 !== void 0 && _option$medicine_gene2.generic_name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: 0
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" --- [ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.medicine_generic.generic_name) + " ]", 1 /* TEXT */), _hoisted_202], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    "selected-option": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref2) {
      var medicine_name = _ref2.medicine_name,
        medicine_generic = _ref2.medicine_generic;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(medicine_name), 1 /* TEXT */), medicine_generic !== null && medicine_generic !== void 0 && medicine_generic.generic_name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: 0
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" --- [ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(medicine_generic.generic_name) + " ]", 1 /* TEXT */), _hoisted_203], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["modelValue", "options", "reduce"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.otherMedicineForm.errors.medicine_id
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_204, [_hoisted_205, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[27] || (_cache[27] = function ($event) {
      return $setup.otherMedicineForm.qty = $event;
    }),
    type: "text",
    "class": "form-control form-control-sm"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.otherMedicineForm.qty]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.otherMedicineForm.errors.qty
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_206, [_hoisted_207, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[28] || (_cache[28] = function ($event) {
      return $setup.otherMedicineForm.medicine_instructions = $event;
    }),
    "class": "form-control form-control-sm",
    rows: "1"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.otherMedicineForm.medicine_instructions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.otherMedicineForm.errors.medicine_instructions
  }, null, 8 /* PROPS */, ["error"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_208, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_209, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-success btn-sm",
    onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.addOtherMedicine, ["prevent"])
  }, "Save", 8 /* PROPS */, _hoisted_210)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_211, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_212, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_213, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Table head"), _hoisted_214, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.preForm.patient_other_medicines, function (pmed) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_215, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getMedicineName(pmed.medicine_id)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_216, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pmed.qty), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_217, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pmed.medicine_instructions), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_218, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-icon btn-sm btn-danger",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $setup.deleteOtherMedicine(pmed);
      }, ["prevent"])
    }, _hoisted_221, 8 /* PROPS */, _hoisted_219)])]);
  }), 256 /* UNKEYED_FRAGMENT */))])])])])]), _hoisted_222, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_223, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_224, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_225, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Table head"), _hoisted_226, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)((_$props$patient6 = $props.patient) === null || _$props$patient6 === void 0 ? void 0 : _$props$patient6.patient_medicines, function (history) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: history.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_227, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.created_at), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.medicine_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.route_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.dosage), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.frequency_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.duration_value), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.medicine_instructions), 1 /* TEXT */)]);
  }), 128 /* KEYED_FRAGMENT */))])])])])]), _hoisted_228])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Card body")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Card")], 64 /* STABLE_FRAGMENT */);
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
/* harmony import */ var _Users_naveed_Documents_nspp_emrs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_naveed_Documents_nspp_emrs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ServerErrorMessage_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ServerErrorMessage_vue_vue_type_template_id_c870456e_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/Components/alerts/ServerErrorMessage.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/Pages/Registrations/Show.vue":
/*!***************************************************!*\
  !*** ./resources/ts/Pages/Registrations/Show.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Show_vue_vue_type_template_id_35143825_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=35143825&ts=true */ "./resources/ts/Pages/Registrations/Show.vue?vue&type=template&id=35143825&ts=true");
/* harmony import */ var _Show_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&setup=true&lang=ts */ "./resources/ts/Pages/Registrations/Show.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _Users_naveed_Documents_nspp_emrs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_naveed_Documents_nspp_emrs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Show_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Show_vue_vue_type_template_id_35143825_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/Pages/Registrations/Show.vue"]])
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

/***/ "./resources/ts/Pages/Registrations/Show.vue?vue&type=script&setup=true&lang=ts":
/*!**************************************************************************************!*\
  !*** ./resources/ts/Pages/Registrations/Show.vue?vue&type=script&setup=true&lang=ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Show.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Registrations/Show.vue?vue&type=script&setup=true&lang=ts");
 

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

/***/ "./resources/ts/Pages/Registrations/Show.vue?vue&type=template&id=35143825&ts=true":
/*!*****************************************************************************************!*\
  !*** ./resources/ts/Pages/Registrations/Show.vue?vue&type=template&id=35143825&ts=true ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_template_id_35143825_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_template_id_35143825_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Show.vue?vue&type=template&id=35143825&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Registrations/Show.vue?vue&type=template&id=35143825&ts=true");


/***/ })

}]);