import React, { useState } from 'react';

const Commnet = (props) => {
    return (
        <div className='d-flex flex-column justify-content-start'>
            <div className='d-flex flex-row justify-content-between'>
                <h3>{props.data.username}</h3>
                <p>{props.data.date}</p>
            </div>
            <p>{props.data.content}</p>
        </div>
    );
}

export default Comment;