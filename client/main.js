import React from 'react';
import ReactDOM from 'react-dom';

import Login from './components/register';

class App extends React.Component {
  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

Meteor.startup(() => {
  ReactDOM.render(<App/>, document.querySelector('.app'));
})
