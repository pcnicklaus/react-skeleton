var React = require('react');
var List = require('./List.jsx');

// need to receive user input thus the getInitialState...
// every component will call getInitialState once when the component is instantiated
// handleSubmit is our creation. it is for dealing with the interaction.
// components have props and state
// this.props should ALWAYS BE READ ONLY - you only EVER pass data DOWN as properties
// this.state is when you have DATA that can CHANGE!!! mutated data
// React knows what THIS is referring to so you don't have to do var self = this type shit ever!


var ListManager = React.createClass({
  getInitialState: function () {
    return {items: [], newItemText: ''};
  },

  onChange: function (element) {
    this.setState({
      newItemText: element.target.value
    })
  },

  handleSubmit: function (element) {
    element.preventDefault();
    // grab the items in existing state
    var currentItems = this.state.items;
    // push new data into currentItems
    currentItems.push(this.state.newItemText);
    //set the state back to blank
    //setState is a function of a class. Call thsi whenever you want to change the state of your app - takes an object with properties
    // need to EXPLICITY set your state and THEN update your items
    this.setState({items: currentItems, newItemText:''})
  },

  render: function () {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.newItemText} />
          <button>Add</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
});

module.exports = ListManager;
