var React = require('react');
var ReactDOM = require('react-dom');
var SearchBar= require('SearchBar');
var SearchButton= require('SearchButton');
var CheckBox= require('CheckBox');
var TaskBar= require('TaskBar');

var Main = React.createClass({
  getInitialState: function(){
    return{
    todos: [],
    item: ''
  }
},
    updatedTodos: function(newTodos){
    var allTodos = this.state.todos.concat([newTodos]);
    this.setState({todos: allTodos});

},
    _onChecked: function(index){
            !this.state.todos[index].isChecked ? (
              this.state.todos[index].isChecked = true,
              this.setState({todos: this.state.todos})
            ):(
              this.state.todos[index].isChecked = false,
              this.setState({todos:this.state.todos})
            ) //if statement was too clear, so i tried to confuse you here
          },

  render: function(){
    return(
      <div>
        <h1>ToDo App</h1>
        <p>Add a new task</p>
        <SearchBar onFormSubmit={this.updatedTodos}/>
        <CheckBox />
        <TaskBar todos={this.state.todos} onChecked={this._onChecked}/>
        <SearchButton />

      </div>
    )
  }

})

module.exports = Main;
