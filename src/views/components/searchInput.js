import React from 'react'

export default class SearchBar extends React.Component {
    render() {
        return (
            <div children="container">
                <div className="row m-2">
                    <div className="col-xs-8 col-xs-oofset-2">
                        <div className="input-group">
                            <div className="input-group-btn search-panel">
                                <button type="button" className="btn btn-default dropdown-toggle"
                                        data-toggle="dropdown">
                                    <span id="search_concept">Filter By</span>
                                </button>
                                <ul className="dropdown-menu" role="menu">
                                    <li>Email filer</li>
                                    <li>Email filer</li>
                                    <li>Email filer</li>
                                    <li>Email filer</li>
                                </ul>
                            </div>
                            <input type="hidden" name="search_param" value="all" id="search_param"/>
                            <input type="text" className="form-control" name="x" placeholder="Search term..."/>
                            <button className="btn btn-default">
                                <Search />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
