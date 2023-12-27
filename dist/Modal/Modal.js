"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _ModalModule = _interopRequireDefault(require("./Modal.module.css"));
function Modal(_ref) {
  let {
    isActive,
    setIsActive,
    message = 'Action effectuée avec succées !',
    children = null,
    modalStyle = {}
  } = _ref;
  const customStyle = modalStyle;
  if (isActive) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: _ModalModule.default.background
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: _ModalModule.default.modal,
      style: customStyle
    }, children ? children : /*#__PURE__*/_react.default.createElement("span", {
      className: _ModalModule.default.message
    }, message), /*#__PURE__*/_react.default.createElement("button", {
      className: _ModalModule.default.close,
      onClick: () => setIsActive(false)
    }, "X")));
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    hidden: true
  });
}
var _default = exports.default = Modal;