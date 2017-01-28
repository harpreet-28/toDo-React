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
      item: '',
      isChecked: false
    }
  },
  handleSubmit: function(e){
    e.preventDefault();
    debugger;
    console.log(this.state.item)
    var newTodos = {
      item:this.state.item,
      isChecked:this.state.isChecked
    };
    var allTodos = this.state.todos.concat(newTodos);
    this.setState({todos: allTodos, item: ''})
  },
  _onChange: function(e){
    this.setState({
      item: e.target.value
    });
  },
  updatedTodos: function(newTodos){
    var allTodos = this.state.todos.concat([newTodos]);
    this.setState({todos: allTodos});

  },
  _onChecked: function(index){
    console.log(this.state.todos)
  //  var handleSuccessBackground =  this.state.todos[index].background = 'green';
    // var successColor = this.state.todos[index].style.background = 'green';
    !this.state.todos[index].isChecked ? (this.state.todos[index].isChecked = true, this.setState({todos: this.state.todos})):(this.state.todos[index].isChecked = false, this.setState({todos:this.state.todos}))
    console.log('checkbox function from main component!!')
},

  _style: function(){
    var backgroundStyle = { background: 'green' }
    if(this.state.todos[index].isChecked){
      this.setState({todos: backgroundStyle})
  }
  },

  _onDelete: function(index){

    var splicedTodo =  this.state.todos.splice(index, 1)
    this.setState({todos: this.state.todos})
    console.log(this.state)
  },

  onSearchFilter: function(){

  },

  render: function(){
    return(
      <div>
        <h1>
          ToDo App
        </h1>
        <p>
          Add a new task
        </p>
        <SearchBar
          handleSubmit={this.handleSubmit}
          item={this.state.item}
          onChange1={this._onChange}/>
        <CheckBox />
        <TaskBar
          todos={this.state.todos}
          onChecked1={this._onChecked}
          handler={this._onDelete} />
        <SearchButton />

      </div>
    )
  }
})
module.exports = Main;
