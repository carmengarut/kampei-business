import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import ItemsListCheckbox from './ItemsListCheckbox'
import ItemsList from './ItemsList'
import Toggable from './Toggable'

export default function MenuSection ({ category, checkbox, menu, setMenu }) {
  const items = useSelector(state => state.items)
  const business = useSelector(state => state.business)
  const { t } = useTranslation('global')

  const sectionItems = items.filter(item => item.business === business.id || item.business.id === business.id).filter(item => item.category === category)

  return (
    <>
      {
        sectionItems
          ? (
            <Toggable buttonLabel={t('menu_section.' + category)}>
              {
                checkbox
                  ? <ItemsListCheckbox category={category} menu={menu} setMenu={setMenu} />
                  : <ItemsList items={sectionItems} />
                }

            </Toggable>)
          : ''
        }
    </>
  )
}
