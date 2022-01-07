import '../css/itemsList.css'

export default function ItemsList ({ items }) {
  return (
    <>
      {items.map((item, key) =>
        <div key={key} className='il-container'>
          <div className='il-content'>
            <img
              alt=''
              src={item.image}
              width='40'
              height='40'
            />
            <div className='il-name'>
              {item.name}
            </div>
          </div>
          <div className='il-price'>
            {item.price} €
          </div>

        </div>)}
    </>
  )
}
