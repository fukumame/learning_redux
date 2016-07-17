import React, { PropTypes } from 'react'

// ToDoコンポーネントの属性(props)として、onClick, completed, textを使うことを宣言し、クラスを定義する。
// Reduxを使うことを前提とした (Containerとbindすることを前提とした) classの定義方法。
// Reduxを前提とすると、このように簡略化して書くことができ、renderは必要なくなるのかも。
const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
