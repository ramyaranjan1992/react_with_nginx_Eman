import React from 'react';
import './Searchbar.css'

function Searchbar(props) {
    return (
        <div className='searchbar__container'>
            <input placeholder='Search' className='searchbar__input' />
        </div>
    );
}

export default Searchbar;