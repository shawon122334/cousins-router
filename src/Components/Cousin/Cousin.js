import React from 'react';
import { Link } from 'react-router-dom';

const Cousin = (props) => {
    const {name,email,id}= props.cousin;
    const cousinStyle={
        border: '1px solid blue',
        margin:'10px',
        padding:'10px',
        borderRadius:'10px'
    }
    return (
        <div style={cousinStyle}>
            <h2>name : {name}</h2>
            <p>email : {email}</p>
            <p>id : {id }</p>
            <Link to={`/cousin/${id}`}>show details of id of {id}</Link>
        </div>
    );
};

export default Cousin;