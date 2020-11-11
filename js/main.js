/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, noUiSlider) {$(function () {
  Inputmask.extendDefaults({
    'showMaskOnHover': false
  });
  var common_rules = {
    rules: {
      'field-NAME': {
        required: true
      },
      'property-PHONE': {
        required: true,
        mobile_tel: true
      }
    }
  };
  $('form').each(function (i) {
    $(this).validate(common_rules);
  });
  $('.labeled-input').on('change keyup input', function (e) {
    var input = $(this);
    var val = input.val();

    if (val != null && val.length) {
      input.addClass('has-value');
    } else {
      input.removeClass('has-value');
    }
  });
  $('[name=property-PHONE]').inputmask({
    mask: '+7 (999) 999 - 99 - 99',
    placeholder: '+7 (___) ___ - __ - __'
  });
  $('[name=your_year]').inputmask({
    regex: "[12][0-9]{3}",
    placeholder: ''
  });
  $('[name=your_mileage]').inputmask({
    regex: "[0-9]+",
    placeholder: ''
  });
  $('[name=field-NAME]').on('input change', function () {
    $(this).val($(this).val().replace(/[0-9]+/g, '').replace(/\s+/g, ' '));
  });

  if ($('.main-form').length) {
    var inital_pay_slider = $('#credit_inital_pay_slider').length ? $('#credit_inital_pay_slider')[0] : null;
    var inital_pay_start = forceInt($('#param_credit_firstpay_percent').val());

    if (inital_pay_slider != null) {
      if (inital_pay_slider.noUiSlider) {
        inital_pay_slider.noUiSlider.destroy();
      }

      noUiSlider.create(inital_pay_slider, {
        range: {
          min: 0,
          max: 70
        },
        start: [inital_pay_start],
        handles: 1,
        step: 1,
        connect: 'lower'
      });
      inital_pay_slider.noUiSlider.on('update', function (values, handle) {
        var percnt = parseInt(Math.round(values[handle]));
        $('#firstpay').val(percnt + '%');
        var car_price = forceInt($('#car_price').val());
        var first_pay = Math.round(car_price * percnt / 100 / 100) * 100;
        $('#firstpay').val(number_format(first_pay) + ' руб.');
        monthly_dom();
      });
    }

    var car_price_slider = $('#car_price_slider').length ? $('#car_price_slider')[0] : null;

    if (car_price_slider != null) {
      if (car_price_slider.noUiSlider) {
        car_price_slider.noUiSlider.destroy();
      }

      noUiSlider.create(car_price_slider, {
        range: {
          min: 100000,
          max: 3500000
        },
        start: [500000],
        handles: 1,
        step: 5000,
        connect: 'lower'
      });
      car_price_slider.noUiSlider.on('update', function (values, handle) {
        var price = parseInt(Math.round(values[handle]));
        $('#car_price').val(number_format(price) + ' руб.');

        if (inital_pay_slider != null) {
          inital_pay_slider.noUiSlider.set(inital_pay_slider.noUiSlider.get());
        }

        monthly_dom();
      });
    }

    var credit_term_slider = $('#credit_term_slider').length ? $('#credit_term_slider')[0] : null;

    if (credit_term_slider != null) {
      if (credit_term_slider.noUiSlider) {
        credit_term_slider.noUiSlider.destroy();
      }

      noUiSlider.create(credit_term_slider, {
        range: {
          min: 6,
          max: 84
        },
        start: [84],
        handles: 1,
        step: 6,
        connect: 'lower'
      });
      credit_term_slider.noUiSlider.on('update', function (values, handle) {
        var months = parseInt(Math.round(values[handle]));
        $('#credit_term').val(months + ' мес.');
        monthly_dom();
      });
    }

    $('#car_price').on('focus', function (e) {
      var s = forceInt($(this).val());
      $(this).val(s);

      if ($(this).setSelectionRange) {
        $(this).setSelectionRange(start, end);
      }
    });
    $('#car_price').on('input', function (e) {
      var s = forceInt($(this).val());
      $(this).val(s);
    });
    $('#car_price').on('blur', function (e) {
      var s = forceInt($(this).val());
      $(this).val(number_format(s) + ' руб.');

      if (car_price_slider.noUiSlider) {
        car_price_slider.noUiSlider.set(s);
      }
    });
    $('#firstpay').on('focus', function (e) {
      var s = forceInt($(this).val());
      $(this).val(s);

      if ($(this).setSelectionRange) {
        $(this).setSelectionRange(start, end);
      }
    });
    $('#firstpay').on('input', function (e) {
      var s = forceInt($(this).val());
      $(this).val(s);
    });
    $('#firstpay').on('blur', function (e) {
      var s = forceInt($(this).val());
      var car_price = forceInt($('#car_price').val());
      var percent = Math.round(s / car_price * 100);
      $(this).val(number_format(s) + ' руб.');

      if (inital_pay_slider.noUiSlider) {
        inital_pay_slider.noUiSlider.set(percent);
      }
    });
    $('#credit_term').on('focus', function (e) {
      var s = forceInt($(this).val());
      $(this).val(s);

      if ($(this).setSelectionRange) {
        $(this).setSelectionRange(start, end);
      }
    });
    $('#credit_term').on('input', function (e) {
      var s = forceInt($(this).val());
      $(this).val(s);
    });
    $('#credit_term').on('blur', function (e) {
      var s = forceInt($(this).val());
      $(this).val(number_format(s) + ' мес.');

      if (credit_term_slider.noUiSlider) {
        credit_term_slider.noUiSlider.set(s);
      }
    });
    $('.main-form [name=agree]').on('change', function (e) {
      $('.main-form__submit').prop('disabled', !$(this).prop('checked'));
    });
    $('.main-form').on('submit', function (event) {
      event.preventDefault ? event.preventDefault() : event.returnValue = false;
      var form_object = $(this);
      var postURL = form_object.attr('action');

      if (credit_from_check(form_object, true) && postURL) {
        //Забираем параметры кредитного калькулятора
        global_card_form_car_credit_info(form_object, 'old'); //Отправка данных через ajax

        data = form_object.serialize();
        data = data + '&action=iblock_add'; // $.ajax({
        //     type: "POST",
        //     data: data,
        //     url: postURL
        // }).done(function (html, form_object) {
        //
        //     if ($.isNumeric(html))
        //     {
        //         //Здесь записываем фиксацию цели
        //         metrics_credit_add('goal', function() { $(location).attr('href', '/success'); });
        //
        //     };
        //     // else { $("#" + card_form_name + " .btn-send-credit").show(); };
        //
        // });
      }

      ;
    });
  }
});

function credit_from_check(form_object, mark_fields) {
  var checkpar = true;
  var not_mark = true;
  if (mark_fields) not_mark = false;
  form_object.find(".req").each(function () {
    if (!global_check_field_function($(this), not_mark)) checkpar = false;
  });
  if (form_object.find('#main-form-agree').is(':checked') === false) checkpar = false;
  /*if (checkpar) { form_object.find('#btn-send-credit').removeClass('disabled'); }
  else { form_object.find('#btn-send-credit').addClass('disabled'); };*/

  return checkpar;
}

function number_format(str) {
  str = str.toString();
  str = str.replace(/(\.(.*))/g, '');
  var arr = str.split('');
  var str_temp = '';

  if (str.length > 3) {
    for (var i = arr.length - 1, j = 1; i >= 0; i--, j++) {
      str_temp = arr[i] + str_temp;

      if (j % 3 == 0) {
        str_temp = ' ' + str_temp;
      }
    }

    return str_temp.trim();
  } else {
    return str.trim();
  }
}

function forceInt(value) {
  value = '' + value;
  value = value.replace(/\D+/g, '');
  value = parseInt(value);

  if (isNaN(value) || !isFinite(value)) {
    value = 0;
  }

  return value;
}

function monthly(car_price, first_pay, credit_stav, credit_term) {
  var month_pay = Math.round(credit_stav / 1200 * (car_price - first_pay) * -1 * Math.pow(1 + credit_stav / 1200, credit_term) / (1 - Math.pow(1 + credit_stav / 1200, credit_term)));
  return month_pay;
}

function monthly_dom() {
  var car_price = forceInt($('#car_price').val());
  var credit_stav = parseFloat($('#param_credit_rate').val());
  var credit_term = forceInt($('#credit_term').val());
  var first_pay = forceInt($('#firstpay').val());
  var month_pay = monthly(car_price, first_pay, credit_stav, credit_term);
  $('#month_pay').val(number_format(month_pay) + ' руб.');
}

function validate_phone(value, regex) {
  if (value == null) {
    value = '';
  }

  if (regex == null) {
    regex = /^7\d\d\d\d\d\d\d\d\d\d$/g;
  }

  var nums = value.replace(/[^0-9]+/g, '');
  return regex.test(nums) && !/(\d)\1{6}/g.test(nums);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! nouislider */ "./node_modules/nouislider/distribute/nouislider.js")))

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/distribute/nouislider.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! inputmask.dependencyLib */ "./node_modules/jquery.inputmask/dist/inputmask/inputmask.dependencyLib.js");
/* harmony import */ var inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! inputmask */ "./node_modules/jquery.inputmask/dist/inputmask/inputmask.js");
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery_inputmask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery.inputmask */ "./node_modules/jquery.inputmask/dist/inputmask/jquery.inputmask.js");
/* harmony import */ var jquery_inputmask__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery_inputmask__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery-validation */ "./node_modules/jquery-validation/dist/jquery.validate.js");
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery_validation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_7__);









/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map