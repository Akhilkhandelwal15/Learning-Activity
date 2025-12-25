import { ChevronDown } from '@tamagui/lucide-icons'
import { Adapt, Select, Sheet, YStack } from 'tamagui'

export default function ProgramSelect({ selectedProgram, setSelectedProgram }) {
  return (
    <Select value={selectedProgram} onValueChange={setSelectedProgram}>
      <Select.Trigger
        width="100%"
        $md={{ width: 150 }}
        iconAfter={ChevronDown}
        backgroundColor="$backgroundSoft"
        borderRadius="$4"
        paddingVertical="$3"
        paddingHorizontal="$4"
        borderWidth={1}
        borderColor="$borderColor"
      >
        <Select.Value placeholder="Select Program" />
      </Select.Trigger>

      <Adapt platform="touch">
        <Sheet
          modal
          dismissOnSnapToBottom
          animation="medium"
          snapPoints={[40, 75]}
          snapPointsMode="percent"
        >
          <Sheet.Overlay 
            animation="lazy"
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
            backgroundColor="rgba(0,0,0,0.5)"
          />

          <Sheet.Handle backgroundColor="$borderColor" />

          <Sheet.Frame
            backgroundColor="$background"
            borderTopLeftRadius="$6"
            borderTopRightRadius="$6"
            padding="$4"
            paddingBottom={0}
          >
            <Sheet.ScrollView contentContainerStyle={{ paddingBottom: '$4' }}>
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>
        </Sheet>
      </Adapt>

      <Select.Content zIndex={200000}>
        <Select.ScrollUpButton />
        
        <Select.Viewport
          backgroundColor="$background"
          padding="$2"
          minWidth={200}
        >
          <YStack gap="$2">
            <Select.Item
              index={0}
              value="all"
              paddingVertical="$3"
              paddingHorizontal="$4"
              borderRadius="$3"
              backgroundColor="$backgroundHover"
              hoverStyle={{
                backgroundColor: "$backgroundPress"
              }}
            >
              <Select.ItemText>All Programs</Select.ItemText>
            </Select.Item>

            <Select.Item
              index={1}
              value="prog_ai_ml"
              paddingVertical="$3"
              paddingHorizontal="$4"
              borderRadius="$3"
              backgroundColor="$backgroundHover"
              hoverStyle={{
                backgroundColor: "$backgroundPress"
              }}
            >
              <Select.ItemText>
                AI & Machine Learning Program
              </Select.ItemText>
            </Select.Item>

            <Select.Item
              index={2}
              value="prog_cloud"
              paddingVertical="$3"
              paddingHorizontal="$4"
              borderRadius="$3"
              backgroundColor="$backgroundHover"
              hoverStyle={{
                backgroundColor: "$backgroundPress"
              }}
            >
              <Select.ItemText>
                Cloud Computing Program
              </Select.ItemText>
            </Select.Item>
          </YStack>
        </Select.Viewport>
        <Select.ScrollDownButton />
      </Select.Content>
    </Select>
  )
}