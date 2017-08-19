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

var _jsxFileName = "/home/sumair/Desktop/MEAN STACK/My Work/sms-master/components/TopMenu.js";


var _class = function (_React$Component) {
	(0, _inherits3.default)(_class, _React$Component);

	function _class(props) {
		(0, _classCallCheck3.default)(this, _class);

		var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

		_this.state = { userProfile: { profile: {} }, time: '' };

		//Bind Methods
		_this.getProfileInfo = _this.getProfileInfo.bind(_this);
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