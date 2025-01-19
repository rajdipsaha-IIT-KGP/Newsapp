import React, { Component } from 'react';
import Navstyle from './Navstyle.css';

import {
 
  Link
} from "react-router-dom";
export class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      mode: 'light', // Initial mode is set to 'light'
    };
  }

  toggleMode = () => {
    if (this.state.mode === 'light') {
      this.setState(
        { mode: 'dark' },
        () => {
          document.body.style.backgroundColor = 'black';
        }
      );
    } else {
      this.setState(
        { mode: 'light' },
        () => {
          document.body.style.backgroundColor = 'white';
        }
      );
    }
  };

  render() {
    return (
      <div>
        <nav
          className={`navbar navbar-expand-lg ${
            this.state.mode === 'light' ? 'bg-body-tertiary' : 'bg-dark'
          }`}
          style={{
            color: this.state.mode === 'light' ? 'black' : 'white',
          }}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/" style={{color:this.state.mode==='light'?'black':'white'}}>
              NewsApp
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"  style={{color:this.state.mode==='light'?'black':'white'}}
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item" style={{color:this.state.mode==='light'?'black':'white'}}>
                  <Link className="nav-link" to="/"  style={{color:this.state.mode==='light'?'black':'white'}}>
                    About
                  </Link>
                </li>
                <li className="nav-item" style={{color:this.state.mode==='light'?'black':'white'}}>
                  <Link className="nav-link" to="/Business"  style={{color:this.state.mode==='light'?'black':'white'}}>
                   Business
                  </Link>
                </li>
                <li className="nav-item" style={{color:this.state.mode==='light'?'black':'white'}}>
                  <Link className="nav-link" to="/Entertainment"  style={{color:this.state.mode==='light'?'black':'white'}}>
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item" style={{color:this.state.mode==='light'?'black':'white'}}>
                  <Link className="nav-link" to="/General"  style={{color:this.state.mode==='light'?'black':'white'}}>
                   General
                  </Link>
                </li>
                <li className="nav-item" style={{color:this.state.mode==='light'?'black':'white'}}>
                  <Link className="nav-link" to="/Health"  style={{color:this.state.mode==='light'?'black':'white'}}>
                    Health
                  </Link>
                </li>
                <li className="nav-item" style={{color:this.state.mode==='light'?'black':'white'}}>
                  <Link className="nav-link" to="/Science"  style={{color:this.state.mode==='light'?'black':'white'}}>
                    Science
                  </Link>
                </li>
                <li className="nav-item" style={{color:this.state.mode==='light'?'black':'white'}}>
                  <Link className="nav-link" to="/Sports"  style={{color:this.state.mode==='light'?'black':'white'}}>
                   Sports
                  </Link>
                </li>
                <li className="nav-item" style={{color:this.state.mode==='light'?'black':'white'}}>
                  <Link className="nav-link" to="/Technology"  style={{color:this.state.mode==='light'?'black':'white'}}>
                    Technology
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                {/* <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    onClick={this.toggleMode}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  >
                   
                  </label>
                </div> */}
<button
  id="theme-switch"
  type="button"
  onClick={this.toggleMode}
  style={{
    background: 'transparent', // Transparent background
    border: 'none',           // No border
    cursor: 'pointer',        // Pointer cursor for better UX
    padding: '10px',          // Add padding for better click area
    borderRadius: '50%',      // Rounded button for aesthetics
    display: 'flex',          // Flexbox for centering icon
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  {this.state.mode === 'light' ? (
    // Moon Icon for Light Mode
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="black"
    >
      <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" />
    </svg>
  ) : (
    // Sun Icon for Dark Mode
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="white"
    >
      <path d="M440-800v-120h80v120h-80Zm0 760v-120h80v120h-80Zm360-400v-80h120v80H800Zm-760 0v-80h120v80H40Zm708-252-56-56 70-72 58 58-72 70ZM198-140l-58-58 72-70 56 56-70 72Zm564 0-70-72 56-56 72 70-58 58ZM212-692l-72-70 58-58 70 72-56 56Zm268 452q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-80q67 0 113.5-46.5T640-480q0-67-46.5-113.5T480-640q-67 0-113.5 46.5T320-480q0 67 46.5 113.5T480-320Zm0-160Z" />
    </svg>
  )}
</button>



              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
