import React, {useState} from 'react';
import './assets/css/birthdayList.css';
import data from './birthdayData';
import List from './birthdayList';

function BirthdayReminder() {

  // Set the state for the data
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays today</h3>
        <List people={people}/>
        <button onClick={()=> setPeople([])}>Clear All</button>
        <a href="test.js">test</a>
      </section>
    </main>
  );
}

export default BirthdayReminder;
