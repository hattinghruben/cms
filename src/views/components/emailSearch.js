import React from 'react'
import Search from 'react-bootstrap-icons/dist/icons/search';

export default class EmailSearchBar extends React.Component {

    render() {
        return (
            <React.Fragment>
                    <div>
                        <div className="float-right pb-2">
                            <input type="hidden" name="search_param" value="all" id="search_param"/>
                            <input type="text" className="ml-3 rounded-border" name="x" placeholder="Search term..."/>
                            <button className="btn btn-default">
                                <Search className="gold-text"/>
                            </button>
                        </div>
                    </div>
            </React.Fragment>
        )
    }
}
