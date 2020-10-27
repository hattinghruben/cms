import React from 'react';
import { Row } from 'react-bootstrap';
import FilterDropdown from './filterByDropdown';
import EmailSearchBar from './emailSearch';

export default class NavigationBar extends React.Component {
    render() {
        return (
            <Row className="w-100">
                <div className="float-left">
                    <FilterDropdown/>
                </div>
                <div className="justify-self--end">
                    <EmailSearchBar/>
                </div>
            </Row>
        )
    }
}
