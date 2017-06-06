import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../src/App.js';


describe('this is main app test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
})
