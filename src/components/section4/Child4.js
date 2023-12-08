import React from 'react'
import './Child4.css'

function Child4() {
  return (
    <div className='p-5 backgound-container'>
        <h3 className='heading4'>OneTopia</h3>
        <hr className='h_line'></hr>
        <h2 className="big_heading">Relentless innovation defines who we are.<br></br>
        OnePlus inspires through innovation.<span className='red'>Never Settle<span className='left_margin'>&#129034;</span></span></h2>
        <div className='row mb-5'>
            <div className="col-8 img_container">
                <img 
                className="image4"
                alt="one plus 10 pro"
                src="https://oasis.opstatics.com/content/dam/oasis/page/2022/new-homepage/na/homepage/OneTopia-PC.jpg"/>
            </div>
            <div className="col-4 d-flex flex-column justify-content-between box_10pro p-3 pb-0">
                <div>
                    <h3 className="evolve">Evolve your digital life</h3>
                </div>
                <div>
                    <p className="mb-3  down_text">Discover how OnePlus empowers you with burdenless technology.</p>
                    <a className='anchor' href='@'>Learn more</a>
                </div>
            </div> 
        </div>




        <div className="d-flex flex-row ">
            <div className="card_small4 bg-dark d-flex flex-row  margin">
                <div className="col-6 d-flex flex-column justify-content-between p-3">
                    <div>
                        <h4 className='text-secondary card_heading4000'>OxygenOS 13</h4>
                        <h3 className='card_heading4'>Inspired by nature</h3>
                    </div>
                    <div>
                        <p className='description'>OxygenOS 13 welcomes you with a visually refreshed and bold design. 
                            Every intuitive element, every streamlined step, is faster, smoother,
                             and burdenless.</p>
                        <a  className='anchor' href='@'>Learn more</a>
                    </div>
                </div>
                <div className='col-6 holderrr'>
                    <img
                        className="card_image4"
                        src="https://oasis.opstatics.com/content/dam/oasis/page/2022/new-homepage/na/homepage/oxygenos13-pc.jpg"
                        alt="small tv"
                    />
                </div>
            </div>
            <div className="card_small4 bg-dark d-flex flex-row ">
                <div className="col-6 d-flex flex-column justify-content-between p-3">
                    <div>
                        <h4 className='text-secondary card_heading4000'>About OnePlus</h4>
                        <h3 className='card_heading4'>Become bold and boundless</h3>
                    </div>
                    <div>
                        <p className='description'>Relentless innovation defines who we are. From achieving milestones to 
                            co-creating one of the world's largest communities in tech, we Never Settle 
                            in the pursuit of excellence.</p>
                        <a className='anchor' href='@'>See our journey</a>
                    </div>
                </div>
                <div className='col-6 holderrr'>
                    <img
                        className="card_image4"
                        src="https://oasis.opstatics.com/content/dam/oasis/page/2022/new-homepage/na/homepage/about-pc.jpg"
                        alt="small tv"
                    />
                </div>
            </div>
        </div>





        <h3 className='mt-5 heading4'>Red Cable Club</h3>
        <hr className='h_line'></hr>
        <h2 className="big_heading mb-3">Unlock exclusive benefits, early access to
             products, and unique experiences. <span className='red'>Join the Club<span className='left_margin'>&#129034;</span></span></h2>
        <div className='row'>
            <div className="col-8 img_container">
                <img 
                className="image4"
                alt="one plus 10 pro"
                src="https://oasis.opstatics.com/content/dam/oasis/page/2022/new-homepage/na/homepage/RCC-pc.jpg"/>
            </div>
            <div className="col-4 d-flex flex-column justify-content-between box_10pro p-3 pb-0">
                <div>
                    <h3 className="evolve">One community, limitless passion</h3>
                </div>
                <div>
                    <p className="mb-3  down_text">United by one common belief - 'Great happens when we're all wired together'.</p>
                    <a className='anchor'  href='@'>Join now</a>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Child4