import React, {useEffect} from 'react';
import { useDispatch} from 'react-redux';

import SentMailTable from '../components/sentMailTable';
import NavigationBar from "../components/navigationBar";
import {getOutboundMails} from '../../store/actions/getOutboundMails';

export default function SentItems() {
    const dispatch = useDispatch();
    let mails, isLoading = true, error;

    useEffect(() => {
        dispatch(getOutboundMails());
    });

    return (
        <React.Fragment>
            <NavigationBar/>
            <div>
                {!isLoading ? !error ? (
                    <SentMailTable mails={mails}/>
                ) : (
                    <div>ERROR: {{error}}</div>
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </React.Fragment>
    )
}
