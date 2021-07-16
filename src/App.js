import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [People, setPeople] = useState(data);
  return <main>
    <section className='container'>
      <h3>{People.length} birthdays today</h3>
      <List People={People}/>
      <button onClick={ () => {setPeople([])}}>Clear all</button>
    </section>
  </main>;
}

export default App;
