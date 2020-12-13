/* eslint-disable react/forbid-foreign-prop-types */
import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';
import { middleware } from '../src/configureStore';
import reducers from '../src/reducers';

export const storeFactory = (initialState): void => {
  const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
  return createStoreWithMiddleware(reducers, initialState);
};

export const findByTestAttr = (wrapper, val): any => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProp = (component, conformingProps): void => {
  const propsError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  );
  expect(propsError).toBeUndefined();
};
