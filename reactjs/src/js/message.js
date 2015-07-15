var React = require('react');

var Message = React.createClass({
  render: function() {
    return (
      <p>
        {this.props.name} , {this.props.age}
      </p>
    );
  }
});

module.exports = Message;
