import React from 'react';

function Card(props){
    return(
    <div className="cards">
        <div className="card">
            <img src={props.Imgsrc} alt="MoviePic" className='card__img' />
            <div className="card__info">
                <span className='card_category'>{props.title}</span>
                <h3 className='card_title'> </h3>
                <a href={props.Mlink} target='_blank' rel="noreferrer">
                    <button>Watch Now</button>
                </a>
            </div>  
        </div>
    </div>
    )
}

export default Card;