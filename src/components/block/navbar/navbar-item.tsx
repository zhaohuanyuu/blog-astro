import { Polymorphic } from "@components/primitive/polymorphic"

const NavbarItem = () => {
  return (
    <Polymorphic
      as="li"
      role="navbar-item"
    />
  )
}

export default NavbarItem
