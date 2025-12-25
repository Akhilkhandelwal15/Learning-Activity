import { defaultConfig } from '@tamagui/config/v4'
import { createTamagui } from 'tamagui'

const config = createTamagui({
  ...defaultConfig,
  themes: {
    ...defaultConfig.themes,
    light: {
      ...defaultConfig.themes.light,
      backgroundSoft: '#f5f5f5',
      backgroundDark: '#e5e5e5',
      backgroundHover: '#ebebeb',
      backgroundPress: '#e0e0e0',
      borderColor: '#d4d4d4',
      backgroundFocus: '#e0e0e0',
      bodyBackgound: '#fff',
      cardBackground: '#f2f2f2'
    },
    dark: {
      ...defaultConfig.themes.dark,
      backgroundSoft: '#2a2a2a',
      backgroundDark: '#1a1a1a',
      backgroundHover: '#333333',
      backgroundPress: '#3d3d3d',
      borderColor: '#404040',
      backgroundFocus: '#3d3d3d',
      bodyBackgound: "#050505",
      cardBackground: '#2a2a2a'
    },
  },
})

export const tamaguiConfig = config

export default tamaguiConfig

export type Conf = typeof tamaguiConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}