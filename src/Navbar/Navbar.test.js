import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';

it('logo points to home', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navbar />, div);
  const logo = div.querySelector('.Navbar-logo')
  expect(logo.href).toEqual('http://localhost/')
});

it('logo text is correct', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navbar />, div);
  const logo = div.querySelector('.Navbar-logo')
  expect(logo.innerHTML).toEqual('W')
});
