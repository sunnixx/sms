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

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

var _Sidebar = require("../components/Sidebar");

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _TopMenu = require("../components/TopMenu");

var _TopMenu2 = _interopRequireDefault(_TopMenu);

var _monthlyChart = require("../components/charts/monthlyChart");

var _monthlyChart2 = _interopRequireDefault(_monthlyChart);

var _monthlyAmount = require("../components/charts/monthlyAmount");

var _monthlyAmount2 = _interopRequireDefault(_monthlyAmount);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/sumair/Desktop/MEAN STACK/My Work/sms-master/pages/finance.js?entry";


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class(props) {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

    _this.state = { data: [] };

    _this.getAllStudents = _this.getAllStudents.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: "getAllStudents",
    value: function getAllStudents() {
      var _this2 = this;

      _axios2.default.get('/allstudents').then(function (response) {
        _this2.setState({ data: response.data });
        // console.log(this.state.data);
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getAllStudents();
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement(_Head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), _react2.default.createElement(_TopMenu2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), _react2.default.createElement("div", { className: "page-container", __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement("div", { className: "page-content", __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement(_Sidebar2.default, { financeActive: "active", challanShow: "block", challanActive: "active", __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), _react2.default.createElement("div", { className: "content-wrapper", __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement("div", { className: "content", __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement("div", { className: "col-md-6", __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement("div", { className: "panel panel-flat", __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement("div", { className: "panel-body", __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement(_monthlyChart2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      })))), _react2.default.createElement("div", { className: "col-md-6", __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement("div", { className: "panel panel-flat", __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement("div", { className: "panel-body", __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement(_monthlyAmount2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      })))))), _react2.default.createElement("div", { className: "col-md-12", __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement("div", { className: "panel panel-flat", __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement("div", { className: "panel-heading", __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement("h5", { className: "panel-title", __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, "Students Challan Info")), _react2.default.createElement("table", { className: "table datatable-basic", __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement("thead", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, "Roll No"), _react2.default.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, "First Name"), _react2.default.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, "Last Name"), _react2.default.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, "Fathers Name"), _react2.default.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, "Issue Date"), _react2.default.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, "Fee Month"), _react2.default.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, "Due Date"), _react2.default.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, "Status"), _react2.default.createElement("th", { className: "text-center", __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, "Actions"))), _react2.default.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, this.state.data.map(function (element) {
        console.log(element);
        return _react2.default.createElement("tr", { key: element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          }
        }, _react2.default.createElement("td", { key: 'rollno' + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          }
        }, element.rollNo), _react2.default.createElement("td", { key: 'firstname' + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          }
        }, element.fname), _react2.default.createElement("td", { key: 'lastname' + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          }
        }, element.lname), _react2.default.createElement("td", { key: 'guard' + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          }
        }, element.guardian), _react2.default.createElement("td", { key: 'Issue' + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          }
        }, element.issueDate), _react2.default.createElement("td", { key: 'MonthFee' + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          }
        }, element.feeMonth), _react2.default.createElement("td", { key: 'Date' + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          }
        }, element.dueDate), _react2.default.createElement("td", { key: 'status' + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          }
        }, _react2.default.createElement("span", { className: "label label-success", __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          }
        }, "Paid")), _react2.default.createElement("td", { key: 'text' + element._id, className: "text-center", __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          }
        }, _react2.default.createElement("ul", { key: 'iconlist' + element._id, className: "icons-list", __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          }
        }, _react2.default.createElement("li", { key: 'dropdown' + element._id, className: "dropdown", __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          }
        }, _react2.default.createElement("a", { key: 'dropdowntoggle' + element._id, href: "#", className: "dropdown-toggle", "data-toggle": "dropdown", __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          }
        }, _react2.default.createElement("i", { key: 'iconmenu9' + element._id, className: "icon-menu9", __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          }
        })), _react2.default.createElement("ul", { key: 'dropdownmenu' + element._id, className: "dropdown-menu dropdown-menu-right", __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          }
        }, _react2.default.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          }
        }, _react2.default.createElement("i", { className: "icon-file-pdf", __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          }
        }), _react2.default.createElement("a", { href: "/generatechallan?rollNo=" + element.rollNo, __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          }
        }, "Generate Challan")))))));
      })))))))));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;