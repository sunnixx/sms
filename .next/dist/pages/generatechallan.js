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
      return this.state.data.map(function (element) {
        return _react2.default.createElement("main", { style: { marginTop: "5em" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }, _react2.default.createElement("div", { className: "col-xs-4 col-sm-4 col-md-4", __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }, _react2.default.createElement("div", { className: "col-xs-12", __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }, _react2.default.createElement("div", { className: "col-xs-3", __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }, _react2.default.createElement("img", { src: "static/assets/img/iiuilogo.png", style: _style2.default.image, __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        })), _react2.default.createElement("div", { className: "col-xs-6", style: _style2.default.nopadding, __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        }, _react2.default.createElement("p", { style: _style2.default.toCenter, __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }, " ", _react2.default.createElement("b", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }, "Bank Alfalah limited "), _react2.default.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }), "Islamic Banking ", _react2.default.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }), "Latifabad Branch: Block C, ", _react2.default.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }), " Civic Center Unit No. 7 ", _react2.default.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }), _react2.default.createElement("span", { style: _style2.default.span2, __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        }, "A/c no 5631-5000622021"))), _react2.default.createElement("div", { className: "col-xs-3", style: _style2.default.font, id: "tocenter", __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }, _react2.default.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        }, "Bank Copy"))), _react2.default.createElement("div", { className: "col-xs-12", __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        }, _react2.default.createElement("p", { style: _style2.default.toCenter, __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }, _react2.default.createElement("span", { style: _style2.default.span1, __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }, "International Islamic University Islamabad Schools"), _react2.default.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }), "Latifabad Campus")), _react2.default.createElement("div", { key: element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }, _react2.default.createElement("div", { key: element._id + 'col-xs-12', className: "col-xs-12", __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }, _react2.default.createElement("table", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        }, _react2.default.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }, _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }, _react2.default.createElement("td", { style: { width: '140px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        }, "Issue Date"), _react2.default.createElement("td", { key: "Issue" + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }, element.issueDate)), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        }, "Fee for Month Of"), _react2.default.createElement("td", { key: "FeeMonth" + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        }, element.feeMonth)), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          }
        }, "DueDate *"), _react2.default.createElement("td", { key: "Duedate" + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        }, element.dueDate))))), _react2.default.createElement("div", { className: "col-xs-12", __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        }, _react2.default.createElement("table", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        }, _react2.default.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          }
        }, _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          }
        }, _react2.default.createElement("td", { style: { width: '140px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          }
        }, "Name"), _react2.default.createElement("td", { key: 'fstname' + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          }
        }, element.fname)), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
        }, "Father Name"), _react2.default.createElement("td", { key: 'guard' + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          }
        }, element.guardian))))), _react2.default.createElement("div", { className: "col-xs-12", __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          }
        }, _react2.default.createElement("table", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          }
        }, _react2.default.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          }
        }, _react2.default.createElement("tr", { style: { height: '20px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          }
        }, _react2.default.createElement("td", { style: { width: '140px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          }
        }, "Grade"), _react2.default.createElement("td", { key: 'grd' + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          }
        }, element.grade)), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          }
        }, "Roll #"), _react2.default.createElement("td", { style: { width: '40px' }, key: 'roll' + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          }
        }, element.rollNo)))), _react2.default.createElement("div", { className: "col-xs-12", style: { marginTop: '3px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          }
        }, _react2.default.createElement("p", { style: { textAlign: 'center' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          }
        }, "Challan details")), _react2.default.createElement("table", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          }
        }, _react2.default.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          }
        }, _react2.default.createElement("tr", { style: { height: '10px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          }
        }, _react2.default.createElement("td", { style: { width: '300px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          }
        }, "Description"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          }
        }, "Amount")), _react2.default.createElement("tr", { style: { borderTop: 'thin double #000000' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          }
        }, "Admission Fee"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          }
        }, "0")), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          }
        }, "Annual Fee"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          }
        }, "0")), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          }
        }, "Course"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          }
        }, "0")), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          }
        }, "Tution Fee"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          }
        }, "0")), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          }
        }, "Arreas"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          }
        }, "0")), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          }
        }, "Duplicate"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          }
        }, "0")), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          }
        }, "Challan"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          }
        }, "0")), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          }
        }, "Fee"), _react2.default.createElement("td", { key: 'fee' + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          }
        }, element.amount)), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          }
        }, "Reminder"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          }
        }, "0")), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          }
        }, "Photocopies"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149
          }
        }, "0")), _react2.default.createElement("tr", { style: { height: '20px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          }
        }, "Others"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          }
        }, "0")))))), _react2.default.createElement("div", { className: "col-xs-12", style: { borderTop: 'thin double #000000' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 161
          }
        }, _react2.default.createElement("table", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          }
        }, _react2.default.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          }
        }, _react2.default.createElement("tr", { style: { height: '40px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 164
          }
        }, _react2.default.createElement("td", { style: { width: '275px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 165
          }
        }, "Totals"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 166
          }
        }, "0"))))), _react2.default.createElement("div", { className: "col-xs-12", __source: {
            fileName: _jsxFileName,
            lineNumber: 173
          }
        }, _react2.default.createElement("div", { className: "col-xs-5", style: _style2.default.stampbox, __source: {
            fileName: _jsxFileName,
            lineNumber: 174
          }
        }, _react2.default.createElement("p", { style: _style2.default.stamp, __source: {
            fileName: _jsxFileName,
            lineNumber: 175
          }
        }, "Stamp")), _react2.default.createElement("div", { className: "col-xs-offset-1 col-xs-5", style: _style2.default.signatureBox, __source: {
            fileName: _jsxFileName,
            lineNumber: 177
          }
        }, _react2.default.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178
          }
        }, "Signature")))));
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
          lineNumber: 198
        }
      }, _react2.default.createElement(_Head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }), _react2.default.createElement("div", { className: "col-md-12 col-sm-12 col-xs-12", __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      }, _react2.default.createElement("div", { className: "container", __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        }
      }, _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      }, this.renderChallanData(), this.renderChallanData(), this.renderChallanData()))));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;