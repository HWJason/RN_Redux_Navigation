/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import Root from './containers/Root'

import {Provider} from 'react-redux'
import configureStore from './store/configure-store'
const store = configureStore();


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Root /> 
      </Provider>
    );
  }
}


