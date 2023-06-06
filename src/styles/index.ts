import { createStitches, defaultThemeMap } from '@stitches/react'
import { colors, fontSizes, fonts } from './tokens'
import { radii } from './tokens/radii'
import { space } from './tokens/space'
import { shadows } from './tokens/shadows'
import { sizes } from './tokens/sizes'
import { fontWeights } from './tokens/font-weights'
import { lineHeights } from './tokens/line-heights'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  media: {
    bp1: '(max-width: 1280px)',
    bp2: '(min-width: 1281px)',
  },
  themeMap: {
    ...defaultThemeMap,
    width: 'space',
    height: 'space',
  },
  theme: {
    colors,
    fontSizes,
    fonts,
    radii,
    space,
    shadows,
    sizes,
    fontWeights,
    lineHeights,
  },
})
