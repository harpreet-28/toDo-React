var React = require('react');

var SearchBar = React.createClass({

  render: function(){
    return(
      <form onSubmit={this.props.handleSubmit}>
        <input type="text" value={this.props.item}
          onChange={this.props.onChange1}
          className="searchBar col-sm-10" autoFocus />
        <button type="submit" value="Add" className="submitButton col-sm- btn btn-primary">Add a Task</button>
      </form>


      )
    }
});

module.exports = SearchBar;
