import React from 'react'
import {
  AppRegistry
} from 'react-native'

import { Provider } from 'react-redux'
import store from './src/store'
import App from './src/components/containers/App'

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('lookforme', () => ReduxApp)