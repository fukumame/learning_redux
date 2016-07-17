import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

// AddToDoの場合は、Presentesion と Containerが一緒になっている
// PresentesionとContainerが一緒の場合は、引数として dispatchが属性に渡される
let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>

        {/* このrefの使い方については、以下のThe ref Callback Attributeを参照のこと
          https://facebook.github.io/react/docs/more-about-refs.html
          inputコンポーネントがマウントされると、即座にref属性の Callback関数がCallされる。
          その際、Callback関数のパラメータには、対象の要素へのポインタが渡される。*/}
        <input ref={node => {
          { /* nodeはinput要素のこと
            変数inputに値をセット
            つまり、inputに入力された値の受け渡しのために、このCallback及び、変数を定義している。 */ }
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
