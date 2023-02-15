import React from "react";

const Sum = ({ numbers = [1, 1] }) => {
    return (
        <h1>{numbers.reduce((acc, curr) => acc + curr, 0)}</h1>
    )
}

// if numbers' value isn't set, it will throw an error crashing the app

export default Sum;