// start here b/c it's the smallest components

var React = require('react');
// not css. this is an object.
var ListItem = React.createClass({
  render: function () {
    return (
      <li>
        <h4>{this.props.ingredient}</h4>
      </li>
    );
  }
});

module.exports = ListItem;

// this.props =
// props are passed down to this component to called ingredient. Things are passed down from the top to the bottom!
