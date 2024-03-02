import type { JSX, Accessor } from "solid-js"
import type { MergeProps } from "./component"

/**
 * T or a reactive/non-reactive function returning T
 */
type MaybeAccessor<T> = T | Accessor<T>;
/**
 * Accessed value of a MaybeAccessor
 * @example
 * ```ts
 * MaybeAccessorValue<MaybeAccessor<string>>
 * // => string
 * MaybeAccessorValue<MaybeAccessor<() => string>>
 * // => string | (() => string)
 * MaybeAccessorValue<MaybeAccessor<string> | Function>
 * // => string | void
 * ```
 */
type MaybeAccessorValue<T extends MaybeAccessor<any>> = T extends () => any ? ReturnType<T> : T;

/**
 * Combines two set of styles together. Accepts both string and object styles.\
 * @example
 * const styles = combineStyle("margin: 24px; border: 1px solid #121212", {
 *   margin: "2rem",
 *   padding: "16px"
 * });
 * styles; // { margin: "2rem", border: "1px solid #121212", padding: "16px" }
 */
declare function combineStyle(a: string, b: string): string;
declare function combineStyle(a: JSX.CSSProperties | undefined, b: JSX.CSSProperties | undefined): JSX.CSSProperties;
declare function combineStyle(a: JSX.CSSProperties | string | undefined, b: JSX.CSSProperties | string | undefined): JSX.CSSProperties;
type PropsInput = {
  class?: string;
  className?: string;
  classList?: Record<string, boolean | undefined>;
  style?: JSX.CSSProperties | string;
  ref?: Element | ((el: any) => void);
} & Record<string, any>;
type CombinePropsOptions = {
  /**
   * by default the event handlers will be called left-to-right,
   * following the order of the sources.
   * If this option is set to true, the handlers will be called right-to-left.
   */
  reverseEventHandlers?: boolean;
};


/**
 * A helper that reactively merges multiple props objects together while smartly combining some of Solid's JSX/DOM attributes.
 *
 * Event handlers and refs are chained, class, classNames and styles are combined.
 * For all other props, the last prop object overrides all previous ones. Similarly to {@link mergeProps}
 * @param sources - Multiple sets of props to combine together.
 * @example
 * ```tsx
 * const MyButton: Component<ButtonProps> = props => {
 *    const { buttonProps } = createButton();
 *    const combined = combineProps(props, buttonProps);
 *    return <button {...combined} />
 * }
 * // component consumer can provide button props
 * // they will be combined with those provided by createButton() primitive
 * <MyButton style={{ margin: "24px" }} />
 * ```
 */
declare function combineProps<T extends [] | MaybeAccessor<PropsInput>[]>(sources: T, options?: CombinePropsOptions): MergeProps<T>;
declare function combineProps<T extends [] | MaybeAccessor<PropsInput>[]>(...sources: T): MergeProps<T>;

export { combineProps }
