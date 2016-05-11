import React from 'react';

require('../stylesheets/main.scss');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <div className="app">
        stuff
      </div>
    );
  }
}
