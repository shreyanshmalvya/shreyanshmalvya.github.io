import React from 'react'
import './card.css'

const Card = (props) => {
    return (
        <div className='cardWrapper' style={{backgroundColor: props.color}}>
            <div className="projectImage">
                <img className='thumbnail' src={props.image} alt="projectImg" />
            </div>
            <div className="contentWrapper">
                <div className="projectTitle">
                    <div className='title'>{props.title}</div>
                </div>
                <div className="projectPosition">
                    <div className='title'>{props.pos}</div>
                </div>
                <div className="projectDescription">
                    <div className='description'>{props.desc}</div>
                </div>
                <div className="learnbtn">
                    <div>LEARN MORE</div>
                </div>
            </div>

        </div>
    )
}

export default Card