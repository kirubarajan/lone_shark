import React from 'react';
import ReactDOM from 'react-dom';

import Register from './components/register';

class App extends React.Component {
  render() {
    return (
      <div>
        <Register />
      </div>
    );
  }
}

Meteor.startup(() => {
  ReactDOM.render(<App/>, document.querySelector('.app'));
})
