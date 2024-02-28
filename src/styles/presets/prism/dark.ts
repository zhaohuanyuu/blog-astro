import { darkColors } from "../../tokens/colors"

const darkPrismTheme = {
  plain: {
    color: darkColors.textSecondary,
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
        color: darkColors.gray
      }
    }, {
      types: ['property','tag','boolean','number','constant','symbol','deleted','function','class-name','regex','important','variable'],
      style: {
        color: darkColors.pink
      }
    }, {
      // types: ['atrule','attr-value','keyword'],
      types: ['atrule','keyword'],
      style: {
        color: darkColors.primary
      }
    }, {
      // types: ['selector', 'attr-name', 'char', 'builtin', 'inserted'],
      types: ['selector', 'char', 'builtin', 'inserted'],
      style: {
        // color: '#82B1FF'
        // color: '#9effff'
        color: darkColors.primary
      }
    }, {
      types: ['string', 'attr-value', 'language-css'],
      style: {
        color: '#6ee7b7'
      }
    }, {
      types: ['module', 'attr-name'],
      style: {
        color: '#7dd3fc'
      }
    }
  ]
};

export default darkPrismTheme;
