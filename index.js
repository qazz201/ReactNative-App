/** @format */
import React from "react";
import {AppRegistry} from 'react-native';
import {Provider,connect} from "react-redux"
import { bindActionCreators } from 'redux'

import App from './App';
import {name as appName} from './app.json';

import store from "./src/store"
import fetchData from "./src/actions/fetchData"
import loadNextPage from "./src/actions/loadNextPage"


let mapSateToProps=(state)=>{
  return{
    ...state.fetchReducer,
    ...state.paginationReducer
  }
}

let mapDispatchToProps=(dispatch)=>{
  return{
    fetchData:bindActionCreators(fetchData,dispatch),
    loadNextPage:bindActionCreators(loadNextPage,dispatch)
  }
}


let ConnectedApp=connect(mapSateToProps,mapDispatchToProps )(App)

const WrappedApp=()=>{
  return(
    <Provider store={store}>
      <ConnectedApp/>
    </Provider>
  )
}

AppRegistry.registerComponent(appName, () => WrappedApp);
