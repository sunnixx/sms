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

var _jsxFileName = "/home/sumair/MEAN STACK/My Work/sms/pages/generatechallan.js?entry";


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
        return _react2.default.createElement("main", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }, _react2.default.createElement("div", { className: "col-md-4 col-sm-4 col-xs-4", style: { paddingTop: "10%" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }, _react2.default.createElement("div", { className: "row", __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }, _react2.default.createElement("div", { className: "col-md-4 col-sm-2 col-xs-2", __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }, _react2.default.createElement("img", { src: "static/assets/images/logo-1.jpg", className: "img-responsive", __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        })), _react2.default.createElement("div", { className: "col-md-6 col-sm-6 col-xs-6", __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        }, _react2.default.createElement("center", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }, _react2.default.createElement("b", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }, "Bank Alfalah Limited"), _react2.default.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }), _react2.default.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }, "Islamic Banking"), " ", _react2.default.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }), _react2.default.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        }, "Latifabad Branch Block C"), " ", _react2.default.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        }), _react2.default.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }, "Civic Center Unit No. 7"), " ", _react2.default.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }), _react2.default.createElement("span", { style: { border: "3px dotted" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }, "A/C No 5631-5000622021"))), _react2.default.createElement("div", { className: "col-md-2 col-sm-2 col-xs-2", __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        }, _react2.default.createElement("p", { style: { fontSize: "9px" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        }, "Bank Copy"))), _react2.default.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }), _react2.default.createElement("div", { className: "row", __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }, _react2.default.createElement("div", { className: "col-md-offset-2 col-sm-offset-2 col-md-10 col-sm-10 col-xs-10", __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }, _react2.default.createElement("p", { style: { marginBottom: "0" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }, _react2.default.createElement("b", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }, _react2.default.createElement("u", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }, "International Islamic University Islamabad Schools"))), _react2.default.createElement("center", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        }, _react2.default.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        }, "Latifabad Campus")))), _react2.default.createElement("div", { className: "row", __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        }, _react2.default.createElement("div", { className: "col-md-offset-2", __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }, _react2.default.createElement("table", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }, _react2.default.createElement("tbody", { key: "tablebody" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        }, _react2.default.createElement("tr", { key: "rollnorow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        }, _react2.default.createElement("td", { key: "rollnokey" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        }, "Roll No"), _react2.default.createElement("td", { className: "col-md-6 col-sm-6 col-xs-6", key: "rollnovalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        }, item.rollNo)), _react2.default.createElement("tr", { key: "feemonthrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          }
        }, _react2.default.createElement("td", { key: "feemonthkey" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        }, "Fee Month"), _react2.default.createElement("td", { key: "feemonthvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          }
        }, item.feeMonth)), _react2.default.createElement("tr", { key: "issuedaterow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          }
        }, _react2.default.createElement("td", { key: "issuedatekey" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          }
        }, "Issue Date"), _react2.default.createElement("td", { key: "issuedatevalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        }, item.issueDate)), _react2.default.createElement("tr", { key: "duedaterow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        }, _react2.default.createElement("td", { key: "duedatekey" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        }, "Due Date"), _react2.default.createElement("td", { key: "duedatevalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          }
        }, item.dueDate)), _react2.default.createElement("tr", { key: "namerow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          }
        }, _react2.default.createElement("td", { key: "namekey" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          }
        }, "Name"), _react2.default.createElement("td", { key: "namevalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        }, item.fname)), _react2.default.createElement("tr", { key: "fathernamerow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
        }, _react2.default.createElement("td", { key: "fathernamekey" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          }
        }, "Father Name"), _react2.default.createElement("td", { key: "fathernamevalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          }
        }, item.guardian)), _react2.default.createElement("tr", { key: "graderow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          }
        }, _react2.default.createElement("td", { key: "gradekey" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          }
        }, "Grade"), _react2.default.createElement("td", { key: "gradevalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          }
        }, item.grade)))))), _react2.default.createElement("div", { className: "row", __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          }
        }, _react2.default.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          }
        }), _react2.default.createElement("center", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          }
        }, _react2.default.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          }
        }, "Challan Details")), _react2.default.createElement("span", { className: "col-md-offset-2", __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          }
        }, "Description"), _react2.default.createElement("span", { className: "pull-right", __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          }
        }, "Amount"), _react2.default.createElement("div", { className: "col-md-offset-2", style: { borderTop: "2px solid #000" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          }
        }, _react2.default.createElement("table", { className: "col-md-12 col-sm-12 col-xs-12", __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          }
        }, _react2.default.createElement("tbody", { key: "tablebody" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          }
        }, _react2.default.createElement("tr", { key: "admissionfeesrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          }
        }, _react2.default.createElement("td", { key: "admissionfees" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          }
        }, "Admission Fee"), _react2.default.createElement("td", { className: "pull-right", key: "admissionfeesvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          }
        }, item.admissionFee | 0)), _react2.default.createElement("tr", { key: "annualfeesrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          }
        }, _react2.default.createElement("td", { key: "annualfees" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          }
        }, "Annual Fee"), _react2.default.createElement("td", { className: "pull-right", key: "annualfeesvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          }
        }, item.annualFee | 0)), _react2.default.createElement("tr", { key: "coursefeesrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          }
        }, _react2.default.createElement("td", { key: "coursefees" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          }
        }, "Course Fee"), _react2.default.createElement("td", { className: "pull-right", key: "coursefeesvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          }
        }, item.course | 0)), _react2.default.createElement("tr", { key: "tuitionfeesrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          }
        }, _react2.default.createElement("td", { key: "tuitionfees" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          }
        }, "Tution Fee"), _react2.default.createElement("td", { className: "pull-right", key: "tuitionfeesvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          }
        }, item.course | 0)), _react2.default.createElement("tr", { key: "arrrearsrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          }
        }, _react2.default.createElement("td", { key: "arrears" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          }
        }, "Arrears"), _react2.default.createElement("td", { className: "pull-right", key: "arrearsvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          }
        }, item.arrears | 0)), _react2.default.createElement("tr", { key: "arrrearsrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          }
        }, _react2.default.createElement("td", { key: "arrears" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          }
        }, "Arrears"), _react2.default.createElement("td", { className: "pull-right", key: "arrearsvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          }
        }, item.arrears | 0)), _react2.default.createElement("tr", { key: "duplicaterow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          }
        }, _react2.default.createElement("td", { key: "duplicate" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          }
        }, "Duplicate"), _react2.default.createElement("td", { className: "pull-right", key: "duplicatevalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          }
        }, item.bDuplicateChallan | 'No')), _react2.default.createElement("tr", { key: "challanfeerow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          }
        }, _react2.default.createElement("td", { key: "challanfee" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          }
        }, "Challan"), _react2.default.createElement("td", { className: "pull-right", key: "challanfeevalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          }
        }, item.amount | 0)), _react2.default.createElement("tr", { key: "reminderrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          }
        }, _react2.default.createElement("td", { key: "reminder" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          }
        }, "Reminder"), _react2.default.createElement("td", { className: "pull-right", key: "remindervalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          }
        }, item.feeReminders | 0)), _react2.default.createElement("tr", { key: "photocopyrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          }
        }, _react2.default.createElement("td", { key: "photocopy" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          }
        }, "Photocopies"), _react2.default.createElement("td", { className: "pull-right", key: "photocopyvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          }
        }, item.duplicateChallan | 0)))))), _react2.default.createElement("div", { className: "row", __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          }
        }, _react2.default.createElement("div", { style: { borderTop: "2px solid #000" }, className: "col-md-offset-2", __source: {
            fileName: _jsxFileName,
            lineNumber: 146
          }
        }, _react2.default.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          }
        }, "Total"), _react2.default.createElement("span", { className: "pull-right", __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          }
        }, item.amount | 0 + item.admissionFee | 0 + item.arrears | 0 + item.annualFee | 0 + item.securityDeposite | 0 + item.course | 0 + item.duplicateChallan | 0))), _react2.default.createElement("div", { className: "row", __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          }
        }, _react2.default.createElement("div", { className: "col-md-offset-2 col-md-5 col-sm-5 col-xs-5", style: {
            border: "1px solid #000",
            height: "100px",
            paddingTop: "20%"
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          }
        }, _react2.default.createElement("center", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165
          }
        }, _react2.default.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165
          }
        }, "Stamp"))), _react2.default.createElement("div", { className: "pull-right col-md-3 col-sm-3 col-xs-3", style: {
            borderBottom: "1px solid #000",
            height: "80px",
            paddingTop: "20%"
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 167
          }
        }, _react2.default.createElement("center", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172
          }
        }, _react2.default.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172
          }
        }, "Signature"))))), _react2.default.createElement("div", { className: "col-md-4 col-sm-4 col-xs-4", style: { paddingTop: "10%" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 176
          }
        }, _react2.default.createElement("div", { className: "row", __source: {
            fileName: _jsxFileName,
            lineNumber: 177
          }
        }, _react2.default.createElement("div", { className: "col-md-4 col-sm-2 col-xs-2", __source: {
            fileName: _jsxFileName,
            lineNumber: 178
          }
        }, _react2.default.createElement("img", { src: "static/assets/images/logo-1.jpg", className: "img-responsive", __source: {
            fileName: _jsxFileName,
            lineNumber: 179
          }
        })), _react2.default.createElement("div", { className: "col-md-6 col-sm-6 col-xs-6", __source: {
            fileName: _jsxFileName,
            lineNumber: 181
          }
        }, _react2.default.createElement("center", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182
          }
        }, _react2.default.createElement("b", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          }
        }, "Bank Alfalah Limited"), _react2.default.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          }
        }), _react2.default.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184
          }
        }, "Islamic Banking"), " ", _react2.default.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184
          }
        }), _react2.default.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 185
          }
        }, "Latifabad Branch Block C"), " ", _react2.default.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 185
          }
        }), _react2.default.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186
          }
        }, "Civic Center Unit No. 7"), " ", _react2.default.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186
          }
        }), _react2.default.createElement("span", { style: { border: "3px dotted" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 187
          }
        }, "A/C No 5631-5000622021"))), _react2.default.createElement("div", { className: "col-md-2 col-sm-2 col-xs-2", __source: {
            fileName: _jsxFileName,
            lineNumber: 190
          }
        }, _react2.default.createElement("p", { style: { fontSize: "9px" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          }
        }, "Bank Copy"))), _react2.default.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 194
          }
        }), _react2.default.createElement("div", { className: "row", __source: {
            fileName: _jsxFileName,
            lineNumber: 195
          }
        }, _react2.default.createElement("div", { className: "col-md-offset-2 col-sm-offset-2 col-md-10 col-sm-10 col-xs-10", __source: {
            fileName: _jsxFileName,
            lineNumber: 196
          }
        }, _react2.default.createElement("p", { style: { marginBottom: "0" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 197
          }
        }, _react2.default.createElement("b", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197
          }
        }, _react2.default.createElement("u", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197
          }
        }, "International Islamic University Islamabad Schools"))), _react2.default.createElement("center", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198
          }
        }, _react2.default.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198
          }
        }, "Latifabad Campus")))), _react2.default.createElement("div", { className: "row", __source: {
            fileName: _jsxFileName,
            lineNumber: 201
          }
        }, _react2.default.createElement("div", { className: "col-md-offset-2", __source: {
            fileName: _jsxFileName,
            lineNumber: 202
          }
        }, _react2.default.createElement("table", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203
          }
        }, _react2.default.createElement("tbody", { key: "tablebody" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 204
          }
        }, _react2.default.createElement("tr", { key: "rollnorow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 205
          }
        }, _react2.default.createElement("td", { key: "rollnokey" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 206
          }
        }, "Roll No"), _react2.default.createElement("td", { className: "col-md-6 col-sm-6 col-xs-6", key: "rollnovalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 207
          }
        }, item.rollNo)), _react2.default.createElement("tr", { key: "feemonthrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 209
          }
        }, _react2.default.createElement("td", { key: "feemonthkey" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 210
          }
        }, "Fee Month"), _react2.default.createElement("td", { key: "feemonthvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 211
          }
        }, item.feeMonth)), _react2.default.createElement("tr", { key: "issuedaterow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 213
          }
        }, _react2.default.createElement("td", { key: "issuedatekey" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 214
          }
        }, "Issue Date"), _react2.default.createElement("td", { key: "issuedatevalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 215
          }
        }, item.issueDate)), _react2.default.createElement("tr", { key: "duedaterow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 217
          }
        }, _react2.default.createElement("td", { key: "duedatekey" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 218
          }
        }, "Due Date"), _react2.default.createElement("td", { key: "duedatevalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 219
          }
        }, item.dueDate)), _react2.default.createElement("tr", { key: "namerow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 221
          }
        }, _react2.default.createElement("td", { key: "namekey" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 222
          }
        }, "Name"), _react2.default.createElement("td", { key: "namevalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 223
          }
        }, item.fname)), _react2.default.createElement("tr", { key: "fathernamerow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 225
          }
        }, _react2.default.createElement("td", { key: "fathernamekey" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 226
          }
        }, "Father Name"), _react2.default.createElement("td", { key: "fathernamevalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 227
          }
        }, item.guardian)), _react2.default.createElement("tr", { key: "graderow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 229
          }
        }, _react2.default.createElement("td", { key: "gradekey" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 230
          }
        }, "Grade"), _react2.default.createElement("td", { key: "gradevalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 231
          }
        }, item.grade)))))), _react2.default.createElement("div", { className: "row", __source: {
            fileName: _jsxFileName,
            lineNumber: 238
          }
        }, _react2.default.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 239
          }
        }), _react2.default.createElement("center", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240
          }
        }, _react2.default.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240
          }
        }, "Challan Details")), _react2.default.createElement("span", { className: "col-md-offset-2", __source: {
            fileName: _jsxFileName,
            lineNumber: 241
          }
        }, "Description"), _react2.default.createElement("span", { className: "pull-right", __source: {
            fileName: _jsxFileName,
            lineNumber: 241
          }
        }, "Amount"), _react2.default.createElement("div", { className: "col-md-offset-2", style: { borderTop: "2px solid #000" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 242
          }
        }, _react2.default.createElement("table", { className: "col-md-12 col-sm-12 col-xs-12", __source: {
            fileName: _jsxFileName,
            lineNumber: 243
          }
        }, _react2.default.createElement("tbody", { key: "tablebody" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 245
          }
        }, _react2.default.createElement("tr", { key: "admissionfeesrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 246
          }
        }, _react2.default.createElement("td", { key: "admissionfees" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 247
          }
        }, "Admission Fee"), _react2.default.createElement("td", { className: "pull-right", key: "admissionfeesvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 248
          }
        }, item.admissionFee | 0)), _react2.default.createElement("tr", { key: "annualfeesrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 250
          }
        }, _react2.default.createElement("td", { key: "annualfees" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 251
          }
        }, "Annual Fee"), _react2.default.createElement("td", { className: "pull-right", key: "annualfeesvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 252
          }
        }, item.annualFee | 0)), _react2.default.createElement("tr", { key: "coursefeesrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 254
          }
        }, _react2.default.createElement("td", { key: "coursefees" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 255
          }
        }, "Course Fee"), _react2.default.createElement("td", { className: "pull-right", key: "coursefeesvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 256
          }
        }, item.course | 0)), _react2.default.createElement("tr", { key: "tuitionfeesrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 258
          }
        }, _react2.default.createElement("td", { key: "tuitionfees" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 259
          }
        }, "Tution Fee"), _react2.default.createElement("td", { className: "pull-right", key: "tuitionfeesvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 260
          }
        }, item.course | 0)), _react2.default.createElement("tr", { key: "arrrearsrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 262
          }
        }, _react2.default.createElement("td", { key: "arrears" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 263
          }
        }, "Arrears"), _react2.default.createElement("td", { className: "pull-right", key: "arrearsvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 264
          }
        }, item.arrears | 0)), _react2.default.createElement("tr", { key: "arrrearsrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 266
          }
        }, _react2.default.createElement("td", { key: "arrears" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 267
          }
        }, "Arrears"), _react2.default.createElement("td", { className: "pull-right", key: "arrearsvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 268
          }
        }, item.arrears | 0)), _react2.default.createElement("tr", { key: "duplicaterow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 270
          }
        }, _react2.default.createElement("td", { key: "duplicate" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 271
          }
        }, "Duplicate"), _react2.default.createElement("td", { className: "pull-right", key: "duplicatevalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 272
          }
        }, item.bDuplicateChallan | 'No')), _react2.default.createElement("tr", { key: "challanfeerow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 274
          }
        }, _react2.default.createElement("td", { key: "challanfee" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 275
          }
        }, "Challan"), _react2.default.createElement("td", { className: "pull-right", key: "challanfeevalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 276
          }
        }, item.amount | 0)), _react2.default.createElement("tr", { key: "reminderrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 278
          }
        }, _react2.default.createElement("td", { key: "reminder" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 279
          }
        }, "Reminder"), _react2.default.createElement("td", { className: "pull-right", key: "remindervalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 280
          }
        }, item.feeReminders | 0)), _react2.default.createElement("tr", { key: "photocopyrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 282
          }
        }, _react2.default.createElement("td", { key: "photocopy" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 283
          }
        }, "Photocopies"), _react2.default.createElement("td", { className: "pull-right", key: "photocopyvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 284
          }
        }, item.duplicateChallan | 0)))))), _react2.default.createElement("div", { className: "row", __source: {
            fileName: _jsxFileName,
            lineNumber: 291
          }
        }, _react2.default.createElement("div", { style: { borderTop: "2px solid #000" }, className: "col-md-offset-2", __source: {
            fileName: _jsxFileName,
            lineNumber: 292
          }
        }, _react2.default.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 293
          }
        }, "Total"), _react2.default.createElement("span", { className: "pull-right", __source: {
            fileName: _jsxFileName,
            lineNumber: 294
          }
        }, item.amount | 0 + item.admissionFee | 0 + item.arrears | 0 + item.annualFee | 0 + item.securityDeposite | 0 + item.course | 0 + item.duplicateChallan | 0))), _react2.default.createElement("div", { className: "row", __source: {
            fileName: _jsxFileName,
            lineNumber: 306
          }
        }, _react2.default.createElement("div", { className: "col-md-offset-2 col-md-5 col-sm-5 col-xs-5", style: {
            border: "1px solid #000",
            height: "100px",
            paddingTop: "20%"
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 307
          }
        }, _react2.default.createElement("center", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 312
          }
        }, _react2.default.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 312
          }
        }, "Stamp"))), _react2.default.createElement("div", { className: "pull-right col-md-3 col-sm-3 col-xs-3", style: {
            borderBottom: "1px solid #000",
            height: "80px",
            paddingTop: "20%"
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 314
          }
        }, _react2.default.createElement("center", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 319
          }
        }, _react2.default.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 319
          }
        }, "Signature"))))), _react2.default.createElement("div", { className: "col-md-4 col-sm-4 col-xs-4", style: { paddingTop: "10%" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 323
          }
        }, _react2.default.createElement("div", { className: "row", __source: {
            fileName: _jsxFileName,
            lineNumber: 324
          }
        }, _react2.default.createElement("div", { className: "col-md-4 col-sm-2 col-xs-2", __source: {
            fileName: _jsxFileName,
            lineNumber: 325
          }
        }, _react2.default.createElement("img", { src: "static/assets/images/logo-1.jpg", className: "img-responsive", __source: {
            fileName: _jsxFileName,
            lineNumber: 326
          }
        })), _react2.default.createElement("div", { className: "col-md-6 col-sm-6 col-xs-6", __source: {
            fileName: _jsxFileName,
            lineNumber: 328
          }
        }, _react2.default.createElement("center", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 329
          }
        }, _react2.default.createElement("b", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 330
          }
        }, "Bank Alfalah Limited"), _react2.default.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 330
          }
        }), _react2.default.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 331
          }
        }, "Islamic Banking"), " ", _react2.default.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 331
          }
        }), _react2.default.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 332
          }
        }, "Latifabad Branch Block C"), " ", _react2.default.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 332
          }
        }), _react2.default.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 333
          }
        }, "Civic Center Unit No. 7"), " ", _react2.default.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 333
          }
        }), _react2.default.createElement("span", { style: { border: "3px dotted" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 334
          }
        }, "A/C No 5631-5000622021"))), _react2.default.createElement("div", { className: "col-md-2 col-sm-2 col-xs-2", __source: {
            fileName: _jsxFileName,
            lineNumber: 337
          }
        }, _react2.default.createElement("p", { style: { fontSize: "9px" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 338
          }
        }, "Bank Copy"))), _react2.default.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 341
          }
        }), _react2.default.createElement("div", { className: "row", __source: {
            fileName: _jsxFileName,
            lineNumber: 342
          }
        }, _react2.default.createElement("div", { className: "col-md-offset-2 col-sm-offset-2 col-md-10 col-sm-10 col-xs-10", __source: {
            fileName: _jsxFileName,
            lineNumber: 343
          }
        }, _react2.default.createElement("p", { style: { marginBottom: "0" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 344
          }
        }, _react2.default.createElement("b", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 344
          }
        }, _react2.default.createElement("u", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 344
          }
        }, "International Islamic University Islamabad Schools"))), _react2.default.createElement("center", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 345
          }
        }, _react2.default.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 345
          }
        }, "Latifabad Campus")))), _react2.default.createElement("div", { className: "row", __source: {
            fileName: _jsxFileName,
            lineNumber: 348
          }
        }, _react2.default.createElement("div", { className: "col-md-offset-2", __source: {
            fileName: _jsxFileName,
            lineNumber: 349
          }
        }, _react2.default.createElement("table", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 350
          }
        }, _react2.default.createElement("tbody", { key: "tablebody" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 352
          }
        }, _react2.default.createElement("tr", { key: "rollnorow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 353
          }
        }, _react2.default.createElement("td", { key: "rollnokey" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 354
          }
        }, "Roll No"), _react2.default.createElement("td", { className: "col-md-6 col-sm-6 col-xs-6", key: "rollnovalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 355
          }
        }, item.rollNo)), _react2.default.createElement("tr", { key: "feemonthrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 357
          }
        }, _react2.default.createElement("td", { key: "feemonthkey" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 358
          }
        }, "Fee Month"), _react2.default.createElement("td", { key: "feemonthvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 359
          }
        }, item.feeMonth)), _react2.default.createElement("tr", { key: "issuedaterow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 361
          }
        }, _react2.default.createElement("td", { key: "issuedatekey" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 362
          }
        }, "Issue Date"), _react2.default.createElement("td", { key: "issuedatevalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 363
          }
        }, item.issueDate)), _react2.default.createElement("tr", { key: "duedaterow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 365
          }
        }, _react2.default.createElement("td", { key: "duedatekey" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 366
          }
        }, "Due Date"), _react2.default.createElement("td", { key: "duedatevalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 367
          }
        }, item.dueDate)), _react2.default.createElement("tr", { key: "namerow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 369
          }
        }, _react2.default.createElement("td", { key: "namekey" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 370
          }
        }, "Name"), _react2.default.createElement("td", { key: "namevalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 371
          }
        }, item.fname)), _react2.default.createElement("tr", { key: "fathernamerow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 373
          }
        }, _react2.default.createElement("td", { key: "fathernamekey" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 374
          }
        }, "Father Name"), _react2.default.createElement("td", { key: "fathernamevalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 375
          }
        }, item.guardian)), _react2.default.createElement("tr", { key: "graderow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 377
          }
        }, _react2.default.createElement("td", { key: "gradekey" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 378
          }
        }, "Grade"), _react2.default.createElement("td", { key: "gradevalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 379
          }
        }, item.grade)))))), _react2.default.createElement("div", { className: "row", __source: {
            fileName: _jsxFileName,
            lineNumber: 386
          }
        }, _react2.default.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 387
          }
        }), _react2.default.createElement("center", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 388
          }
        }, _react2.default.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 388
          }
        }, "Challan Details")), _react2.default.createElement("span", { className: "col-md-offset-2", __source: {
            fileName: _jsxFileName,
            lineNumber: 389
          }
        }, "Description"), _react2.default.createElement("span", { className: "pull-right", __source: {
            fileName: _jsxFileName,
            lineNumber: 389
          }
        }, "Amount"), _react2.default.createElement("div", { className: "col-md-offset-2", style: { borderTop: "2px solid #000" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 390
          }
        }, _react2.default.createElement("table", { className: "col-md-12 col-sm-12 col-xs-12", __source: {
            fileName: _jsxFileName,
            lineNumber: 391
          }
        }, _react2.default.createElement("tbody", { key: "tablebody" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 393
          }
        }, _react2.default.createElement("tr", { key: "admissionfeesrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 394
          }
        }, _react2.default.createElement("td", { key: "admissionfees" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 395
          }
        }, "Admission Fee"), _react2.default.createElement("td", { className: "pull-right", key: "admissionfeesvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 396
          }
        }, item.admissionFee | 0)), _react2.default.createElement("tr", { key: "annualfeesrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 398
          }
        }, _react2.default.createElement("td", { key: "annualfees" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 399
          }
        }, "Annual Fee"), _react2.default.createElement("td", { className: "pull-right", key: "annualfeesvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 400
          }
        }, item.annualFee | 0)), _react2.default.createElement("tr", { key: "coursefeesrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 402
          }
        }, _react2.default.createElement("td", { key: "coursefees" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 403
          }
        }, "Course Fee"), _react2.default.createElement("td", { className: "pull-right", key: "coursefeesvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 404
          }
        }, item.course | 0)), _react2.default.createElement("tr", { key: "tuitionfeesrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 406
          }
        }, _react2.default.createElement("td", { key: "tuitionfees" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 407
          }
        }, "Tution Fee"), _react2.default.createElement("td", { className: "pull-right", key: "tuitionfeesvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 408
          }
        }, item.course | 0)), _react2.default.createElement("tr", { key: "arrrearsrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 410
          }
        }, _react2.default.createElement("td", { key: "arrears" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 411
          }
        }, "Arrears"), _react2.default.createElement("td", { className: "pull-right", key: "arrearsvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 412
          }
        }, item.arrears | 0)), _react2.default.createElement("tr", { key: "arrrearsrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 414
          }
        }, _react2.default.createElement("td", { key: "arrears" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 415
          }
        }, "Arrears"), _react2.default.createElement("td", { className: "pull-right", key: "arrearsvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 416
          }
        }, item.arrears | 0)), _react2.default.createElement("tr", { key: "duplicaterow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 418
          }
        }, _react2.default.createElement("td", { key: "duplicate" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 419
          }
        }, "Duplicate"), _react2.default.createElement("td", { className: "pull-right", key: "duplicatevalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 420
          }
        }, item.bDuplicateChallan | 'No')), _react2.default.createElement("tr", { key: "challanfeerow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 422
          }
        }, _react2.default.createElement("td", { key: "challanfee" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 423
          }
        }, "Challan"), _react2.default.createElement("td", { className: "pull-right", key: "challanfeevalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 424
          }
        }, item.amount | 0)), _react2.default.createElement("tr", { key: "reminderrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 426
          }
        }, _react2.default.createElement("td", { key: "reminder" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 427
          }
        }, "Reminder"), _react2.default.createElement("td", { className: "pull-right", key: "remindervalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 428
          }
        }, item.feeReminders | 0)), _react2.default.createElement("tr", { key: "photocopyrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 430
          }
        }, _react2.default.createElement("td", { key: "photocopy" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 431
          }
        }, "Photocopies"), _react2.default.createElement("td", { className: "pull-right", key: "photocopyvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 432
          }
        }, item.duplicateChallan | 0)))))), _react2.default.createElement("div", { className: "row", __source: {
            fileName: _jsxFileName,
            lineNumber: 439
          }
        }, _react2.default.createElement("div", { style: { borderTop: "2px solid #000" }, className: "col-md-offset-2", __source: {
            fileName: _jsxFileName,
            lineNumber: 440
          }
        }, _react2.default.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 441
          }
        }, "Total"), _react2.default.createElement("span", { className: "pull-right", __source: {
            fileName: _jsxFileName,
            lineNumber: 442
          }
        }, item.amount | 0 + item.admissionFee | 0 + item.arrears | 0 + item.annualFee | 0 + item.securityDeposite | 0 + item.course | 0 + item.duplicateChallan | 0))), _react2.default.createElement("div", { className: "row", __source: {
            fileName: _jsxFileName,
            lineNumber: 454
          }
        }, _react2.default.createElement("div", { className: "col-md-offset-2 col-md-5 col-sm-5 col-xs-5", style: {
            border: "1px solid #000",
            height: "100px",
            paddingTop: "20%"
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 455
          }
        }, _react2.default.createElement("center", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 460
          }
        }, _react2.default.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 460
          }
        }, "Stamp"))), _react2.default.createElement("div", { className: "pull-right col-md-3 col-sm-3 col-xs-3", style: {
            borderBottom: "1px solid #000",
            height: "80px",
            paddingTop: "20%"
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 462
          }
        }, _react2.default.createElement("center", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 467
          }
        }, _react2.default.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 467
          }
        }, "Signature"))))));
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
      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 486
        }
      }, _react2.default.createElement(_Head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 487
        }
      }), _react2.default.createElement("div", { className: "col-md-12 col-sm-12 col-xs-12", style: { backgroundColor: "#fff" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 488
        }
      }, _react2.default.createElement("div", { className: "container", __source: {
          fileName: _jsxFileName,
          lineNumber: 489
        }
      }, _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 490
        }
      }, this.renderChallanData()))));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;