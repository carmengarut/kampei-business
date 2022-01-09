import React from 'react'

import { orderAlphabetically } from '../helpers/sort'

import '../css/checkbox.css'

const Checkbox = ({ children, required = false, handleChange, object, checked }) => {
  const handleClick = ({ target }) => {
    const isChecked = target.checked
    if (handleChange) {
      handleChange(prev => {
        let objectChanged = object
        isChecked
          ? objectChanged = { ...object, value: true }
          : objectChanged = { ...object, value: false }
        return [...prev.filter(item => item !== object), objectChanged].sort(orderAlphabetically)
      })
    }
  }
  return (
    <label className='c-container'>
      {required
        ? <input type='checkbox' onChange={handleClick} required checked={checked} className='c-hidden' />
        : <input type='checkbox' onChange={handleClick} required={false} checked={checked} className='c-hidden' />}
      <span className='c-checkbox' />
      <span className='c-text'>
        {children}
      </span>

    </label>
  )
}

export default Checkbox
