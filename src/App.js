import React from 'react';
import Task from './task';
import './App.css';
import {Provider} from "react-redux";
import store from "./store";
 

export default()=>
  <Provider store={store}>
  <Task/>
  </Provider>

