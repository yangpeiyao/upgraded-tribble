import {call,put,takeLatest} from 'redux-saga/effects';

import {REQUEST_API_DATA,receiveApiData} from "./actions";
import {fetchData} from "./api";
//worker Saga

function* getApiData(action) {
    try {
      // do api call
      const data = yield call(fetchData);
      yield put(receiveApiData(data));
     
    } catch (e) {
      console.log(e);
    }
  }

export default function* mySaga(){
    yield takeLatest(REQUEST_API_DATA,getApiData);
};