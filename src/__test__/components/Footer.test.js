import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';

describe('Footer component ', () => {
  const footer = mount(<Footer />);
  test('Render del componente footer', () => {
    expect(footer.length).toEqual(1);
  });
  test('should a title render ', () => {
    expect(footer.find(".Footer-title").text()).toEqual("Platzi Store");
  });

  test('should a izquierdos render ', () => {
    expect(footer.find(".Footer-copy").text()).toEqual("Todos los Izquierdos Reservados :D");
  });

});
