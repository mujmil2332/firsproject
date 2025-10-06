import React, {useState} from 'react';

function BuggyCounter() {
    const [count, setCount] = useState(0);

    if (count === 5) {
        throw new Error('I crashed!');
    }

    return (
        <div>
            <h3>Buggy Counter</h3>
            <p>Click the button to increase the counter. at 5, it will crash.</p>
            <p>Count:{count}</p>
            <button onClick={()=>setCount(count + 1)}>Increase Counter</button>

        </div>    
    );
}

export default BuggyCounter;