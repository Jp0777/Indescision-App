import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: '#3c4251'
    }
};

const h1 = {
    textAlign: 'center',
    color: 'white'
}

const p = {
    textAlign: 'center',
    color: 'white',
    fontSize: '2.4rem',
    whiteSpace: 'no-wrap'
}


const btn = {
    textAlign: 'center',
    fontSize: '1.4rem',
    width: '80px',
    marginLeft: '35%'
}
const ModalOption = (props) => {
    return (
        <Modal
            isOpen={!!props.selected}
            onRequestClose={props.clearModal}
            contentLabel={'Selected Option'}
            style={customStyles}
        >
            <h1 style={h1}>Selected Option</h1>
            {props.selected && <p style={p}>{props.selected}</p>}
            <button onClick={props.clearModal} className="btn" style={btn}>Okay</button>
        </Modal>
    )
}

export default ModalOption;