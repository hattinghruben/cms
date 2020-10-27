import React from 'react';
import {Row} from 'react-bootstrap';

import SentMailTable from '../components/sentMailTable';
import NavigationBar from "../components/navigationBar";

export default function SentItems() {
    return (
        <React.Fragment>
            <NavigationBar/>
            <Row>
                <SentMailTable/>
            </Row>
        </React.Fragment>
    )
}
