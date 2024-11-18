"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_ts_Pages_Patients_Index_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Components/paginations/Pagination.vue?vue&type=script&lang=ts&setup=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Components/paginations/Pagination.vue?vue&type=script&lang=ts&setup=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  __name: 'Pagination',
  props: {
    meta: {
      type: Object,
      required: true
    },
    links: {
      type: Object,
      required: true
    }
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Patients/Index.vue?vue&type=script&lang=ts&setup=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Patients/Index.vue?vue&type=script&lang=ts&setup=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _Components_alerts_AlertMessage_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/alerts/AlertMessage.vue */ "./resources/ts/Components/alerts/AlertMessage.vue");
/* harmony import */ var _Components_paginations_Pagination_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/paginations/Pagination.vue */ "./resources/ts/Components/paginations/Pagination.vue");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_composables_commons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/core/composables/commons */ "./resources/ts/core/composables/commons.ts");
/* harmony import */ var _core_composables_permission__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/core/composables/permission */ "./resources/ts/core/composables/permission.ts");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  __name: 'Index',
  props: {
    patients: {
      type: Object,
      required: true
    },
    filters: Object
  },
  setup: function setup(__props, _ref) {
    var _props$filters, _props$filters2;
    var __expose = _ref.expose;
    __expose();
    var props = __props;
    var _useCommons = (0,_core_composables_commons__WEBPACK_IMPORTED_MODULE_4__.useCommons)(),
      filterData = _useCommons.filterData,
      destroy = _useCommons.destroy,
      toggleStatus = _useCommons.toggleStatus;
    var _usePermission = (0,_core_composables_permission__WEBPACK_IMPORTED_MODULE_5__.usePermission)(),
      hasPermission = _usePermission.hasPermission;
    var search = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)((_props$filters = props.filters) === null || _props$filters === void 0 ? void 0 : _props$filters.search);
    var limit = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(((_props$filters2 = props.filters) === null || _props$filters2 === void 0 ? void 0 : _props$filters2.limit) || '30');
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)([search, limit], (0,lodash__WEBPACK_IMPORTED_MODULE_3__.debounce)(function (value) {
      filterData('patients.index', {
        search: search.value,
        limit: limit.value
      });
    }, 500));
    var __returned__ = {
      filterData: filterData,
      destroy: destroy,
      toggleStatus: toggleStatus,
      hasPermission: hasPermission,
      props: props,
      search: search,
      limit: limit,
      AlertMessage: _Components_alerts_AlertMessage_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
      Pagination: _Components_paginations_Pagination_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Components/paginations/Pagination.vue?vue&type=template&id=f22fc7de&ts=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Components/paginations/Pagination.vue?vue&type=template&id=f22fc7de&ts=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "row d-flex align-items-center"
};
var _hoisted_2 = {
  "class": "col-sm-12 col-md-3"
};
var _hoisted_3 = {
  "class": "pagination-info"
};
var _hoisted_4 = {
  key: 0,
  "class": "col-sm-12 col-md-9"
};
var _hoisted_5 = {
  "class": "pagination pagination-circle pagination-outline justify-content-end"
};
var _hoisted_6 = {
  key: 0,
  "class": "previous"
};
var _hoisted_7 = {
  key: 1,
  "class": "next"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$props$meta, _$props$meta2, _$props$meta3, _$props$meta4, _$props$meta5, _$props$meta6;
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, "Showing " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(((_$props$meta = $props.meta) === null || _$props$meta === void 0 ? void 0 : _$props$meta.from) || 0) + " to " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(((_$props$meta2 = $props.meta) === null || _$props$meta2 === void 0 ? void 0 : _$props$meta2.to) || 0) + " of " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$props$meta3 = $props.meta) === null || _$props$meta3 === void 0 ? void 0 : _$props$meta3.total) + " records", 1 /* TEXT */)]), ((_$props$meta4 = $props.meta) === null || _$props$meta4 === void 0 ? void 0 : _$props$meta4.total) > ((_$props$meta5 = $props.meta) === null || _$props$meta5 === void 0 ? void 0 : _$props$meta5.per_page) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_5, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)((_$props$meta6 = $props.meta) === null || _$props$meta6 === void 0 ? void 0 : _$props$meta6.links, function (link) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-item m-1", {
        'active': link.active,
        'disabled': !link.url
      }])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
      replace: "",
      href: link.url || '#',
      "class": "page-link"
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [link.label.includes('Previous') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", _hoisted_6)) : link.label.includes('Next') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", _hoisted_7)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          key: 2
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(link.label), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */))];
      }),
      _: 2 /* DYNAMIC */
    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["href"])], 2 /* CLASS */);
  }), 256 /* UNKEYED_FRAGMENT */))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Patients/Index.vue?vue&type=template&id=a36d2338&ts=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Patients/Index.vue?vue&type=template&id=a36d2338&ts=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  "class": "card card-custom"
};
var _hoisted_4 = {
  "class": "card-header"
};
var _hoisted_5 = {
  "class": "card-title"
};
var _hoisted_6 = ["value"];
var _hoisted_7 = {
  "class": "card-toolbar"
};
var _hoisted_8 = {
  "class": "d-flex align-items-center position-relative"
};
var _hoisted_9 = {
  "class": "svg-icon svg-icon-1 position-absolute ms-6"
};
var _hoisted_10 = {
  "class": "card-body"
};
var _hoisted_11 = {
  "class": "table-responsive"
};
var _hoisted_12 = {
  "class": "table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
};
var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "fw-semibold fs-6 text-gray-800"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Patient"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "CNIC/Mobile"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center"
}, "Status"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center w-200px"
}, "Action")])], -1 /* HOISTED */);
var _hoisted_14 = {
  "class": "d-flex align-items-center"
};
var _hoisted_15 = {
  "class": "symbol symbol-45px me-5"
};
var _hoisted_16 = ["src"];
var _hoisted_17 = {
  "class": "d-flex justify-content-start flex-column"
};
var _hoisted_18 = {
  "class": "text-dark fw-bolder text-hover-primary mb-1 fs-6"
};
var _hoisted_19 = {
  "class": "text-muted text-hover-primary fw-bold text-muted d-block fs-7"
};
var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-dark"
}, "Gender", -1 /* HOISTED */);
var _hoisted_21 = {
  "class": "text-muted text-hover-primary fw-bold text-muted d-block fs-7"
};
var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-dark"
}, "Age", -1 /* HOISTED */);
var _hoisted_23 = {
  "class": "text-muted text-hover-primary fw-bold text-muted d-block fs-7"
};
var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-dark"
}, "Designation", -1 /* HOISTED */);
var _hoisted_25 = {
  "class": "d-flex align-items-center"
};
var _hoisted_26 = {
  "class": "d-flex justify-content-start flex-column"
};
var _hoisted_27 = {
  "class": "text-muted text-hover-primary fw-bold text-muted d-block fs-7"
};
var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-dark"
}, "CNIC", -1 /* HOISTED */);
var _hoisted_29 = {
  "class": "text-muted text-hover-primary fw-bold text-muted d-block fs-7"
};
var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-dark"
}, "Mobile", -1 /* HOISTED */);
var _hoisted_31 = {
  "class": "text-center"
};
var _hoisted_32 = {
  "class": "text-center"
};
var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-eye"
}, null, -1 /* HOISTED */);
var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-edit"
}, null, -1 /* HOISTED */);
var _hoisted_35 = ["onClick", "title"];
var _hoisted_36 = ["onClick"];
var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-trash"
}, null, -1 /* HOISTED */);
var _hoisted_38 = [_hoisted_37];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$props$patients, _$props$patients2;
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  var _component_Toolbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Toolbar");
  var _component_inline_svg = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("inline-svg");
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "Patients"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Toolbar, {
    title: "Patients",
    buttons: [{
      label: 'Add Patient',
      link: _ctx.route('patients.create'),
      permission: 'create patients'
    }],
    breadcrumbs: [{
      label: 'Patients',
      link: null
    }]
  }, null, 8 /* PROPS */, ["buttons"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" begin:: Content Body "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Container"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_ctx.$page.props.flash.title ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["AlertMessage"], {
    key: 0,
    title: _ctx.$page.props.flash.title,
    message: _ctx.$page.props.flash.message
  }, null, 8 /* PROPS */, ["title", "message"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Card header"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Card title"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.limit = $event;
    }),
    onChange: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(
    //@ts-ignore
    function () {
      return $setup.filterData && $setup.filterData.apply($setup, arguments);
    }, ["prevent"])),
    "class": "form-select form-select-sm form-select-solid"
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.range(30, 100, 10, 0), function (_limit) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: _limit
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_limit), 9 /* TEXT, PROPS */, _hoisted_6);
  }), 256 /* UNKEYED_FRAGMENT */))], 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.limit]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Card title"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Card toolbar"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Search"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inline_svg, {
    src: "/media/icons/duotune/general/gen021.svg"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.search = $event;
    }),
    type: "text",
    "class": "form-control form-control-solid w-250px ps-15",
    placeholder: "Search"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.search]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Search")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Card toolbar")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Card header"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Table head"), _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.patients.data, function (patient) {
    var _patient$gender;
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: patient.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Avatar"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [patient.patient_image ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
      key: 0,
      alt: "Pic",
      src: patient.patient_image
    }, null, 8 /* PROPS */, _hoisted_16)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
      key: 1,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["bg-light-primary text-primary", "symbol-label fw-bolder"])
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(patient.patient_name.charAt(0)), 1 /* TEXT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Avatar"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Name"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(patient.patient_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_19, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(": " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(patient === null || patient === void 0 ? void 0 : (_patient$gender = patient.gender) === null || _patient$gender === void 0 ? void 0 : _patient$gender.gender_name), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_21, [_hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(": " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(patient.patient_age), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(": " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(patient.designation), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Name")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Name"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_27, [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(": " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(patient.patient_cnic), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_29, [_hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(": " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(patient.patient_phone), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Name")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["badge font-weight-bold", [patient.status ? 'badge-success' : 'badge-danger']])
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(patient.status ? 'Active' : 'Inactive'), 3 /* TEXT, CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_32, [$setup.hasPermission('view patients') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
      key: 0,
      href: _ctx.route('patients.show', patient.id),
      "class": "btn btn-icon btn-primary btn-circle btn-sm me-2",
      "data-bs-toggle": "tooltip",
      "data-bs-placement": "top",
      title: "View"
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [_hoisted_33];
      }),
      _: 2 /* DYNAMIC */
    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["href"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.hasPermission('update patients') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
      key: 1,
      href: _ctx.route('patients.edit', patient.id),
      "class": "btn btn-icon btn-secondary btn-circle btn-sm me-2",
      "data-bs-toggle": "tooltip",
      "data-bs-placement": "top",
      title: "Edit"
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [_hoisted_34];
      }),
      _: 2 /* DYNAMIC */
    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["href"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.hasPermission('toggle status patients') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: 2,
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $setup.toggleStatus('patients.toggle-status', patient);
      }, ["prevent"]),
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["btn btn-icon btn-circle btn-sm me-2", [patient.status ? 'btn-danger' : 'btn-success']]),
      "data-bs-toggle": "tooltip",
      "data-bs-placement": "top",
      title: [patient.status ? 'Deactivate' : 'Activate']
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["icon-xl fas", [patient.status ? 'fa-toggle-off' : 'fa-toggle-on']])
    }, null, 2 /* CLASS */)], 10 /* CLASS, PROPS */, _hoisted_35)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.hasPermission('delete patients') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: 3,
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $setup.destroy('patients.destroy', patient.id);
      }, ["prevent"]),
      "class": "btn btn-icon btn-danger btn-circle btn-sm me-2",
      "data-bs-toggle": "tooltip",
      "data-bs-placement": "top",
      title: "Delete"
    }, _hoisted_38, 8 /* PROPS */, _hoisted_36)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]);
  }), 128 /* KEYED_FRAGMENT */))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Pagination"], {
    meta: (_$props$patients = $props.patients) === null || _$props$patients === void 0 ? void 0 : _$props$patients.meta,
    links: (_$props$patients2 = $props.patients) === null || _$props$patients2 === void 0 ? void 0 : _$props$patients2.links
  }, null, 8 /* PROPS */, ["meta", "links"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Container")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end:: Content Body ")], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./resources/ts/core/composables/commons.ts":
/*!**************************************************!*\
  !*** ./resources/ts/core/composables/commons.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCommons: () => (/* binding */ useCommons)
/* harmony export */ });
/* harmony import */ var _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/vue3 */ "./node_modules/@inertiajs/vue3/dist/index.esm.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.min.js */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_1__);


function useCommons() {
  var filterData = function filterData(routeName, _filter) {
    _filter = Object.keys(_filter).reduce(function (acc, key) {
      var value = _filter[key];
      if (value !== '' && value !== null && value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});
    _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_0__.router.get(route(routeName), _filter, {
      preserveScroll: true,
      preserveState: true,
      replace: true
    });
  };
  var destroy = function destroy(routeName, _id) {
    sweetalert2_dist_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_1___default().fire({
      text: "Are you sure you want to delete this?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Delete',
      buttonsStyling: false,
      customClass: {
        confirmButton: "btn fw-bold btn-danger",
        cancelButton: "btn fw-bold btn-secondary"
      }
    }).then(function (result) {
      if (result.isConfirmed) {
        _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_0__.router["delete"](route(routeName, _id), {
          preserveScroll: true
        });
      }
    });
  };
  var toggleStatus = function toggleStatus(routeName, object) {
    sweetalert2_dist_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_1___default().fire({
      text: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: object !== null && object !== void 0 && object.status ? 'Deactivate' : 'Activate',
      buttonsStyling: false,
      customClass: {
        confirmButton: object !== null && object !== void 0 && object.status ? 'btn fw-bold btn-danger' : 'btn fw-bold btn-success',
        cancelButton: "btn fw-bold btn-secondary"
      }
    }).then(function (result) {
      if (result.isConfirmed) {
        _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_0__.router["delete"](route(routeName, object === null || object === void 0 ? void 0 : object.id), {
          preserveScroll: true
        });
      }
    });
  };
  var revoke = function revoke(routeName, _idFrom, _idTo) {
    sweetalert2_dist_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_1___default().fire({
      text: "Are you sure you want to revoke this?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Revoke',
      buttonsStyling: false,
      customClass: {
        confirmButton: "btn fw-bold btn-danger",
        cancelButton: "btn fw-bold btn-secondary"
      }
    }).then(function (result) {
      if (result.isConfirmed) {
        _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_0__.router["delete"](route(routeName, [_idFrom, _idTo]), {
          preserveScroll: true
        });
      }
    });
  };
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
  return {
    filterData: filterData,
    destroy: destroy,
    toggleStatus: toggleStatus,
    revoke: revoke,
    printReceipt: printReceipt
  };
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
/* harmony import */ var _var_www_html_e_medical_nspp_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_e_medical_nspp_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AlertMessage_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AlertMessage_vue_vue_type_template_id_340fdb52_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/Components/alerts/AlertMessage.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/Components/paginations/Pagination.vue":
/*!************************************************************!*\
  !*** ./resources/ts/Components/paginations/Pagination.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Pagination_vue_vue_type_template_id_f22fc7de_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pagination.vue?vue&type=template&id=f22fc7de&ts=true */ "./resources/ts/Components/paginations/Pagination.vue?vue&type=template&id=f22fc7de&ts=true");
/* harmony import */ var _Pagination_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagination.vue?vue&type=script&lang=ts&setup=true */ "./resources/ts/Components/paginations/Pagination.vue?vue&type=script&lang=ts&setup=true");
/* harmony import */ var _var_www_html_e_medical_nspp_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_e_medical_nspp_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Pagination_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Pagination_vue_vue_type_template_id_f22fc7de_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/Components/paginations/Pagination.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/Pages/Patients/Index.vue":
/*!***********************************************!*\
  !*** ./resources/ts/Pages/Patients/Index.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_a36d2338_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=a36d2338&ts=true */ "./resources/ts/Pages/Patients/Index.vue?vue&type=template&id=a36d2338&ts=true");
/* harmony import */ var _Index_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=ts&setup=true */ "./resources/ts/Pages/Patients/Index.vue?vue&type=script&lang=ts&setup=true");
/* harmony import */ var _var_www_html_e_medical_nspp_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_e_medical_nspp_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Index_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Index_vue_vue_type_template_id_a36d2338_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/Pages/Patients/Index.vue"]])
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

/***/ "./resources/ts/Components/paginations/Pagination.vue?vue&type=script&lang=ts&setup=true":
/*!***********************************************************************************************!*\
  !*** ./resources/ts/Components/paginations/Pagination.vue?vue&type=script&lang=ts&setup=true ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Pagination.vue?vue&type=script&lang=ts&setup=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Components/paginations/Pagination.vue?vue&type=script&lang=ts&setup=true");
 

/***/ }),

/***/ "./resources/ts/Pages/Patients/Index.vue?vue&type=script&lang=ts&setup=true":
/*!**********************************************************************************!*\
  !*** ./resources/ts/Pages/Patients/Index.vue?vue&type=script&lang=ts&setup=true ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&lang=ts&setup=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Patients/Index.vue?vue&type=script&lang=ts&setup=true");
 

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

/***/ "./resources/ts/Components/paginations/Pagination.vue?vue&type=template&id=f22fc7de&ts=true":
/*!**************************************************************************************************!*\
  !*** ./resources/ts/Components/paginations/Pagination.vue?vue&type=template&id=f22fc7de&ts=true ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_template_id_f22fc7de_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_template_id_f22fc7de_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Pagination.vue?vue&type=template&id=f22fc7de&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Components/paginations/Pagination.vue?vue&type=template&id=f22fc7de&ts=true");


/***/ }),

/***/ "./resources/ts/Pages/Patients/Index.vue?vue&type=template&id=a36d2338&ts=true":
/*!*************************************************************************************!*\
  !*** ./resources/ts/Pages/Patients/Index.vue?vue&type=template&id=a36d2338&ts=true ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_a36d2338_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_a36d2338_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=a36d2338&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Patients/Index.vue?vue&type=template&id=a36d2338&ts=true");


/***/ })

}]);