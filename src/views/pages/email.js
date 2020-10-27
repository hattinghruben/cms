import React from 'react'
import NavigationBar from "../components/navigationBar";
import SingleMail from "../components/singleMail";

export default class Email extends React.Component {
    render() {
        return (
            <React.Fragment>
                    <NavigationBar/>
                    <SingleMail/>
            </React.Fragment>
        )
    }
}
