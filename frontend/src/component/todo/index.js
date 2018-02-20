import React from 'react';
import { connect } from 'react-redux';
// import todoItems = 
import * as todoList from '../../action/todo.js';

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
  }

  componentDidMount() {
    this.props.fetchToDos()
      .catch(console.error);
  }


  handleLoad() {
    console.log('hello');
  }

  render() {
    this.handleLoad();
    console.log(this.props);
    return (
      <div>
        <p>Hello</p>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  todoItem: state.todo,
});

const mapDispatchToProps = (dispatch) => ({
  fetchToDos: () => dispatch(todoList.fetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);

