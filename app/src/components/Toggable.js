import React, { forwardRef, useImperativeHandle, useState } from 'react'
import propTypes from 'prop-types'

import '../css/toggable.css'

const Toggable = forwardRef(({ children, buttonLabel = 'show' }, ref) => {
  const [visible, setVisible] = useState(true)

  // const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => setVisible(!visible)

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    }
  })

  return (
    <div className='t-container'>
      <button type='button' className='t-header' onClick={toggleVisibility}>
        <div className='t-angle'>{visible
          ? <i className='fas fa-minus' />
          : <i className='fas fa-plus' />}
        </div>
        <div>
          {buttonLabel}
        </div>
      </button>

      <div style={showWhenVisible}>
        {children}
      </div>
    </div>
  )
})

Toggable.displayName = 'Toggable' // Esto es para que en el warning si faltan proptypes aparezca bien el nombre del componente y no el forwardRef

Toggable.propTypes = {
  buttonLabel: propTypes.string
}

export default Toggable
