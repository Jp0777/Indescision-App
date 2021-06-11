import React, { useState, useEffect } from 'react';
import Header from './components/Header.js';
import Options from './components/Options';
import Action from './components/Action';
import AddOption from './components/AddOption';
import Modal from './components/OptionModal';
import './styles/App.scss';

const RootComponent = () => {
  const [options, setOptions] = useState(['First', 'Second'])
  const [selected, setSelected] = useState(undefined)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('opt'));
    if (data) {
      setOptions(data)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('opt', JSON.stringify(options));
  }, [options])

  const handleRemoveAll = () => {
    setOptions([]);
  }

  const removeOne = (opt) => {
    setOptions(options.filter((option) => option !== opt))
  }

  const whatShouldIDo = () => {
    const no = Math.floor(Math.random() * options.length);
    setSelected(options[no])
  }

  const addOne = (opt) => {
    if (!opt)
      return 'Enter A Valid Option'
    else if (options.indexOf(opt) > -1)
      return 'Already A Option';

    setOptions(options.concat(opt));
  }

  const clearModal = () => {
    setSelected(undefined);
  }

  return (
    <div>
      <Header subtitle={'Put Your Life In The Hand Of Computers'} />
      <div className="container">
        <Action length={options.length} whatShouldIDo={whatShouldIDo} />
        <div className="widget">
          <Options options={options} handleRemoveAll={handleRemoveAll} removeOne={removeOne} />
          <AddOption addOne={addOne} />
        </div>
      </div>
      <Modal selected={selected} clearModal={clearModal} />
    </div>
  )
}


export default RootComponent;

