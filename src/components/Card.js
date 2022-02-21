import React from 'react';

const Card = ({ name, email, id }) => {
    return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
        <img alt='robots' width="302" height="400" src={`https://robohash.org/${id}?size=302x400`} />
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>
    );
}

export default Card;