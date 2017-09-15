"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

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