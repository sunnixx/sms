
          window.__NEXT_REGISTER_PAGE('/generatechallan', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 561:
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

var _Head = __webpack_require__(582);

var _Head2 = _interopRequireDefault(_Head);

var _style = __webpack_require__(583);

var _style2 = _interopRequireDefault(_style);

var _axios = __webpack_require__(562);

var _axios2 = _interopRequireDefault(_axios);

var _lodash = __webpack_require__(581);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/sumair/MEAN STACK/My Work/sms/pages/generatechallan.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/sumair/MEAN STACK/My Work/sms/pages/generatechallan.js"); } } })();
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
    })(module.exports.default || module.exports, "/generatechallan")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 582:
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

/***/ 583:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  stampbox: {
    height: '100px',
    border: '1px solid black'
  },
  stamp: {
    marginTop: '80px',
    textAlign: 'center'
  },
  signatureBox: {
    marginTop: '80px',
    textAlign: 'center',
    borderTop: 'thin double #000000'
  },
  toCenter: {
    textAlign: 'center',
    paddingTop: '10px',
    paddingLeft: '0px',
    marginLeft: '5px',
    fontSize: '13px'
  },
  image: {
    height: '80px',
    width: '80px',
    paddingTop: '10px',
    paddingLeft: '0px',
    marginLeft: '0px'
  },
  nopadding: {
    paddingLeft: '0px',
    paddingRight: '0px',
    marginLeft: '0px',
    marginRight: '0px'
  },
  font: {
    textAlign: 'center',
    paddingTop: '10px',
    paddingLeft: '0px',
    paddingRight: '0px',
    marginLeft: '0px',
    marginRight: '0px',
    fontSize: '11px'
  },
  span1: {
    fontWeight: 'bold',
    textDecoration: 'underline'
  },
  span2: {
    borderStyle: 'dotted'
  },
  borderRemove: {
    margin: '0px',
    border: '1px solid black'
  }
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/sumair/MEAN STACK/My Work/sms/components/stylesheets/style.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/sumair/MEAN STACK/My Work/sms/components/stylesheets/style.js"); } } })();

/***/ }),

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(561);


/***/ })

},[584]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9nZW5lcmF0ZWNoYWxsYW4uanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9nZW5lcmF0ZWNoYWxsYW4uanM/YWMyZGY0ZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWQuanM/YWMyZGY0ZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0eWxlc2hlZXRzL3N0eWxlLmpzP2FjMmRmNGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgSGVhZCBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkXCJcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9zdHlsZXNoZWV0cy9zdHlsZS5qc1wiXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGRhdGE6IFtdIH1cbiAgICAvLyB0aGlzLnByb3BzID0ge3JvbGxObzonJ31cblxuICAgIHRoaXMuZ2V0Q2hhbGxhbkRhdGEgPSB0aGlzLmdldENoYWxsYW5EYXRhLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZW5kZXJDaGFsbGFuRGF0YSA9IHRoaXMucmVuZGVyQ2hhbGxhbkRhdGEuYmluZCh0aGlzKTtcbiAgICB0aGlzLnByaW50QWxsQ2hhbGxhbiA9IHRoaXMucHJpbnRBbGxDaGFsbGFuLmJpbmQodGhpcyk7XG4gIH1cblxuICBnZXRDaGFsbGFuRGF0YSgpIHtcbiAgICBheGlvcy5nZXQoXCIvU2VuZF9DaGFsbGFuRGF0YT9yb2xsTm89XCIgKyB0aGlzLnByb3BzLnVybC5xdWVyeS5yb2xsTm8pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogcmVzcG9uc2UuZGF0YSB9KVxuICAgIH0pXG4gIH1cblxuICBwcmludEFsbENoYWxsYW4oKXtcbiAgICBheGlvcy5nZXQoXCIvYWxsc3R1ZGVudHNcIikudGhlbihyZXM9PnRoaXMuc2V0U3RhdGUoe2RhdGE6cmVzLmRhdGF9KSk7XG4gIH1cblxuICByZW5kZXJDaGFsbGFuRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5kYXRhLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgcmV0dXJuKFxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IGNvbC1zbS00IGNvbC14cy00XCIgc3R5bGU9e3twYWRkaW5nVG9wOlwiMTAlXCJ9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgY29sLXNtLTIgY29sLXhzLTJcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cInN0YXRpYy9hc3NldHMvaW1hZ2VzL2xvZ28tMS5qcGdcIiBjbGFzc05hbWU9XCJpbWctcmVzcG9uc2l2ZVwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC1zbS02IGNvbC14cy02XCI+XG4gICAgICAgICAgICAgICAgPGNlbnRlcj5cbiAgICAgICAgICAgICAgICAgIDxiPkJhbmsgQWxmYWxhaCBMaW1pdGVkPC9iPjxiciAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+SXNsYW1pYyBCYW5raW5nPC9zcGFuPiA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPkxhdGlmYWJhZCBCcmFuY2ggQmxvY2sgQzwvc3Bhbj4gPGJyIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5DaXZpYyBDZW50ZXIgVW5pdCBOby4gNzwvc3Bhbj4gPGJyIC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBib3JkZXI6IFwiM3B4IGRvdHRlZFwiIH19PkEvQyBObyA1NjMxLTUwMDA2MjIwMjE8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9jZW50ZXI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0yIGNvbC1zbS0yIGNvbC14cy0yXCI+XG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6IFwiOXB4XCIgfX0+QmFuayBDb3B5PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC1vZmZzZXQtMiBjb2wtc20tb2Zmc2V0LTIgY29sLW1kLTEwIGNvbC1zbS0xMCBjb2wteHMtMTBcIj5cbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMFwiIH19PjxiPjx1PkludGVybmF0aW9uYWwgSXNsYW1pYyBVbml2ZXJzaXR5IElzbGFtYWJhZCBTY2hvb2xzPC91PjwvYj48L3A+XG4gICAgICAgICAgICAgICAgPGNlbnRlcj48cD5MYXRpZmFiYWQgQ2FtcHVzPC9wPjwvY2VudGVyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgICA8dGJvZHkga2V5PXtcInRhYmxlYm9keVwiICsgaXRlbS5faWR9PlxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtcInJvbGxub3Jvd1wiICsgaXRlbS5faWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e1wicm9sbG5va2V5XCIgKyBpdGVtLl9pZH0+Um9sbCBObzwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC1zbS02IGNvbC14cy02XCIga2V5PXtcInJvbGxub3ZhbHVlXCIgKyBpdGVtLl9pZH0+e2l0ZW0ucm9sbE5vfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e1wiZmVlbW9udGhyb3dcIiArIGl0ZW0uX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtcImZlZW1vbnRoa2V5XCIgKyBpdGVtLl9pZH0+RmVlIE1vbnRoPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtcImZlZW1vbnRodmFsdWVcIiArIGl0ZW0uX2lkfT57aXRlbS5mZWVNb250aH08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtcImlzc3VlZGF0ZXJvd1wiICsgaXRlbS5faWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e1wiaXNzdWVkYXRla2V5XCIgKyBpdGVtLl9pZH0+SXNzdWUgRGF0ZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17XCJpc3N1ZWRhdGV2YWx1ZVwiICsgaXRlbS5faWR9PntpdGVtLmlzc3VlRGF0ZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtcImR1ZWRhdGVyb3dcIiArIGl0ZW0uX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtcImR1ZWRhdGVrZXlcIiArIGl0ZW0uX2lkfT5EdWUgRGF0ZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17XCJkdWVkYXRldmFsdWVcIiArIGl0ZW0uX2lkfT57aXRlbS5kdWVEYXRlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e1wibmFtZXJvd1wiICsgaXRlbS5faWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e1wibmFtZWtleVwiICsgaXRlbS5faWR9Pk5hbWU8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e1wibmFtZXZhbHVlXCIgKyBpdGVtLl9pZH0+e2l0ZW0uZm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17XCJmYXRoZXJuYW1lcm93XCIgKyBpdGVtLl9pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17XCJmYXRoZXJuYW1la2V5XCIgKyBpdGVtLl9pZH0+RmF0aGVyIE5hbWU8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e1wiZmF0aGVybmFtZXZhbHVlXCIgKyBpdGVtLl9pZH0+e2l0ZW0uZ3VhcmRpYW59PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17XCJncmFkZXJvd1wiICsgaXRlbS5faWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e1wiZ3JhZGVrZXlcIiArIGl0ZW0uX2lkfT5HcmFkZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17XCJncmFkZXZhbHVlXCIgKyBpdGVtLl9pZH0+e2l0ZW0uZ3JhZGV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8Y2VudGVyPjxwPkNoYWxsYW4gRGV0YWlsczwvcD48L2NlbnRlcj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sLW1kLW9mZnNldC0yXCI+RGVzY3JpcHRpb248L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiPkFtb3VudDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtb2Zmc2V0LTJcIiBzdHlsZT17eyBib3JkZXJUb3A6IFwiMnB4IHNvbGlkICMwMDBcIiB9fT5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGNvbC1zbS0xMiBjb2wteHMtMTJcIj5cbiAgICAgICAgICAgICAgICAgIDx0Ym9keSBrZXk9e1widGFibGVib2R5XCIgKyBpdGVtLl9pZH0+XG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e1wiYWRtaXNzaW9uZmVlc3Jvd1wiICsgaXRlbS5faWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e1wiYWRtaXNzaW9uZmVlc1wiICsgaXRlbS5faWR9PkFkbWlzc2lvbiBGZWU8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCIga2V5PXtcImFkbWlzc2lvbmZlZXN2YWx1ZVwiICsgaXRlbS5faWR9PntpdGVtLmFkbWlzc2lvbkZlZSB8IDB9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17XCJhbm51YWxmZWVzcm93XCIgKyBpdGVtLl9pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17XCJhbm51YWxmZWVzXCIgKyBpdGVtLl9pZH0+QW5udWFsIEZlZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIiBrZXk9e1wiYW5udWFsZmVlc3ZhbHVlXCIgKyBpdGVtLl9pZH0+e2l0ZW0uYW5udWFsRmVlIHwgMH08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtcImNvdXJzZWZlZXNyb3dcIiArIGl0ZW0uX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtcImNvdXJzZWZlZXNcIiArIGl0ZW0uX2lkfT5Db3Vyc2UgRmVlPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiIGtleT17XCJjb3Vyc2VmZWVzdmFsdWVcIiArIGl0ZW0uX2lkfT57aXRlbS5jb3Vyc2UgfCAwfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e1widHVpdGlvbmZlZXNyb3dcIiArIGl0ZW0uX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtcInR1aXRpb25mZWVzXCIgKyBpdGVtLl9pZH0+VHV0aW9uIEZlZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIiBrZXk9e1widHVpdGlvbmZlZXN2YWx1ZVwiICsgaXRlbS5faWR9PntpdGVtLmNvdXJzZSB8IDB9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17XCJhcnJyZWFyc3Jvd1wiICsgaXRlbS5faWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e1wiYXJyZWFyc1wiICsgaXRlbS5faWR9PkFycmVhcnM8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCIga2V5PXtcImFycmVhcnN2YWx1ZVwiICsgaXRlbS5faWR9PntpdGVtLmFycmVhcnMgfCAwfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e1wiYXJycmVhcnNyb3dcIiArIGl0ZW0uX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtcImFycmVhcnNcIiArIGl0ZW0uX2lkfT5BcnJlYXJzPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiIGtleT17XCJhcnJlYXJzdmFsdWVcIiArIGl0ZW0uX2lkfT57aXRlbS5hcnJlYXJzIHwgMH08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtcImR1cGxpY2F0ZXJvd1wiICsgaXRlbS5faWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e1wiZHVwbGljYXRlXCIgKyBpdGVtLl9pZH0+RHVwbGljYXRlPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiIGtleT17XCJkdXBsaWNhdGV2YWx1ZVwiICsgaXRlbS5faWR9PntpdGVtLmJEdXBsaWNhdGVDaGFsbGFuIHwgJ05vJ308L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtcImNoYWxsYW5mZWVyb3dcIiArIGl0ZW0uX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtcImNoYWxsYW5mZWVcIiArIGl0ZW0uX2lkfT5DaGFsbGFuPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiIGtleT17XCJjaGFsbGFuZmVldmFsdWVcIiArIGl0ZW0uX2lkfT57aXRlbS5hbW91bnQgfCAwfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e1wicmVtaW5kZXJyb3dcIiArIGl0ZW0uX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtcInJlbWluZGVyXCIgKyBpdGVtLl9pZH0+UmVtaW5kZXI8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCIga2V5PXtcInJlbWluZGVydmFsdWVcIiArIGl0ZW0uX2lkfT57aXRlbS5mZWVSZW1pbmRlcnMgfCAwfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e1wicGhvdG9jb3B5cm93XCIgKyBpdGVtLl9pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17XCJwaG90b2NvcHlcIiArIGl0ZW0uX2lkfT5QaG90b2NvcGllczwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIiBrZXk9e1wicGhvdG9jb3B5dmFsdWVcIiArIGl0ZW0uX2lkfT57aXRlbS5kdXBsaWNhdGVDaGFsbGFuIHwgMH08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXJUb3A6IFwiMnB4IHNvbGlkICMwMDBcIiB9fSBjbGFzc05hbWU9XCJjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5Ub3RhbDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5hbW91bnQgfCAwICtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5hZG1pc3Npb25GZWUgfCAwICtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5hcnJlYXJzIHwgMCArXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uYW5udWFsRmVlIHwgMCArXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc2VjdXJpdHlEZXBvc2l0ZSB8IDAgK1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNvdXJzZSB8IDAgK1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmR1cGxpY2F0ZUNoYWxsYW4gfCAwfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLW9mZnNldC0yIGNvbC1tZC01IGNvbC1zbS01IGNvbC14cy01XCIgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICMwMDBcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwcHhcIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjIwJVwiXG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxjZW50ZXI+PHNwYW4+U3RhbXA8L3NwYW4+PC9jZW50ZXI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1bGwtcmlnaHQgY29sLW1kLTMgY29sLXNtLTMgY29sLXhzLTNcIiBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgIzAwMFwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCI4MHB4XCIsXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogXCIyMCVcIlxuICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8Y2VudGVyPjxzcGFuPlNpZ25hdHVyZTwvc3Bhbj48L2NlbnRlcj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IGNvbC1zbS00IGNvbC14cy00XCIgc3R5bGU9e3twYWRkaW5nVG9wOlwiMTAlXCJ9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgY29sLXNtLTIgY29sLXhzLTJcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cInN0YXRpYy9hc3NldHMvaW1hZ2VzL2xvZ28tMS5qcGdcIiBjbGFzc05hbWU9XCJpbWctcmVzcG9uc2l2ZVwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC1zbS02IGNvbC14cy02XCI+XG4gICAgICAgICAgICAgICAgPGNlbnRlcj5cbiAgICAgICAgICAgICAgICAgIDxiPkJhbmsgQWxmYWxhaCBMaW1pdGVkPC9iPjxiciAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+SXNsYW1pYyBCYW5raW5nPC9zcGFuPiA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPkxhdGlmYWJhZCBCcmFuY2ggQmxvY2sgQzwvc3Bhbj4gPGJyIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5DaXZpYyBDZW50ZXIgVW5pdCBOby4gNzwvc3Bhbj4gPGJyIC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBib3JkZXI6IFwiM3B4IGRvdHRlZFwiIH19PkEvQyBObyA1NjMxLTUwMDA2MjIwMjE8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9jZW50ZXI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0yIGNvbC1zbS0yIGNvbC14cy0yXCI+XG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6IFwiOXB4XCIgfX0+QmFuayBDb3B5PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC1vZmZzZXQtMiBjb2wtc20tb2Zmc2V0LTIgY29sLW1kLTEwIGNvbC1zbS0xMCBjb2wteHMtMTBcIj5cbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMFwiIH19PjxiPjx1PkludGVybmF0aW9uYWwgSXNsYW1pYyBVbml2ZXJzaXR5IElzbGFtYWJhZCBTY2hvb2xzPC91PjwvYj48L3A+XG4gICAgICAgICAgICAgICAgPGNlbnRlcj48cD5MYXRpZmFiYWQgQ2FtcHVzPC9wPjwvY2VudGVyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgICA8dGJvZHkga2V5PXtcInRhYmxlYm9keVwiICsgaXRlbS5faWR9PlxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtcInJvbGxub3Jvd1wiICsgaXRlbS5faWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e1wicm9sbG5va2V5XCIgKyBpdGVtLl9pZH0+Um9sbCBObzwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC1zbS02IGNvbC14cy02XCIga2V5PXtcInJvbGxub3ZhbHVlXCIgKyBpdGVtLl9pZH0+e2l0ZW0ucm9sbE5vfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e1wiZmVlbW9udGhyb3dcIiArIGl0ZW0uX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtcImZlZW1vbnRoa2V5XCIgKyBpdGVtLl9pZH0+RmVlIE1vbnRoPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtcImZlZW1vbnRodmFsdWVcIiArIGl0ZW0uX2lkfT57aXRlbS5mZWVNb250aH08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtcImlzc3VlZGF0ZXJvd1wiICsgaXRlbS5faWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e1wiaXNzdWVkYXRla2V5XCIgKyBpdGVtLl9pZH0+SXNzdWUgRGF0ZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17XCJpc3N1ZWRhdGV2YWx1ZVwiICsgaXRlbS5faWR9PntpdGVtLmlzc3VlRGF0ZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtcImR1ZWRhdGVyb3dcIiArIGl0ZW0uX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtcImR1ZWRhdGVrZXlcIiArIGl0ZW0uX2lkfT5EdWUgRGF0ZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17XCJkdWVkYXRldmFsdWVcIiArIGl0ZW0uX2lkfT57aXRlbS5kdWVEYXRlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e1wibmFtZXJvd1wiICsgaXRlbS5faWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e1wibmFtZWtleVwiICsgaXRlbS5faWR9Pk5hbWU8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e1wibmFtZXZhbHVlXCIgKyBpdGVtLl9pZH0+e2l0ZW0uZm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17XCJmYXRoZXJuYW1lcm93XCIgKyBpdGVtLl9pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17XCJmYXRoZXJuYW1la2V5XCIgKyBpdGVtLl9pZH0+RmF0aGVyIE5hbWU8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e1wiZmF0aGVybmFtZXZhbHVlXCIgKyBpdGVtLl9pZH0+e2l0ZW0uZ3VhcmRpYW59PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17XCJncmFkZXJvd1wiICsgaXRlbS5faWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e1wiZ3JhZGVrZXlcIiArIGl0ZW0uX2lkfT5HcmFkZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17XCJncmFkZXZhbHVlXCIgKyBpdGVtLl9pZH0+e2l0ZW0uZ3JhZGV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxjZW50ZXI+PHA+Q2hhbGxhbiBEZXRhaWxzPC9wPjwvY2VudGVyPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2wtbWQtb2Zmc2V0LTJcIj5EZXNjcmlwdGlvbjwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCI+QW1vdW50PC9zcGFuPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC1vZmZzZXQtMlwiIHN0eWxlPXt7IGJvcmRlclRvcDogXCIycHggc29saWQgIzAwMFwiIH19PlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJjb2wtbWQtMTIgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxuXG4gICAgICAgICAgICAgICAgICA8dGJvZHkga2V5PXtcInRhYmxlYm9keVwiICsgaXRlbS5faWR9PlxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtcImFkbWlzc2lvbmZlZXNyb3dcIiArIGl0ZW0uX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtcImFkbWlzc2lvbmZlZXNcIiArIGl0ZW0uX2lkfT5BZG1pc3Npb24gRmVlPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiIGtleT17XCJhZG1pc3Npb25mZWVzdmFsdWVcIiArIGl0ZW0uX2lkfT57aXRlbS5hZG1pc3Npb25GZWUgfCAwfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e1wiYW5udWFsZmVlc3Jvd1wiICsgaXRlbS5faWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e1wiYW5udWFsZmVlc1wiICsgaXRlbS5faWR9PkFubnVhbCBGZWU8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCIga2V5PXtcImFubnVhbGZlZXN2YWx1ZVwiICsgaXRlbS5faWR9PntpdGVtLmFubnVhbEZlZSB8IDB9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17XCJjb3Vyc2VmZWVzcm93XCIgKyBpdGVtLl9pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17XCJjb3Vyc2VmZWVzXCIgKyBpdGVtLl9pZH0+Q291cnNlIEZlZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIiBrZXk9e1wiY291cnNlZmVlc3ZhbHVlXCIgKyBpdGVtLl9pZH0+e2l0ZW0uY291cnNlIHwgMH08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtcInR1aXRpb25mZWVzcm93XCIgKyBpdGVtLl9pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17XCJ0dWl0aW9uZmVlc1wiICsgaXRlbS5faWR9PlR1dGlvbiBGZWU8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCIga2V5PXtcInR1aXRpb25mZWVzdmFsdWVcIiArIGl0ZW0uX2lkfT57aXRlbS5jb3Vyc2UgfCAwfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e1wiYXJycmVhcnNyb3dcIiArIGl0ZW0uX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtcImFycmVhcnNcIiArIGl0ZW0uX2lkfT5BcnJlYXJzPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiIGtleT17XCJhcnJlYXJzdmFsdWVcIiArIGl0ZW0uX2lkfT57aXRlbS5hcnJlYXJzIHwgMH08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtcImFycnJlYXJzcm93XCIgKyBpdGVtLl9pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17XCJhcnJlYXJzXCIgKyBpdGVtLl9pZH0+QXJyZWFyczwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIiBrZXk9e1wiYXJyZWFyc3ZhbHVlXCIgKyBpdGVtLl9pZH0+e2l0ZW0uYXJyZWFycyB8IDB9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17XCJkdXBsaWNhdGVyb3dcIiArIGl0ZW0uX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtcImR1cGxpY2F0ZVwiICsgaXRlbS5faWR9PkR1cGxpY2F0ZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIiBrZXk9e1wiZHVwbGljYXRldmFsdWVcIiArIGl0ZW0uX2lkfT57aXRlbS5iRHVwbGljYXRlQ2hhbGxhbiB8ICdObyd9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17XCJjaGFsbGFuZmVlcm93XCIgKyBpdGVtLl9pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17XCJjaGFsbGFuZmVlXCIgKyBpdGVtLl9pZH0+Q2hhbGxhbjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIiBrZXk9e1wiY2hhbGxhbmZlZXZhbHVlXCIgKyBpdGVtLl9pZH0+e2l0ZW0uYW1vdW50IHwgMH08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtcInJlbWluZGVycm93XCIgKyBpdGVtLl9pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17XCJyZW1pbmRlclwiICsgaXRlbS5faWR9PlJlbWluZGVyPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiIGtleT17XCJyZW1pbmRlcnZhbHVlXCIgKyBpdGVtLl9pZH0+e2l0ZW0uZmVlUmVtaW5kZXJzIHwgMH08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtcInBob3RvY29weXJvd1wiICsgaXRlbS5faWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e1wicGhvdG9jb3B5XCIgKyBpdGVtLl9pZH0+UGhvdG9jb3BpZXM8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCIga2V5PXtcInBob3RvY29weXZhbHVlXCIgKyBpdGVtLl9pZH0+e2l0ZW0uZHVwbGljYXRlQ2hhbGxhbiB8IDB9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXJUb3A6IFwiMnB4IHNvbGlkICMwMDBcIiB9fSBjbGFzc05hbWU9XCJjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5Ub3RhbDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5hbW91bnQgfCAwICtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5hZG1pc3Npb25GZWUgfCAwICtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5hcnJlYXJzIHwgMCArXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uYW5udWFsRmVlIHwgMCArXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc2VjdXJpdHlEZXBvc2l0ZSB8IDAgK1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNvdXJzZSB8IDAgK1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmR1cGxpY2F0ZUNoYWxsYW4gfCAwXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtb2Zmc2V0LTIgY29sLW1kLTUgY29sLXNtLTUgY29sLXhzLTVcIiBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgIzAwMFwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDBweFwiLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiMjAlXCJcbiAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPGNlbnRlcj48c3Bhbj5TdGFtcDwvc3Bhbj48L2NlbnRlcj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVsbC1yaWdodCBjb2wtbWQtMyBjb2wtc20tMyBjb2wteHMtM1wiIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCAjMDAwXCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjgwcHhcIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjIwJVwiXG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxjZW50ZXI+PHNwYW4+U2lnbmF0dXJlPC9zcGFuPjwvY2VudGVyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgY29sLXNtLTQgY29sLXhzLTRcIiBzdHlsZT17e3BhZGRpbmdUb3A6XCIxMCVcIn19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBjb2wtc20tMiBjb2wteHMtMlwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwic3RhdGljL2Fzc2V0cy9pbWFnZXMvbG9nby0xLmpwZ1wiIGNsYXNzTmFtZT1cImltZy1yZXNwb25zaXZlXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLXNtLTYgY29sLXhzLTZcIj5cbiAgICAgICAgICAgICAgICA8Y2VudGVyPlxuICAgICAgICAgICAgICAgICAgPGI+QmFuayBBbGZhbGFoIExpbWl0ZWQ8L2I+PGJyIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5Jc2xhbWljIEJhbmtpbmc8L3NwYW4+IDxiciAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+TGF0aWZhYmFkIEJyYW5jaCBCbG9jayBDPC9zcGFuPiA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPkNpdmljIENlbnRlciBVbml0IE5vLiA3PC9zcGFuPiA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGJvcmRlcjogXCIzcHggZG90dGVkXCIgfX0+QS9DIE5vIDU2MzEtNTAwMDYyMjAyMTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2NlbnRlcj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTIgY29sLXNtLTIgY29sLXhzLTJcIj5cbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogXCI5cHhcIiB9fT5CYW5rIENvcHk8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLW9mZnNldC0yIGNvbC1zbS1vZmZzZXQtMiBjb2wtbWQtMTAgY29sLXNtLTEwIGNvbC14cy0xMFwiPlxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIwXCIgfX0+PGI+PHU+SW50ZXJuYXRpb25hbCBJc2xhbWljIFVuaXZlcnNpdHkgSXNsYW1hYmFkIFNjaG9vbHM8L3U+PC9iPjwvcD5cbiAgICAgICAgICAgICAgICA8Y2VudGVyPjxwPkxhdGlmYWJhZCBDYW1wdXM8L3A+PC9jZW50ZXI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICAgICAgICAgICAgIDx0YWJsZT5cblxuICAgICAgICAgICAgICAgICAgPHRib2R5IGtleT17XCJ0YWJsZWJvZHlcIiArIGl0ZW0uX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17XCJyb2xsbm9yb3dcIiArIGl0ZW0uX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtcInJvbGxub2tleVwiICsgaXRlbS5faWR9PlJvbGwgTm88L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjb2wtbWQtNiBjb2wtc20tNiBjb2wteHMtNlwiIGtleT17XCJyb2xsbm92YWx1ZVwiICsgaXRlbS5faWR9PntpdGVtLnJvbGxOb308L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtcImZlZW1vbnRocm93XCIgKyBpdGVtLl9pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17XCJmZWVtb250aGtleVwiICsgaXRlbS5faWR9PkZlZSBNb250aDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17XCJmZWVtb250aHZhbHVlXCIgKyBpdGVtLl9pZH0+e2l0ZW0uZmVlTW9udGh9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17XCJpc3N1ZWRhdGVyb3dcIiArIGl0ZW0uX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtcImlzc3VlZGF0ZWtleVwiICsgaXRlbS5faWR9Pklzc3VlIERhdGU8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e1wiaXNzdWVkYXRldmFsdWVcIiArIGl0ZW0uX2lkfT57aXRlbS5pc3N1ZURhdGV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17XCJkdWVkYXRlcm93XCIgKyBpdGVtLl9pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17XCJkdWVkYXRla2V5XCIgKyBpdGVtLl9pZH0+RHVlIERhdGU8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e1wiZHVlZGF0ZXZhbHVlXCIgKyBpdGVtLl9pZH0+e2l0ZW0uZHVlRGF0ZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtcIm5hbWVyb3dcIiArIGl0ZW0uX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtcIm5hbWVrZXlcIiArIGl0ZW0uX2lkfT5OYW1lPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtcIm5hbWV2YWx1ZVwiICsgaXRlbS5faWR9PntpdGVtLmZuYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e1wiZmF0aGVybmFtZXJvd1wiICsgaXRlbS5faWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e1wiZmF0aGVybmFtZWtleVwiICsgaXRlbS5faWR9PkZhdGhlciBOYW1lPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtcImZhdGhlcm5hbWV2YWx1ZVwiICsgaXRlbS5faWR9PntpdGVtLmd1YXJkaWFufTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e1wiZ3JhZGVyb3dcIiArIGl0ZW0uX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtcImdyYWRla2V5XCIgKyBpdGVtLl9pZH0+R3JhZGU8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e1wiZ3JhZGV2YWx1ZVwiICsgaXRlbS5faWR9PntpdGVtLmdyYWRlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8Y2VudGVyPjxwPkNoYWxsYW4gRGV0YWlsczwvcD48L2NlbnRlcj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sLW1kLW9mZnNldC0yXCI+RGVzY3JpcHRpb248L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiPkFtb3VudDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtb2Zmc2V0LTJcIiBzdHlsZT17eyBib3JkZXJUb3A6IFwiMnB4IHNvbGlkICMwMDBcIiB9fT5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGNvbC1zbS0xMiBjb2wteHMtMTJcIj5cblxuICAgICAgICAgICAgICAgICAgPHRib2R5IGtleT17XCJ0YWJsZWJvZHlcIiArIGl0ZW0uX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17XCJhZG1pc3Npb25mZWVzcm93XCIgKyBpdGVtLl9pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17XCJhZG1pc3Npb25mZWVzXCIgKyBpdGVtLl9pZH0+QWRtaXNzaW9uIEZlZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIiBrZXk9e1wiYWRtaXNzaW9uZmVlc3ZhbHVlXCIgKyBpdGVtLl9pZH0+e2l0ZW0uYWRtaXNzaW9uRmVlIHwgMH08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtcImFubnVhbGZlZXNyb3dcIiArIGl0ZW0uX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtcImFubnVhbGZlZXNcIiArIGl0ZW0uX2lkfT5Bbm51YWwgRmVlPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiIGtleT17XCJhbm51YWxmZWVzdmFsdWVcIiArIGl0ZW0uX2lkfT57aXRlbS5hbm51YWxGZWUgfCAwfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e1wiY291cnNlZmVlc3Jvd1wiICsgaXRlbS5faWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e1wiY291cnNlZmVlc1wiICsgaXRlbS5faWR9PkNvdXJzZSBGZWU8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCIga2V5PXtcImNvdXJzZWZlZXN2YWx1ZVwiICsgaXRlbS5faWR9PntpdGVtLmNvdXJzZSB8IDB9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17XCJ0dWl0aW9uZmVlc3Jvd1wiICsgaXRlbS5faWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e1widHVpdGlvbmZlZXNcIiArIGl0ZW0uX2lkfT5UdXRpb24gRmVlPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiIGtleT17XCJ0dWl0aW9uZmVlc3ZhbHVlXCIgKyBpdGVtLl9pZH0+e2l0ZW0uY291cnNlIHwgMH08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtcImFycnJlYXJzcm93XCIgKyBpdGVtLl9pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17XCJhcnJlYXJzXCIgKyBpdGVtLl9pZH0+QXJyZWFyczwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIiBrZXk9e1wiYXJyZWFyc3ZhbHVlXCIgKyBpdGVtLl9pZH0+e2l0ZW0uYXJyZWFycyB8IDB9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17XCJhcnJyZWFyc3Jvd1wiICsgaXRlbS5faWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e1wiYXJyZWFyc1wiICsgaXRlbS5faWR9PkFycmVhcnM8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCIga2V5PXtcImFycmVhcnN2YWx1ZVwiICsgaXRlbS5faWR9PntpdGVtLmFycmVhcnMgfCAwfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e1wiZHVwbGljYXRlcm93XCIgKyBpdGVtLl9pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17XCJkdXBsaWNhdGVcIiArIGl0ZW0uX2lkfT5EdXBsaWNhdGU8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCIga2V5PXtcImR1cGxpY2F0ZXZhbHVlXCIgKyBpdGVtLl9pZH0+e2l0ZW0uYkR1cGxpY2F0ZUNoYWxsYW4gfCAnTm8nfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e1wiY2hhbGxhbmZlZXJvd1wiICsgaXRlbS5faWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e1wiY2hhbGxhbmZlZVwiICsgaXRlbS5faWR9PkNoYWxsYW48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCIga2V5PXtcImNoYWxsYW5mZWV2YWx1ZVwiICsgaXRlbS5faWR9PntpdGVtLmFtb3VudCB8IDB9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17XCJyZW1pbmRlcnJvd1wiICsgaXRlbS5faWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e1wicmVtaW5kZXJcIiArIGl0ZW0uX2lkfT5SZW1pbmRlcjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIiBrZXk9e1wicmVtaW5kZXJ2YWx1ZVwiICsgaXRlbS5faWR9PntpdGVtLmZlZVJlbWluZGVycyB8IDB9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17XCJwaG90b2NvcHlyb3dcIiArIGl0ZW0uX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtcInBob3RvY29weVwiICsgaXRlbS5faWR9PlBob3RvY29waWVzPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiIGtleT17XCJwaG90b2NvcHl2YWx1ZVwiICsgaXRlbS5faWR9PntpdGVtLmR1cGxpY2F0ZUNoYWxsYW4gfCAwfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyVG9wOiBcIjJweCBzb2xpZCAjMDAwXCIgfX0gY2xhc3NOYW1lPVwiY29sLW1kLW9mZnNldC0yXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+VG90YWw8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAge2l0ZW0uYW1vdW50IHwgMCArXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uYWRtaXNzaW9uRmVlIHwgMCArXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uYXJyZWFycyB8IDAgK1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmFubnVhbEZlZSB8IDAgK1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnNlY3VyaXR5RGVwb3NpdGUgfCAwICtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jb3Vyc2UgfCAwICtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5kdXBsaWNhdGVDaGFsbGFuIHwgMFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLW9mZnNldC0yIGNvbC1tZC01IGNvbC1zbS01IGNvbC14cy01XCIgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICMwMDBcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwcHhcIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjIwJVwiXG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxjZW50ZXI+PHNwYW4+U3RhbXA8L3NwYW4+PC9jZW50ZXI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1bGwtcmlnaHQgY29sLW1kLTMgY29sLXNtLTMgY29sLXhzLTNcIiBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgIzAwMFwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCI4MHB4XCIsXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogXCIyMCVcIlxuICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8Y2VudGVyPjxzcGFuPlNpZ25hdHVyZTwvc3Bhbj48L2NlbnRlcj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tYWluPlxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZih0aGlzLnByb3BzLnVybC5xdWVyeS5yb2xsTm8gPT09IFwicHJpbnRhbGxcIil7XG4gICAgICB0aGlzLnByaW50QWxsQ2hhbGxhbigpO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5nZXRDaGFsbGFuRGF0YSgpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWQgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgY29sLXNtLTEyIGNvbC14cy0xMlwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiI2ZmZlwifX0gID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnID5cbiAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ2hhbGxhbkRhdGEoKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9nZW5lcmF0ZWNoYWxsYW4uanM/ZW50cnkiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICByZW5kZXIoKXtcbiAgICByZXR1cm4oXG4gICAgICA8SGVhZD5cbiAgICAgICAgICA8bWV0YSBjaGFyc2V0PVwidXRmLThcIiAgLz5cbiAgICAgICAgXHQ8bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxuICAgICAgICBcdDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIFx0PHRpdGxlPkludGVybmF0aW9uYWwgSXNsYW1pYyBVbml2ZXJzaXR5IElzbGFtYWJhZCAtIExhdGlmYWJhZCBDYW1wdXM8L3RpdGxlPlxuXG4gICAgICAgIFx0PGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDMwMCwxMDAsNTAwLDcwMCw5MDBcIiByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgLz5cbiAgICAgICAgXHQ8bGluayBocmVmPVwic3RhdGljL2Fzc2V0cy9jc3MvaWNvbnMvaWNvbW9vbi9zdHlsZXMuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIC8+XG4gICAgICAgIFx0PGxpbmsgaHJlZj1cInN0YXRpYy9hc3NldHMvY3NzL2Jvb3RzdHJhcC5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgLz5cbiAgICAgICAgXHQ8bGluayBocmVmPVwic3RhdGljL2Fzc2V0cy9jc3MvY29yZS5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgLz5cbiAgICAgICAgXHQ8bGluayBocmVmPVwic3RhdGljL2Fzc2V0cy9jc3MvY29tcG9uZW50cy5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgLz5cbiAgICAgICAgXHQ8bGluayBocmVmPVwic3RhdGljL2Fzc2V0cy9jc3MvY29sb3JzLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiAvPlxuXG4gICAgICAgIFx0PHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwic3RhdGljL2Fzc2V0cy9qcy9wbHVnaW5zL2xvYWRlcnMvcGFjZS5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgICAgXHQ8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJzdGF0aWMvYXNzZXRzL2pzL2NvcmUvbGlicmFyaWVzL2pxdWVyeS5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgICAgXHQ8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJzdGF0aWMvYXNzZXRzL2pzL2NvcmUvbGlicmFyaWVzL2Jvb3RzdHJhcC5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgICAgXHQ8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJzdGF0aWMvYXNzZXRzL2pzL3BsdWdpbnMvbG9hZGVycy9ibG9ja3VpLm1pbi5qc1wiPjwvc2NyaXB0PlxuXG5cdFx0XHRcdFx0PHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwic3RhdGljL2Fzc2V0cy9qcy9wbHVnaW5zL3VwbG9hZGVycy9maWxlaW5wdXQubWluLmpzXCI+PC9zY3JpcHQ+XG5cdFx0XHRcdFx0PHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwic3RhdGljL2Fzc2V0cy9qcy9wbHVnaW5zL2Zvcm1zL3NlbGVjdHMvc2VsZWN0Mi5taW4uanNcIj48L3NjcmlwdD5cblxuICAgICAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cInN0YXRpYy9hc3NldHMvanMvY29yZS9hcHAuanNcIj48L3NjcmlwdD5cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJzdGF0aWMvYXNzZXRzL2pzL3BhZ2VzL3VwbG9hZGVyX2Jvb3RzdHJhcC5qc1wiPjwvc2NyaXB0PlxuXHRcdFx0XHRcdDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cInN0YXRpYy9hc3NldHMvanMvcGFnZXMvZm9ybV9zZWxlY3QyLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwic3RhdGljL2Fzc2V0cy9qcy9wbHVnaW5zL3VpL3JpcHBsZS5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgIDwvSGVhZD5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSGVhZC5qcyIsIm1vZHVsZS5leHBvcnRzPXtcbiAgc3RhbXBib3ggOiB7XG4gICAgaGVpZ2h0IDogJzEwMHB4JyxcbiAgICBib3JkZXIgOiAnMXB4IHNvbGlkIGJsYWNrJ1xuICB9LFxuICBzdGFtcDoge1xuICAgIG1hcmdpblRvcCA6ICc4MHB4JyxcbiAgICB0ZXh0QWxpZ24gOiAnY2VudGVyJ1xuICB9LFxuICBzaWduYXR1cmVCb3g6e1xuICAgIG1hcmdpblRvcDogJzgwcHgnLFxuICAgIHRleHRBbGlnbiA6J2NlbnRlcicsXG4gICAgYm9yZGVyVG9wOiAndGhpbiBkb3VibGUgIzAwMDAwMCdcbiAgfSxcbiAgdG9DZW50ZXI6IHtcbiAgICB0ZXh0QWxpZ246J2NlbnRlcicsXG4gICAgcGFkZGluZ1RvcDogJzEwcHgnLFxuICAgIHBhZGRpbmdMZWZ0OiAnMHB4JyxcbiAgICBtYXJnaW5MZWZ0OiAnNXB4JyxcbiAgICBmb250U2l6ZTogJzEzcHgnXG4gIH0sXG4gIGltYWdlIDp7XG4gICAgaGVpZ2h0OiAnODBweCcsXG4gICAgd2lkdGg6ICc4MHB4JyxcbiAgICBwYWRkaW5nVG9wOiAnMTBweCcsXG4gICAgcGFkZGluZ0xlZnQ6ICcwcHgnLFxuICAgIG1hcmdpbkxlZnQ6ICcwcHgnXG4gIH0sXG4gIG5vcGFkZGluZzp7XG4gICAgcGFkZGluZ0xlZnQ6JzBweCcsXG4gICAgcGFkZGluZ1JpZ2h0OicwcHgnLFxuICAgIG1hcmdpbkxlZnQ6ICcwcHgnLFxuICAgIG1hcmdpblJpZ2h0OicwcHgnLFxuICB9LFxuICBmb250OntcbiAgICB0ZXh0QWxpZ246J2NlbnRlcicsXG4gICAgcGFkZGluZ1RvcDogJzEwcHgnLFxuICAgIHBhZGRpbmdMZWZ0OiAnMHB4JyxcbiAgICBwYWRkaW5nUmlnaHQ6JzBweCcsXG4gICAgbWFyZ2luTGVmdDogJzBweCcsXG4gICAgbWFyZ2luUmlnaHQ6JzBweCcsXG4gICAgZm9udFNpemU6ICcxMXB4J1xuICB9LFxuICBzcGFuMTp7XG4gICAgZm9udFdlaWdodDonYm9sZCcsXG4gICAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnXG4gIH0sXG4gIHNwYW4yIDp7XG4gICAgYm9yZGVyU3R5bGU6ICdkb3R0ZWQnXG4gIH0sXG4gIGJvcmRlclJlbW92ZTp7XG4gICAgbWFyZ2luOiAnMHB4JyxcbiAgICBib3JkZXI6ICcxcHggc29saWQgYmxhY2snXG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3N0eWxlc2hlZXRzL3N0eWxlLmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7Ozs7QUFHQTtBQUFBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFVQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUZBO0FBREE7QUFLQTtBQUxBO0FBS0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQUE7QUFGQTtBQURBO0FBS0E7QUFMQTtBQUtBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBV0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFGQTtBQURBO0FBS0E7QUFMQTtBQUtBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUFBO0FBRkE7QUFEQTtBQUtBO0FBTEE7QUFLQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBRUE7QUFGQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQVdBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRkE7QUFEQTtBQUtBO0FBTEE7QUFLQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFBQTtBQUZBO0FBREE7QUFLQTtBQUxBO0FBS0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTs7OztBQUdBO0FBQUE7QUFFQTtBQUZBO0FBSUE7QUFDQTs7OztBQUdBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBT0E7Ozs7O0FBemVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBR0E7QUFIQTs7Ozs7O0FBNUJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNKQTs7QUFHQTtBQUVBO0FBSEE7O0FBS0E7QUFFQTtBQUhBOztBQUtBO0FBQ0E7QUFFQTtBQUpBOztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFOQTs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTkE7O0FBUUE7QUFDQTtBQUNBO0FBRUE7QUFMQTs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVJBOztBQVVBO0FBRUE7QUFIQTs7QUFNQTtBQUZBOztBQUlBO0FBQUE7QUFEQTtBQWxEQTtBQUNBOzs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        