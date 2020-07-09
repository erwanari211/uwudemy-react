import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

import App from './App';

/**
 * 13. unit testing
 */
// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('Test Snapshot', () => {
  const component = renderer.create(<App />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Find text uwudemy', () => {
  const { queryAllByText } = render(<App />);

  expect(queryAllByText(/UWUdemy/i)).toBeTruthy();
});

test('Find text lihat semua kelas', () => {
  const { queryAllByText } = render(<App />);

  expect(queryAllByText(/Lihat Semua Kelas/i)).toBeTruthy();
});
