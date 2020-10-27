import {createSlice} from '@reduxjs/toolkit';

const outboundMailsInitialState = {
    mails: [],
    isLoading: true,
    error: false
};

const outboundMailsSlice = createSlice({
    name: 'outboundMails',
    initialState: outboundMailsInitialState,
    reducers: {
        startLoading: state => {
            state.isLoading = true;
        },
        error: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        outboundMailsSuccess: (state, action) => {
            state.mails = action.payload;
            state.isLoading = false;
        },
    },
});

export default outboundMailsSlice;
