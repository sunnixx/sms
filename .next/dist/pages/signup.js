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
                  return _react2.default.createElement("div", { className: "login-container" }, _react2.default.createElement(_Head2.default, null), _react2.default.createElement("div", { className: "page-container" }, _react2.default.createElement("div", { className: "page-content" }, _react2.default.createElement("div", { className: "content-wrapper" }, _react2.default.createElement("div", { className: "content" }, _react2.default.createElement("form", { action: "/signup", method: "post", encType: "multipart/form-data" }, _react2.default.createElement("div", { className: "panel panel-body login-form" }, _react2.default.createElement("div", { className: "text-center" }, _react2.default.createElement("div", { className: "icon-object border-slate-300 text-slate-300" }, _react2.default.createElement("img", { width: "100", height: "80", src: "static/assets/images/logo-1.jpg" })), _react2.default.createElement("h5", { className: "content-group" }, "Signup for a new account ", _react2.default.createElement("small", { className: "display-block" }, "Enter your Email and Password below"))), _react2.default.createElement("div", { className: "form-group has-feedback has-feedback-left" }, _react2.default.createElement("input", { type: "text", className: "form-control", name: "email", placeholder: "Email" }), _react2.default.createElement("div", { className: "form-control-feedback" }, _react2.default.createElement("i", { className: "icon-user text-muted" }))), _react2.default.createElement("div", { className: "form-group has-feedback has-feedback-left" }, _react2.default.createElement("input", { type: "text", className: "form-control", name: "username", placeholder: "Username" }), _react2.default.createElement("div", { className: "form-control-feedback" }, _react2.default.createElement("i", { className: "icon-user text-muted" }))), _react2.default.createElement("div", { className: "form-group has-feedback has-feedback-left" }, _react2.default.createElement("input", { type: "name", className: "form-control", name: "name", placeholder: "Full Name" }), _react2.default.createElement("div", { className: "form-control-feedback" }, _react2.default.createElement("i", { className: "icon-lock2 text-muted" }))), _react2.default.createElement("div", { className: "form-group has-feedback has-feedback-left" }, _react2.default.createElement("input", { type: "password", className: "form-control", name: "password", placeholder: "Password" }), _react2.default.createElement("div", { className: "form-control-feedback" }, _react2.default.createElement("i", { className: "icon-lock2 text-muted" }))), _react2.default.createElement("div", { className: "form-group has-feedback has-feedback-left" }, _react2.default.createElement("div", { className: "form-group" }, _react2.default.createElement("label", null, "Role"), _react2.default.createElement("select", { className: "select", name: "role" }, _react2.default.createElement("optgroup", { label: "Role" }, _react2.default.createElement("option", { value: "admin" }, "Admin"), _react2.default.createElement("option", { value: "director" }, "Director"), _react2.default.createElement("option", { value: "principal" }, "Pricipal"))))), _react2.default.createElement("div", { className: "form-group has-feedback has-feedback-left" }, _react2.default.createElement("input", { type: "file", name: "avatar" })), _react2.default.createElement("div", { className: "form-group" }, _react2.default.createElement("button", { type: "submit", className: "btn bg-pink-400 btn-block" }, "Sign Up ", _react2.default.createElement("i", { className: "icon-circle-right2 position-right" }))))), _react2.default.createElement("div", { className: "footer text-muted text-center" }, "\xA9 2017. ", _react2.default.createElement(_link2.default, { href: "#" }, _react2.default.createElement("a", null, "School Management Portal")), " by ", _react2.default.createElement(_link2.default, { href: "http://www.cichub.org" }, _react2.default.createElement("a", { target: "_blank" }, "CIC HUB"))))))));
            }
      }]);

      return _class;
}(_react2.default.Component);

exports.default = _class;