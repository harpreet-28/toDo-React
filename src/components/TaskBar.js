var React = require('react');

var TaskBar = React.createClass({

  render: function(){
    var todos = this.props.todos;
    var newTodos = todos.map(function(todo, index){
      return(
        <tr key={index}>
          <td>{index +1}</td>
          <td>{todo.item}</td>
          <td onClick={function(){this.props.onChecked1(index)}.bind(this)}>
            <input type="checkbox"  readOnly
              checked={todo.isChecked} className="checkBoxList" /></td>
          <td><button className="btn btn-warning removeTodo"
            onClick={function(){this.props.handler(index)}.bind(this)}>Remove</button></td>
        </tr>
      )
    }.bind(this));

    return (

      <div className="taskBar panel panel-default col-lg-12">

      <table className="table">
        <thead className="panel-heading">
            <tr>
              <th>#</th>
              <th>Task</th>
              <th>Done</th>
              <th>Remove</th>
            </tr>
        </thead>
        <tbody>
          {newTodos}
        </tbody>

      </table>

      </div>
    )
  }
});

module.exports = TaskBar;
