
// import { applyMiddleware } from 'redux'
import {configureStore} from '@reduxjs/toolkit'
// import thunk from 'redux-thunk'
import rootReducer from './reducers'
// import state from './state'

// export default configureStore(reducers, state, applyMiddleware(thunk))

const store = configureStore({
    reducer: rootReducer,
  });

  export default store;