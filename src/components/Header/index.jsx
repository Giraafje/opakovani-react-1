import React from 'react';

const Header = ({title, description, showDescription}) => {
    return (
        <header>
            <h1 style={{color: 'pink'}}>{title}</h1>
            {showDescription && <p>{description}</p>}
        </header>
    )
};

export default Header;