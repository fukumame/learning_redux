import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

// stateの内容を受けて、それをPresentesion Componentのpropに伝えるためのメソッド
// Presentesion Componentの属性をHash形式で渡す
// ownPropsは FilterLinkコンポーネントの持っているpropsのことを表す
// Footer.jsを参照すると分かる
const mapStateToProps = (state, ownProps) => {
  return {
    // FilterLinkコンポーネントの filter属性と、stateのvisibilityFilterの値が一致すれば、
    // activeとみなし、Linkコンポーネントがリンクを非活性にする
    // active, childrenはLinkコンポーネントの属性
    active: ownProps.filter === state.visibilityFilter,
    children: ownProps.children
  }
}

// Presentesion Componentの持つ、action属性の実際の動作をdispatchメソッドを用いることで定義するためのメソッド
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

// FilterLinkコンポーネントの定義
const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink
