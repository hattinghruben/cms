import React, {useState} from 'react'
import Search from 'react-bootstrap-icons/dist/icons/search'

export default class EmailSearchBar extends React.Component {
    constructor(title, items, multiSelect) {
        super(title, items, multiSelect);
        const [open, setOpen] = useState;
        const [selection, setSelection] = useState([]);
    }

    handleOnclick(item) {

    }

    render() {
        return (
            <div children="container">
                <div className="row m-2">
                    <div className="col-xs-8 col-xs-offset-2">
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
                            <input type="text" className="rounded-border" name="x" placeholder="Search term..."/>
                              <button className="btn btn-default">
                                  <Search className="gold-text"/>
                              </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
