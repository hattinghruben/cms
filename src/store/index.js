import {
    configureStore
} from "@reduxjs/toolkit";

import {combineReducers} from 'redux';

import outboundMailsSlice from './slices/outboundMails';

const outboundMails = outboundMailsSlice.reducer;

const reducer = combineReducers({
    outboundMails
});

const store = configureStore({
    reducer,
});

export default store;
