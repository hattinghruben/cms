import {
    configureStore
} from "@reduxjs/toolkit";

import {combineReducers} from 'redux';

import outboundMails from './slices/outboundMails';

const outboundMailsReducer = outboundMails.reducer;

const reducer = combineReducers({
    outboundMailsReducer
});

const store = configureStore({
    reducer,
});

export default store;
