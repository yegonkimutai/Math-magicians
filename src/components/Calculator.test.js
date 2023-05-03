import renderer from 'react-test-renderer';
import Input from './Calculator';

it('renders', () => {
  const tree = renderer.create(<Input />).toJSON();
  expect(tree).toMatchSnapshot();
});
