import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdaptor from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdaptor() });

test('renders learn react link', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.length).toBe(1);
});
