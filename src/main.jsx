// two components
// 1) list item
// 2) list

var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');

ReactDOM.render(
  <ListManager title="Ingredients" />,
  document.getElementById('ingredients')
)
