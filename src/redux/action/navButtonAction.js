import { navButtonClick } from './actionsType'

const NavButtonActionsCreator = {
  createNavButtonClick: page => ({ type: navButtonClick, page })
}



export default NavButtonActionsCreator
