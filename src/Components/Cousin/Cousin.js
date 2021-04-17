import React from 'react';

const Cousin = (props) => {
    const {name,email}= props.cousin;
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
        </div>
    );
};

export default Cousin;