import { theme as lightTheme } from "./light.css"
import { theme as darkTheme } from "./dark.css"
import { ThemeProvider as ThemeProviderHoc } from "../../components/hoc/theme-provider"

export const DEFAULT_THEME = 'system';
export const STORAGE_KEY = 'AUU_ZONE_THEME';
export const THEMES = ['light', 'dark'];

const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => (
  <ThemeProviderHoc
    themes={ THEMES }
    disableTransitionOnChange
    storageKey={ STORAGE_KEY }
    defaultTheme={ DEFAULT_THEME }
    key="theme-provider-hoc"
    value={{
      dark: darkTheme,
      light: lightTheme
    }}
  >
    { children }
  </ThemeProviderHoc>
)

export default ThemeProvider;
