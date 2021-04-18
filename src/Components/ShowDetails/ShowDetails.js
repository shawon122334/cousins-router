import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ShowDetails = () => {
    const {cousinId}= useParams();
    const [cousin,setCousin]= useState({});
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/users/${cousinId}`;
        fetch(url)
        .then(response=>response.json())
        .then(data=>setCousin(data))
    },[])
    const {name,email,phone,website}=cousin;
    return (
        <div>
            <h2>id is : {cousinId}</h2>
            <h2>{name}</h2>
            <h2>{email}</h2>
            <h2>{phone}</h2>
            <h2>{website}</h2>
        </div>
    );
};

export default ShowDetails;