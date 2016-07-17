import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <p>
    Show:
     { // 単なる文字列の出力を表す
     }
    {" "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </p>
)

export default Footer
