// https://github.com/PrismJS/prism-themes/blob/master/themes/prism-one-light.css
import { lightColors } from "../../tokens/colors"

const lightPrismTheme = {
  plain: {
    color: lightColors.textSecondary,
  },
  styles: [
    {
      types: ['comment', 'deleted'],
      style: {
        fontStyle: 'italic'
      }
    }, {
      types: ['comment', 'deleted', 'prolog','doctype','cdata','punctuation','operator','entity','url'],
      style: {
        color: 'hsl(230, 4%, 64%)'
      }
    }, {
      types: ['attr-name', 'class-name', 'boolean', 'constant', 'number', 'atrule'],
      style: {
        // color: 'hsl(35, 99%, 36%)'
        // color: 'hsl(5, 74%, 59%)'
        color: lightColors.secondary
      }
    }, {
      types: ['keyword', 'module'],
      style: {
        color: 'hsl(301, 63%, 40%)'
      }
    }, {
      types: ['property', 'tag', 'symbol', 'deleted', 'important'],
      style: {
        color: 'hsl(5, 74%, 59%)'
        // color: lightColors.secondary
      }
    }, {
      types: ['selector','string','char','builtin','inserted','regex','attr-value'],
      style: {
        color: 'hsl(119, 34%, 47%)'
      }
    }, {
      types: ['variable', 'operator', 'function'],
      style: {
        color: '#0284c7'
        // color: lightColors.secondary
      }
    }, {
      types: ['url'],
      style: {
        color: 'hsl(198, 99%, 37%)'
      }
    }, {
      types: ['language-css'],
      style: {
        color: '#059669'
      }
    }
  ]
};

export default lightPrismTheme;
