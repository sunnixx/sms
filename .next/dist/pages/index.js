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

var _Head = require("../components/Head");

var _Head2 = _interopRequireDefault(_Head);

var _TopMenu = require("../components/TopMenu");

var _TopMenu2 = _interopRequireDefault(_TopMenu);

var _Sidebar = require("../components/Sidebar");

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _link = require("next/dist/lib/link.js");

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
      return _react2.default.createElement("div", null, _react2.default.createElement(_Head2.default, null), _react2.default.createElement(_TopMenu2.default, null), _react2.default.createElement("div", { className: "page-container" }, _react2.default.createElement("div", { className: "page-content" }, _react2.default.createElement(_Sidebar2.default, { dashboardActive: "active" }), _react2.default.createElement("div", { className: "content-wrapper" }, _react2.default.createElement("div", { className: "content" }, _react2.default.createElement("div", { className: "row" }, _react2.default.createElement("div", { className: "col-md-4" }, _react2.default.createElement("div", { className: "panel panel-info" }, _react2.default.createElement("div", { className: "panel-heading" }, _react2.default.createElement("h6", { className: "panel-title" }, "FINANCE")), _react2.default.createElement(_link2.default, { href: "/finance" }, _react2.default.createElement("a", null, _react2.default.createElement("div", { className: "panel-body panel-body-dashboard", style: { display: "block" } }, _react2.default.createElement("img", { src: "static/assets/images/icons/finance.png", className: "center-block img-responsive", style: { height: "150px" } })))))), _react2.default.createElement("div", { className: "col-md-4" }, _react2.default.createElement("div", { className: "panel panel-info" }, _react2.default.createElement("div", { className: "panel-heading" }, _react2.default.createElement("h6", { className: "panel-title" }, "ADMISSIONS")), _react2.default.createElement(_link2.default, { href: "#" }, _react2.default.createElement("a", null, _react2.default.createElement("div", { className: "panel-body panel-body-dashboard", style: { display: "block" } }, _react2.default.createElement("img", { src: "static/assets/images/icons/admissions.png", className: "center-block img-responsive", style: { height: "150px" } })))))), _react2.default.createElement("div", { className: "col-md-4" }, _react2.default.createElement("div", { className: "panel panel-info" }, _react2.default.createElement("div", { className: "panel-heading" }, _react2.default.createElement("h6", { className: "panel-title" }, "ACADEMICS")), _react2.default.createElement(_link2.default, { href: "#" }, _react2.default.createElement("a", null, _react2.default.createElement("div", { className: "panel-body panel-body-dashboard", style: { display: "block" } }, _react2.default.createElement("img", { src: "static/assets/images/icons/academics.png", className: "center-block img-responsive", style: { height: "150px" } }))))))), _react2.default.createElement("div", { className: "row" }, _react2.default.createElement("div", { className: "col-md-4" }, _react2.default.createElement("div", { className: "panel panel-info" }, _react2.default.createElement("div", { className: "panel-heading" }, _react2.default.createElement("h6", { className: "panel-title" }, "HEALTH")), _react2.default.createElement(_link2.default, { href: "#" }, _react2.default.createElement("a", null, _react2.default.createElement("div", { className: "panel-body panel-body-dashboard", style: { display: "block" } }, _react2.default.createElement("img", { src: "static/assets/images/icons/health.png", className: "center-block img-responsive", style: { height: "150px" } }))))))))))));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;