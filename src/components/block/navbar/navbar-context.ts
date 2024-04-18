import {
  type Accessor,
  type Setter,
  createContext,
  useContext
} from "solid-js";

export interface TabsContextValue {

}

export const TabsContext = createContext<TabsContextValue>();

export function useTabsContext() {
	const context = useContext(TabsContext);

	if (context === undefined) {
		throw new Error(
			"[kobalte]: `useTabsContext` must be used within a `Tabs` component",
		);
	}

	return context;
}
