
import React from 'react'

const Button = ({styles, text}) => {
  return (
    <div>
      <button style={styles}>{text}</button>
    </div>
  )
}

export default Button
