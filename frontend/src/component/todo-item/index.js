import React from 'react';
import { connect } from 'react-redux';

class ToDoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editing: false };
  }

  render() {
    let { todo } = this.props;
    let [todoName, todoStatus, todoDueDate, todoCategory] = todo.cells;
    console.log('CELLS-->', this.props.todo);

    return (
      <div className='todo-item'>
        <div>
          <p>ToDo: {todoName.value} </p>
          <p>Status</p>
          <p>Due Date</p>
          <p>Category</p>
        </div>
      </div>

    );
  }
}

export default ToDoItem;