// babel.config.js
// eslint-disable-next-line no-undef
module.exports = {
    presets: [
      '@babel/preset-env', // Ensure it supports CommonJS module format
      '@babel/preset-react'
    ],
    // Ensure Jest can find the ES modules
    plugins: [
      '@babel/plugin-transform-runtime'
    ]
  };