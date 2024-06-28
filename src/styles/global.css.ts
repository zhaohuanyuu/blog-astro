import { rem } from "./utils";
import { fonts } from "./fonts.css";
import { vars } from "./theme/contract.css";
import { globalStyle } from "@vanilla-extract/css";
// import { CodePrimitiveStyle } from "../components/mdx/Code.css"

globalStyle("*", {
  wordWrap: "break-word",
  wordBreak: "break-all",
});

globalStyle("html", {
  overflowX: "hidden",
  overflowY: "scroll",
  fontFamily: fonts.body,
  scrollBehavior: "smooth",
  scrollbarGutter: "stable",
  WebkitTextSizeAdjust: "100%",
  WebkitOverflowScrolling: "touch",
  MozOsxFontSmoothing: "grayscale",
  WebkitFontSmoothing: "antialiased",
  textRendering: "optimizeLegibility",
  // transition: 'background-color 3s ease-in-out'
});

globalStyle("::-webkit-scrollbar", {
  width: rem(12),
  backgroundColor: "rgba(0, 0, 0, 0)",
});

globalStyle("::-webkit-scrollbar-thumb", {
  borderRadius: rem(6),
  border: `${rem(2)} solid transparent`,
  backgroundClip: "content-box",
  backgroundColor: vars.color.blueGray,
});

globalStyle("::-webkit-scrollbar:hover", {
  backgroundColor: "rgba(0, 0, 0, .3)",
  // backgroundColor: vars.color.blueGray
});

globalStyle("body", {
  background: vars.color.bg,
  transition: "color, background .35s linear",
});

globalStyle("header", {
  lineHeight: 1,
  fontFamily: fonts.heading,
});

globalStyle("body, blockquote, h1, h2, h3, h4, h5, h6, hr, figure, p, pre", {
  margin: vars.space[0],
});

globalStyle("button", {
  padding: vars.space[0],
  cursor: "pointer",
});

globalStyle("img", {
  width: "100%",
});

globalStyle("ol, ul", {
  margin: vars.space[0],
  paddingLeft: "2.1875rem",
});

globalStyle("li", {
  margin: ".75rem 0",
  fontSize: vars.fontSize.md,
});

globalStyle("p", {
  margin: "1.5rem 0",
  fontSize: vars.fontSize.md,
  lineHeight: vars.lineHeight.base,
});

globalStyle("li > p", {
  margin: "1rem 0",
});

globalStyle("a", {
  position: "relative",
  textDecoration: "none",
  color: vars.color.text,
});

globalStyle("blockquote", {
  margin: "1.875rem 0",
  padding: vars.space["3"],
  borderLeftWidth: ".5rem",
  borderLeftStyle: "solid",
  borderLeftColor: vars.color.primary,
  borderRadius: vars.borderRadius.base,
  backgroundColor: vars.color.highlight,
});

globalStyle("blockquote > p", {
  margin: 0,
});

// globalStyle(`blockquote ${CodePrimitiveStyle}`, {
//   fontSize: "inherit"
// })

globalStyle("details", {
  display: "block",
});

globalStyle("summary", {
  display: "list-item",
});

globalStyle("code, kbd", {
  fontSize: vars.fontSize.sm,
  fontFamily: fonts.body,
});

globalStyle("table", {
  width: "100%",
  borderSpacing: 0,
  borderCollapse: "collapse",
});

globalStyle("th", {
  textAlign: "left",
  borderBottomStyle: "solid",
});

globalStyle("td", {
  textAlign: "left",
  borderBottomStyle: "solid",
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  fontSize: "inherit",
  fontWeight: "inherit",
  fontFamily: fonts.heading,
});

globalStyle("button, input, select, textarea", {
  padding: vars.space[0],
  lineHeight: "inherit",
});

globalStyle("img, svg, video, canvas, audio, iframe, embed, object", {
  display: "block",
});

globalStyle("img, video", {
  maxWidth: vars.space.full,
  height: vars.space.auto,
});
