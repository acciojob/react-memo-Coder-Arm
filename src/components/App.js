import React from 'react';
import Todo from './Todo';
import Counter from './Counter';
import Memo from './Memo';

const App = () => {

    return(
        <div id='main'>
        <h1>React.useMemo</h1>
        <Todo/>
        <hr/>
        <Counter/>
        <h2>Expensive Calculation</h2>
        <span>1000000000</span>
        <hr/>
        <hr/>
        <Memo/>
        </div>
    )

}

export default App
