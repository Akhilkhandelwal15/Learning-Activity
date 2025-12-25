import { YStack } from 'tamagui'

export default function PageContainer({ children }) {
  return (
    <YStack width="100%" alignItems="center" paddingTop={'$6'} backgroundColor="$bodyBackgound">
      <YStack
        width="100%"
        maxWidth={1024}
        padding="$4"
        gap="$4"
      >
        {children}
      </YStack>
    </YStack>
  )
}
