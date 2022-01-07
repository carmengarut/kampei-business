import { orderAlphabetically } from '../helpers/sort'
import Checkbox from './Checkbox'

import '../css/itemsListCheckbox.css'

export default function ItemsListCheckbox ({ category, menu, setMenu }) {
  const handleChange = ({ target }) => {
    setMenu(prev => {
      let objectToChange = menu.find(item => item.name === target.name)
      objectToChange = { ...objectToChange, price: target.value }

      return [...prev.filter(item => item.name !== target.name), objectToChange].sort(orderAlphabetically)
    })
  }

  return (menu.filter(item => item.category === category).map((item, key) =>
    <div key={key} className='ilc-container'>
      <Checkbox object={item} checked={item.value} handleChange={setMenu}>
        <div className='icl-item'>
          <img
            alt=''
            src={item.image}
            width='40'
            height='40'
          />
          <div className='ilc-name'>
            {item.name}
          </div>
        </div>
        {item.value
          ? (
            <div className='ilc-price'>
              <input
                type='number'
                value={item.price}
                name={item.name}
                placeholder='Price'
                onChange={handleChange}
                className='ilc-field'
                required
              />
              <div className='ilc-name'>
                €
              </div>
            </div>)
          : ''}
      </Checkbox>
    </div>
  ))
}
