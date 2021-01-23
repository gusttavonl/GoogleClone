import React, { useState } from 'react'
import './Search.css'
import SearchIcon from "@material-ui/icons/Search"
import MicIcon from "@material-ui/icons/Mic"


function Search() {
    return (
        <form className='search'>
            <div className='input'>
                <SearchIcon className="inputIcon" />
                <input />
                <MicIcon />
            </div>

        </form>

    )
}

export default Search
