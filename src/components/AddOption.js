import React, { useState } from 'react';

const AddOption = (props) => {
    const [err, errState] = useState(undefined);

    const addOpt = (event) => {
        event.preventDefault();
        const opt = event.target.elements.t1.value.trim();
        const error = props.addOne(opt);
        event.target.elements.t1.value = "";
        errState(error);
    }

    return (
        <div>
            {err && <p className="err">Oops:{err}</p>}
            <form onSubmit={addOpt} className="form">
                <input className="ip" type="tetx" name="t1" />
                <button className="btn" type="submit">Add Option</button>
            </form>
        </div>
    )
}


export default AddOption;