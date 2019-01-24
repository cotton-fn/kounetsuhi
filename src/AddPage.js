import React from 'react';
import { connect } from 'react-redux';
import { addItem } from './actions';

const AddPage = ({ dispatch }) => {
  let inputItemName;

  const handleSubmit = e => {
    e.preventDefault();
    let value = inputItemName.value;
    if (value.length > 0) dispatch(addItem(inputItemName.value));
    inputItemName.value = '';
  };

  return (
    <div>
      <h2>光熱費追加</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={node => { inputItemName = node; }} />
        <input type="submit" value="追加" />
      </form>
    </div>
  )
};

export default connect()(AddPage);
