import React from 'react';

const FilterDropdown = () => {
  const [listOpen, setListOpen] = React.useState(false);


    return (
        <div>
            <button type="button" className="btn btn-default dropdown-toggle"
                    onClick={() => setListOpen(!listOpen)}>
                <span id="search_concept">Filter By</span>
            </button>
            {listOpen ?
                <div tabIndex={0} className="">
                    <ul>
                        <li>sdfvasdva</li>
                        <li>acascasfa</li>
                        <li>asfcascas</li>
                        <li>acvascasfas</li>
                    </ul>
                </div> : null}
        </div>
    )
};

export default FilterDropdown;
