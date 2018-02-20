import React from 'react';
import superagent from 'superagent';
// import * as client from 'smartsheet';

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
  }

  handleLoad() {




    superagent.get(__API_URL__)
      .withCredentials()
      .set('Authorization', `Bearer ${__ACCESS_TOKEN__}`)
      .then(res => {
        console.log('SOMETHING IS HAPPENING', res);
      })
      .catch(console.error);

  }

  render() {

    this.handleLoad();

    return (
      <div>
        <p>Hello  {__ACCESS_TOKEN__}</p>

      </div>
    );
  }
}

export default ToDo;
