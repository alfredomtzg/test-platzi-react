import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';

describe('Footer component ', () => {
  test('Render del componente footer', () => {
    const footer = mount(<Footer />);
    expect(footer.length).toEqual(1);
  });
});
