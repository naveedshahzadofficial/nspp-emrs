"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_ts_Pages_Roles_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Roles/Index.vue?vue&type=script&lang=ts&setup=true":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Roles/Index.vue?vue&type=script&lang=ts&setup=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/vue3 */ "./node_modules/@inertiajs/vue3/dist/index.esm.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.min.js */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_helpers_breadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/helpers/breadcrumb */ "./resources/ts/core/helpers/breadcrumb.ts");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  __name: 'Index',
  props: {
    roles: {
      type: Array,
      required: true
    }
  },
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var props = __props;
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      //setCurrentPageTitle("Roles");
      (0,_core_helpers_breadcrumb__WEBPACK_IMPORTED_MODULE_3__.setCurrentPageBreadcrumbs)("Roles", ["System Settings"]);
    });
    var getRoles = function getRoles() {
      _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__.router.get(route('roles.index'), {}, {
        preserveState: true
      });
    };
    var destroy = function destroy(RoleId) {
      sweetalert2_dist_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_2___default().fire({
        text: "Are you sure you want to delete this?",
        icon: "warning",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Delete',
        denyButtonText: 'No',
        buttonsStyling: false,
        customClass: {
          confirmButton: "btn fw-bold btn-danger",
          cancelButton: "btn fw-bold btn-secondary"
        }
      }).then(function (result) {
        if (result.isConfirmed) {
          _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__.router["delete"](route('roles.destroy', RoleId));
        }
      });
    };
    var __returned__ = {
      props: props,
      getRoles: getRoles,
      destroy: destroy
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Roles/Index.vue?vue&type=template&id=7d4c6f06&ts=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Roles/Index.vue?vue&type=template&id=7d4c6f06&ts=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"card-title\"><!--begin::Page title--><div id=\"kt_page_title\" data-kt-swapper=\"true\" data-kt-swapper-mode=\"prepend\" data-kt-swapper-parent=\"{default: &#39;#kt_content_container&#39;, &#39;lg&#39;: &#39;#kt_toolbar_container&#39;}\" class=\"page-title d-flex flex-column justify-content-center flex-wrap me-3\"><!--begin::Title--><h1 class=\"d-flex align-items-center text-dark fw-bolder my-1 fs-3\"> Roles </h1><!--end::Title--><!--begin::Breadcrumb--><ul class=\"breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1\"><li class=\"breadcrumb-item text-muted\"> System Settings </li><li class=\"breadcrumb-item\"><span class=\"bullet bg-gray-200 w-5px h-2px\"></span></li><li class=\"breadcrumb-item pe-3 text-dark\"> Roles </li></ul><!--end::Breadcrumb--></div><!--end::Page title--></div>", 1);
var _hoisted_4 = {
  "class": "card-toolbar"
};
var _hoisted_5 = {
  type: "button",
  "class": "btn btn-primary"
};
var _hoisted_6 = {
  "class": "svg-icon svg-icon-2"
};
var _hoisted_7 = {
  "class": "card-body pt-0 position-relative"
};
var _hoisted_8 = {
  "class": "d-flex align-items-center position-relative my-6"
};
var _hoisted_9 = {
  "class": "svg-icon svg-icon-1 position-absolute ms-6"
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  "class": "form-control form-control-solid w-250px ps-15",
  placeholder: "Search"
}, null, -1 /* HOISTED */);
var _hoisted_11 = {
  "class": "table-responsive"
};
var _hoisted_12 = {
  "class": "table table-row-bordered table-row-gray-300 align-middle gs-0 gy-4"
};
var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "fw-semibold fs-6 text-gray-800"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "p-0"
}, "Role Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "p-0 min-w-100px text-end"
}, "Action")])], -1 /* HOISTED */);
var _hoisted_14 = {
  "class": "fw-semibold"
};
var _hoisted_15 = {
  "class": "text-end"
};
var _hoisted_16 = {
  "class": "svg-icon svg-icon-3"
};
var _hoisted_17 = {
  "class": "svg-icon svg-icon-3"
};
var _hoisted_18 = ["onClick"];
var _hoisted_19 = {
  "class": "svg-icon svg-icon-3"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  var _component_inline_svg = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("inline-svg");
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "Roles"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Card header"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Card title"), _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Card title"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Card toolbar"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Add button"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inline_svg, {
    src: "/media/icons/duotune/arrows/arr075.svg"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add Role ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Add button")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Card toolbar")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Card header"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Search"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inline_svg, {
    src: "/media/icons/duotune/general/gen021.svg"
  })]), _hoisted_10]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Search"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Table head"), _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.roles, function (role) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: role.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(role.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
      href: _ctx.route('roles.show', role.id),
      title: "Proceed",
      "class": "btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inline_svg, {
          src: "/media/icons/duotune/general/gen019.svg"
        })])];
      }),
      _: 2 /* DYNAMIC */
    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
      href: _ctx.route('roles.edit', role.id),
      title: "Edit",
      "class": "btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inline_svg, {
          src: "/media/icons/duotune/art/art005.svg"
        })])];
      }),
      _: 2 /* DYNAMIC */
    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $setup.destroy(role.id);
      }, ["prevent"]),
      title: "Delete",
      "class": "btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inline_svg, {
      src: "/media/icons/duotune/general/gen027.svg"
    })])], 8 /* PROPS */, _hoisted_18)])]);
  }), 128 /* KEYED_FRAGMENT */))])])])])])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./resources/ts/core/helpers/breadcrumb.ts":
/*!*************************************************!*\
  !*** ./resources/ts/core/helpers/breadcrumb.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setCurrentPageBreadcrumbs: () => (/* binding */ setCurrentPageBreadcrumbs),
/* harmony export */   setCurrentPageTitle: () => (/* binding */ setCurrentPageTitle)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store */ "./resources/ts/store/index.ts");
/* harmony import */ var _store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/enums/StoreEnums */ "./resources/ts/store/enums/StoreEnums.ts");


/**
 * Sets current page breadcrumbs
 * @param {string} pageTitle Current page title
 * @param {Array<string>} breadcrumbs Current page breadcrumbs
 */
var setCurrentPageBreadcrumbs = function setCurrentPageBreadcrumbs(pageTitle, breadcrumbs) {
  _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.SET_BREADCRUMB_ACTION, {
    title: pageTitle,
    pageBreadcrumbPath: breadcrumbs
  });
};
/**
 * Sets current page breadcrumbs
 * @param {string} title Current page title name
 */
var setCurrentPageTitle = function setCurrentPageTitle(title) {
  _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.SET_BREADCRUMB_ACTION, {
    title: title
  });
};

/***/ }),

/***/ "./resources/ts/Pages/Roles/Index.vue":
/*!********************************************!*\
  !*** ./resources/ts/Pages/Roles/Index.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_7d4c6f06_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=7d4c6f06&ts=true */ "./resources/ts/Pages/Roles/Index.vue?vue&type=template&id=7d4c6f06&ts=true");
/* harmony import */ var _Index_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=ts&setup=true */ "./resources/ts/Pages/Roles/Index.vue?vue&type=script&lang=ts&setup=true");
/* harmony import */ var _home_naveed_sites_nspp_emrs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_naveed_sites_nspp_emrs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Index_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Index_vue_vue_type_template_id_7d4c6f06_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/Pages/Roles/Index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/Pages/Roles/Index.vue?vue&type=script&lang=ts&setup=true":
/*!*******************************************************************************!*\
  !*** ./resources/ts/Pages/Roles/Index.vue?vue&type=script&lang=ts&setup=true ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&lang=ts&setup=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Roles/Index.vue?vue&type=script&lang=ts&setup=true");
 

/***/ }),

/***/ "./resources/ts/Pages/Roles/Index.vue?vue&type=template&id=7d4c6f06&ts=true":
/*!**********************************************************************************!*\
  !*** ./resources/ts/Pages/Roles/Index.vue?vue&type=template&id=7d4c6f06&ts=true ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_7d4c6f06_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_7d4c6f06_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=7d4c6f06&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/Pages/Roles/Index.vue?vue&type=template&id=7d4c6f06&ts=true");


/***/ })

}]);