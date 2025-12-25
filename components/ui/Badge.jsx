import React from 'react'
import { Text, XStack } from 'tamagui'

export default function Badge({ label, color = '#f59e0b' }) {
  return (
    <XStack
      alignItems="center"
      paddingHorizontal="$4"
      paddingVertical="$2"
      borderRadius="$10"
      backgroundColor={`${color}20`}
    >
      <Text
        fontSize="$2"
        fontWeight="600"
        color={color}
        textTransform="uppercase"
        letterSpacing={0.5}
      >
        {label}
      </Text>
    </XStack>
  )
}
