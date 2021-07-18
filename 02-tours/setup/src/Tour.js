import React, { useState } from 'react';

const Tour = ({id,image,price,info,name}) => {
  return <article className='single-tour'>
    <img src={image} alt={name}/>
      <footer className='tour-info'>
        <h4>{name}</h4>
        <h4 className='tour-price'>${price}</h4>
      </footer>      
      <p>{info}</p>
      <button className='delete-btn'>Not interested</button>
  </article>
};

export default Tour;
