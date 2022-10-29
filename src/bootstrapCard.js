import React from "react";
import "./Card.css"

const Card = ({cardHeading, cardData, index}) => {
    let color = "white";
    if(Number(index)%2 === 0){
        color = "rgb(197, 247, 247)"
    }
    return(
        <div className="px-xl-5 mx-xl-5 py-3" >
            <div className="card px-xl-5 py-3 mx-xl-5" style={{backgroundColor : `${color}`}}>
                <div className="card-body">
                    <h5 className="card-title">{cardHeading}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">{cardData}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;