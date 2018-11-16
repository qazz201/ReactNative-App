/** @format */
import React from "react";
import {AppRegistry} from 'react-native';
import {Provider,connect} from "react-redux"

import App from './App';
import {name as appName} from './app.json';
import store from "./src/store"



let mapSateToProps=(state)=>{
  return{
    ...state.fetchReducer
  }
}



let ConnectedApp=connect(mapSateToProps)(App)

const WrappedApp=()=>{
  return(
    <Provider store={store}>
      <ConnectedApp/>
    </Provider>
  )
}

AppRegistry.registerComponent(appName, () => WrappedApp);
