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

var _link = require("next\\dist\\lib\\link.js");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
	(0, _inherits3.default)(_class, _React$Component);

	function _class() {
		(0, _classCallCheck3.default)(this, _class);

		return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
	}

	(0, _createClass3.default)(_class, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement("div", { className: "sidebar sidebar-main sidebar-default" }, _react2.default.createElement("div", { className: "sidebar-content" }, _react2.default.createElement("div", { className: "sidebar-user-material" }, _react2.default.createElement("div", { className: "category-content" }, _react2.default.createElement("div", { className: "sidebar-user-material-content" }, _react2.default.createElement("a", { href: "#", className: "legitRipple" }, _react2.default.createElement("img", { src: "static/assets/images/profile.jpg", className: "img-circle img-responsive", alt: "" })), _react2.default.createElement("h6", null, "Mr. Usama Abbasi"), _react2.default.createElement("span", { className: "text-size-small" }, "Vice Principal, IIUISL")), _react2.default.createElement("div", { className: "sidebar-user-material-menu" }, _react2.default.createElement("a", { href: "#user-nav", "data-toggle": "collapse", className: "legitRipple" }, _react2.default.createElement("span", null, "My account"), " ", _react2.default.createElement("i", { className: "caret" })))), _react2.default.createElement("div", { className: "navigation-wrapper collapse", id: "user-nav" }, _react2.default.createElement("ul", { className: "navigation" }, _react2.default.createElement("li", null, _react2.default.createElement("a", { href: "#", className: "legitRipple" }, _react2.default.createElement("i", { className: "icon-user-plus" }), " ", _react2.default.createElement("span", null, "My profile"))), _react2.default.createElement("li", null, _react2.default.createElement("a", { href: "#", className: "legitRipple" }, _react2.default.createElement("i", { className: "icon-cog5" }), " ", _react2.default.createElement("span", null, "Account settings"))), _react2.default.createElement("li", null, _react2.default.createElement(_link2.default, { href: "/logout" }, _react2.default.createElement("a", { className: "legitRipple" }, _react2.default.createElement("i", { className: "icon-switch2" }), " ", _react2.default.createElement("span", null, "Logout"))))))), _react2.default.createElement("div", { className: "sidebar-category sidebar-category-visible" }, _react2.default.createElement("div", { className: "category-content no-padding" }, _react2.default.createElement("ul", { className: "navigation navigation-main navigation-accordion" }, _react2.default.createElement("li", { className: "navigation-header" }, _react2.default.createElement("span", null, "Main"), " ", _react2.default.createElement("i", { className: "icon-menu", title: "", "data-original-title": "Main pages" })), _react2.default.createElement("li", { className: this.props.dashboardActive }, _react2.default.createElement(_link2.default, { href: "/" }, _react2.default.createElement("a", { className: "legitRipple" }, _react2.default.createElement("i", { className: "icon-home4" }), " ", _react2.default.createElement("span", null, "Dashboard")))), _react2.default.createElement("li", { className: this.props.financeActive }, _react2.default.createElement(_link2.default, { href: "/finance" }, _react2.default.createElement("a", { className: "has-ul legitRipple" }, _react2.default.createElement("i", { className: "icon-stats-growth" }), " ", _react2.default.createElement("span", null, "Finance"))), _react2.default.createElement("ul", { className: "hidden-ul", style: { display: this.props.challanShow } }, _react2.default.createElement("li", { className: this.props.challanActive }, _react2.default.createElement(_link2.default, { href: "/finance" }, _react2.default.createElement("a", { className: "legitRipple" }, _react2.default.createElement("i", { className: "icon-stack" }), "Challans"))), _react2.default.createElement("li", { className: this.props.addStudentActive }, _react2.default.createElement(_link2.default, { href: "/addchallan" }, _react2.default.createElement("a", { className: "legitRipple" }, _react2.default.createElement("i", { className: "icon-plus" }), "Add Challan"))))), _react2.default.createElement("li", { className: this.props.admissionsActive }, _react2.default.createElement("a", { href: "#", className: "has-ul legitRipple" }, _react2.default.createElement("i", { className: "icon-reading" }), " ", _react2.default.createElement("span", null, "Admissions")), _react2.default.createElement("ul", { className: "hidden-ul", style: { display: "none" } })), _react2.default.createElement("li", { className: this.props.academicsActive }, _react2.default.createElement("a", { href: "#", className: "has-ul legitRipple" }, _react2.default.createElement("i", { className: "icon-graduation" }), " ", _react2.default.createElement("span", null, "Academics")), _react2.default.createElement("ul", { className: "hidden-ul", style: { display: "none" } })), _react2.default.createElement("li", { className: this.props.healthActive }, _react2.default.createElement("a", { href: "#", className: "has-ul legitRipple" }, _react2.default.createElement("i", { className: "icon-heart5" }), " ", _react2.default.createElement("span", null, "Health")), _react2.default.createElement("ul", { className: "hidden-ul", style: { display: "none" } })))))));
		}
	}]);

	return _class;
}(_react2.default.Component);

exports.default = _class;