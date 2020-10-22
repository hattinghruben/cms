import React from 'react'
import Search from 'react-bootstrap-icons/dist/icons/search';
import FilterDropdown from "./filterByDropdown";

export default class EmailSearchBar extends React.Component {

    render() {
        return (
            <div children="container">
                <div className="row m-2">
                    <div className="col-xs-8 col-xs-offset-2">
                        <div className="input-group">
                            <div className="d-flex row">
                                <FilterDropdown class="col-1"/>
                            </div>
                            <div>
                                <input type="hidden" name="search_param" value="all" id="search_param"/>
                                <input type="text" className="ml-3 rounded-border" name="x" placeholder="Search term..."/>
                                <button className="btn btn-default">
                                    <Search className="gold-text"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
