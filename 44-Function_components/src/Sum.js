import React from "react";

const Sum = ({numbers}) => {
    return (
        <h1>{numbers.reduce((acc, curr) => acc + curr, 0)}</h1>
    )
}


export default Sum;