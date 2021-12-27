import { useState } from 'react';
import Child from './child'

export default function Parent() {
    const [theArray, setTheArray] = useState([]);
    const addEntryClick = (word) => {
        setTheArray([...theArray, word]);
    };
    return (
        <div className="h-60 w-96">
            <Child steps="1" changeWord={word => addEntryClick(word)} />
        </div>
    );
}