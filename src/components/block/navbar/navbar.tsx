import { Polymorphic } from "@components/primitive/polymorphic"
const Navbar = (props) => {
  return (
    <Polymorphic
      as="nav"
      children={props.children}
    />
  )
}

export default Navbar
