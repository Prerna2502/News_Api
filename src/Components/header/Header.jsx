import React from 'react'
import './Header.css'

export default function Header(props) {
    return (
        <nav className="navbar navbar-dark bg-dark pr-4 pl-5" style={{width: '100vw'}}>
            <a className="navbar-brand title" href='.'>News Api</a>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    )
}