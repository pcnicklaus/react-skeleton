var React = require('react');
var ListItem = require('./ListItem.jsx');

// COMPONENTS NEEDED
// 1) List item
// 2) List
// 3) List Manager
// every list needs to have UNIQUE IDENTIFIERS
// key={index + text} text = {text} THESE are the properties from this.props. (text)
// things trickle down so ListItem.jsx gets its text from THIS COMPONENT!
// properties pass down when you do them like so!!! - pass it into the the component when you create the component itself!!

// this.props.items hasn't been created yet!! we need to pass it in from the component above - List Manager
var List = React.createClass({
  render: function () {

    var createItem = function (text, index) {
      return <ListItem key={index + text} text={text} />;
    };

    return (
      <ul>
        {this.props.items.map(createItem)}
      </ul>
    );

  }
});

module.exports = List;
