import React from 'react';
import './Card.css';

const Card = ({ name, email, id }) => {
    return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5' class='.card'>
        <img alt='robots' width="604" height="800" src={`https://robohash.org/${id}?size=604x800`} />
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>
    );
}

export default Card;