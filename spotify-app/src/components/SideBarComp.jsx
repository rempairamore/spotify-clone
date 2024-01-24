import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function SideBarComp() {
  const navigate = useNavigate();
  const [query, setQuery] = useState();
  const [forceRender, setForceRender] = useState(false);

  const searchHandler = (e) => {
    setQuery(e.target.value)
    // console.log(e.target.value)
  }


  return (
    <div className='container'>
    <div className="col-2">
    <nav className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between" id="sidebar">
      <div className="nav-container">
        <a className="navbar-brand" href="#" onClick={() => navigate('/')}>
          <img src="/logo/Spotify_Logo.png" alt="Spotify_Logo" width="131" height="40" className='mb-4 logograndespotify' />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-4">
            <ul>
              <li>
                <a className="nav-item nav-link" href="#" onClick={() => navigate('/')}>
                <i className="bi bi-house-door-fill"></i>&nbsp; Home
                </a>
              </li>
              <li>
                <a className="nav-item nav-link" href="#" onClick={() => navigate('/library_page')}>
                <i className="bi bi-book-fill"></i>&nbsp; Your Library
                </a>
              </li>
              <li className='me-4'>
                <div className="input-group mt-3">
                  <input
                    type="text"
                    className="form-control mb-2"
                    id="searchField"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                    onChange={(e) => searchHandler(e)}
                    onKeyDown={(e) => (e.key === 'Enter') && (navigate('/search_result/'+ query), setQuery(''), setForceRender(prevState => !prevState))}
                    key={forceRender}
                  />
                  </div>
                  </li>
                  {/* <li className='w-75'>
                  <div className="input-group-append" style={{ marginBottom: '4%' }}>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      type="button"
                      id="button-addon1"
                      // onChange={() => searchHandler()}
                      onClick={() => navigate('/search_result/'+ query)}
                    >
                      Search
                    </button>
                  
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </div>

      <div className="nav-btn">
        <Button variant="primary" className="signup-btn" type="button">
            Sign Up
        </Button>
        <Button variant="success" className="login-btn" type="button">
            Login
        </Button>
        <a href="#">Cookie Policy</a> |
        <a href="#"> Privacy</a>
      </div>
    </nav>
  </div>
  </div>
  )
}
