import React from 'react';

const Event = (props) => {
    return (
        <td className={'Event ' + props.color}>
            <h5>{props.location}</h5>
            <h6>{props.event}</h6>
            
        </td>
    );
}

export default Event;