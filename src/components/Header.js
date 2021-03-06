import React from 'react';


const Header = (props) => {
    return (
        <div className="header">
            <div className="container">
                <h1>{props.title}</h1>
                {props.subtitle && <h2>{props.subtitle}</h2>}
            </div>
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision App'
}

export default Header;