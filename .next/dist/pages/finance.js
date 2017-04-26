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

var _Sidebar = require("./components/Sidebar");

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _TopMenu = require("./components/TopMenu");

var _TopMenu2 = _interopRequireDefault(_TopMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", null, _react2.default.createElement(_Head2.default, { echartsSrc: "static/assets/js/plugins/visualization/echarts/echarts.js", pieChartSrc: "static/assets/js/charts/echarts/pies_donuts.js" }), _react2.default.createElement(_TopMenu2.default, null), _react2.default.createElement("div", { className: "page-container" }, _react2.default.createElement("div", { className: "page-content" }, _react2.default.createElement(_Sidebar2.default, { financeActive: "active", challanShow: "block", challanActive: "active" }), _react2.default.createElement("div", { className: "content-wrapper" }, _react2.default.createElement("div", { className: "content" }, _react2.default.createElement("div", { className: "row" }, _react2.default.createElement("div", { className: "col-md-12" }, _react2.default.createElement("div", { className: "panel panel-flat" }, _react2.default.createElement("div", { className: "panel-body" }, _react2.default.createElement("div", { className: "chart-container has-scroll" }, _react2.default.createElement("div", { className: "chart has-fixed-height has-minimum-width", id: "basic_pie", style: { WebkitTapHighlightColor: "transparent", userSelect: "none", backgroundColor: "rgba(0, 0, 0, 0)", cursor: "default" } }, _react2.default.createElement("div", { style: { position: "relative", overflow: "hidden", width: "600px", height: "400px" } }, _react2.default.createElement("div", { "data-zr-dom-id": "bg", className: "zr-element", style: { position: "absolute", left: "0px", top: "0px", width: "600px", height: "400px", userSelect: "none" } }), _react2.default.createElement("canvas", { width: "600", height: "400", "data-zr-dom-id": "0", className: "zr-element", style: { position: "absolute", left: "0px", top: "0px", width: "600px", height: "400px", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" } }), _react2.default.createElement("canvas", { width: "600", height: "400", "data-zr-dom-id": "1", className: "zr-element", style: { position: "absolute", left: "0px", top: "0px", width: "600px", height: "400px", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" } }), _react2.default.createElement("canvas", { width: "600", height: "400", "data-zr-dom-id": "_zrender_hover_", className: "zr-element", style: { position: "absolute", left: "0px", top: "0px", width: "600px", height: "400px", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" } }), _react2.default.createElement("div", { className: "echarts-dataview", style: { position: "absolute", display: "block", overflow: "hidden", transition: "height 0.8s, background-color 1s", zIndex: "1", left: "0px", top: "0px", width: "600px", height: "0px", backgroundColor: "rgb(240, 255, 255)" } }), _react2.default.createElement("div", { className: "echarts-tooltip zr-element", style: { position: "absolute", display: "none", borderStyle: "solid", whiteSpace: "nowrap", transition: "left 0.4s, top 0.4s", backgroundColor: "rgba(0, 0, 0, 0.8)", borderWidth: "0px", borderColor: "rgb(51, 51, 51)", borderRadius: "4px", color: "rgb(255, 255, 255)", fontFamily: "Roboto, sans-serif", padding: "8px 12px", left: "204px", top: "91px" } }, "Browsers ", _react2.default.createElement("br", null), "Chrome: 1,548 (60.42%)"))))))))), _react2.default.createElement("div", { className: "col-md-12" }, _react2.default.createElement("div", { className: "panel panel-flat" }, _react2.default.createElement("div", { className: "panel-heading" }, _react2.default.createElement("h5", { className: "panel-title" }, "Students information regarding Challan")), _react2.default.createElement("table", { className: "table datatable-basic" }, _react2.default.createElement("thead", null, _react2.default.createElement("tr", null, _react2.default.createElement("th", null, "First Name"), _react2.default.createElement("th", null, "Last Name"), _react2.default.createElement("th", null, "Guardian's Name"), _react2.default.createElement("th", null, "DOB"), _react2.default.createElement("th", null, "Status"), _react2.default.createElement("th", { className: "text-center" }, "Actions"))), _react2.default.createElement("tbody", null, _react2.default.createElement("tr", null, _react2.default.createElement("td", null, "Marth"), _react2.default.createElement("td", null, "Enright"), _react2.default.createElement("td", null, "Mr. Asad Channa"), _react2.default.createElement("td", null, "22 Jun 1972"), _react2.default.createElement("td", null, _react2.default.createElement("span", { className: "label label-success" }, "Paid")), _react2.default.createElement("td", { className: "text-center" }, _react2.default.createElement("ul", { className: "icons-list" }, _react2.default.createElement("li", { className: "dropdown" }, _react2.default.createElement("a", { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" }, _react2.default.createElement("i", { className: "icon-menu9" })), _react2.default.createElement("ul", { className: "dropdown-menu dropdown-menu-right" }, _react2.default.createElement("li", null, _react2.default.createElement("a", { href: "#" }, _react2.default.createElement("i", { className: "icon-file-pdf" }), " Generate Challan"))))))), _react2.default.createElement("tr", null, _react2.default.createElement("td", null, "Jackelyn"), _react2.default.createElement("td", null, "Weible"), _react2.default.createElement("td", null, _react2.default.createElement("a", { href: "#" }, "Mr. Norullah Baloch")), _react2.default.createElement("td", null, "3 Oct 1981"), _react2.default.createElement("td", null, _react2.default.createElement("span", { className: "label label-success" }, "Paid")), _react2.default.createElement("td", { className: "text-center" }, _react2.default.createElement("ul", { className: "icons-list" }, _react2.default.createElement("li", { className: "dropdown" }, _react2.default.createElement("a", { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" }, _react2.default.createElement("i", { className: "icon-menu9" })), _react2.default.createElement("ul", { className: "dropdown-menu dropdown-menu-right" }, _react2.default.createElement("li", null, _react2.default.createElement("a", { href: "#" }, _react2.default.createElement("i", { className: "icon-file-pdf" }), " Generate Challan"))))))), _react2.default.createElement("tr", null, _react2.default.createElement("td", null, "Aura"), _react2.default.createElement("td", null, "Hard"), _react2.default.createElement("td", null, "Dr. Zahid Shaikh"), _react2.default.createElement("td", null, "19 Apr 1969"), _react2.default.createElement("td", null, _react2.default.createElement("span", { className: "label label-danger" }, "Not Paid")), _react2.default.createElement("td", { className: "text-center" }, _react2.default.createElement("ul", { className: "icons-list" }, _react2.default.createElement("li", { className: "dropdown" }, _react2.default.createElement("a", { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" }, _react2.default.createElement("i", { className: "icon-menu9" })), _react2.default.createElement("ul", { className: "dropdown-menu dropdown-menu-right" }, _react2.default.createElement("li", null, _react2.default.createElement("a", { href: "#" }, _react2.default.createElement("i", { className: "icon-file-pdf" }), " Generate Challan"))))))), _react2.default.createElement("tr", null, _react2.default.createElement("td", null, "Nathalie"), _react2.default.createElement("td", null, _react2.default.createElement("a", { href: "#" }, "Pretty")), _react2.default.createElement("td", null, "Mr. Sunny Kumar"), _react2.default.createElement("td", null, "13 Dec 1977"), _react2.default.createElement("td", null, _react2.default.createElement("span", { className: "label label-danger" }, "Not Paid")), _react2.default.createElement("td", { className: "text-center" }, _react2.default.createElement("ul", { className: "icons-list" }, _react2.default.createElement("li", { className: "dropdown" }, _react2.default.createElement("a", { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" }, _react2.default.createElement("i", { className: "icon-menu9" })), _react2.default.createElement("ul", { className: "dropdown-menu dropdown-menu-right" }, _react2.default.createElement("li", null, _react2.default.createElement("a", { href: "#" }, _react2.default.createElement("i", { className: "icon-file-pdf" }), " Generate Challan")))))))))))))));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;