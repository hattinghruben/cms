import React from 'react'
import SentMailTable from '../components/sentMailTable'
import NavigationBar from "../components/navigationBar";

export default class SentItems extends React.Component {
    render() {
        return (
            <React.Fragment>
                <NavigationBar/>
                <div>
                    <SentMailTable/>
                </div>
            </React.Fragment>
        )
    }
}
