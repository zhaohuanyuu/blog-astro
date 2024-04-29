import { Polymorphic } from "@components/primitive/polymorphic"

const NavbarList = (props) => {
  return (
    <Polymorphic
      as="ul"
      role="navbar-list"
      onKeyDown={e => null}
      onMouseDown={e => null}
      onFocusIn={e => null}
      onFocusOut={e => null}
    />
  )
}

export default NavbarList
