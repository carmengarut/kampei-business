import { useState } from 'react'
import beefeater from '../public/blendedDrinks/beefeater.png'
import barcelo from '../public/blendedDrinks/barcelo.png'
import johnnieWalker from '../public/blendedDrinks/johnnieWalker.png'
import cocacola from '../public/softDrinks/cocacola.png'
import fantaNaranja from '../public/softDrinks/fantaNaranja.png'
import sprite from '../public/softDrinks/sprite.png'

const useItems = () => {
  const [menu, setMenu] = useState([
    {
      name: 'Barceló',
      value: true,
      image: barcelo,
      price: '',
      category: 'blendedDrinks'
    },
    {
      name: 'Beefeater',
      value: true,
      image: beefeater,
      price: '',
      category: 'blendedDrinks'
    },
    {
      name: 'Johnnie Walker',
      value: true,
      image: johnnieWalker,
      price: '',
      category: 'blendedDrinks'
    },
    {
      name: 'Cocacola',
      value: true,
      image: cocacola,
      price: '',
      category: 'softDrinks'
    },
    {
      name: 'Fanta Naranja',
      value: true,
      image: fantaNaranja,
      price: '',
      category: 'softDrinks'
    },
    {
      name: 'Sprite',
      value: true,
      image: sprite,
      price: '',
      category: 'softDrinks'
    }
  ])

  return {
    menu,
    setMenu
  }
}

export default useItems
