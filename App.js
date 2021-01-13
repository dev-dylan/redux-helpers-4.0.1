/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux'
 
// import { store } from './src/redux/store'
import { store2 } from './src/redux/store2'
import MainView from './src/MainView'
 
export default class RootApp extends React.Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    // 渲染页面
    return (
      <Provider store={store2}>
        <MainView />
      </Provider>
    )
  }
}
