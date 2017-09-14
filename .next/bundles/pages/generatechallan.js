
          window.__NEXT_REGISTER_PAGE('/generatechallan', function() {
            var comp = module.exports =
webpackJsonp([6],{

/***/ 1148:
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

var _Head = __webpack_require__(558);

var _Head2 = _interopRequireDefault(_Head);

var _style = __webpack_require__(1149);

var _style2 = _interopRequireDefault(_style);

var _axios = __webpack_require__(562);

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

/***/ 1149:
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

/***/ 1150:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1148);


/***/ }),

/***/ 558:
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

/***/ })

},[1150]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9nZW5lcmF0ZWNoYWxsYW4uanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9nZW5lcmF0ZWNoYWxsYW4uanM/MGQ1ZGQyOSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0eWxlc2hlZXRzL3N0eWxlLmpzPzBkNWRkMjkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkLmpzPzBkNWRkMjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgSGVhZCBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkXCJcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9zdHlsZXNoZWV0cy9zdHlsZS5qc1wiXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgZGF0YTogW10gfVxuICAgIC8vIHRoaXMucHJvcHMgPSB7cm9sbE5vOicnfVxuXG4gICAgdGhpcy5nZXRDaGFsbGFuRGF0YSA9IHRoaXMuZ2V0Q2hhbGxhbkRhdGEuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlbmRlckNoYWxsYW5EYXRhID0gdGhpcy5yZW5kZXJDaGFsbGFuRGF0YS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgZ2V0Q2hhbGxhbkRhdGEoKSB7XG4gICAgYXhpb3MuZ2V0KFwiL1NlbmRfQ2hhbGxhbkRhdGE/cm9sbE5vPVwiICsgdGhpcy5wcm9wcy51cmwucXVlcnkucm9sbE5vKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IHJlc3BvbnNlLmRhdGEgfSlcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMudXJsLnF1ZXJ5LnJvbGxObyk7XG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlckNoYWxsYW5EYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmRhdGEubWFwKChlbGVtZW50KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8bWFpbiBzdHlsZT17e21hcmdpblRvcDpcIjVlbVwifX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14cy00IGNvbC1zbS00IGNvbC1tZC00JyA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMlwiID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtM1wiID5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cInN0YXRpYy9hc3NldHMvaW1nL2lpdWlsb2dvLnBuZ1wiIHN0eWxlPXtTdHlsZS5pbWFnZX0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTZcIiBzdHlsZT17U3R5bGUubm9wYWRkaW5nfSA+XG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e1N0eWxlLnRvQ2VudGVyfSA+IDxiPkJhbmsgQWxmYWxhaCBsaW1pdGVkIDwvYj48YnIgLz5cbiAgICAgICAgICAgICAgICAgIElzbGFtaWMgQmFua2luZyA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIExhdGlmYWJhZCBCcmFuY2g6IEJsb2NrIEMsIDxiciAvPiBDaXZpYyBDZW50ZXIgVW5pdCBOby4gNyA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtTdHlsZS5zcGFuMn0+QS9jIG5vIDU2MzEtNTAwMDYyMjAyMTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0zXCIgc3R5bGU9e1N0eWxlLmZvbnR9IGlkPSd0b2NlbnRlcic+XG4gICAgICAgICAgICAgICAgPHA+QmFuayBDb3B5PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTJcIj5cbiAgICAgICAgICAgICAgPHAgc3R5bGU9e1N0eWxlLnRvQ2VudGVyfT48c3BhbiBzdHlsZT17U3R5bGUuc3BhbjF9PkludGVybmF0aW9uYWwgSXNsYW1pYyBVbml2ZXJzaXR5IElzbGFtYWJhZCBTY2hvb2xzPC9zcGFuPjxiciAvPlxuICAgICAgICAgICAgICAgIExhdGlmYWJhZCBDYW1wdXM8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYga2V5PXtlbGVtZW50Ll9pZH0+XG4gICAgICAgICAgICAgIHsvKiBDaGFsbGFuIGluZm8gc3RhcnQgaGVyZSAqL31cbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2VsZW1lbnQuX2lkICsgJ2NvbC14cy0xMid9IGNsYXNzTmFtZT0nY29sLXhzLTEyJz5cbiAgICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDx0ciA+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMTQwcHgnIH19Pklzc3VlIERhdGU8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e1wiSXNzdWVcIiArIGVsZW1lbnQuX2lkfT57ZWxlbWVudC5pc3N1ZURhdGV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5GZWUgZm9yIE1vbnRoIE9mPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtcIkZlZU1vbnRoXCIgKyBlbGVtZW50Ll9pZH0+e2VsZW1lbnQuZmVlTW9udGh9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5EdWVEYXRlICo8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e1wiRHVlZGF0ZVwiICsgZWxlbWVudC5faWR9PntlbGVtZW50LmR1ZURhdGV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHsvKiBDaGFsbGFuIEluZm8gZW5kcyBoZXJlICovfVxuICAgICAgICAgICAgICB7LyogTmFtZSBTZWN0aW9uIHN0YXJ0cyBoZXJlICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTEyJz5cbiAgICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcxNDBweCcgfX0+TmFtZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17J2ZzdG5hbWUnICsgZWxlbWVudC5faWR9PntlbGVtZW50LmZuYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+RmF0aGVyIE5hbWU8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9eydndWFyZCcgKyBlbGVtZW50Ll9pZH0+e2VsZW1lbnQuZ3VhcmRpYW59PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHsvKiBOYW1lIFNlY3Rpb24gZW5kcyBoZXJlICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTEyJz5cbiAgICAgICAgICAgICAgICA8dGFibGUgPlxuICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICA8dHIgc3R5bGU9e3sgaGVpZ2h0OiAnMjBweCcgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzE0MHB4JyB9fT5HcmFkZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17J2dyZCcgKyBlbGVtZW50Ll9pZH0+e2VsZW1lbnQuZ3JhZGV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Sb2xsICM8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzQwcHgnIH19IGtleT17J3JvbGwnICsgZWxlbWVudC5faWR9PntlbGVtZW50LnJvbGxOb308L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAnM3B4JyB9fT5cbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+Q2hhbGxhbiBkZXRhaWxzPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDx0YWJsZSA+XG4gICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17eyBoZWlnaHQ6ICcxMHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICczMDBweCcgfX0+RGVzY3JpcHRpb248L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5BbW91bnQ8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHIgc3R5bGU9e3sgYm9yZGVyVG9wOiAndGhpbiBkb3VibGUgIzAwMDAwMCcgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5BZG1pc3Npb24gRmVlPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+MDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+QW5udWFsIEZlZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPjA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPkNvdXJzZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPjA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlR1dGlvbiBGZWU8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD4wPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5BcnJlYXM8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD4wPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5EdXBsaWNhdGU8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD4wPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5DaGFsbGFuPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+MDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+RmVlPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXsnZmVlJyArIGVsZW1lbnQuX2lkfT57ZWxlbWVudC5hbW91bnR9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5SZW1pbmRlcjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPjA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlBob3RvY29waWVzPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+MDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17eyBoZWlnaHQ6ICcyMHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+T3RoZXJzPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+MDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7LyogIGNoYWxsYW4gZGV0YWlsIHN0YXJ0cyBoZXJlKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiBUb3RhbCBzZWN0aW9uKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMlwiIHN0eWxlPXt7IGJvcmRlclRvcDogJ3RoaW4gZG91YmxlICMwMDAwMDAnIH19PlxuICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7IGhlaWdodDogJzQwcHgnIH19ID5cbiAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjc1cHgnIH19PlRvdGFsczwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD4wPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIFRvdGFsIFNlY3Rpb24gRW5kcyBoZXJlICovfVxuICAgICAgICAgICAgey8qIFNpZ25hdHVyZSBhbmQgU3RhbXAgU2VjdGlvbiBzdGFydHMgaGVyZSAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTVcIiBzdHlsZT17U3R5bGUuc3RhbXBib3h9PlxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtTdHlsZS5zdGFtcH0+U3RhbXA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy1vZmZzZXQtMSBjb2wteHMtNVwiIHN0eWxlPXtTdHlsZS5zaWduYXR1cmVCb3h9ID5cbiAgICAgICAgICAgICAgICA8cD5TaWduYXR1cmU8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIFNpZ25hdHVyZSBBbmQgU3RhbXAgc2VjdGlvbiBlbmRzIGhlcmUgKi99XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5nZXRDaGFsbGFuRGF0YSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZCAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiBjb2wtc20tMTIgY29sLXhzLTEyXCIgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnID5cbiAgICAgICAgICAgICAgey8qIEJhbmsgQ2hhbGxhbiBzZWN0aW9uIHN0YXJ0IGhlcmUgKi99XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ2hhbGxhbkRhdGEoKX1cbiAgICAgICAgICAgICAgey8qIEJhbmsgQ2hhbGxhbiBzZWN0aW9uIGVuZHMgaGVyZSAqL31cbiAgICAgICAgICAgICAgey8qIFNjaG9vbCBDaGFsbGFuIFNlY3Rpb24gc3RhcnRzIGhlcmUgKi99XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNoYWxsYW5EYXRhKCl9XG4gICAgICAgICAgICAgIHsvKiBTY2hvb2wgQ2hhbGxhbiBTZWN0aW9uIGVuZHMgaGVyZSAqL31cbiAgICAgICAgICAgICAgey8qIENhbmRpZGF0ZSBDaGFsbGFuIFNlY3Rpb24gc3RhcnRzIGhlcmUgKi99XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ2hhbGxhbkRhdGEoKX1cbiAgICAgICAgICAgICAgey8qIENhbmRpZGF0ZSBDaGFsbGFuIFNlY3Rpb24gRW5kcyBIZXJlICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9nZW5lcmF0ZWNoYWxsYW4uanM/ZW50cnkiLCJtb2R1bGUuZXhwb3J0cz17XG4gIHN0YW1wYm94IDoge1xuICAgIGhlaWdodCA6ICcxMDBweCcsXG4gICAgYm9yZGVyIDogJzFweCBzb2xpZCBibGFjaydcbiAgfSxcbiAgc3RhbXA6IHtcbiAgICBtYXJnaW5Ub3AgOiAnODBweCcsXG4gICAgdGV4dEFsaWduIDogJ2NlbnRlcidcbiAgfSxcbiAgc2lnbmF0dXJlQm94OntcbiAgICBtYXJnaW5Ub3A6ICc4MHB4JyxcbiAgICB0ZXh0QWxpZ24gOidjZW50ZXInLFxuICAgIGJvcmRlclRvcDogJ3RoaW4gZG91YmxlICMwMDAwMDAnXG4gIH0sXG4gIHRvQ2VudGVyOiB7XG4gICAgdGV4dEFsaWduOidjZW50ZXInLFxuICAgIHBhZGRpbmdUb3A6ICcxMHB4JyxcbiAgICBwYWRkaW5nTGVmdDogJzBweCcsXG4gICAgbWFyZ2luTGVmdDogJzVweCcsXG4gICAgZm9udFNpemU6ICcxM3B4J1xuICB9LFxuICBpbWFnZSA6e1xuICAgIGhlaWdodDogJzgwcHgnLFxuICAgIHdpZHRoOiAnODBweCcsXG4gICAgcGFkZGluZ1RvcDogJzEwcHgnLFxuICAgIHBhZGRpbmdMZWZ0OiAnMHB4JyxcbiAgICBtYXJnaW5MZWZ0OiAnMHB4J1xuICB9LFxuICBub3BhZGRpbmc6e1xuICAgIHBhZGRpbmdMZWZ0OicwcHgnLFxuICAgIHBhZGRpbmdSaWdodDonMHB4JyxcbiAgICBtYXJnaW5MZWZ0OiAnMHB4JyxcbiAgICBtYXJnaW5SaWdodDonMHB4JyxcbiAgfSxcbiAgZm9udDp7XG4gICAgdGV4dEFsaWduOidjZW50ZXInLFxuICAgIHBhZGRpbmdUb3A6ICcxMHB4JyxcbiAgICBwYWRkaW5nTGVmdDogJzBweCcsXG4gICAgcGFkZGluZ1JpZ2h0OicwcHgnLFxuICAgIG1hcmdpbkxlZnQ6ICcwcHgnLFxuICAgIG1hcmdpblJpZ2h0OicwcHgnLFxuICAgIGZvbnRTaXplOiAnMTFweCdcbiAgfSxcbiAgc3BhbjE6e1xuICAgIGZvbnRXZWlnaHQ6J2JvbGQnLFxuICAgIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJ1xuICB9LFxuICBzcGFuMiA6e1xuICAgIGJvcmRlclN0eWxlOiAnZG90dGVkJ1xuICB9LFxuICBib3JkZXJSZW1vdmU6e1xuICAgIG1hcmdpbjogJzBweCcsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJ1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9zdHlsZXNoZWV0cy9zdHlsZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIHJlbmRlcigpe1xuICAgIHJldHVybihcbiAgICAgIDxIZWFkPlxuICAgICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiICAvPlxuICAgICAgICBcdDxtZXRhIGh0dHAtZXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XG4gICAgICAgIFx0PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgXHQ8dGl0bGU+SW50ZXJuYXRpb25hbCBJc2xhbWljIFVuaXZlcnNpdHkgSXNsYW1hYmFkIC0gTGF0aWZhYmFkIENhbXB1czwvdGl0bGU+XG5cbiAgICAgICAgXHQ8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo0MDAsMzAwLDEwMCw1MDAsNzAwLDkwMFwiIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiAvPlxuICAgICAgICBcdDxsaW5rIGhyZWY9XCJzdGF0aWMvYXNzZXRzL2Nzcy9pY29ucy9pY29tb29uL3N0eWxlcy5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgLz5cbiAgICAgICAgXHQ8bGluayBocmVmPVwic3RhdGljL2Fzc2V0cy9jc3MvYm9vdHN0cmFwLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiAvPlxuICAgICAgICBcdDxsaW5rIGhyZWY9XCJzdGF0aWMvYXNzZXRzL2Nzcy9jb3JlLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiAvPlxuICAgICAgICBcdDxsaW5rIGhyZWY9XCJzdGF0aWMvYXNzZXRzL2Nzcy9jb21wb25lbnRzLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiAvPlxuICAgICAgICBcdDxsaW5rIGhyZWY9XCJzdGF0aWMvYXNzZXRzL2Nzcy9jb2xvcnMuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIC8+XG5cbiAgICAgICAgXHQ8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJzdGF0aWMvYXNzZXRzL2pzL3BsdWdpbnMvbG9hZGVycy9wYWNlLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgICBcdDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cInN0YXRpYy9hc3NldHMvanMvY29yZS9saWJyYXJpZXMvanF1ZXJ5Lm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgICBcdDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cInN0YXRpYy9hc3NldHMvanMvY29yZS9saWJyYXJpZXMvYm9vdHN0cmFwLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgICBcdDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cInN0YXRpYy9hc3NldHMvanMvcGx1Z2lucy9sb2FkZXJzL2Jsb2NrdWkubWluLmpzXCI+PC9zY3JpcHQ+XG5cblx0XHRcdFx0XHQ8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJzdGF0aWMvYXNzZXRzL2pzL3BsdWdpbnMvdXBsb2FkZXJzL2ZpbGVpbnB1dC5taW4uanNcIj48L3NjcmlwdD5cblx0XHRcdFx0XHQ8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJzdGF0aWMvYXNzZXRzL2pzL3BsdWdpbnMvZm9ybXMvc2VsZWN0cy9zZWxlY3QyLm1pbi5qc1wiPjwvc2NyaXB0PlxuXG4gICAgICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwic3RhdGljL2Fzc2V0cy9qcy9jb3JlL2FwcC5qc1wiPjwvc2NyaXB0PlxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cInN0YXRpYy9hc3NldHMvanMvcGFnZXMvdXBsb2FkZXJfYm9vdHN0cmFwLmpzXCI+PC9zY3JpcHQ+XG5cdFx0XHRcdFx0PHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwic3RhdGljL2Fzc2V0cy9qcy9wYWdlcy9mb3JtX3NlbGVjdDIuanNcIj48L3NjcmlwdD5cbiAgICAgICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJzdGF0aWMvYXNzZXRzL2pzL3BsdWdpbnMvdWkvcmlwcGxlLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgPC9IZWFkPlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkLmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7Ozs7QUFHQTtBQUNBOzs7O0FBR0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFNQTs7Ozs7QUFoTUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBOztBQUdBO0FBRUE7QUFIQTs7QUFLQTtBQUVBO0FBSEE7O0FBS0E7QUFDQTtBQUVBO0FBSkE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU5BOztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFOQTs7QUFRQTtBQUNBO0FBQ0E7QUFFQTtBQUxBOztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBUkE7O0FBVUE7QUFFQTtBQUhBOztBQU1BO0FBRkE7O0FBSUE7QUFBQTtBQURBO0FBbERBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBR0E7QUFIQTs7Ozs7O0FBNUJBO0FBQ0E7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        