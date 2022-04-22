import React from 'react'
import {Box, ThemeProvider, theme, themeGet, BaseStyles} from '../index'
import {createGlobalStyle} from 'styled-components'

// set global theme styles for each story
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${themeGet('colors.canvas.default')};
    color: ${themeGet('colors.fg.default')};
  }
`

// only remove padding for multi-theme view grid
const GlobalStyleMultiTheme = createGlobalStyle`
  body {
    padding: 0 !important;
  }
`

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type StoryContext = Record<string, any>

export const withThemeProvider = (Story: React.FC<StoryContext>, context: StoryContext) => {
  const {colorScheme} = context.globals

  if (colorScheme === 'all') {
    return (
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(0, 1fr))',
          height: '100vh'
        }}
      >
        <GlobalStyleMultiTheme />
        {Object.keys(theme.colorSchemes).map(scheme => (
          <ThemeProvider key={scheme} colorMode="day" dayScheme={scheme}>
            <BaseStyles>
              <Box
                sx={{
                  padding: '1rem',
                  height: '100%',
                  backgroundColor: 'canvas.default',
                  color: 'fg.default'
                }}
              >
                <div id={`html-addon-root-${scheme}`}>
                  <Story {...context} />
                </div>
              </Box>
            </BaseStyles>
          </ThemeProvider>
        ))}
      </Box>
    )
  }

  return (
    <ThemeProvider colorMode="day" dayScheme={colorScheme}>
      <GlobalStyle />
      <BaseStyles>
        <div id="html-addon-root">
          <Story {...context} />
        </div>
      </BaseStyles>
    </ThemeProvider>
  )
}

export const toolbarTypes = {
  colorScheme: {
    name: 'Color scheme',
    description: 'Switch color scheme',
    defaultValue: 'light',
    toolbar: {
      icon: 'photo',
      items: [...Object.keys(theme.colorSchemes), 'all'],
      showName: true
    }
  }
}
