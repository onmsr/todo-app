var React = require('react');

var TodoList = React.createClass({

  onClick: () => {
    
  },
  
  render: function() {
    var createItem = function(itemText, index) {
      var sty = { "width": "100%" };
      return (
          <li className="list-group-item">
          <div className="container" style={sty}>
          <div className="row">
          <div className="col-lg-10">
          {itemText}
          </div>
          <div className="col-lg-2">
          <button type="button" className="btn btn-sm btn-info">DONE</button>
          </div>
          </div>
          </div>
          </li>
      );
    };
    return <ul className="list-group">{this.props.items.map(createItem)}</ul>;
  }
});

var TodoApp = React.createClass({
  getInitialState: function() {
    return {items: [], text: ''};
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  onClick: function(e) {
    var nextItems = this.state.items.concat([this.state.text]);
    this.setState({items: nextItems, text: ''});
  },
  render: function() {
    var buttonSty = { "margin-left" : "20px"};
    var addRowSty = { "margin-top" : "20px", "margin-bottom" : "20px"};
    return (
        <div className="container">
        <div className="row">
        <h3>TODO LIST</h3>
        </div>
        <div className="row">
        <button type="button" className="btn btn-lg btn-primary">active</button>        
        <button type="button" className="btn btn-lg btn-default" style={buttonSty}>done</button>
        </div>
        <div className="row" style={addRowSty}>
        <div className="col-lg-6">
        <div className="input-group">
        <input className="form-control" onChange={this.onChange} value={this.state.text}/>
        <span className="input-group-btn">
        <button className="btn btn-default" onClick={this.onClick}>{'Add #' + (this.state.items.length + 1)}</button>
        </span>
        </div>
        </div>
        </div>
        <div className="row">
        <div className="col-lg-6">
        <TodoList items={this.state.items} />
        </div>
        </div>
        </div>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
        <div>
        <TodoApp/>
        </div>
    );
  }
});

window.onload = function () {
  React.render(<App/>, document.getElementById('app-container'));
};
