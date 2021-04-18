import React from 'react';
import { useParams } from 'react-router';

const ShowDetails = () => {
    const {cousinId}= useParams();
    return (
        <div>
            <h2>id is : {cousinId}</h2>
        </div>
    );
};

export default ShowDetails;