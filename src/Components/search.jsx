import React from "react"

export default function Search(props){
    return(
        <div className="search">
            <h3>Search</h3>
            <input type="search" onChange={e => props.handleSearch(e)} className="input-type"/>
        </div>
    )
}