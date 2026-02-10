import { ItemList } from '../ItemList'
import { DrawerComponent } from './styles'

export function MenuDrawer() {
  return (
    <DrawerComponent variant="permanent">
      <ItemList />
    </DrawerComponent>
  )
}
