import type { DomCollectionItem } from "../use-dom-collection"

export interface CollectionItem {
	/** The type of the item. */
	type: "item" | "section";
	/** A unique key for the item. */
	key: string;
	/** A string value for the item, used for features like typeahead. */
	textValue: string;
	/** Whether the item is disabled. */
	disabled: boolean;
}

export interface CollectionItemWithRef extends CollectionItem, DomCollectionItem {}
