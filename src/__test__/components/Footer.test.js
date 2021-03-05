import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';
import { create } from 'react-test-renderer';

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

//Snapshot

describe('Footer Snapshot', () => {
  test('should be have a ui component footer', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
