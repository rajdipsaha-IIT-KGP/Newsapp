import React, { Component } from 'react';
import Button from './Button.css'
export class Newsitem extends Component {
  render() {
    let { title, description, imageurl,newsURL,date,source } = this.props;
    return (
      <div className="container my-3 ">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={!imageurl?"https://images.barrons.com/im-89511665/social":imageurl}
            className="card-img-top"
            alt="news"
          />
          <div className="card-body">
            <h5 className="card-title">{title} <h6>Example heading <span class="badge text-bg-warning">New</span></h6> <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{fontSize:"10px",left:'90%'}}>
{source}
    <span class="visually-hidden">unread messages</span>
  </span></h5>
            <p className="card-text">{description}</p>
            <p className='card-text'><small class="text-muted">{new Date(date).toGMTString()}</small></p>
            <a href={newsURL} target="_blank" rel="noreferrer" className="btn btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
