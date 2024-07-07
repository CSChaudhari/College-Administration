import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from "react-bootstrap";

const Mslides = ({ title, description, imgUrl, linkTo }) => {
  return (
    <Col size={12} sm={6} md={4} className="text-center"> {/* Align tiles to the middle of the page */}
      <Link to={linkTo} className="tile-link">
        <div className="tile">
          <img src={imgUrl} alt={title} className="tile-img" />
          <div className="tile-overlay">
            <h4 className="tile-title">{title}</h4>
            <p className="tile-description">{description}</p>
          </div>
        </div>
      </Link>
    </Col>
  )
}

export default Mslides;
