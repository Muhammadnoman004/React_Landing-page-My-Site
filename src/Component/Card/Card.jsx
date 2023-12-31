import React from 'react'
import "./Card.css"

function Card({ imgSrc }) {
    return (
        
        <div className='card'>

                <div class="card-body">
                    <img src={imgSrc} alt="" />
                    <h5 class="card-title" id='heading'>Easy to Use</h5>
                    <p class="card-text" id='para'>Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly.</p>

                </div>

        </div>

    )
}

export default Card