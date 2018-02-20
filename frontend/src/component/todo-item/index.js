import React from 'react';
import { connect } from 'react-redux';

class ToDoItem extends React.Component{

  

}

let mapStateToProps = (state) => ({
  todoItem: state.todo,
});

export default connect(mapStateToProps)(ToDoItem);