import { render } from '@testing-library/react-native'
import { TamaguiProvider } from 'tamagui'
import config from '../theme/tamagui.config'

export function renderWithTamagui(ui) {
  return render(<TamaguiProvider config={config}>{ui}</TamaguiProvider>)
}
