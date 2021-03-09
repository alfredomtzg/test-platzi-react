import reducer from '../../reducers';
import ProductMock from '../../__mocks__/ProductMock';

describe('Reducers test', () => {
  test('should return initial state', () => {
    expect(reducer({}, '')).toEqual({});
  });
  test('should ADD_TO_CART', () => {
    const initialState = {
      cart: [],
    };
    const payload = ProductMock;
    const action = {
      type: 'ADD_TO_CART',
      payload,
    };
    const expected = {
      cart: [
        ProductMock,
      ],
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });

});
