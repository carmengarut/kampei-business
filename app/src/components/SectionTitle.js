import dealsIcon from '../public/section-icon.svg'

import '../css/sectionTitle.css'

export default function SectionTitle ({ children }) {
  return (
    <div className='st-container'>
      <img
        alt=''
        src={dealsIcon}
        width='30px'
        height='30px'
      />
      <h1 className='st-title'>{children}</h1>
    </div>
  )
}
