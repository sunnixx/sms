
          window.__NEXT_REGISTER_PAGE('/finance', function() {
            var comp = module.exports =
webpackJsonp([7],{

/***/ 1000:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(35);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(37);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _echartsForReact = __webpack_require__(678);

var _echartsForReact2 = _interopRequireDefault(_echartsForReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/sumair/MEAN STACK/My Work/sms/components/charts/monthlyChart.js";


var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);

        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
    }

    (0, _createClass3.default)(_class, [{
        key: "getOptions",
        value: function getOptions() {
            var basic_pie_options = {

                // Add title
                title: {
                    text: 'Challan Overview',
                    subtext: 'Shows Challan stats',
                    x: 'center'
                },

                // Add tooltip
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },

                // Add legend
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data: ['Issued', 'Not Issued', 'Pending']
                },

                // Display toolbox
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    feature: {
                        mark: {
                            show: true,
                            title: {
                                mark: 'Markline switch',
                                markUndo: 'Undo markline',
                                markClear: 'Clear markline'
                            }
                        },
                        magicType: {
                            show: true,
                            title: {
                                pie: 'Switch to pies',
                                funnel: 'Switch to funnel'
                            },
                            type: ['pie', 'funnel'],
                            option: {
                                funnel: {
                                    x: '25%',
                                    y: '20%',
                                    width: '50%',
                                    height: '70%',
                                    funnelAlign: 'left',
                                    max: 1548
                                }
                            }
                        },
                        restore: {
                            show: true,
                            title: 'Restore'
                        },
                        saveAsImage: {
                            show: true,
                            title: 'Same as image',
                            lang: ['Save']
                        }
                    }
                },

                // Enable drag recalculate
                calculable: true,

                // Add series
                series: [{
                    name: 'Challans',
                    type: 'pie',
                    radius: '70%',
                    center: ['50%', '57.5%'],
                    data: [{ value: 20, name: 'Not Issued' }, { value: 130, name: 'Issued' }, { value: 40, name: 'Pending' }]
                }]
            };
            return basic_pie_options;
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(_echartsForReact2.default, {
                option: this.getOptions(),
                style: { height: '350px', width: '100%' },
                className: "react_for_echarts", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            });
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/sumair/MEAN STACK/My Work/sms/components/charts/monthlyChart.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/sumair/MEAN STACK/My Work/sms/components/charts/monthlyChart.js"); } } })();

/***/ }),

/***/ 1033:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(749);


/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(35);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(37);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(202);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/sumair/MEAN STACK/My Work/sms/components/Head.js";


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, _react2.default.createElement("meta", { charset: "utf-8", __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }), _react2.default.createElement("meta", { "http-equiv": "X-UA-Compatible", content: "IE=edge", __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }), _react2.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1", __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }), _react2.default.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, "International Islamic University Islamabad - Latifabad Campus"), _react2.default.createElement("link", { href: "https://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,900", rel: "stylesheet", type: "text/css", __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }), _react2.default.createElement("link", { href: "static/assets/css/icons/icomoon/styles.css", rel: "stylesheet", type: "text/css", __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }), _react2.default.createElement("link", { href: "static/assets/css/bootstrap.css", rel: "stylesheet", type: "text/css", __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }), _react2.default.createElement("link", { href: "static/assets/css/core.css", rel: "stylesheet", type: "text/css", __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), _react2.default.createElement("link", { href: "static/assets/css/components.css", rel: "stylesheet", type: "text/css", __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), _react2.default.createElement("link", { href: "static/assets/css/colors.css", rel: "stylesheet", type: "text/css", __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), _react2.default.createElement("script", { type: "text/javascript", src: "static/assets/js/plugins/loaders/pace.min.js", __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), _react2.default.createElement("script", { type: "text/javascript", src: "static/assets/js/core/libraries/jquery.min.js", __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), _react2.default.createElement("script", { type: "text/javascript", src: "static/assets/js/core/libraries/bootstrap.min.js", __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), _react2.default.createElement("script", { type: "text/javascript", src: "static/assets/js/plugins/loaders/blockui.min.js", __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), _react2.default.createElement("script", { type: "text/javascript", src: "static/assets/js/plugins/uploaders/fileinput.min.js", __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), _react2.default.createElement("script", { type: "text/javascript", src: "static/assets/js/plugins/forms/selects/select2.min.js", __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), _react2.default.createElement("script", { type: "text/javascript", src: "static/assets/js/core/app.js", __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), _react2.default.createElement("script", { type: "text/javascript", src: "static/assets/js/pages/uploader_bootstrap.js", __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), _react2.default.createElement("script", { type: "text/javascript", src: "static/assets/js/pages/form_select2.js", __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), _react2.default.createElement("script", { type: "text/javascript", src: "static/assets/js/plugins/ui/ripple.min.js", __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/sumair/MEAN STACK/My Work/sms/components/Head.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/sumair/MEAN STACK/My Work/sms/components/Head.js"); } } })();

/***/ }),

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__(35);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(37);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(557);

var _link2 = _interopRequireDefault(_link);

var _axios = __webpack_require__(562);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/sumair/MEAN STACK/My Work/sms/components/Sidebar.js";


var _class = function (_React$Component) {
	(0, _inherits3.default)(_class, _React$Component);

	function _class(props) {
		(0, _classCallCheck3.default)(this, _class);

		var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

		_this.state = { userProfile: { profile: {}

				//Bind Methods
			} };_this.getProfileInfo = _this.getProfileInfo.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(_class, [{
		key: "getProfileInfo",
		value: function getProfileInfo() {
			var _this2 = this;

			_axios2.default.get('/getprofile').then(function (response) {
				_this2.setState({ userProfile: response.data });
			}).catch(function (err) {
				console.error("The error: " + err);
			});
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			this.getProfileInfo();
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement("div", { className: "sidebar sidebar-main sidebar-default", __source: {
					fileName: _jsxFileName,
					lineNumber: 29
				}
			}, _react2.default.createElement("div", { className: "sidebar-content", __source: {
					fileName: _jsxFileName,
					lineNumber: 30
				}
			}, _react2.default.createElement("div", { className: "sidebar-user-material", __source: {
					fileName: _jsxFileName,
					lineNumber: 31
				}
			}, _react2.default.createElement("div", { className: "category-content", __source: {
					fileName: _jsxFileName,
					lineNumber: 32
				}
			}, _react2.default.createElement("div", { className: "sidebar-user-material-content", __source: {
					fileName: _jsxFileName,
					lineNumber: 33
				}
			}, _react2.default.createElement("a", { href: "#", className: "legitRipple", __source: {
					fileName: _jsxFileName,
					lineNumber: 34
				}
			}, _react2.default.createElement("img", { src: this.state.userProfile.profile.picture, className: "img-circle img-responsive", alt: "", __source: {
					fileName: _jsxFileName,
					lineNumber: 34
				}
			})), _react2.default.createElement("h6", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 35
				}
			}, this.state.userProfile.profile.name), _react2.default.createElement("span", { className: "text-size-small", __source: {
					fileName: _jsxFileName,
					lineNumber: 36
				}
			}, this.state.userProfile.role)), _react2.default.createElement("div", { className: "sidebar-user-material-menu", __source: {
					fileName: _jsxFileName,
					lineNumber: 39
				}
			}, _react2.default.createElement("a", { href: "#user-nav", "data-toggle": "collapse", className: "legitRipple", __source: {
					fileName: _jsxFileName,
					lineNumber: 40
				}
			}, _react2.default.createElement("span", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 40
				}
			}, "My account"), " ", _react2.default.createElement("i", { className: "caret", __source: {
					fileName: _jsxFileName,
					lineNumber: 40
				}
			})))), _react2.default.createElement("div", { className: "navigation-wrapper collapse", id: "user-nav", __source: {
					fileName: _jsxFileName,
					lineNumber: 44
				}
			}, _react2.default.createElement("ul", { className: "navigation", __source: {
					fileName: _jsxFileName,
					lineNumber: 45
				}
			}, _react2.default.createElement("li", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 46
				}
			}, _react2.default.createElement(_link2.default, { href: "/profile", __source: {
					fileName: _jsxFileName,
					lineNumber: 46
				}
			}, _react2.default.createElement("a", { href: "#", className: "legitRipple", __source: {
					fileName: _jsxFileName,
					lineNumber: 46
				}
			}, _react2.default.createElement("i", { className: "icon-user-plus", __source: {
					fileName: _jsxFileName,
					lineNumber: 46
				}
			}), " ", _react2.default.createElement("span", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 46
				}
			}, "My profile")))), _react2.default.createElement("li", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 47
				}
			}, _react2.default.createElement("a", { href: "#", className: "legitRipple", __source: {
					fileName: _jsxFileName,
					lineNumber: 47
				}
			}, _react2.default.createElement("i", { className: "icon-cog5", __source: {
					fileName: _jsxFileName,
					lineNumber: 47
				}
			}), " ", _react2.default.createElement("span", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 47
				}
			}, "Account settings"))), _react2.default.createElement("li", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}, _react2.default.createElement(_link2.default, { href: "/logout", __source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}, _react2.default.createElement("a", { className: "legitRipple", __source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}, _react2.default.createElement("i", { className: "icon-switch2", __source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}), " ", _react2.default.createElement("span", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}, "Logout"))))))), _react2.default.createElement("div", { className: "sidebar-category sidebar-category-visible", __source: {
					fileName: _jsxFileName,
					lineNumber: 53
				}
			}, _react2.default.createElement("div", { className: "category-content no-padding", __source: {
					fileName: _jsxFileName,
					lineNumber: 54
				}
			}, _react2.default.createElement("ul", { className: "navigation navigation-main navigation-accordion", __source: {
					fileName: _jsxFileName,
					lineNumber: 55
				}
			}, _react2.default.createElement("li", { className: "navigation-header", __source: {
					fileName: _jsxFileName,
					lineNumber: 57
				}
			}, _react2.default.createElement("span", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 57
				}
			}, "Main"), " ", _react2.default.createElement("i", { className: "icon-menu", title: "", "data-original-title": "Main pages", __source: {
					fileName: _jsxFileName,
					lineNumber: 57
				}
			})), _react2.default.createElement("li", { className: this.props.dashboardActive, __source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}, _react2.default.createElement(_link2.default, { href: "/", __source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}, _react2.default.createElement("a", { className: "legitRipple", __source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}, _react2.default.createElement("i", { className: "icon-home4", __source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}), " ", _react2.default.createElement("span", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}, "Dashboard")))), _react2.default.createElement("li", { className: this.props.financeActive, __source: {
					fileName: _jsxFileName,
					lineNumber: 59
				}
			}, _react2.default.createElement(_link2.default, { href: "/finance", __source: {
					fileName: _jsxFileName,
					lineNumber: 60
				}
			}, _react2.default.createElement("a", { className: "has-ul legitRipple", __source: {
					fileName: _jsxFileName,
					lineNumber: 60
				}
			}, _react2.default.createElement("i", { className: "icon-stats-growth", __source: {
					fileName: _jsxFileName,
					lineNumber: 60
				}
			}), " ", _react2.default.createElement("span", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 60
				}
			}, "Finance"))), _react2.default.createElement("ul", { className: "hidden-ul", style: { display: this.props.challanShow }, __source: {
					fileName: _jsxFileName,
					lineNumber: 61
				}
			}, _react2.default.createElement("li", { className: this.props.challanActive, __source: {
					fileName: _jsxFileName,
					lineNumber: 62
				}
			}, _react2.default.createElement(_link2.default, { href: "/finance", __source: {
					fileName: _jsxFileName,
					lineNumber: 62
				}
			}, _react2.default.createElement("a", { className: "legitRipple", __source: {
					fileName: _jsxFileName,
					lineNumber: 62
				}
			}, _react2.default.createElement("i", { className: "icon-stack", __source: {
					fileName: _jsxFileName,
					lineNumber: 62
				}
			}), "Challans"))), _react2.default.createElement("li", { className: this.props.addStudentActive, __source: {
					fileName: _jsxFileName,
					lineNumber: 63
				}
			}, _react2.default.createElement(_link2.default, { href: "/addchallan", __source: {
					fileName: _jsxFileName,
					lineNumber: 63
				}
			}, _react2.default.createElement("a", { className: "legitRipple", __source: {
					fileName: _jsxFileName,
					lineNumber: 63
				}
			}, _react2.default.createElement("i", { className: "icon-plus", __source: {
					fileName: _jsxFileName,
					lineNumber: 63
				}
			}), "Add Challan"))))), _react2.default.createElement("li", { className: this.props.admissionsActive, __source: {
					fileName: _jsxFileName,
					lineNumber: 66
				}
			}, _react2.default.createElement("a", { href: "#", className: "has-ul legitRipple", __source: {
					fileName: _jsxFileName,
					lineNumber: 67
				}
			}, _react2.default.createElement("i", { className: "icon-reading", __source: {
					fileName: _jsxFileName,
					lineNumber: 67
				}
			}), " ", _react2.default.createElement("span", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 67
				}
			}, "Admissions")), _react2.default.createElement("ul", { className: "hidden-ul", style: { display: "none" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 68
				}
			})), _react2.default.createElement("li", { className: this.props.academicsActive, __source: {
					fileName: _jsxFileName,
					lineNumber: 72
				}
			}, _react2.default.createElement("a", { href: "#", className: "has-ul legitRipple", __source: {
					fileName: _jsxFileName,
					lineNumber: 73
				}
			}, _react2.default.createElement("i", { className: "icon-graduation", __source: {
					fileName: _jsxFileName,
					lineNumber: 73
				}
			}), " ", _react2.default.createElement("span", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 73
				}
			}, "Academics")), _react2.default.createElement("ul", { className: "hidden-ul", style: { display: "none" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 74
				}
			})), _react2.default.createElement("li", { className: this.props.healthActive, __source: {
					fileName: _jsxFileName,
					lineNumber: 78
				}
			}, _react2.default.createElement("a", { href: "#", className: "has-ul legitRipple", __source: {
					fileName: _jsxFileName,
					lineNumber: 79
				}
			}, _react2.default.createElement("i", { className: "icon-heart5", __source: {
					fileName: _jsxFileName,
					lineNumber: 79
				}
			}), " ", _react2.default.createElement("span", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 79
				}
			}, "Health")), _react2.default.createElement("ul", { className: "hidden-ul", style: { display: "none" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 80
				}
			})))))));
		}
	}]);

	return _class;
}(_react2.default.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/sumair/MEAN STACK/My Work/sms/components/Sidebar.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/sumair/MEAN STACK/My Work/sms/components/Sidebar.js"); } } })();

/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__(35);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(37);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(557);

var _link2 = _interopRequireDefault(_link);

var _axios = __webpack_require__(562);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/sumair/MEAN STACK/My Work/sms/components/TopMenu.js";


var _class = function (_React$Component) {
	(0, _inherits3.default)(_class, _React$Component);

	function _class(props) {
		(0, _classCallCheck3.default)(this, _class);

		var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

		_this.state = { userProfile: { profile: {} }, time: ''

			//Bind Methods
		};_this.getProfileInfo = _this.getProfileInfo.bind(_this);
		_this.getGreeting = _this.getGreeting.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(_class, [{
		key: "getProfileInfo",
		value: function getProfileInfo() {
			var _this2 = this;

			_axios2.default.get('/getprofile').then(function (response) {
				_this2.setState({ userProfile: response.data });
			}).catch(function (err) {
				console.error("The error: ", err);
			});
		}
	}, {
		key: "getGreeting",
		value: function getGreeting() {
			var today = new Date();
			var curHr = today.getHours();
			if (curHr < 12) {
				this.setState({ time: 'Morning' });
			} else if (curHr < 18) {
				this.setState({ time: 'Afternoon' });
			} else {
				this.setState({ time: 'Evening' });
			}
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			this.getProfileInfo();
			this.getGreeting();
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement("div", { className: "navbar navbar-inverse bg-indigo", __source: {
					fileName: _jsxFileName,
					lineNumber: 42
				}
			}, _react2.default.createElement("div", { className: "navbar-header", __source: {
					fileName: _jsxFileName,
					lineNumber: 43
				}
			}, _react2.default.createElement(_link2.default, { href: "/", __source: {
					fileName: _jsxFileName,
					lineNumber: 44
				}
			}, _react2.default.createElement("a", { className: "navbar-brand", __source: {
					fileName: _jsxFileName,
					lineNumber: 44
				}
			}, _react2.default.createElement("img", { src: "static/assets/images/logo.png", alt: "", __source: {
					fileName: _jsxFileName,
					lineNumber: 44
				}
			}))), _react2.default.createElement("ul", { className: "nav navbar-nav visible-xs-block", __source: {
					fileName: _jsxFileName,
					lineNumber: 46
				}
			}, _react2.default.createElement("li", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 47
				}
			}, _react2.default.createElement("a", { "data-toggle": "collapse", "data-target": "#navbar-mobile", __source: {
					fileName: _jsxFileName,
					lineNumber: 47
				}
			}, _react2.default.createElement("i", { className: "icon-tree5", __source: {
					fileName: _jsxFileName,
					lineNumber: 47
				}
			}))), _react2.default.createElement("li", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}, _react2.default.createElement("a", { className: "sidebar-mobile-main-toggle", __source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}, _react2.default.createElement("i", { className: "icon-paragraph-justify3", __source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}))))), _react2.default.createElement("div", { className: "navbar-collapse collapse", id: "navbarx-mobile", __source: {
					fileName: _jsxFileName,
					lineNumber: 52
				}
			}, _react2.default.createElement("ul", { className: "nav navbar-nav", __source: {
					fileName: _jsxFileName,
					lineNumber: 53
				}
			}, _react2.default.createElement("li", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 54
				}
			}, _react2.default.createElement("a", { className: "sidebar-control sidebar-main-toggle hidden-xs", __source: {
					fileName: _jsxFileName,
					lineNumber: 54
				}
			}, _react2.default.createElement("i", { className: "icon-paragraph-justify3", __source: {
					fileName: _jsxFileName,
					lineNumber: 54
				}
			})))), _react2.default.createElement("div", { className: "navbar-right", __source: {
					fileName: _jsxFileName,
					lineNumber: 57
				}
			}, _react2.default.createElement("p", { className: "navbar-text", __source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}, this.state.time, ", ", this.state.userProfile.username, "!"), _react2.default.createElement("p", { className: "navbar-text", __source: {
					fileName: _jsxFileName,
					lineNumber: 59
				}
			}, _react2.default.createElement("span", { className: "label bg-success-400", __source: {
					fileName: _jsxFileName,
					lineNumber: 59
				}
			}, "Online")))));
		}
	}]);

	return _class;
}(_react2.default.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/sumair/MEAN STACK/My Work/sms/components/TopMenu.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/sumair/MEAN STACK/My Work/sms/components/TopMenu.js"); } } })();

/***/ }),

/***/ 749:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(35);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(37);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Head = __webpack_require__(558);

var _Head2 = _interopRequireDefault(_Head);

var _link = __webpack_require__(557);

var _link2 = _interopRequireDefault(_link);

var _axios = __webpack_require__(562);

var _axios2 = _interopRequireDefault(_axios);

var _Sidebar = __webpack_require__(587);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _TopMenu = __webpack_require__(588);

var _TopMenu2 = _interopRequireDefault(_TopMenu);

var _monthlyChart = __webpack_require__(1000);

var _monthlyChart2 = _interopRequireDefault(_monthlyChart);

var _monthlyAmount = __webpack_require__(999);

var _monthlyAmount2 = _interopRequireDefault(_monthlyAmount);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/sumair/MEAN STACK/My Work/sms/pages/finance.js?entry";


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class(props) {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

    _this.state = { data: [], bPrint: "true" };

    _this.getAllStudents = _this.getAllStudents.bind(_this);
    _this.checkMultipleChallan = _this.checkMultipleChallan.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: "getAllStudents",
    value: function getAllStudents() {
      var _this2 = this;

      _axios2.default.get('/allstudents').then(function (response) {
        _this2.setState({ data: response.data });
        // console.log(this.state.data);
      });
    }
  }, {
    key: "checkMultipleChallan",
    value: function checkMultipleChallan(e) {
      if (e.target.value === "on") {
        this.setState({ bPrint: "false" });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getAllStudents();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement(_Head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), _react2.default.createElement(_TopMenu2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }), _react2.default.createElement("div", { className: "page-container", __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement("div", { className: "page-content", __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement(_Sidebar2.default, { financeActive: "active", challanShow: "block", challanActive: "active", __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), _react2.default.createElement("div", { className: "content-wrapper", __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement("div", { className: "content", __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement("div", { className: "col-md-6", __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement("div", { className: "panel panel-flat", __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement("div", { className: "panel-body", __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement(_monthlyChart2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      })))), _react2.default.createElement("div", { className: "col-md-6", __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement("div", { className: "panel panel-flat", __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement("div", { className: "panel-body", __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement(_monthlyAmount2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      })))))), _react2.default.createElement("div", { className: "col-md-12", __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement("div", { className: "panel panel-flat", __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement("div", { className: "panel-heading", __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement("h5", { className: "panel-title", __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, "Students Challan Info")), _react2.default.createElement("table", { className: "table datatable-basic", __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement("thead", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement("input", { type: "checkbox", onClick: this.checkMultipleChallan, __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }), "Select"), _react2.default.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, "Roll No"), _react2.default.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, "First Name"), _react2.default.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, "Last Name"), _react2.default.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, "Fathers Name"), _react2.default.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, "Issue Date"), _react2.default.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, "Fee Month"), _react2.default.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, "Due Date"), _react2.default.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, "Status"), _react2.default.createElement("th", { className: "text-center", __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, "Actions"))), _react2.default.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, this.state.data.map(function (element) {
        return _react2.default.createElement("tr", { key: element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          }
        }, _react2.default.createElement("td", { key: 'checkbox' + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          }
        }, _react2.default.createElement("input", { type: "checkbox", onClick: _this3.checkMultipleChallan, __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          }
        })), _react2.default.createElement("td", { key: 'rollno' + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          }
        }, element.rollNo), _react2.default.createElement("td", { key: 'firstname' + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          }
        }, element.fname), _react2.default.createElement("td", { key: 'lastname' + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          }
        }, element.lname), _react2.default.createElement("td", { key: 'guard' + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          }
        }, element.guardian), _react2.default.createElement("td", { key: 'Issue' + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          }
        }, element.issueDate), _react2.default.createElement("td", { key: 'MonthFee' + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          }
        }, element.feeMonth), _react2.default.createElement("td", { key: 'Date' + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          }
        }, element.dueDate), _react2.default.createElement("td", { key: 'status' + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          }
        }, _react2.default.createElement("span", { className: "label label-success", __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          }
        }, "Paid")), _react2.default.createElement("td", { key: 'text' + element._id, className: "text-center", __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          }
        }, _react2.default.createElement("ul", { key: 'iconlist' + element._id, className: "icons-list", __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          }
        }, _react2.default.createElement("li", { key: 'dropdown' + element._id, className: "dropdown", __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          }
        }, _react2.default.createElement("a", { key: 'dropdowntoggle' + element._id, href: "#", className: "dropdown-toggle", "data-toggle": "dropdown", __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          }
        }, _react2.default.createElement("i", { key: 'iconmenu9' + element._id, className: "icon-menu9", __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          }
        })), _react2.default.createElement("ul", { key: 'dropdownmenu' + element._id, className: "dropdown-menu dropdown-menu-right", __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          }
        }, _react2.default.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          }
        }, _react2.default.createElement("i", { className: "icon-file-pdf", __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          }
        }), _react2.default.createElement("a", { href: "/generatechallan?rollNo=" + element.rollNo, __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          }
        }, "Generate Challan")))))));
      }))), _react2.default.createElement(_link2.default, { href: "/generatechallan?rollNo=printall", __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, _react2.default.createElement("button", { className: "btn btn-primary", __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, " Print All "))))))));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/sumair/MEAN STACK/My Work/sms/pages/finance.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/sumair/MEAN STACK/My Work/sms/pages/finance.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/finance")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 999:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(35);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(37);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _echartsForReact = __webpack_require__(678);

var _echartsForReact2 = _interopRequireDefault(_echartsForReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/sumair/MEAN STACK/My Work/sms/components/charts/monthlyAmount.js";


var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);

        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
    }

    (0, _createClass3.default)(_class, [{
        key: "getAmountOptions",
        value: function getAmountOptions() {
            var basic_pie_options = {

                // Add title
                title: {
                    text: 'Amount Overview',
                    subtext: 'Shows amount collection stats',
                    x: 'center'
                },

                // Add tooltip
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },

                // Add legend
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data: ['Collected', 'Remaining']
                },

                // Display toolbox
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    feature: {
                        mark: {
                            show: true,
                            title: {
                                mark: 'Markline switch',
                                markUndo: 'Undo markline',
                                markClear: 'Clear markline'
                            }
                        },
                        magicType: {
                            show: true,
                            title: {
                                pie: 'Switch to pies',
                                funnel: 'Switch to funnel'
                            },
                            type: ['pie', 'funnel'],
                            option: {
                                funnel: {
                                    x: '25%',
                                    y: '20%',
                                    width: '50%',
                                    height: '70%',
                                    funnelAlign: 'left',
                                    max: 1548
                                }
                            }
                        },
                        restore: {
                            show: true,
                            title: 'Restore'
                        },
                        saveAsImage: {
                            show: true,
                            title: 'Same as image',
                            lang: ['Save']
                        }
                    }
                },

                // Enable drag recalculate
                calculable: true,

                // Add series
                series: [{
                    name: 'PKR Amount',
                    type: 'pie',
                    radius: '70%',
                    center: ['50%', '57.5%'],
                    data: [{ value: 120000, name: 'Remaining' }, { value: 100000, name: 'Collected' }]
                }]
            };
            return basic_pie_options;
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(_echartsForReact2.default, {
                option: this.getAmountOptions(),
                style: { height: '350px', width: '100%' },
                className: "react_for_echarts", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                }
            });
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/sumair/MEAN STACK/My Work/sms/components/charts/monthlyAmount.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/sumair/MEAN STACK/My Work/sms/components/charts/monthlyAmount.js"); } } })();

/***/ })

},[1033]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9maW5hbmNlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jaGFydHMvbW9udGhseUNoYXJ0LmpzPzI2YTkzZWMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkLmpzPzI2YTkzZWMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaWRlYmFyLmpzPzI2YTkzZWMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ub3BNZW51LmpzPzI2YTkzZWMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZmluYW5jZS5qcz8yNmE5M2VjIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2hhcnRzL21vbnRobHlBbW91bnQuanM/MjZhOTNlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RFY2hhcnRzIGZyb20gXCJlY2hhcnRzLWZvci1yZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgZ2V0T3B0aW9ucygpIHtcbiAgICBjb25zdCBiYXNpY19waWVfb3B0aW9ucyA9IHtcblxuICAgICAgICAvLyBBZGQgdGl0bGVcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHRleHQ6ICdDaGFsbGFuIE92ZXJ2aWV3JyxcbiAgICAgICAgICAgIHN1YnRleHQ6ICdTaG93cyBDaGFsbGFuIHN0YXRzJyxcbiAgICAgICAgICAgIHg6ICdjZW50ZXInXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gQWRkIHRvb2x0aXBcbiAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgdHJpZ2dlcjogJ2l0ZW0nLFxuICAgICAgICAgICAgZm9ybWF0dGVyOiBcInthfSA8YnIvPntifToge2N9ICh7ZH0lKVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gQWRkIGxlZ2VuZFxuICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgIG9yaWVudDogJ3ZlcnRpY2FsJyxcbiAgICAgICAgICAgIHg6ICdsZWZ0JyxcbiAgICAgICAgICAgIGRhdGE6IFsnSXNzdWVkJywgJ05vdCBJc3N1ZWQnLCdQZW5kaW5nJ11cbiAgICAgICAgfSxcblxuICAgICAgICAvLyBEaXNwbGF5IHRvb2xib3hcbiAgICAgICAgdG9vbGJveDoge1xuICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgIG9yaWVudDogJ3ZlcnRpY2FsJyxcbiAgICAgICAgICAgIGZlYXR1cmU6IHtcbiAgICAgICAgICAgICAgICBtYXJrOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrOiAnTWFya2xpbmUgc3dpdGNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtVbmRvOiAnVW5kbyBtYXJrbGluZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrQ2xlYXI6ICdDbGVhciBtYXJrbGluZSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbWFnaWNUeXBlOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwaWU6ICdTd2l0Y2ggdG8gcGllcycsXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5uZWw6ICdTd2l0Y2ggdG8gZnVubmVsJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogWydwaWUnLCAnZnVubmVsJ10sXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZnVubmVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogJzI1JScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogJzIwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc1MCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzcwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVubmVsQWxpZ246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg6IDE1NDhcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcmVzdG9yZToge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1Jlc3RvcmUnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzYXZlQXNJbWFnZToge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1NhbWUgYXMgaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICBsYW5nOiBbJ1NhdmUnXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvLyBFbmFibGUgZHJhZyByZWNhbGN1bGF0ZVxuICAgICAgICBjYWxjdWxhYmxlOiB0cnVlLFxuXG4gICAgICAgIC8vIEFkZCBzZXJpZXNcbiAgICAgICAgc2VyaWVzOiBbe1xuICAgICAgICAgICAgbmFtZTogJ0NoYWxsYW5zJyxcbiAgICAgICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICAgICAgcmFkaXVzOiAnNzAlJyxcbiAgICAgICAgICAgIGNlbnRlcjogWyc1MCUnLCAnNTcuNSUnXSxcbiAgICAgICAgICAgIGRhdGE6IFtcbiAgICAgICAgICAgICAgICB7dmFsdWU6IDIwLCBuYW1lOiAnTm90IElzc3VlZCd9LFxuICAgICAgICAgICAgICAgIHt2YWx1ZTogMTMwLCBuYW1lOiAnSXNzdWVkJ30sXG4gICAgICAgICAgICAgICAge3ZhbHVlOiA0MCwgbmFtZTogJ1BlbmRpbmcnfVxuXG4gICAgICAgICAgICBdXG4gICAgICAgIH1dXG4gICAgfTtcbiAgICByZXR1cm4gYmFzaWNfcGllX29wdGlvbnM7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4oXG4gICAgICA8UmVhY3RFY2hhcnRzXG4gICAgICBvcHRpb249e3RoaXMuZ2V0T3B0aW9ucygpfVxuICAgICAgc3R5bGU9e3toZWlnaHQ6ICczNTBweCcsIHdpZHRoOiAnMTAwJSd9fVxuICAgICAgY2xhc3NOYW1lPSdyZWFjdF9mb3JfZWNoYXJ0cycgLz5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvY2hhcnRzL21vbnRobHlDaGFydC5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIHJlbmRlcigpe1xuICAgIHJldHVybihcbiAgICAgIDxIZWFkPlxuICAgICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiICAvPlxuICAgICAgICBcdDxtZXRhIGh0dHAtZXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XG4gICAgICAgIFx0PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgXHQ8dGl0bGU+SW50ZXJuYXRpb25hbCBJc2xhbWljIFVuaXZlcnNpdHkgSXNsYW1hYmFkIC0gTGF0aWZhYmFkIENhbXB1czwvdGl0bGU+XG5cbiAgICAgICAgXHQ8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo0MDAsMzAwLDEwMCw1MDAsNzAwLDkwMFwiIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiAvPlxuICAgICAgICBcdDxsaW5rIGhyZWY9XCJzdGF0aWMvYXNzZXRzL2Nzcy9pY29ucy9pY29tb29uL3N0eWxlcy5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgLz5cbiAgICAgICAgXHQ8bGluayBocmVmPVwic3RhdGljL2Fzc2V0cy9jc3MvYm9vdHN0cmFwLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiAvPlxuICAgICAgICBcdDxsaW5rIGhyZWY9XCJzdGF0aWMvYXNzZXRzL2Nzcy9jb3JlLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiAvPlxuICAgICAgICBcdDxsaW5rIGhyZWY9XCJzdGF0aWMvYXNzZXRzL2Nzcy9jb21wb25lbnRzLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiAvPlxuICAgICAgICBcdDxsaW5rIGhyZWY9XCJzdGF0aWMvYXNzZXRzL2Nzcy9jb2xvcnMuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIC8+XG5cbiAgICAgICAgXHQ8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJzdGF0aWMvYXNzZXRzL2pzL3BsdWdpbnMvbG9hZGVycy9wYWNlLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgICBcdDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cInN0YXRpYy9hc3NldHMvanMvY29yZS9saWJyYXJpZXMvanF1ZXJ5Lm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgICBcdDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cInN0YXRpYy9hc3NldHMvanMvY29yZS9saWJyYXJpZXMvYm9vdHN0cmFwLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgICBcdDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cInN0YXRpYy9hc3NldHMvanMvcGx1Z2lucy9sb2FkZXJzL2Jsb2NrdWkubWluLmpzXCI+PC9zY3JpcHQ+XG5cblx0XHRcdFx0XHQ8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJzdGF0aWMvYXNzZXRzL2pzL3BsdWdpbnMvdXBsb2FkZXJzL2ZpbGVpbnB1dC5taW4uanNcIj48L3NjcmlwdD5cblx0XHRcdFx0XHQ8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJzdGF0aWMvYXNzZXRzL2pzL3BsdWdpbnMvZm9ybXMvc2VsZWN0cy9zZWxlY3QyLm1pbi5qc1wiPjwvc2NyaXB0PlxuXG4gICAgICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwic3RhdGljL2Fzc2V0cy9qcy9jb3JlL2FwcC5qc1wiPjwvc2NyaXB0PlxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cInN0YXRpYy9hc3NldHMvanMvcGFnZXMvdXBsb2FkZXJfYm9vdHN0cmFwLmpzXCI+PC9zY3JpcHQ+XG5cdFx0XHRcdFx0PHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwic3RhdGljL2Fzc2V0cy9qcy9wYWdlcy9mb3JtX3NlbGVjdDIuanNcIj48L3NjcmlwdD5cbiAgICAgICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJzdGF0aWMvYXNzZXRzL2pzL3BsdWdpbnMvdWkvcmlwcGxlLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgPC9IZWFkPlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0geyB1c2VyUHJvZmlsZTp7cHJvZmlsZTp7fSB9IH1cblx0XHRcblx0XHQvL0JpbmQgTWV0aG9kc1xuXHRcdHRoaXMuZ2V0UHJvZmlsZUluZm8gPSB0aGlzLmdldFByb2ZpbGVJbmZvLmJpbmQodGhpcyk7XG5cdH1cblxuXHRnZXRQcm9maWxlSW5mbygpe1xuXHRcdGF4aW9zLmdldCgnL2dldHByb2ZpbGUnKS50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7dXNlclByb2ZpbGU6IHJlc3BvbnNlLmRhdGF9KVxuXHRcdH0pLmNhdGNoKChlcnIpID0+IHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJUaGUgZXJyb3I6IFwiICsgZXJyKTtcblx0XHR9KTtcblx0fVxuXHRcblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHR0aGlzLmdldFByb2ZpbGVJbmZvKCk7XG5cdH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXIgc2lkZWJhci1tYWluIHNpZGViYXItZGVmYXVsdFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItY29udGVudFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci11c2VyLW1hdGVyaWFsXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5LWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXVzZXItbWF0ZXJpYWwtY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHRcdCAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJsZWdpdFJpcHBsZVwiPjxpbWcgc3JjPXt0aGlzLnN0YXRlLnVzZXJQcm9maWxlLnByb2ZpbGUucGljdHVyZX0gY2xhc3NOYW1lPVwiaW1nLWNpcmNsZSBpbWctcmVzcG9uc2l2ZVwiIGFsdD1cIlwiIC8+PC9hPiAgICAgIFxuXHRcdFx0XHRcdFx0XHRcdCAgICAgPGg2Pnt0aGlzLnN0YXRlLnVzZXJQcm9maWxlLnByb2ZpbGUubmFtZX08L2g2PiAgICAgXG5cdFx0XHRcdFx0XHRcdFx0ICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNpemUtc21hbGxcIj57dGhpcy5zdGF0ZS51c2VyUHJvZmlsZS5yb2xlfTwvc3Bhbj4gIFxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItdXNlci1tYXRlcmlhbC1tZW51XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiN1c2VyLW5hdlwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBjbGFzc05hbWU9XCJsZWdpdFJpcHBsZVwiPjxzcGFuPk15IGFjY291bnQ8L3NwYW4+IDxpIGNsYXNzTmFtZT1cImNhcmV0XCI+PC9pPjwvYT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLXdyYXBwZXIgY29sbGFwc2VcIiBpZD1cInVzZXItbmF2XCI+XG5cdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGxpPjxMaW5rIGhyZWY9Jy9wcm9maWxlJz48YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImxlZ2l0UmlwcGxlXCI+PGkgY2xhc3NOYW1lPVwiaWNvbi11c2VyLXBsdXNcIj48L2k+IDxzcGFuPk15IHByb2ZpbGU8L3NwYW4+PC9hPjwvTGluaz48L2xpPlxuXHRcdFx0XHRcdFx0XHRcdDxsaT48YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImxlZ2l0UmlwcGxlXCI+PGkgY2xhc3NOYW1lPVwiaWNvbi1jb2c1XCI+PC9pPiA8c3Bhbj5BY2NvdW50IHNldHRpbmdzPC9zcGFuPjwvYT48L2xpPlxuXHRcdFx0XHRcdFx0XHRcdDxsaT48TGluayBocmVmPVwiL2xvZ291dFwiPjxhIGNsYXNzTmFtZT1cImxlZ2l0UmlwcGxlXCI+PGkgY2xhc3NOYW1lPVwiaWNvbi1zd2l0Y2gyXCI+PC9pPiA8c3Bhbj5Mb2dvdXQ8L3NwYW4+PC9hPjwvTGluaz48L2xpPlxuXHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItY2F0ZWdvcnkgc2lkZWJhci1jYXRlZ29yeS12aXNpYmxlXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5LWNvbnRlbnQgbm8tcGFkZGluZ1wiPlxuXHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwibmF2aWdhdGlvbiBuYXZpZ2F0aW9uLW1haW4gbmF2aWdhdGlvbi1hY2NvcmRpb25cIj5cblxuXHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWhlYWRlclwiPjxzcGFuPk1haW48L3NwYW4+IDxpIGNsYXNzTmFtZT1cImljb24tbWVudVwiIHRpdGxlPVwiXCIgZGF0YS1vcmlnaW5hbC10aXRsZT1cIk1haW4gcGFnZXNcIj48L2k+PC9saT5cblx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmRhc2hib2FyZEFjdGl2ZX0+PExpbmsgaHJlZj0nLyc+PGEgY2xhc3NOYW1lPVwibGVnaXRSaXBwbGVcIj48aSBjbGFzc05hbWU9XCJpY29uLWhvbWU0XCI+PC9pPiA8c3Bhbj5EYXNoYm9hcmQ8L3NwYW4+PC9hPjwvTGluaz48L2xpPlxuXHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9e3RoaXMucHJvcHMuZmluYW5jZUFjdGl2ZX0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvZmluYW5jZSc+PGEgY2xhc3NOYW1lPVwiaGFzLXVsIGxlZ2l0UmlwcGxlXCI+PGkgY2xhc3NOYW1lPVwiaWNvbi1zdGF0cy1ncm93dGhcIj48L2k+IDxzcGFuPkZpbmFuY2U8L3NwYW4+PC9hPjwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJoaWRkZW4tdWxcIiBzdHlsZT17e2Rpc3BsYXk6IHRoaXMucHJvcHMuY2hhbGxhblNob3d9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jaGFsbGFuQWN0aXZlfT48TGluayBocmVmPScvZmluYW5jZSc+PGEgY2xhc3NOYW1lPVwibGVnaXRSaXBwbGVcIj48aSBjbGFzc05hbWU9XCJpY29uLXN0YWNrXCI+PC9pPkNoYWxsYW5zPC9hPjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmFkZFN0dWRlbnRBY3RpdmV9PjxMaW5rIGhyZWY9Jy9hZGRjaGFsbGFuJz48YSBjbGFzc05hbWU9XCJsZWdpdFJpcHBsZVwiPjxpIGNsYXNzTmFtZT1cImljb24tcGx1c1wiPjwvaT5BZGQgQ2hhbGxhbjwvYT48L0xpbms+PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmFkbWlzc2lvbnNBY3RpdmV9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJoYXMtdWwgbGVnaXRSaXBwbGVcIj48aSBjbGFzc05hbWU9XCJpY29uLXJlYWRpbmdcIj48L2k+IDxzcGFuPkFkbWlzc2lvbnM8L3NwYW4+PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImhpZGRlbi11bFwiIHN0eWxlPXt7ZGlzcGxheTogXCJub25lXCJ9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qIDxsaT48TGluayBocmVmPScvZmluYW5jZV9jaGFsbGFuJz48YSBjbGFzc05hbWU9XCJsZWdpdFJpcHBsZVwiPjxpIGNsYXNzTmFtZT1cImljb24tc3RhY2tcIj48L2k+Q2hhbGxhbnM8L2E+PC9MaW5rPjwvbGk+ICovfVxuXHRcdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3RoaXMucHJvcHMuYWNhZGVtaWNzQWN0aXZlfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiaGFzLXVsIGxlZ2l0UmlwcGxlXCI+PGkgY2xhc3NOYW1lPVwiaWNvbi1ncmFkdWF0aW9uXCI+PC9pPiA8c3Bhbj5BY2FkZW1pY3M8L3NwYW4+PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImhpZGRlbi11bFwiIHN0eWxlPXt7ZGlzcGxheTogXCJub25lXCJ9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qIDxsaT48TGluayBocmVmPScvZmluYW5jZV9jaGFsbGFuJz48YSBjbGFzc05hbWU9XCJsZWdpdFJpcHBsZVwiPjxpIGNsYXNzTmFtZT1cImljb24tc3RhY2tcIj48L2k+Q2hhbGxhbnM8L2E+PC9MaW5rPjwvbGk+ICovfVxuXHRcdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3RoaXMucHJvcHMuaGVhbHRoQWN0aXZlfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiaGFzLXVsIGxlZ2l0UmlwcGxlXCI+PGkgY2xhc3NOYW1lPVwiaWNvbi1oZWFydDVcIj48L2k+IDxzcGFuPkhlYWx0aDwvc3Bhbj48L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiaGlkZGVuLXVsXCIgc3R5bGU9e3tkaXNwbGF5OiBcIm5vbmVcIn19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7LyogPGxpPjxMaW5rIGhyZWY9Jy9maW5hbmNlX2NoYWxsYW4nPjxhIGNsYXNzTmFtZT1cImxlZ2l0UmlwcGxlXCI+PGkgY2xhc3NOYW1lPVwiaWNvbi1zdGFja1wiPjwvaT5DaGFsbGFuczwvYT48L0xpbms+PC9saT4gKi99XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvU2lkZWJhci5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHt1c2VyUHJvZmlsZTp7cHJvZmlsZTp7fSB9LHRpbWU6JycgfVxuXHRcdFxuXHRcdC8vQmluZCBNZXRob2RzXG5cdFx0dGhpcy5nZXRQcm9maWxlSW5mbyA9IHRoaXMuZ2V0UHJvZmlsZUluZm8uYmluZCh0aGlzKTtcblx0XHR0aGlzLmdldEdyZWV0aW5nID0gdGhpcy5nZXRHcmVldGluZy5iaW5kKHRoaXMpO1xuXHR9XG5cblx0Z2V0UHJvZmlsZUluZm8oKXtcblx0XHRheGlvcy5nZXQoJy9nZXRwcm9maWxlJykudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe3VzZXJQcm9maWxlOiByZXNwb25zZS5kYXRhfSlcblx0XHR9KS5jYXRjaCgoZXJyKSA9PiB7XG5cdFx0XHRjb25zb2xlLmVycm9yKFwiVGhlIGVycm9yOiBcIixlcnIpO1xuXHRcdH0pO1xuXHR9XG5cblx0Z2V0R3JlZXRpbmcoKXtcblx0XHR2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXHRcdHZhciBjdXJIciA9IHRvZGF5LmdldEhvdXJzKClcblx0XHRpZiAoY3VySHIgPCAxMikge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7dGltZTogJ01vcm5pbmcnfSlcblx0XHR9IGVsc2UgaWYgKGN1ckhyIDwgMTgpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe3RpbWU6ICdBZnRlcm5vb24nfSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7dGltZTogJ0V2ZW5pbmcnfSlcblx0XHR9XG5cdH1cblx0XG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdFx0dGhpcy5nZXRQcm9maWxlSW5mbygpO1xuXHRcdHRoaXMuZ2V0R3JlZXRpbmcoKTtcblx0fVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybihcbiAgICBcdDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1pbnZlcnNlIGJnLWluZGlnb1wiPlxuICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1oZWFkZXJcIj5cbiAgICBcdFx0XHQ8TGluayBocmVmPVwiL1wiPjxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPjxpbWcgc3JjPVwic3RhdGljL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmdcIiBhbHQ9XCJcIiAvPjwvYT48L0xpbms+XG5cbiAgICBcdFx0XHQ8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXYgdmlzaWJsZS14cy1ibG9ja1wiPlxuICAgIFx0XHRcdFx0PGxpPjxhIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXItbW9iaWxlXCI+PGkgY2xhc3NOYW1lPVwiaWNvbi10cmVlNVwiPjwvaT48L2E+PC9saT5cbiAgICBcdFx0XHRcdDxsaT48YSBjbGFzc05hbWU9XCJzaWRlYmFyLW1vYmlsZS1tYWluLXRvZ2dsZVwiPjxpIGNsYXNzTmFtZT1cImljb24tcGFyYWdyYXBoLWp1c3RpZnkzXCI+PC9pPjwvYT48L2xpPlxuICAgIFx0XHRcdDwvdWw+XG4gICAgXHRcdDwvZGl2PlxuXG4gICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJ4LW1vYmlsZVwiPlxuICAgIFx0XHRcdDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2YmFyLW5hdlwiPlxuICAgIFx0XHRcdFx0PGxpPjxhIGNsYXNzTmFtZT1cInNpZGViYXItY29udHJvbCBzaWRlYmFyLW1haW4tdG9nZ2xlIGhpZGRlbi14c1wiPjxpIGNsYXNzTmFtZT1cImljb24tcGFyYWdyYXBoLWp1c3RpZnkzXCI+PC9pPjwvYT48L2xpPlxuICAgIFx0XHRcdDwvdWw+XG5cbiAgICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1yaWdodFwiPlxuICAgIFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibmF2YmFyLXRleHRcIj57dGhpcy5zdGF0ZS50aW1lfSwge3RoaXMuc3RhdGUudXNlclByb2ZpbGUudXNlcm5hbWV9ITwvcD5cbiAgICBcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm5hdmJhci10ZXh0XCI+PHNwYW4gY2xhc3NOYW1lPVwibGFiZWwgYmctc3VjY2Vzcy00MDBcIj5PbmxpbmU8L3NwYW4+PC9wPlxuICAgIFx0XHRcdDwvZGl2PlxuICAgIFx0XHQ8L2Rpdj5cbiAgICBcdDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Ub3BNZW51LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9TaWRlYmFyXCI7XG5pbXBvcnQgVG9wTWVudSBmcm9tIFwiLi4vY29tcG9uZW50cy9Ub3BNZW51XCI7XG5pbXBvcnQgTW9udGhseUNoYWxsYW5DaGFydCBmcm9tIFwiLi4vY29tcG9uZW50cy9jaGFydHMvbW9udGhseUNoYXJ0XCI7XG5pbXBvcnQgTW9udGhseUFtb3VudENoYXJ0IGZyb20gXCIuLi9jb21wb25lbnRzL2NoYXJ0cy9tb250aGx5QW1vdW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7ZGF0YTogW10sIGJQcmludDogXCJ0cnVlXCJ9XG5cbiAgICB0aGlzLmdldEFsbFN0dWRlbnRzID0gdGhpcy5nZXRBbGxTdHVkZW50cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hlY2tNdWx0aXBsZUNoYWxsYW4gPSB0aGlzLmNoZWNrTXVsdGlwbGVDaGFsbGFuLmJpbmQodGhpcyk7XG4gIH1cblxuICBnZXRBbGxTdHVkZW50cygpe1xuICAgIGF4aW9zLmdldCgnL2FsbHN0dWRlbnRzJykudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6cmVzcG9uc2UuZGF0YX0pXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmRhdGEpO1xuICAgIH0pXG4gIH1cblxuICBjaGVja011bHRpcGxlQ2hhbGxhbihlKXtcbiAgICBpZihlLnRhcmdldC52YWx1ZSA9PT0gXCJvblwiKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2JQcmludDpcImZhbHNlXCJ9KVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgdGhpcy5nZXRBbGxTdHVkZW50cygpO1xuICB9XG4gIHJlbmRlcigpe1xuICAgIHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkIC8+XG4gICAgICAgIDxUb3BNZW51IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtY29udGVudFwiPlxuICAgICAgICAgICAgPFNpZGViYXIgZmluYW5jZUFjdGl2ZT1cImFjdGl2ZVwiIGNoYWxsYW5TaG93PVwiYmxvY2tcIiBjaGFsbGFuQWN0aXZlPVwiYWN0aXZlXCIgLz5cblxuICAgICAgICAgICAgey8qIENPTlRFTlQgV1JBUFBFUiBTVEFSVCAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC13cmFwcGVyXCI+XG5cbiAgICAgICAgICAgICAgey8qIENPTlRFTlQgU1RBUlRTICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cblxuICAgICAgICAgICAgICAgIHsvKiBST1cgU1RBUlRTICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG5cbiAgICAgIFx0XHRcdFx0XHRcdFx0ey8qIDwhLS0gQmFzaWMgcGllIGNoYXJ0IC0tPiAqL31cbiAgICAgIFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFuZWwgcGFuZWwtZmxhdFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TW9udGhseUNoYWxsYW5DaGFydCAvPlxuICAgICAgXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgIFx0XHRcdFx0XHRcdFx0PC9kaXY+XG4gICAgICBcdFx0XHRcdFx0XHRcdHsvKiA8IS0tIC9iYWNpcyBwaWUgY2hhcnQgLS0+ICovfVxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cblxuICAgICAgICBcdFx0XHRcdFx0XHRcdHsvKiA8IS0tIEJhc2ljIHBpZSBjaGFydCAtLT4gKi99XG4gICAgICAgIFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFuZWwgcGFuZWwtZmxhdFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vbnRobHlBbW91bnRDaGFydCAvPlxuICAgICAgICBcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIFx0XHRcdFx0XHRcdFx0PC9kaXY+XG4gICAgICAgIFx0XHRcdFx0XHRcdFx0ey8qIDwhLS0gL2JhY2lzIHBpZSBjaGFydCAtLT4gKi99XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7LyogUk9XIEVORFMgKi99XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKiA8IS0tIEJhc2ljIGRhdGF0YWJsZSAtLT4gKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwgcGFuZWwtZmxhdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwicGFuZWwtdGl0bGVcIj5TdHVkZW50cyBDaGFsbGFuIEluZm88L2g1PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgZGF0YXRhYmxlLWJhc2ljXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG9uQ2xpY2s9e3RoaXMuY2hlY2tNdWx0aXBsZUNoYWxsYW59IC8+U2VsZWN0PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJvbGwgTm88L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Rmlyc3QgTmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5MYXN0IE5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RmF0aGVycyBOYW1lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPklzc3VlIERhdGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RmVlIE1vbnRoPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkR1ZSBEYXRlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlN0YXR1czwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkFjdGlvbnM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGEubWFwKChlbGVtZW50KT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17ZWxlbWVudC5faWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17J2NoZWNrYm94JyArIGVsZW1lbnQuX2lkfT48aW5wdXQgdHlwZT0nY2hlY2tib3gnIG9uQ2xpY2s9e3RoaXMuY2hlY2tNdWx0aXBsZUNoYWxsYW59IC8+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9eydyb2xsbm8nICsgZWxlbWVudC5faWR9PntlbGVtZW50LnJvbGxOb308L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17J2ZpcnN0bmFtZScgKyBlbGVtZW50Ll9pZH0+e2VsZW1lbnQuZm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9eydsYXN0bmFtZScgKyBlbGVtZW50Ll9pZH0+e2VsZW1lbnQubG5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9eydndWFyZCcgKyBlbGVtZW50Ll9pZH0+e2VsZW1lbnQuZ3VhcmRpYW59PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9eydJc3N1ZScgKyBlbGVtZW50Ll9pZH0+e2VsZW1lbnQuaXNzdWVEYXRlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXsnTW9udGhGZWUnICsgZWxlbWVudC5faWR9PntlbGVtZW50LmZlZU1vbnRofTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXsnRGF0ZScgKyBlbGVtZW50Ll9pZH0+e2VsZW1lbnQuZHVlRGF0ZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17J3N0YXR1cycgKyBlbGVtZW50Ll9pZH0+PHNwYW4gY2xhc3NOYW1lPVwibGFiZWwgbGFiZWwtc3VjY2Vzc1wiPlBhaWQ8L3NwYW4+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9eyd0ZXh0JyArIGVsZW1lbnQuX2lkfSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwga2V5PXsnaWNvbmxpc3QnICsgZWxlbWVudC5faWR9IGNsYXNzTmFtZT1cImljb25zLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXsnZHJvcGRvd24nICsgZWxlbWVudC5faWR9IGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBrZXk9eydkcm9wZG93bnRvZ2dsZScgKyBlbGVtZW50Ll9pZH0gaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJkcm9wZG93bi10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGtleT17J2ljb25tZW51OScgKyBlbGVtZW50Ll9pZH0gY2xhc3NOYW1lPVwiaWNvbi1tZW51OVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBrZXk9eydkcm9wZG93bm1lbnUnICsgZWxlbWVudC5faWR9IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGkgY2xhc3NOYW1lPSdpY29uLWZpbGUtcGRmJz48L2k+PGEgaHJlZj17XCIvZ2VuZXJhdGVjaGFsbGFuP3JvbGxObz1cIitlbGVtZW50LnJvbGxOb30+R2VuZXJhdGUgQ2hhbGxhbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2dlbmVyYXRlY2hhbGxhbj9yb2xsTm89cHJpbnRhbGxcIj48YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1wcmltYXJ5Jz4gUHJpbnQgQWxsIDwvYnV0dG9uPjwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKiA8IS0tIC9iYXNpYyBkYXRhdGFibGUgLS0+ICovfVxuXG4gICAgICAgICAgICAgIHsvKiBDT05URU5UIEVORFMgKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiBDT05URU5UIFdSQVBQRVIgRU5EUyAqL31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2ZpbmFuY2UuanM/ZW50cnkiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RFY2hhcnRzIGZyb20gXCJlY2hhcnRzLWZvci1yZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgZ2V0QW1vdW50T3B0aW9ucygpIHtcbiAgICBjb25zdCBiYXNpY19waWVfb3B0aW9ucyA9IHtcblxuICAgICAgICAvLyBBZGQgdGl0bGVcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHRleHQ6ICdBbW91bnQgT3ZlcnZpZXcnLFxuICAgICAgICAgICAgc3VidGV4dDogJ1Nob3dzIGFtb3VudCBjb2xsZWN0aW9uIHN0YXRzJyxcbiAgICAgICAgICAgIHg6ICdjZW50ZXInXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gQWRkIHRvb2x0aXBcbiAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgdHJpZ2dlcjogJ2l0ZW0nLFxuICAgICAgICAgICAgZm9ybWF0dGVyOiBcInthfSA8YnIvPntifToge2N9ICh7ZH0lKVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gQWRkIGxlZ2VuZFxuICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgIG9yaWVudDogJ3ZlcnRpY2FsJyxcbiAgICAgICAgICAgIHg6ICdsZWZ0JyxcbiAgICAgICAgICAgIGRhdGE6IFsnQ29sbGVjdGVkJywgJ1JlbWFpbmluZyddXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gRGlzcGxheSB0b29sYm94XG4gICAgICAgIHRvb2xib3g6IHtcbiAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICBvcmllbnQ6ICd2ZXJ0aWNhbCcsXG4gICAgICAgICAgICBmZWF0dXJlOiB7XG4gICAgICAgICAgICAgICAgbWFyazoge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyazogJ01hcmtsaW5lIHN3aXRjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrVW5kbzogJ1VuZG8gbWFya2xpbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFya0NsZWFyOiAnQ2xlYXIgbWFya2xpbmUnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1hZ2ljVHlwZToge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGllOiAnU3dpdGNoIHRvIHBpZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVubmVsOiAnU3dpdGNoIHRvIGZ1bm5lbCcsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFsncGllJywgJ2Z1bm5lbCddLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bm5lbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6ICcyNSUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6ICcyMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNTAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc3MCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bm5lbEFsaWduOiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiAxNTQ4XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJlc3RvcmU6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdSZXN0b3JlJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2F2ZUFzSW1hZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTYW1lIGFzIGltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgbGFuZzogWydTYXZlJ11cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gRW5hYmxlIGRyYWcgcmVjYWxjdWxhdGVcbiAgICAgICAgY2FsY3VsYWJsZTogdHJ1ZSxcblxuICAgICAgICAvLyBBZGQgc2VyaWVzXG4gICAgICAgIHNlcmllczogW3tcbiAgICAgICAgICAgIG5hbWU6ICdQS1IgQW1vdW50JyxcbiAgICAgICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICAgICAgcmFkaXVzOiAnNzAlJyxcbiAgICAgICAgICAgIGNlbnRlcjogWyc1MCUnLCAnNTcuNSUnXSxcbiAgICAgICAgICAgIGRhdGE6IFtcbiAgICAgICAgICAgICAgICB7dmFsdWU6IDEyMDAwMCwgbmFtZTogJ1JlbWFpbmluZyd9LFxuICAgICAgICAgICAgICAgIHt2YWx1ZTogMTAwMDAwLCBuYW1lOiAnQ29sbGVjdGVkJ31cblxuICAgICAgICAgICAgXVxuICAgICAgICB9XVxuICAgIH07XG4gICAgcmV0dXJuIGJhc2ljX3BpZV9vcHRpb25zO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuKFxuICAgICAgPFJlYWN0RWNoYXJ0c1xuICAgICAgb3B0aW9uPXt0aGlzLmdldEFtb3VudE9wdGlvbnMoKX1cbiAgICAgIHN0eWxlPXt7aGVpZ2h0OiAnMzUwcHgnLCB3aWR0aDogJzEwMCUnfX1cbiAgICAgIGNsYXNzTmFtZT0ncmVhY3RfZm9yX2VjaGFydHMnIC8+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2NoYXJ0cy9tb250aGx5QW1vdW50LmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBQUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFHQTtBQUxBO0FBQ0E7QUFLQTs7QUFFQTtBQUdBO0FBSkE7QUFDQTtBQUlBOztBQUVBO0FBQ0E7QUFBQTtBQUZBO0FBQ0E7QUFLQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBR0E7QUFMQTtBQUZBOztBQVNBOztBQUVBO0FBRUE7QUFIQTtBQUdBOzs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFUQTtBQURBO0FBUEE7O0FBbUJBO0FBRUE7QUFIQTs7QUFLQTtBQUNBO0FBQUE7QUFGQTtBQS9CQTtBQUhBO0FBQ0E7QUF5Q0E7QUFFQTtBQUNBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUpBO0FBcEVBO0FBaUZBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFMQTtBQUNBOzs7OztBQTFGQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBR0E7QUFIQTs7Ozs7O0FBNUJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBSUE7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBR0E7QUFFQTs7OztBQUdBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBSkE7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBSkE7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFKQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFVQTtBQVZBOzs7Ozs7QUEzRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFJQTtBQUNBOzs7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQURBO0FBR0E7QUFFQTs7OztBQUdBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBSkE7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFIQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7Ozs7O0FBM0RBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQ0E7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUdBO0FBSEE7QUFHQTtBQUFBO0FBR0E7QUFIQTtBQUdBO0FBQUE7QUFHQTtBQUhBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBR0E7QUFIQTtBQUdBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQU1BO0FBTkE7QUFBQTtBQU1BO0FBR0E7QUFIQTtBQUdBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQVVBO0FBVkE7QUFBQTtBQVVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlBOzs7OztBQXRJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBQUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFHQTtBQUxBO0FBQ0E7QUFLQTs7QUFFQTtBQUdBO0FBSkE7QUFDQTtBQUlBOztBQUVBO0FBQ0E7QUFBQTtBQUZBO0FBQ0E7QUFLQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBR0E7QUFMQTtBQUZBOztBQVNBOztBQUVBO0FBRUE7QUFIQTtBQUdBOzs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFUQTtBQURBO0FBUEE7O0FBbUJBO0FBRUE7QUFIQTs7QUFLQTtBQUNBO0FBQUE7QUFGQTtBQS9CQTtBQUhBO0FBQ0E7QUF5Q0E7QUFFQTtBQUNBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUpBO0FBcEVBO0FBZ0ZBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFMQTtBQUNBOzs7OztBQXpGQTtBQUNBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        