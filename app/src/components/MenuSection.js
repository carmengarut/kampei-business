/* eslint-disable */ 
 
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import ItemsListCheckbox from './ItemsListCheckbox'
import ItemsList from './ItemsList'
import Toggable from './Toggable'

import '../css/menuSection.css'

export default function MenuSection ({ category, checkbox, menu, setMenu }) {
  const items = useSelector(state => state.items)
  const { t } = useTranslation('global')

  const sectionItems = items.filter(item => item.category === category)

  return (
    <>
      {
        (checkbox || sectionItems.length > 0)
          ? (
            <Toggable buttonLabel={t('menu_section.' + category)}>
              {
                checkbox
                  ? category === 'blendedDrinks'
                    ? (
                      <div className='ms-container'>
                        <Toggable buttonLabel={t('menu_section.alcohol')}>
                          <ItemsListCheckbox category='blendedDrinks' subcategory='alcohol' menu={menu} setMenu={setMenu} />
                        </Toggable>
                        <Toggable buttonLabel={t('menu_section.soda')}>
                          <ItemsListCheckbox category='blendedDrinks' subcategory='soda' menu={menu} setMenu={setMenu} />
                        </Toggable>
                      </div>
                      )
                    : <ItemsListCheckbox category={category} menu={menu} setMenu={setMenu} />
                  : category === 'blendedDrinks'
                    ? (
                      <div className='ms-container'>
                        {sectionItems.filter(item => item.subcategory === 'alcohol').length > 0
                          ? (
                            <Toggable buttonLabel={t('menu_section.alcohol')}>
                              <ItemsList items={sectionItems.filter(item => item.subcategory === 'alcohol')} />
                            </Toggable>
                            )
                          : ''}

                        {sectionItems.filter(item => item.subcategory === 'soda').length > 0
                          ? (
                            <Toggable buttonLabel={t('menu_section.soda')}>
                              <ItemsList items={sectionItems.filter(item => item.subcategory === 'soda')} />
                            </Toggable>
                            )
                          : ''}

                      </div>
                      )
                    : <ItemsList items={sectionItems} />
                }

            </Toggable>)
          : ''
        }
    </>
  )
}
