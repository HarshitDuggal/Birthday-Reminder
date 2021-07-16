import React from 'react';
import data from './data';
import { useState } from 'react';

const List = ({People}) => {
  // const [People, setPeople] = useState(data);
  return (
    <>
      {
        People.map((person) => {
          const{id,name,age,image} = person;
          return (
            <article key={id} className='person' >
              <img src= {image} alt="Profile pic"/>
              <div>
              <h3>{name}</h3>
              <p>{age} years</p>
              </div>
            </article>
          )
        })
      }
    </>
  );
};

export default List;
