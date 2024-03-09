import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0)

    const plusBtn = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const minusBtn = () => {
        const newCount = count - 1;
        setCount(newCount);
    }

    return (
        <div>
            <h3>Count : {count}</h3>
            <button onClick={plusBtn}>+</button>
            <button onClick={minusBtn}>-</button>
        </div>
    )
}