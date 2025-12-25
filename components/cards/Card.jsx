import { Button, Card, Progress, Text, XStack, YStack } from 'tamagui'
import Badge from '../ui/Badge'
import CourseImage from '../ui/CourseImage'

export default function ActivityCard({ activity }) {
  const badgeColors = {
    quiz: '#f59e0b',
    assignment: '#3b82f6',
    discussion: '#10b981',
    online_class: '#8b5cf6',
  }

  const buttonColors = {
    not_started: 'gray',
    in_progress: '#f97316',
    completed: '#16A34A',
  }

  const buttonHoverColors = {
    not_started: '#4B5563',
    in_progress: '#EA580C',
    completed: '#15803D',
  }

  const buttonLabel =
    activity.status === 'in_progress'
      ? 'Continue'
      : activity.status === 'completed'
      ? 'Review'
      : 'Start'

  return (
    <Card
      padding="$4"
      borderRadius="$6"
      backgroundColor="$cardBackground"
      borderWidth={1}
      borderColor="$borderColor"
    >
      <XStack
        gap="$4"
        flexDirection="column"
        $md={{ flexDirection: 'row' }}
      >
        <YStack
          width="100%"
          alignItems="center"
          justifyContent="center"
          $md={{ width: 120 }}
        >
          <CourseImage
            uri={activity.thumbnail}
            width={90}
            height={90}
            resizeMode="contain"
            opacity={0.9}
          />
        </YStack>

        <YStack flex={1} gap="$3">
          <XStack
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
            gap="$2"
          >
            <Badge
              label={
                activity.type === 'online_class'
                  ? 'ONLINE CLASS'
                  : activity.assessment_type?.toUpperCase()
              }
              color={badgeColors[activity.assessment_type || activity.type]}
            />

            {activity.due_date && (
              <XStack
                paddingHorizontal="$3"
                paddingVertical="$1.5"
                borderRadius="$10"
                backgroundColor="rgba(239,68,68,0.15)"
              >
                <Text fontSize={12} color="$red10">
                  📅 Due{' '}
                  {new Date(activity.due_date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  })}
                </Text>
              </XStack>
            )}
          </XStack>

          <Text fontSize={16} fontWeight="700" $md={{ fontSize: 18 }} testID="activity-title">
            {activity.title}
          </Text>

          <Text fontSize={14}>
            {activity.description}
          </Text>

          {activity.duration_minutes && (
            <XStack gap="$3" flexWrap="wrap">
              <Text fontSize={13} color="gray">
                ⏱ {activity.duration_minutes} min
              </Text>
              <Text fontSize={13} color="gray">
                👤 {activity.progress_percent}% completed
              </Text>
            </XStack>
          )}

          <XStack justifyContent="space-between">
            <Text fontSize={13}>
              Progress
            </Text>
            <Text fontSize={13} fontWeight="600" >
              {activity.progress_percent}%
            </Text>
          </XStack>

          <Progress value={activity.progress_percent} height={6} backgroundColor="gray">
            <Progress.Indicator
              backgroundColor={
                activity.progress_percent === 100
                  ? '#16A34A'
                  : '#F97316'
              }
            />
          </Progress>

          <Button
            marginTop="$2"
            width="100%"
            $md={{ width: 'auto', alignSelf: 'flex-end' }}
            backgroundColor={buttonColors[activity.status]}
            hoverStyle={{ backgroundColor: buttonHoverColors[activity.status] }}
            color="#fff"
          >
            {buttonLabel}
          </Button>
        </YStack>
      </XStack>
    </Card>
  )
}
