import {api} from '../../api';
import outboundMails from '../slices/outboundMails';

const {outboundMailsSuccess} = outboundMails.actions;

export const getOutboundMails = () => async dispatch => {
    try {
        const response = await api.post('/get-outbound-mail', {sentFrom: 'Spotlight Social <no-reply@golfplayed.com>'});
        dispatch(outboundMailsSuccess(response.data));
    } catch (error) {
        dispatch(outboundMailsSuccess(error.message));
    }
};
