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
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: "getChallanData",
    value: function getChallanData() {
      var _this2 = this;

      _axios2.default.get("/Send_ChallanData?rollNo=" + this.props.url.query.rollNo).then(function (response) {
        _this2.setState({ data: response.data });
        console.log(_this2.props.url.query.rollNo);
      });
    }
  }, {
    key: "renderChallanData",
    value: function renderChallanData() {
      return this.state.data.map(function (element) {
        return _react2.default.createElement("main", { style: { marginTop: "5em" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        }, _react2.default.createElement("div", { className: "col-xs-4 col-sm-4 col-md-4", __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        }, _react2.default.createElement("div", { className: "col-xs-12", __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        }, _react2.default.createElement("div", { className: "col-xs-3", __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        }, _react2.default.createElement("img", { src: "static/assets/img/iiuilogo.png", style: _style2.default.image, __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        })), _react2.default.createElement("div", { className: "col-xs-6", style: _style2.default.nopadding, __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }, _react2.default.createElement("p", { style: _style2.default.toCenter, __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }, " ", _react2.default.createElement("b", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }, "Bank Alfalah limited "), _react2.default.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }), "Islamic Banking ", _react2.default.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }), "Latifabad Branch: Block C, ", _react2.default.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        }), " Civic Center Unit No. 7 ", _react2.default.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        }), _react2.default.createElement("span", { style: _style2.default.span2, __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        }, "A/c no 5631-5000622021"))), _react2.default.createElement("div", { className: "col-xs-3", style: _style2.default.font, id: "tocenter", __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }, _react2.default.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }, "Bank Copy"))), _react2.default.createElement("div", { className: "col-xs-12", __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }, _react2.default.createElement("p", { style: _style2.default.toCenter, __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }, _react2.default.createElement("span", { style: _style2.default.span1, __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }, "International Islamic University Islamabad Schools"), _react2.default.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }), "Latifabad Campus")), _react2.default.createElement("div", { key: element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        }, _react2.default.createElement("div", { key: element._id + 'col-xs-12', className: "col-xs-12", __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }, _react2.default.createElement("table", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        }, _react2.default.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }, _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }, _react2.default.createElement("td", { style: { width: '140px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }, "Issue Date"), _react2.default.createElement("td", { key: "Issue" + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }, element.issueDate)), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }, "Fee for Month Of"), _react2.default.createElement("td", { key: "FeeMonth" + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        }, element.feeMonth)), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        }, "DueDate *"), _react2.default.createElement("td", { key: "Duedate" + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        }, element.dueDate))))), _react2.default.createElement("div", { className: "col-xs-12", __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          }
        }, _react2.default.createElement("table", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          }
        }, _react2.default.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          }
        }, _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        }, _react2.default.createElement("td", { style: { width: '140px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        }, "Name"), _react2.default.createElement("td", { key: 'fstname' + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        }, element.fname)), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          }
        }, "Father Name"), _react2.default.createElement("td", { key: 'guard' + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          }
        }, element.guardian))))), _react2.default.createElement("div", { className: "col-xs-12", __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          }
        }, _react2.default.createElement("table", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          }
        }, _react2.default.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          }
        }, _react2.default.createElement("tr", { style: { height: '20px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          }
        }, _react2.default.createElement("td", { style: { width: '140px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          }
        }, "Grade"), _react2.default.createElement("td", { key: 'grd' + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          }
        }, element.grade)), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          }
        }, "Roll #"), _react2.default.createElement("td", { style: { width: '40px' }, key: 'roll' + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          }
        }, element.rollNo)))), _react2.default.createElement("div", { className: "col-xs-12", style: { marginTop: '3px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          }
        }, _react2.default.createElement("p", { style: { textAlign: 'center' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          }
        }, "Challan details")), _react2.default.createElement("table", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          }
        }, _react2.default.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          }
        }, _react2.default.createElement("tr", { style: { height: '10px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          }
        }, _react2.default.createElement("td", { style: { width: '300px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          }
        }, "Description"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          }
        }, "Amount")), _react2.default.createElement("tr", { style: { borderTop: 'thin double #000000' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          }
        }, "Admission Fee"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          }
        }, "0")), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          }
        }, "Annual Fee"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          }
        }, "0")), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          }
        }, "Course"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          }
        }, "0")), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          }
        }, "Tution Fee"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          }
        }, "0")), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          }
        }, "Arreas"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          }
        }, "0")), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          }
        }, "Duplicate"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          }
        }, "0")), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          }
        }, "Challan"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          }
        }, "0")), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          }
        }, "Fee"), _react2.default.createElement("td", { key: 'fee' + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          }
        }, element.amount)), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          }
        }, "Reminder"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          }
        }, "0")), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          }
        }, "Photocopies"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          }
        }, "0")), _react2.default.createElement("tr", { style: { height: '20px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 146
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          }
        }, "Others"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          }
        }, "0")))))), _react2.default.createElement("div", { className: "col-xs-12", style: { borderTop: 'thin double #000000' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          }
        }, _react2.default.createElement("table", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          }
        }, _react2.default.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          }
        }, _react2.default.createElement("tr", { style: { height: '40px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          }
        }, _react2.default.createElement("td", { style: { width: '275px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          }
        }, "Totals"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161
          }
        }, "0"))))), _react2.default.createElement("div", { className: "col-xs-12", __source: {
            fileName: _jsxFileName,
            lineNumber: 168
          }
        }, _react2.default.createElement("div", { className: "col-xs-5", style: _style2.default.stampbox, __source: {
            fileName: _jsxFileName,
            lineNumber: 169
          }
        }, _react2.default.createElement("p", { style: _style2.default.stamp, __source: {
            fileName: _jsxFileName,
            lineNumber: 170
          }
        }, "Stamp")), _react2.default.createElement("div", { className: "col-xs-offset-1 col-xs-5", style: _style2.default.signatureBox, __source: {
            fileName: _jsxFileName,
            lineNumber: 172
          }
        }, _react2.default.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173
          }
        }, "Signature")))));
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
          lineNumber: 189
        }
      }, _react2.default.createElement(_Head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      }), _react2.default.createElement("div", { className: "col-md-12 col-sm-12 col-xs-12", __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }, _react2.default.createElement("div", { className: "container", __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }, _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }, this.renderChallanData(), this.renderChallanData(), this.renderChallanData()))));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;