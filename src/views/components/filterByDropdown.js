import React from 'react';

const FilterDropdown = () => {
    const [listOpen, setListOpen] = React.useState(false);

    return (
        <div className="mr-1 mt-1">
            <button type="button" className="btn btn-default dropdown-toggle"
                    onClick={() => setListOpen(!listOpen)}>
                <span id="search_concept">Filter By</span>
            </button>
            {listOpen ?
                <div tabIndex={0} className="select-items">
                        <option>Test</option>
                        <option>Filter</option>
                        <option>Email filter</option>
                        <option>Test filter</option>
                </div> : null}
        </div>
    )
};

export default FilterDropdown;
