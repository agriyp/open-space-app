/**
 * @TODO: Create Redux store
 */

import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from './authUser/reducer';
import usersReducer from './users/reducer';
import talksReducer from './talks/reducer';
import isPreloadReducer from './isPreload/reducer';
import talkDetailReducer from './talkDetail/reducer';
import { loadingBarReducer } from 'react-redux-loading-bar';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    users: usersReducer,
    talks: talksReducer,
    isPreload: isPreloadReducer,
    talkDetail: talkDetailReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
