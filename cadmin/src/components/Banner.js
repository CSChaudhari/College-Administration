import React from 'react';
import { Row } from "react-bootstrap";
import Mslides from "./Mslides";
import "./Mslides.css"

const Banner = () => {
  return (
    <div className="banner-container">
      <Row className='horizontal'>
        {/* Render Mslides components here */}
        <Mslides  className='pad' title="Concession" description="Apply for concession here" linkTo="/Concession"/>
        <Mslides className='pad' title="Bonafite" description="Apply for bonafite here" linkTo="/Bonafite" />
        <Mslides className='pad' title="Scholarship" description="Apply for scholarship here" linkTo="/Scholarship" />
      </Row>
    </div>
  );
}

export default Banner;
