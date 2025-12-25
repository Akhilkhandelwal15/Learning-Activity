import { ScrollView, XStack } from 'tamagui'
import FilterPill from './FilterPill'
import ProgramSelect from './ProgramSelect'
import StatusSelect from './StatusSelect'

export default function FilterBar({
  selectedProgram,
  setSelectedProgram,
  selectedType,
  setSelectedType,
  selectedStatus,
  setSelectedStatus,
}) {
  const filterOptions = [
    { value: 'all', label: 'All' },
    { value: 'online_class', label: 'Online Classes' },
    { value: 'assessment', label: 'Assessments' },
  ]

  return (
    <XStack
      gap="$3"
      alignItems="stretch"
      flexDirection="column"
      $md={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        flex={1}
        $md={{ horizontal: false, flex: 'none' }}
      >
        <XStack gap="$2">
          {filterOptions.map(option => (
            <FilterPill
              key={option.value}
              label={option.label}
              active={selectedType === option.value}
              onPress={() => setSelectedType(option.value)}
            />
          ))}
        </XStack>
      </ScrollView>

      <XStack
        gap="$2"
        flexDirection="column"
        width="100%"
        $md={{
          flexDirection: 'row',
          width: 'auto',
        }}
      >
        <ProgramSelect
          selectedProgram={selectedProgram}
          setSelectedProgram={setSelectedProgram}
        />

        <StatusSelect
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
        />
      </XStack>
    </XStack>
  )
}
