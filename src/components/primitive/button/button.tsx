import { createMemo, splitProps } from "solid-js"
import {
  mergeRefs,
  mergeDefaultProps,
  type OverrideComponentProps,
} from "../../../common/utils"
import { isButton } from "./is-button"
import { createTagName } from "../creations"
import { type AsChildProp, Polymorphic } from "../polymorphic";

export interface ButtonRootOptions extends AsChildProp {
	disabled?: boolean;
}

export interface ButtonRootProps extends OverrideComponentProps<"button", ButtonRootOptions> {}

export function ButtonRoot(props: ButtonRootProps) {
	let ref: HTMLButtonElement | undefined;

	const mergedProps = mergeDefaultProps({ type: "button" }, props);

	const [local, others] = splitProps(mergedProps, ["ref", "type", "disabled"]);

	const tagName = createTagName(
		() => ref,
		() => "button",
	);

	const isNativeButton = createMemo(() => {
		const elementTagName = tagName();

		if (elementTagName == null) {
			return false;
		}

		return isButton({ tagName: elementTagName, type: local.type });
	});

	const isNativeInput = createMemo(() => {
		return tagName() === "input";
	});

	const isNativeLink = createMemo(() => {
		return tagName() === "a" && ref?.getAttribute("href") != null;
	});

	return (
		<Polymorphic
			as="button"
			ref={mergeRefs((el) => (ref = el), local.ref)}
			type={isNativeButton() || isNativeInput() ? local.type : undefined}
			role={!isNativeButton() && !isNativeLink() ? "button" : undefined}
			tabIndex={
				!isNativeButton() && !isNativeLink() && !local.disabled ? 0 : undefined
			}
			disabled={
				isNativeButton() || isNativeInput() ? local.disabled : undefined
			}
			aria-disabled={
				!isNativeButton() && !isNativeInput() && local.disabled
					? true
					: undefined
			}
			data-disabled={local.disabled ? "" : undefined}
			{...others}
		/>
	);
}
