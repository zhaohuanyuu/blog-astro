import { Polymorphic } from "@components/primitive/polymorphic"

const NavbarList = (props) => {
  return (
    <Polymorphic
      as="ul"
      role="navbar-list"
    />
  )
}

export default NavbarList
