"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_ts_Pages_Registrations_Proceed_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Registrations/Proceed.vue?vue&type=script&setup=true&lang=ts":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Registrations/Proceed.vue?vue&type=script&setup=true&lang=ts ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
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
  __name: 'Proceed',
  props: {
    patient: {
      type: Object,
      required: true
    },
    patientVisit: {
      type: Object,
      required: true
    },
    heightUnits: {
      type: Array,
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
    var _props$patientVisit, _props$patientVisit2, _props$patientVisit3, _props$patientVisit4, _props$patientVisit5, _props$patientVisit6, _props$patientVisit7, _props$patientVisit8, _props$patientVisit9;
    var __expose = _ref.expose;
    __expose();
    var props = __props;
    var filterDiseases = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
    var filterProcedures = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
    var filterMedicines = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
    var filterOtherMedicines = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
    var filterTestTypes = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
    var filterTests = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
    var medicineOption = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
    var optionsTakenMeals = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(["Before Meal", "After Meal", "During Meal"]);
    var optionsAcquireFrom = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(["In-House", "External"]);
    var riskFactorForm = (0,_inertiajs_vue3__WEBPACK_IMPORTED_MODULE_2__.useForm)({
      risk_factor_id: null,
      risk_factor_notes: ""
    });
    var complaintForm = (0,_inertiajs_vue3__WEBPACK_IMPORTED_MODULE_2__.useForm)({
      complaint_id: null,
      complaint_notes: ""
    });
    var diseaseForm = (0,_inertiajs_vue3__WEBPACK_IMPORTED_MODULE_2__.useForm)({
      disease_id: null,
      disease_notes: ""
    });
    var diagForm = (0,_inertiajs_vue3__WEBPACK_IMPORTED_MODULE_2__.useForm)({
      disease_type_id: null,
      disease_id: null,
      procedure_id: null,
      diagnosis_notes: ""
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
      medicine_instructions: "",
      acquire_from: null
    });
    var otherMedicineForm = (0,_inertiajs_vue3__WEBPACK_IMPORTED_MODULE_2__.useForm)({
      medicine_id: null,
      qty: null,
      medicine_instructions: "",
      acquire_from: null
    });
    var hospitalForm = (0,_inertiajs_vue3__WEBPACK_IMPORTED_MODULE_2__.useForm)({
      hospital_id: null,
      priority: 1,
      remarks: ""
    });
    var labForm = (0,_inertiajs_vue3__WEBPACK_IMPORTED_MODULE_2__.useForm)({
      test_category_id: null,
      test_type_id: null,
      test_id: null,
      test_instructions: "",
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
      height_unit: (_props$patientVisit8 = props.patientVisit) === null || _props$patientVisit8 === void 0 ? void 0 : _props$patientVisit8.height_unit,
      notes: (_props$patientVisit9 = props.patientVisit) === null || _props$patientVisit9 === void 0 ? void 0 : _props$patientVisit9.notes,
      patient_risk_factors: [],
      patient_complaints: [],
      patient_diseases: [],
      patient_diagnoses: [],
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
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(function () {
      return labForm.test_category_id;
    }, function (value) {
      var _props$testTypes;
      labForm.reset("test_type_id");
      filterTestTypes.value = (_props$testTypes = props.testTypes) === null || _props$testTypes === void 0 ? void 0 : _props$testTypes.filter(function (testType) {
        return testType.test_category_id === value;
      });
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(function () {
      return labForm.test_type_id;
    }, function (value) {
      var _props$tests;
      labForm.reset("test_id");
      filterTests.value = (_props$tests = props.tests) === null || _props$tests === void 0 ? void 0 : _props$tests.filter(function (test) {
        return test.test_type_id === value;
      });
    });
    var getRiskFactorName = function getRiskFactorName(id) {
      var _props$riskFactors, _props$riskFactors$fi;
      return (_props$riskFactors = props.riskFactors) === null || _props$riskFactors === void 0 ? void 0 : (_props$riskFactors$fi = _props$riskFactors.find(function (riskFactor) {
        return riskFactor.id === id;
      })) === null || _props$riskFactors$fi === void 0 ? void 0 : _props$riskFactors$fi.factor_name;
    };
    var getComplaintName = function getComplaintName(id) {
      var _props$complaints, _props$complaints$fin;
      return (_props$complaints = props.complaints) === null || _props$complaints === void 0 ? void 0 : (_props$complaints$fin = _props$complaints.find(function (complaint) {
        return complaint.id === id;
      })) === null || _props$complaints$fin === void 0 ? void 0 : _props$complaints$fin.complaint_name;
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
      })) === null || _props$procedures$fin === void 0 ? void 0 : _props$procedures$fin.procedure_name) || "Not Available";
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
      var _props$testTypes2, _props$testTypes2$fin;
      return (_props$testTypes2 = props.testTypes) === null || _props$testTypes2 === void 0 ? void 0 : (_props$testTypes2$fin = _props$testTypes2.find(function (type) {
        return type.id === id;
      })) === null || _props$testTypes2$fin === void 0 ? void 0 : _props$testTypes2$fin.type_name;
    };
    var getTestName = function getTestName(id) {
      var _props$tests2, _props$tests2$find;
      return (_props$tests2 = props.tests) === null || _props$tests2 === void 0 ? void 0 : (_props$tests2$find = _props$tests2.find(function (test) {
        return test.id === id;
      })) === null || _props$tests2$find === void 0 ? void 0 : _props$tests2$find.test_name;
    };
    var getLabName = function getLabName(id) {
      var _props$labs, _props$labs$find;
      return (_props$labs = props.labs) === null || _props$labs === void 0 ? void 0 : (_props$labs$find = _props$labs.find(function (lab) {
        return lab.id === id;
      })) === null || _props$labs$find === void 0 ? void 0 : _props$labs$find.lab_name;
    };
    var addRiskFactor = function addRiskFactor() {
      riskFactorForm.clearErrors();
      var row = riskFactorForm.data();
      if (row.risk_factor_id === null) riskFactorForm.setError("risk_factor_id", "Risk Factor is required.");
      if (row.risk_factor_id === null) return;
      preForm.patient_risk_factors.push(riskFactorForm.data());
      riskFactorForm.reset();
    };
    var deleteRiskFactor = function deleteRiskFactor(_obj) {
      return preForm.patient_risk_factors = preForm.patient_risk_factors.filter(function (obj) {
        return obj !== _obj;
      });
    };
    var addComplaint = function addComplaint() {
      complaintForm.clearErrors();
      var row = complaintForm.data();
      if (row.complaint_id === null) complaintForm.setError("complaint_id", "Complaint is required.");
      if (row.complaint_id === null) return;
      preForm.patient_complaints.push(complaintForm.data());
      complaintForm.reset();
    };
    var deleteComplaint = function deleteComplaint(_obj) {
      return preForm.patient_complaints = preForm.patient_complaints.filter(function (obj) {
        return obj !== _obj;
      });
    };
    var addDisease = function addDisease() {
      diseaseForm.clearErrors();
      var row = diseaseForm.data();
      if (row.disease_id === null) diseaseForm.setError("disease_id", "Disease is required.");
      if (row.disease_id === null) return;
      preForm.patient_diseases.push(diseaseForm.data());
      diseaseForm.reset();
    };
    var deleteDisease = function deleteDisease(_obj) {
      return preForm.patient_diseases = preForm.patient_diseases.filter(function (obj) {
        return obj !== _obj;
      });
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
      preForm.patient_diagnoses.push(diagForm.data());
      diagForm.reset();
    };
    var deleteDiagnosis = function deleteDiagnosis(dig) {
      return preForm.patient_diagnoses = preForm.patient_diagnoses.filter(function (obj) {
        return obj !== dig;
      });
    };
    var addMedicine = function addMedicine() {
      var _props$medicines4;
      medicineForm.clearErrors();
      var row = medicineForm.data();
      if (row.medicine_id === null) medicineForm.setError("medicine_id", "Medicine is required.");
      if (row.route_id === null) medicineForm.setError("route_id", "Route is required.");
      if (row.acquire_from === null) medicineForm.setError("acquire_from", "Acquire From is required.");
      if (row.medicine_id === null || row.route_id === null || row.acquire_from === null) return;
      var medicine = (_props$medicines4 = props.medicines) === null || _props$medicines4 === void 0 ? void 0 : _props$medicines4.find(function (medicine) {
        return medicine.id == row.medicine_id;
      });
      if (parseInt((medicine === null || medicine === void 0 ? void 0 : medicine.total_stocks_qty) || "0") === 0 && row.acquire_from === "In-House") {
        medicineForm.setError("acquire_from", "please Acquire From External, ".concat(medicine.medicine_name, " is out of stock."));
        return;
      }
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
      var _props$medicines5;
      otherMedicineForm.clearErrors();
      var row = otherMedicineForm.data();
      if (row.medicine_id === null) otherMedicineForm.setError("medicine_id", "Medicine is required.");
      if (row.qty === null) otherMedicineForm.setError("qty", "Qty is required.");
      if (row.acquire_from === null) otherMedicineForm.setError("acquire_from", "Acquire Form is required.");
      if (row.medicine_id === null || row.qty === null || row.acquire_from === null) return;
      var medicine = (_props$medicines5 = props.medicines) === null || _props$medicines5 === void 0 ? void 0 : _props$medicines5.find(function (medicine) {
        return medicine.id == row.medicine_id;
      });
      if (parseInt((medicine === null || medicine === void 0 ? void 0 : medicine.total_stocks_qty) || "0") === 0 && row.acquire_from === "In-House") {
        otherMedicineForm.setError("acquire_from", "please Acquire From External, ".concat(medicine.medicine_name, " is out of stock."));
        return;
      }
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
      preForm.patient_labs.push(labForm.data());
      labForm.reset();
    };
    var deleteLab = function deleteLab(lab) {
      return preForm.patient_labs = preForm.patient_labs.filter(function (obj) {
        return obj !== lab;
      });
    };
    var __returned__ = {
      props: props,
      filterDiseases: filterDiseases,
      filterProcedures: filterProcedures,
      filterMedicines: filterMedicines,
      filterOtherMedicines: filterOtherMedicines,
      filterTestTypes: filterTestTypes,
      filterTests: filterTests,
      medicineOption: medicineOption,
      optionsTakenMeals: optionsTakenMeals,
      optionsAcquireFrom: optionsAcquireFrom,
      riskFactorForm: riskFactorForm,
      complaintForm: complaintForm,
      diseaseForm: diseaseForm,
      diagForm: diagForm,
      medicineForm: medicineForm,
      otherMedicineForm: otherMedicineForm,
      hospitalForm: hospitalForm,
      labForm: labForm,
      preForm: preForm,
      getRiskFactorName: getRiskFactorName,
      getComplaintName: getComplaintName,
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
      addRiskFactor: addRiskFactor,
      deleteRiskFactor: deleteRiskFactor,
      addComplaint: addComplaint,
      deleteComplaint: deleteComplaint,
      addDisease: addDisease,
      deleteDisease: deleteDisease,
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Registrations/Proceed.vue?vue&type=template&id=6c100594&ts=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Registrations/Proceed.vue?vue&type=template&id=6c100594&ts=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  "class": "card"
};
var _hoisted_4 = {
  "class": "card-body card-custom"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<ul class=\"nav nav-tabs nav-line-tabs mb-5 fs-5\"><li class=\"nav-item\"><a class=\"nav-link active\" data-bs-toggle=\"tab\" href=\"#kt_tab_pane_1\">Vitals</a></li><li class=\"nav-item\"><a class=\"nav-link\" data-bs-toggle=\"tab\" href=\"#kt_tab_pane_2\">Risk Factors</a></li><li class=\"nav-item\"><a class=\"nav-link\" data-bs-toggle=\"tab\" href=\"#kt_tab_pane_3\">Presenting Complaints</a></li><li class=\"nav-item\"><a class=\"nav-link\" data-bs-toggle=\"tab\" href=\"#kt_tab_pane_4\">Diagnosis</a></li><li class=\"nav-item\"><a class=\"nav-link\" data-bs-toggle=\"tab\" href=\"#kt_tab_pane_5\">Medicine Prescription</a></li><li class=\"nav-item\"><a class=\"nav-link\" data-bs-toggle=\"tab\" href=\"#kt_tab_pane_6\">Referrals</a></li></ul>", 1);
var _hoisted_6 = {
  "class": "card bg-secondary"
};
var _hoisted_7 = {
  "class": "card-body"
};
var _hoisted_8 = {
  "class": "d-flex"
};
var _hoisted_9 = {
  "class": "d-flex align-items-center bg-white p-4"
};
var _hoisted_10 = {
  "class": "symbol symbol-125px me-5"
};
var _hoisted_11 = ["src"];
var _hoisted_12 = {
  "class": "d-flex justify-content-start flex-column"
};
var _hoisted_13 = {
  href: "#",
  "class": "text-dark fw-bolder text-hover-primary mb-1 fs-6"
};
var _hoisted_14 = {
  href: "#",
  "class": "text-muted text-hover-primary fw-bold text-muted d-block fs-7"
};
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-dark"
}, "Designation", -1 /* HOISTED */);
var _hoisted_16 = {
  href: "#",
  "class": "text-muted text-hover-primary fw-bold text-muted d-block fs-7"
};
var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-dark"
}, "Age", -1 /* HOISTED */);
var _hoisted_18 = {
  "class": "flex-grow-1 align-items-center flex-column p-4"
};
var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "Vitals  ", -1 /* HOISTED */);
var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "separator border-primary my-2"
}, null, -1 /* HOISTED */);
var _hoisted_21 = {
  "class": "list-group list-group-horizontal"
};
var _hoisted_22 = {
  "class": "list-group-item m-1"
};
var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Pulse: ", -1 /* HOISTED */);
var _hoisted_24 = {
  "class": "list-group-item m-1"
};
var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Temp: ", -1 /* HOISTED */);
var _hoisted_26 = {
  "class": "list-group-item m-1"
};
var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "BP: ", -1 /* HOISTED */);
var _hoisted_28 = {
  "class": "list-group-item m-1"
};
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
var _hoisted_51 = {
  "class": "row"
};
var _hoisted_52 = {
  "class": "col-lg-6"
};
var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Height", -1 /* HOISTED */);
var _hoisted_54 = {
  "class": "col-lg-6 ps-0"
};
var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, " ", -1 /* HOISTED */);
var _hoisted_56 = {
  "class": "mb-10 row"
};
var _hoisted_57 = {
  "class": "col-lg-12"
};
var _hoisted_58 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Notes", -1 /* HOISTED */);
var _hoisted_59 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "History")], -1 /* HOISTED */);
var _hoisted_60 = {
  "class": "section_box"
};
var _hoisted_61 = {
  "class": "table-responsive"
};
var _hoisted_62 = {
  "class": "table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
};
var _hoisted_63 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "fw-semibold fs-6 text-gray-800"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Vital Date "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, " Pulse "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, " Temperature "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, " BP "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, " Height (ft/in) "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, " Weight (kg) ")])], -1 /* HOISTED */);
var _hoisted_64 = {
  "class": "text-start"
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
  "class": "text-center"
};
var _hoisted_69 = {
  "class": "text-center"
};
var _hoisted_70 = {
  "class": "tab-pane fade",
  id: "kt_tab_pane_2",
  role: "tabpanel"
};
var _hoisted_71 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading mt-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "Risk Factors")], -1 /* HOISTED */);
var _hoisted_72 = {
  "class": "section_box"
};
var _hoisted_73 = {
  "class": "mb-10 row"
};
var _hoisted_74 = {
  "class": "col-lg-4"
};
var _hoisted_75 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Risk Factors", -1 /* HOISTED */);
var _hoisted_76 = {
  "class": "col-lg-8"
};
var _hoisted_77 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Notes", -1 /* HOISTED */);
var _hoisted_78 = {
  "class": "mb-10 row"
};
var _hoisted_79 = {
  "class": "col-lg-12 text-end"
};
var _hoisted_80 = ["onClick"];
var _hoisted_81 = {
  "class": "mb-10 row"
};
var _hoisted_82 = {
  "class": "table-responsive"
};
var _hoisted_83 = {
  "class": "table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
};
var _hoisted_84 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "fw-semibold fs-6 text-gray-800"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Risk Factor "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Notes "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, " Action ")])], -1 /* HOISTED */);
var _hoisted_85 = {
  "class": "text-start"
};
var _hoisted_86 = {
  "class": "text-start"
};
var _hoisted_87 = {
  "class": "text-center"
};
var _hoisted_88 = ["onClick"];
var _hoisted_89 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "las la-trash fs-1"
}, null, -1 /* HOISTED */);
var _hoisted_90 = [_hoisted_89];
var _hoisted_91 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "History")], -1 /* HOISTED */);
var _hoisted_92 = {
  "class": "section_box"
};
var _hoisted_93 = {
  "class": "table-responsive"
};
var _hoisted_94 = {
  "class": "table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
};
var _hoisted_95 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "fw-semibold fs-6 text-gray-800"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Date "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Risk Factor "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Notes ")])], -1 /* HOISTED */);
var _hoisted_96 = {
  "class": "text-start"
};
var _hoisted_97 = {
  "class": "text-start"
};
var _hoisted_98 = {
  "class": "text-start"
};
var _hoisted_99 = {
  "class": "tab-pane fade",
  id: "kt_tab_pane_3",
  role: "tabpanel"
};
var _hoisted_100 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading mt-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "Presenting Complaints")], -1 /* HOISTED */);
var _hoisted_101 = {
  "class": "section_box"
};
var _hoisted_102 = {
  "class": "mb-10 row"
};
var _hoisted_103 = {
  "class": "col-lg-4"
};
var _hoisted_104 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Complaints", -1 /* HOISTED */);
var _hoisted_105 = {
  "class": "col-lg-8"
};
var _hoisted_106 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Complaint Notes", -1 /* HOISTED */);
var _hoisted_107 = {
  "class": "mb-10 row"
};
var _hoisted_108 = {
  "class": "col-lg-12 text-end"
};
var _hoisted_109 = ["onClick"];
var _hoisted_110 = {
  "class": "mb-10 row"
};
var _hoisted_111 = {
  "class": "table-responsive"
};
var _hoisted_112 = {
  "class": "table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
};
var _hoisted_113 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "fw-semibold fs-6 text-gray-800"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Complaint "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Complaint Notes "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, " Action ")])], -1 /* HOISTED */);
var _hoisted_114 = {
  "class": "text-start"
};
var _hoisted_115 = {
  "class": "text-start"
};
var _hoisted_116 = {
  "class": "text-center"
};
var _hoisted_117 = ["onClick"];
var _hoisted_118 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "las la-trash fs-1"
}, null, -1 /* HOISTED */);
var _hoisted_119 = [_hoisted_118];
var _hoisted_120 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading mt-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "Disease")], -1 /* HOISTED */);
var _hoisted_121 = {
  "class": "section_box"
};
var _hoisted_122 = {
  "class": "mb-10 row"
};
var _hoisted_123 = {
  "class": "col-lg-4"
};
var _hoisted_124 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Diseases", -1 /* HOISTED */);
var _hoisted_125 = {
  "class": "col-lg-8"
};
var _hoisted_126 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Disease Notes", -1 /* HOISTED */);
var _hoisted_127 = {
  "class": "mb-10 row"
};
var _hoisted_128 = {
  "class": "col-lg-12 text-end"
};
var _hoisted_129 = ["onClick"];
var _hoisted_130 = {
  "class": "mb-10 row"
};
var _hoisted_131 = {
  "class": "table-responsive"
};
var _hoisted_132 = {
  "class": "table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
};
var _hoisted_133 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "fw-semibold fs-6 text-gray-800"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Disease "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Disease Notes "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, " Action ")])], -1 /* HOISTED */);
var _hoisted_134 = {
  "class": "text-start"
};
var _hoisted_135 = {
  "class": "text-start"
};
var _hoisted_136 = {
  "class": "text-center"
};
var _hoisted_137 = ["onClick"];
var _hoisted_138 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "las la-trash fs-1"
}, null, -1 /* HOISTED */);
var _hoisted_139 = [_hoisted_138];
var _hoisted_140 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "Complaint History")], -1 /* HOISTED */);
var _hoisted_141 = {
  "class": "section_box"
};
var _hoisted_142 = {
  "class": "table-responsive"
};
var _hoisted_143 = {
  "class": "table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
};
var _hoisted_144 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "fw-semibold fs-6 text-gray-800"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Date "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Complaint "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Complaint Notes ")])], -1 /* HOISTED */);
var _hoisted_145 = {
  "class": "text-start"
};
var _hoisted_146 = {
  "class": "text-start"
};
var _hoisted_147 = {
  "class": "text-start"
};
var _hoisted_148 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "Disease History")], -1 /* HOISTED */);
var _hoisted_149 = {
  "class": "section_box"
};
var _hoisted_150 = {
  "class": "table-responsive"
};
var _hoisted_151 = {
  "class": "table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
};
var _hoisted_152 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "fw-semibold fs-6 text-gray-800"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Date "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Disease "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Disease Notes ")])], -1 /* HOISTED */);
var _hoisted_153 = {
  "class": "text-start"
};
var _hoisted_154 = {
  "class": "text-start"
};
var _hoisted_155 = {
  "class": "text-start"
};
var _hoisted_156 = {
  "class": "tab-pane fade",
  id: "kt_tab_pane_4",
  role: "tabpanel"
};
var _hoisted_157 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading mt-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "Preliminary Diagnosis")], -1 /* HOISTED */);
var _hoisted_158 = {
  "class": "section_box"
};
var _hoisted_159 = {
  "class": "mb-10 row"
};
var _hoisted_160 = {
  "class": "col-lg-4"
};
var _hoisted_161 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label required"
}, "Category", -1 /* HOISTED */);
var _hoisted_162 = {
  "class": "col-lg-4"
};
var _hoisted_163 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label required"
}, "Diagnosis", -1 /* HOISTED */);
var _hoisted_164 = {
  key: 0,
  "class": "col-lg-4"
};
var _hoisted_165 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Procedure", -1 /* HOISTED */);
var _hoisted_166 = {
  "class": "mb-10 row"
};
var _hoisted_167 = {
  "class": "col-lg-8"
};
var _hoisted_168 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Advise", -1 /* HOISTED */);
var _hoisted_169 = {
  "class": "col-lg-4"
};
var _hoisted_170 = ["onClick"];
var _hoisted_171 = {
  "class": "mb-10 row"
};
var _hoisted_172 = {
  "class": "table-responsive"
};
var _hoisted_173 = {
  "class": "table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
};
var _hoisted_174 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "fw-semibold fs-6 text-gray-800"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Category "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Diagnosis "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Procedure "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, " Action ")])], -1 /* HOISTED */);
var _hoisted_175 = {
  "class": "text-start"
};
var _hoisted_176 = {
  "class": "text-start"
};
var _hoisted_177 = {
  "class": "text-start"
};
var _hoisted_178 = {
  "class": "text-center"
};
var _hoisted_179 = ["onClick"];
var _hoisted_180 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "las la-trash fs-1"
}, null, -1 /* HOISTED */);
var _hoisted_181 = [_hoisted_180];
var _hoisted_182 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "History")], -1 /* HOISTED */);
var _hoisted_183 = {
  "class": "section_box"
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
}, " Date "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Category "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Diagnosis "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Procedure "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Advise ")])], -1 /* HOISTED */);
var _hoisted_187 = {
  "class": "text-start"
};
var _hoisted_188 = {
  "class": "text-start"
};
var _hoisted_189 = {
  "class": "text-start"
};
var _hoisted_190 = {
  "class": "text-start"
};
var _hoisted_191 = {
  "class": "text-start"
};
var _hoisted_192 = {
  "class": "tab-pane fade",
  id: "kt_tab_pane_5",
  role: "tabpanel"
};
var _hoisted_193 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading mt-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "Medicine Prescription")], -1 /* HOISTED */);
var _hoisted_194 = {
  "class": "section_box"
};
var _hoisted_195 = {
  "class": "mb-10 row"
};
var _hoisted_196 = {
  "class": "col-lg-6"
};
var _hoisted_197 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label required"
}, "Medicine", -1 /* HOISTED */);
var _hoisted_198 = {
  "class": "col-lg-2"
};
var _hoisted_199 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Dosage Form", -1 /* HOISTED */);
var _hoisted_200 = {
  "class": "col-lg-2"
};
var _hoisted_201 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Route", -1 /* HOISTED */);
var _hoisted_202 = {
  "class": "col-lg-2"
};
var _hoisted_203 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Dosage", -1 /* HOISTED */);
var _hoisted_204 = {
  "class": "mb-10 row"
};
var _hoisted_205 = {
  "class": "col-lg-4"
};
var _hoisted_206 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Frequency", -1 /* HOISTED */);
var _hoisted_207 = {
  "class": "col-lg-2"
};
var _hoisted_208 = {
  "class": "form-label"
};
var _hoisted_209 = {
  "class": "col-lg-2"
};
var _hoisted_210 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Qty", -1 /* HOISTED */);
var _hoisted_211 = {
  "class": "col-lg-4"
};
var _hoisted_212 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "To be Taken", -1 /* HOISTED */);
var _hoisted_213 = {
  "class": "d-flex"
};
var _hoisted_214 = ["onUpdate:modelValue", "value", "id"];
var _hoisted_215 = ["for"];
var _hoisted_216 = {
  "class": "mb-10 row"
};
var _hoisted_217 = {
  "class": "col-lg-8"
};
var _hoisted_218 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Instructions", -1 /* HOISTED */);
var _hoisted_219 = {
  "class": "col-lg-4"
};
var _hoisted_220 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Acquire From", -1 /* HOISTED */);
var _hoisted_221 = {
  "class": "d-flex"
};
var _hoisted_222 = ["onUpdate:modelValue", "value", "id"];
var _hoisted_223 = ["for"];
var _hoisted_224 = {
  "class": "mb-10 row"
};
var _hoisted_225 = {
  "class": "col-lg-12 text-end"
};
var _hoisted_226 = ["onClick"];
var _hoisted_227 = {
  "class": "row"
};
var _hoisted_228 = {
  "class": "table-responsive"
};
var _hoisted_229 = {
  "class": "table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
};
var _hoisted_230 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "fw-semibold fs-6 text-gray-800"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Medicine "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Route "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, " Dosage "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Frequency "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, " Duration "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, " Qty "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, " Acquire From "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, " Action ")])], -1 /* HOISTED */);
var _hoisted_231 = {
  "class": "text-start"
};
var _hoisted_232 = {
  "class": "text-start"
};
var _hoisted_233 = {
  "class": "text-center"
};
var _hoisted_234 = {
  "class": "text-start"
};
var _hoisted_235 = {
  "class": "text-center"
};
var _hoisted_236 = {
  "class": "text-center"
};
var _hoisted_237 = {
  "class": "text-center"
};
var _hoisted_238 = {
  "class": "text-center"
};
var _hoisted_239 = ["onClick"];
var _hoisted_240 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "las la-trash fs-1"
}, null, -1 /* HOISTED */);
var _hoisted_241 = [_hoisted_240];
var _hoisted_242 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading mt-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "Other Items")], -1 /* HOISTED */);
var _hoisted_243 = {
  "class": "section_box"
};
var _hoisted_244 = {
  "class": "mb-10 row"
};
var _hoisted_245 = {
  "class": "col-lg-6"
};
var _hoisted_246 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label required"
}, "Name", -1 /* HOISTED */);
var _hoisted_247 = {
  "class": "col-lg-1"
};
var _hoisted_248 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Qty", -1 /* HOISTED */);
var _hoisted_249 = {
  "class": "col-lg-5"
};
var _hoisted_250 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Instructions", -1 /* HOISTED */);
var _hoisted_251 = {
  "class": "mb-10 row"
};
var _hoisted_252 = {
  "class": "col-lg-6 text-start"
};
var _hoisted_253 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Acquire From", -1 /* HOISTED */);
var _hoisted_254 = {
  "class": "d-flex"
};
var _hoisted_255 = ["onUpdate:modelValue", "value", "id"];
var _hoisted_256 = ["for"];
var _hoisted_257 = {
  "class": "col-lg-6 text-end"
};
var _hoisted_258 = ["onClick"];
var _hoisted_259 = {
  "class": "row"
};
var _hoisted_260 = {
  "class": "table-responsive"
};
var _hoisted_261 = {
  "class": "table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
};
var _hoisted_262 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "fw-semibold fs-6 text-gray-800"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Medicine "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, " Qty "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, " Acquire From "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Instructions "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, " Action ")])], -1 /* HOISTED */);
var _hoisted_263 = {
  "class": "text-start"
};
var _hoisted_264 = {
  "class": "text-center"
};
var _hoisted_265 = {
  "class": "text-center"
};
var _hoisted_266 = {
  "class": "text-start"
};
var _hoisted_267 = {
  "class": "text-center"
};
var _hoisted_268 = ["onClick"];
var _hoisted_269 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "las la-trash fs-1"
}, null, -1 /* HOISTED */);
var _hoisted_270 = [_hoisted_269];
var _hoisted_271 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "Medicine History")], -1 /* HOISTED */);
var _hoisted_272 = {
  "class": "section_box"
};
var _hoisted_273 = {
  "class": "table-responsive"
};
var _hoisted_274 = {
  "class": "table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
};
var _hoisted_275 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "fw-semibold fs-6 text-gray-800"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Date "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Generic"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Route"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Dosage"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Frequency"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Days"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Acquire From"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Instructions")])], -1 /* HOISTED */);
var _hoisted_276 = {
  "class": "text-start"
};
var _hoisted_277 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "Other Item History")], -1 /* HOISTED */);
var _hoisted_278 = {
  "class": "section_box"
};
var _hoisted_279 = {
  "class": "table-responsive"
};
var _hoisted_280 = {
  "class": "table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
};
var _hoisted_281 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "fw-semibold fs-6 text-gray-800"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Date "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Generic"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Acquire From"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Instructions")])], -1 /* HOISTED */);
var _hoisted_282 = {
  "class": "text-start"
};
var _hoisted_283 = {
  "class": "tab-pane fade",
  id: "kt_tab_pane_6",
  role: "tabpanel"
};
var _hoisted_284 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading mt-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "Referral – Lab")], -1 /* HOISTED */);
var _hoisted_285 = {
  "class": "section_box"
};
var _hoisted_286 = {
  "class": "mb-10 row"
};
var _hoisted_287 = {
  "class": "col-lg-4"
};
var _hoisted_288 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label required"
}, "Test Category", -1 /* HOISTED */);
var _hoisted_289 = {
  "class": "col-lg-4"
};
var _hoisted_290 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label required"
}, "Test Type", -1 /* HOISTED */);
var _hoisted_291 = {
  "class": "col-lg-4"
};
var _hoisted_292 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label required"
}, "Test", -1 /* HOISTED */);
var _hoisted_293 = {
  "class": "mb-10 row"
};
var _hoisted_294 = {
  "class": "col-lg-4"
};
var _hoisted_295 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label required"
}, "Refer to Lab", -1 /* HOISTED */);
var _hoisted_296 = {
  "class": "col-lg-8"
};
var _hoisted_297 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Further Instructions", -1 /* HOISTED */);
var _hoisted_298 = {
  "class": "mb-10 row"
};
var _hoisted_299 = {
  "class": "col-lg-12 text-end"
};
var _hoisted_300 = ["onClick"];
var _hoisted_301 = {
  "class": "mb-10 row"
};
var _hoisted_302 = {
  "class": "table-responsive"
};
var _hoisted_303 = {
  "class": "table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
};
var _hoisted_304 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "fw-semibold fs-6 text-gray-800"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Test Category "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Test Type "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Test Name "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Further Instructions "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Refer to Lab "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, " Action ")])], -1 /* HOISTED */);
var _hoisted_305 = {
  "class": "text-start"
};
var _hoisted_306 = {
  "class": "text-start"
};
var _hoisted_307 = {
  "class": "text-start"
};
var _hoisted_308 = {
  "class": "text-start"
};
var _hoisted_309 = {
  "class": "text-start"
};
var _hoisted_310 = {
  "class": "text-center"
};
var _hoisted_311 = ["onClick"];
var _hoisted_312 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "las la-trash fs-1"
}, null, -1 /* HOISTED */);
var _hoisted_313 = [_hoisted_312];
var _hoisted_314 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading mt-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "Referral – Hospital")], -1 /* HOISTED */);
var _hoisted_315 = {
  "class": "section_box"
};
var _hoisted_316 = {
  "class": "mb-10 row"
};
var _hoisted_317 = {
  "class": "col-lg-4"
};
var _hoisted_318 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label required"
}, "Hospital", -1 /* HOISTED */);
var _hoisted_319 = {
  "class": "col-lg-2"
};
var _hoisted_320 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Priority", -1 /* HOISTED */);
var _hoisted_321 = {
  "class": "col-lg-6"
};
var _hoisted_322 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Remarks", -1 /* HOISTED */);
var _hoisted_323 = {
  "class": "mb-10 row"
};
var _hoisted_324 = {
  "class": "col-lg-12 text-end"
};
var _hoisted_325 = ["onClick"];
var _hoisted_326 = {
  "class": "mb-10 row"
};
var _hoisted_327 = {
  "class": "table-responsive"
};
var _hoisted_328 = {
  "class": "table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
};
var _hoisted_329 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "fw-semibold fs-6 text-gray-800"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Hospital "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, " Priority "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Remarks "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, " Action ")])], -1 /* HOISTED */);
var _hoisted_330 = {
  "class": "text-start"
};
var _hoisted_331 = {
  "class": "text-center"
};
var _hoisted_332 = {
  "class": "text-start"
};
var _hoisted_333 = {
  "class": "text-center"
};
var _hoisted_334 = ["onClick"];
var _hoisted_335 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "las la-trash fs-1"
}, null, -1 /* HOISTED */);
var _hoisted_336 = [_hoisted_335];
var _hoisted_337 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "Referral – Lab History")], -1 /* HOISTED */);
var _hoisted_338 = {
  "class": "section_box"
};
var _hoisted_339 = {
  "class": "table-responsive"
};
var _hoisted_340 = {
  "class": "table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
};
var _hoisted_341 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "fw-semibold fs-6 text-gray-800"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Date "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Test Category "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Test Type "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Test Name "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Further Instructions "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Refer to Lab ")])], -1 /* HOISTED */);
var _hoisted_342 = {
  "class": "text-start"
};
var _hoisted_343 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-weight-bold main_section_heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-uppercase"
}, "Referral – Hospital History")], -1 /* HOISTED */);
var _hoisted_344 = {
  "class": "section_box"
};
var _hoisted_345 = {
  "class": "table-responsive"
};
var _hoisted_346 = {
  "class": "table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
};
var _hoisted_347 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "fw-semibold fs-6 text-gray-800"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Date "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Hospital "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, " Priority "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-start"
}, " Remarks ")])], -1 /* HOISTED */);
var _hoisted_348 = {
  "class": "text-start"
};
var _hoisted_349 = {
  "class": "text-center"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$props$patientVisit2, _$props$patientVisit3, _$props$patientVisit4, _$props$patientVisit5, _$props$patientVisit6, _$props$patientVisit7, _$props$patientVisit8, _$props$patientVisit9, _$props$patient, _$props$patient2, _$props$patient3, _$props$patient4, _$props$patient5, _$props$patient6, _$props$patient7, _$props$patient8, _$props$patient9;
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  var _component_Toolbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Toolbar");
  var _component_v_select = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-select");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "Prescription"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Form"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[38] || (_cache[38] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      var _$props$patientVisit;
      return $setup.preForm.post(_ctx.route('registrations.checkout', (_$props$patientVisit = $props.patientVisit) === null || _$props$patientVisit === void 0 ? void 0 : _$props$patientVisit.id));
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Toolbar, {
    title: "Prescription",
    buttons: [{
      label: 'Cancel',
      link: _ctx.route('registrations.index'),
      "class": 'btn-secondary'
    }, {
      label: 'Checkout',
      link: null,
      type: 'submit',
      "class": 'btn-success',
      processing: $setup.preForm.processing
    }],
    breadcrumbs: [{
      label: 'Registrations',
      link: _ctx.route('registrations.index')
    }, {
      label: 'Update',
      link: null
    }]
  }, null, 8 /* PROPS */, ["buttons", "breadcrumbs"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" begin:: Content Body "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Container"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Card body"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Header vitals"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Avatar"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [$props.patient.patient_image ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
    key: 0,
    alt: "Pic",
    src: $props.patient.patient_image
  }, null, 8 /* PROPS */, _hoisted_11)) : $props.patient.patient_name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 1,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["bg-light-primary text-primary", "symbol-label fw-bolder fa-10x"])
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.patient.patient_name.charAt(0)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Avatar"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Name"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.patient.patient_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(": " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.patient.designation), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(": " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.patient.patient_age), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Name")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [_hoisted_19, _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$props$patientVisit2 = $props.patientVisit) === null || _$props$patientVisit2 === void 0 ? void 0 : _$props$patientVisit2.pulse), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_24, [_hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$props$patientVisit3 = $props.patientVisit) === null || _$props$patientVisit3 === void 0 ? void 0 : _$props$patientVisit3.temperature), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_26, [_hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$props$patientVisit4 = $props.patientVisit) === null || _$props$patientVisit4 === void 0 ? void 0 : _$props$patientVisit4.bp_systolic) + "/" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$props$patientVisit5 = $props.patientVisit) === null || _$props$patientVisit5 === void 0 ? void 0 : _$props$patientVisit5.bp_diastolic), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Height (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(((_$props$patientVisit6 = $props.patientVisit) === null || _$props$patientVisit6 === void 0 ? void 0 : _$props$patientVisit6.height_unit) === "Feet" ? "ft" : ((_$props$patientVisit7 = $props.patientVisit) === null || _$props$patientVisit7 === void 0 ? void 0 : _$props$patientVisit7.height_unit) === "Inches" ? "in" : "") + "): ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$props$patientVisit8 = $props.patientVisit) === null || _$props$patientVisit8 === void 0 ? void 0 : _$props$patientVisit8.height), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_29, [_hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$props$patientVisit9 = $props.patientVisit) === null || _$props$patientVisit9 === void 0 ? void 0 : _$props$patientVisit9.weight), 1 /* TEXT */)])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Header vitals"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [_hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.preForm.temperature,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.preForm.temperature = $event;
    }),
    options: _ctx.range(97.0, 106.0, 0.1).reverse(),
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.preForm.errors.temperature
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [_hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.preForm.bp_systolic,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.preForm.bp_systolic = $event;
    }),
    options: _ctx.range(40, 300, 5, 0),
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.preForm.errors.bp_systolic
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [_hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.preForm.bp_diastolic,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.preForm.bp_diastolic = $event;
    }),
    options: _ctx.range(40, 300, 5, 0),
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.preForm.errors.bp_diastolic
  }, null, 8 /* PROPS */, ["error"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [_hoisted_44, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.preForm.pulse,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.preForm.pulse = $event;
    }),
    options: _ctx.range(50, 120, 1, 0),
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.preForm.errors.pulse
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [_hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $setup.preForm.sugar = $event;
    }),
    type: "text",
    "class": "form-control form-control-sm",
    placeholder: "Sugar (mg/dL)"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.preForm.sugar]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.preForm.errors.sugar
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [_hoisted_48, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.preForm.weight,
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $setup.preForm.weight = $event;
    }),
    options: _ctx.range(1.0, 200.0, 0.1),
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.preForm.errors.weight
  }, null, 8 /* PROPS */, ["error"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, [_hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $setup.preForm.height = $event;
    }),
    type: "text",
    "class": "form-control form-control-sm",
    placeholder: "Height"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.preForm.height]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.preForm.errors.height
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [_hoisted_55, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.preForm.height_unit,
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $setup.preForm.height_unit = $event;
    }),
    options: $props.heightUnits,
    "class": "v-select-custom",
    placeholder: "Unit"
  }, null, 8 /* PROPS */, ["modelValue", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.preForm.errors.height_unit
  }, null, 8 /* PROPS */, ["error"])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_56, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [_hoisted_58, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $setup.preForm.notes = $event;
    }),
    "class": "form-control form-control-sm",
    rows: "4"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.preForm.notes]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.preForm.errors.notes
  }, null, 8 /* PROPS */, ["error"])])])]), _hoisted_59, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_60, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_61, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_62, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Table head"), _hoisted_63, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)((_$props$patient = $props.patient) === null || _$props$patient === void 0 ? void 0 : _$props$patient.patient_visits, function (history) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: history.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_64, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.created_at), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_65, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.pulse), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_66, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.temperature), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_67, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.bp_systolic) + "/" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.bp_diastolic), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_68, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.height) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((history === null || history === void 0 ? void 0 : history.height_unit) === "Feet" ? "ft" : (history === null || history === void 0 ? void 0 : history.height_unit) === "Inches" ? "in" : ""), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_69, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.weight), 1 /* TEXT */)]);
  }), 128 /* KEYED_FRAGMENT */))])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_70, [_hoisted_71, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_72, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_73, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_74, [_hoisted_75, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.riskFactorForm.risk_factor_id,
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $setup.riskFactorForm.risk_factor_id = $event;
    }),
    options: $props.riskFactors,
    label: "factor_name",
    reduce: function reduce(option) {
      return option.id;
    },
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options", "reduce"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.riskFactorForm.errors.risk_factor_id
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_76, [_hoisted_77, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $setup.riskFactorForm.risk_factor_notes = $event;
    }),
    "class": "form-control form-control-sm",
    rows: "2"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.riskFactorForm.risk_factor_notes]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.riskFactorForm.errors.risk_factor_notes
  }, null, 8 /* PROPS */, ["error"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_78, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_79, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-success btn-sm",
    onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.addRiskFactor, ["prevent"])
  }, " Add ", 8 /* PROPS */, _hoisted_80)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_81, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_82, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_83, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Table head"), _hoisted_84, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.preForm.patient_risk_factors, function (risk_factor) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_85, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getRiskFactorName(risk_factor.risk_factor_id)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_86, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(risk_factor.risk_factor_notes), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_87, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-icon btn-sm btn-danger",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $setup.deleteRiskFactor(risk_factor);
      }, ["prevent"])
    }, _hoisted_90, 8 /* PROPS */, _hoisted_88)])]);
  }), 256 /* UNKEYED_FRAGMENT */))])])])])]), _hoisted_91, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_92, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_93, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_94, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Table head"), _hoisted_95, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)((_$props$patient2 = $props.patient) === null || _$props$patient2 === void 0 ? void 0 : _$props$patient2.patient_risk_factors, function (history) {
    var _history$risk_factor;
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: history.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_96, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.created_at), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_97, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history === null || history === void 0 ? void 0 : (_history$risk_factor = history.risk_factor) === null || _history$risk_factor === void 0 ? void 0 : _history$risk_factor.factor_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_98, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.risk_factor_notes), 1 /* TEXT */)]);
  }), 128 /* KEYED_FRAGMENT */))])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_99, [_hoisted_100, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_101, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_102, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_103, [_hoisted_104, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.complaintForm.complaint_id,
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return $setup.complaintForm.complaint_id = $event;
    }),
    options: $props.complaints,
    label: "complaint_name",
    reduce: function reduce(option) {
      return option.id;
    },
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options", "reduce"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.complaintForm.errors.complaint_id
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_105, [_hoisted_106, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
      return $setup.complaintForm.complaint_notes = $event;
    }),
    "class": "form-control form-control-sm",
    rows: "2"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.complaintForm.complaint_notes]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.complaintForm.errors.complaint_notes
  }, null, 8 /* PROPS */, ["error"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_107, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_108, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-success btn-sm",
    onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.addComplaint, ["prevent"])
  }, " Add ", 8 /* PROPS */, _hoisted_109)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_110, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_111, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_112, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Table head"), _hoisted_113, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.preForm.patient_complaints, function (complaint) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_114, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getComplaintName(complaint.complaint_id)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_115, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(complaint.complaint_notes), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_116, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-icon btn-sm btn-danger",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $setup.deleteComplaint(complaint);
      }, ["prevent"])
    }, _hoisted_119, 8 /* PROPS */, _hoisted_117)])]);
  }), 256 /* UNKEYED_FRAGMENT */))])])])])]), _hoisted_120, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_121, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_122, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_123, [_hoisted_124, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.diseaseForm.disease_id,
    "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
      return $setup.diseaseForm.disease_id = $event;
    }),
    options: $props.diseases,
    label: "disease_name",
    reduce: function reduce(option) {
      return option.id;
    },
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options", "reduce"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.diseaseForm.errors.disease_id
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_125, [_hoisted_126, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
      return $setup.diseaseForm.disease_notes = $event;
    }),
    "class": "form-control form-control-sm",
    rows: "2"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.diseaseForm.disease_notes]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.diseaseForm.errors.disease_notes
  }, null, 8 /* PROPS */, ["error"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_127, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_128, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-success btn-sm",
    onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.addDisease, ["prevent"])
  }, " Add ", 8 /* PROPS */, _hoisted_129)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_130, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_131, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_132, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Table head"), _hoisted_133, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.preForm.patient_diseases, function (disease) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_134, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getDiseaseName(disease.disease_id)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_135, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(disease.disease_notes), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_136, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-icon btn-sm btn-danger",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $setup.deleteDisease(disease);
      }, ["prevent"])
    }, _hoisted_139, 8 /* PROPS */, _hoisted_137)])]);
  }), 256 /* UNKEYED_FRAGMENT */))])])])])]), _hoisted_140, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_141, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_142, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_143, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Table head"), _hoisted_144, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)((_$props$patient3 = $props.patient) === null || _$props$patient3 === void 0 ? void 0 : _$props$patient3.patient_complaints, function (history) {
    var _history$complaint;
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: history.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_145, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.created_at), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_146, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history === null || history === void 0 ? void 0 : (_history$complaint = history.complaint) === null || _history$complaint === void 0 ? void 0 : _history$complaint.complaint_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_147, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.complaint_notes), 1 /* TEXT */)]);
  }), 128 /* KEYED_FRAGMENT */))])])])]), _hoisted_148, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_149, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_150, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_151, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Table head"), _hoisted_152, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)((_$props$patient4 = $props.patient) === null || _$props$patient4 === void 0 ? void 0 : _$props$patient4.patient_diseases, function (history) {
    var _history$disease;
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: history.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_153, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.created_at), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_154, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history === null || history === void 0 ? void 0 : (_history$disease = history.disease) === null || _history$disease === void 0 ? void 0 : _history$disease.disease_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_155, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.disease_notes), 1 /* TEXT */)]);
  }), 128 /* KEYED_FRAGMENT */))])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_156, [_hoisted_157, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_158, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_159, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_160, [_hoisted_161, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.diagForm.disease_type_id,
    "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
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
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_162, [_hoisted_163, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.diagForm.disease_id,
    "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
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
  }, null, 8 /* PROPS */, ["error"])]), $setup.diagForm.disease_type_id === 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_164, [_hoisted_165, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.diagForm.procedure_id,
    "onUpdate:modelValue": _cache[17] || (_cache[17] = function ($event) {
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
  }, null, 8 /* PROPS */, ["error"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_166, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_167, [_hoisted_168, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[18] || (_cache[18] = function ($event) {
      return $setup.diagForm.diagnosis_notes = $event;
    }),
    "class": "form-control form-control-sm",
    rows: "4"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.diagForm.diagnosis_notes]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.diagForm.errors.diagnosis_notes
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_169, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-success btn-sm mt-7",
    onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.addDiagnosis, ["prevent"])
  }, " Add ", 8 /* PROPS */, _hoisted_170)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_171, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_172, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_173, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Table head"), _hoisted_174, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.preForm.patient_diagnoses, function (dig) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_175, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getDiseaseTypeName(dig.disease_type_id)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_176, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getDiseaseName(dig.disease_id)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_177, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getProcedureName(dig.procedure_id)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_178, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-icon btn-sm btn-danger",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $setup.deleteDiagnosis(dig);
      }, ["prevent"])
    }, _hoisted_181, 8 /* PROPS */, _hoisted_179)])]);
  }), 256 /* UNKEYED_FRAGMENT */))])])])])]), _hoisted_182, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_183, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_184, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_185, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Table head"), _hoisted_186, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)((_$props$patient5 = $props.patient) === null || _$props$patient5 === void 0 ? void 0 : _$props$patient5.patient_diagnoses, function (history) {
    var _history$disease_type, _history$disease2, _history$procedure;
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: history.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_187, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.created_at), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_188, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history === null || history === void 0 ? void 0 : (_history$disease_type = history.disease_type) === null || _history$disease_type === void 0 ? void 0 : _history$disease_type.type_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_189, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history === null || history === void 0 ? void 0 : (_history$disease2 = history.disease) === null || _history$disease2 === void 0 ? void 0 : _history$disease2.disease_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_190, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history === null || history === void 0 ? void 0 : (_history$procedure = history.procedure) === null || _history$procedure === void 0 ? void 0 : _history$procedure.procedure_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_191, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.diagnosis_notes), 1 /* TEXT */)]);
  }), 128 /* KEYED_FRAGMENT */))])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_192, [_hoisted_193, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_194, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_195, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_196, [_hoisted_197, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.medicineOption,
    "onUpdate:modelValue": _cache[19] || (_cache[19] = function ($event) {
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
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" --- [ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.medicine_generic.generic_name) + " ]", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "--- (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.total_stocks_qty || 0) + ")", 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    "selected-option": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
      var medicine_name = _ref.medicine_name,
        total_stocks_qty = _ref.total_stocks_qty,
        medicine_generic = _ref.medicine_generic;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(medicine_name), 1 /* TEXT */), medicine_generic !== null && medicine_generic !== void 0 && medicine_generic.generic_name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: 0
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" --- [ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(medicine_generic.generic_name) + " ]", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "--- (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(total_stocks_qty || 0) + ")", 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["modelValue", "options", "reduce"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.medicineForm.errors.medicine_id
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_198, [_hoisted_199, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[20] || (_cache[20] = function ($event) {
      return $setup.medicineForm.medicine_type = $event;
    }),
    type: "text",
    "class": "form-control form-control-sm form-control-solid",
    readonly: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.medicineForm.medicine_type]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_200, [_hoisted_201, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.medicineForm.route_id,
    "onUpdate:modelValue": _cache[21] || (_cache[21] = function ($event) {
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
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_202, [_hoisted_203, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.medicineForm.dosage,
    "onUpdate:modelValue": _cache[22] || (_cache[22] = function ($event) {
      return $setup.medicineForm.dosage = $event;
    }),
    options: ['1/4', '1/3', '1/2', '3/4'].concat(_ctx.range(1, 180, 1, 0)),
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.medicineForm.errors.dosage
  }, null, 8 /* PROPS */, ["error"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_204, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_205, [_hoisted_206, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.medicineForm.frequency_id,
    "onUpdate:modelValue": _cache[23] || (_cache[23] = function ($event) {
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
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_207, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_208, "Duration (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.medicineForm.duration_unit) + ")", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[24] || (_cache[24] = function ($event) {
      return $setup.medicineForm.duration_value = $event;
    }),
    type: "text",
    "class": "form-control form-control-sm"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.medicineForm.duration_value]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_209, [_hoisted_210, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[25] || (_cache[25] = function ($event) {
      return $setup.medicineForm.qty = $event;
    }),
    type: "text",
    "class": "form-control form-control-sm"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.medicineForm.qty]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_211, [_hoisted_212, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_213, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.optionsTakenMeals, function (taken_meal) {
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
    }, null, 8 /* PROPS */, _hoisted_214), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $setup.medicineForm.taken_meal]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
      "class": "form-check-label",
      "for": "taken_meal_".concat(taken_meal)
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(taken_meal), 9 /* TEXT, PROPS */, _hoisted_215)]);
  }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.medicineForm.errors.taken_meal
  }, null, 8 /* PROPS */, ["error"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_216, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_217, [_hoisted_218, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[26] || (_cache[26] = function ($event) {
      return $setup.medicineForm.medicine_instructions = $event;
    }),
    "class": "form-control form-control-sm",
    rows: "2"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.medicineForm.medicine_instructions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.medicineForm.errors.medicine_instructions
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_219, [_hoisted_220, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_221, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.optionsAcquireFrom, function (acquire_from) {
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
    }, null, 8 /* PROPS */, _hoisted_222), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $setup.medicineForm.acquire_from]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
      "class": "form-check-label",
      "for": "acquire_from_".concat(acquire_from)
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(acquire_from), 9 /* TEXT, PROPS */, _hoisted_223)]);
  }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.medicineForm.errors.acquire_from
  }, null, 8 /* PROPS */, ["error"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_224, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_225, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-success btn-sm",
    onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.addMedicine, ["prevent"])
  }, " Add ", 8 /* PROPS */, _hoisted_226)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_227, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_228, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_229, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Table head"), _hoisted_230, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.preForm.patient_medicines, function (pmed) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_231, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getMedicineName(pmed.medicine_id)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_232, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getRouteName(pmed.route_id)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_233, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pmed.dosage), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_234, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getFrequencyName(pmed.frequency_id)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_235, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pmed.duration_value), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_236, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pmed.qty), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_237, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pmed.acquire_from), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_238, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-icon btn-sm btn-danger",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $setup.deleteMedicine(pmed);
      }, ["prevent"])
    }, _hoisted_241, 8 /* PROPS */, _hoisted_239)])]);
  }), 256 /* UNKEYED_FRAGMENT */))])])])])]), _hoisted_242, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_243, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_244, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_245, [_hoisted_246, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.otherMedicineForm.medicine_id,
    "onUpdate:modelValue": _cache[27] || (_cache[27] = function ($event) {
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
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" --- [ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.medicine_generic.generic_name) + " ]", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "--- (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.total_stocks_qty || 0) + ")", 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    "selected-option": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref2) {
      var medicine_name = _ref2.medicine_name,
        total_stocks_qty = _ref2.total_stocks_qty,
        medicine_generic = _ref2.medicine_generic;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(medicine_name), 1 /* TEXT */), medicine_generic !== null && medicine_generic !== void 0 && medicine_generic.generic_name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: 0
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" --- [ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(medicine_generic.generic_name) + " ]", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "--- (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(total_stocks_qty || 0) + ")", 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["modelValue", "options", "reduce"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.otherMedicineForm.errors.medicine_id
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_247, [_hoisted_248, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[28] || (_cache[28] = function ($event) {
      return $setup.otherMedicineForm.qty = $event;
    }),
    type: "text",
    "class": "form-control form-control-sm"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.otherMedicineForm.qty]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.otherMedicineForm.errors.qty
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_249, [_hoisted_250, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[29] || (_cache[29] = function ($event) {
      return $setup.otherMedicineForm.medicine_instructions = $event;
    }),
    "class": "form-control form-control-sm",
    rows: "1"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.otherMedicineForm.medicine_instructions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.otherMedicineForm.errors.medicine_instructions
  }, null, 8 /* PROPS */, ["error"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_251, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_252, [_hoisted_253, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_254, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.optionsAcquireFrom, function (acquire_from) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: acquire_from,
      "class": "form-check form-check-custom form-check-sm me-10"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return $setup.otherMedicineForm.acquire_from = $event;
      },
      value: acquire_from,
      "class": "form-check-input",
      name: "acquire_from_other",
      type: "radio",
      id: "acquire_from_other_".concat(acquire_from)
    }, null, 8 /* PROPS */, _hoisted_255), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $setup.otherMedicineForm.acquire_from]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
      "class": "form-check-label",
      "for": "acquire_from_other_".concat(acquire_from)
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(acquire_from), 9 /* TEXT, PROPS */, _hoisted_256)]);
  }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.otherMedicineForm.errors.acquire_from
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_257, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-success btn-sm",
    onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.addOtherMedicine, ["prevent"])
  }, " Add ", 8 /* PROPS */, _hoisted_258)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_259, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_260, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_261, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Table head"), _hoisted_262, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.preForm.patient_other_medicines, function (pmed) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_263, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getMedicineName(pmed.medicine_id)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_264, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pmed.qty), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_265, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pmed.acquire_from), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_266, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pmed.medicine_instructions), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_267, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-icon btn-sm btn-danger",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $setup.deleteOtherMedicine(pmed);
      }, ["prevent"])
    }, _hoisted_270, 8 /* PROPS */, _hoisted_268)])]);
  }), 256 /* UNKEYED_FRAGMENT */))])])])])]), _hoisted_271, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_272, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_273, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_274, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Table head"), _hoisted_275, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)((_$props$patient6 = $props.patient) === null || _$props$patient6 === void 0 ? void 0 : _$props$patient6.patient_medicines, function (history) {
    var _history$medicine, _history$medicine2, _history$route, _history$frequency;
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: history.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_276, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.created_at), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history === null || history === void 0 ? void 0 : (_history$medicine = history.medicine) === null || _history$medicine === void 0 ? void 0 : _history$medicine.medicine_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history === null || history === void 0 ? void 0 : (_history$medicine2 = history.medicine) === null || _history$medicine2 === void 0 ? void 0 : _history$medicine2.medicine_generic.generic_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history === null || history === void 0 ? void 0 : (_history$route = history.route) === null || _history$route === void 0 ? void 0 : _history$route.route_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.dosage), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history === null || history === void 0 ? void 0 : (_history$frequency = history.frequency) === null || _history$frequency === void 0 ? void 0 : _history$frequency.frequency_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.duration_value), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.acquire_from), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.medicine_instructions), 1 /* TEXT */)]);
  }), 128 /* KEYED_FRAGMENT */))])])])]), _hoisted_277, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_278, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_279, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_280, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Table head"), _hoisted_281, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)((_$props$patient7 = $props.patient) === null || _$props$patient7 === void 0 ? void 0 : _$props$patient7.patient_other_medicines, function (history) {
    var _history$medicine3, _history$medicine4;
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: history.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_282, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.created_at), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history === null || history === void 0 ? void 0 : (_history$medicine3 = history.medicine) === null || _history$medicine3 === void 0 ? void 0 : _history$medicine3.medicine_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history === null || history === void 0 ? void 0 : (_history$medicine4 = history.medicine) === null || _history$medicine4 === void 0 ? void 0 : _history$medicine4.medicine_generic.generic_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.acquire_from), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.medicine_instructions), 1 /* TEXT */)]);
  }), 128 /* KEYED_FRAGMENT */))])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_283, [_hoisted_284, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_285, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_286, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_287, [_hoisted_288, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.labForm.test_category_id,
    "onUpdate:modelValue": _cache[30] || (_cache[30] = function ($event) {
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
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_289, [_hoisted_290, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.labForm.test_type_id,
    "onUpdate:modelValue": _cache[31] || (_cache[31] = function ($event) {
      return $setup.labForm.test_type_id = $event;
    }),
    options: $setup.filterTestTypes,
    label: "type_name",
    reduce: function reduce(option) {
      return option.id;
    },
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options", "reduce"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.labForm.errors.test_type_id
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_291, [_hoisted_292, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.labForm.test_id,
    "onUpdate:modelValue": _cache[32] || (_cache[32] = function ($event) {
      return $setup.labForm.test_id = $event;
    }),
    options: $setup.filterTests,
    label: "test_name",
    reduce: function reduce(option) {
      return option.id;
    },
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options", "reduce"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.labForm.errors.test_id
  }, null, 8 /* PROPS */, ["error"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_293, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_294, [_hoisted_295, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.labForm.lab_id,
    "onUpdate:modelValue": _cache[33] || (_cache[33] = function ($event) {
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
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_296, [_hoisted_297, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[34] || (_cache[34] = function ($event) {
      return $setup.labForm.test_instructions = $event;
    }),
    "class": "form-control form-control-sm",
    rows: "2"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.labForm.test_instructions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.labForm.errors.test_instructions
  }, null, 8 /* PROPS */, ["error"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_298, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_299, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-success btn-sm",
    onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.addLab, ["prevent"])
  }, " Add ", 8 /* PROPS */, _hoisted_300)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_301, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_302, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_303, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Table head"), _hoisted_304, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.preForm.patient_labs, function (lab) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_305, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getTestCategoryName(lab.test_category_id)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_306, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getTestTypeName(lab.test_type_id)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_307, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getTestName(lab.test_id)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_308, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(lab.test_instructions), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_309, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getLabName(lab.test_category_id)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_310, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-icon btn-sm btn-danger",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $setup.deleteLab(lab);
      }, ["prevent"])
    }, _hoisted_313, 8 /* PROPS */, _hoisted_311)])]);
  }), 256 /* UNKEYED_FRAGMENT */))])])])])]), _hoisted_314, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_315, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_316, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_317, [_hoisted_318, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.hospitalForm.hospital_id,
    "onUpdate:modelValue": _cache[35] || (_cache[35] = function ($event) {
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
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_319, [_hoisted_320, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    modelValue: $setup.hospitalForm.priority,
    "onUpdate:modelValue": _cache[36] || (_cache[36] = function ($event) {
      return $setup.hospitalForm.priority = $event;
    }),
    options: _ctx.range(1, 50, 1, 0),
    "class": "v-select-custom",
    placeholder: "Please Select"
  }, null, 8 /* PROPS */, ["modelValue", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.hospitalForm.errors.priority
  }, null, 8 /* PROPS */, ["error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_321, [_hoisted_322, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[37] || (_cache[37] = function ($event) {
      return $setup.hospitalForm.remarks = $event;
    }),
    "class": "form-control form-control-sm",
    rows: "2"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.hospitalForm.remarks]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ServerErrorMessage"], {
    error: $setup.hospitalForm.errors.remarks
  }, null, 8 /* PROPS */, ["error"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_323, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_324, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-success btn-sm",
    onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.addHospital, ["prevent"])
  }, " Add ", 8 /* PROPS */, _hoisted_325)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_326, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_327, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_328, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Table head"), _hoisted_329, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.preForm.patient_hospitals, function (hospital) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_330, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getHospitalName(hospital.hospital_id)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_331, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(hospital.priority), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_332, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(hospital.remarks), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_333, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-icon btn-sm btn-danger",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $setup.deleteHospital(hospital);
      }, ["prevent"])
    }, _hoisted_336, 8 /* PROPS */, _hoisted_334)])]);
  }), 256 /* UNKEYED_FRAGMENT */))])])])])]), _hoisted_337, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_338, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_339, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_340, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Table head"), _hoisted_341, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)((_$props$patient8 = $props.patient) === null || _$props$patient8 === void 0 ? void 0 : _$props$patient8.patient_labs, function (history) {
    var _history$test_categor, _history$test_type, _history$test, _history$lab;
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: history.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_342, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.created_at), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history === null || history === void 0 ? void 0 : (_history$test_categor = history.test_category) === null || _history$test_categor === void 0 ? void 0 : _history$test_categor.category_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history === null || history === void 0 ? void 0 : (_history$test_type = history.test_type) === null || _history$test_type === void 0 ? void 0 : _history$test_type.type_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history === null || history === void 0 ? void 0 : (_history$test = history.test) === null || _history$test === void 0 ? void 0 : _history$test.test_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.test_instructions), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history === null || history === void 0 ? void 0 : (_history$lab = history.lab) === null || _history$lab === void 0 ? void 0 : _history$lab.lab_name), 1 /* TEXT */)]);
  }), 128 /* KEYED_FRAGMENT */))])])])]), _hoisted_343, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_344, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_345, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_346, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Table head"), _hoisted_347, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)((_$props$patient9 = $props.patient) === null || _$props$patient9 === void 0 ? void 0 : _$props$patient9.patient_hospitals, function (history) {
    var _history$hospital;
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: history.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_348, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.created_at), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history === null || history === void 0 ? void 0 : (_history$hospital = history.hospital) === null || _history$hospital === void 0 ? void 0 : _history$hospital.hospital_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_349, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.priority), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(history.remarks), 1 /* TEXT */)]);
  }), 128 /* KEYED_FRAGMENT */))])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Card body")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Card")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Container")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end:: Content Body ")], 32 /* HYDRATE_EVENTS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Form")], 64 /* STABLE_FRAGMENT */);
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
/* harmony import */ var C_laragon_www_nspp_emrs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_nspp_emrs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ServerErrorMessage_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ServerErrorMessage_vue_vue_type_template_id_c870456e_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/Components/alerts/ServerErrorMessage.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/Pages/Registrations/Proceed.vue":
/*!******************************************************!*\
  !*** ./resources/ts/Pages/Registrations/Proceed.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Proceed_vue_vue_type_template_id_6c100594_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Proceed.vue?vue&type=template&id=6c100594&ts=true */ "./resources/ts/Pages/Registrations/Proceed.vue?vue&type=template&id=6c100594&ts=true");
/* harmony import */ var _Proceed_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Proceed.vue?vue&type=script&setup=true&lang=ts */ "./resources/ts/Pages/Registrations/Proceed.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var C_laragon_www_nspp_emrs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_nspp_emrs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Proceed_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Proceed_vue_vue_type_template_id_6c100594_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/Pages/Registrations/Proceed.vue"]])
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

/***/ "./resources/ts/Pages/Registrations/Proceed.vue?vue&type=script&setup=true&lang=ts":
/*!*****************************************************************************************!*\
  !*** ./resources/ts/Pages/Registrations/Proceed.vue?vue&type=script&setup=true&lang=ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Proceed_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Proceed_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Proceed.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Registrations/Proceed.vue?vue&type=script&setup=true&lang=ts");
 

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

/***/ "./resources/ts/Pages/Registrations/Proceed.vue?vue&type=template&id=6c100594&ts=true":
/*!********************************************************************************************!*\
  !*** ./resources/ts/Pages/Registrations/Proceed.vue?vue&type=template&id=6c100594&ts=true ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Proceed_vue_vue_type_template_id_6c100594_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Proceed_vue_vue_type_template_id_6c100594_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Proceed.vue?vue&type=template&id=6c100594&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Registrations/Proceed.vue?vue&type=template&id=6c100594&ts=true");


/***/ })

}]);