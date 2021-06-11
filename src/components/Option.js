import React from 'react';

const Option = (props) => {
    const removeSpecific = () => {
        props.removeOne(props.opt);
    }

    return (
        <div class="option">
            <h3>{props.no}.{props.opt}</h3>
            <button className="btn btn--link" height={10} onClick={removeSpecific}>Remove</button>
        </div>
    )
}

export default Option;