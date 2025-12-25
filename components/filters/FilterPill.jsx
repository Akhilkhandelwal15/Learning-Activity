import { Button } from 'tamagui'

export default function FilterPill({ label, active, onPress }) {
  return (
    <Button
      size="$3"
      minWidth={90}
      borderRadius="$10"
      backgroundColor={active ? '$blue10' : '$background'}
      color={active ? '#fff' : ''}
      onPress={onPress}
    >
      {label}
    </Button>
  )
}
