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

var _Head = require("./components/Head");

var _Head2 = _interopRequireDefault(_Head);

var _link = require("next\\dist\\lib\\link.js");

var _link2 = _interopRequireDefault(_link);

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

var _Sidebar = require("./components/Sidebar");

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _TopMenu = require("./components/TopMenu");

var _TopMenu2 = _interopRequireDefault(_TopMenu);

var _monthlyChart = require("./components/charts/monthlyChart");

var _monthlyChart2 = _interopRequireDefault(_monthlyChart);

var _monthlyAmount = require("./components/charts/monthlyAmount");

var _monthlyAmount2 = _interopRequireDefault(_monthlyAmount);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class(props) {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

    _this.state = { data: [] };
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _jquery2.default.get('/allstudents', function (response) {
        _this2.setState({ data: response });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", null, _react2.default.createElement(_Head2.default, null), _react2.default.createElement(_TopMenu2.default, null), _react2.default.createElement("div", { className: "page-container" }, _react2.default.createElement("div", { className: "page-content" }, _react2.default.createElement(_Sidebar2.default, { financeActive: "active", challanShow: "block", challanActive: "active" }), _react2.default.createElement("div", { className: "content-wrapper" }, _react2.default.createElement("div", { className: "content" }, _react2.default.createElement("div", { className: "row" }, _react2.default.createElement("div", { className: "col-md-6" }, _react2.default.createElement("div", { className: "panel panel-flat" }, _react2.default.createElement("div", { className: "panel-body" }, _react2.default.createElement(_monthlyChart2.default, null)))), _react2.default.createElement("div", { className: "col-md-6" }, _react2.default.createElement("div", { className: "panel panel-flat" }, _react2.default.createElement("div", { className: "panel-body" }, _react2.default.createElement(_monthlyAmount2.default, null)))))), _react2.default.createElement("div", { className: "col-md-12" }, _react2.default.createElement("div", { className: "panel panel-flat" }, _react2.default.createElement("div", { className: "panel-heading" }, _react2.default.createElement("h5", { className: "panel-title" }, "Students information regarding Challan")), _react2.default.createElement("table", { className: "table datatable-basic" }, _react2.default.createElement("thead", null, _react2.default.createElement("tr", null, _react2.default.createElement("th", null, "First Name"), _react2.default.createElement("th", null, "Last Name"), _react2.default.createElement("th", null, "Fathers Name"), _react2.default.createElement("th", null, "Issue Date"), _react2.default.createElement("th", null, "Fee Month"), _react2.default.createElement("th", null, "Due Date"), _react2.default.createElement("th", null, "Status"), _react2.default.createElement("th", { className: "text-center" }, "Actions"))), _react2.default.createElement("tbody", null, this.state.data.map(function (element) {
        return _react2.default.createElement("tr", { key: element.id }, _react2.default.createElement("td", { key: 'firstname' + element.id }, element.fname + element.rollNo), _react2.default.createElement("td", { key: 'lastname' + element.id }, element.lname), _react2.default.createElement("td", { key: 'guard' + element.id }, element.guardian), _react2.default.createElement("td", { key: 'Issue' + element.id }, element.issueDate), _react2.default.createElement("td", { key: 'MonthFee' + element.id }, element.feeMonth), _react2.default.createElement("td", { key: 'Date' + element.id }, element.dueDate), _react2.default.createElement("td", { key: 'status' + element.id }, _react2.default.createElement("span", { className: "label label-success" }, "Paid")), _react2.default.createElement("td", { key: 'text' + element.id, className: "text-center" }, _react2.default.createElement("ul", { key: 'iconlist' + element.id, className: "icons-list" }, _react2.default.createElement("li", { key: 'dropdown' + element.id, className: "dropdown" }, _react2.default.createElement("a", { key: 'dropdowntoggle' + element.id, href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" }, _react2.default.createElement("i", { key: 'iconmenu9' + element.id, className: "icon-menu9" })), _react2.default.createElement("ul", { key: 'dropdownmenu' + element.id, className: "dropdown-menu dropdown-menu-right" }, _react2.default.createElement(_link2.default, { href: { pathname: '/generatechallan', query: { rollNo: element.rollNo } } }, _react2.default.createElement("li", null, _react2.default.createElement("a", null, _react2.default.createElement("i", { className: "icon-file-pdf" }), "Generate Challan"))))))));
      })))))))));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;