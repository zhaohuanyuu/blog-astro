import type {
  SizeProp,
  Transform,
  IconLookup,
  IconPathData
} from "@fortawesome/fontawesome-svg-core"

export type IconDefinition = IconLookup & {
  icon: [
    number, // width
    number, // height
    (string | number)[], // ligatures
    string, // unicode
    IconPathData // svgPathData
  ];
}


export type FontAwesomeIconProps = {
  icon: IconDefinition;
  size?: SizeProp;
  // mask?: IconProp
  // maskId?: string
  class?: string;
  // color?: string
  // spin?: boolean
  // spinPulse?: boolean
  // spinReverse?: boolean
  // pulse?: boolean
  // beat?: boolean
  // fade?: boolean
  // beatFade?: boolean
  // bounce?: boolean
  // shake?: boolean
  // border?: boolean
  // fixedWidth?: boolean
  inverse?: boolean;
  // listItem?: boolean
  // flip?: FlipProp
  // pull?: PullProp
  // rotation?: RotateProp
  transform?: string | Transform;
  // symbol?: FaSymbol
  // style?: any
  // tabIndex?: number;
  // title?: string;
  // titleId?: string;
  swapOpacity?: boolean;
}
