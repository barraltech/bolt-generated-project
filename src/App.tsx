import React, { useState, useEffect } from 'react';
import GamificationDashboard from './lfcollab-gamification.tsx';
import CollabStudio from './lfcollab-studio.tsx';
import VocalCollaboration from './lfcollab-vocals.tsx';
import PartyInterface from './lfparty-main.tsx';
import UserProfile from './omni-user-profile-updated.tsx';
import OmniPlayer from './omni-player.tsx';
import SocialFeed from './omni-social-feed.tsx';
import EventCreation from './lfparty-create-event.tsx';
import EventMonitoring from './lfparty-event-monitoring.tsx';
import HosterDashboard from './lfparty-hoster-dashboard.tsx';
import GenAIWorkspace from './genai-workspace.tsx';

function App() {
  const [currentView, setCurrentView] = useState<string>('gamification');

  const views: { [key: string]: React.ComponentType } = {
    gamification: GamificationDashboard,
    studio: CollabStudio,
    vocals: VocalCollaboration,
    party: PartyInterface,
    profile: UserProfile,
    omniPlayer: OmniPlayer,
    socialFeed: SocialFeed,
    eventCreation: EventCreation,
    eventMonitoring: EventMonitoring,
    hosterDashboard: HosterDashboard,
    genAIWorkspace: GenAIWorkspace,
  };

  const viewOptions = Object.keys(views);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentView(event.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="p-4 border-b border-gray-800">
        <div className="flex items-center">
          <label htmlFor="view-select" className="mr-2">
            Select View:
          </label>
          <select
            id="view-select"
            className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2"
            value={currentView}
            onChange={handleChange}
          >
            {viewOptions.map((view) => (
              <option key={view} value={view}>
                {view}
              </option>
            ))}
          </select>
        </div>
      </nav>

      <main className="p-4">
        {React.createElement(views[currentView])}
      </main>
    </div>
  );
}

export default App;
