import { useState } from 'react'
import { ScrollView, TamaguiProvider, Text, YStack } from 'tamagui'
import ActivityCard from '../components/cards/Card'
import FilterBar from '../components/filters/FilterBar'
import Header from '../components/layout/Header'
import PageContainer from '../components/layout/PageContainer'
import EmptyState from '../components/ui/EmptyState'
import { programs } from '../data/activities.js'
import config from '../theme/tamagui.config'

export default function App() {
  const [selectedProgram, setSelectedProgram] = useState('all');
  const [activityType, setActivityType] = useState('all');
  const [status, setStatus] = useState('all');
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  const resetFilters = () => {
    setSelectedProgram('all');
    setActivityType('all');
    setStatus('all');
  }

  const filteredPrograms = programs[0].programs
  .filter(program => selectedProgram === 'all' || program.id === selectedProgram)
    .map(program => {
      const activities = program.activities.filter(activity => {
        const typeMatch = activityType === 'all' || activityType === activity.type
        const statusMatch = status === 'all' ||status === activity.status
        return typeMatch && statusMatch
      })
    return { ...program, activities }
  }).filter(program => program.activities.length > 0);

  return (
    <TamaguiProvider config={config} defaultTheme={theme}>
      <ScrollView>
        <PageContainer>
          <Header theme={theme} onToggleTheme={toggleTheme} />
          <FilterBar
            selectedProgram={selectedProgram}
            setSelectedProgram={setSelectedProgram}
            selectedType={activityType}
            setSelectedType={setActivityType}
            selectedStatus={status}
            setSelectedStatus={setStatus}
          />
          {filteredPrograms.length===0 ? (
            <EmptyState
              title="No activities match your filters"
              description="Try adjusting the activity type or status filters."
              actionLabel="Reset filters"
              onAction={resetFilters}
            />
          ): (
            <YStack gap="$6">
              {filteredPrograms.map(program => (
                <YStack key={program.id} gap="$4">
                  <Text fontSize={24} fontWeight="700" color="$color">
                    {program.name}
                  </Text>

                  <YStack gap="$4">
                    {program.activities.map(activity => (
                      <ActivityCard key={activity.id} activity={activity} />
                    ))}
                  </YStack>
                </YStack>
              ))}
            </YStack>
          )}
        </PageContainer>
      </ScrollView>
    </TamaguiProvider>
  )
}
