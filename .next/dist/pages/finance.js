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

var _echartsForReact = require("echarts-for-react");

var _echartsForReact2 = _interopRequireDefault(_echartsForReact);

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
    key: "getOptions",
    value: function getOptions() {
      var basic_pie_options = {

        // Add title
        title: {
          text: 'Challan Overview',
          subtext: 'Shows number of challans collected vs remaining',
          x: 'center'
        },

        // Add tooltip
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },

        // Add legend
        legend: {
          orient: 'vertical',
          x: 'left',
          data: ['Issued', 'Not Issued', 'Pending']
        },

        // Display toolbox
        toolbox: {
          show: true,
          orient: 'vertical',
          feature: {
            mark: {
              show: true,
              title: {
                mark: 'Markline switch',
                markUndo: 'Undo markline',
                markClear: 'Clear markline'
              }
            },
            magicType: {
              show: true,
              title: {
                pie: 'Switch to pies',
                funnel: 'Switch to funnel'
              },
              type: ['pie', 'funnel'],
              option: {
                funnel: {
                  x: '25%',
                  y: '20%',
                  width: '50%',
                  height: '70%',
                  funnelAlign: 'left',
                  max: 1548
                }
              }
            },
            restore: {
              show: true,
              title: 'Restore'
            },
            saveAsImage: {
              show: true,
              title: 'Same as image',
              lang: ['Save']
            }
          }
        },

        // Enable drag recalculate
        calculable: true,

        // Add series
        series: [{
          name: 'Challans',
          type: 'pie',
          radius: '70%',
          center: ['50%', '57.5%'],
          data: [{ value: 20, name: 'Not Issued' }, { value: 130, name: 'Issued' }, { value: 40, name: 'Pending' }]
        }]
      };
      return basic_pie_options;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", null, _react2.default.createElement(_Head2.default, null), _react2.default.createElement(_TopMenu2.default, null), _react2.default.createElement("div", { className: "page-container" }, _react2.default.createElement("div", { className: "page-content" }, _react2.default.createElement(_Sidebar2.default, { financeActive: "active", challanShow: "block", challanActive: "active" }), _react2.default.createElement("div", { className: "content-wrapper" }, _react2.default.createElement("div", { className: "content" }, _react2.default.createElement("div", { className: "row" }, _react2.default.createElement("div", { className: "col-md-12" }, _react2.default.createElement("div", { className: "panel panel-flat" }, _react2.default.createElement("div", { className: "panel-body" }, _react2.default.createElement(_echartsForReact2.default, {
        option: this.getOptions(),
        style: { height: '350px', width: '100%' },
        className: "react_for_echarts" })))))), _react2.default.createElement("div", { className: "col-md-12" }, _react2.default.createElement("div", { className: "panel panel-flat" }, _react2.default.createElement("div", { className: "panel-heading" }, _react2.default.createElement("h5", { className: "panel-title" }, "Students information regarding Challan")), _react2.default.createElement("table", { className: "table datatable-basic" }, _react2.default.createElement("thead", null, _react2.default.createElement("tr", null, _react2.default.createElement("th", null, "First Name"), _react2.default.createElement("th", null, "Last Name"), _react2.default.createElement("th", null, "Guardian's Name"), _react2.default.createElement("th", null, "DOB"), _react2.default.createElement("th", null, "Status"), _react2.default.createElement("th", { className: "text-center" }, "Actions"))), _react2.default.createElement("tbody", null, _react2.default.createElement("tr", null, _react2.default.createElement("td", null, "Marth"), _react2.default.createElement("td", null, "Enright"), _react2.default.createElement("td", null, "Mr. Asad Channa"), _react2.default.createElement("td", null, "22 Jun 1972"), _react2.default.createElement("td", null, _react2.default.createElement("span", { className: "label label-success" }, "Paid")), _react2.default.createElement("td", { className: "text-center" }, _react2.default.createElement("ul", { className: "icons-list" }, _react2.default.createElement("li", { className: "dropdown" }, _react2.default.createElement("a", { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" }, _react2.default.createElement("i", { className: "icon-menu9" })), _react2.default.createElement("ul", { className: "dropdown-menu dropdown-menu-right" }, _react2.default.createElement("li", null, _react2.default.createElement("a", { href: "#" }, _react2.default.createElement("i", { className: "icon-file-pdf" }), " Generate Challan"))))))), _react2.default.createElement("tr", null, _react2.default.createElement("td", null, "Jackelyn"), _react2.default.createElement("td", null, "Weible"), _react2.default.createElement("td", null, _react2.default.createElement("a", { href: "#" }, "Mr. Norullah Baloch")), _react2.default.createElement("td", null, "3 Oct 1981"), _react2.default.createElement("td", null, _react2.default.createElement("span", { className: "label label-danger" }, "Not Paid")), _react2.default.createElement("td", { className: "text-center" }, _react2.default.createElement("ul", { className: "icons-list" }, _react2.default.createElement("li", { className: "dropdown" }, _react2.default.createElement("a", { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" }, _react2.default.createElement("i", { className: "icon-menu9" })), _react2.default.createElement("ul", { className: "dropdown-menu dropdown-menu-right" }, _react2.default.createElement("li", null, _react2.default.createElement("a", { href: "#" }, _react2.default.createElement("i", { className: "icon-file-pdf" }), " Generate Challan")))))))))))))));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;