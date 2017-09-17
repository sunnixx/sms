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

      // console.log("PRINT ALL CHALLAN");
      _axios2.default.get("/allstudents").then(function (res) {
        return _this3.setState({ data: res.data });
      });
    }
  }, {
    key: "renderChallanData",
    value: function renderChallanData() {
      return _react2.default.createElement("main", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement("div", { className: "col-md-4 col-sm-4 col-xs-4", __source: {
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
      }, this.state.data.map(function (item) {
        console.log(item);
        return _react2.default.createElement("tbody", { key: "tablebody" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        }, _react2.default.createElement("tr", { key: "rollnorow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          }
        }, _react2.default.createElement("td", { key: "rollnokey" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          }
        }, "Roll No"), _react2.default.createElement("td", { className: "col-md-6 col-sm-6 col-xs-6", key: "rollnovalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        }, item.rollNo)), _react2.default.createElement("tr", { key: "feemonthrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          }
        }, _react2.default.createElement("td", { key: "feemonthkey" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          }
        }, "Fee Month"), _react2.default.createElement("td", { key: "feemonthvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          }
        }, item.feeMonth)), _react2.default.createElement("tr", { key: "issuedaterow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        }, _react2.default.createElement("td", { key: "issuedatekey" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        }, "Issue Date"), _react2.default.createElement("td", { key: "issuedatevalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        }, item.issueDate)), _react2.default.createElement("tr", { key: "duedaterow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          }
        }, _react2.default.createElement("td", { key: "duedatekey" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          }
        }, "Due Date"), _react2.default.createElement("td", { key: "duedatevalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          }
        }, item.dueDate)), _react2.default.createElement("tr", { key: "namerow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          }
        }, _react2.default.createElement("td", { key: "namekey" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
        }, "Name"), _react2.default.createElement("td", { key: "namevalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          }
        }, item.fname)), _react2.default.createElement("tr", { key: "fathernamerow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          }
        }, _react2.default.createElement("td", { key: "fathernamekey" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          }
        }, "Father Name"), _react2.default.createElement("td", { key: "fathernamevalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          }
        }, item.guardian)), _react2.default.createElement("tr", { key: "graderow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          }
        }, _react2.default.createElement("td", { key: "gradekey" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          }
        }, "Grade"), _react2.default.createElement("td", { key: "gradevalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          }
        }, item.grade)));
      })))), _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }), _react2.default.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, "Challan Details")), _react2.default.createElement("span", { className: "col-md-offset-2", __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, "Description"), _react2.default.createElement("span", { className: "pull-right", __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, "Amount"), _react2.default.createElement("div", { className: "col-md-offset-2", style: { borderTop: "2px solid #000" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, _react2.default.createElement("table", { className: "col-md-12 col-sm-12 col-xs-12", __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, this.state.data.map(function (item) {
        return _react2.default.createElement("tbody", { key: "tablebody" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          }
        }, _react2.default.createElement("tr", { key: "admissionfeesrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          }
        }, _react2.default.createElement("td", { key: "admissionfees" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          }
        }, "Admission Fee"), _react2.default.createElement("td", { className: "pull-right", key: "admissionfeesvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          }
        }, item.admissionFee | 0)), _react2.default.createElement("tr", { key: "annualfeesrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          }
        }, _react2.default.createElement("td", { key: "annualfees" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          }
        }, "Annual Fee"), _react2.default.createElement("td", { className: "pull-right", key: "annualfeesvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          }
        }, item.annualFee | 0)), _react2.default.createElement("tr", { key: "coursefeesrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          }
        }, _react2.default.createElement("td", { key: "coursefees" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          }
        }, "Course Fee"), _react2.default.createElement("td", { className: "pull-right", key: "coursefeesvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          }
        }, item.course | 0)), _react2.default.createElement("tr", { key: "tuitionfeesrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          }
        }, _react2.default.createElement("td", { key: "tuitionfees" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          }
        }, "Tution Fee"), _react2.default.createElement("td", { className: "pull-right", key: "tuitionfeesvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          }
        }, item.course | 0)), _react2.default.createElement("tr", { key: "arrrearsrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          }
        }, _react2.default.createElement("td", { key: "arrears" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          }
        }, "Arrears"), _react2.default.createElement("td", { className: "pull-right", key: "arrearsvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          }
        }, item.arrears | 0)), _react2.default.createElement("tr", { key: "arrrearsrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          }
        }, _react2.default.createElement("td", { key: "arrears" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          }
        }, "Arrears"), _react2.default.createElement("td", { className: "pull-right", key: "arrearsvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          }
        }, item.arrears | 0)), _react2.default.createElement("tr", { key: "duplicaterow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          }
        }, _react2.default.createElement("td", { key: "duplicate" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          }
        }, "Duplicate"), _react2.default.createElement("td", { className: "pull-right", key: "duplicatevalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          }
        }, item.bDuplicateChallan | 'No')), _react2.default.createElement("tr", { key: "challanfeerow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          }
        }, _react2.default.createElement("td", { key: "challanfee" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          }
        }, "Challan"), _react2.default.createElement("td", { className: "pull-right", key: "challanfeevalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          }
        }, item.amount | 0)), _react2.default.createElement("tr", { key: "reminderrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          }
        }, _react2.default.createElement("td", { key: "reminder" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          }
        }, "Reminder"), _react2.default.createElement("td", { className: "pull-right", key: "remindervalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          }
        }, item.feeReminders | 0)), _react2.default.createElement("tr", { key: "photocopyrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          }
        }, _react2.default.createElement("td", { key: "photocopy" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          }
        }, "Photocopies"), _react2.default.createElement("td", { className: "pull-right", key: "photocopyvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 146
          }
        }, item.duplicateChallan | 0)));
      })))), _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, _react2.default.createElement("div", { style: { borderTop: "2px solid #000" }, className: "col-md-offset-2", __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, _react2.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, "Total"), _react2.default.createElement("span", { className: "pull-right", __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, this.state.data.map(function (item) {
        return item.amount | 0 + item.admissionFee | 0 + item.arrears | 0 + item.annualFee | 0 + item.securityDeposite | 0 + item.course | 0 + item.duplicateChallan | 0;
      })))), _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }, _react2.default.createElement("div", { className: "col-md-offset-2 col-md-5 col-sm-5 col-xs-5", style: {
          border: "1px solid #000",
          height: "100px",
          paddingTop: "20%"
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }, _react2.default.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }, _react2.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }, "Stamp"))), _react2.default.createElement("div", { className: "pull-right col-md-3 col-sm-3 col-xs-3", style: { borderBottom: "1px solid #000",
          height: "80px",
          paddingTop: "20%" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }, _react2.default.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }, _react2.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }, "Signature"))))), _react2.default.createElement("div", { className: "col-md-4 col-sm-4 col-xs-4", __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }, _react2.default.createElement("div", { className: "col-md-4 col-sm-2 col-xs-2", __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }, _react2.default.createElement("img", { src: "static/assets/images/logo-1.jpg", className: "img-responsive", __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      })), _react2.default.createElement("div", { className: "col-md-6 col-sm-6 col-xs-6", __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      }, _react2.default.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }, _react2.default.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }, "Bank Alfalah Limited"), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }), _react2.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }, "Islamic Banking"), " ", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }), _react2.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }, "Latifabad Branch Block C"), " ", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }), _react2.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }, "Civic Center Unit No. 7"), " ", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }), _react2.default.createElement("span", { style: { border: "3px dotted" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }, "A/C No 5631-5000622021"))), _react2.default.createElement("div", { className: "col-md-2 col-sm-2 col-xs-2", __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }, _react2.default.createElement("p", { style: { fontSize: "9px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      }, "Bank Copy"))), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        }
      }), _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }, _react2.default.createElement("div", { className: "col-md-offset-2 col-sm-offset-2 col-md-10 col-sm-10 col-xs-10", __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }, _react2.default.createElement("p", { style: { marginBottom: "0" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }, _react2.default.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }, _react2.default.createElement("u", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }, "International Islamic University Islamabad Schools"))), _react2.default.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }, _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }, "Latifabad Campus")))), _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        }
      }, _react2.default.createElement("div", { className: "col-md-offset-2", __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        }
      }, _react2.default.createElement("table", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        }
      }, this.state.data.map(function (item) {
        console.log(item);
        return _react2.default.createElement("tbody", { key: "tablebody" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 216
          }
        }, _react2.default.createElement("tr", { key: "rollnorow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 217
          }
        }, _react2.default.createElement("td", { key: "rollnokey" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 218
          }
        }, "Roll No"), _react2.default.createElement("td", { className: "col-md-6 col-sm-6 col-xs-6", key: "rollnovalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 219
          }
        }, item.rollNo)), _react2.default.createElement("tr", { key: "feemonthrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 221
          }
        }, _react2.default.createElement("td", { key: "feemonthkey" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 222
          }
        }, "Fee Month"), _react2.default.createElement("td", { key: "feemonthvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 223
          }
        }, item.feeMonth)), _react2.default.createElement("tr", { key: "issuedaterow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 225
          }
        }, _react2.default.createElement("td", { key: "issuedatekey" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 226
          }
        }, "Issue Date"), _react2.default.createElement("td", { key: "issuedatevalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 227
          }
        }, item.issueDate)), _react2.default.createElement("tr", { key: "duedaterow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 229
          }
        }, _react2.default.createElement("td", { key: "duedatekey" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 230
          }
        }, "Due Date"), _react2.default.createElement("td", { key: "duedatevalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 231
          }
        }, item.dueDate)), _react2.default.createElement("tr", { key: "namerow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 233
          }
        }, _react2.default.createElement("td", { key: "namekey" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 234
          }
        }, "Name"), _react2.default.createElement("td", { key: "namevalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 235
          }
        }, item.fname)), _react2.default.createElement("tr", { key: "fathernamerow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 237
          }
        }, _react2.default.createElement("td", { key: "fathernamekey" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 238
          }
        }, "Father Name"), _react2.default.createElement("td", { key: "fathernamevalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 239
          }
        }, item.guardian)), _react2.default.createElement("tr", { key: "graderow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 241
          }
        }, _react2.default.createElement("td", { key: "gradekey" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 242
          }
        }, "Grade"), _react2.default.createElement("td", { key: "gradevalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 243
          }
        }, item.grade)));
      })))), _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        }
      }, _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        }
      }), _react2.default.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        }
      }, _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        }
      }, "Challan Details")), _react2.default.createElement("span", { className: "col-md-offset-2", __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        }
      }, "Description"), _react2.default.createElement("span", { className: "pull-right", __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        }
      }, "Amount"), _react2.default.createElement("div", { className: "col-md-offset-2", style: { borderTop: "2px solid #000" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        }
      }, _react2.default.createElement("table", { className: "col-md-12 col-sm-12 col-xs-12", __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        }
      }, this.state.data.map(function (item) {
        return _react2.default.createElement("tbody", { key: "tablebody" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 259
          }
        }, _react2.default.createElement("tr", { key: "admissionfeesrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 260
          }
        }, _react2.default.createElement("td", { key: "admissionfees" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 261
          }
        }, "Admission Fee"), _react2.default.createElement("td", { className: "pull-right", key: "admissionfeesvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 262
          }
        }, item.admissionFee | 0)), _react2.default.createElement("tr", { key: "annualfeesrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 264
          }
        }, _react2.default.createElement("td", { key: "annualfees" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 265
          }
        }, "Annual Fee"), _react2.default.createElement("td", { className: "pull-right", key: "annualfeesvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 266
          }
        }, item.annualFee | 0)), _react2.default.createElement("tr", { key: "coursefeesrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 268
          }
        }, _react2.default.createElement("td", { key: "coursefees" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 269
          }
        }, "Course Fee"), _react2.default.createElement("td", { className: "pull-right", key: "coursefeesvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 270
          }
        }, item.course | 0)), _react2.default.createElement("tr", { key: "tuitionfeesrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 272
          }
        }, _react2.default.createElement("td", { key: "tuitionfees" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 273
          }
        }, "Tution Fee"), _react2.default.createElement("td", { className: "pull-right", key: "tuitionfeesvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 274
          }
        }, item.course | 0)), _react2.default.createElement("tr", { key: "arrrearsrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 276
          }
        }, _react2.default.createElement("td", { key: "arrears" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 277
          }
        }, "Arrears"), _react2.default.createElement("td", { className: "pull-right", key: "arrearsvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 278
          }
        }, item.arrears | 0)), _react2.default.createElement("tr", { key: "arrrearsrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 280
          }
        }, _react2.default.createElement("td", { key: "arrears" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 281
          }
        }, "Arrears"), _react2.default.createElement("td", { className: "pull-right", key: "arrearsvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 282
          }
        }, item.arrears | 0)), _react2.default.createElement("tr", { key: "duplicaterow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 284
          }
        }, _react2.default.createElement("td", { key: "duplicate" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 285
          }
        }, "Duplicate"), _react2.default.createElement("td", { className: "pull-right", key: "duplicatevalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 286
          }
        }, item.bDuplicateChallan | 'No')), _react2.default.createElement("tr", { key: "challanfeerow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 288
          }
        }, _react2.default.createElement("td", { key: "challanfee" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 289
          }
        }, "Challan"), _react2.default.createElement("td", { className: "pull-right", key: "challanfeevalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 290
          }
        }, item.amount | 0)), _react2.default.createElement("tr", { key: "reminderrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 292
          }
        }, _react2.default.createElement("td", { key: "reminder" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 293
          }
        }, "Reminder"), _react2.default.createElement("td", { className: "pull-right", key: "remindervalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 294
          }
        }, item.feeReminders | 0)), _react2.default.createElement("tr", { key: "photocopyrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 296
          }
        }, _react2.default.createElement("td", { key: "photocopy" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 297
          }
        }, "Photocopies"), _react2.default.createElement("td", { className: "pull-right", key: "photocopyvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 298
          }
        }, item.duplicateChallan | 0)));
      })))), _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        }
      }, _react2.default.createElement("div", { style: { borderTop: "2px solid #000" }, className: "col-md-offset-2", __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        }
      }, _react2.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        }
      }, "Total"), _react2.default.createElement("span", { className: "pull-right", __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        }
      }, this.state.data.map(function (item) {
        return item.amount | 0 + item.admissionFee | 0 + item.arrears | 0 + item.annualFee | 0 + item.securityDeposite | 0 + item.course | 0 + item.duplicateChallan | 0;
      })))), _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        }
      }, _react2.default.createElement("div", { className: "col-md-offset-2 col-md-5 col-sm-5 col-xs-5", style: {
          border: "1px solid #000",
          height: "100px",
          paddingTop: "20%"
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        }
      }, _react2.default.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        }
      }, _react2.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        }
      }, "Stamp"))), _react2.default.createElement("div", { className: "pull-right col-md-3 col-sm-3 col-xs-3", style: {
          borderBottom: "1px solid #000",
          height: "80px",
          paddingTop: "20%"
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        }
      }, _react2.default.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        }
      }, _react2.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        }
      }, "Signature"))))), _react2.default.createElement("div", { className: "col-md-4 col-sm-4 col-xs-4", __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        }
      }, _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        }
      }, _react2.default.createElement("div", { className: "col-md-4 col-sm-2 col-xs-2", __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        }
      }, _react2.default.createElement("img", { src: "static/assets/images/logo-1.jpg", className: "img-responsive", __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        }
      })), _react2.default.createElement("div", { className: "col-md-6 col-sm-6 col-xs-6", __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        }
      }, _react2.default.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        }
      }, _react2.default.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        }
      }, "Bank Alfalah Limited"), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        }
      }), _react2.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        }
      }, "Islamic Banking"), " ", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        }
      }), _react2.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        }
      }, "Latifabad Branch Block C"), " ", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        }
      }), _react2.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        }
      }, "Civic Center Unit No. 7"), " ", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        }
      }), _react2.default.createElement("span", { style: { border: "3px dotted" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        }
      }, "A/C No 5631-5000622021"))), _react2.default.createElement("div", { className: "col-md-2 col-sm-2 col-xs-2", __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        }
      }, _react2.default.createElement("p", { style: { fontSize: "9px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        }
      }, "Bank Copy"))), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        }
      }), _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        }
      }, _react2.default.createElement("div", { className: "col-md-offset-2 col-sm-offset-2 col-md-10 col-sm-10 col-xs-10", __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        }
      }, _react2.default.createElement("p", { style: { marginBottom: "0" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        }
      }, _react2.default.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        }
      }, _react2.default.createElement("u", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        }
      }, "International Islamic University Islamabad Schools"))), _react2.default.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        }
      }, _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        }
      }, "Latifabad Campus")))), _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        }
      }, _react2.default.createElement("div", { className: "col-md-offset-2", __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        }
      }, _react2.default.createElement("table", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        }
      }, this.state.data.map(function (item) {
        console.log(item);
        return _react2.default.createElement("tbody", { key: "tablebody" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 370
          }
        }, _react2.default.createElement("tr", { key: "rollnorow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 371
          }
        }, _react2.default.createElement("td", { key: "rollnokey" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 372
          }
        }, "Roll No"), _react2.default.createElement("td", { className: "col-md-6 col-sm-6 col-xs-6", key: "rollnovalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 373
          }
        }, item.rollNo)), _react2.default.createElement("tr", { key: "feemonthrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 375
          }
        }, _react2.default.createElement("td", { key: "feemonthkey" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 376
          }
        }, "Fee Month"), _react2.default.createElement("td", { key: "feemonthvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 377
          }
        }, item.feeMonth)), _react2.default.createElement("tr", { key: "issuedaterow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 379
          }
        }, _react2.default.createElement("td", { key: "issuedatekey" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 380
          }
        }, "Issue Date"), _react2.default.createElement("td", { key: "issuedatevalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 381
          }
        }, item.issueDate)), _react2.default.createElement("tr", { key: "duedaterow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 383
          }
        }, _react2.default.createElement("td", { key: "duedatekey" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 384
          }
        }, "Due Date"), _react2.default.createElement("td", { key: "duedatevalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 385
          }
        }, item.dueDate)), _react2.default.createElement("tr", { key: "namerow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 387
          }
        }, _react2.default.createElement("td", { key: "namekey" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 388
          }
        }, "Name"), _react2.default.createElement("td", { key: "namevalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 389
          }
        }, item.fname)), _react2.default.createElement("tr", { key: "fathernamerow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 391
          }
        }, _react2.default.createElement("td", { key: "fathernamekey" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 392
          }
        }, "Father Name"), _react2.default.createElement("td", { key: "fathernamevalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 393
          }
        }, item.guardian)), _react2.default.createElement("tr", { key: "graderow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 395
          }
        }, _react2.default.createElement("td", { key: "gradekey" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 396
          }
        }, "Grade"), _react2.default.createElement("td", { key: "gradevalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 397
          }
        }, item.grade)));
      })))), _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 405
        }
      }, _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        }
      }), _react2.default.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        }
      }, _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        }
      }, "Challan Details")), _react2.default.createElement("span", { className: "col-md-offset-2", __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        }
      }, "Description"), _react2.default.createElement("span", { className: "pull-right", __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        }
      }, "Amount"), _react2.default.createElement("div", { className: "col-md-offset-2", style: { borderTop: "2px solid #000" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 409
        }
      }, _react2.default.createElement("table", { className: "col-md-12 col-sm-12 col-xs-12", __source: {
          fileName: _jsxFileName,
          lineNumber: 410
        }
      }, this.state.data.map(function (item) {
        return _react2.default.createElement("tbody", { key: "tablebody" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 413
          }
        }, _react2.default.createElement("tr", { key: "admissionfeesrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 414
          }
        }, _react2.default.createElement("td", { key: "admissionfees" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 415
          }
        }, "Admission Fee"), _react2.default.createElement("td", { className: "pull-right", key: "admissionfeesvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 416
          }
        }, item.admissionFee | 0)), _react2.default.createElement("tr", { key: "annualfeesrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 418
          }
        }, _react2.default.createElement("td", { key: "annualfees" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 419
          }
        }, "Annual Fee"), _react2.default.createElement("td", { className: "pull-right", key: "annualfeesvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 420
          }
        }, item.annualFee | 0)), _react2.default.createElement("tr", { key: "coursefeesrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 422
          }
        }, _react2.default.createElement("td", { key: "coursefees" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 423
          }
        }, "Course Fee"), _react2.default.createElement("td", { className: "pull-right", key: "coursefeesvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 424
          }
        }, item.course | 0)), _react2.default.createElement("tr", { key: "tuitionfeesrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 426
          }
        }, _react2.default.createElement("td", { key: "tuitionfees" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 427
          }
        }, "Tution Fee"), _react2.default.createElement("td", { className: "pull-right", key: "tuitionfeesvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 428
          }
        }, item.course | 0)), _react2.default.createElement("tr", { key: "arrrearsrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 430
          }
        }, _react2.default.createElement("td", { key: "arrears" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 431
          }
        }, "Arrears"), _react2.default.createElement("td", { className: "pull-right", key: "arrearsvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 432
          }
        }, item.arrears | 0)), _react2.default.createElement("tr", { key: "arrrearsrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 434
          }
        }, _react2.default.createElement("td", { key: "arrears" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 435
          }
        }, "Arrears"), _react2.default.createElement("td", { className: "pull-right", key: "arrearsvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 436
          }
        }, item.arrears | 0)), _react2.default.createElement("tr", { key: "duplicaterow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 438
          }
        }, _react2.default.createElement("td", { key: "duplicate" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 439
          }
        }, "Duplicate"), _react2.default.createElement("td", { className: "pull-right", key: "duplicatevalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 440
          }
        }, item.bDuplicateChallan | 'No')), _react2.default.createElement("tr", { key: "challanfeerow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 442
          }
        }, _react2.default.createElement("td", { key: "challanfee" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 443
          }
        }, "Challan"), _react2.default.createElement("td", { className: "pull-right", key: "challanfeevalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 444
          }
        }, item.amount | 0)), _react2.default.createElement("tr", { key: "reminderrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 446
          }
        }, _react2.default.createElement("td", { key: "reminder" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 447
          }
        }, "Reminder"), _react2.default.createElement("td", { className: "pull-right", key: "remindervalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 448
          }
        }, item.feeReminders | 0)), _react2.default.createElement("tr", { key: "photocopyrow" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 450
          }
        }, _react2.default.createElement("td", { key: "photocopy" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 451
          }
        }, "Photocopies"), _react2.default.createElement("td", { className: "pull-right", key: "photocopyvalue" + item._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 452
          }
        }, item.duplicateChallan | 0)));
      })))), _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 460
        }
      }, _react2.default.createElement("div", { style: { borderTop: "2px solid #000" }, className: "col-md-offset-2", __source: {
          fileName: _jsxFileName,
          lineNumber: 461
        }
      }, _react2.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 462
        }
      }, "Total"), _react2.default.createElement("span", { className: "pull-right", __source: {
          fileName: _jsxFileName,
          lineNumber: 463
        }
      }, this.state.data.map(function (item) {
        return item.amount | 0 + item.admissionFee | 0 + item.arrears | 0 + item.annualFee | 0 + item.securityDeposite | 0 + item.course | 0 + item.duplicateChallan | 0;
      })))), _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 476
        }
      }, _react2.default.createElement("div", { className: "col-md-offset-2 col-md-5 col-sm-5 col-xs-5", style: {
          border: "1px solid #000",
          height: "100px",
          paddingTop: "20%"
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 477
        }
      }, _react2.default.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 482
        }
      }, _react2.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 482
        }
      }, "Stamp"))), _react2.default.createElement("div", { className: "pull-right col-md-3 col-sm-3 col-xs-3", style: {
          borderBottom: "1px solid #000",
          height: "80px",
          paddingTop: "20%"
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 484
        }
      }, _react2.default.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 489
        }
      }, _react2.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 489
        }
      }, "Signature"))))));
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
          lineNumber: 507
        }
      }, _react2.default.createElement(_Head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 508
        }
      }), _react2.default.createElement("div", { className: "col-md-12 col-sm-12 col-xs-12", style: { backgroundColor: "#fff" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 509
        }
      }, _react2.default.createElement("div", { className: "container", __source: {
          fileName: _jsxFileName,
          lineNumber: 510
        }
      }, _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 511
        }
      }, this.renderChallanData()))));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;