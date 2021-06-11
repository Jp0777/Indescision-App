import React from 'react';

const Action = (props) => {
    return (
        <div>
            <button className="big-button" disabled={!props.length} onClick={props.whatShouldIDo}>What Should I do?</button>
        </div>
    )
}

export default Action;