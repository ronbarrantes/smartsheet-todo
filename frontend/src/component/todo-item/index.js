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
          <p>Status: {todoStatus.value}</p>
          <p>Due Date: {todoDueDate.value}</p>
          <p>Category: {todoCategory.value}</p>
        </div>
      </div>
    );
  }
}

export default ToDoItem;