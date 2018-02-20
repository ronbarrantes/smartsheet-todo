import React from 'react';
import superagent from 'superagent';
// import * as client from 'smartsheet';

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
  }

  handleLoad() {
    superagent.get(`${__API_URL__}/rows`)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.error(err));
  }

  render() {

    this.handleLoad();

    return (
      <div>
        <p>Hello</p>
      </div>
    );
  }
}

export default ToDo;
