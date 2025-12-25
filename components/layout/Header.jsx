import { Moon, Sun } from '@tamagui/lucide-icons'
import { Button, Text, XStack, YStack } from 'tamagui'

export default function Header({ theme, onToggleTheme }) {
  return (
    <XStack
      justifyContent="space-between"
      alignItems="center"
      marginBottom="$4"
    >
      <YStack gap="$1">
        <Text fontSize="$8" fontWeight="700" color="$color">
          Activities
        </Text>
        <Text color="$color" >
          User activities and progress
        </Text>
      </YStack>

      <Button
        size="$3"
        circular
        onPress={onToggleTheme}
        icon={theme === 'light' ? Moon : Sun}
      />
    </XStack>
  )
}
