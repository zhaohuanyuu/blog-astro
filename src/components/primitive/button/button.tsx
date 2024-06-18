import {
  createMemo,
  splitProps,
  type ValidComponent
} from "solid-js"
import {
  mergeRefs,
  mergeDefaultProps
} from "@common/utils"
import clsx from "clsx/lite"
import { isButton } from "./is-button"
import { useTagName } from "@common/hooks"
import { ButtonStyle, type ButtonVariants } from "./button.css"
import { Polymorphic, type ElementOf, type PolymorphicProps } from "../polymorphic"

export interface ButtonOptions {
  class?: string
  color?: ButtonVariants["color"]
  variant?: ButtonVariants["variant"]
}

export interface ButtonCommonProps<T extends HTMLElement = HTMLElement> extends ButtonOptions {
	disabled: boolean | undefined;
	type: string | undefined;
	ref: T | ((el: T) => void);
	tabIndex: number | string | undefined;
}

export interface ButtonRenderProps extends ButtonCommonProps {
  role: "menuitem" | "button" | undefined;
  "aria-disabled": boolean | undefined;
  "data-disabled": string | undefined;
}

export type ButtonProps<
  T extends ValidComponent | ButtonOptions | HTMLElement = HTMLElement
> = ButtonOptions & Partial<ButtonCommonProps<ElementOf<T>>>

const Button = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, ButtonProps<T>>
) => {
	let ref: HTMLElement | undefined;

	const mergedProps = mergeDefaultProps({ type: "button" }, props as ButtonProps);

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
		<Polymorphic<ButtonRenderProps>
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
