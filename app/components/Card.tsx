import React from 'react'
import "./Card.css";

const Card = () => {
  return (
    <>
        <div className="card">
            <div className="card-image"></div>
            <div className="card-content">
                <h3>title</h3>
                <p><strong>category</strong></p>
                <p>description</p>
            </div>
        </div>
    </>
  )
}

export default Card