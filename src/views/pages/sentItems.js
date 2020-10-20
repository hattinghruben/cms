import React from 'react'
import SentMailTable from '../components/sentMailTable'
import EmailSearchBar from "../components/emailSearch";
import Pagination from "../components/pagination";

export default class SentItems extends React.Component {
    render() {
        return (
            <div>
                <EmailSearchBar />
                <div>
                    <SentMailTable/>
                </div>
                <Pagination/>
            </div>
        )
    }
}
