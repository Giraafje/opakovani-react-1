import React, {useState} from 'react';
import './style.css'

const Counter = () => {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <div className="counter">
            {count}
            <button onClick={handleClick}>+</button>
        </div>
    )
};

export default Counter;