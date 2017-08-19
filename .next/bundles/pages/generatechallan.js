
          window.__NEXT_REGISTER_PAGE('/generatechallan', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(39);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Head = __webpack_require__(567);

var _Head2 = _interopRequireDefault(_Head);

var _style = __webpack_require__(568);

var _style2 = _interopRequireDefault(_style);

var _axios = __webpack_require__(548);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/sumair/Desktop/MEAN STACK/My Work/sms-master/pages/generatechallan.js?entry";


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class(props) {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

    _this.state = { data: [] };
    // this.props = {rollNo:''}

    _this.getChallanData = _this.getChallanData.bind(_this);
    _this.renderChallanData = _this.renderChallanData.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: "getChallanData",
    value: function getChallanData() {
      var _this2 = this;

      _axios2.default.get("/Send_ChallanData?rollNo=" + this.props.url.query.rollNo).then(function (response) {
        _this2.setState({ data: response.data });
        // console.log(this.props.url.query.rollNo);
      });
    }
  }, {
    key: "renderChallanData",
    value: function renderChallanData() {
      return this.state.data.map(function (element) {
        return _react2.default.createElement("main", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        }, _react2.default.createElement("div", { key: element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        }, _react2.default.createElement("div", { key: element._id + 'col-xs-12', className: "col-xs-12", __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        }, _react2.default.createElement("table", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        }, _react2.default.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }, _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }, _react2.default.createElement("td", { style: { width: '140px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }, "Issue Date"), _react2.default.createElement("td", { key: "Issue" + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }, element.issueDate)), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        }, "Fee for Month Of"), _react2.default.createElement("td", { key: "FeeMonth" + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }, element.feeMonth)), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        }, "DueDate *"), _react2.default.createElement("td", { key: "Duedate" + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }, element.dueDate))))), _react2.default.createElement("div", { className: "col-xs-12", __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        }, _react2.default.createElement("table", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }, _react2.default.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }, _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }, _react2.default.createElement("td", { style: { width: '140px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }, "Name"), _react2.default.createElement("td", { key: 'fstname' + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        }, element.fname)), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        }, "Father Name"), _react2.default.createElement("td", { key: 'guard' + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }, element.guardian))))), _react2.default.createElement("div", { className: "col-xs-12", __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          }
        }, _react2.default.createElement("table", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          }
        }, _react2.default.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
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
          }
        }, element.grade)), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
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
          }
        }, "Challan details")), _react2.default.createElement("table", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          }
        }, _react2.default.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
        }, _react2.default.createElement("tr", { style: { height: '10px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          }
        }, _react2.default.createElement("td", { style: { width: '300px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          }
        }, "Description"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          }
        }, "Amount")), _react2.default.createElement("tr", { style: { borderTop: 'thin double #000000' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          }
        }, "Admission Fee"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          }
        }, "0")), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          }
        }, "Annual Fee"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          }
        }, "0")), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          }
        }, "Course"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          }
        }, "0")), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          }
        }, "Tution Fee"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          }
        }, "0")), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          }
        }, "Arreas"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          }
        }, "0")), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          }
        }, "Duplicate"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          }
        }, "0")), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          }
        }, "Challan"), _react2.default.createElement("td", {
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
        }, "Fee"), _react2.default.createElement("td", { key: 'fee' + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          }
        }, element.amount)), _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          }
        }, "Reminder"), _react2.default.createElement("td", {
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
        }, "Photocopies"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          }
        }, "0")), _react2.default.createElement("tr", { style: { height: '20px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          }
        }, _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          }
        }, "Others"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          }
        }, "0")))))), _react2.default.createElement("div", { className: "col-xs-12", style: { borderTop: 'thin double #000000' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          }
        }, _react2.default.createElement("table", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          }
        }, _react2.default.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          }
        }, _react2.default.createElement("tr", { style: { height: '40px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          }
        }, _react2.default.createElement("td", { style: { width: '275px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          }
        }, "Totals"), _react2.default.createElement("td", {
          __source: {
            fileName: _jsxFileName,
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
          }
        }, _react2.default.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154
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
          lineNumber: 169
        }
      }, _react2.default.createElement(_Head2.default, {
        __source: {
          fileName: _jsxFileName,
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
        }
      }, " ", _react2.default.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }, "Bank Alfalah limited "), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }), "Islamic Banking ", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }), "Latifabad Branch: Block C, ", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }), " Civic Center Unit No. 7 ", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }), _react2.default.createElement("span", { style: _style2.default.span2, __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, "A/c no 5631-5000622021"))), _react2.default.createElement("div", { className: "col-xs-3", style: _style2.default.font, id: "tocenter", __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }, _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
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
        }
      }, "International Islamic University Islamabad Schools"), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
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
        }
      }, " ", _react2.default.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }, "Bank Alfalah limited "), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }), "Islamic Banking ", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }), "Latifabad Branch: Block C, ", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }), " Civic Center Unit No. 7 ", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }), _react2.default.createElement("span", { style: _style2.default.span2, __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }, "A/c no 5631-5000622021"))), _react2.default.createElement("div", { className: "col-xs-3", style: _style2.default.font, id: "tocenter", __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      }, _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
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
        }
      }, "International Islamic University Islamabad Schools"), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
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
        }
      }, " ", _react2.default.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }, "Bank Alfalah limited "), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }), "Islamic Banking ", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        }
      }), "Latifabad Branch: Block C, ", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }), " Civic Center Unit No. 7 ", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }), _react2.default.createElement("span", { style: _style2.default.span2, __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      }, "A/c no 5631-5000622021"))), _react2.default.createElement("div", { className: "col-xs-3", style: _style2.default.font, id: "tocenter", __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        }
      }, _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
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
        }
      }, "International Islamic University Islamabad Schools"), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        }
      }), "Latifabad Campus")), this.renderChallanData())))));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/sumair/Desktop/MEAN STACK/My Work/sms-master/pages/generatechallan.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/sumair/Desktop/MEAN STACK/My Work/sms-master/pages/generatechallan.js"); } } })();
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

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(39);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(194);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/sumair/Desktop/MEAN STACK/My Work/sms-master/components/Head.js";


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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/sumair/Desktop/MEAN STACK/My Work/sms-master/components/Head.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/sumair/Desktop/MEAN STACK/My Work/sms-master/components/Head.js"); } } })();

/***/ }),

/***/ 568:
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/sumair/Desktop/MEAN STACK/My Work/sms-master/components/stylesheets/style.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/sumair/Desktop/MEAN STACK/My Work/sms-master/components/stylesheets/style.js"); } } })();

/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(547);


/***/ })

},[569]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9nZW5lcmF0ZWNoYWxsYW4uanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9nZW5lcmF0ZWNoYWxsYW4uanM/ZWU0ZmY0MiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWQuanM/ZWU0ZmY0MiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0eWxlc2hlZXRzL3N0eWxlLmpzP2VlNGZmNDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgSGVhZCBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkXCJcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9zdHlsZXNoZWV0cy9zdHlsZS5qc1wiXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPXtkYXRhIDpbXX1cbiAgICAvLyB0aGlzLnByb3BzID0ge3JvbGxObzonJ31cblxuICAgIHRoaXMuZ2V0Q2hhbGxhbkRhdGEgPSB0aGlzLmdldENoYWxsYW5EYXRhLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZW5kZXJDaGFsbGFuRGF0YSA9IHRoaXMucmVuZGVyQ2hhbGxhbkRhdGEuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGdldENoYWxsYW5EYXRhKCl7XG4gICAgYXhpb3MuZ2V0KFwiL1NlbmRfQ2hhbGxhbkRhdGE/cm9sbE5vPVwiK3RoaXMucHJvcHMudXJsLnF1ZXJ5LnJvbGxObykudGhlbigocmVzcG9uc2UpID0+e1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YTogcmVzcG9uc2UuZGF0YX0pXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnByb3BzLnVybC5xdWVyeS5yb2xsTm8pO1xuICAgIH0pXG4gIH1cblxuICByZW5kZXJDaGFsbGFuRGF0YSgpe1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmRhdGEubWFwKChlbGVtZW50KSA9PiB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgIDxkaXYga2V5PXtlbGVtZW50Ll9pZH0+XG4gICAgICAgICAgICAgICAgey8qIENoYWxsYW4gaW5mbyBzdGFydCBoZXJlICovfVxuICAgICAgICAgICAgICA8ZGl2IGtleT17ZWxlbWVudC5faWQgKyAnY29sLXhzLTEyJ30gY2xhc3NOYW1lPSdjb2wteHMtMTInPlxuICAgICAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPHRyID5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t3aWR0aDonMTQwcHgnfX0+SXNzdWUgRGF0ZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT0ge1wiSXNzdWVcIitlbGVtZW50Ll9pZH0+e2VsZW1lbnQuaXNzdWVEYXRlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+RmVlIGZvciBNb250aCBPZjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17XCJGZWVNb250aFwiK2VsZW1lbnQuX2lkfT57ZWxlbWVudC5mZWVNb250aH08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPkR1ZURhdGUgKjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17XCJEdWVkYXRlXCIrZWxlbWVudC5faWR9PntlbGVtZW50LmR1ZURhdGV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey8qIENoYWxsYW4gSW5mbyBlbmRzIGhlcmUgKi99XG4gICAgICAgICAgICAgICAgey8qIE5hbWUgU2VjdGlvbiBzdGFydHMgaGVyZSAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTEyJz5cbiAgICAgICAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3dpZHRoOicxNDBweCd9fT5OYW1lPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9eydmc3RuYW1lJytlbGVtZW50Ll9pZH0+e2VsZW1lbnQuZm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5GYXRoZXIgTmFtZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXsnZ3VhcmQnK2VsZW1lbnQuX2lkfT57ZWxlbWVudC5ndWFyZGlhbn08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKiBOYW1lIFNlY3Rpb24gZW5kcyBoZXJlICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtMTInPlxuICAgICAgICAgICAgICAgICAgPHRhYmxlID5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17e2hlaWdodDonMjBweCd9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgIHN0eWxlPXt7d2lkdGg6JzE0MHB4J319PkdyYWRlPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9eydncmQnK2VsZW1lbnQuX2lkfT57ZWxlbWVudC5ncmFkZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlJvbGwgIzwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgIHN0eWxlPXt7d2lkdGg6JzQwcHgnfX0ga2V5PXsncm9sbCcrZWxlbWVudC5faWR9PntlbGVtZW50LnJvbGxOb308L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTJcIiBzdHlsZT17e21hcmdpblRvcDonM3B4J319PlxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PkNoYWxsYW4gZGV0YWlsczwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHRhYmxlID5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17e2hlaWdodDogJzEwcHgnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgICBzdHlsZT17e3dpZHRoOiczMDBweCd9fT5EZXNjcmlwdGlvbjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+QW1vdW50PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17e2JvcmRlclRvcDondGhpbiBkb3VibGUgIzAwMDAwMCd9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+QWRtaXNzaW9uIEZlZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+QW5udWFsIEZlZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Q291cnNlPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4wPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UdXRpb24gRmVlPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4wPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5BcnJlYXM8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkR1cGxpY2F0ZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Q2hhbGxhbjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+RmVlPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9eydmZWUnK2VsZW1lbnQuX2lkfT57ZWxlbWVudC5hbW91bnR9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5SZW1pbmRlcjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UGhvdG9jb3BpZXM8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7aGVpZ2h0OiAnMjBweCd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5PdGhlcnM8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgey8qICBjaGFsbGFuIGRldGFpbCBzdGFydHMgaGVyZSovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgey8qIFRvdGFsIHNlY3Rpb24qL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTJcIiBzdHlsZT17e2JvcmRlclRvcDondGhpbiBkb3VibGUgIzAwMDAwMCd9fT5cbiAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgIDx0ciBzdHlsZT17e2hlaWdodDogJzQwcHgnfX0gPlxuICAgICAgICAgICAgICAgIDx0ZCAgc3R5bGU9e3t3aWR0aDogJzI3NXB4J319PlRvdGFsczwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPjA8L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIFRvdGFsIFNlY3Rpb24gRW5kcyBoZXJlICovfVxuICAgICAgICB7LyogU2lnbmF0dXJlIGFuZCBTdGFtcCBTZWN0aW9uIHN0YXJ0cyBoZXJlICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTVcIiBzdHlsZT17U3R5bGUuc3RhbXBib3h9PlxuICAgICAgICAgICAgPHAgc3R5bGU9e1N0eWxlLnN0YW1wfT5TdGFtcDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy1vZmZzZXQtMSBjb2wteHMtNVwiIHN0eWxlPXtTdHlsZS5zaWduYXR1cmVCb3h9ID5cbiAgICAgICAgICAgIDxwPlNpZ25hdHVyZTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiBTaWduYXR1cmUgQW5kIFN0YW1wIHNlY3Rpb24gZW5kcyBoZXJlICovfVxuICAgICAgPC9tYWluPlxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHRoaXMuZ2V0Q2hhbGxhbkRhdGEoKTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGNvbC1zbS0xMiBjb2wteHMtMTJcIiAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdycgPlxuICAgICAgICAgICAgICB7LyogQmFuayBDaGFsbGFuIHNlY3Rpb24gc3RhcnQgaGVyZSAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14cy00IGNvbC1zbS00IGNvbC1tZC00JyA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTJcIiA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0zXCIgPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cInN0YXRpYy9hc3NldHMvaW1nL2lpdWlsb2dvLnBuZ1wiICBzdHlsZT17U3R5bGUuaW1hZ2V9Lz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNlwiIHN0eWxlPXtTdHlsZS5ub3BhZGRpbmd9ID5cbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e1N0eWxlLnRvQ2VudGVyfSA+IDxiPkJhbmsgQWxmYWxhaCBsaW1pdGVkIDwvYj48YnIgLz5cbiAgICAgICAgICAgICAgICAgIElzbGFtaWMgQmFua2luZyA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgTGF0aWZhYmFkIEJyYW5jaDogQmxvY2sgQywgPGJyIC8+IENpdmljIENlbnRlciBVbml0IE5vLiA3IDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT0ge1N0eWxlLnNwYW4yfT5BL2Mgbm8gNTYzMS01MDAwNjIyMDIxPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtM1wiIHN0eWxlPXtTdHlsZS5mb250fSBpZD0ndG9jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICA8cD5CYW5rIENvcHk8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMlwiPlxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e1N0eWxlLnRvQ2VudGVyfT48c3BhbiBzdHlsZT0ge1N0eWxlLnNwYW4xfT5JbnRlcm5hdGlvbmFsIElzbGFtaWMgVW5pdmVyc2l0eSBJc2xhbWFiYWQgU2Nob29sczwvc3Bhbj48YnIgLz5cbiAgICAgICAgICAgICAgICAgIExhdGlmYWJhZCBDYW1wdXM8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ2hhbGxhbkRhdGEoKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHsvKiBCYW5rIENoYWxsYW4gc2VjdGlvbiBlbmRzIGhlcmUgKi99XG4gICAgICAgICAgICAgIHsvKiBTY2hvb2wgQ2hhbGxhbiBTZWN0aW9uIHN0YXJ0cyBoZXJlICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTQgY29sLXNtLTQgY29sLW1kLTQnID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMlwiID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTNcIiA+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwic3RhdGljL2Fzc2V0cy9pbWcvaWl1aWxvZ28ucG5nXCIgIHN0eWxlPXtTdHlsZS5pbWFnZX0vPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy02XCIgc3R5bGU9e1N0eWxlLm5vcGFkZGluZ30gPlxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17U3R5bGUudG9DZW50ZXJ9ID4gPGI+QmFuayBBbGZhbGFoIGxpbWl0ZWQgPC9iPjxiciAvPlxuICAgICAgICAgICAgICAgICAgSXNsYW1pYyBCYW5raW5nIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICBMYXRpZmFiYWQgQnJhbmNoOiBCbG9jayBDLCA8YnIgLz4gQ2l2aWMgQ2VudGVyIFVuaXQgTm8uIDcgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPSB7U3R5bGUuc3BhbjJ9PkEvYyBubyA1NjMxLTUwMDA2MjIwMjE8L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0zXCIgc3R5bGU9e1N0eWxlLmZvbnR9IGlkPSd0b2NlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxwPlNjaG9vbCBDb3B5PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTJcIj5cbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtTdHlsZS50b0NlbnRlcn0+PHNwYW4gc3R5bGU9IHtTdHlsZS5zcGFuMX0+SW50ZXJuYXRpb25hbCBJc2xhbWljIFVuaXZlcnNpdHkgSXNsYW1hYmFkIFNjaG9vbHM8L3NwYW4+PGJyIC8+XG4gICAgICAgICAgICAgICAgICBMYXRpZmFiYWQgQ2FtcHVzPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNoYWxsYW5EYXRhKCl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7LyogU2Nob29sIENoYWxsYW4gU2VjdGlvbiBlbmRzIGhlcmUgKi99XG4gICAgICAgICAgICAgIHsvKiBDYW5kaWRhdGUgQ2hhbGxhbiBTZWN0aW9uIHN0YXJ0cyBoZXJlICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTQgY29sLXNtLTQgY29sLW1kLTQnID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMlwiID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTNcIiA+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwic3RhdGljL2Fzc2V0cy9pbWcvaWl1aWxvZ28ucG5nXCIgIHN0eWxlPXtTdHlsZS5pbWFnZX0vPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy02XCIgc3R5bGU9e1N0eWxlLm5vcGFkZGluZ30gPlxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17U3R5bGUudG9DZW50ZXJ9ID4gPGI+QmFuayBBbGZhbGFoIGxpbWl0ZWQgPC9iPjxiciAvPlxuICAgICAgICAgICAgICAgICAgSXNsYW1pYyBCYW5raW5nIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICBMYXRpZmFiYWQgQnJhbmNoOiBCbG9jayBDLCA8YnIgLz4gQ2l2aWMgQ2VudGVyIFVuaXQgTm8uIDcgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPSB7U3R5bGUuc3BhbjJ9PkEvYyBubyA1NjMxLTUwMDA2MjIwMjE8L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0zXCIgc3R5bGU9e1N0eWxlLmZvbnR9IGlkPSd0b2NlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxwPlN0dWRlbnQgQ29weTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyXCI+XG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17U3R5bGUudG9DZW50ZXJ9PjxzcGFuIHN0eWxlPSB7U3R5bGUuc3BhbjF9PkludGVybmF0aW9uYWwgSXNsYW1pYyBVbml2ZXJzaXR5IElzbGFtYWJhZCBTY2hvb2xzPC9zcGFuPjxiciAvPlxuICAgICAgICAgICAgICAgICAgTGF0aWZhYmFkIENhbXB1czwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDaGFsbGFuRGF0YSgpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgey8qIENhbmRpZGF0ZSBDaGFsbGFuIFNlY3Rpb24gRW5kcyBIZXJlICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9nZW5lcmF0ZWNoYWxsYW4uanM/ZW50cnkiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICByZW5kZXIoKXtcbiAgICByZXR1cm4oXG4gICAgICA8SGVhZD5cbiAgICAgICAgICA8bWV0YSBjaGFyc2V0PVwidXRmLThcIiAgLz5cbiAgICAgICAgXHQ8bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxuICAgICAgICBcdDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIFx0PHRpdGxlPkludGVybmF0aW9uYWwgSXNsYW1pYyBVbml2ZXJzaXR5IElzbGFtYWJhZCAtIExhdGlmYWJhZCBDYW1wdXM8L3RpdGxlPlxuXG4gICAgICAgIFx0PGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDMwMCwxMDAsNTAwLDcwMCw5MDBcIiByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgLz5cbiAgICAgICAgXHQ8bGluayBocmVmPVwic3RhdGljL2Fzc2V0cy9jc3MvaWNvbnMvaWNvbW9vbi9zdHlsZXMuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIC8+XG4gICAgICAgIFx0PGxpbmsgaHJlZj1cInN0YXRpYy9hc3NldHMvY3NzL2Jvb3RzdHJhcC5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgLz5cbiAgICAgICAgXHQ8bGluayBocmVmPVwic3RhdGljL2Fzc2V0cy9jc3MvY29yZS5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgLz5cbiAgICAgICAgXHQ8bGluayBocmVmPVwic3RhdGljL2Fzc2V0cy9jc3MvY29tcG9uZW50cy5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgLz5cbiAgICAgICAgXHQ8bGluayBocmVmPVwic3RhdGljL2Fzc2V0cy9jc3MvY29sb3JzLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiAvPlxuXG4gICAgICAgIFx0PHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwic3RhdGljL2Fzc2V0cy9qcy9wbHVnaW5zL2xvYWRlcnMvcGFjZS5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgICAgXHQ8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJzdGF0aWMvYXNzZXRzL2pzL2NvcmUvbGlicmFyaWVzL2pxdWVyeS5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgICAgXHQ8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJzdGF0aWMvYXNzZXRzL2pzL2NvcmUvbGlicmFyaWVzL2Jvb3RzdHJhcC5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgICAgXHQ8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJzdGF0aWMvYXNzZXRzL2pzL3BsdWdpbnMvbG9hZGVycy9ibG9ja3VpLm1pbi5qc1wiPjwvc2NyaXB0PlxuXG5cdFx0XHRcdFx0PHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwic3RhdGljL2Fzc2V0cy9qcy9wbHVnaW5zL3VwbG9hZGVycy9maWxlaW5wdXQubWluLmpzXCI+PC9zY3JpcHQ+XG5cdFx0XHRcdFx0PHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwic3RhdGljL2Fzc2V0cy9qcy9wbHVnaW5zL2Zvcm1zL3NlbGVjdHMvc2VsZWN0Mi5taW4uanNcIj48L3NjcmlwdD5cblxuICAgICAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cInN0YXRpYy9hc3NldHMvanMvY29yZS9hcHAuanNcIj48L3NjcmlwdD5cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJzdGF0aWMvYXNzZXRzL2pzL3BhZ2VzL3VwbG9hZGVyX2Jvb3RzdHJhcC5qc1wiPjwvc2NyaXB0PlxuXHRcdFx0XHRcdDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cInN0YXRpYy9hc3NldHMvanMvcGFnZXMvZm9ybV9zZWxlY3QyLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwic3RhdGljL2Fzc2V0cy9qcy9wbHVnaW5zL3VpL3JpcHBsZS5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgIDwvSGVhZD5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSGVhZC5qcyIsIm1vZHVsZS5leHBvcnRzPXtcbiAgc3RhbXBib3ggOiB7XG4gICAgaGVpZ2h0IDogJzEwMHB4JyxcbiAgICBib3JkZXIgOiAnMXB4IHNvbGlkIGJsYWNrJ1xuICB9LFxuICBzdGFtcDoge1xuICAgIG1hcmdpblRvcCA6ICc4MHB4JyxcbiAgICB0ZXh0QWxpZ24gOiAnY2VudGVyJ1xuICB9LFxuICBzaWduYXR1cmVCb3g6e1xuICAgIG1hcmdpblRvcDogJzgwcHgnLFxuICAgIHRleHRBbGlnbiA6J2NlbnRlcicsXG4gICAgYm9yZGVyVG9wOiAndGhpbiBkb3VibGUgIzAwMDAwMCdcbiAgfSxcbiAgdG9DZW50ZXI6IHtcbiAgICB0ZXh0QWxpZ246J2NlbnRlcicsXG4gICAgcGFkZGluZ1RvcDogJzEwcHgnLFxuICAgIHBhZGRpbmdMZWZ0OiAnMHB4JyxcbiAgICBtYXJnaW5MZWZ0OiAnNXB4JyxcbiAgICBmb250U2l6ZTogJzEzcHgnXG4gIH0sXG4gIGltYWdlIDp7XG4gICAgaGVpZ2h0OiAnODBweCcsXG4gICAgd2lkdGg6ICc4MHB4JyxcbiAgICBwYWRkaW5nVG9wOiAnMTBweCcsXG4gICAgcGFkZGluZ0xlZnQ6ICcwcHgnLFxuICAgIG1hcmdpbkxlZnQ6ICcwcHgnXG4gIH0sXG4gIG5vcGFkZGluZzp7XG4gICAgcGFkZGluZ0xlZnQ6JzBweCcsXG4gICAgcGFkZGluZ1JpZ2h0OicwcHgnLFxuICAgIG1hcmdpbkxlZnQ6ICcwcHgnLFxuICAgIG1hcmdpblJpZ2h0OicwcHgnLFxuICB9LFxuICBmb250OntcbiAgICB0ZXh0QWxpZ246J2NlbnRlcicsXG4gICAgcGFkZGluZ1RvcDogJzEwcHgnLFxuICAgIHBhZGRpbmdMZWZ0OiAnMHB4JyxcbiAgICBwYWRkaW5nUmlnaHQ6JzBweCcsXG4gICAgbWFyZ2luTGVmdDogJzBweCcsXG4gICAgbWFyZ2luUmlnaHQ6JzBweCcsXG4gICAgZm9udFNpemU6ICcxMXB4J1xuICB9LFxuICBzcGFuMTp7XG4gICAgZm9udFdlaWdodDonYm9sZCcsXG4gICAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnXG4gIH0sXG4gIHNwYW4yIDp7XG4gICAgYm9yZGVyU3R5bGU6ICdkb3R0ZWQnXG4gIH0sXG4gIGJvcmRlclJlbW92ZTp7XG4gICAgbWFyZ2luOiAnMHB4JyxcbiAgICBib3JkZXI6ICcxcHggc29saWQgYmxhY2snXG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3N0eWxlc2hlZXRzL3N0eWxlLmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFHQTtBQUFBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7Ozs7QUFHQTtBQUNBOzs7O0FBR0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUF0T0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFHQTtBQUhBOzs7Ozs7QUE1QkE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0pBOztBQUdBO0FBRUE7QUFIQTs7QUFLQTtBQUVBO0FBSEE7O0FBS0E7QUFDQTtBQUVBO0FBSkE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU5BOztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFOQTs7QUFRQTtBQUNBO0FBQ0E7QUFFQTtBQUxBOztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBUkE7O0FBVUE7QUFFQTtBQUhBOztBQU1BO0FBRkE7O0FBSUE7QUFBQTtBQURBO0FBbERBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        