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

var _TopMenu = require("../components/TopMenu");

var _TopMenu2 = _interopRequireDefault(_TopMenu);

var _Sidebar = require("../components/Sidebar");

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    function _class(props) {
        (0, _classCallCheck3.default)(this, _class);

        var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

        _this.state = { userProfile: { profile: {}

                //Bind Methods
            } };_this.getProfileInfo = _this.getProfileInfo.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(_class, [{
        key: "getProfileInfo",
        value: function getProfileInfo() {
            var _this2 = this;

            _axios2.default.get('/getprofile').then(function (response) {
                _this2.setState({ userProfile: response.data });
            }).catch(function (err) {
                console.error("The error: " + err);
            });
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.getProfileInfo();
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement("main", null, _react2.default.createElement(_Head2.default, null), _react2.default.createElement(_TopMenu2.default, null), _react2.default.createElement("div", { className: "page-container" }, _react2.default.createElement("div", { className: "page-content" }, _react2.default.createElement(_Sidebar2.default, { dashboardActive: "active" }), _react2.default.createElement("div", { className: "content-wrapper" }, _react2.default.createElement("div", { className: "content" }, _react2.default.createElement("div", { className: "row" }, _react2.default.createElement("div", { className: "content" }, _react2.default.createElement("div", { className: "panel-heading" }, _react2.default.createElement("h5", { className: "panel-title" }, "User Profile")), _react2.default.createElement("div", { className: "panel-body" }, _react2.default.createElement("form", { method: "post", action: "/profile", encType: "multipart/form-data" }, _react2.default.createElement("label", null, "Full Name"), _react2.default.createElement("input", { type: "text", name: "name", className: "form-control", value: this.state.userProfile.profile.name }))))))))));
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;