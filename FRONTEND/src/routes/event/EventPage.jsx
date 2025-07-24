import React from 'react';
import { Link } from 'react-router';

const Dummy_Events = [
  {id: 'e1', event: 'Sunday service coming up on every sunday'},
  {id: 'e2', event: 'Segandogo "OLORUN Alasepe"'},      
  {id: 'e3', event: 'Alasepe "The GOD of perfection"'},      
  {id: 'e4', event: 'Thanks giving of Brother Omojide"'},      
]


const EventPage = () => {
  return (
    <>
    <h1>List of Events</h1>
    <ul>{
      Dummy_Events.map((e) => 
        <li key={e.id}><Link to={e.id}>{e.event}</Link></li>
      )
      }</ul>
    </>
  )
}

export default EventPage