import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Sidebar />, div);
});

it('has the required number of buttons', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Sidebar />, div);

  const expected = 4;
  const actual = div.querySelectorAll('.Sidebar-nav li').length;

  expect(actual).toEqual(expected);
});

it('has tooltip and tooltip is hidden by default', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Sidebar />, div);

  // Tooltip exists
  expect(div.querySelectorAll('.Sidebar-tooltip').length)
    .toEqual(1);

  // Tooltip is hidden by default
  expect(div.querySelectorAll('.Sidebar-tooltip.show').length)
    .toEqual(0);
});
