import { Platform } from "react-native";
import { YStack } from "tamagui";

export default function StickyFilters({ children }) {
  return (
    <YStack
      zIndex={10}
      backgroundColor="$background"
      {...(Platform.OS === 'web'
        ? {
            position: 'sticky',
            top: 0,
            paddingTop: 10,
            paddingBottom: 10
          }
        : {})}
    >
      {children}
    </YStack>
  )
}