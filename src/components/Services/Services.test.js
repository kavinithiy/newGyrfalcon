import React from 'react';
import { shallow } from 'enzyme';
import Services from './Services';

describe('<Services />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Services />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
