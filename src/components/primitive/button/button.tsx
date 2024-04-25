import { createMemo, splitProps } from "solid-js"
import {
  mergeRefs,
  mergeDefaultProps,
  type OverrideComponentProps,
} from "../../../common/utils"
import clsx from "clsx/lite"
import { isButton } from "./is-button"
import { useTagName } from "./use-tag-name"
import { Polymorphic, type AsChildProp } from "../polymorphic"
import { ButtonStyle, type ButtonVariants } from "./button.css"

export interface ButtonRootOptions extends AsChildProp {
	disabled?: boolean
  class?: string
  color?: ButtonVariants["color"]
  variant?: ButtonVariants["variant"]
}

export interface ButtonRootProps extends OverrideComponentProps<"button", ButtonRootOptions> {}

const Button = (props: ButtonRootProps) => {
	let ref: HTMLButtonElement | undefined;

	const mergedProps = mergeDefaultProps({ type: "button" }, props);

	const [local, others] = splitProps(mergedProps, [
    "ref",
    "type",
    "class",
    "color",
    "variant",
    "disabled",
  ]);

	const tagName = useTagName(
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
      class={clsx(
        ButtonStyle({
          color: local.color,
          variant: local.variant
        }),
        local.class
      )}
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

export default Button
