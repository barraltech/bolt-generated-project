import { useState } from 'react'
import { Trophy, Star, Target, BarChart2, Award, Users, ArrowUp, ChevronRight, Music, Activity, Play, Clock, Download } from 'lucide-react'
import GamificationDashboard from './lfcollab-gamification.tsx'
import CollabStudio from './lfcollab-studio.tsx'
import VocalCollaboration from './lfcollab-vocals.tsx'
import PartyInterface from './lfparty-main.tsx'
import UserProfile from './omni-user-profile-updated.tsx'

function App() {
  const [currentView, setCurrentView] = useState('gamification')

  const views = {
    gamification: <GamificationDashboard />,
    studio: <CollabStudio />,
    vocals: <VocalCollaboration />,
    party: <PartyInterface />,
    profile: <UserProfile />
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="p-4 border-b border-gray-800">
        <div className="flex gap-4">
          {Object.keys(views).map(view => (
            <button
              key={view}
              onClick={() => setCurrentView(view)}
              className={`px-4 py-2 rounded-lg ${
                currentView === view
                  ? 'bg-cyan-500'
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              {view}
            </button>
          ))}
        </div>
      </nav>
      
      <main className="p-4">
        {views[currentView]}
      </main>
    </div>
  )
}

export default App
