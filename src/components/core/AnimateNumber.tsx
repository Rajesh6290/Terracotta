import React, { useEffect, useState } from 'react'

const AnimateNumber = ({ number }: { number: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (count < number) {
                setCount(prevCount => prevCount + 1);
            } else {
                clearInterval(interval);
            }
        }, 100); // Change the interval duration for faster/slower animation
        return () => clearInterval(interval);
    }, [count, number]);
    return <span>{count}</span>
}

export default AnimateNumber