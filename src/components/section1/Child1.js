import React from "react";
import './Child1.css'

function Child1() {
  return (
    <div className="row p-5">
      <div className="col-4 d-flex flex-column justify-content-between box_10pro p-3 pb-0">
        <div>
            <p className="quote">Capture Every Horizon</p>
            <h3 className="product">OnePlus 10Pro<sup>5G</sup></h3>
        </div>
        <div>
            <p className="mb-4 liner">Co-branding with <br></br><span className="hassel">HASSELBLAD</span></p>
            <p className="mb-3  saving">Save extra $5000 with exchange bonus</p>
            <p className="price">From $55999*<br></br>*Incl. bank discount</p>
            <button className="button blck">Buy now</button>
            <button className="button whit">Learn more</button>
        </div>
      </div>
      <div className="col-8 img_container">
        <img 
        className="image1"
        alt="one plus 10 pro"
        src="https://oasis.opstatics.com/content/dam/oasis/page/2023/in/large-card/oneplus-11r/udon-pc-2.7.jpg.thumb.webp"/>
      </div>
    </div>
  );
}

export default Child1;
