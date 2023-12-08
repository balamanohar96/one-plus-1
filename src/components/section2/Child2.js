import React from "react";
import "./Child2.css";

function Child2() {
  return (
    <div className="m-5 mt-0 mb-0 d-flex flex-row ">
      <div className="card_small bg-light d-flex flex-row p-3 margin">
        <div className="d-flex flex-column justify-content-between">
          <div>
            <p className="quote">Imagination & Intelligence</p>
            <h3  className="product_card">
              OnePlus TV 43 |<br></br>50 Y1S Pro
            </h3>
          </div>
          <div>
            <p className="mb-3">4K UHD | Smarter Connectivity | 24W Speaker</p>
            <p className="price">
              From $55999*<br></br>*Incl. bank discount
            </p>
            <button className="button blck">Buy now</button>
            <button className="button whit">Learn more</button>
          </div>
        </div>
        <div className="">
          <img
            className="card_image"
            src="https://oasis.opstatics.com/content/dam/oasis/page/2023/in/medium-product-card/TV-65-Q2-Pro-pc-2.7.png.thumb.webp"
            alt="small tv"
          />
        </div>
      </div>
      <div className="card_small bg-light d-flex flex-row p-3">
        <div className="d-flex flex-column justify-content-between">
          <div>
            <p className="quote">Hear the Unheard</p>
            <h3  className="product_card">
              OnePlus Buds Pro
            </h3>
          </div>
          <div>
            <p className="price">
            From <span className="strike">$11990</span> $8990*<br></br>*Incl. bank discount
            </p>
            <button className="button blck">Buy now</button>
            <button className="button whit">Learn more</button>
          </div>
        </div>
        <div className="img_container">
          <img
            className="card_image"
            src="https://oasis.opstatics.com/content/dam/oasis/page/2023/in/medium-product-card/Nord-buds-2-pc.png.thumb.webp"
            alt="small buds"
          />
        </div>
      </div>
    </div>
  );
}

export default Child2;
