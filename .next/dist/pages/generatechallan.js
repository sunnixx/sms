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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

<<<<<<< HEAD
var _jsxFileName = "/home/sumair/Desktop/MEAN STACK/My Work/sms-master/pages/generatechallan.js?entry";
=======
var _jsxFileName = "C:\\Users\\Dell\\Desktop\\sms\\pages\\generatechallan.js?entry";
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class(props) {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

    _this.state = { data: [] };
<<<<<<< HEAD
    // this.props = {rollNo:''}
=======
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85

    _this.getChallanData = _this.getChallanData.bind(_this);
    _this.renderChallanData = _this.renderChallanData.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: "getChallanData",
    value: function getChallanData() {
      var _this2 = this;

<<<<<<< HEAD
      _axios2.default.get("/Send_ChallanData?rollNo=" + this.props.url.query.rollNo).then(function (response) {
        _this2.setState({ data: response.data });
        // console.log(this.props.url.query.rollNo);
=======
      _axios2.default.get('/Send_ChallanData').then(function (response) {
        _this2.setState({ data: response.data });
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
      });
    }
  }, {
    key: "renderChallanData",
    value: function renderChallanData() {
      return this.state.data.map(function (element) {
        return _react2.default.createElement("main", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 27
          }
        }, _react2.default.createElement("div", { key: element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        }, _react2.default.createElement("div", { key: element._id + 'col-xs-12', className: "col-xs-12", __source: {
            fileName: _jsxFileName,
            lineNumber: 30
=======
            lineNumber: 25
          }
        }, _react2.default.createElement("div", { key: element.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        }, _react2.default.createElement("div", { className: "col-xs-12", __source: {
            fileName: _jsxFileName,
            lineNumber: 28
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, _react2.default.createElement("table", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 31
=======
            lineNumber: 29
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, _react2.default.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 32
=======
            lineNumber: 30
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 33
          }
        }, _react2.default.createElement("td", { style: { width: '140px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }, "Issue Date"), _react2.default.createElement("td", { key: "Issue" + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 35
=======
            lineNumber: 31
          }
        }, _react2.default.createElement("td", { style: { width: '140' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }, "Issue Date"), _react2.default.createElement("td", { key: "Issue" + element.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 33
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, element.issueDate)), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 37
=======
            lineNumber: 35
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 38
          }
        }, "Fee for Month Of"), _react2.default.createElement("td", { key: "FeeMonth" + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 39
=======
            lineNumber: 36
          }
        }, "Fee for Month Of"), _react2.default.createElement("td", { key: "FeeMonth" + element.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 37
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, element.feeMonth)), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 41
=======
            lineNumber: 39
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 42
          }
        }, "DueDate *"), _react2.default.createElement("td", { key: "Duedate" + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }, element.dueDate))))), _react2.default.createElement("div", { className: "col-xs-12", __source: {
            fileName: _jsxFileName,
            lineNumber: 50
=======
            lineNumber: 40
          }
        }, "DueDate *"), _react2.default.createElement("td", { key: "Duedate" + element.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }, element.dueDate))))), _react2.default.createElement("div", { className: "col-xs-12", __source: {
            fileName: _jsxFileName,
            lineNumber: 48
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, _react2.default.createElement("table", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 51
=======
            lineNumber: 49
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, _react2.default.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 52
=======
            lineNumber: 50
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 53
          }
        }, _react2.default.createElement("td", { style: { width: '140px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }, "Name"), _react2.default.createElement("td", { key: 'fstname' + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 55
=======
            lineNumber: 51
          }
        }, _react2.default.createElement("td", { style: { width: '140' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }, "Name"), _react2.default.createElement("td", { key: 'fstname' + element.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 53
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, element.fname)), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 57
=======
            lineNumber: 55
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 58
          }
        }, "Father Name"), _react2.default.createElement("td", { key: 'guard' + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }, element.guardian))))), _react2.default.createElement("div", { className: "col-xs-12", __source: {
            fileName: _jsxFileName,
            lineNumber: 65
=======
            lineNumber: 56
          }
        }, "Father Name"), _react2.default.createElement("td", { key: 'guard' + element.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }, element.guardian))))), _react2.default.createElement("div", { className: "col-xs-12", __source: {
            fileName: _jsxFileName,
            lineNumber: 63
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, _react2.default.createElement("table", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 66
=======
            lineNumber: 64
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, _react2.default.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 67
          }
        }, _react2.default.createElement("tr", { style: { height: '20px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          }
        }, _react2.default.createElement("td", { style: { width: '140px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          }
        }, "Grade"), _react2.default.createElement("td", { key: 'grd' + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 70
=======
            lineNumber: 65
          }
        }, _react2.default.createElement("tr", { style: { height: '20' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          }
        }, _react2.default.createElement("td", { style: { width: '140' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        }, "Grade"), _react2.default.createElement("td", { key: 'grd' + element.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 68
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, element.grade)), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 72
=======
            lineNumber: 70
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 73
          }
        }, "Roll #"), _react2.default.createElement("td", { style: { width: '40px' }, key: 'roll' + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        }, element.rollNo)))), _react2.default.createElement("div", { className: "col-xs-12", style: { marginTop: '3px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          }
        }, _react2.default.createElement("p", { style: { textAlign: 'center' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 79
=======
            lineNumber: 71
          }
        }, "Roll #"), _react2.default.createElement("td", { style: { width: '40' }, key: 'roll' + element.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        }, element.rollNo)))), _react2.default.createElement("div", { className: "col-xs-12", style: { marginTop: '3px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          }
        }, _react2.default.createElement("p", { style: { textAlign: 'center' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 77
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, "Challan details")), _react2.default.createElement("table", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 81
=======
            lineNumber: 79
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, _react2.default.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 82
          }
        }, _react2.default.createElement("tr", { style: { height: '10px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          }
        }, _react2.default.createElement("td", { style: { width: '300px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 84
=======
            lineNumber: 80
          }
        }, _react2.default.createElement("tr", { style: { height: '10' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          }
        }, _react2.default.createElement("td", { style: { width: '300' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 82
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, "Description"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 85
          }
        }, "Amount")), _react2.default.createElement("tr", { style: { borderTop: 'thin double #000000' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 87
=======
            lineNumber: 83
          }
        }, "Amount")), _react2.default.createElement("tr", { style: { borderTop: 'thin double #000000' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 85
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 88
=======
            lineNumber: 86
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, "Admission Fee"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 89
=======
            lineNumber: 87
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, "0")), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 91
=======
            lineNumber: 89
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 92
=======
            lineNumber: 90
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, "Annual Fee"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 93
=======
            lineNumber: 91
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, "0")), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 95
=======
            lineNumber: 93
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 96
=======
            lineNumber: 94
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, "Course"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 97
=======
            lineNumber: 95
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, "0")), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 99
=======
            lineNumber: 97
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 100
=======
            lineNumber: 98
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, "Tution Fee"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 101
=======
            lineNumber: 99
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, "0")), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 103
=======
            lineNumber: 101
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 104
=======
            lineNumber: 102
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, "Arreas"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 105
=======
            lineNumber: 103
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, "0")), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 107
=======
            lineNumber: 105
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 108
=======
            lineNumber: 106
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, "Duplicate"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 109
=======
            lineNumber: 107
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, "0")), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 111
=======
            lineNumber: 109
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 112
=======
            lineNumber: 110
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, "Challan"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 113
=======
            lineNumber: 111
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, "0")), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 115
=======
            lineNumber: 113
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 116
          }
        }, "Fee"), _react2.default.createElement("td", { key: 'fee' + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 117
=======
            lineNumber: 114
          }
        }, "Fee"), _react2.default.createElement("td", { key: 'fee' + element.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 115
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, element.amount)), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 119
=======
            lineNumber: 117
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 120
=======
            lineNumber: 118
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, "Reminder"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 121
=======
            lineNumber: 119
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, "0")), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 123
=======
            lineNumber: 121
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 124
=======
            lineNumber: 122
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, "Photocopies"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 125
          }
        }, "0")), _react2.default.createElement("tr", { style: { height: '20px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 127
=======
            lineNumber: 123
          }
        }, "0")), _react2.default.createElement("tr", { style: { height: '20' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 125
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 128
=======
            lineNumber: 126
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, "Others"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 129
          }
        }, "0")))))), _react2.default.createElement("div", { className: "col-xs-12", style: { borderTop: 'thin double #000000' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 137
=======
            lineNumber: 127
          }
        }, "0")))))), _react2.default.createElement("div", { className: "col-xs-12", style: { borderTop: 'thin double #000000' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 135
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, _react2.default.createElement("table", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 138
=======
            lineNumber: 136
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, _react2.default.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 139
          }
        }, _react2.default.createElement("tr", { style: { height: '40px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          }
        }, _react2.default.createElement("td", { style: { width: '275px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 141
=======
            lineNumber: 137
          }
        }, _react2.default.createElement("tr", { style: { height: '40' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          }
        }, _react2.default.createElement("td", { style: { width: '275' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 139
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, "Totals"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 142
          }
        }, "0"))))), _react2.default.createElement("div", { className: "col-xs-12", __source: {
            fileName: _jsxFileName,
            lineNumber: 149
          }
        }, _react2.default.createElement("div", { className: "col-xs-5", style: _style2.default.stampbox, __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          }
        }, _react2.default.createElement("p", { style: _style2.default.stamp, __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          }
        }, "Stamp")), _react2.default.createElement("div", { className: "col-xs-offset-1 col-xs-5", style: _style2.default.signatureBox, __source: {
            fileName: _jsxFileName,
            lineNumber: 153
=======
            lineNumber: 140
          }
        }, "0"))))), _react2.default.createElement("div", { className: "col-xs-12", __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          }
        }, _react2.default.createElement("div", { className: "col-xs-5", style: _style2.default.stampbox, __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          }
        }, _react2.default.createElement("p", { style: _style2.default.stamp, __source: {
            fileName: _jsxFileName,
            lineNumber: 149
          }
        }, "Stamp")), _react2.default.createElement("div", { className: "col-xs-offset-1 col-xs-5", style: _style2.default.signatureBox, __source: {
            fileName: _jsxFileName,
            lineNumber: 151
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, _react2.default.createElement("p", {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 154
=======
            lineNumber: 152
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
          }
        }, "Signature"))));
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getChallanData();
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
<<<<<<< HEAD
          lineNumber: 169
=======
          lineNumber: 167
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
        }
      }, _react2.default.createElement(_Head2.default, {
        __source: {
          fileName: _jsxFileName,
<<<<<<< HEAD
          lineNumber: 170
        }
      }), _react2.default.createElement("div", { className: "col-md-12 col-sm-12 col-xs-12", __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }, _react2.default.createElement("div", { className: "container", __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }, _react2.default.createElement("div", { className: "col-xs-4 col-sm-4 col-md-4", __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      }, _react2.default.createElement("div", { className: "col-xs-12", __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }, _react2.default.createElement("div", { className: "col-xs-3", __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }, _react2.default.createElement("img", { src: "static/assets/img/iiuilogo.png", style: _style2.default.image, __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      })), _react2.default.createElement("div", { className: "col-xs-6", style: _style2.default.nopadding, __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }, _react2.default.createElement("p", { style: _style2.default.toCenter, __source: {
          fileName: _jsxFileName,
          lineNumber: 181
=======
          lineNumber: 168
        }
      }), _react2.default.createElement("div", { className: "col-md-12 col-sm-12 col-xs-12", __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      }, _react2.default.createElement("div", { className: "container", __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }, _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }, _react2.default.createElement("div", { className: "col-xs-4 col-sm-4 col-md-4", __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }, _react2.default.createElement("div", { className: "col-xs-12", __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }, _react2.default.createElement("div", { className: "col-xs-3", __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      }, _react2.default.createElement("img", { src: "static/assets/img/iiuilogo.png", style: _style2.default.image, __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      })), _react2.default.createElement("div", { className: "col-xs-6", style: _style2.default.nopadding, __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }, _react2.default.createElement("p", { style: _style2.default.toCenter, __source: {
          fileName: _jsxFileName,
          lineNumber: 179
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
        }
      }, " ", _react2.default.createElement("b", {
        __source: {
          fileName: _jsxFileName,
<<<<<<< HEAD
          lineNumber: 181
=======
          lineNumber: 179
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
        }
      }, "Bank Alfalah limited "), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
<<<<<<< HEAD
          lineNumber: 181
=======
          lineNumber: 179
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
        }
      }), "Islamic Banking ", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
<<<<<<< HEAD
          lineNumber: 182
=======
          lineNumber: 180
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
        }
      }), "Latifabad Branch: Block C, ", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
<<<<<<< HEAD
          lineNumber: 183
=======
          lineNumber: 181
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
        }
      }), " Civic Center Unit No. 7 ", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
<<<<<<< HEAD
          lineNumber: 183
        }
      }), _react2.default.createElement("span", { style: _style2.default.span2, __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, "A/c no 5631-5000622021"))), _react2.default.createElement("div", { className: "col-xs-3", style: _style2.default.font, id: "tocenter", __source: {
          fileName: _jsxFileName,
          lineNumber: 186
=======
          lineNumber: 181
        }
      }), _react2.default.createElement("span", { style: _style2.default.span2, __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }, "A/c no 5631-5000622021"))), _react2.default.createElement("div", { className: "col-xs-3", style: _style2.default.font, id: "tocenter", __source: {
          fileName: _jsxFileName,
          lineNumber: 184
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
        }
      }, _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
<<<<<<< HEAD
          lineNumber: 187
        }
      }, "Bank Copy"))), _react2.default.createElement("div", { className: "col-xs-12", __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      }, _react2.default.createElement("p", { style: _style2.default.toCenter, __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }, _react2.default.createElement("span", { style: _style2.default.span1, __source: {
          fileName: _jsxFileName,
          lineNumber: 191
=======
          lineNumber: 185
        }
      }, "Bank Copy"))), _react2.default.createElement("div", { className: "col-xs-12", __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }, _react2.default.createElement("p", { style: _style2.default.toCenter, __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }, _react2.default.createElement("span", { style: _style2.default.span1, __source: {
          fileName: _jsxFileName,
          lineNumber: 189
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
        }
      }, "International Islamic University Islamabad Schools"), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
<<<<<<< HEAD
          lineNumber: 191
        }
      }), "Latifabad Campus")), this.renderChallanData()), _react2.default.createElement("div", { className: "col-xs-4 col-sm-4 col-md-4", __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        }
      }, _react2.default.createElement("div", { className: "col-xs-12", __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }, _react2.default.createElement("div", { className: "col-xs-3", __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      }, _react2.default.createElement("img", { src: "static/assets/img/iiuilogo.png", style: _style2.default.image, __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        }
      })), _react2.default.createElement("div", { className: "col-xs-6", style: _style2.default.nopadding, __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        }
      }, _react2.default.createElement("p", { style: _style2.default.toCenter, __source: {
          fileName: _jsxFileName,
          lineNumber: 204
=======
          lineNumber: 189
        }
      }), "Latifabad Campus")), this.renderChallanData()), _react2.default.createElement("div", { className: "col-xs-4 col-sm-4 col-md-4", __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }, _react2.default.createElement("div", { className: "col-xs-12", __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      }, _react2.default.createElement("div", { className: "col-xs-3", __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        }
      }, _react2.default.createElement("img", { src: "static/assets/img/iiuilogo.png", style: _style2.default.image, __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      })), _react2.default.createElement("div", { className: "col-xs-6", style: _style2.default.nopadding, __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        }
      }, _react2.default.createElement("p", { style: _style2.default.toCenter, __source: {
          fileName: _jsxFileName,
          lineNumber: 202
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
        }
      }, " ", _react2.default.createElement("b", {
        __source: {
          fileName: _jsxFileName,
<<<<<<< HEAD
          lineNumber: 204
=======
          lineNumber: 202
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
        }
      }, "Bank Alfalah limited "), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
<<<<<<< HEAD
          lineNumber: 204
=======
          lineNumber: 202
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
        }
      }), "Islamic Banking ", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
<<<<<<< HEAD
          lineNumber: 205
=======
          lineNumber: 203
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
        }
      }), "Latifabad Branch: Block C, ", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
<<<<<<< HEAD
          lineNumber: 206
=======
          lineNumber: 204
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
        }
      }), " Civic Center Unit No. 7 ", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
<<<<<<< HEAD
          lineNumber: 206
        }
      }), _react2.default.createElement("span", { style: _style2.default.span2, __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }, "A/c no 5631-5000622021"))), _react2.default.createElement("div", { className: "col-xs-3", style: _style2.default.font, id: "tocenter", __source: {
          fileName: _jsxFileName,
          lineNumber: 209
=======
          lineNumber: 204
        }
      }), _react2.default.createElement("span", { style: _style2.default.span2, __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }, "A/c no 5631-5000622021"))), _react2.default.createElement("div", { className: "col-xs-3", style: _style2.default.font, id: "tocenter", __source: {
          fileName: _jsxFileName,
          lineNumber: 207
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
        }
      }, _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
<<<<<<< HEAD
          lineNumber: 210
        }
      }, "School Copy"))), _react2.default.createElement("div", { className: "col-xs-12", __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        }
      }, _react2.default.createElement("p", { style: _style2.default.toCenter, __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        }
      }, _react2.default.createElement("span", { style: _style2.default.span1, __source: {
          fileName: _jsxFileName,
          lineNumber: 214
=======
          lineNumber: 208
        }
      }, "School Copy"))), _react2.default.createElement("div", { className: "col-xs-12", __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        }
      }, _react2.default.createElement("p", { style: _style2.default.toCenter, __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        }
      }, _react2.default.createElement("span", { style: _style2.default.span1, __source: {
          fileName: _jsxFileName,
          lineNumber: 212
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
        }
      }, "International Islamic University Islamabad Schools"), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
<<<<<<< HEAD
          lineNumber: 214
        }
      }), "Latifabad Campus")), this.renderChallanData()), _react2.default.createElement("div", { className: "col-xs-4 col-sm-4 col-md-4", __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        }
      }, _react2.default.createElement("div", { className: "col-xs-12", __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        }
      }, _react2.default.createElement("div", { className: "col-xs-3", __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        }
      }, _react2.default.createElement("img", { src: "static/assets/img/iiuilogo.png", style: _style2.default.image, __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        }
      })), _react2.default.createElement("div", { className: "col-xs-6", style: _style2.default.nopadding, __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        }
      }, _react2.default.createElement("p", { style: _style2.default.toCenter, __source: {
          fileName: _jsxFileName,
          lineNumber: 227
=======
          lineNumber: 212
        }
      }), "Latifabad Campus")), this.renderChallanData()), _react2.default.createElement("div", { className: "col-xs-4 col-sm-4 col-md-4", __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        }
      }, _react2.default.createElement("div", { className: "col-xs-12", __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        }
      }, _react2.default.createElement("div", { className: "col-xs-3", __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        }
      }, _react2.default.createElement("img", { src: "static/assets/img/iiuilogo.png", style: _style2.default.image, __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        }
      })), _react2.default.createElement("div", { className: "col-xs-6", style: _style2.default.nopadding, __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        }
      }, _react2.default.createElement("p", { style: _style2.default.toCenter, __source: {
          fileName: _jsxFileName,
          lineNumber: 225
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
        }
      }, " ", _react2.default.createElement("b", {
        __source: {
          fileName: _jsxFileName,
<<<<<<< HEAD
          lineNumber: 227
=======
          lineNumber: 225
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
        }
      }, "Bank Alfalah limited "), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
<<<<<<< HEAD
          lineNumber: 227
=======
          lineNumber: 225
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
        }
      }), "Islamic Banking ", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
<<<<<<< HEAD
          lineNumber: 228
=======
          lineNumber: 226
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
        }
      }), "Latifabad Branch: Block C, ", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
<<<<<<< HEAD
          lineNumber: 229
=======
          lineNumber: 227
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
        }
      }), " Civic Center Unit No. 7 ", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
<<<<<<< HEAD
          lineNumber: 229
        }
      }), _react2.default.createElement("span", { style: _style2.default.span2, __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      }, "A/c no 5631-5000622021"))), _react2.default.createElement("div", { className: "col-xs-3", style: _style2.default.font, id: "tocenter", __source: {
          fileName: _jsxFileName,
          lineNumber: 232
=======
          lineNumber: 227
        }
      }), _react2.default.createElement("span", { style: _style2.default.span2, __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        }
      }, "A/c no 5631-5000622021"))), _react2.default.createElement("div", { className: "col-xs-3", style: _style2.default.font, id: "tocenter", __source: {
          fileName: _jsxFileName,
          lineNumber: 230
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
        }
      }, _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
<<<<<<< HEAD
          lineNumber: 233
        }
      }, "Student Copy"))), _react2.default.createElement("div", { className: "col-xs-12", __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        }
      }, _react2.default.createElement("p", { style: _style2.default.toCenter, __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        }
      }, _react2.default.createElement("span", { style: _style2.default.span1, __source: {
          fileName: _jsxFileName,
          lineNumber: 237
=======
          lineNumber: 231
        }
      }, "Student Copy"))), _react2.default.createElement("div", { className: "col-xs-12", __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        }
      }, _react2.default.createElement("p", { style: _style2.default.toCenter, __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        }
      }, _react2.default.createElement("span", { style: _style2.default.span1, __source: {
          fileName: _jsxFileName,
          lineNumber: 235
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
        }
      }, "International Islamic University Islamabad Schools"), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
<<<<<<< HEAD
          lineNumber: 237
=======
          lineNumber: 235
>>>>>>> 0a74d78379d9d30d7375f29fa9130a77460a3d85
        }
      }), "Latifabad Campus")), this.renderChallanData())))));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;