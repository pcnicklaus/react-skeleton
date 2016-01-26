var React = require('react');

// class that can be reused OOP
// just defining it, not using
// ListItem is what we will call it
// this object has a render function!
// render is what is actually shown on the screen.
// all we have to do is DEFINE our class like below.
// AND return the actual JSX (html w/ javascript)!
// this.props.text  - TEXT IS THE KEY
// we are assuming that TEXT will be created as we build our way up!

var ListItem = React.createClass({
  render: function () {
    return (
      <li>
        <h4>{this.props.text}</h4>
      </li>
    );
  }
})

module.exports = ListItem;
