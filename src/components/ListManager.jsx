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
    // stop the button from getting clicks since we are using the form onSubmit
    element.preventDefault();

    // grab the items in existing state
    var currentItems = this.state.items;

    // add/push new item into currentItems
    currentItems.push(this.state.newItemText);

    //update the main item list with the new list and clear the nextItemText
    //set the state back to blank
    //setState is a function of a class. Call thsi whenever you want to change the state of your app - takes an object with properties
    // need to EXPLICITY set your state and THEN update your items
    this.setState({items: currentItems, newItemText:''})
  },

  render: function () {
    // onChange is called with every keystroke so we can store the most recent data entered
    // value is what the user sees in the input box - we point this to newItemText so it updates on every
    // className lets set class names - cant use class b/c of createClass.

    // can define styles in code!!!
      var divStyle = {
         marginTop: 10
      }

      var headingStyle = {
      }

      if (this.props.headingColor) {
         headingStyle.background = this.props.headingColor;
      }

    return (
      <div style={divStyle} className="col-sm-4">
         <div className="panel panel-primary">
                <div style={headingStyle} className="panel-heading">
                           <h3>{this.props.title}</h3>
                        </div>
                <div className="row panel-body">
                     <form onSubmit={this.handleSubmit}>
                           <div className="col-sm-9">
                                 <input className="form-control" onChange={this.onChange} value={this.state.newItemText} />
                           </div>
                           <div className="col-sm-2">
                                 <button className="btn btn-primary">Add</button>
                           </div>
                     </form>
                 </div>
                 <List items={this.state.items} />
         </div>
      </div>
    );
  }
});

module.exports = ListManager;
