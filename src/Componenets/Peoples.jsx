import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPeople, removePeople } from '../features/people/peopleSlice';

function Peoples() {
  const peoples = useSelector((state) => state.people.peoples);
  const dispatch = useDispatch();

  function newPeople() {
    dispatch(addPeople("Ankhi"));
  }

  return (
    <>
      <button onClick={newPeople}>add</button>
      <div>Peoples</div>
      <ul className="list-none">
        {peoples.map((people) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={people.id}
          >
            <div className='text-white'>{people.text}</div>
            <button
              onClick={() => dispatch(removePeople(people.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              {/* ... */}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Peoples;
