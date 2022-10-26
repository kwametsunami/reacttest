import { useState } from 'react'

const Counter = () => {
    // initialize state to track the amount of likes
    const [likesCount, setLikesCount] = useState(0);

    // define an event handler which will update state when called
    const handleClick = () => {
        
        // when this function is called, we need to update state by +1
        setLikesCount(likesCount + 1);

        // this will not work since it'll target the state directly
            // setLikesCount(likesCount++)
    }

    return (
        <section>
            <p>This page has been liked {likesCount} times</p>
            <button onClick={ handleClick }>Click for likes!</button>
        </section>
    )
}

export default Counter