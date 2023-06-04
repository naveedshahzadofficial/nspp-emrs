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
    },
    hospitals: {
      type: Array,
      required: true
    },
    testCategories: {
      type: Array,
      required: true
    },
    testTypes: {
      type: Array,
      required: true
    },
    tests: {
      type: Array,
      required: true
    },
    labs: {
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
    var hospitalForm = (0,_inertiajs_vue3__WEBPACK_IMPORTED_MODULE_2__.useForm)({
      hospital_id: null,
      priority: 1,
      remarks: null
    });
    var labForm = (0,_inertiajs_vue3__WEBPACK_IMPORTED_MODULE_2__.useForm)({
      test_category_id: null,
      test_type_id: null,
      test_id: null,
      test_instructions: null,
      lab_id: null
    });
    var preForm = (0,_inertiajs_vue3__WEBPACK_IMPORTED_MODULE_2__.useForm)({
      temperature: (_props$patientVisit = props.patientVisit) === null || _props$patientVisit === void 0 ? void 0 : _props$patientVisit.temperature,
      bp_systolic: (_props$patientVisit2 = props.patientVisit) === null || _props$patientVisit2 === void 0 ? void 0 : _props$patientVisit2.bp_systolic,
      bp_diastolic: (_props$patientVisit3 = props.patientVisit) === null || _props$patientVisit3 === void 0 ? void 0 : _props$patientVisit3.bp_diastolic,
      pulse: (_props$patientVisit4 = props.patientVisit) === null || _props$patientVisit4 === void 0 ? void 0 : _props$patientVisit4.pulse,
      sugar: (_props$patientVisit5 = props.patientVisit) === null || _props$patientVisit5 === void 0 ? void 0 : _props$patientVisit5.sugar,
      weight: (_props$patientVisit6 = props.patientVisit) === null || _props$patientVisit6 === void 0 ? void 0 : _props$patientVisit6.weight,
      height: (_props$patientVisit7 = props.patientVisit) === null || _props$patientVisit7 === void 0 ? void 0 : _props$patientVisit7.height,
      notes: (_props$patientVisit8 = props.patientVisit) === null || _props$patientVisit8 === void 0 ? void 0 : _props$patientVisit8.notes,
      risk_factor_notes: '',
      complaint_notes: '',
      disease_notes: '',
      diagnosis_advise: '',
      risk_factor_ids: [],
      complaint_ids: [],
      disease_ids: [],
      diagnoses: [],
      patient_medicines: [],
      patient_other_medicines: [],
      patient_hospitals: [],
      patient_labs: []
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
    var getHospitalName = function getHospitalName(id) {
      var _props$hospitals, _props$hospitals$find;
      return (_props$hospitals = props.hospitals) === null || _props$hospitals === void 0 ? void 0 : (_props$hospitals$find = _props$hospitals.find(function (hospital) {
        return hospital.id === id;
      })) === null || _props$hospitals$find === void 0 ? void 0 : _props$hospitals$find.hospital_name;
    };
    var getTestCategoryName = function getTestCategoryName(id) {
      var _props$testCategories, _props$testCategories2;
      return (_props$testCategories = props.testCategories) === null || _props$testCategories === void 0 ? void 0 : (_props$testCategories2 = _props$testCategories.find(function (category) {
        return category.id === id;
      })) === null || _props$testCategories2 === void 0 ? void 0 : _props$testCategories2.category_name;
    };
    var getTestTypeName = function getTestTypeName(id) {
      var _props$testTypes, _props$testTypes$find;
      return (_props$testTypes = props.testTypes) === null || _props$testTypes === void 0 ? void 0 : (_props$testTypes$find = _props$testTypes.find(function (type) {
        return type.id === id;
      })) === null || _props$testTypes$find === void 0 ? void 0 : _props$testTypes$find.type_name;
    };
    var getTestName = function getTestName(id) {
      var _props$tests, _props$tests$find;
      return (_props$tests = props.tests) === null || _props$tests === void 0 ? void 0 : (_props$tests$find = _props$tests.find(function (test) {
        return test.id === id;
      })) === null || _props$tests$find === void 0 ? void 0 : _props$tests$find.test_name;
    };
    var getLabName = function getLabName(id) {
      var _props$labs, _props$labs$find;
      return (_props$labs = props.labs) === null || _props$labs === void 0 ? void 0 : (_props$labs$find = _props$labs.find(function (lab) {
        return lab.id === id;
      })) === null || _props$labs$find === void 0 ? void 0 : _props$labs$find.lab_name;
    };
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
      return preForm.diagnoses = preForm.diagnoses.filter(function (obj) {
        return obj !== dig;
      });
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
    var addHospital = function addHospital() {
      hospitalForm.clearErrors();
      var row = hospitalForm.data();
      if (row.hospital_id === null) hospitalForm.setError("hospital_id", "Hospital is required.");
      if (row.priority === null) hospitalForm.setError("priority", "Qty is required.");
      if (row.hospital_id === null || row.priority === null) return;
      preForm.patient_hospitals.push(hospitalForm.data());
      hospitalForm.reset();
    };
    var deleteHospital = function deleteHospital(hospital) {
      return preForm.patient_hospitals = preForm.patient_hospitals.filter(function (obj) {
        return obj !== hospital;
      });
    };
    var addLab = function addLab() {
      labForm.clearErrors();
      var row = labForm.data();
      if (row.test_category_id === null) labForm.setError("test_category_id", "Test Category is required.");
      if (row.test_type_id === null) labForm.setError("test_type_id", "Test Type is required.");
      if (row.test_id === null) labForm.setError("test_id", "Test is required.");
      if (row.lab_id === null) labForm.setError("lab_id", "Test Lab is required.");
      if (row.test_category_id === null || row.test_type_id === null || row.test_id === null || row.lab_id === null) return;
      preForm.patient_hospitals.push(labForm.data());
      labForm.reset();
    };
    var deleteLab = function deleteLab(lab) {
      return preForm.patient_labs = preForm.patient_labs.filter(function (obj) {
        return obj !== lab;
      });
    };
    var checkout = function checkout() {
      var _props$patientVisit9;
      preForm.post(route('registrations.checkout', (_props$patientVisit9 = props.patientVisit) === null || _props$patientVisit9 === void 0 ? void 0 : _props$patientVisit9.id));
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
      diagForm: diagForm,
      medicineForm: medicineForm,
      otherMedicineForm: otherMedicineForm,
      hospitalForm: hospitalForm,
      labForm: labForm,
      preForm: preForm,
      getDiseaseTypeName: getDiseaseTypeName,
      getDiseaseName: getDiseaseName,
      getProcedureName: getProcedureName,
      getMedicineName: getMedicineName,
      getRouteName: getRouteName,
      getFrequencyName: getFrequencyName,
      getHospitalName: getHospitalName,
      getTestCategoryName: getTestCategoryName,
      getTestTypeName: getTestTypeName,
      getTestName: getTestName,
      getLabName: getLabName,
      addDiagnosis: addDiagnosis,
      deleteDiagnosis: deleteDiagnosis,
      addMedicine: addMedicine,
      deleteMedicine: deleteMedicine,
      addOtherMedicine: addOtherMedicine,
      deleteOtherMedicine: deleteOtherMedicine,
      addHospital: addHospital,
      deleteHospital: deleteHospital,
      addLab: addLab,
      deleteLab: deleteLab,
      checkout: checkout,
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
var _hoisted_2 = {
  "class": "card-header"
};
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-title"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Page title"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "kt_page_title",
  "data-kt-swapper": "true",
  "data-kt-swapper-mode": "prepend",
  "data-kt-swapper-parent": "{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}",
  "class": "page-title d-flex flex-column justify-content-center flex-wrap me-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Title"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "d-flex align-items-center text-dark fw-bolder my-1 fs-3"
}, " Prescription "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Title")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Page title")], -1 /* HOISTED */);
var _hoisted_4 = {
  "class": "card-toolbar"
};
var _hoisted_5 = {
  "class": "card-body pt-0 position-relative"
};
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<ul class=\"nav nav-tabs nav-line-tabs mb-5 fs-5\"><li class=\"nav-item\"><a class=\"nav-link active\" data-bs-toggle=\"tab\" href=\"#kt_tab_pane_1\">Vitals</a></li><li class=\"nav-item\"><a class=\"nav-link\" data-bs-toggle=\"tab\" href=\"#kt_tab_pane_2\">Risk Factors</a></li><li class=\"nav-item\"><a class=\"nav-link\" data-bs-toggle=\"tab\" href=\"#kt_tab_pane_3\">Presenting Complaints</a></li><li class=\"nav-item\"><a class=\"nav-link\" data-bs-toggle=\"tab\" href=\"#kt_tab_pane_4\">Diagnosis</a></li><li class=\"nav-item\"><a class=\"nav-link\" data-bs-toggle=\"tab\" href=\"#kt_tab_pane_5\">Medicine Prescription</a></li><li class=\"nav-item\"><a class=\"nav-link\" data-bs-toggle=\"tab\" href=\"#kt_tab_pane_6\">Referrals</a></li></ul>", 1);
var _hoisted_7 = {
  "class": "card bg-secondary"
};
var _hoisted_8 = {
  "class": "card-body"
};
var _hoisted_9 = {
  "class": "d-flex"
};
var _hoisted_10 = {
  "class": "d-flex align-items-center bg-white p-4"
};
var _hoisted_11 = {
  "class": "symbol symbol-125px me-5"
};
var _hoisted_12 = ["src"];
var _hoisted_13 = {
  "class": "d-flex justify-content-start flex-column"
};
var _hoisted_14 = {
  href: "#",
  "class": "text-dark fw-bolder text-hover-primary mb-1 fs-6"
};
var _hoisted_15 = {
  href: "#",
  "class": "text-muted text-hover-primary fw-bold text-muted d-block fs-7"
};
var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-dark"
}, "Designation", -1 /* HOISTED */);
var _hoisted_17 = {
  href: "#",
  "class": "text-muted text-hover-primary fw-bold text-muted d-block fs-7"
};
var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-dark"
}, "Age", -1 /* HOISTED */);
var _hoisted_19 = {
  "class": "flex-grow-1 align-items-center flex-column p-4"
};
var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, " Vitals  ", -1 /* HOISTED */);
var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "separator border-primary my-2"
}, null, -1 /* HOISTED */);
var _hoisted_22 = {
  "class": "list-group list-group-horizontal"
};
var _hoisted_23 = {
  "class": "list-group-item m-1"
};
var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Pulse: ", -1 /* HOISTED */);
var _hoisted_25 = {
  "class": "list-group-item m-1"
};
var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Temp: ", -1 /* HOISTED */);
var _hoisted_27 = {
  "class": "list-group-item m-1"
};
var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "BP: ", -1 /* HOISTED */);
var _hoisted_29 = {
  "class": "list-group-item m-1"
};
var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Height (cm): ", -1 /* HOISTED */);
var _hoisted_31 = {
  "class": "list-group-item m-1"
};
var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Weight (kg): ", -1 /* HOISTED */);
var _hoisted_33 = {
  "class": "tab-content"
};
var _hoisted_34 = {
  "class": "tab-pane fade show active",
  id: "kt_tab_pane_1",
  role: "tabpanel"
};
var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading mt-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "Vitals")], -1 /* HOISTED */);
var _hoisted_36 = {
  "class": "section_box"
};
var _hoisted_37 = {
  "class": "mb-10 row"
};
var _hoisted_38 = {
  "class": "col-lg-4"
};
var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Temperature (°F)", -1 /* HOISTED */);
var _hoisted_40 = {
  "class": "col-lg-4"
};
var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "B.P. Systolic (mmHg)", -1 /* HOISTED */);
var _hoisted_42 = {
  "class": "col-lg-4"
};
var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "B.P. Diastolic (mmHg)", -1 /* HOISTED */);
var _hoisted_44 = {
  "class": "mb-10 row"
};
var _hoisted_45 = {
  "class": "col-lg-4"
};
var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Pulse (bpm)", -1 /* HOISTED */);
var _hoisted_47 = {
  "class": "col-lg-4"
};
var _hoisted_48 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Sugar (mg/dL)", -1 /* HOISTED */);
var _hoisted_49 = {
  "class": "col-lg-4"
};
var _hoisted_50 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Weight (kg)", -1 /* HOISTED */);
var _hoisted_51 = {
  "class": "mb-10 row"
};
var _hoisted_52 = {
  "class": "col-lg-4"
};
var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Height (cm)", -1 /* HOISTED */);
var _hoisted_54 = {
  "class": "mb-10 row"
};
var _hoisted_55 = {
  "class": "col-lg-12"
};
var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Notes", -1 /* HOISTED */);
var _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "History")], -1 /* HOISTED */);
var _hoisted_58 = {
  "class": "section_box"
};
var _hoisted_59 = {
  "class": "table-responsive"
};
var _hoisted_60 = {
  "class": "table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
};
var _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
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
  "class": "text-center"
};
var _hoisted_67 = {
  "class": "text-center"
};
var _hoisted_68 = {
  "class": "tab-pane fade",
  id: "kt_tab_pane_2",
  role: "tabpanel"
};
var _hoisted_69 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading mt-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "Risk Factors")], -1 /* HOISTED */);
var _hoisted_70 = {
  "class": "section_box"
};
var _hoisted_71 = {
  "class": "mb-10 row"
};
var _hoisted_72 = {
  "class": "col-lg-4"
};
var _hoisted_73 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Risk Factors", -1 /* HOISTED */);
var _hoisted_74 = {
  "class": "col-lg-8"
};
var _hoisted_75 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Notes", -1 /* HOISTED */);
var _hoisted_76 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "History")], -1 /* HOISTED */);
var _hoisted_77 = {
  "class": "section_box"
};
var _hoisted_78 = {
  "class": "table-responsive"
};
var _hoisted_79 = {
  "class": "table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
};
var _hoisted_80 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "fw-semibold fs-6 text-gray-800"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, "Date"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, "Risk Factor"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, "Notes")])], -1 /* HOISTED */);
var _hoisted_81 = {
  "class": "text-center"
};
var _hoisted_82 = {
  "class": "text-center"
};
var _hoisted_83 = {
  "class": "text-left"
};
var _hoisted_84 = {
  "class": "tab-pane fade",
  id: "kt_tab_pane_3",
  role: "tabpanel"
};
var _hoisted_85 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading mt-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "Presenting Complaints")], -1 /* HOISTED */);
var _hoisted_86 = {
  "class": "section_box"
};
var _hoisted_87 = {
  "class": "mb-10 row"
};
var _hoisted_88 = {
  "class": "col-lg-4"
};
var _hoisted_89 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Complaints", -1 /* HOISTED */);
var _hoisted_90 = {
  "class": "col-lg-8"
};
var _hoisted_91 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Complaint Notes", -1 /* HOISTED */);
var _hoisted_92 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading mt-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "Disease")], -1 /* HOISTED */);
var _hoisted_93 = {
  "class": "section_box"
};
var _hoisted_94 = {
  "class": "mb-10 row"
};
var _hoisted_95 = {
  "class": "col-lg-4"
};
var _hoisted_96 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Diseases", -1 /* HOISTED */);
var _hoisted_97 = {
  "class": "col-lg-8"
};
var _hoisted_98 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Disease Notes", -1 /* HOISTED */);
var _hoisted_99 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "Complaint History")], -1 /* HOISTED */);
var _hoisted_100 = {
  "class": "section_box"
};
var _hoisted_101 = {
  "class": "table-responsive"
};
var _hoisted_102 = {
  "class": "table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
};
var _hoisted_103 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "fw-semibold fs-6 text-gray-800"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, "Date"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, "Complaint"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, "Complaint Notes")])], -1 /* HOISTED */);
var _hoisted_104 = {
  "class": "text-center"
};
var _hoisted_105 = {
  "class": "text-center"
};
var _hoisted_106 = {
  "class": "text-left"
};
var _hoisted_107 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "Disease History")], -1 /* HOISTED */);
var _hoisted_108 = {
  "class": "section_box"
};
var _hoisted_109 = {
  "class": "table-responsive"
};
var _hoisted_110 = {
  "class": "table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
};
var _hoisted_111 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "fw-semibold fs-6 text-gray-800"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, "Date"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, "Disease"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, "Disease Notes")])], -1 /* HOISTED */);
var _hoisted_112 = {
  "class": "text-center"
};
var _hoisted_113 = {
  "class": "text-center"
};
var _hoisted_114 = {
  "class": "text-left"
};
var _hoisted_115 = {
  "class": "tab-pane fade",
  id: "kt_tab_pane_4",
  role: "tabpanel"
};
var _hoisted_116 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading mt-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "Preliminary Diagnosis")], -1 /* HOISTED */);
var _hoisted_117 = {
  "class": "section_box"
};
var _hoisted_118 = {
  "class": "mb-10 row"
};
var _hoisted_119 = {
  "class": "col-lg-3"
};
var _hoisted_120 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label required"
}, "Category", -1 /* HOISTED */);
var _hoisted_121 = {
  "class": "col-lg-3"
};
var _hoisted_122 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label required"
}, "Diagnosis", -1 /* HOISTED */);
var _hoisted_123 = {
  key: 0,
  "class": "col-lg-3"
};
var _hoisted_124 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Procedure", -1 /* HOISTED */);
var _hoisted_125 = {
  "class": "col-lg-3"
};
var _hoisted_126 = ["onClick"];
var _hoisted_127 = {
  "class": "mb-10 row"
};
var _hoisted_128 = {
  "class": "table-responsive"
};
var _hoisted_129 = {
  "class": "table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
};
var _hoisted_130 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
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
var _hoisted_131 = {
  "class": "text-center"
};
var _hoisted_132 = {
  "class": "text-center"
};
var _hoisted_133 = {
  "class": "text-center"
};
var _hoisted_134 = {
  "class": "text-center"
};
var _hoisted_135 = ["onClick"];
var _hoisted_136 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "las la-trash fs-1"
}, null, -1 /* HOISTED */);
var _hoisted_137 = [_hoisted_136];
var _hoisted_138 = {
  "class": "mb-10 row"
};
var _hoisted_139 = {
  "class": "col-lg-12"
};
var _hoisted_140 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Advise", -1 /* HOISTED */);
var _hoisted_141 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "History")], -1 /* HOISTED */);
var _hoisted_142 = {
  "class": "section_box"
};
var _hoisted_143 = {
  "class": "table-responsive"
};
var _hoisted_144 = {
  "class": "table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
};
var _hoisted_145 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "fw-semibold fs-6 text-gray-800"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, "Date"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, "Diagnosis")])], -1 /* HOISTED */);
var _hoisted_146 = {
  "class": "text-center"
};
var _hoisted_147 = {
  "class": "text-center"
};
var _hoisted_148 = {
  "class": "tab-pane fade",
  id: "kt_tab_pane_5",
  role: "tabpanel"
};
var _hoisted_149 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading mt-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "Medicine Prescription")], -1 /* HOISTED */);
var _hoisted_150 = {
  "class": "section_box"
};
var _hoisted_151 = {
  "class": "mb-10 row"
};
var _hoisted_152 = {
  "class": "col-lg-6"
};
var _hoisted_153 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label required"
}, "Medicine", -1 /* HOISTED */);
var _hoisted_154 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "--- (0)", -1 /* HOISTED */);
var _hoisted_155 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "--- (0)", -1 /* HOISTED */);
var _hoisted_156 = {
  "class": "col-lg-2"
};
var _hoisted_157 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Dosage Form", -1 /* HOISTED */);
var _hoisted_158 = {
  "class": "col-lg-2"
};
var _hoisted_159 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Route", -1 /* HOISTED */);
var _hoisted_160 = {
  "class": "col-lg-2"
};
var _hoisted_161 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Dosage", -1 /* HOISTED */);
var _hoisted_162 = {
  "class": "mb-10 row"
};
var _hoisted_163 = {
  "class": "col-lg-4"
};
var _hoisted_164 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Frequency", -1 /* HOISTED */);
var _hoisted_165 = {
  "class": "col-lg-2"
};
var _hoisted_166 = {
  "class": "form-label"
};
var _hoisted_167 = {
  "class": "col-lg-2"
};
var _hoisted_168 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Qty", -1 /* HOISTED */);
var _hoisted_169 = {
  "class": "col-lg-4"
};
var _hoisted_170 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "To be Taken", -1 /* HOISTED */);
var _hoisted_171 = {
  "class": "d-flex"
};
var _hoisted_172 = ["onUpdate:modelValue", "value", "id"];
var _hoisted_173 = ["for"];
var _hoisted_174 = {
  "class": "mb-10 row"
};
var _hoisted_175 = {
  "class": "col-lg-8"
};
var _hoisted_176 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Instructions", -1 /* HOISTED */);
var _hoisted_177 = {
  "class": "col-lg-4"
};
var _hoisted_178 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Acquire From", -1 /* HOISTED */);
var _hoisted_179 = {
  "class": "d-flex"
};
var _hoisted_180 = ["onUpdate:modelValue", "value", "id"];
var _hoisted_181 = ["for"];
var _hoisted_182 = {
  "class": "mb-10 row"
};
var _hoisted_183 = {
  "class": "col-lg-12 text-end"
};
var _hoisted_184 = ["onClick"];
var _hoisted_185 = {
  "class": "row"
};
var _hoisted_186 = {
  "class": "table-responsive"
};
var _hoisted_187 = {
  "class": "table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
};
var _hoisted_188 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
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
var _hoisted_189 = {
  "class": "text-start"
};
var _hoisted_190 = {
  "class": "text-start"
};
var _hoisted_191 = {
  "class": "text-center"
};
var _hoisted_192 = {
  "class": "text-start"
};
var _hoisted_193 = {
  "class": "text-center"
};
var _hoisted_194 = {
  "class": "text-center"
};
var _hoisted_195 = {
  "class": "text-center"
};
var _hoisted_196 = ["onClick"];
var _hoisted_197 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "las la-trash fs-1"
}, null, -1 /* HOISTED */);
var _hoisted_198 = [_hoisted_197];
var _hoisted_199 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading mt-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "Other Items")], -1 /* HOISTED */);
var _hoisted_200 = {
  "class": "section_box"
};
var _hoisted_201 = {
  "class": "mb-10 row"
};
var _hoisted_202 = {
  "class": "col-lg-6"
};
var _hoisted_203 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label required"
}, "Name", -1 /* HOISTED */);
var _hoisted_204 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "--- (0)", -1 /* HOISTED */);
var _hoisted_205 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "--- (0)", -1 /* HOISTED */);
var _hoisted_206 = {
  "class": "col-lg-1"
};
var _hoisted_207 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Qty", -1 /* HOISTED */);
var _hoisted_208 = {
  "class": "col-lg-5"
};
var _hoisted_209 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Instructions", -1 /* HOISTED */);
var _hoisted_210 = {
  "class": "mb-10 row"
};
var _hoisted_211 = {
  "class": "col-lg-12 text-end"
};
var _hoisted_212 = ["onClick"];
var _hoisted_213 = {
  "class": "row"
};
var _hoisted_214 = {
  "class": "table-responsive"
};
var _hoisted_215 = {
  "class": "table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
};
var _hoisted_216 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
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
var _hoisted_217 = {
  "class": "text-start"
};
var _hoisted_218 = {
  "class": "text-center"
};
var _hoisted_219 = {
  "class": "text-start"
};
var _hoisted_220 = {
  "class": "text-center"
};
var _hoisted_221 = ["onClick"];
var _hoisted_222 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "las la-trash fs-1"
}, null, -1 /* HOISTED */);
var _hoisted_223 = [_hoisted_222];
var _hoisted_224 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "History")], -1 /* HOISTED */);
var _hoisted_225 = {
  "class": "section_box"
};
var _hoisted_226 = {
  "class": "table-responsive"
};
var _hoisted_227 = {
  "class": "table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
};
var _hoisted_228 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "fw-semibold fs-6 text-gray-800"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, "Order Date"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Generic"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Route"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Dosage"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Frequency"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Days"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Instructions")])], -1 /* HOISTED */);
var _hoisted_229 = {
  "class": "text-start"
};
var _hoisted_230 = {
  "class": "tab-pane fade",
  id: "kt_tab_pane_6",
  role: "tabpanel"
};
var _hoisted_231 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading mt-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "Referral – Lab")], -1 /* HOISTED */);
var _hoisted_232 = {
  "class": "section_box"
};
var _hoisted_233 = {
  "class": "mb-10 row"
};
var _hoisted_234 = {
  "class": "col-lg-4"
};
var _hoisted_235 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label required"
}, "Test Category", -1 /* HOISTED */);
var _hoisted_236 = {
  "class": "col-lg-4"
};
var _hoisted_237 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label required"
}, "Test Type", -1 /* HOISTED */);
var _hoisted_238 = {
  "class": "col-lg-4"
};
var _hoisted_239 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label required"
}, "Test", -1 /* HOISTED */);
var _hoisted_240 = {
  "class": "mb-10 row"
};
var _hoisted_241 = {
  "class": "col-lg-4"
};
var _hoisted_242 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label required"
}, "Refer to Lab", -1 /* HOISTED */);
var _hoisted_243 = {
  "class": "col-lg-8"
};
var _hoisted_244 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Further Instructions", -1 /* HOISTED */);
var _hoisted_245 = {
  "class": "mb-10 row"
};
var _hoisted_246 = {
  "class": "col-lg-12 text-end"
};
var _hoisted_247 = ["onClick"];
var _hoisted_248 = {
  "class": "mb-10 row"
};
var _hoisted_249 = {
  "class": "table-responsive"
};
var _hoisted_250 = {
  "class": "table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
};
var _hoisted_251 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "fw-semibold fs-6 text-gray-800"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Test Category"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, "Test Type"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, "Test Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, "Further Instructions"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, "Refer to Lab"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, " Action ")])], -1 /* HOISTED */);
var _hoisted_252 = {
  "class": "text-start"
};
var _hoisted_253 = {
  "class": "text-start"
};
var _hoisted_254 = {
  "class": "text-start"
};
var _hoisted_255 = {
  "class": "text-start"
};
var _hoisted_256 = {
  "class": "text-start"
};
var _hoisted_257 = {
  "class": "text-center"
};
var _hoisted_258 = ["onClick"];
var _hoisted_259 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "las la-trash fs-1"
}, null, -1 /* HOISTED */);
var _hoisted_260 = [_hoisted_259];
var _hoisted_261 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading mt-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "Referral – Hospital")], -1 /* HOISTED */);
var _hoisted_262 = {
  "class": "section_box"
};
var _hoisted_263 = {
  "class": "mb-10 row"
};
var _hoisted_264 = {
  "class": "col-lg-4"
};
var _hoisted_265 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label required"
}, "Hospital", -1 /* HOISTED */);
var _hoisted_266 = {
  "class": "col-lg-2"
};
var _hoisted_267 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Priority", -1 /* HOISTED */);
var _hoisted_268 = {
  "class": "col-lg-6"
};
var _hoisted_269 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Remarks", -1 /* HOISTED */);
var _hoisted_270 = {
  "class": "mb-10 row"
};
var _hoisted_271 = {
  "class": "col-lg-12 text-end"
};
var _hoisted_272 = ["onClick"];
var _hoisted_273 = {
  "class": "mb-10 row"
};
var _hoisted_274 = {
  "class": "table-responsive"
};
var _hoisted_275 = {
  "class": "table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
};
var _hoisted_276 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "fw-semibold fs-6 text-gray-800"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Hospital"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, "Priority"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Remarks"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, " Action ")])], -1 /* HOISTED */);
var _hoisted_277 = {
  "class": "text-start"
};
var _hoisted_278 = {
  "class": "text-center"
};
var _hoisted_279 = {
  "class": "text-start"
};
var _hoisted_280 = {
  "class": "text-center"
};
var _hoisted_281 = ["onClick"];
var _hoisted_282 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "las la-trash fs-1"
}, null, -1 /* HOISTED */);
var _hoisted_283 = [_hoisted_282];
var _hoisted_284 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "Referral – Lab History")], -1 /* HOISTED */);
var _hoisted_285 = {
  "class": "section_box"
};
var _hoisted_286 = {
  "class": "table-responsive"
};
var _hoisted_287 = {
  "class": "table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
};
var _hoisted_288 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "fw-semibold fs-6 text-gray-800"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, "Date"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, "Test Category"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, "Test Type"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, "Test Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, "Further Instructions"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, "Refer to Lab")])], -1 /* HOISTED */);
var _hoisted_289 = {
  "class": "text-start"
};
var _hoisted_290 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "Referral – Hospital History")], -1 /* HOISTED */);
var _hoisted_291 = {
  "class": "section_box"
};
var _hoisted_292 = {
  "class": "table-responsive"
};
var _hoisted_293 = {
  "class": "table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
};
var _hoisted_294 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "fw-semibold fs-6 text-gray-800"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, "Date"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Hospital"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, "Priority"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Remarks")])], -1 /* HOISTED */);
var _hoisted_295 = {
  "class": "text-start"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$props$patientVisit, _$props$patientVisit2, _$props$patientVisit3, _$props$patientVisit4, _$props$patientVisit5, _$props$patientVisit6, _$props$patient, _$props$patient2, _$props$patient3, _$props$patient4, _$props$patient5, _$props$patient6, _$props$patient7, _$props$patient8;
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");
  var _component_v_select = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-select");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "Add Prescription"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Card header"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Card title"), _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Card title"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Card toolbar"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Add button"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.checkout, ["prevent"]),
    as: "button",
    type: "button",
    "class": "btn btn-success"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Checkout ")];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Add button")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Card toolbar")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Card header"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Card body"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Header vitals"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Avatar"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [$props.patient.patient_image ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
    key: 0,
    alt: "Pic",
    src: $props.patient.patient_image
  }, null, 8 /* PROPS */, _hoisted_12)) : $props.patient.patient_name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 1,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["bg-light-primary text-primary", "symbol-label fw-bolder fa-10x"])
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.patient.patient_name.charAt(0)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Avatar"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Name"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.patient.patient_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_15, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(": " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.patient.designation), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(": " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.patient.patient_age), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Name")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [_hoisted_20, _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$props$patientVisit = $props.patientVisit) === null || _$props$patientVisit === void 0 ? void 0 : _$props$patientVisit.pulse), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_25, [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$props$patientVisit2 = $props.patientVisit) === null || _$props$patientVisit2 === void 0 ? void 0 : _$props$patientVisit2.temperature), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_27, [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$props$patientVisit3 = $props.patientVisit) === null || _$props$patientVisit3 === void 0 ? void 0 : _$props$patientVisit3.bp_systolic) + "/" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$props$patientVisit4 = $props.patientVisit) === null || _$props$patientVisit4 === void 0 ? void 0 : _$props$patientVisit4.bp_diastolic), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_29, [_hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$props$patientVisit5 = $props.patientVisit) === null || _$props$patientVisit5 === void 0 ? void 0 : _$props$patientVisit5.height), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_31, [_hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$props$patientVisit6 = $props.patientVisit) === null || _$props$patientVisit6 === void 0 ? void 0 : _$props$patientVisit6.weight), 1 /* TEXT */)])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Header vitals"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [_hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [_hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.preForm.temperature,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.preForm.temperature = $event;
    }),
    options: _ctx.range(97.0, 106.0, .1).reverse(),
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.preForm.errors.temperature
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [_hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.preForm.bp_systolic,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.preForm.bp_systolic = $event;
    }),
    options: _ctx.range(40, 300, 5, 0),
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.preForm.errors.bp_systolic
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [_hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.preForm.bp_diastolic,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.preForm.bp_diastolic = $event;
    }),
    options: _ctx.range(40, 300, 5, 0),
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.preForm.errors.bp_diastolic
  }, null, 8 /* PROPS */, ["error"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [_hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.preForm.pulse,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.preForm.pulse = $event;
    }),
    options: _ctx.range(50, 120, 1, 0),
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.preForm.errors.pulse
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [_hoisted_48, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $setup.preForm.sugar = $event;
    }),
    type: "text",
    "class": "form-control form-control-sm",
    placeholder: "Sugar (mg/dL)"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.preForm.sugar]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.preForm.errors.sugar
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [_hoisted_50, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.preForm.weight,
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $setup.preForm.weight = $event;
    }),
    options: _ctx.range(1.0, 200.0, .1),
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.preForm.errors.weight
  }, null, 8 /* PROPS */, ["error"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, [_hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $setup.preForm.height = $event;
    }),
    type: "text",
    "class": "form-control form-control-sm",
    placeholder: "Height (cm)"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.preForm.height]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.preForm.errors.height
  }, null, 8 /* PROPS */, ["error"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [_hoisted_56, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $setup.preForm.notes = $event;
    }),
    "class": "form-control form-control-sm",
    rows: "4"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.preForm.notes]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.preForm.errors.notes
  }, null, 8 /* PROPS */, ["error"])])])]), _hoisted_57, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_59, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_60, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Table head"), _hoisted_61, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)((_$props$patient = $props.patient) === null || _$props$patient === void 0 ? void 0 : _$props$patient.patient_visits, function (history) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: history.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_62, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.created_at), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_63, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.pulse), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_64, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.temperature), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_65, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.bp_systolic) + "/" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.bp_diastolic), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_66, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.height), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_67, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.weight), 1 /* TEXT */)]);
  }), 128 /* KEYED_FRAGMENT */))])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_68, [_hoisted_69, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_70, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_71, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_72, [_hoisted_73, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
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
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_74, [_hoisted_75, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $setup.preForm.risk_factor_notes = $event;
    }),
    "class": "form-control form-control-sm",
    rows: "4"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.preForm.risk_factor_notes]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.preForm.errors.risk_factor_notes
  }, null, 8 /* PROPS */, ["error"])])])]), _hoisted_76, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_77, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_78, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_79, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Table head"), _hoisted_80, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)((_$props$patient2 = $props.patient) === null || _$props$patient2 === void 0 ? void 0 : _$props$patient2.patient_risk_factors, function (history) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: history.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_81, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.created_at), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_82, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.factor_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_83, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.factor_notes), 1 /* TEXT */)]);
  }), 128 /* KEYED_FRAGMENT */))])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_84, [_hoisted_85, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_86, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_87, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_88, [_hoisted_89, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
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
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_90, [_hoisted_91, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return $setup.preForm.complaint_notes = $event;
    }),
    "class": "form-control form-control-sm",
    rows: "4"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.preForm.complaint_notes]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.preForm.errors.complaint_notes
  }, null, 8 /* PROPS */, ["error"])])])]), _hoisted_92, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_93, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_94, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_95, [_hoisted_96, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
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
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_97, [_hoisted_98, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
      return $setup.preForm.disease_notes = $event;
    }),
    "class": "form-control form-control-sm",
    rows: "4"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.preForm.disease_notes]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.preForm.errors.disease_notes
  }, null, 8 /* PROPS */, ["error"])])])]), _hoisted_99, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_100, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_101, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_102, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Table head"), _hoisted_103, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)((_$props$patient3 = $props.patient) === null || _$props$patient3 === void 0 ? void 0 : _$props$patient3.patient_complaints, function (history) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: history.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_104, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.created_at), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_105, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.complaint_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_106, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.complaint_notes), 1 /* TEXT */)]);
  }), 128 /* KEYED_FRAGMENT */))])])])]), _hoisted_107, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_108, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_109, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_110, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Table head"), _hoisted_111, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)((_$props$patient4 = $props.patient) === null || _$props$patient4 === void 0 ? void 0 : _$props$patient4.patient_diseases, function (history) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: history.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_112, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.created_at), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_113, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.disease_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_114, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.disease_notes), 1 /* TEXT */)]);
  }), 128 /* KEYED_FRAGMENT */))])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_115, [_hoisted_116, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_117, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_118, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_119, [_hoisted_120, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
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
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_121, [_hoisted_122, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
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
  }, null, 8 /* PROPS */, ["error"])]), $setup.diagForm.disease_type_id === 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_123, [_hoisted_124, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
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
  }, null, 8 /* PROPS */, ["error"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_125, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-success btn-sm mt-7",
    onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.addDiagnosis, ["prevent"])
  }, "Save", 8 /* PROPS */, _hoisted_126)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_127, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_128, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_129, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Table head"), _hoisted_130, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.preForm.diagnoses, function (dig) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_131, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getDiseaseTypeName(dig.disease_type_id)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_132, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getDiseaseName(dig.disease_id)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_133, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getProcedureName(dig.procedure_id)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_134, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-icon btn-sm btn-danger",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $setup.deleteDiagnosis(dig);
      }, ["prevent"])
    }, _hoisted_137, 8 /* PROPS */, _hoisted_135)])]);
  }), 256 /* UNKEYED_FRAGMENT */))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_138, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_139, [_hoisted_140, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[17] || (_cache[17] = function ($event) {
      return $setup.preForm.diagnosis_advise = $event;
    }),
    "class": "form-control form-control-sm",
    rows: "4"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.preForm.diagnosis_advise]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.preForm.errors.diagnosis_advise
  }, null, 8 /* PROPS */, ["error"])])])]), _hoisted_141, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_142, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_143, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_144, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Table head"), _hoisted_145, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)((_$props$patient5 = $props.patient) === null || _$props$patient5 === void 0 ? void 0 : _$props$patient5.patient_diagnosis, function (history) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: history.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_146, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.created_at), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_147, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.diagnosis_name), 1 /* TEXT */)]);
  }), 128 /* KEYED_FRAGMENT */))])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_148, [_hoisted_149, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_150, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_151, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_152, [_hoisted_153, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
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
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" --- [ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.medicine_generic.generic_name) + " ]", 1 /* TEXT */), _hoisted_154], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    "selected-option": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
      var medicine_name = _ref.medicine_name,
        medicine_generic = _ref.medicine_generic;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(medicine_name), 1 /* TEXT */), medicine_generic !== null && medicine_generic !== void 0 && medicine_generic.generic_name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: 0
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" --- [ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(medicine_generic.generic_name) + " ]", 1 /* TEXT */), _hoisted_155], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["modelValue", "options", "reduce"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.medicineForm.errors.medicine_id
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_156, [_hoisted_157, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[19] || (_cache[19] = function ($event) {
      return $setup.medicineForm.medicine_type = $event;
    }),
    type: "text",
    "class": "form-control form-control-sm form-control-solid",
    readonly: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.medicineForm.medicine_type]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_158, [_hoisted_159, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
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
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_160, [_hoisted_161, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.medicineForm.dosage,
    "onUpdate:modelValue": _cache[21] || (_cache[21] = function ($event) {
      return $setup.medicineForm.dosage = $event;
    }),
    options: ['1/4', '1/3', '1/2', '3/4'].concat(_ctx.range(1, 180, 1, 0)),
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.medicineForm.errors.dosage
  }, null, 8 /* PROPS */, ["error"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_162, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_163, [_hoisted_164, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
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
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_165, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_166, "Duration (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.medicineForm.duration_unit) + ")", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[23] || (_cache[23] = function ($event) {
      return $setup.medicineForm.duration_value = $event;
    }),
    type: "text",
    "class": "form-control form-control-sm"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.medicineForm.duration_value]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_167, [_hoisted_168, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[24] || (_cache[24] = function ($event) {
      return $setup.medicineForm.qty = $event;
    }),
    type: "text",
    "class": "form-control form-control-sm"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.medicineForm.qty]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_169, [_hoisted_170, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_171, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.optionsTakenMeals, function (taken_meal) {
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
    }, null, 8 /* PROPS */, _hoisted_172), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $setup.medicineForm.taken_meal]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
      "class": "form-check-label",
      "for": "taken_meal_".concat(taken_meal)
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(taken_meal), 9 /* TEXT, PROPS */, _hoisted_173)]);
  }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.medicineForm.errors.taken_meal
  }, null, 8 /* PROPS */, ["error"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_174, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_175, [_hoisted_176, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[25] || (_cache[25] = function ($event) {
      return $setup.medicineForm.medicine_instructions = $event;
    }),
    "class": "form-control form-control-sm",
    rows: "2"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.medicineForm.medicine_instructions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.medicineForm.errors.medicine_instructions
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_177, [_hoisted_178, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_179, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.optionsAcquireFrom, function (acquire_from) {
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
    }, null, 8 /* PROPS */, _hoisted_180), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $setup.medicineForm.acquire_from]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
      "class": "form-check-label",
      "for": "acquire_from_".concat(acquire_from)
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(acquire_from), 9 /* TEXT, PROPS */, _hoisted_181)]);
  }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.medicineForm.errors.acquire_from
  }, null, 8 /* PROPS */, ["error"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_182, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_183, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-success btn-sm",
    onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.addMedicine, ["prevent"])
  }, "Save", 8 /* PROPS */, _hoisted_184)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_185, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_186, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_187, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Table head"), _hoisted_188, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.preForm.patient_medicines, function (pmed) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_189, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getMedicineName(pmed.medicine_id)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_190, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getRouteName(pmed.route_id)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_191, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pmed.dosage), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_192, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getFrequencyName(pmed.frequency_id)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_193, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pmed.duration_value), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_194, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pmed.qty), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_195, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-icon btn-sm btn-danger",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $setup.deleteMedicine(pmed);
      }, ["prevent"])
    }, _hoisted_198, 8 /* PROPS */, _hoisted_196)])]);
  }), 256 /* UNKEYED_FRAGMENT */))])])])])]), _hoisted_199, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_200, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_201, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_202, [_hoisted_203, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
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
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" --- [ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.medicine_generic.generic_name) + " ]", 1 /* TEXT */), _hoisted_204], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    "selected-option": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref2) {
      var medicine_name = _ref2.medicine_name,
        medicine_generic = _ref2.medicine_generic;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(medicine_name), 1 /* TEXT */), medicine_generic !== null && medicine_generic !== void 0 && medicine_generic.generic_name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: 0
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" --- [ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(medicine_generic.generic_name) + " ]", 1 /* TEXT */), _hoisted_205], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["modelValue", "options", "reduce"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.otherMedicineForm.errors.medicine_id
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_206, [_hoisted_207, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[27] || (_cache[27] = function ($event) {
      return $setup.otherMedicineForm.qty = $event;
    }),
    type: "text",
    "class": "form-control form-control-sm"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.otherMedicineForm.qty]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.otherMedicineForm.errors.qty
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_208, [_hoisted_209, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[28] || (_cache[28] = function ($event) {
      return $setup.otherMedicineForm.medicine_instructions = $event;
    }),
    "class": "form-control form-control-sm",
    rows: "1"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.otherMedicineForm.medicine_instructions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.otherMedicineForm.errors.medicine_instructions
  }, null, 8 /* PROPS */, ["error"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_210, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_211, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-success btn-sm",
    onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.addOtherMedicine, ["prevent"])
  }, "Save", 8 /* PROPS */, _hoisted_212)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_213, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_214, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_215, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Table head"), _hoisted_216, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.preForm.patient_other_medicines, function (pmed) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_217, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getMedicineName(pmed.medicine_id)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_218, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pmed.qty), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_219, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pmed.medicine_instructions), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_220, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-icon btn-sm btn-danger",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $setup.deleteOtherMedicine(pmed);
      }, ["prevent"])
    }, _hoisted_223, 8 /* PROPS */, _hoisted_221)])]);
  }), 256 /* UNKEYED_FRAGMENT */))])])])])]), _hoisted_224, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_225, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_226, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_227, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Table head"), _hoisted_228, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)((_$props$patient6 = $props.patient) === null || _$props$patient6 === void 0 ? void 0 : _$props$patient6.patient_medicines, function (history) {
    var _history$route, _history$frequency;
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: history.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_229, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.created_at), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.medicine_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history === null || history === void 0 ? void 0 : (_history$route = history.route) === null || _history$route === void 0 ? void 0 : _history$route.route_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.dosage), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history === null || history === void 0 ? void 0 : (_history$frequency = history.frequency) === null || _history$frequency === void 0 ? void 0 : _history$frequency.frequency_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.duration_value), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.medicine_instructions), 1 /* TEXT */)]);
  }), 128 /* KEYED_FRAGMENT */))])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_230, [_hoisted_231, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_232, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_233, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_234, [_hoisted_235, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.labForm.test_category_id,
    "onUpdate:modelValue": _cache[29] || (_cache[29] = function ($event) {
      return $setup.labForm.test_category_id = $event;
    }),
    options: $props.testCategories,
    label: "category_name",
    reduce: function reduce(option) {
      return option.id;
    },
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options", "reduce"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.labForm.errors.test_category_id
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_236, [_hoisted_237, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.labForm.test_type_id,
    "onUpdate:modelValue": _cache[30] || (_cache[30] = function ($event) {
      return $setup.labForm.test_type_id = $event;
    }),
    options: $props.testTypes,
    label: "type_name",
    reduce: function reduce(option) {
      return option.id;
    },
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options", "reduce"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.labForm.errors.test_type_id
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_238, [_hoisted_239, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.labForm.test_id,
    "onUpdate:modelValue": _cache[31] || (_cache[31] = function ($event) {
      return $setup.labForm.test_id = $event;
    }),
    options: $props.tests,
    label: "test_name",
    reduce: function reduce(option) {
      return option.id;
    },
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options", "reduce"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.labForm.errors.test_id
  }, null, 8 /* PROPS */, ["error"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_240, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_241, [_hoisted_242, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.labForm.lab_id,
    "onUpdate:modelValue": _cache[32] || (_cache[32] = function ($event) {
      return $setup.labForm.lab_id = $event;
    }),
    options: $props.labs,
    label: "lab_name",
    reduce: function reduce(option) {
      return option.id;
    },
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options", "reduce"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.labForm.errors.lab_id
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_243, [_hoisted_244, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[33] || (_cache[33] = function ($event) {
      return $setup.labForm.test_instructions = $event;
    }),
    "class": "form-control form-control-sm",
    rows: "2"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.labForm.test_instructions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.labForm.errors.test_instructions
  }, null, 8 /* PROPS */, ["error"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_245, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_246, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-success btn-sm",
    onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.addLab, ["prevent"])
  }, "Save", 8 /* PROPS */, _hoisted_247)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_248, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_249, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_250, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Table head"), _hoisted_251, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.preForm.patient_labs, function (hospital) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_252, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getTestCategoryName(hospital.test_category_id)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_253, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getTestTypeName(hospital.test_type_id)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_254, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getTestName(hospital.test_id)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_255, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(hospital.test_instructions), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_256, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getLabName(hospital.test_category_id)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_257, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-icon btn-sm btn-danger",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $setup.deleteHospital(hospital);
      }, ["prevent"])
    }, _hoisted_260, 8 /* PROPS */, _hoisted_258)])]);
  }), 256 /* UNKEYED_FRAGMENT */))])])])])]), _hoisted_261, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_262, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_263, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_264, [_hoisted_265, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.hospitalForm.hospital_id,
    "onUpdate:modelValue": _cache[34] || (_cache[34] = function ($event) {
      return $setup.hospitalForm.hospital_id = $event;
    }),
    options: $props.hospitals,
    label: "hospital_name",
    reduce: function reduce(option) {
      return option.id;
    },
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options", "reduce"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.hospitalForm.errors.hospital_id
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_266, [_hoisted_267, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.hospitalForm.priority,
    "onUpdate:modelValue": _cache[35] || (_cache[35] = function ($event) {
      return $setup.hospitalForm.priority = $event;
    }),
    options: _ctx.range(1, 50, 1, 0),
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.hospitalForm.errors.priority
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_268, [_hoisted_269, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[36] || (_cache[36] = function ($event) {
      return $setup.hospitalForm.remarks = $event;
    }),
    "class": "form-control form-control-sm",
    rows: "2"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.hospitalForm.remarks]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.hospitalForm.errors.remarks
  }, null, 8 /* PROPS */, ["error"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_270, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_271, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-success btn-sm",
    onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.addHospital, ["prevent"])
  }, "Save", 8 /* PROPS */, _hoisted_272)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_273, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_274, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_275, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Table head"), _hoisted_276, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.preForm.patient_hospitals, function (hospital) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_277, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getHospitalName(hospital.hospital_id)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_278, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(hospital.priority), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_279, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(hospital.remarks), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_280, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-icon btn-sm btn-danger",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $setup.deleteHospital(hospital);
      }, ["prevent"])
    }, _hoisted_283, 8 /* PROPS */, _hoisted_281)])]);
  }), 256 /* UNKEYED_FRAGMENT */))])])])])]), _hoisted_284, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_285, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_286, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_287, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Table head"), _hoisted_288, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)((_$props$patient7 = $props.patient) === null || _$props$patient7 === void 0 ? void 0 : _$props$patient7.patient_labs, function (history) {
    var _history$test_categor, _history$test_type, _history$test, _history$lab;
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: history.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_289, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.created_at), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history === null || history === void 0 ? void 0 : (_history$test_categor = history.test_category) === null || _history$test_categor === void 0 ? void 0 : _history$test_categor.category_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history === null || history === void 0 ? void 0 : (_history$test_type = history.test_type) === null || _history$test_type === void 0 ? void 0 : _history$test_type.type_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history === null || history === void 0 ? void 0 : (_history$test = history.test) === null || _history$test === void 0 ? void 0 : _history$test.test_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.test_instructions), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history === null || history === void 0 ? void 0 : (_history$lab = history.lab) === null || _history$lab === void 0 ? void 0 : _history$lab.lab_name), 1 /* TEXT */)]);
  }), 128 /* KEYED_FRAGMENT */))])])])]), _hoisted_290, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_291, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_292, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_293, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Table head"), _hoisted_294, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)((_$props$patient8 = $props.patient) === null || _$props$patient8 === void 0 ? void 0 : _$props$patient8.patient_hospitals, function (history) {
    var _history$hospital;
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: history.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_295, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.created_at), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history === null || history === void 0 ? void 0 : (_history$hospital = history.hospital) === null || _history$hospital === void 0 ? void 0 : _history$hospital.hospital_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.priority), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.remarks), 1 /* TEXT */)]);
  }), 128 /* KEYED_FRAGMENT */))])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Card body")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Card")], 64 /* STABLE_FRAGMENT */);
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