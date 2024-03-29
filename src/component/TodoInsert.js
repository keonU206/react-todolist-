import React, { useState, useCallback } from 'react';
import './TodoInsert.scss';
import './TodoInsert.scss';
import { MdEast } from 'react-icons/md';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert">
      <input
        value={value}
        onChange={onChange}
        placeholder="할 일을 입력하세요"
      />
      <button type="submit" onClick={onSubmit}>
        <MdEast />
      </button>
    </form>
  );
};

export default TodoInsert;
