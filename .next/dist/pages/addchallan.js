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

var _Head = require("./components/Head");

var _Head2 = _interopRequireDefault(_Head);

var _Sidebar = require("./components/Sidebar");

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _TopMenu = require("./components/TopMenu");

var _TopMenu2 = _interopRequireDefault(_TopMenu);

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
      return _react2.default.createElement("div", null, _react2.default.createElement(_Head2.default, {
        formUniform: "static/assets/js/plugins/forms/styling/uniform.min.js",
        formSwitchery: "static/assets/js/plugins/forms/styling/switchery.min.js",
        formSwitch: "static/assets/js/plugins/forms/styling/switch.min.js",
        formCheckbox: "static/assets/js/pages/form_checkboxes_radios.js" }), _react2.default.createElement(_TopMenu2.default, null), _react2.default.createElement("div", { className: "page-container" }, _react2.default.createElement("div", { className: "page-content" }, _react2.default.createElement(_Sidebar2.default, { financeActive: "active", challanShow: "block", addStudentActive: "active" }), _react2.default.createElement("div", { className: "content-wrapper" }, _react2.default.createElement("div", { className: "content" }, _react2.default.createElement("div", { className: "panel panel-flat" }, _react2.default.createElement("div", { className: "panel-heading" }, _react2.default.createElement("h5", { className: "panel-title" }, "Add Student Challan")), _react2.default.createElement("div", { className: "panel-body" }, _react2.default.createElement("form", { className: "form-horizontal", method: "post", action: "/addchallan" }, _react2.default.createElement("fieldset", { className: "content-group" }, _react2.default.createElement("legend", { className: "text-bold" }, "Basic Information"), _react2.default.createElement("div", { className: "form-group" }, _react2.default.createElement("label", { className: "control-label col-lg-2" }, "First Name ", _react2.default.createElement("span", { style: { color: "red" } }, "*")), _react2.default.createElement("div", { className: "col-lg-10" }, _react2.default.createElement("input", { type: "text", className: "form-control", name: "fname", required: true }))), _react2.default.createElement("div", { className: "form-group" }, _react2.default.createElement("label", { className: "control-label col-lg-2" }, "Last Name ", _react2.default.createElement("span", { style: { color: "red" } }, "*")), _react2.default.createElement("div", { className: "col-lg-10" }, _react2.default.createElement("input", { type: "text", className: "form-control", name: "lname", required: true }))), _react2.default.createElement("div", { className: "form-group" }, _react2.default.createElement("label", { className: "control-label col-lg-2" }, "Fathers Name ", _react2.default.createElement("span", { style: { color: "red" } }, "*")), _react2.default.createElement("div", { className: "col-lg-10" }, _react2.default.createElement("input", { type: "text", className: "form-control", name: "guardian", required: true }))), _react2.default.createElement("div", { className: "form-group" }, _react2.default.createElement("label", { className: "control-label col-lg-12" }, "Gender ", _react2.default.createElement("span", { style: { color: "red" } }, "*")), _react2.default.createElement("div", { className: "col-lg-10" }, _react2.default.createElement("label", { className: "radio-inline" }, _react2.default.createElement("input", { type: "radio", name: "genderRadio", value: "Boy", defaultChecked: true }), "Boy")), _react2.default.createElement("div", { className: "col-lg-10" }, _react2.default.createElement("label", { className: "radio-inline" }, _react2.default.createElement("input", { type: "radio", name: "genderRadio", value: "Boy" }), "Girl"))), _react2.default.createElement("div", { className: "form-group" }, _react2.default.createElement("label", { className: "control-label col-lg-2" }, "Grade ", _react2.default.createElement("span", { style: { color: "red" } }, "*")), _react2.default.createElement("div", { className: "col-lg-10" }, _react2.default.createElement("select", { name: "grade", className: "form-control" }, _react2.default.createElement("option", { name: "reception" }, "Reception"), _react2.default.createElement("option", { name: "reception01" }, "Reception 01"), _react2.default.createElement("option", { name: "reception02" }, "Reception 02"), _react2.default.createElement("option", { name: "grade01" }, "Grade 01"), _react2.default.createElement("option", { name: "grade02" }, "Grade 02"), _react2.default.createElement("option", { name: "grade03" }, "Grade 03"), _react2.default.createElement("option", { name: "grade04" }, "Grade 04"), _react2.default.createElement("option", { name: "grade05" }, "Grade 05"), _react2.default.createElement("option", { name: "grade06" }, "Grade 06"), _react2.default.createElement("option", { name: "grade07" }, "Grade 07"), _react2.default.createElement("option", { name: "grade08" }, "Grade 08")))), _react2.default.createElement("div", { className: "form-group" }, _react2.default.createElement("label", { className: "control-label col-lg-2" }, "Issue Date ", _react2.default.createElement("span", { style: { color: "red" } }, "*")), _react2.default.createElement("div", { className: "col-lg-10" }, _react2.default.createElement("input", { type: "date", className: "form-control", name: "issueDate", required: true }))), _react2.default.createElement("div", { className: "form-group" }, _react2.default.createElement("label", { className: "control-label col-lg-2" }, "Due Date ", _react2.default.createElement("span", { style: { color: "red" } }, "*")), _react2.default.createElement("div", { className: "col-lg-10" }, _react2.default.createElement("input", { type: "date", className: "form-control", name: "dueDate", required: true }))), _react2.default.createElement("div", { className: "form-group" }, _react2.default.createElement("label", { className: "control-label col-lg-2" }, "Fee Month ", _react2.default.createElement("span", { style: { color: "red" } }, "*")), _react2.default.createElement("div", { className: "col-lg-10" }, _react2.default.createElement("select", { className: "form-control", name: "feeMonth" }, _react2.default.createElement("option", { name: "January" }, "January"), _react2.default.createElement("option", { name: "February" }, "February"), _react2.default.createElement("option", { name: "March" }, "March"), _react2.default.createElement("option", { name: "April" }, "April"), _react2.default.createElement("option", { name: "May" }, "May"), _react2.default.createElement("option", { name: "June" }, "June"), _react2.default.createElement("option", { name: "July" }, "July"), _react2.default.createElement("option", { name: "August" }, "August"), _react2.default.createElement("option", { name: "September" }, "September"), _react2.default.createElement("option", { name: "October" }, "October"), _react2.default.createElement("option", { name: "November" }, "November"), _react2.default.createElement("option", { name: "December" }, "December")))), _react2.default.createElement("div", { className: "form-group" }, _react2.default.createElement("label", { className: "control-label col-lg-2" }, "Amount ", _react2.default.createElement("span", { style: { color: "red" } }, "*")), _react2.default.createElement("div", { className: "col-lg-10" }, _react2.default.createElement("input", { type: "number", className: "form-control", name: "amount", required: true })))), _react2.default.createElement("div", { className: "text-right" }, _react2.default.createElement("button", { type: "submit", className: "btn btn-primary legitRipple" }, "Submit ", _react2.default.createElement("i", { className: "icon-arrow-right14 position-right" })))))))))));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;