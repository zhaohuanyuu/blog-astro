import {
  on,
  splitProps,
  createEffect,
  createSignal,
  createUniqueId,
  type ValidComponent
} from "solid-js"
import { mergeDefaultProps } from "@common/utils"
import type { Orientation } from "@common/types"
import type { CollectionItemWithRef } from "@common/hooks/use-collection"
import type { ElementOf, Polymorphic, PolymorphicProps } from "../../primitive/polymorphic"

export interface TabsOptions {
  /** The controlled value of the tab to activate. */
  value?: string;
  /**
   * The value of the tab that should be active when initially rendered.
   * Useful when you do not need to control the state.
   */
  defaultValue?: string;
  /** Event handler called when the value changes. */
  onChange?: (value: string) => void;
  /** The orientation of the tabs. */
  orientation?: Orientation;
  /** Whether tabs are activated automatically on focus or manually. */
  activationMode?: 'automatic' | 'manual';
  /** Whether the tabs are disabled. */
  disabled?: boolean;
}

export interface TabsCommonProps<T extends HTMLElement = HTMLElement> {
  id?: string
}

export interface TabsRootRenderProps extends TabsCommonProps {
	"data-orientation": Orientation;
}

export type TabsProps<
	T extends ValidComponent | HTMLElement = HTMLElement,
> = TabsOptions & Partial<TabsCommonProps<ElementOf<T>>>;

const Tabs = <T extends ValidComponent = 'div'>(
  props: PolymorphicProps<T, TabsProps<T>>
) => {
  const defaultId = `tabs-${createUniqueId()}`;
  const mergeProps = mergeDefaultProps({
    id: defaultId,
    orientation: "horizontal",
    activationMode: "automatic"
  }, props as TabsProps);
  const [local, others] = splitProps(mergeProps, [
    "value",
    "defaultValue",
    "onChange",
		"orientation",
		"activationMode",
		"disabled",
  ]);
	const [items, setItems] = createSignal<CollectionItemWithRef[]>([]);
	const [selectedTab, setSelectedTab] = createSignal<HTMLElement>();
	// const { DomCollectionProvider } = createDomCollection({
	// 	items,
	// 	onItemsChange: setItems,
	// });
}

export default Tabs
