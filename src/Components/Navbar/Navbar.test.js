import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';

it('logo points to home', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navbar />, div);
  const logo = div.querySelector('.Navbar-logo');
  expect(logo.href).toEqual('http://localhost/');
});

it('logo text is correct', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navbar />, div);

  const logo = div.querySelector('.Navbar-logo');
  expect(logo.innerHTML).toEqual('W');
});

it('has navbar title', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navbar />, div);

  const title = div.querySelector('.Navbar-title');
  expect(title).toBeDefined();
});

it('has right menu', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navbar />, div);

  const menu = div.querySelector('.Navbar-right');
  expect(menu).toBeDefined();

  const user = menu.querySelector('i.fa-user-circle-o');
  expect(user).toBeDefined();

  const settings = menu.querySelector('i.fa-cog');
  expect(settings).toBeDefined();

  const notifications = menu.querySelector('i.fa-bell-o');
  expect(notifications).toBeDefined();
});
