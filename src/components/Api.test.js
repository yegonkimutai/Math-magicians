import React from 'react';
import renderer from 'react-test-renderer';

import Api from './Api';

it('renders', () => {
  const tree = renderer.create(<Api />).toJSON();
  expect(tree).toMatchSnapshot();
});
