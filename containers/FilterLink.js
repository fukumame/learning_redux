import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

// stateの内容を受けて、それをPresentesion Componentのpropに伝えるためのメソッド
// ownPropsは Linkコンポーネントの持っているpropsのことを表す
// Footer.jsを参照すると分かる
const mapStateToProps = (state, ownProps) => {
  return {
    // Linkコンポーネントの filter属性と、stateのvisibilityFilterの値が一致すれば、
    // activeとみなし、Linkコンポーネントがリンクを非活性にする
    active: ownProps.filter === state.visibilityFilter
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
