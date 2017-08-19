"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/sumair/Desktop/MEAN STACK/My Work/sms-master/components/Sidebar.js";


var _class = function (_React$Component) {
	(0, _inherits3.default)(_class, _React$Component);

	function _class(props) {
		(0, _classCallCheck3.default)(this, _class);

		var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

		_this.state = { userProfile: { profile: {} } };

		//Bind Methods
		_this.getProfileInfo = _this.getProfileInfo.bind(_this);
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