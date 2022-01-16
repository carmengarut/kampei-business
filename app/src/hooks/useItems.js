import { useState } from 'react'
import beefeater from '../public/blendedDrinks/beefeater.png'
import seagram from '../public/blendedDrinks/seagram.jpeg'
import ballantines from '../public/blendedDrinks/ballantines.jpg'
import smirnoff from '../public/blendedDrinks/smirnoff.jpeg'
import absolut from '../public/blendedDrinks/absolut.jpeg'
import jackDaniels from '../public/blendedDrinks/jackDaniels.png'
import blackLabel from '../public/blendedDrinks/blackLabel.jpeg'
import brugal from '../public/blendedDrinks/brugal.jpeg'
import larios from '../public/blendedDrinks/larios.jpeg'
import rives from '../public/blendedDrinks/rives.jpeg'
import tanqueray from '../public/blendedDrinks/tanqueray.png'
import barcelo from '../public/blendedDrinks/barcelo.png'
import johnnieWalker from '../public/blendedDrinks/johnnieWalker.png'
import cocacola from '../public/softDrinks/cocacola.png'
import cocacolaZero from '../public/softDrinks/cocacolaZero.jpeg'
import fantaLimon from '../public/softDrinks/fantaLimon.jpeg'
import fantaNaranja from '../public/softDrinks/fantaNaranja.png'
import monster from '../public/softDrinks/monster.jpeg'
import pepsi from '../public/softDrinks/pepsi.png'
import redbull from '../public/softDrinks/redbull.jpeg'
import sevenup from '../public/softDrinks/sevenup.jpeg'
import sprite from '../public/softDrinks/sprite.png'
import tonicaSchweppes from '../public/softDrinks/tonicaSchweppes.jpeg'
import caña from '../public/beers/caña.jpeg'
import coronita from '../public/beers/coronita.jpeg'
import cruzcampo from '../public/beers/cruzcampo.jpeg'
import desperados from '../public/beers/desperados.jpeg'
import elAguila from '../public/beers/elAguila.jpeg'
import estrellaGalicia from '../public/beers/estrellaGalicia.png'
import heineken from '../public/beers/heineken.jpeg'
import vasoSidra from '../public/beers/vasoSidra.jpeg'

const useItems = () => {
  const [menu, setMenu] = useState([
    {
      name: 'Absolut',
      value: true,
      image: absolut,
      price: '',
      category: 'blendedDrinks',
      subcategory: 'alcohol'
    },
    {
      name: 'Ballantines',
      value: true,
      image: ballantines,
      price: '',
      category: 'blendedDrinks',
      subcategory: 'alcohol'
    },
    {
      name: 'Barceló',
      value: true,
      image: barcelo,
      price: '',
      category: 'blendedDrinks',
      subcategory: 'alcohol'
    },
    {
      name: 'Beefeater',
      value: true,
      image: beefeater,
      price: '',
      category: 'blendedDrinks',
      subcategory: 'alcohol'
    },
    {
      name: 'Black Label',
      value: true,
      image: blackLabel,
      price: '',
      category: 'blendedDrinks',
      subcategory: 'alcohol'
    },
    {
      name: 'Brugal',
      value: true,
      image: brugal,
      price: '',
      category: 'blendedDrinks',
      subcategory: 'alcohol'
    },
    {
      name: 'Jack Daniels',
      value: true,
      image: jackDaniels,
      price: '',
      category: 'blendedDrinks',
      subcategory: 'alcohol'
    },
    {
      name: 'Johnnie Walker',
      value: true,
      image: johnnieWalker,
      price: '',
      category: 'blendedDrinks',
      subcategory: 'alcohol'
    },
    {
      name: 'Larios',
      value: true,
      image: larios,
      price: '',
      category: 'blendedDrinks',
      subcategory: 'alcohol'
    },
    {
      name: 'Rives',
      value: true,
      image: rives,
      price: '',
      category: 'blendedDrinks',
      subcategory: 'alcohol'
    },
    {
      name: 'Seagram',
      value: true,
      image: seagram,
      price: '',
      category: 'blendedDrinks',
      subcategory: 'alcohol'
    },
    {
      name: 'Smirnoff',
      value: true,
      image: smirnoff,
      price: '',
      category: 'blendedDrinks',
      subcategory: 'alcohol'
    },
    {
      name: 'Tanqueray',
      value: true,
      image: tanqueray,
      price: '',
      category: 'blendedDrinks',
      subcategory: 'alcohol'
    },
    {
      name: 'Cocacola (Añad)',
      value: true,
      image: cocacola,
      price: '',
      category: 'blendedDrinks',
      subcategory: 'soda'
    },
    {
      name: 'Cocacola Zero (Añad)',
      value: true,
      image: cocacolaZero,
      price: '',
      category: 'blendedDrinks',
      subcategory: 'soda'
    },
    {
      name: 'Fanta Limón (Añad)',
      value: true,
      image: fantaLimon,
      price: '',
      category: 'blendedDrinks',
      subcategory: 'soda'
    },
    {
      name: 'Fanta Naranja (Añad)',
      value: true,
      image: fantaNaranja,
      price: '',
      category: 'blendedDrinks',
      subcategory: 'soda'
    },
    {
      name: 'Monster (Añad)',
      value: true,
      image: monster,
      price: '',
      category: 'blendedDrinks',
      subcategory: 'soda'
    },
    {
      name: 'Pepsi (Añad)',
      value: true,
      image: pepsi,
      price: '',
      category: 'blendedDrinks',
      subcategory: 'soda'
    },
    {
      name: 'Redbull (Añad)',
      value: true,
      image: redbull,
      price: '',
      category: 'blendedDrinks',
      subcategory: 'soda'
    },
    {
      name: 'SevenUp (Añad)',
      value: true,
      image: sevenup,
      price: '',
      category: 'blendedDrinks',
      subcategory: 'soda'
    },
    {
      name: 'Sprite (Añad)',
      value: true,
      image: sprite,
      price: '',
      category: 'blendedDrinks',
      subcategory: 'soda'
    },
    {
      name: 'Tónica Schweppes (Añad)',
      value: true,
      image: tonicaSchweppes,
      price: '',
      category: 'blendedDrinks',
      subcategory: 'soda'
    },
    {
      name: 'Cocacola',
      value: true,
      image: cocacola,
      price: '',
      category: 'softDrinks'
    },
    {
      name: 'Cocacola Zero',
      value: true,
      image: cocacolaZero,
      price: '',
      category: 'softDrinks'
    },
    {
      name: 'Fanta Limón',
      value: true,
      image: fantaLimon,
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
      name: 'Monster',
      value: true,
      image: monster,
      price: '',
      category: 'softDrinks'
    },
    {
      name: 'Pepsi',
      value: true,
      image: pepsi,
      price: '',
      category: 'softDrinks'
    },
    {
      name: 'Redbull',
      value: true,
      image: redbull,
      price: '',
      category: 'softDrinks'
    },
    {
      name: 'SevenUp',
      value: true,
      image: sevenup,
      price: '',
      category: 'softDrinks'
    },
    {
      name: 'Sprite',
      value: true,
      image: sprite,
      price: '',
      category: 'softDrinks'
    },
    {
      name: 'Tónica Schweppes',
      value: true,
      image: tonicaSchweppes,
      price: '',
      category: 'softDrinks'
    },
    {
      name: 'Caña Barril',
      value: true,
      image: caña,
      price: '',
      category: 'beers'
    },
    {
      name: 'Coronita',
      value: true,
      image: coronita,
      price: '',
      category: 'beers'
    },
    {
      name: 'Cruzcampo',
      value: true,
      image: cruzcampo,
      price: '',
      category: 'beers'
    },
    {
      name: 'Desperados',
      value: true,
      image: desperados,
      price: '',
      category: 'beers'
    },
    {
      name: 'El Águila (sin filtrar)',
      value: true,
      image: elAguila,
      price: '',
      category: 'beers'
    },
    {
      name: 'Estrella Galicia',
      value: true,
      image: estrellaGalicia,
      price: '',
      category: 'beers'
    },
    {
      name: 'Heineken',
      value: true,
      image: heineken,
      price: '',
      category: 'beers'
    },
    {
      name: 'Cerveza Barril Vaso Sidra',
      value: true,
      image: vasoSidra,
      price: '',
      category: 'beers'
    }
  ])

  return {
    menu,
    setMenu
  }
}

export default useItems
