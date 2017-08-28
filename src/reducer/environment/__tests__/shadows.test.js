import reducer from '../shadows';
import * as types from '../../../constants/action-types';


describe('selection reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(null);
  });


  it('should handle SET_SHADOWS', () => {
    expect(reducer(false, {
      type: types.SET_SHADOWS,
      shadows: true,
    })).toEqual(true);
  });


  it('should handle SET_ENVIRONMENT', () => {
    expect(reducer(false, {
      type: types.SET_ENVIRONMENT,
      shadows: true,
    })).toEqual(true);
  });
});