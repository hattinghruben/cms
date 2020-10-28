import React from 'react'
import NavigationBar from "../components/navigationBar";
import GroupEmailStats from "../components/groupEmailStats";

export default class GroupEmail extends React.Component {
    render() {
        return (
            <React.Fragment>
                    <NavigationBar />
                    <GroupEmailStats/>
            </React.Fragment>
        )
    }
}
