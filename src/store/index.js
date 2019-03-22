
import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/index';
// import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import logger from 'redux-logger'

import createSagaMiddleware from 'redux-saga';
import mySaga from '../saga';

const composeEnhancers = composeWithDevTools({
    features: {
      pause: true, // start/pause recording of dispatched actions
      lock: true, // lock/unlock dispatching actions and side effects    
      persist: true, // persist states on page reloading
      export: true, // export history of actions in a file
      import: 'custom', // import history of actions from a file
      jump: true, // jump back and forth (time travelling)
      skip: true, // skip (cancel) actions
      reorder: true, // drag and drop actions in the history list 
      dispatch: true, // dispatch custom actions or action creators
      test: true // generate tests for the selected actions
    },
    // other options like actionSanitizer, stateSanitizer
  });

const sagaMiddleware = createSagaMiddleware();

const store = createStore(RootReducer , composeEnhancers(applyMiddleware(sagaMiddleware,logger)));
export default  store;

sagaMiddleware.run(mySaga);