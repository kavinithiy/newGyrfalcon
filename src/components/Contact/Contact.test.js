import React from 'react';
import { shallow } from 'enzyme';
import Contact from './Contact';

describe('<Contact />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Contact />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
