import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Cousin = (props) => {
    const {name,email,id}= props.cousin;
    const cousinStyle={
        border: '1px solid blue',
        margin:'10px',
        padding:'10px',
        borderRadius:'10px'
    }
const history= useHistory();
const handleClick=(id)=>{
    const url=`/cousin/${id}`;
    history.push(url);
}
    return (
        <div style={cousinStyle}>
            <h2>name : {name}</h2>
            <p>email : {email}</p>
            <p>id : {id }</p>
            <Link to={`/cousin/${id}`}><button>show details of id of {id}</button></Link>
            <button onClick={()=>handleClick(id)}>Click Me</button>
        </div>
    );
};

export default Cousin;