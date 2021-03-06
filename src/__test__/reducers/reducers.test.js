import reducer from '../../reducers';
import ProductMock from '../../__mocks__/ProductMock';

describe('Reducers test', () => {
  test('should return initial state', () => {
    expect(reducer({}, '')).toEqual({});
  });

});
