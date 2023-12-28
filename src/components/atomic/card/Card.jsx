import React from 'react'
import PropTypes from 'prop-types'

const Card = ({
    children
}) => {
  return (
    <div className='card px-10 py-10 text-black'>
        {children}
    </div>
  )
}

Card.propTypes = {}

export default Card