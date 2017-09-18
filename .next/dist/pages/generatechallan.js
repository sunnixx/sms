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

var _style = require("../components/stylesheets/style.js");

var _style2 = _interopRequireDefault(_style);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class(props) {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

    _this.state = { data: []
      // this.props = {rollNo:''}

    };_this.getChallanData = _this.getChallanData.bind(_this);
    _this.renderChallanData = _this.renderChallanData.bind(_this);
    _this.printAllChallan = _this.printAllChallan.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: "getChallanData",
    value: function getChallanData() {
      var _this2 = this;

      _axios2.default.get("/Send_ChallanData?rollNo=" + this.props.url.query.rollNo).then(function (response) {
        _this2.setState({ data: response.data });
      });
    }
  }, {
    key: "printAllChallan",
    value: function printAllChallan() {
      var _this3 = this;

      _axios2.default.get("/allstudents").then(function (res) {
        return _this3.setState({ data: res.data });
      });
    }
  }, {
    key: "renderChallanData",
    value: function renderChallanData() {
      return this.state.data.map(function (item) {
        return _react2.default.createElement("main", null, _react2.default.createElement("div", { className: "col-md-4 col-sm-4 col-xs-4", style: { paddingTop: "10%" } }, _react2.default.createElement("div", { className: "row" }, _react2.default.createElement("div", { className: "col-md-4 col-sm-2 col-xs-2" }, _react2.default.createElement("img", { src: "static/assets/images/logo-1.jpg", className: "img-responsive" })), _react2.default.createElement("div", { className: "col-md-6 col-sm-6 col-xs-6" }, _react2.default.createElement("center", null, _react2.default.createElement("b", null, "Bank Alfalah Limited"), _react2.default.createElement("br", null), _react2.default.createElement("span", null, "Islamic Banking"), " ", _react2.default.createElement("br", null), _react2.default.createElement("span", null, "Latifabad Branch Block C"), " ", _react2.default.createElement("br", null), _react2.default.createElement("span", null, "Civic Center Unit No. 7"), " ", _react2.default.createElement("br", null), _react2.default.createElement("span", { style: { border: "3px dotted" } }, "A/C No 5631-5000622021"))), _react2.default.createElement("div", { className: "col-md-2 col-sm-2 col-xs-2" }, _react2.default.createElement("p", { style: { fontSize: "9px" } }, "Bank Copy"))), _react2.default.createElement("br", null), _react2.default.createElement("div", { className: "row" }, _react2.default.createElement("div", { className: "col-md-offset-2 col-sm-offset-2 col-md-10 col-sm-10 col-xs-10" }, _react2.default.createElement("p", { style: { marginBottom: "0" } }, _react2.default.createElement("b", null, _react2.default.createElement("u", null, "International Islamic University Islamabad Schools"))), _react2.default.createElement("center", null, _react2.default.createElement("p", null, "Latifabad Campus")))), _react2.default.createElement("div", { className: "row" }, _react2.default.createElement("div", { className: "col-md-offset-2" }, _react2.default.createElement("table", null, _react2.default.createElement("tbody", { key: "tablebody" + item._id }, _react2.default.createElement("tr", { key: "rollnorow" + item._id }, _react2.default.createElement("td", { key: "rollnokey" + item._id }, "Roll No"), _react2.default.createElement("td", { className: "col-md-6 col-sm-6 col-xs-6", key: "rollnovalue" + item._id }, item.rollNo)), _react2.default.createElement("tr", { key: "feemonthrow" + item._id }, _react2.default.createElement("td", { key: "feemonthkey" + item._id }, "Fee Month"), _react2.default.createElement("td", { key: "feemonthvalue" + item._id }, item.feeMonth)), _react2.default.createElement("tr", { key: "issuedaterow" + item._id }, _react2.default.createElement("td", { key: "issuedatekey" + item._id }, "Issue Date"), _react2.default.createElement("td", { key: "issuedatevalue" + item._id }, item.issueDate)), _react2.default.createElement("tr", { key: "duedaterow" + item._id }, _react2.default.createElement("td", { key: "duedatekey" + item._id }, "Due Date"), _react2.default.createElement("td", { key: "duedatevalue" + item._id }, item.dueDate)), _react2.default.createElement("tr", { key: "namerow" + item._id }, _react2.default.createElement("td", { key: "namekey" + item._id }, "Name"), _react2.default.createElement("td", { key: "namevalue" + item._id }, item.fname)), _react2.default.createElement("tr", { key: "fathernamerow" + item._id }, _react2.default.createElement("td", { key: "fathernamekey" + item._id }, "Father Name"), _react2.default.createElement("td", { key: "fathernamevalue" + item._id }, item.guardian)), _react2.default.createElement("tr", { key: "graderow" + item._id }, _react2.default.createElement("td", { key: "gradekey" + item._id }, "Grade"), _react2.default.createElement("td", { key: "gradevalue" + item._id }, item.grade)))))), _react2.default.createElement("div", { className: "row" }, _react2.default.createElement("br", null), _react2.default.createElement("center", null, _react2.default.createElement("p", null, "Challan Details")), _react2.default.createElement("span", { className: "col-md-offset-2" }, "Description"), _react2.default.createElement("span", { className: "pull-right" }, "Amount"), _react2.default.createElement("div", { className: "col-md-offset-2", style: { borderTop: "2px solid #000" } }, _react2.default.createElement("table", { className: "col-md-12 col-sm-12 col-xs-12" }, _react2.default.createElement("tbody", { key: "tablebody" + item._id }, _react2.default.createElement("tr", { key: "admissionfeesrow" + item._id }, _react2.default.createElement("td", { key: "admissionfees" + item._id }, "Admission Fee"), _react2.default.createElement("td", { className: "pull-right", key: "admissionfeesvalue" + item._id }, item.admissionFee | 0)), _react2.default.createElement("tr", { key: "annualfeesrow" + item._id }, _react2.default.createElement("td", { key: "annualfees" + item._id }, "Annual Fee"), _react2.default.createElement("td", { className: "pull-right", key: "annualfeesvalue" + item._id }, item.annualFee | 0)), _react2.default.createElement("tr", { key: "coursefeesrow" + item._id }, _react2.default.createElement("td", { key: "coursefees" + item._id }, "Course Fee"), _react2.default.createElement("td", { className: "pull-right", key: "coursefeesvalue" + item._id }, item.course | 0)), _react2.default.createElement("tr", { key: "tuitionfeesrow" + item._id }, _react2.default.createElement("td", { key: "tuitionfees" + item._id }, "Tution Fee"), _react2.default.createElement("td", { className: "pull-right", key: "tuitionfeesvalue" + item._id }, item.course | 0)), _react2.default.createElement("tr", { key: "arrrearsrow" + item._id }, _react2.default.createElement("td", { key: "arrears" + item._id }, "Arrears"), _react2.default.createElement("td", { className: "pull-right", key: "arrearsvalue" + item._id }, item.arrears | 0)), _react2.default.createElement("tr", { key: "arrrearsrow" + item._id }, _react2.default.createElement("td", { key: "arrears" + item._id }, "Arrears"), _react2.default.createElement("td", { className: "pull-right", key: "arrearsvalue" + item._id }, item.arrears | 0)), _react2.default.createElement("tr", { key: "duplicaterow" + item._id }, _react2.default.createElement("td", { key: "duplicate" + item._id }, "Duplicate"), _react2.default.createElement("td", { className: "pull-right", key: "duplicatevalue" + item._id }, item.bDuplicateChallan | 'No')), _react2.default.createElement("tr", { key: "challanfeerow" + item._id }, _react2.default.createElement("td", { key: "challanfee" + item._id }, "Challan"), _react2.default.createElement("td", { className: "pull-right", key: "challanfeevalue" + item._id }, item.amount | 0)), _react2.default.createElement("tr", { key: "reminderrow" + item._id }, _react2.default.createElement("td", { key: "reminder" + item._id }, "Reminder"), _react2.default.createElement("td", { className: "pull-right", key: "remindervalue" + item._id }, item.feeReminders | 0)), _react2.default.createElement("tr", { key: "photocopyrow" + item._id }, _react2.default.createElement("td", { key: "photocopy" + item._id }, "Photocopies"), _react2.default.createElement("td", { className: "pull-right", key: "photocopyvalue" + item._id }, item.duplicateChallan | 0)))))), _react2.default.createElement("div", { className: "row" }, _react2.default.createElement("div", { style: { borderTop: "2px solid #000" }, className: "col-md-offset-2" }, _react2.default.createElement("span", null, "Total"), _react2.default.createElement("span", { className: "pull-right" }, item.amount | 0 + item.admissionFee | 0 + item.arrears | 0 + item.annualFee | 0 + item.securityDeposite | 0 + item.course | 0 + item.duplicateChallan | 0))), _react2.default.createElement("div", { className: "row" }, _react2.default.createElement("div", { className: "col-md-offset-2 col-md-5 col-sm-5 col-xs-5", style: {
            border: "1px solid #000",
            height: "100px",
            paddingTop: "20%"
          } }, _react2.default.createElement("center", null, _react2.default.createElement("span", null, "Stamp"))), _react2.default.createElement("div", { className: "pull-right col-md-3 col-sm-3 col-xs-3", style: {
            borderBottom: "1px solid #000",
            height: "80px",
            paddingTop: "20%"
          } }, _react2.default.createElement("center", null, _react2.default.createElement("span", null, "Signature"))))), _react2.default.createElement("div", { className: "col-md-4 col-sm-4 col-xs-4", style: { paddingTop: "10%" } }, _react2.default.createElement("div", { className: "row" }, _react2.default.createElement("div", { className: "col-md-4 col-sm-2 col-xs-2" }, _react2.default.createElement("img", { src: "static/assets/images/logo-1.jpg", className: "img-responsive" })), _react2.default.createElement("div", { className: "col-md-6 col-sm-6 col-xs-6" }, _react2.default.createElement("center", null, _react2.default.createElement("b", null, "Bank Alfalah Limited"), _react2.default.createElement("br", null), _react2.default.createElement("span", null, "Islamic Banking"), " ", _react2.default.createElement("br", null), _react2.default.createElement("span", null, "Latifabad Branch Block C"), " ", _react2.default.createElement("br", null), _react2.default.createElement("span", null, "Civic Center Unit No. 7"), " ", _react2.default.createElement("br", null), _react2.default.createElement("span", { style: { border: "3px dotted" } }, "A/C No 5631-5000622021"))), _react2.default.createElement("div", { className: "col-md-2 col-sm-2 col-xs-2" }, _react2.default.createElement("p", { style: { fontSize: "9px" } }, "Bank Copy"))), _react2.default.createElement("br", null), _react2.default.createElement("div", { className: "row" }, _react2.default.createElement("div", { className: "col-md-offset-2 col-sm-offset-2 col-md-10 col-sm-10 col-xs-10" }, _react2.default.createElement("p", { style: { marginBottom: "0" } }, _react2.default.createElement("b", null, _react2.default.createElement("u", null, "International Islamic University Islamabad Schools"))), _react2.default.createElement("center", null, _react2.default.createElement("p", null, "Latifabad Campus")))), _react2.default.createElement("div", { className: "row" }, _react2.default.createElement("div", { className: "col-md-offset-2" }, _react2.default.createElement("table", null, _react2.default.createElement("tbody", { key: "tablebody" + item._id }, _react2.default.createElement("tr", { key: "rollnorow" + item._id }, _react2.default.createElement("td", { key: "rollnokey" + item._id }, "Roll No"), _react2.default.createElement("td", { className: "col-md-6 col-sm-6 col-xs-6", key: "rollnovalue" + item._id }, item.rollNo)), _react2.default.createElement("tr", { key: "feemonthrow" + item._id }, _react2.default.createElement("td", { key: "feemonthkey" + item._id }, "Fee Month"), _react2.default.createElement("td", { key: "feemonthvalue" + item._id }, item.feeMonth)), _react2.default.createElement("tr", { key: "issuedaterow" + item._id }, _react2.default.createElement("td", { key: "issuedatekey" + item._id }, "Issue Date"), _react2.default.createElement("td", { key: "issuedatevalue" + item._id }, item.issueDate)), _react2.default.createElement("tr", { key: "duedaterow" + item._id }, _react2.default.createElement("td", { key: "duedatekey" + item._id }, "Due Date"), _react2.default.createElement("td", { key: "duedatevalue" + item._id }, item.dueDate)), _react2.default.createElement("tr", { key: "namerow" + item._id }, _react2.default.createElement("td", { key: "namekey" + item._id }, "Name"), _react2.default.createElement("td", { key: "namevalue" + item._id }, item.fname)), _react2.default.createElement("tr", { key: "fathernamerow" + item._id }, _react2.default.createElement("td", { key: "fathernamekey" + item._id }, "Father Name"), _react2.default.createElement("td", { key: "fathernamevalue" + item._id }, item.guardian)), _react2.default.createElement("tr", { key: "graderow" + item._id }, _react2.default.createElement("td", { key: "gradekey" + item._id }, "Grade"), _react2.default.createElement("td", { key: "gradevalue" + item._id }, item.grade)))))), _react2.default.createElement("div", { className: "row" }, _react2.default.createElement("br", null), _react2.default.createElement("center", null, _react2.default.createElement("p", null, "Challan Details")), _react2.default.createElement("span", { className: "col-md-offset-2" }, "Description"), _react2.default.createElement("span", { className: "pull-right" }, "Amount"), _react2.default.createElement("div", { className: "col-md-offset-2", style: { borderTop: "2px solid #000" } }, _react2.default.createElement("table", { className: "col-md-12 col-sm-12 col-xs-12" }, _react2.default.createElement("tbody", { key: "tablebody" + item._id }, _react2.default.createElement("tr", { key: "admissionfeesrow" + item._id }, _react2.default.createElement("td", { key: "admissionfees" + item._id }, "Admission Fee"), _react2.default.createElement("td", { className: "pull-right", key: "admissionfeesvalue" + item._id }, item.admissionFee | 0)), _react2.default.createElement("tr", { key: "annualfeesrow" + item._id }, _react2.default.createElement("td", { key: "annualfees" + item._id }, "Annual Fee"), _react2.default.createElement("td", { className: "pull-right", key: "annualfeesvalue" + item._id }, item.annualFee | 0)), _react2.default.createElement("tr", { key: "coursefeesrow" + item._id }, _react2.default.createElement("td", { key: "coursefees" + item._id }, "Course Fee"), _react2.default.createElement("td", { className: "pull-right", key: "coursefeesvalue" + item._id }, item.course | 0)), _react2.default.createElement("tr", { key: "tuitionfeesrow" + item._id }, _react2.default.createElement("td", { key: "tuitionfees" + item._id }, "Tution Fee"), _react2.default.createElement("td", { className: "pull-right", key: "tuitionfeesvalue" + item._id }, item.course | 0)), _react2.default.createElement("tr", { key: "arrrearsrow" + item._id }, _react2.default.createElement("td", { key: "arrears" + item._id }, "Arrears"), _react2.default.createElement("td", { className: "pull-right", key: "arrearsvalue" + item._id }, item.arrears | 0)), _react2.default.createElement("tr", { key: "arrrearsrow" + item._id }, _react2.default.createElement("td", { key: "arrears" + item._id }, "Arrears"), _react2.default.createElement("td", { className: "pull-right", key: "arrearsvalue" + item._id }, item.arrears | 0)), _react2.default.createElement("tr", { key: "duplicaterow" + item._id }, _react2.default.createElement("td", { key: "duplicate" + item._id }, "Duplicate"), _react2.default.createElement("td", { className: "pull-right", key: "duplicatevalue" + item._id }, item.bDuplicateChallan | 'No')), _react2.default.createElement("tr", { key: "challanfeerow" + item._id }, _react2.default.createElement("td", { key: "challanfee" + item._id }, "Challan"), _react2.default.createElement("td", { className: "pull-right", key: "challanfeevalue" + item._id }, item.amount | 0)), _react2.default.createElement("tr", { key: "reminderrow" + item._id }, _react2.default.createElement("td", { key: "reminder" + item._id }, "Reminder"), _react2.default.createElement("td", { className: "pull-right", key: "remindervalue" + item._id }, item.feeReminders | 0)), _react2.default.createElement("tr", { key: "photocopyrow" + item._id }, _react2.default.createElement("td", { key: "photocopy" + item._id }, "Photocopies"), _react2.default.createElement("td", { className: "pull-right", key: "photocopyvalue" + item._id }, item.duplicateChallan | 0)))))), _react2.default.createElement("div", { className: "row" }, _react2.default.createElement("div", { style: { borderTop: "2px solid #000" }, className: "col-md-offset-2" }, _react2.default.createElement("span", null, "Total"), _react2.default.createElement("span", { className: "pull-right" }, item.amount | 0 + item.admissionFee | 0 + item.arrears | 0 + item.annualFee | 0 + item.securityDeposite | 0 + item.course | 0 + item.duplicateChallan | 0))), _react2.default.createElement("div", { className: "row" }, _react2.default.createElement("div", { className: "col-md-offset-2 col-md-5 col-sm-5 col-xs-5", style: {
            border: "1px solid #000",
            height: "100px",
            paddingTop: "20%"
          } }, _react2.default.createElement("center", null, _react2.default.createElement("span", null, "Stamp"))), _react2.default.createElement("div", { className: "pull-right col-md-3 col-sm-3 col-xs-3", style: {
            borderBottom: "1px solid #000",
            height: "80px",
            paddingTop: "20%"
          } }, _react2.default.createElement("center", null, _react2.default.createElement("span", null, "Signature"))))), _react2.default.createElement("div", { className: "col-md-4 col-sm-4 col-xs-4", style: { paddingTop: "10%" } }, _react2.default.createElement("div", { className: "row" }, _react2.default.createElement("div", { className: "col-md-4 col-sm-2 col-xs-2" }, _react2.default.createElement("img", { src: "static/assets/images/logo-1.jpg", className: "img-responsive" })), _react2.default.createElement("div", { className: "col-md-6 col-sm-6 col-xs-6" }, _react2.default.createElement("center", null, _react2.default.createElement("b", null, "Bank Alfalah Limited"), _react2.default.createElement("br", null), _react2.default.createElement("span", null, "Islamic Banking"), " ", _react2.default.createElement("br", null), _react2.default.createElement("span", null, "Latifabad Branch Block C"), " ", _react2.default.createElement("br", null), _react2.default.createElement("span", null, "Civic Center Unit No. 7"), " ", _react2.default.createElement("br", null), _react2.default.createElement("span", { style: { border: "3px dotted" } }, "A/C No 5631-5000622021"))), _react2.default.createElement("div", { className: "col-md-2 col-sm-2 col-xs-2" }, _react2.default.createElement("p", { style: { fontSize: "9px" } }, "Bank Copy"))), _react2.default.createElement("br", null), _react2.default.createElement("div", { className: "row" }, _react2.default.createElement("div", { className: "col-md-offset-2 col-sm-offset-2 col-md-10 col-sm-10 col-xs-10" }, _react2.default.createElement("p", { style: { marginBottom: "0" } }, _react2.default.createElement("b", null, _react2.default.createElement("u", null, "International Islamic University Islamabad Schools"))), _react2.default.createElement("center", null, _react2.default.createElement("p", null, "Latifabad Campus")))), _react2.default.createElement("div", { className: "row" }, _react2.default.createElement("div", { className: "col-md-offset-2" }, _react2.default.createElement("table", null, _react2.default.createElement("tbody", { key: "tablebody" + item._id }, _react2.default.createElement("tr", { key: "rollnorow" + item._id }, _react2.default.createElement("td", { key: "rollnokey" + item._id }, "Roll No"), _react2.default.createElement("td", { className: "col-md-6 col-sm-6 col-xs-6", key: "rollnovalue" + item._id }, item.rollNo)), _react2.default.createElement("tr", { key: "feemonthrow" + item._id }, _react2.default.createElement("td", { key: "feemonthkey" + item._id }, "Fee Month"), _react2.default.createElement("td", { key: "feemonthvalue" + item._id }, item.feeMonth)), _react2.default.createElement("tr", { key: "issuedaterow" + item._id }, _react2.default.createElement("td", { key: "issuedatekey" + item._id }, "Issue Date"), _react2.default.createElement("td", { key: "issuedatevalue" + item._id }, item.issueDate)), _react2.default.createElement("tr", { key: "duedaterow" + item._id }, _react2.default.createElement("td", { key: "duedatekey" + item._id }, "Due Date"), _react2.default.createElement("td", { key: "duedatevalue" + item._id }, item.dueDate)), _react2.default.createElement("tr", { key: "namerow" + item._id }, _react2.default.createElement("td", { key: "namekey" + item._id }, "Name"), _react2.default.createElement("td", { key: "namevalue" + item._id }, item.fname)), _react2.default.createElement("tr", { key: "fathernamerow" + item._id }, _react2.default.createElement("td", { key: "fathernamekey" + item._id }, "Father Name"), _react2.default.createElement("td", { key: "fathernamevalue" + item._id }, item.guardian)), _react2.default.createElement("tr", { key: "graderow" + item._id }, _react2.default.createElement("td", { key: "gradekey" + item._id }, "Grade"), _react2.default.createElement("td", { key: "gradevalue" + item._id }, item.grade)))))), _react2.default.createElement("div", { className: "row" }, _react2.default.createElement("br", null), _react2.default.createElement("center", null, _react2.default.createElement("p", null, "Challan Details")), _react2.default.createElement("span", { className: "col-md-offset-2" }, "Description"), _react2.default.createElement("span", { className: "pull-right" }, "Amount"), _react2.default.createElement("div", { className: "col-md-offset-2", style: { borderTop: "2px solid #000" } }, _react2.default.createElement("table", { className: "col-md-12 col-sm-12 col-xs-12" }, _react2.default.createElement("tbody", { key: "tablebody" + item._id }, _react2.default.createElement("tr", { key: "admissionfeesrow" + item._id }, _react2.default.createElement("td", { key: "admissionfees" + item._id }, "Admission Fee"), _react2.default.createElement("td", { className: "pull-right", key: "admissionfeesvalue" + item._id }, item.admissionFee | 0)), _react2.default.createElement("tr", { key: "annualfeesrow" + item._id }, _react2.default.createElement("td", { key: "annualfees" + item._id }, "Annual Fee"), _react2.default.createElement("td", { className: "pull-right", key: "annualfeesvalue" + item._id }, item.annualFee | 0)), _react2.default.createElement("tr", { key: "coursefeesrow" + item._id }, _react2.default.createElement("td", { key: "coursefees" + item._id }, "Course Fee"), _react2.default.createElement("td", { className: "pull-right", key: "coursefeesvalue" + item._id }, item.course | 0)), _react2.default.createElement("tr", { key: "tuitionfeesrow" + item._id }, _react2.default.createElement("td", { key: "tuitionfees" + item._id }, "Tution Fee"), _react2.default.createElement("td", { className: "pull-right", key: "tuitionfeesvalue" + item._id }, item.course | 0)), _react2.default.createElement("tr", { key: "arrrearsrow" + item._id }, _react2.default.createElement("td", { key: "arrears" + item._id }, "Arrears"), _react2.default.createElement("td", { className: "pull-right", key: "arrearsvalue" + item._id }, item.arrears | 0)), _react2.default.createElement("tr", { key: "arrrearsrow" + item._id }, _react2.default.createElement("td", { key: "arrears" + item._id }, "Arrears"), _react2.default.createElement("td", { className: "pull-right", key: "arrearsvalue" + item._id }, item.arrears | 0)), _react2.default.createElement("tr", { key: "duplicaterow" + item._id }, _react2.default.createElement("td", { key: "duplicate" + item._id }, "Duplicate"), _react2.default.createElement("td", { className: "pull-right", key: "duplicatevalue" + item._id }, item.bDuplicateChallan | 'No')), _react2.default.createElement("tr", { key: "challanfeerow" + item._id }, _react2.default.createElement("td", { key: "challanfee" + item._id }, "Challan"), _react2.default.createElement("td", { className: "pull-right", key: "challanfeevalue" + item._id }, item.amount | 0)), _react2.default.createElement("tr", { key: "reminderrow" + item._id }, _react2.default.createElement("td", { key: "reminder" + item._id }, "Reminder"), _react2.default.createElement("td", { className: "pull-right", key: "remindervalue" + item._id }, item.feeReminders | 0)), _react2.default.createElement("tr", { key: "photocopyrow" + item._id }, _react2.default.createElement("td", { key: "photocopy" + item._id }, "Photocopies"), _react2.default.createElement("td", { className: "pull-right", key: "photocopyvalue" + item._id }, item.duplicateChallan | 0)))))), _react2.default.createElement("div", { className: "row" }, _react2.default.createElement("div", { style: { borderTop: "2px solid #000" }, className: "col-md-offset-2" }, _react2.default.createElement("span", null, "Total"), _react2.default.createElement("span", { className: "pull-right" }, item.amount | 0 + item.admissionFee | 0 + item.arrears | 0 + item.annualFee | 0 + item.securityDeposite | 0 + item.course | 0 + item.duplicateChallan | 0))), _react2.default.createElement("div", { className: "row" }, _react2.default.createElement("div", { className: "col-md-offset-2 col-md-5 col-sm-5 col-xs-5", style: {
            border: "1px solid #000",
            height: "100px",
            paddingTop: "20%"
          } }, _react2.default.createElement("center", null, _react2.default.createElement("span", null, "Stamp"))), _react2.default.createElement("div", { className: "pull-right col-md-3 col-sm-3 col-xs-3", style: {
            borderBottom: "1px solid #000",
            height: "80px",
            paddingTop: "20%"
          } }, _react2.default.createElement("center", null, _react2.default.createElement("span", null, "Signature"))))));
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.url.query.rollNo === "printall") {
        this.printAllChallan();
      } else {
        this.getChallanData();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", null, _react2.default.createElement(_Head2.default, null), _react2.default.createElement("div", { className: "col-md-12 col-sm-12 col-xs-12", style: { backgroundColor: "#fff" } }, _react2.default.createElement("div", { className: "container" }, _react2.default.createElement("div", { className: "row" }, this.renderChallanData()))));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;