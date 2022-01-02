import theme from 'styles/themes'

type Theme = typeof theme

declare module 'styled-componets' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme { }
}
