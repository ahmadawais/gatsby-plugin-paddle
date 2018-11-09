import React from 'react';

/**
 * Setup Paddle.js
 *
 * @link https://paddle.com/docs/paddle-checkout-web/
 */
exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
	return setPostBodyComponents([<script key="gatsby-plugin-paddle" src="https://cdn.paddle.com/paddle/paddle.js" />]);
};
