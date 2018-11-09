<p align="center">
  <br>
  <a href="https://twitter.com/MrAhmadAwais/">
    <img src="https://on.ahmda.ws/19a553/c" width="120"/>
  </a>
</p>

<h1 align="center">gatsby-plugin-paddle</h1>

<p align="center">
  A simple plugin that adds <a href="https://paddle.com/docs/paddle-checkout-web/">paddle.js</a> to every page on your Gatsby site.
</p>

<p align="center">
  <a title="Total Downloads" href="https://www.npmjs.com/package/gatsby-plugin-paddle">
    <img src="https://img.shields.io/npm/dt/gatsby-plugin-paddle.svg?style=flat">
  </a>
  <a title="Current Cersion" href="https://www.npmjs.com/package/gatsby-plugin-paddle">
    <img src="https://img.shields.io/npm/v/gatsby-plugin-paddle.svg?style=flat">
  </a>
  <a title="Follow me on Twitter @MrAhmadAwais →" href="https://twitter.com/mrahmadawais">
    <img src="https://img.shields.io/twitter/follow/mrahmadawais.svg?style=social&label=Follow">
  </a>
  <br>
  <br>
</p>

## Getting Started

### STEP #1

Install using either npm or yarn:

```sh
npm install gatsby-plugin-paddle
```

**OR**

```sh
yarn add gatsby-plugin-paddle
```

### STEP #2

Add the plugin to `gatsby-config.js`

```js
module.exports = {
	plugins: [
		{
			resolve: `gatsby-plugin-paddle`,
			options: {
				vendorId: 'YOUR_VENDOR_ID'
			}
		}
	]
};

```
