import React from 'react';
import './SerchPanel.css'

const SearchPanel = () => {
    return (
        <span>
            <input className="form-control search-input" type="text" placeholder="Search" />
        </span>
    );
}

export default SearchPanel;