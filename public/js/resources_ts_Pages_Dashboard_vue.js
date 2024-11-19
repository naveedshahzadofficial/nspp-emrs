"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_ts_Pages_Dashboard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Components/widgets/charts/HighChart.vue?vue&type=script&lang=ts":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Components/widgets/charts/HighChart.vue?vue&type=script&lang=ts ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuejs3_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuejs3-datepicker */ "./node_modules/vuejs3-datepicker/build/vuejs3-datepicker.js");




highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_2___default()((highcharts__WEBPACK_IMPORTED_MODULE_1___default()));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  components: {
    Datepicker: vuejs3_datepicker__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    chartId: String,
    chartTitle: String,
    chartHeight: String,
    chartType: String,
    isShowDropDown: Boolean,
    containerHeight: String,
    series: Array,
    xAxisxategories: Array,
    yAxis: Array,
    selectedCategory: String
  },
  name: 'ChartComponent',
  emits: ['updateData'],
  data: function data() {
    return {
      chartInstance: null,
      dataToParent: {},
      isShowMonth: true,
      month: '',
      monthMenu: false,
      picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
      chartDate: "",
      viewMode: (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('year'),
      format: function format(date) {
        var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
        var year = date.getFullYear();
        return "".concat(month, "-").concat(year);
      }
    };
  },
  watch: {
    picker: function picker() {
      // If only show months
      if (this.isShowMonth) {
        // convert date to only year and month.
        this.chartDate = this.picker.getFullYear() + '-' + (this.picker.getMonth() + 1);
      } else {
        this.chartDate = this.chartDate = this.picker.getFullYear() + '-' + (this.picker.getMonth() + 1) + '-' + this.getDate();
      }
      this.handleChange(this.chartDate);
    },
    chartTitle: function chartTitle(value) {
      console.log('here in chartTitle watch', this.chartTitle);
      if (this.chartInstance) {
        this.chartInstance.setTitle({
          text: value
        });
      }
    },
    series: function series(value) {
      if (this.chartInstance) {
        this.chartInstance.update({
          series: value
        }, true, true);
      }
    },
    xAxisxategories: function xAxisxategories(value) {
      if (this.chartInstance) {
        this.chartInstance.update({
          xAxis: {
            categories: value
          }
        }, true, true);
      }
    }
  },
  methods: {
    initChart: function initChart() {
      // @ts-ignore
      this.chartInstance = highcharts__WEBPACK_IMPORTED_MODULE_1___default().chart(this.chartId, {
        chart: {
          type: this.chartType
        },
        title: {
          text: this.chartTitle
        },
        xAxis: {
          categories: this.xAxisxategories,
          title: {
            text: null
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Values',
            align: 'high'
          },
          labels: {
            overflow: 'justify'
          }
        },
        plotOptions: {
          series: {
            colorByPoint: true
          }
        },
        series: this.series,
        exporting: {
          menuItemDefinitions: {
            // Custom definition
            label: {
              onclick: function onclick() {
                this.renderer.label('You just clicked a custom menu item', 100, 100).attr({
                  fill: '#a4edba',
                  r: 5,
                  padding: 10,
                  zIndex: 10
                }).css({
                  fontSize: '1.5em'
                }).add();
              },
              text: 'Show label'
            }
          },
          buttons: {
            contextButton: {
              // "printChart", 'label','separator' ,  'downloadPNG', 'downloadSVG'
              menuItems: ["viewFullscreen"]
            }
          }
        }
      });
    },
    updateChart: function updateChart() {
      // Destroy the current chart and re-initialize it
      // @ts-ignore
      // Highcharts.charts[0].destroy();
      // this.$emit('updateData', this.picker);
      // console.log('i am called and event emitted...');
    },
    // handleInput(value: string) {
    //     console.log('Input event triggered with date:', value);
    // },
    handleChange: function handleChange(value) {
      // This function is used to send data to parent.
      // To make this component more generic, send chart id and date value to parent component and handle calls there...
      this.dataToParent['date'] = this.chartDate;
      this.dataToParent['chartId'] = this.chartId;
      this.$emit('updateData', this.dataToParent);
    },
    updateViewMode: function updateViewMode(mode) {
      this.viewMode = mode === 'year' ? 'year' : 'months';
    },
    onMonthChange: function onMonthChange(month) {
      console.log('Selected Month:', month);
    }
  },
  mounted: function mounted() {
    console.log('asdfad', this.formatedDate);
    this.initChart();
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Dashboard.vue?vue&type=script&lang=ts&setup=true":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Dashboard.vue?vue&type=script&lang=ts&setup=true ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _Components_widgets_charts_HighChart_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/widgets/charts/HighChart.vue */ "./resources/ts/Components/widgets/charts/HighChart.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/vue3 */ "./node_modules/@inertiajs/vue3/dist/index.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }





var newDate = '';
// const getTitle = computed(() => { return chartOneTitle.value });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  __name: 'Dashboard',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var childData = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    // Reactive variable to store the server response
    var responseMessage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var page = (0,_inertiajs_vue3__WEBPACK_IMPORTED_MODULE_3__.usePage)();
    var originalData = page.props.data;
    var purchasedItemsByCategory = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(originalData);
    var consumedItemsByCategory = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(originalData);
    var patientVisits = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(originalData);
    var employeeReimbursements = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(originalData);
    var chartOneTitle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('Purchased Items By Category');
    var chartTwoTitle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('Consumed Items By Category');
    var chartThreeTitle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('Patient Visits');
    var chartFourTitle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('Total Employee Reimbursements');
    var handleUpdate = function handleUpdate(dataFromChild) {
      if (dataFromChild.chartId === 'chart-container-2') {
        chartOneTitle.value = 'Purchased Items By Category';
        getData(dataFromChild.chartId, dataFromChild.date);
      }
      if (dataFromChild.chartId === 'chart-container-3') {
        chartTwoTitle.value = 'Consumed Items By Category';
        getData(dataFromChild.chartId, dataFromChild.date);
      }
      if (dataFromChild.chartId === 'chart-container-4') {
        chartThreeTitle.value = 'Patient Visits';
        getData(dataFromChild.chartId, dataFromChild.date);
      }
      if (dataFromChild.chartId === 'chart-container-5') {
        chartThreeTitle.value = 'Total Employee Reimbursements';
        getData(dataFromChild.chartId, dataFromChild.date);
      }
      //childData.value = data;
    };
    function getData(_x, _x2) {
      return _getData.apply(this, arguments);
    }
    function _getData() {
      _getData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(container, date) {
        var url, response, temp;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              url = "";
              _context.t0 = container;
              _context.next = _context.t0 === "chart-container-2" ? 5 : _context.t0 === "chart-container-3" ? 7 : _context.t0 === "chart-container-4" ? 9 : _context.t0 === "chart-container-5" ? 11 : 13;
              break;
            case 5:
              url = '/get-purchased-items-by-category';
              return _context.abrupt("break", 14);
            case 7:
              url = '/get-consumed-items-by-category';
              return _context.abrupt("break", 14);
            case 9:
              url = '/get-patient-visits';
              return _context.abrupt("break", 14);
            case 11:
              url = '/get-employee-reimbursements';
              return _context.abrupt("break", 14);
            case 13:
              url = "";
            case 14:
              _context.next = 16;
              return axios__WEBPACK_IMPORTED_MODULE_2___default().get(url, {
                params: {
                  date: date
                }
              });
            case 16:
              response = _context.sent;
              temp = {};
              if (container === 'chart-container-2' && response.data) {
                temp['purchased_items_by_category'] = response.data;
                purchasedItemsByCategory.value = temp;
              } else if (container === 'chart-container-3' && response.data) {
                temp['consumed_items_by_category'] = response.data;
                consumedItemsByCategory.value = temp;
              } else if (container === 'chart-container-4' && response.data) {
                temp['patient_visits'] = response.data;
                patientVisits.value = temp;
              } else if (container === 'chart-container-5' && response.data) {
                temp['total_reimbursements'] = response.data;
                employeeReimbursements.value = temp;
              }
              _context.next = 24;
              break;
            case 21:
              _context.prev = 21;
              _context.t1 = _context["catch"](0);
              console.error('Error fetching data:', _context.t1);
            case 24:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 21]]);
      }));
      return _getData.apply(this, arguments);
    }
    var __returned__ = {
      childData: childData,
      responseMessage: responseMessage,
      page: page,
      originalData: originalData,
      get purchasedItemsByCategory() {
        return purchasedItemsByCategory;
      },
      set purchasedItemsByCategory(v) {
        purchasedItemsByCategory = v;
      },
      get consumedItemsByCategory() {
        return consumedItemsByCategory;
      },
      set consumedItemsByCategory(v) {
        consumedItemsByCategory = v;
      },
      get patientVisits() {
        return patientVisits;
      },
      set patientVisits(v) {
        patientVisits = v;
      },
      get employeeReimbursements() {
        return employeeReimbursements;
      },
      set employeeReimbursements(v) {
        employeeReimbursements = v;
      },
      get chartOneTitle() {
        return chartOneTitle;
      },
      set chartOneTitle(v) {
        chartOneTitle = v;
      },
      get chartTwoTitle() {
        return chartTwoTitle;
      },
      set chartTwoTitle(v) {
        chartTwoTitle = v;
      },
      get chartThreeTitle() {
        return chartThreeTitle;
      },
      set chartThreeTitle(v) {
        chartThreeTitle = v;
      },
      get chartFourTitle() {
        return chartFourTitle;
      },
      set chartFourTitle(v) {
        chartFourTitle = v;
      },
      newDate: newDate,
      handleUpdate: handleUpdate,
      getData: getData,
      HighChart: _Components_widgets_charts_HighChart_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Components/widgets/charts/HighChart.vue?vue&type=template&id=517d6ec3&scoped=true&ts=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Components/widgets/charts/HighChart.vue?vue&type=template&id=517d6ec3&scoped=true&ts=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-517d6ec3"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "row"
};
var _hoisted_2 = {
  key: 0
};
var _hoisted_3 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "filter",
    "class": "form-label fw-bold"
  }, "Select Month:", -1 /* HOISTED */);
});
var _hoisted_4 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
});
var _hoisted_5 = ["id"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_datepicker = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("datepicker");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_ctx.isShowDropDown ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [_hoisted_3, _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <v-date-picker\n        v-model=\"picker\"\n        type=\"month\"\n        :enable-time-picker=\"false\"\n        :clearable=\"true\"\n        auto-apply\n        :format=\"format\"\n        :preview-format=\"format\"\n        placeholder=\"Select Month\"\n      ></v-date-picker> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_datepicker, {
    modelValue: _ctx.picker,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.picker = $event;
    }),
    placeholder: "Select Month",
    "minimum-view": 'month',
    "maximum-view": 'month'
  }, null, 8 /* PROPS */, ["modelValue"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    id: _ctx.chartId,
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)('height:' + _ctx.chartHeight)
  }, null, 12 /* STYLE, PROPS */, _hoisted_5)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Dashboard.vue?vue&type=template&id=4ab4eb71&ts=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Dashboard.vue?vue&type=template&id=4ab4eb71&ts=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  "class": "container"
};
var _hoisted_3 = {
  "class": "row light-grey-background"
};
var _hoisted_4 = {
  "class": "col-xl-3"
};
var _hoisted_5 = {
  href: "#",
  "class": "card card-custom bg-primary bg-hover-state-primary card-stretch gutter-b"
};
var _hoisted_6 = {
  "class": "card-body"
};
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "svg-icon svg-icon-white svg-icon-3x ml-n1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Svg Icon | path:assets/media/svg/icons/Media/Equalizer.svg"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  fill: "#000000",
  height: "200px",
  width: "200px",
  version: "1.1",
  id: "Layer_1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 459.326 459.326",
  "xml:space": "preserve"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", {
  id: "SVGRepo_bgCarrier",
  "stroke-width": "0"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", {
  id: "SVGRepo_tracerCarrier",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", {
  id: "SVGRepo_iconCarrier"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "78.275",
  cy: "91.207",
  r: "26.807"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M410.724,346.052h-84.827v-10.835h-50.292c-4.656,0-9.244-1.144-13.353-3.243v14.077h-84.827 c-8.395,0-15.202,6.807-15.202,15.202c0,8.395,6.807,15.202,15.202,15.202h24.234c-0.374,1.283-0.584,2.635-0.584,4.039 c0,7.97,6.461,14.431,14.431,14.431c7.97,0,14.431-6.461,14.431-14.431c0-1.404-0.21-2.756-0.584-4.039h129.442 c-0.374,1.283-0.584,2.635-0.584,4.039c0,7.97,6.461,14.431,14.431,14.431c7.97,0,14.431-6.461,14.431-14.431 c0-1.404-0.21-2.756-0.584-4.039h24.234c8.395,0,15.202-6.807,15.202-15.202C425.926,352.859,419.119,346.052,410.724,346.052z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M440.956,263.385c0-7.948-6.444-14.392-14.392-14.392h-3.004v28.784h3.004 C434.512,277.777,440.956,271.333,440.956,263.385z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M195.188,229.805l51.54,34.041l0.345-32.58l-27.822-13.101l45.531,8.108c3.941,0.704,7.992-0.611,10.773-3.521 l33.106-34.64c4.577-4.789,4.404-12.38-0.384-16.956c-4.789-4.577-12.38-4.405-16.956,0.384l-28.663,29.992l-39.2-6.981 l30.625-2.691l-19.337-15.075c-7.789-6.072-19.025-4.68-25.097,3.108l-18.708,23.997 C184.536,212.105,186.486,224.058,195.188,229.805z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "168.386",
  cy: "167.962",
  r: "26.471"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M246.592,276.746L132.7,201.839c-5.739-3.771-13.496-2.157-17.259,3.564c-0.556,0.846-0.982,1.738-1.31,2.65 l-35.453-19.706L67.682,155.6l15.239,22.33l7.192,3.998l2.43-29.558c0.888-10.798-7.146-20.271-17.945-21.159l-34.868-2.866 c-10.798-0.888-20.272,7.147-21.159,17.945l-6.448,100.464c0.015,0.114,0.017,0.227,0.035,0.341l8.435,54.993L0.56,375.156 c-2.283,8.326,2.617,16.927,10.944,19.21c8.319,2.282,16.925-2.613,19.21-10.944l20.913-76.279 c0.58-2.117,0.708-4.333,0.376-6.503l-7.861-51.254l5.695,0.468l19.306,52.636l-15.578,73.561 c-1.789,8.446,3.608,16.744,12.055,18.532c8.427,1.789,16.741-3.593,18.532-12.055l16.51-77.96 c0.609-2.875,0.396-5.863-0.617-8.621l-15.871-43.27l0.124,0.01l1.465-17.817l-29.58-16.442 c-4.161-2.313-10.742-4.98-11.182-13.446l-2.017-41.088l12.603,37.534c1.034,3.08,3.181,5.662,6.02,7.241l50.641,28.148 c6.288,3.494,14.22,1.231,17.716-5.058c0.262-0.472,0.481-0.955,0.679-1.443c7.3,4.801,110.396,72.607,115.655,76.065 C246.281,305.336,246.251,308.989,246.592,276.746z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M446.866,300.489H423.56v5.41c0,7.487-2.825,14.325-7.46,19.512h30.765c6.882,0,12.461-5.579,12.461-12.461 C459.327,306.068,453.748,300.489,446.866,300.489z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M261.466,238.044l-0.716,67.697c-0.042,3.967,1.504,7.786,4.294,10.605c2.79,2.82,6.592,4.406,10.559,4.406H394.24 c8.204,0,14.854-6.651,14.854-14.855V245.54c0-13.726-9.036-25.815-22.201-29.7l-68.258-20.147 c-0.771,0.908,1.977-2.006-37.647,39.458C276.481,239.867,269.51,241.832,261.466,238.044z"
})])])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Svg Icon")], -1 /* HOISTED */);
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "text-inverse-success font-weight-bolder font-size-h5 mb-2 mt-5"
}, "Patient Register", -1 /* HOISTED */);
var _hoisted_9 = {
  "class": "font-weight-bold text-inverse-success font-size-sm"
};
var _hoisted_10 = {
  "class": "col-xl-3"
};
var _hoisted_11 = {
  href: "#",
  "class": "card card-custom bg-success bg-hover-state-success card-stretch gutter-b"
};
var _hoisted_12 = {
  "class": "card-body"
};
var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "svg-icon svg-icon-white svg-icon-3x ml-n1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Svg Icon | path:assets/media/svg/icons/Media/Equalizer.svg"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  height: "200px",
  width: "200px",
  version: "1.1",
  id: "_x32_",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512",
  "xml:space": "preserve",
  fill: "#000000"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", {
  id: "SVGRepo_bgCarrier",
  "stroke-width": "0"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", {
  id: "SVGRepo_tracerCarrier",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", {
  id: "SVGRepo_iconCarrier"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "class": "st0",
  d: "M471.199,231.069L271.6,33.725l0.044,0.093C249.149,11.271,219.501-0.05,189.995,0 c-29.463-0.05-59.112,11.271-81.609,33.818c-22.54,22.49-33.857,52.092-33.815,81.609c-0.042,29.502,11.274,59.147,33.815,81.645 l47.106,46.6c-1.42-0.043-2.842-0.043-4.259-0.043c-38.632,0-73.726,9.714-99.984,26.161 c-13.106,8.245-24.057,18.189-31.846,29.782c-7.832,11.55-12.417,24.835-12.417,38.858v78.719c0,14.016,4.585,27.308,12.417,38.858 c11.732,17.364,30.377,31.15,53.107,40.83c22.773,9.664,49.762,15.113,78.723,15.163c38.579-0.05,73.676-9.758,99.93-26.211 c13.149-8.202,24.054-18.188,31.89-29.781c7.793-11.55,12.374-24.842,12.374-38.858v-35.144l12.554,12.425l-0.043-0.1 c22.494,22.54,52.143,33.868,81.648,33.818c29.466,0.05,59.112-11.278,81.612-33.768c22.54-22.548,33.814-52.143,33.814-81.659 C505.013,283.212,493.739,253.609,471.199,231.069z M141.473,148.686c-19.106-19.149-19.106-50.63,0.272-70.009 c9.346-9.349,21.809-14.525,35.102-14.525L141.473,148.686z M29.896,338.43c0.043-9.026,2.839-17.637,8.482-26.075 c4.95-7.37,12.231-14.432,21.347-20.705l175.312,102.594c-3.986,2.194-8.201,4.259-12.65,6.137 c-20.113,8.567-44.672,13.608-71.152,13.608c-35.38,0.05-67.27-9.026-89.764-23.186c-11.27-7.097-20.16-15.4-26.118-24.283 c-2.205-3.305-4.033-6.645-5.456-10.08V338.43z M272.518,417.15c0,9.026-2.842,17.644-8.474,26.068 c-8.438,12.56-23.418,24.196-43.074,32.542c-19.612,8.338-43.715,13.335-69.736,13.335c-34.735,0-66.029-8.94-87.792-22.684 c-10.908-6.832-19.433-14.848-25.064-23.193c-5.642-8.424-8.439-17.042-8.482-26.068v-32.484 c11.087,12.274,26.211,22.498,44.034,30.054c22.268,9.449,48.798,14.854,77.304,14.854c37.983,0,72.44-9.586,98.005-25.623 c8.98-5.586,16.816-12.045,23.279-19.243V417.15z M272.518,356.44c-0.272,0.688-0.552,1.326-0.918,2.014 c-1.233,2.753-2.749,5.406-4.538,8.065c-3.847,5.772-9.026,11.228-15.164,16.311L78.329,281.29c1.054-0.459,2.065-1.011,3.116-1.42 c19.611-8.338,43.715-13.335,69.79-13.335c10.26,0,20.208,0.781,29.689,2.251c22.637,3.434,42.704,10.762,58.054,20.382 c1.878,1.147,3.667,2.388,5.359,3.628c8.294,5.908,14.847,12.46,19.475,19.293c0.093,0.086,0.183,0.179,0.233,0.265 c5.632,8.438,8.474,17.049,8.474,26.075V356.44z M451.77,374.9c-17.228,17.192-39.639,25.752-62.183,25.752 c-22.588,0-44.991-8.524-62.223-25.752l-0.046-0.043l-31.89-31.524v-4.903c0-14.024-4.581-27.309-12.374-38.858 c-9.801-14.432-24.326-26.39-42.016-35.553c2.201-5.728,4.994-11.966,8.432-18.368c9.714-18.246,24.286-38.041,43.578-53.247 c19.196-15.17,42.798-25.982,71.984-27.638l86.692,85.731h0.046c17.182,17.228,25.749,39.683,25.749,62.223 C477.519,335.268,468.952,357.723,451.77,374.9z"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Svg Icon")], -1 /* HOISTED */);
var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "text-inverse-success font-weight-bolder font-size-h5 mb-2 mt-5"
}, "Total Medicines", -1 /* HOISTED */);
var _hoisted_15 = {
  "class": "font-weight-bold text-inverse-success font-size-sm"
};
var _hoisted_16 = {
  "class": "col-xl-3"
};
var _hoisted_17 = {
  href: "#",
  "class": "card card-custom bg-info bg-hover-state-info card-stretch card-stretch gutter-b"
};
var _hoisted_18 = {
  "class": "card-body"
};
var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "svg-icon svg-icon-white svg-icon-3x ml-n1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  fill: "#000000",
  viewBox: "0 0 512 512",
  version: "1.1",
  "xml:space": "preserve",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", {
  id: "SVGRepo_bgCarrier",
  "stroke-width": "0"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", {
  id: "SVGRepo_tracerCarrier",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", {
  id: "SVGRepo_iconCarrier"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", {
  id: "_x35_86_x2C__Medicine_x2C__pills_x2C__tablets"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M128.014,260.957H24.681c-5.523,0-10-4.478-10-10v-88.333c0-34.003,27.664-61.667,61.667-61.667 c34.003,0,61.667,27.664,61.667,61.667v88.333C138.014,256.479,133.537,260.957,128.014,260.957z M34.681,240.957h83.333 v-78.333c0-22.975-18.691-41.667-41.667-41.667s-41.667,18.691-41.667,41.667V240.957z"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M76.348,400.956c-34.003,0-61.667-27.664-61.667-61.667v-88.333c0-5.523,4.477-10,10-10h103.333 c5.523,0,10,4.477,10,10v88.333C138.014,373.292,110.351,400.956,76.348,400.956z M34.681,260.957v78.332 c0,22.976,18.692,41.667,41.667,41.667s41.667-18.691,41.667-41.667v-78.332H34.681z"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M252.764,423.641c-2.652,0-5.196-1.054-7.071-2.929l-62.183-62.184c-11.647-11.647-18.062-27.133-18.062-43.604 c0-16.473,6.415-31.958,18.062-43.605c11.647-11.646,27.133-18.062,43.604-18.062s31.957,6.415,43.604,18.062l62.184,62.183 c1.875,1.876,2.929,4.419,2.929,7.071s-1.054,5.195-2.929,7.071l-73.067,73.068 C257.959,422.587,255.416,423.641,252.764,423.641z M227.114,273.257c-11.129,0-21.593,4.334-29.463,12.204 c-7.87,7.869-12.204,18.333-12.204,29.463c0,11.129,4.334,21.593,12.204,29.462l55.112,55.112l58.925-58.926l-55.112-55.111 C248.707,277.591,238.244,273.257,227.114,273.257z"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M351.479,500.956c-16.472,0-31.957-6.415-43.604-18.062l-62.183-62.183c-3.905-3.905-3.905-10.237,0-14.143 l73.067-73.068c1.876-1.875,4.419-2.929,7.071-2.929s5.195,1.054,7.071,2.929l62.183,62.184 c11.646,11.647,18.062,27.133,18.062,43.604c0,16.473-6.415,31.958-18.062,43.605 C383.438,494.541,367.952,500.956,351.479,500.956z M266.905,413.641l55.112,55.111c7.869,7.87,18.333,12.204,29.462,12.204 c11.13,0,21.594-4.334,29.463-12.204c7.87-7.869,12.204-18.333,12.204-29.463c0-11.129-4.334-21.593-12.204-29.462 l-55.111-55.112L266.905,413.641z"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M411.981,180.057c-2.56,0-5.118-0.976-7.071-2.929l-73.068-73.067c-1.875-1.875-2.929-4.419-2.929-7.071 s1.054-5.196,2.929-7.071l60.9-60.9c11.647-11.647,27.133-18.062,43.605-18.062c16.472,0,31.957,6.415,43.604,18.062 c24.043,24.043,24.043,63.166,0,87.209l-60.899,60.9C417.1,179.08,414.541,180.057,411.981,180.057z M353.056,96.989 l58.926,58.925l53.828-53.828c16.246-16.246,16.246-42.68,0-58.926c-7.869-7.87-18.333-12.204-29.462-12.204 c-11.13,0-21.594,4.334-29.463,12.204L353.056,96.989z"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M314.547,256.089c-16.472,0-31.957-6.415-43.604-18.062c-24.043-24.043-24.043-63.166,0-87.209l60.899-60.9 c3.906-3.904,10.236-3.905,14.143,0l73.068,73.067c1.875,1.875,2.929,4.419,2.929,7.071s-1.054,5.196-2.929,7.071l-60.9,60.9 C346.505,249.675,331.02,256.089,314.547,256.089z M338.913,111.131l-53.828,53.828c-16.246,16.246-16.246,42.68,0,58.926 c7.869,7.87,18.333,12.204,29.462,12.204c11.13,0,21.594-4.334,29.463-12.204l53.829-53.829L338.913,111.131z"
})])])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", {
  id: "Layer_1"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Svg Icon")], -1 /* HOISTED */);
var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "text-inverse-info font-weight-bolder font-size-h5 mb-2 mt-5"
}, "Medicine Dispensed", -1 /* HOISTED */);
var _hoisted_21 = {
  "class": "font-weight-bold text-inverse-info font-size-sm"
};
var _hoisted_22 = {
  "class": "col-xl-3"
};
var _hoisted_23 = {
  href: "#",
  "class": "card card-custom bg-danger bg-hover-state-danger card-stretch gutter-b"
};
var _hoisted_24 = {
  "class": "card-body"
};
var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<span class=\"svg-icon svg-icon-white svg-icon-3x ml-n1\"><!--begin::Svg Icon | path:assets/media/svg/icons/Media/Equalizer.svg--><svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"><g opacity=\"0.4\"><path d=\"M9.5 13.7502C9.5 14.7202 10.25 15.5002 11.17 15.5002H13.05C13.85 15.5002 14.5 14.8202 14.5 13.9702C14.5 13.0602 14.1 12.7302 13.51 12.5202L10.5 11.4702C9.91 11.2602 9.51001 10.9402 9.51001 10.0202C9.51001 9.18023 10.16 8.49023 10.96 8.49023H12.84C13.76 8.49023 14.51 9.27023 14.51 10.2402\" stroke=\"#292D32\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M12 7.5V16.5\" stroke=\"#292D32\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></g> <path d=\"M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2\" stroke=\"#292D32\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M22 6V2H18\" stroke=\"#292D32\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M17 7L22 2\" stroke=\"#292D32\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></g></svg><!--end::Svg Icon--></span><div class=\"text-inverse-success font-weight-bolder font-size-h5 mb-2 mt-5\">Total Reimbursement</div>", 2);
var _hoisted_27 = {
  "class": "font-weight-bold text-inverse-success font-size-sm"
};
var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_30 = {
  "class": "row light-grey-background"
};
var _hoisted_31 = {
  "class": "col-xl-4"
};
var _hoisted_32 = {
  "class": "card card-custom gutter-b",
  style: {
    "height": "160px"
  }
};
var _hoisted_33 = {
  "class": "card-body"
};
var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "svg-icon svg-icon-3x svg-icon-success"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Svg Icon | path:assets/media/svg/icons/Communication/Group.svg"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  fill: "#000000",
  height: "200px",
  width: "200px",
  version: "1.1",
  id: "Capa_1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 612 612",
  "xml:space": "preserve"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", {
  id: "SVGRepo_bgCarrier",
  "stroke-width": "0"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", {
  id: "SVGRepo_tracerCarrier",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", {
  id: "SVGRepo_iconCarrier"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M545.325,500.685H66.675c-30.737,0-55.657,24.92-55.657,55.657c0,30.737,24.92,55.657,55.657,55.657h478.65 c30.737,0,55.657-24.92,55.657-55.657C600.982,525.604,576.062,500.685,545.325,500.685z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M129.753,464.922c30.737,0,55.657-24.92,55.657-55.657v-212.61c0-30.737-24.92-55.657-55.657-55.657 s-55.657,24.92-55.657,55.657v212.61C74.095,440.002,99.016,464.922,129.753,464.922z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M306.002,464.922c30.737,0,55.657-24.92,55.657-55.657V126.157c0-30.737-24.92-55.657-55.657-55.657 s-55.657,24.92-55.657,55.657v283.108C250.345,440.002,275.263,464.922,306.002,464.922z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M482.245,464.922c30.737,0,55.655-24.92,55.655-55.657V55.657C537.903,24.92,512.984,0,482.245,0 c-30.737,0-55.657,24.92-55.657,55.657v353.607C426.588,440.002,451.508,464.922,482.245,464.922z"
})])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Svg Icon")], -1 /* HOISTED */);
var _hoisted_35 = {
  "class": "text-dark font-weight-bolder font-size-h2 mt-3"
};
var _hoisted_36 = {
  "class": "number_stat_font"
};
var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "text-muted text-hover-primary font-weight-bold font-size-lg mt-1"
}, "Items Available on Stock", -1 /* HOISTED */);
var _hoisted_38 = {
  "class": "col-xl-4"
};
var _hoisted_39 = {
  "class": "card card-custom gutter-b",
  style: {
    "height": "160px"
  }
};
var _hoisted_40 = {
  "class": "card-body"
};
var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "svg-icon svg-icon-3x svg-icon-success"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Svg Icon | path:assets/media/svg/icons/Communication/Group.svg"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  fill: "#000000",
  height: "200px",
  width: "200px",
  version: "1.1",
  id: "Capa_1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 386.651 386.651",
  "xml:space": "preserve"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", {
  id: "SVGRepo_bgCarrier",
  "stroke-width": "0"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", {
  id: "SVGRepo_tracerCarrier",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", {
  id: "SVGRepo_iconCarrier"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M342.367,135.781c-2.674-1.367-5.889-1.122-8.324,0.635l-138.556,99.968l-89.233-83.725 c-3.032-2.844-7.736-2.892-10.826-0.112l-74.395,66.959c-1.685,1.518-2.648,3.679-2.648,5.946v91.451c0,4.418,3.582,8,8,8h312.339 c4.418,0,8-3.582,8-8v-174C346.724,139.899,345.041,137.149,342.367,135.781z M53.507,308.903H34.385v-79.889l19.122-17.211 V308.903z M88.045,308.903H69.507v-111.5l18.538-16.685V308.903z M122.582,308.903h-18.538V172.526l18.538,17.393V308.903z M157.12,308.903h-18.538V204.931l18.538,17.394V308.903z M192.015,308.903H173.12v-71.565l16.227,15.226 c0.791,0.741,1.702,1.288,2.667,1.65V308.903z M226.91,308.903h-18.896v-61.828l18.896-13.634V308.903z M261.806,308.903H242.91 v-87.006l18.895-13.633V308.903z M296.701,308.903h-18.896V196.72l18.896-13.634V308.903z M330.724,308.903h-18.022v-137.36 l18.022-13.003V308.903z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M385.375,65.087c-1.439-2.148-3.904-3.404-6.461-3.337l-50.696,1.368c-3.471,0.094-6.429,2.547-7.161,5.941 c-0.732,3.395,0.95,6.85,4.074,8.366l11.846,5.75L196.96,183.012l-95.409-86.504c-4.738-4.296-11.955-4.322-16.723-0.062 L4.173,168.491c-5.149,4.599-5.594,12.501-0.995,17.649c4.598,5.148,12.499,5.594,17.649,0.995l72.265-64.55l94.533,85.709 c2.369,2.147,5.376,3.239,8.398,3.239c2.532,0,5.074-0.767,7.255-2.322L350.82,104.01l0.701,11.074 c0.22,3.464,2.777,6.329,6.193,6.939c0.444,0.079,0.889,0.118,1.328,0.118c2.938,0,5.662-1.724,6.885-4.483l20.077-45.327 C387.052,69.968,386.815,67.234,385.375,65.087z"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Svg Icon")], -1 /* HOISTED */);
var _hoisted_42 = {
  "class": "text-dark font-weight-bolder font-size-h2 mt-3"
};
var _hoisted_43 = {
  "class": "number_stat_font"
};
var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "text-muted text-hover-primary font-weight-bold font-size-lg mt-1"
}, "Total Stock Value", -1 /* HOISTED */);
var _hoisted_45 = {
  "class": "col-xl-4"
};
var _hoisted_46 = {
  "class": "row light-grey-background"
};
var _hoisted_47 = {
  "class": "col-xl-6"
};
var _hoisted_48 = {
  "class": "col-xl-6"
};
var _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_50 = {
  "class": "row"
};
var _hoisted_51 = {
  "class": "col-xl-12 light-grey-background"
};
var _hoisted_52 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_53 = {
  "class": "row"
};
var _hoisted_54 = {
  "class": "col-xl-12 light-grey-background"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "Dashboard"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Container"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Begin: Stats Row "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Stats Widget 14"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Body"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(new Intl.NumberFormat().format(_ctx.$page.props.data.stats.total_patients)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Body")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Stats Widget 14")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Stats Widget 13"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Body"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_hoisted_13, _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(new Intl.NumberFormat().format(_ctx.$page.props.data.stats.total_medicines)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Body")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Stats Widget 13")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Stats Widget 15"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Body"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [_hoisted_19, _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(new Intl.NumberFormat().format(_ctx.$page.props.data.stats.total_medicines_dispensed)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Body")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Stats Widget 15")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Stats Widget 15"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Body"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [_hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)('Rs. ' + new Intl.NumberFormat().format(_ctx.$page.props.data.stats.total_reimbursements) + '/-'), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Body")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Stats Widget 15")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End: Stats Row "), _hoisted_28, _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Begin: Stock Row "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ new Intl.NumberFormat().format($page.props.stats.total_items_instock) }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin: Stats Widget 19"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [_hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", _hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(new Intl.NumberFormat().format(_ctx.$page.props.data.stats.total_items_instock)), 1 /* TEXT */)]), _hoisted_37])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end: Stats:Widget 19")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin: Stats Widget 19"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [_hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", _hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)('Rs.' + new Intl.NumberFormat().format(Math.ceil(_ctx.$page.props.data.stats.total_stock_value)) + '/-'), 1 /* TEXT */)]), _hoisted_44])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end: Stats:Widget 19")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin: Chart Component"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["HighChart"], {
    chartId: "chart-container-1",
    chartTitle: "Stock Values By Category",
    chartHeight: "160px",
    chartType: "bar",
    "is-show-drop-down": false,
    series: _ctx.$page.props.data.stats.stock_value_by_category.data,
    xAxisxategories: _ctx.$page.props.data.stats.stock_value_by_category.names,
    yAxis: _ctx.$page.props.data.stats.stock_value_by_category.names
  }, null, 8 /* PROPS */, ["series", "xAxisxategories", "yAxis"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end: Chart:Component")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End: Stock Row "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <p>Data from Child: {{ childData }}</p> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["HighChart"], {
    chartId: "chart-container-2",
    chartTitle: $setup.chartOneTitle,
    chartHeight: "400px",
    chartType: "column",
    "is-show-drop-down": true,
    onUpdateData: $setup.handleUpdate,
    series: $setup.purchasedItemsByCategory.purchased_items_by_category.data,
    xAxisxategories: $setup.purchasedItemsByCategory.purchased_items_by_category.names,
    yAxis: $setup.purchasedItemsByCategory.purchased_items_by_category.names
  }, null, 8 /* PROPS */, ["chartTitle", "series", "xAxisxategories", "yAxis"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["HighChart"], {
    chartId: "chart-container-3",
    chartTitle: $setup.chartTwoTitle,
    chartHeight: "400px",
    chartType: "column",
    "is-show-drop-down": true,
    onUpdateData: $setup.handleUpdate,
    series: $setup.consumedItemsByCategory.consumed_items_by_category.data,
    xAxisxategories: $setup.consumedItemsByCategory.consumed_items_by_category.names,
    yAxis: $setup.consumedItemsByCategory.consumed_items_by_category.names
  }, null, 8 /* PROPS */, ["chartTitle", "series", "xAxisxategories", "yAxis"])])]), _hoisted_49, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["HighChart"], {
    chartId: "chart-container-5",
    chartTitle: $setup.chartFourTitle,
    chartHeight: "400px",
    chartType: "bar",
    "is-show-drop-down": false,
    onUpdateData: $setup.handleUpdate,
    series: $setup.employeeReimbursements.total_reimbursements.data,
    xAxisxategories: $setup.employeeReimbursements.total_reimbursements.names,
    yAxis: $setup.employeeReimbursements.total_reimbursements.names
  }, null, 8 /* PROPS */, ["chartTitle", "series", "xAxisxategories", "yAxis"])])]), _hoisted_52, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["HighChart"], {
    chartId: "chart-container-4",
    chartTitle: $setup.chartThreeTitle,
    chartHeight: "400px",
    chartType: "column",
    "is-show-drop-down": true,
    onUpdateData: $setup.handleUpdate,
    series: $setup.patientVisits.patient_visits.data,
    xAxisxategories: $setup.patientVisits.patient_visits.names,
    yAxis: $setup.patientVisits.patient_visits.names
  }, null, 8 /* PROPS */, ["chartTitle", "series", "xAxisxategories", "yAxis"])])])])])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Components/widgets/charts/HighChart.vue?vue&type=style&index=0&id=517d6ec3&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Components/widgets/charts/HighChart.vue?vue&type=style&index=0&id=517d6ec3&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.chart-container[data-v-517d6ec3] {\n  width: 100%;\n  /* height: 400px; */\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Dashboard.vue?vue&type=style&index=0&id=4ab4eb71&lang=scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Dashboard.vue?vue&type=style&index=0&id=4ab4eb71&lang=scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".light-grey-background {\n  background: #D3D3D3;\n  padding: 10px;\n}\n.number_stat_font {\n  font-size: 30px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Components/widgets/charts/HighChart.vue?vue&type=style&index=0&id=517d6ec3&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Components/widgets/charts/HighChart.vue?vue&type=style&index=0&id=517d6ec3&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HighChart_vue_vue_type_style_index_0_id_517d6ec3_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HighChart.vue?vue&type=style&index=0&id=517d6ec3&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Components/widgets/charts/HighChart.vue?vue&type=style&index=0&id=517d6ec3&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HighChart_vue_vue_type_style_index_0_id_517d6ec3_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HighChart_vue_vue_type_style_index_0_id_517d6ec3_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Dashboard.vue?vue&type=style&index=0&id=4ab4eb71&lang=scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Dashboard.vue?vue&type=style&index=0&id=4ab4eb71&lang=scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_style_index_0_id_4ab4eb71_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Dashboard.vue?vue&type=style&index=0&id=4ab4eb71&lang=scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Dashboard.vue?vue&type=style&index=0&id=4ab4eb71&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_style_index_0_id_4ab4eb71_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_style_index_0_id_4ab4eb71_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/ts/Components/widgets/charts/HighChart.vue":
/*!**************************************************************!*\
  !*** ./resources/ts/Components/widgets/charts/HighChart.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HighChart_vue_vue_type_template_id_517d6ec3_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HighChart.vue?vue&type=template&id=517d6ec3&scoped=true&ts=true */ "./resources/ts/Components/widgets/charts/HighChart.vue?vue&type=template&id=517d6ec3&scoped=true&ts=true");
/* harmony import */ var _HighChart_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HighChart.vue?vue&type=script&lang=ts */ "./resources/ts/Components/widgets/charts/HighChart.vue?vue&type=script&lang=ts");
/* harmony import */ var _HighChart_vue_vue_type_style_index_0_id_517d6ec3_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HighChart.vue?vue&type=style&index=0&id=517d6ec3&scoped=true&lang=css */ "./resources/ts/Components/widgets/charts/HighChart.vue?vue&type=style&index=0&id=517d6ec3&scoped=true&lang=css");
/* harmony import */ var _var_www_html_e_medical_nspp_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_var_www_html_e_medical_nspp_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_HighChart_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_HighChart_vue_vue_type_template_id_517d6ec3_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-517d6ec3"],['__file',"resources/ts/Components/widgets/charts/HighChart.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/Pages/Dashboard.vue":
/*!******************************************!*\
  !*** ./resources/ts/Pages/Dashboard.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_4ab4eb71_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=4ab4eb71&ts=true */ "./resources/ts/Pages/Dashboard.vue?vue&type=template&id=4ab4eb71&ts=true");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=ts&setup=true */ "./resources/ts/Pages/Dashboard.vue?vue&type=script&lang=ts&setup=true");
/* harmony import */ var _Dashboard_vue_vue_type_style_index_0_id_4ab4eb71_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=style&index=0&id=4ab4eb71&lang=scss */ "./resources/ts/Pages/Dashboard.vue?vue&type=style&index=0&id=4ab4eb71&lang=scss");
/* harmony import */ var _var_www_html_e_medical_nspp_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_var_www_html_e_medical_nspp_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Dashboard_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Dashboard_vue_vue_type_template_id_4ab4eb71_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/Pages/Dashboard.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/Components/widgets/charts/HighChart.vue?vue&type=script&lang=ts":
/*!**************************************************************************************!*\
  !*** ./resources/ts/Components/widgets/charts/HighChart.vue?vue&type=script&lang=ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HighChart_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HighChart_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HighChart.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Components/widgets/charts/HighChart.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./resources/ts/Pages/Dashboard.vue?vue&type=script&lang=ts&setup=true":
/*!*****************************************************************************!*\
  !*** ./resources/ts/Pages/Dashboard.vue?vue&type=script&lang=ts&setup=true ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Dashboard.vue?vue&type=script&lang=ts&setup=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Dashboard.vue?vue&type=script&lang=ts&setup=true");
 

/***/ }),

/***/ "./resources/ts/Components/widgets/charts/HighChart.vue?vue&type=template&id=517d6ec3&scoped=true&ts=true":
/*!****************************************************************************************************************!*\
  !*** ./resources/ts/Components/widgets/charts/HighChart.vue?vue&type=template&id=517d6ec3&scoped=true&ts=true ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HighChart_vue_vue_type_template_id_517d6ec3_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HighChart_vue_vue_type_template_id_517d6ec3_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HighChart.vue?vue&type=template&id=517d6ec3&scoped=true&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Components/widgets/charts/HighChart.vue?vue&type=template&id=517d6ec3&scoped=true&ts=true");


/***/ }),

/***/ "./resources/ts/Pages/Dashboard.vue?vue&type=template&id=4ab4eb71&ts=true":
/*!********************************************************************************!*\
  !*** ./resources/ts/Pages/Dashboard.vue?vue&type=template&id=4ab4eb71&ts=true ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_template_id_4ab4eb71_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_template_id_4ab4eb71_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Dashboard.vue?vue&type=template&id=4ab4eb71&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Dashboard.vue?vue&type=template&id=4ab4eb71&ts=true");


/***/ }),

/***/ "./resources/ts/Components/widgets/charts/HighChart.vue?vue&type=style&index=0&id=517d6ec3&scoped=true&lang=css":
/*!**********************************************************************************************************************!*\
  !*** ./resources/ts/Components/widgets/charts/HighChart.vue?vue&type=style&index=0&id=517d6ec3&scoped=true&lang=css ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HighChart_vue_vue_type_style_index_0_id_517d6ec3_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HighChart.vue?vue&type=style&index=0&id=517d6ec3&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Components/widgets/charts/HighChart.vue?vue&type=style&index=0&id=517d6ec3&scoped=true&lang=css");


/***/ }),

/***/ "./resources/ts/Pages/Dashboard.vue?vue&type=style&index=0&id=4ab4eb71&lang=scss":
/*!***************************************************************************************!*\
  !*** ./resources/ts/Pages/Dashboard.vue?vue&type=style&index=0&id=4ab4eb71&lang=scss ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_style_index_0_id_4ab4eb71_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Dashboard.vue?vue&type=style&index=0&id=4ab4eb71&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Dashboard.vue?vue&type=style&index=0&id=4ab4eb71&lang=scss");


/***/ })

}]);