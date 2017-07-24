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

var _Head = require("../Head");

var _Head2 = _interopRequireDefault(_Head);

var _style = require("../stylesheets/style");

var _style2 = _interopRequireDefault(_style);

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

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

      _jquery2.default.get('/Send_ChallanData', function (response) {
        _this2.setState({ data: response });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", null, this.state.data.map(function (element) {
        return _react2.default.createElement("div", { key: element.id }, _react2.default.createElement("div", { className: "col-xs-12" }, _react2.default.createElement("table", null, _react2.default.createElement("tbody", null, _react2.default.createElement("tr", null, _react2.default.createElement("td", { style: { width: '140' } }, "Issue Date"), _react2.default.createElement("td", { key: "Issue" + element.id }, element.issueDate)), _react2.default.createElement("tr", null, _react2.default.createElement("td", null, "Fee for Month Of"), _react2.default.createElement("td", { key: "FeeMonth" + element.id }, element.feeMonth)), _react2.default.createElement("tr", null, _react2.default.createElement("td", null, "DueDate *"), _react2.default.createElement("td", { key: "Duedate" + element.id }, element.dueDate))))), _react2.default.createElement("div", { className: "col-xs-12" }, _react2.default.createElement("table", null, _react2.default.createElement("tbody", null, _react2.default.createElement("tr", null, _react2.default.createElement("td", { style: { width: '140' } }, "Name"), _react2.default.createElement("td", { key: 'fstname' + element.id }, element.fname)), _react2.default.createElement("tr", null, _react2.default.createElement("td", null, "Father Name"), _react2.default.createElement("td", { key: 'guard' + element.id }, element.guardian))))), _react2.default.createElement("div", { className: "col-xs-12" }, _react2.default.createElement("table", null, _react2.default.createElement("tbody", null, _react2.default.createElement("tr", { style: { height: '20' } }, _react2.default.createElement("td", { style: { width: '140' } }, "Grade"), _react2.default.createElement("td", { key: 'grd' + element.id }, element.grade)), _react2.default.createElement("tr", null, _react2.default.createElement("td", null, "Roll #"), _react2.default.createElement("td", { style: { width: '40' }, key: 'roll' + element.id }, element.rollNo)))), _react2.default.createElement("div", { className: "col-xs-12", style: { marginTop: '3px' } }, _react2.default.createElement("p", { style: { textAlign: 'center' } }, "Challan details")), _react2.default.createElement("table", null, _react2.default.createElement("tbody", null, _react2.default.createElement("tr", { style: { height: '10' } }, _react2.default.createElement("td", { style: { width: '300' } }, "Description"), _react2.default.createElement("td", null, "Amount")), _react2.default.createElement("tr", { style: { borderTop: 'thin double #000000' } }, _react2.default.createElement("td", null, "Admission Fee"), _react2.default.createElement("td", null, "0")), _react2.default.createElement("tr", null, _react2.default.createElement("td", null, "Annual Fee"), _react2.default.createElement("td", null, "0")), _react2.default.createElement("tr", null, _react2.default.createElement("td", null, "Course"), _react2.default.createElement("td", null, "0")), _react2.default.createElement("tr", null, _react2.default.createElement("td", null, "Tution Fee"), _react2.default.createElement("td", null, "0")), _react2.default.createElement("tr", null, _react2.default.createElement("td", null, "Arreas"), _react2.default.createElement("td", null, "0")), _react2.default.createElement("tr", null, _react2.default.createElement("td", null, "Duplicate"), _react2.default.createElement("td", null, "0")), _react2.default.createElement("tr", null, _react2.default.createElement("td", null, "Challan"), _react2.default.createElement("td", null, "0")), _react2.default.createElement("tr", null, _react2.default.createElement("td", null, "Fee"), _react2.default.createElement("td", { key: 'fee' + element.id }, element.amount)), _react2.default.createElement("tr", null, _react2.default.createElement("td", null, "Reminder"), _react2.default.createElement("td", null, "0")), _react2.default.createElement("tr", null, _react2.default.createElement("td", null, "Photocopies"), _react2.default.createElement("td", null, "0")), _react2.default.createElement("tr", { style: { height: '20' } }, _react2.default.createElement("td", null, "Others"), _react2.default.createElement("td", null, "0"))))));
      }), _react2.default.createElement("div", { className: "col-xs-12", style: { borderTop: 'thin double #000000' } }, _react2.default.createElement("table", null, _react2.default.createElement("tbody", null, _react2.default.createElement("tr", { style: { height: '40' } }, _react2.default.createElement("td", { style: { width: '275' } }, "Totals"), _react2.default.createElement("td", null, "0"))))), _react2.default.createElement("div", { className: "col-xs-12" }, _react2.default.createElement("div", { className: "col-xs-5", style: _style2.default.stampbox }, _react2.default.createElement("p", { style: _style2.default.stamp }, "Stamp")), _react2.default.createElement("div", { className: "col-xs-offset-1 col-xs-5", style: _style2.default.signatureBox }, _react2.default.createElement("p", null, "Signature"))));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;