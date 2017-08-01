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

var _jsxFileName = "C:\\Users\\Dell\\Desktop\\sms\\pages\\generatechallan.js?entry";


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class(props) {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

    _this.state = { data: [] };

    _this.getChallanData = _this.getChallanData.bind(_this);
    _this.renderChallanData = _this.renderChallanData.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: "getChallanData",
    value: function getChallanData() {
      var _this2 = this;

      _axios2.default.get('/Send_ChallanData').then(function (response) {
        _this2.setState({ data: response.data });
      });
    }
  }, {
    key: "renderChallanData",
    value: function renderChallanData() {
      return this.state.data.map(function (element) {
        return _react2.default.createElement("main", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        }, _react2.default.createElement("div", { key: element.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        }, _react2.default.createElement("div", { className: "col-xs-12", __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        }, _react2.default.createElement("table", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        }, _react2.default.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        }, _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        }, _react2.default.createElement("td", { style: { width: '140' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }, "Issue Date"), _react2.default.createElement("td", { key: "Issue" + element.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }, element.issueDate)), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        }, "Fee for Month Of"), _react2.default.createElement("td", { key: "FeeMonth" + element.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        }, element.feeMonth)), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }, "DueDate *"), _react2.default.createElement("td", { key: "Duedate" + element.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }, element.dueDate))))), _react2.default.createElement("div", { className: "col-xs-12", __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        }, _react2.default.createElement("table", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }, _react2.default.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        }, _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }, _react2.default.createElement("td", { style: { width: '140' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }, "Name"), _react2.default.createElement("td", { key: 'fstname' + element.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }, element.fname)), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }, "Father Name"), _react2.default.createElement("td", { key: 'guard' + element.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }, element.guardian))))), _react2.default.createElement("div", { className: "col-xs-12", __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        }, _react2.default.createElement("table", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        }, _react2.default.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
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
          }
        }, element.grade)), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
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
          }
        }, "Challan details")), _react2.default.createElement("table", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          }
        }, _react2.default.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        }, _react2.default.createElement("tr", { style: { height: '10' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          }
        }, _react2.default.createElement("td", { style: { width: '300' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
        }, "Description"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          }
        }, "Amount")), _react2.default.createElement("tr", { style: { borderTop: 'thin double #000000' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          }
        }, "Admission Fee"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          }
        }, "0")), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          }
        }, "Annual Fee"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          }
        }, "0")), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          }
        }, "Course"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          }
        }, "0")), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          }
        }, "Tution Fee"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          }
        }, "0")), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          }
        }, "Arreas"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          }
        }, "0")), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          }
        }, "Duplicate"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          }
        }, "0")), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          }
        }, "Challan"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          }
        }, "0")), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          }
        }, "Fee"), _react2.default.createElement("td", { key: 'fee' + element.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          }
        }, element.amount)), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          }
        }, "Reminder"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          }
        }, "0")), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          }
        }, "Photocopies"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          }
        }, "0")), _react2.default.createElement("tr", { style: { height: '20' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          }
        }, "Others"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          }
        }, "0")))))), _react2.default.createElement("div", { className: "col-xs-12", style: { borderTop: 'thin double #000000' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          }
        }, _react2.default.createElement("table", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          }
        }, _react2.default.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          }
        }, _react2.default.createElement("tr", { style: { height: '40' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          }
        }, _react2.default.createElement("td", { style: { width: '275' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          }
        }, "Totals"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
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
          }
        }, _react2.default.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
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
          lineNumber: 167
        }
      }, _react2.default.createElement(_Head2.default, {
        __source: {
          fileName: _jsxFileName,
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
        }
      }, " ", _react2.default.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }, "Bank Alfalah limited "), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }), "Islamic Banking ", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }), "Latifabad Branch: Block C, ", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }), " Civic Center Unit No. 7 ", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }), _react2.default.createElement("span", { style: _style2.default.span2, __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }, "A/c no 5631-5000622021"))), _react2.default.createElement("div", { className: "col-xs-3", style: _style2.default.font, id: "tocenter", __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
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
        }
      }, "International Islamic University Islamabad Schools"), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
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
        }
      }, " ", _react2.default.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      }, "Bank Alfalah limited "), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      }), "Islamic Banking ", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        }
      }), "Latifabad Branch: Block C, ", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }), " Civic Center Unit No. 7 ", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }), _react2.default.createElement("span", { style: _style2.default.span2, __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }, "A/c no 5631-5000622021"))), _react2.default.createElement("div", { className: "col-xs-3", style: _style2.default.font, id: "tocenter", __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }, _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
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
        }
      }, "International Islamic University Islamabad Schools"), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
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
        }
      }, " ", _react2.default.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        }
      }, "Bank Alfalah limited "), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        }
      }), "Islamic Banking ", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        }
      }), "Latifabad Branch: Block C, ", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }), " Civic Center Unit No. 7 ", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }), _react2.default.createElement("span", { style: _style2.default.span2, __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        }
      }, "A/c no 5631-5000622021"))), _react2.default.createElement("div", { className: "col-xs-3", style: _style2.default.font, id: "tocenter", __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      }, _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
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
        }
      }, "International Islamic University Islamabad Schools"), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        }
      }), "Latifabad Campus")), this.renderChallanData())))));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;