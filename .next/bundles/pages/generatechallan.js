
          window.__NEXT_REGISTER_PAGE('/generatechallan', function() {
            var comp = module.exports =
webpackJsonp([8],{

/***/ 1031:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(242);

var _keys2 = _interopRequireDefault(_keys);

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

var _style = __webpack_require__(1032);

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
          lineNumber: 31
        }
      }, _react2.default.createElement("div", { className: "col-md-4 col-sm-4 col-xs-4", __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement("div", { className: "col-md-4 col-sm-2 col-xs-2", __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement("img", { src: "static/assets/images/logo-1.jpg", className: "img-responsive", __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      })), _react2.default.createElement("div", { className: "col-md-6 col-sm-6 col-xs-6", __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, "Bank Alfalah Limited"), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), _react2.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, "Islamic Banking"), " ", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }), _react2.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, "Latifabad Branch Block C"), " ", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), _react2.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, "Civic Center Unit No. 7"), " ", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), _react2.default.createElement("span", { style: { border: "3px dotted" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, "A/C No 5631-5000622021"))), _react2.default.createElement("div", { className: "col-md-2 col-sm-2 col-xs-2", __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement("p", { style: { fontSize: "9px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, "Bank Copy"))), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }), _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement("div", { className: "col-md-offset-2 col-sm-offset-2 col-xs-offset-2 col-md-10 col-sm-10 col-xs-10", __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement("p", { style: { marginBottom: "0" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement("u", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, "International Islamic University Islamabad Schools"))), _react2.default.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, "Latifabad Campus")))), _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement("table", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, this.state.data.map(function (element) {
        return _react2.default.createElement("tr", { key: "feesinforow" + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        }, _react2.default.createElement("td", { key: "geesinfocell" + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        }, (0, _keys2.default)(element)[1]), _react2.default.createElement("td", { key: "feesinfodues" + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        }));
      }))))), _react2.default.createElement("div", { className: "col-md-4", __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }), _react2.default.createElement("div", { className: "col-md-4", __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }));
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
          lineNumber: 92
        }
      }, _react2.default.createElement(_Head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }), _react2.default.createElement("div", { className: "col-md-12 col-sm-12 col-xs-12", style: { backgroundColor: "#fff" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, _react2.default.createElement("div", { className: "container", __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 96
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

/***/ 1032:
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

/***/ 1033:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1031);


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

},[1033]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9nZW5lcmF0ZWNoYWxsYW4uanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9nZW5lcmF0ZWNoYWxsYW4uanM/NWYyYTQ2YiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0eWxlc2hlZXRzL3N0eWxlLmpzP2UwYmJjZTYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkLmpzP2UwYmJjZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgSGVhZCBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkXCJcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9zdHlsZXNoZWV0cy9zdHlsZS5qc1wiXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgZGF0YTogW10gfVxuICAgIC8vIHRoaXMucHJvcHMgPSB7cm9sbE5vOicnfVxuXG4gICAgdGhpcy5nZXRDaGFsbGFuRGF0YSA9IHRoaXMuZ2V0Q2hhbGxhbkRhdGEuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlbmRlckNoYWxsYW5EYXRhID0gdGhpcy5yZW5kZXJDaGFsbGFuRGF0YS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucHJpbnRBbGxDaGFsbGFuID0gdGhpcy5wcmludEFsbENoYWxsYW4uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGdldENoYWxsYW5EYXRhKCkge1xuICAgIGF4aW9zLmdldChcIi9TZW5kX0NoYWxsYW5EYXRhP3JvbGxObz1cIiArIHRoaXMucHJvcHMudXJsLnF1ZXJ5LnJvbGxObykudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiByZXNwb25zZS5kYXRhIH0pXG4gICAgfSlcbiAgfVxuXG4gIHByaW50QWxsQ2hhbGxhbigpe1xuICAgIC8vIGNvbnNvbGUubG9nKFwiUFJJTlQgQUxMIENIQUxMQU5cIik7XG4gICAgYXhpb3MuZ2V0KFwiL2FsbHN0dWRlbnRzXCIpLnRoZW4ocmVzPT50aGlzLnNldFN0YXRlKHtkYXRhOnJlcy5kYXRhfSkpO1xuICB9XG5cbiAgcmVuZGVyQ2hhbGxhbkRhdGEoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPG1haW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgY29sLXNtLTQgY29sLXhzLTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBjb2wtc20tMiBjb2wteHMtMlwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cInN0YXRpYy9hc3NldHMvaW1hZ2VzL2xvZ28tMS5qcGdcIiBjbGFzc05hbWU9XCJpbWctcmVzcG9uc2l2ZVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLXNtLTYgY29sLXhzLTZcIj5cbiAgICAgICAgICAgICAgPGNlbnRlcj5cbiAgICAgICAgICAgICAgICA8Yj5CYW5rIEFsZmFsYWggTGltaXRlZDwvYj48YnIgLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj5Jc2xhbWljIEJhbmtpbmc8L3NwYW4+IDxiciAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPkxhdGlmYWJhZCBCcmFuY2ggQmxvY2sgQzwvc3Bhbj4gPGJyIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+Q2l2aWMgQ2VudGVyIFVuaXQgTm8uIDc8L3NwYW4+IDxiciAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Ym9yZGVyOlwiM3B4IGRvdHRlZFwifX0+QS9DIE5vIDU2MzEtNTAwMDYyMjAyMTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9jZW50ZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTIgY29sLXNtLTIgY29sLXhzLTJcIj5cbiAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTpcIjlweFwifX0+QmFuayBDb3B5PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLW9mZnNldC0yIGNvbC1zbS1vZmZzZXQtMiBjb2wteHMtb2Zmc2V0LTIgY29sLW1kLTEwIGNvbC1zbS0xMCBjb2wteHMtMTBcIj5cbiAgICAgICAgICAgICAgPHAgc3R5bGU9e3ttYXJnaW5Cb3R0b206XCIwXCJ9fT48Yj48dT5JbnRlcm5hdGlvbmFsIElzbGFtaWMgVW5pdmVyc2l0eSBJc2xhbWFiYWQgU2Nob29sczwvdT48L2I+PC9wPlxuICAgICAgICAgICAgICA8Y2VudGVyPjxwPkxhdGlmYWJhZCBDYW1wdXM8L3A+PC9jZW50ZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YS5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e1wiZmVlc2luZm9yb3dcIitlbGVtZW50Ll9pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17XCJnZWVzaW5mb2NlbGxcIitlbGVtZW50Ll9pZH0+e09iamVjdC5rZXlzKGVsZW1lbnQpWzFdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17XCJmZWVzaW5mb2R1ZXNcIitlbGVtZW50Ll9pZH0+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XG4gICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYodGhpcy5wcm9wcy51cmwucXVlcnkucm9sbE5vID09PSBcInByaW50YWxsXCIpe1xuICAgICAgdGhpcy5wcmludEFsbENoYWxsYW4oKTtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMuZ2V0Q2hhbGxhbkRhdGEoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGNvbC1zbS0xMiBjb2wteHMtMTJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcIiNmZmZcIn19ICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93JyA+XG4gICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNoYWxsYW5EYXRhKCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2dlbmVyYXRlY2hhbGxhbi5qcz9lbnRyeSIsIm1vZHVsZS5leHBvcnRzPXtcbiAgc3RhbXBib3ggOiB7XG4gICAgaGVpZ2h0IDogJzEwMHB4JyxcbiAgICBib3JkZXIgOiAnMXB4IHNvbGlkIGJsYWNrJ1xuICB9LFxuICBzdGFtcDoge1xuICAgIG1hcmdpblRvcCA6ICc4MHB4JyxcbiAgICB0ZXh0QWxpZ24gOiAnY2VudGVyJ1xuICB9LFxuICBzaWduYXR1cmVCb3g6e1xuICAgIG1hcmdpblRvcDogJzgwcHgnLFxuICAgIHRleHRBbGlnbiA6J2NlbnRlcicsXG4gICAgYm9yZGVyVG9wOiAndGhpbiBkb3VibGUgIzAwMDAwMCdcbiAgfSxcbiAgdG9DZW50ZXI6IHtcbiAgICB0ZXh0QWxpZ246J2NlbnRlcicsXG4gICAgcGFkZGluZ1RvcDogJzEwcHgnLFxuICAgIHBhZGRpbmdMZWZ0OiAnMHB4JyxcbiAgICBtYXJnaW5MZWZ0OiAnNXB4JyxcbiAgICBmb250U2l6ZTogJzEzcHgnXG4gIH0sXG4gIGltYWdlIDp7XG4gICAgaGVpZ2h0OiAnODBweCcsXG4gICAgd2lkdGg6ICc4MHB4JyxcbiAgICBwYWRkaW5nVG9wOiAnMTBweCcsXG4gICAgcGFkZGluZ0xlZnQ6ICcwcHgnLFxuICAgIG1hcmdpbkxlZnQ6ICcwcHgnXG4gIH0sXG4gIG5vcGFkZGluZzp7XG4gICAgcGFkZGluZ0xlZnQ6JzBweCcsXG4gICAgcGFkZGluZ1JpZ2h0OicwcHgnLFxuICAgIG1hcmdpbkxlZnQ6ICcwcHgnLFxuICAgIG1hcmdpblJpZ2h0OicwcHgnLFxuICB9LFxuICBmb250OntcbiAgICB0ZXh0QWxpZ246J2NlbnRlcicsXG4gICAgcGFkZGluZ1RvcDogJzEwcHgnLFxuICAgIHBhZGRpbmdMZWZ0OiAnMHB4JyxcbiAgICBwYWRkaW5nUmlnaHQ6JzBweCcsXG4gICAgbWFyZ2luTGVmdDogJzBweCcsXG4gICAgbWFyZ2luUmlnaHQ6JzBweCcsXG4gICAgZm9udFNpemU6ICcxMXB4J1xuICB9LFxuICBzcGFuMTp7XG4gICAgZm9udFdlaWdodDonYm9sZCcsXG4gICAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnXG4gIH0sXG4gIHNwYW4yIDp7XG4gICAgYm9yZGVyU3R5bGU6ICdkb3R0ZWQnXG4gIH0sXG4gIGJvcmRlclJlbW92ZTp7XG4gICAgbWFyZ2luOiAnMHB4JyxcbiAgICBib3JkZXI6ICcxcHggc29saWQgYmxhY2snXG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3N0eWxlc2hlZXRzL3N0eWxlLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuKFxuICAgICAgPEhlYWQ+XG4gICAgICAgICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCIgIC8+XG4gICAgICAgIFx0PG1ldGEgaHR0cC1lcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cbiAgICAgICAgXHQ8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICBcdDx0aXRsZT5JbnRlcm5hdGlvbmFsIElzbGFtaWMgVW5pdmVyc2l0eSBJc2xhbWFiYWQgLSBMYXRpZmFiYWQgQ2FtcHVzPC90aXRsZT5cblxuICAgICAgICBcdDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjQwMCwzMDAsMTAwLDUwMCw3MDAsOTAwXCIgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIC8+XG4gICAgICAgIFx0PGxpbmsgaHJlZj1cInN0YXRpYy9hc3NldHMvY3NzL2ljb25zL2ljb21vb24vc3R5bGVzLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiAvPlxuICAgICAgICBcdDxsaW5rIGhyZWY9XCJzdGF0aWMvYXNzZXRzL2Nzcy9ib290c3RyYXAuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIC8+XG4gICAgICAgIFx0PGxpbmsgaHJlZj1cInN0YXRpYy9hc3NldHMvY3NzL2NvcmUuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIC8+XG4gICAgICAgIFx0PGxpbmsgaHJlZj1cInN0YXRpYy9hc3NldHMvY3NzL2NvbXBvbmVudHMuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIC8+XG4gICAgICAgIFx0PGxpbmsgaHJlZj1cInN0YXRpYy9hc3NldHMvY3NzL2NvbG9ycy5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgLz5cblxuICAgICAgICBcdDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cInN0YXRpYy9hc3NldHMvanMvcGx1Z2lucy9sb2FkZXJzL3BhY2UubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIFx0PHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwic3RhdGljL2Fzc2V0cy9qcy9jb3JlL2xpYnJhcmllcy9qcXVlcnkubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIFx0PHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwic3RhdGljL2Fzc2V0cy9qcy9jb3JlL2xpYnJhcmllcy9ib290c3RyYXAubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIFx0PHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwic3RhdGljL2Fzc2V0cy9qcy9wbHVnaW5zL2xvYWRlcnMvYmxvY2t1aS5taW4uanNcIj48L3NjcmlwdD5cblxuXHRcdFx0XHRcdDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cInN0YXRpYy9hc3NldHMvanMvcGx1Z2lucy91cGxvYWRlcnMvZmlsZWlucHV0Lm1pbi5qc1wiPjwvc2NyaXB0PlxuXHRcdFx0XHRcdDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cInN0YXRpYy9hc3NldHMvanMvcGx1Z2lucy9mb3Jtcy9zZWxlY3RzL3NlbGVjdDIubWluLmpzXCI+PC9zY3JpcHQ+XG5cbiAgICAgICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJzdGF0aWMvYXNzZXRzL2pzL2NvcmUvYXBwLmpzXCI+PC9zY3JpcHQ+XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0PHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwic3RhdGljL2Fzc2V0cy9qcy9wYWdlcy91cGxvYWRlcl9ib290c3RyYXAuanNcIj48L3NjcmlwdD5cblx0XHRcdFx0XHQ8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJzdGF0aWMvYXNzZXRzL2pzL3BhZ2VzL2Zvcm1fc2VsZWN0Mi5qc1wiPjwvc2NyaXB0PlxuICAgICAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cInN0YXRpYy9hc3NldHMvanMvcGx1Z2lucy91aS9yaXBwbGUubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICA8L0hlYWQ+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hlYWQuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7OztBQUdBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBSEE7O0FBUUE7QUFBQTtBQUdBO0FBSEE7QUFHQTtBQUFBO0FBS0E7QUFMQTs7Ozs7QUFRQTtBQUFBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7Ozs7QUFHQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQU9BOzs7OztBQWhHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7O0FBR0E7QUFFQTtBQUhBOztBQUtBO0FBRUE7QUFIQTs7QUFLQTtBQUNBO0FBRUE7QUFKQTs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTkE7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU5BOztBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBTEE7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFSQTs7QUFVQTtBQUVBO0FBSEE7O0FBTUE7QUFGQTs7QUFJQTtBQUFBO0FBREE7QUFsREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFHQTtBQUhBOzs7Ozs7QUE1QkE7QUFDQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        