import React from 'react';
import data from './data';
import { useState } from 'react';

const List = () => {
  const [People, setPeople] = useState(data);
  return (
    <>
      <h2>list component</h2>
    </>
  );
};

export default List;
