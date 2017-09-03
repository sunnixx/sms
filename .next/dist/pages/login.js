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

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/sumair/MEAN STACK/My Work/sms/pages/login.js?entry";


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", { className: "login-container", __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, _react2.default.createElement(_Head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }), _react2.default.createElement("div", { className: "page-container", __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, _react2.default.createElement("div", { className: "page-content", __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement("div", { className: "content-wrapper", __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement("div", { className: "content", __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement("form", { action: "/login", method: "post", __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement("div", { className: "panel panel-body login-form", __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement("div", { className: "text-center", __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement("div", { className: "icon-object border-slate-300 text-slate-300", __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement("img", { width: "100", height: "80", src: "static/assets/images/logo-1.jpg", __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      })), _react2.default.createElement("h5", { className: "content-group", __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, "Login to your account ", _react2.default.createElement("small", { className: "display-block", __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, "Enter your Email and Password below"))), _react2.default.createElement("div", { className: "form-group has-feedback has-feedback-left", __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement("input", { type: "text", className: "form-control", name: "username", placeholder: "Username", __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), _react2.default.createElement("div", { className: "form-control-feedback", __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement("i", { className: "icon-user text-muted", __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }))), _react2.default.createElement("div", { className: "form-group has-feedback has-feedback-left", __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement("input", { type: "password", className: "form-control", name: "password", placeholder: "Password", __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), _react2.default.createElement("div", { className: "form-control-feedback", __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement("i", { className: "icon-lock2 text-muted", __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }))), _react2.default.createElement("div", { className: "form-group", __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement("button", { type: "submit", className: "btn bg-pink-400 btn-block", __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, "Sign in ", _react2.default.createElement("i", { className: "icon-circle-right2 position-right", __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }))), _react2.default.createElement("div", { className: "text-center", __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement("a", { href: "login_password_recover.html", __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, "Forgot password?")))), _react2.default.createElement("div", { className: "footer text-muted text-center", __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, "\xA9 2017. ", _react2.default.createElement(_link2.default, { href: "#", __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, "School Management Portal")), " by ", _react2.default.createElement(_link2.default, { href: "http://www.cichub.org", __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement("a", { target: "_blank", __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, "CIC HUB"))))))));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;