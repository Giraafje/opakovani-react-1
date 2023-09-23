import React from 'react';
import './style.css';
import Day from '../Day'

const List = () => {
    const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

    return (
        
        <div className='list'>
            <h2 style={{textAlign: 'center'}}>Seznam</h2>
            <ul>
                {weekDays.map((day) => <Day key={day} day={day}/>)}
            </ul>
        </div>
        
    )
};

export default List;