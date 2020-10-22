import React from 'react'
import SentMailTable from '../components/sentMailTable'
import EmailSearchBar from "../components/emailSearch";

export default class SentItems extends React.Component {
    render() {
        return (
            <div>
                <EmailSearchBar />
                <div>
                    <SentMailTable/>
                </div>
            </div>
        )
    }
}
