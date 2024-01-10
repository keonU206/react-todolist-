import React from 'react';
import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <divc className="app-title">일정관리</divc>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
