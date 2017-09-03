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

var _style = require("../components/stylesheets/style.js");

var _style2 = _interopRequireDefault(_style);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        return _react2.default.createElement("main", null, _react2.default.createElement("div", { key: element._id }, _react2.default.createElement("div", { key: element._id + 'col-xs-12', className: "col-xs-12" }, _react2.default.createElement("table", null, _react2.default.createElement("tbody", null, _react2.default.createElement("tr", null, _react2.default.createElement("td", { style: { width: '140px' } }, "Issue Date"), _react2.default.createElement("td", { key: "Issue" + element._id }, element.issueDate)), _react2.default.createElement("tr", null, _react2.default.createElement("td", null, "Fee for Month Of"), _react2.default.createElement("td", { key: "FeeMonth" + element._id }, element.feeMonth)), _react2.default.createElement("tr", null, _react2.default.createElement("td", null, "DueDate *"), _react2.default.createElement("td", { key: "Duedate" + element._id }, element.dueDate))))), _react2.default.createElement("div", { className: "col-xs-12" }, _react2.default.createElement("table", null, _react2.default.createElement("tbody", null, _react2.default.createElement("tr", null, _react2.default.createElement("td", { style: { width: '140px' } }, "Name"), _react2.default.createElement("td", { key: 'fstname' + element._id }, element.fname)), _react2.default.createElement("tr", null, _react2.default.createElement("td", null, "Father Name"), _react2.default.createElement("td", { key: 'guard' + element._id }, element.guardian))))), _react2.default.createElement("div", { className: "col-xs-12" }, _react2.default.createElement("table", null, _react2.default.createElement("tbody", null, _react2.default.createElement("tr", { style: { height: '20px' } }, _react2.default.createElement("td", { style: { width: '140px' } }, "Grade"), _react2.default.createElement("td", { key: 'grd' + element._id }, element.grade)), _react2.default.createElement("tr", null, _react2.default.createElement("td", null, "Roll #"), _react2.default.createElement("td", { style: { width: '40px' }, key: 'roll' + element._id }, element.rollNo)))), _react2.default.createElement("div", { className: "col-xs-12", style: { marginTop: '3px' } }, _react2.default.createElement("p", { style: { textAlign: 'center' } }, "Challan details")), _react2.default.createElement("table", null, _react2.default.createElement("tbody", null, _react2.default.createElement("tr", { style: { height: '10px' } }, _react2.default.createElement("td", { style: { width: '300px' } }, "Description"), _react2.default.createElement("td", null, "Amount")), _react2.default.createElement("tr", { style: { borderTop: 'thin double #000000' } }, _react2.default.createElement("td", null, "Admission Fee"), _react2.default.createElement("td", null, "0")), _react2.default.createElement("tr", null, _react2.default.createElement("td", null, "Annual Fee"), _react2.default.createElement("td", null, "0")), _react2.default.createElement("tr", null, _react2.default.createElement("td", null, "Course"), _react2.default.createElement("td", null, "0")), _react2.default.createElement("tr", null, _react2.default.createElement("td", null, "Tution Fee"), _react2.default.createElement("td", null, "0")), _react2.default.createElement("tr", null, _react2.default.createElement("td", null, "Arreas"), _react2.default.createElement("td", null, "0")), _react2.default.createElement("tr", null, _react2.default.createElement("td", null, "Duplicate"), _react2.default.createElement("td", null, "0")), _react2.default.createElement("tr", null, _react2.default.createElement("td", null, "Challan"), _react2.default.createElement("td", null, "0")), _react2.default.createElement("tr", null, _react2.default.createElement("td", null, "Fee"), _react2.default.createElement("td", { key: 'fee' + element._id }, element.amount)), _react2.default.createElement("tr", null, _react2.default.createElement("td", null, "Reminder"), _react2.default.createElement("td", null, "0")), _react2.default.createElement("tr", null, _react2.default.createElement("td", null, "Photocopies"), _react2.default.createElement("td", null, "0")), _react2.default.createElement("tr", { style: { height: '20px' } }, _react2.default.createElement("td", null, "Others"), _react2.default.createElement("td", null, "0")))))), _react2.default.createElement("div", { className: "col-xs-12", style: { borderTop: 'thin double #000000' } }, _react2.default.createElement("table", null, _react2.default.createElement("tbody", null, _react2.default.createElement("tr", { style: { height: '40px' } }, _react2.default.createElement("td", { style: { width: '275px' } }, "Totals"), _react2.default.createElement("td", null, "0"))))), _react2.default.createElement("div", { className: "col-xs-12" }, _react2.default.createElement("div", { className: "col-xs-5", style: _style2.default.stampbox }, _react2.default.createElement("p", { style: _style2.default.stamp }, "Stamp")), _react2.default.createElement("div", { className: "col-xs-offset-1 col-xs-5", style: _style2.default.signatureBox }, _react2.default.createElement("p", null, "Signature"))));
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
      return _react2.default.createElement("div", null, _react2.default.createElement(_Head2.default, null), _react2.default.createElement("div", { className: "col-md-12 col-sm-12 col-xs-12" }, _react2.default.createElement("div", { className: "container" }, _react2.default.createElement("div", { className: "row" }, _react2.default.createElement("div", { className: "col-xs-4 col-sm-4 col-md-4" }, _react2.default.createElement("div", { className: "col-xs-12" }, _react2.default.createElement("div", { className: "col-xs-3" }, _react2.default.createElement("img", { src: "static/assets/img/iiuilogo.png", style: _style2.default.image })), _react2.default.createElement("div", { className: "col-xs-6", style: _style2.default.nopadding }, _react2.default.createElement("p", { style: _style2.default.toCenter }, " ", _react2.default.createElement("b", null, "Bank Alfalah limited "), _react2.default.createElement("br", null), "Islamic Banking ", _react2.default.createElement("br", null), "Latifabad Branch: Block C, ", _react2.default.createElement("br", null), " Civic Center Unit No. 7 ", _react2.default.createElement("br", null), _react2.default.createElement("span", { style: _style2.default.span2 }, "A/c no 5631-5000622021"))), _react2.default.createElement("div", { className: "col-xs-3", style: _style2.default.font, id: "tocenter" }, _react2.default.createElement("p", null, "Bank Copy"))), _react2.default.createElement("div", { className: "col-xs-12" }, _react2.default.createElement("p", { style: _style2.default.toCenter }, _react2.default.createElement("span", { style: _style2.default.span1 }, "International Islamic University Islamabad Schools"), _react2.default.createElement("br", null), "Latifabad Campus")), this.renderChallanData()), _react2.default.createElement("div", { className: "col-xs-4 col-sm-4 col-md-4" }, _react2.default.createElement("div", { className: "col-xs-12" }, _react2.default.createElement("div", { className: "col-xs-3" }, _react2.default.createElement("img", { src: "static/assets/img/iiuilogo.png", style: _style2.default.image })), _react2.default.createElement("div", { className: "col-xs-6", style: _style2.default.nopadding }, _react2.default.createElement("p", { style: _style2.default.toCenter }, " ", _react2.default.createElement("b", null, "Bank Alfalah limited "), _react2.default.createElement("br", null), "Islamic Banking ", _react2.default.createElement("br", null), "Latifabad Branch: Block C, ", _react2.default.createElement("br", null), " Civic Center Unit No. 7 ", _react2.default.createElement("br", null), _react2.default.createElement("span", { style: _style2.default.span2 }, "A/c no 5631-5000622021"))), _react2.default.createElement("div", { className: "col-xs-3", style: _style2.default.font, id: "tocenter" }, _react2.default.createElement("p", null, "School Copy"))), _react2.default.createElement("div", { className: "col-xs-12" }, _react2.default.createElement("p", { style: _style2.default.toCenter }, _react2.default.createElement("span", { style: _style2.default.span1 }, "International Islamic University Islamabad Schools"), _react2.default.createElement("br", null), "Latifabad Campus")), this.renderChallanData()), _react2.default.createElement("div", { className: "col-xs-4 col-sm-4 col-md-4" }, _react2.default.createElement("div", { className: "col-xs-12" }, _react2.default.createElement("div", { className: "col-xs-3" }, _react2.default.createElement("img", { src: "static/assets/img/iiuilogo.png", style: _style2.default.image })), _react2.default.createElement("div", { className: "col-xs-6", style: _style2.default.nopadding }, _react2.default.createElement("p", { style: _style2.default.toCenter }, " ", _react2.default.createElement("b", null, "Bank Alfalah limited "), _react2.default.createElement("br", null), "Islamic Banking ", _react2.default.createElement("br", null), "Latifabad Branch: Block C, ", _react2.default.createElement("br", null), " Civic Center Unit No. 7 ", _react2.default.createElement("br", null), _react2.default.createElement("span", { style: _style2.default.span2 }, "A/c no 5631-5000622021"))), _react2.default.createElement("div", { className: "col-xs-3", style: _style2.default.font, id: "tocenter" }, _react2.default.createElement("p", null, "Student Copy"))), _react2.default.createElement("div", { className: "col-xs-12" }, _react2.default.createElement("p", { style: _style2.default.toCenter }, _react2.default.createElement("span", { style: _style2.default.span1 }, "International Islamic University Islamabad Schools"), _react2.default.createElement("br", null), "Latifabad Campus")), this.renderChallanData())))));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;