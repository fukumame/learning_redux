import React, { PropTypes } from 'react'

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>
  } else {
    return (
      <a href="#"
         onClick={e => {
           e.preventDefault()
           // onClickの実際の動作の定義は、Container Componentである、FilterLinkにて行う
           onClick()
         }}
      >
        {children}
      </a>
    )
  }
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
