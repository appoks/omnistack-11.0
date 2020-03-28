import React from 'react';

function Header(props) {
    return (
        <header className="header">
            <h1> {props.children /* props.header - para usar attr*/} </h1>
        </header>
    );
}

export default Header;
