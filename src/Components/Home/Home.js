import React from 'react';
import { useEffect, useState } from 'react';
import Cousin from '../Cousin/Cousin';

const Home = () => {
    const [cousins, setCousins] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setCousins(data))
    }, [])
    return (
        <div>
            <h2>cousins length : {cousins.length}</h2>
            {
                cousins.map(cousin => <Cousin cousin={cousin}></Cousin>)
            }
        </div>
    );
};

export default Home;