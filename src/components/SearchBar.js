var React = require('react');

var SearchBar = React.createClass({
  getInitialState: function() {
		return {item: ''};
	},
  handleSubmit: function(e){
		e.preventDefault();
    console.log("hetting here")
		this.props.onFormSubmit(this.state.item);
		this.setState({item: '', isChecked:true});
	},
	onChange: function(e){
		this.setState({
			item: e.target.value
		});
	},
  render: function(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.item} onChange={this.onChange} className="searchBar col-sm-10" autoFocus />
        <button type="submit" value="Add" className="submitButton col-sm-2">Add a Task</button>
      </form>
      )
    }
});

module.exports = SearchBar;
