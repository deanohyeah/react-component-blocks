# react component blocks

Get the AMD module located at `react-component-blocks.js` and include it in your project.

Here is a sample integration:

```js
require.config({
  paths: {
    'react': 'vendor/bower_components/react/react',
    'ReactComponentBlocks': 'react-component-blocks'
  }
});

require(['react', 'ReactComponentBlocks'], function(React, ReactComponentBlocks) {

  React.render(React.createElement(ReactComponentBlocks), document.getElementById('widget-container'));

});
```

## Development

* Development server `npm start`.
* Continuously run tests on file changes `npm run watch-test`;
* Run tests: `npm test`;
* Build `npm run build`;
