// import React, { Component } from "react";
import temp from "./temp.png";

const NewsItems =(props)=> {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div classNmae="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span className="badge rounded-pill bg-danger">
              {source}
            </span>
          </div>
          <img
            src={!imageUrl ? temp : imageUrl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author} on
                {new Date(date).toGMTString()}.
              </small>
            </p>

            <a
              href={newsUrl}
              rel="noopener noreferrer"
              className="btn btm-sm  btn-dark"
              target="_blank" 
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }

export default NewsItems;
