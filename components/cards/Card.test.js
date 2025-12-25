import { renderWithTamagui } from '../../utils/test-utils'
import ActivityCard from './Card'

describe('ActivityCard', () => {
  const mockActivity = {
    id: '1',
    title: 'Deep Learning Basics Quiz',
    type: 'quiz',
    assessment_type: 'quiz',
    description: 'A quiz on basic deep learning concepts',
    duration_minutes: 45,
    progress_percent: 60,
    status: 'in_progress',
    thumbnail: 'https://example.com/image.png',
  }

  it('renders without crashing', () => {
    expect(() => renderWithTamagui(<ActivityCard activity={mockActivity} />)).not.toThrow()
  })
})
