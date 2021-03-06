import React from 'react';
import { shallow } from 'enzyme';
import Career from './Career';

describe('<Career />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Career />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
