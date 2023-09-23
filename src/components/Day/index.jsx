import React from 'react';

const Day = ({day}) => {
    return (
        <li key={day} style={{border: '1px solid blue', padding: '0.5rem', margin: '0.3rem'}}>{day}</li>
    )
};

export default Day;