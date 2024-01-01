import React from 'react'
import "./Card.css"

function Card({ imgSrc , darkThem}) {
    return (

        <div className={`card col-md-3 col-sm-5 col-12 ${darkThem ? 'text-bg-dark' : ''}`}>
            <div className=''>

                <div class="card-body">
                    <img src={imgSrc} alt="" />
                    <h5 class="card-title" id='heading'>Easy to Use</h5>
                    <p class="card-text" id='para'>Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly.</p>

                </div>

            </div>
        </div>

    )
}

export default Card 