import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
        <div>
            <div className="widget-header">
                <h3>Your Options</h3>
                <button className="btn btn--link" onClick={props.handleRemoveAll}>Remove All</button>
            </div>
            {props.options.length === 0 && <p>Please Add Your Options</p>}
            {props.options.map((item, index) => {
                return <Option no={index + 1} opt={item} key={item} removeOne={props.removeOne} />
            })}
        </div>)
}

export default Options;