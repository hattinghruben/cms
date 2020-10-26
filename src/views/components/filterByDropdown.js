import React from 'react';

export default class FilterDropdown extends React.Component {
    constructor() {
        super();
        this.state = {
         listOpen: false
        };
        this.setListOpen = this.setListOpen.bind(this)
    }

    setListOpen() {
        this.setState({
            listOpen: true
        })
    };

    render() {
        return (
                <div className="ml-2">
                    <button type="button" className="btn btn-default dropdown-toggle"
                            onClick={this.setListOpen}>
                        <span id="search_concept">Filter By</span>
                    </button>
                    {this.state.listOpen ?
                        <div className="container">
                            <div className="">
                                <option>Test</option>
                                <option>Filter</option>
                                <option>Email filter</option>
                                <option>Test filter</option>
                            </div>
                        </div> : null}
                </div>
        )
    }
};


