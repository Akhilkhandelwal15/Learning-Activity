# Learning Activity App

A cross-platform learning activity management interface built with React Native, Expo, and Tamagui. Works seamlessly on web, Android, and iOS.


## Features:

- **Cross-platform**: Single codebase for web, Android, and iOS
- **Light/Dark Mode**: Automatic theme switching with Tamagui
- **Progress Tracking**: Visual progress bars for each activity
- **Smart Filtering**: Filter activities by type and status
- **Responsive Design**: Adapts to different screen sizes
- **Fast Development**: Hot reload with Expo for rapid iteration


## Prerequisites:

- **Node.js** v22 or higher
- **npm** or **yarn**
- **Expo Go** app (for mobile testing)

## Installation:

1. Clone the repository:
```bash
git clone <repository-link>
```

2. Navigate to the project directory:
```bash
cd react-learning-activity
```

3. Install dependencies:
```bash
npm install
```

### Running on Web

1. Start the development server:
```bash
npm start
```

2. Open your browser and navigate to:
```
http://localhost:8081/
```

The app will automatically open in your default browser.

### Running on Mobile

1. Follow the installation steps above

2. Start the development server:
```bash
npm start
```

3. Scan the QR code displayed in the terminal using the **Expo Go** app on your mobile device

   > **Note**: Make sure your mobile device and PC are connected to the same Wi-Fi network

4. If the app doesn't run on mobile, create a tunnel connection:
```bash
npx expo start --tunnel
```

5. Scan the QR code again, and the app should launch on your device

## App Functionality:

### 1. ActivityCard Component

Displays individual learning activities in an intuitive card format.

**Props Structure:**

- Program:

```javascript
{
  id: string,
  name: string,
  description: string,
  activities: Activity[]
}
```

- Activity:

```javascript
{
  id: string,
  title: string,
  type: "assessment" | "online_class",
  assessment_type: "quiz" | "discussion" | "assignment",
  description: string,
  duration_minutes: number,
  progress_percent: number, // 0-100
  status: "not_started" | "in_progress" | "completed",
  thumbnail: string, // image URL
}
```


**Features:**
- Title and description display
- Color-coded type badges
- Thumbnail images
- Progress visualization
- Dynamic action buttons:
  - `not_started` → "Start"
  - `in_progress` → "Continue"
  - `completed` → "Review"
- Due date badges (when available)
- Status-based button colors

### 2. FilterBar Component

Enables users to filter activities efficiently.

**Features:**
- Multiple filter options (All, Online Classes, Assessments, Completed)
- Real-time list updates
- Reduces scrolling through long activity lists

**Default Behavior:**
- Default filter: "All"
- Dynamic activity list updates on filter change

### 3. Theme Support

- Automatic light/dark mode switching
- Theme-aware colors and backgrounds
- Consistent styling across all components

### 4. Cross-Platform Functionality

**Web:**
- Responsive layouts
- Flexible card directions based on screen size
- Compatible with all modern browsers

**Mobile (Android/iOS):**
- Native UI elements via Tamagui
- Touch interactions and gestures
- Adaptive scaling for different screen sizes

### 5. User Flow

1. Launch the app on web or mobile
2. Browse learning activities as cards
3. Use FilterBar to narrow down activities
4. Check progress, status, and due dates
5. Take action with dynamic buttons (Start/Continue/Review)

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React Native** | Cross-platform framework for web, Android, and iOS |
| **Expo** | Managed workflow for building, bundling, and testing |
| **Tamagui** | Cross-platform UI components with responsive design |
| **React** | Component-based architecture |
| **Jest + Testing Library** | Unit and component testing |
| **Node.js & npm** | Dependency and build management |
| **Local mock data** | Development/testing data (replaceable with API) |

### Why These Technologies?

**React Native + Expo:**
- Single codebase for all platforms
- Fast development with hot reload
- Pre-configured bundling
- Easy device testing with Expo Go

**Tamagui:**
- Consistent UI across platforms
- Built-in theming support
- Responsive layouts out of the box

**Jest + Testing Library:**
- Lightweight testing framework
- Component-level testing
- Easy to write and maintain tests


## Current Limitations

- No backend integration (uses local mock data)
- Basic test coverage
- Limited accessibility features (screen readers, keyboard navigation)
- Dark mode not fully customized for all components

## Future Improvements

- [ ] Integrate with real-time API/backend
- [ ] Comprehensive unit and integration tests
- [ ] Persistent user progress storage
- [ ] UI animations for progress bars and buttons
- [ ] Custom badges and icons
- [ ] Enhanced dark mode styling
- [ ] End-to-end testing
- [ ] Offline mode with activity caching
- [ ] Push notifications for due dates
- [ ] User authentication and profiles
- [ ] Analytics and reporting dashboard