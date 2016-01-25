// Capital letters means the file is a components

var React = require('react');
// have to put extension cuz it's jsx
var ListItem = require('./ListItem.jsx');

var ingredients = [{'id':1, 'text':'ham'}, {'id':2, "text":"cheese"}]

var List = React.createClass({
  render: function () {
    var listItems = ingredients.map(function (item) {
      return <ListItem key={item.id} ingredient={item.text} />;
    });

    return (<ul>{listItems}</ul>)
  }
})

module.exports = List;
