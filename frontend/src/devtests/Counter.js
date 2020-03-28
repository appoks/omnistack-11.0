import React, { useState } from 'react';
import Header from './Header';

// JSX : Javascript XML >> 

function Counter() {
    const [counter, setCounter] = useState(0);

    function increment() { setCounter(counter + 1) }

    return (
        <div className="Counter">
            <Header title="Semana OmniStack">
                Contador {counter}
            </Header>
            <button onClick={increment}> INCREMENTAR </button>

        </div>
    );
}

export default Counter;
