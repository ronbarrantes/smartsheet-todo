import React from 'react';
import { connect } from 'react-redux';

import ToDoItem from '../todo-item';
import * as todoList from '../../action/todo.js';

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchToDos()
      .catch(console.error);
  }

  render() {
    let { todos } = this.props;
    return (
      <div className='todo'>
        <h1>ToDo</h1>
        {todos.map(item =>
          <ToDoItem
            key={item.id}
            todo={item}
          />)}
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  fetchToDos: () => dispatch(todoList.fetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);

