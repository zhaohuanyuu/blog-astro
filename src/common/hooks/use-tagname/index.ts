import { isString } from "@common/utils"
import {
  createSignal,
  createEffect,
  type Accessor,
  type Component
} from "solid-js"

function stringOrUndefined(value: any) {
	return isString(value) ? value : undefined;
}

export function useTagName(
  ref: Accessor<HTMLElement | undefined>,
  fallback?: Accessor<string | Component | undefined>
) {
  const [tagName, setTagName] = createSignal(stringOrUndefined(fallback?.()));
  createEffect(() => {
		setTagName(ref()?.tagName.toLowerCase() || stringOrUndefined(fallback?.()));
	})
  return tagName
}


