import { useMemo } from 'react';

const list = [
    {
        name: 'Danilo',
        id: 0,
        age: 28
    },
    {
        name: 'Alessia',
        id: 1,
        age: 29
    },
    {
        name: 'Marco',
        id: 2,
        age: 16
    },
]

function filter() {
    let values = []
    for (let i = 0; i < list.length; i++) {
        if (list[i].age > 18) {
            console.log(list[i])
            values.push(list[i])
        }   
    }
    return values;
}

const FilteredList = () => {
    const result = useMemo(() => JSON.stringify(filter()), [])
    return (
        <p>{result}</p>
    )
}

export default FilteredList;