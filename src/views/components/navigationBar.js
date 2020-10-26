import React from "react";
import FilterDropdown from "./filterByDropdown";
import EmailSearchBar from "./emailSearch";

export default class NavigationBar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="float-left">
                    <FilterDropdown/>
                </div>
                <div className="float-right">
                    <EmailSearchBar/>
                </div>
            </React.Fragment>
        )
    }
}
