import { splitProps } from "solid-js"

type SvgIconProps = {
  id: string,
  [x: string]: any
}

const SvgIcon = (props: SvgIconProps) => {
  const [id, others] = splitProps(props, ['id'])
  return (
    <svg { ...others }>
      <use href={`/icons.svg#${id}`} />
    </svg>
  )
}

export default SvgIcon;
