"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Setup Paddle.js
 *
 * @link https://paddle.com/docs/paddle-checkout-web/
 */
exports.onRenderBody = function (_ref, pluginOptions) {
	var setPostBodyComponents = _ref.setPostBodyComponents;

	if (process.env.NODE_ENV === "production") {
		return setPostBodyComponents([_react2.default.createElement("script", { key: "gatsby-plugin-paddle", src: "https://cdn.paddle.com/paddle/paddle.js" }), _react2.default.createElement("script", {
			key: "gatsby-plugin-paddle-vendor",
			type: "text/javascript",
			dangerouslySetInnerHTML: { __html: "Paddle.Setup({ vendor: " + pluginOptions.vendorId + " });" }
		})]);
	}
};