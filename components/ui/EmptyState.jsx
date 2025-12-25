import { SearchX } from '@tamagui/lucide-icons'
import { Button, Text, YStack } from 'tamagui'

export default function EmptyState({
  title = 'No activities found',
  description = 'Try changing filters or clearing selections.',
  actionLabel = 'Clear filters',
  onAction,
}) {
  return (
    <YStack
      alignItems="center"
      justifyContent="center"
      padding="$6"
      marginTop="$6"
      gap="$3"
      borderRadius="$6"
      backgroundColor="$background"
      borderWidth={1}
      borderColor="$borderColor"
    >
      <SearchX size={42} color="gray" opacity={0.6} />

      <Text fontSize={18} fontWeight="600" textAlign="center">
        {title}
      </Text>

      <Text
        fontSize={14}
        color="$gray10"
        textAlign="center"
        maxWidth={280}
      >
        {description}
      </Text>

      {onAction && (
        <Button
          marginTop="$3"
          size="$3"
          theme="active"
          onPress={onAction}
        >
          {actionLabel}
        </Button>
      )}
    </YStack>
  )
}
