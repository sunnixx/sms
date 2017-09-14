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

var _jsxFileName = "/home/sumair/MEAN STACK/My Work/sms/pages/finance.js?entry";


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class(props) {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

    _this.state = { data: [], bPrint: "true" };

    _this.getAllStudents = _this.getAllStudents.bind(_this);
    _this.checkMultipleChallan = _this.checkMultipleChallan.bind(_this);
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
    key: "checkMultipleChallan",
    value: function checkMultipleChallan(e) {
      if (e.target.value === "on") {
        this.setState({ bPrint: "false" });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getAllStudents();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement(_Head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), _react2.default.createElement(_TopMenu2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }), _react2.default.createElement("div", { className: "page-container", __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement("div", { className: "page-content", __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement(_Sidebar2.default, { financeActive: "active", challanShow: "block", challanActive: "active", __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), _react2.default.createElement("div", { className: "content-wrapper", __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement("div", { className: "content", __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement("div", { className: "col-md-6", __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement("div", { className: "panel panel-flat", __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement("div", { className: "panel-body", __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement(_monthlyChart2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      })))), _react2.default.createElement("div", { className: "col-md-6", __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement("div", { className: "panel panel-flat", __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement("div", { className: "panel-body", __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement(_monthlyAmount2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      })))))), _react2.default.createElement("div", { className: "col-md-12", __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement("div", { className: "panel panel-flat", __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement("div", { className: "panel-heading", __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement("h5", { className: "panel-title", __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, "Students Challan Info")), _react2.default.createElement("table", { className: "table datatable-basic", __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement("thead", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement("input", { type: "checkbox", onClick: this.checkMultipleChallan, __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }), "Select"), _react2.default.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, "Roll No"), _react2.default.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, "First Name"), _react2.default.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, "Last Name"), _react2.default.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, "Fathers Name"), _react2.default.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, "Issue Date"), _react2.default.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, "Fee Month"), _react2.default.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, "Due Date"), _react2.default.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, "Status"), _react2.default.createElement("th", { className: "text-center", __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, "Actions"))), _react2.default.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, this.state.data.map(function (element) {
        return _react2.default.createElement("tr", { key: element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          }
        }, _react2.default.createElement("td", { key: 'checkbox' + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          }
        }, _react2.default.createElement("input", { type: "checkbox", onClick: _this3.checkMultipleChallan, __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          }
        })), _react2.default.createElement("td", { key: 'rollno' + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          }
        }, element.rollNo), _react2.default.createElement("td", { key: 'firstname' + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          }
        }, element.fname), _react2.default.createElement("td", { key: 'lastname' + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          }
        }, element.lname), _react2.default.createElement("td", { key: 'guard' + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          }
        }, element.guardian), _react2.default.createElement("td", { key: 'Issue' + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          }
        }, element.issueDate), _react2.default.createElement("td", { key: 'MonthFee' + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          }
        }, element.feeMonth), _react2.default.createElement("td", { key: 'Date' + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          }
        }, element.dueDate), _react2.default.createElement("td", { key: 'status' + element._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          }
        }, _react2.default.createElement("span", { className: "label label-success", __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          }
        }, "Paid")), _react2.default.createElement("td", { key: 'text' + element._id, className: "text-center", __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          }
        }, _react2.default.createElement("ul", { key: 'iconlist' + element._id, className: "icons-list", __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          }
        }, _react2.default.createElement("li", { key: 'dropdown' + element._id, className: "dropdown", __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          }
        }, _react2.default.createElement("a", { key: 'dropdowntoggle' + element._id, href: "#", className: "dropdown-toggle", "data-toggle": "dropdown", __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          }
        }, _react2.default.createElement("i", { key: 'iconmenu9' + element._id, className: "icon-menu9", __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          }
        })), _react2.default.createElement("ul", { key: 'dropdownmenu' + element._id, className: "dropdown-menu dropdown-menu-right", __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          }
        }, _react2.default.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          }
        }, _react2.default.createElement("i", { className: "icon-file-pdf", __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          }
        }), _react2.default.createElement("a", { href: "/generatechallan?rollNo=" + element.rollNo, __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          }
        }, "Generate Challan")))))));
      }))), _react2.default.createElement(_link2.default, { href: "/generatechallan?rollNo=printall", __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, _react2.default.createElement("button", { className: "btn btn-primary", __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, " Print All "))))))));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;