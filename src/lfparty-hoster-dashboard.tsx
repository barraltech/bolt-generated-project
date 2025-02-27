import React from 'react';
import { Calendar, Users, Music, MapPin, Bell, Settings, ChevronUp, BarChart2, 
  ChevronRight, DollarSign, Clock, Star, Filter, Search, Plus, Menu } from 'lucide-react';

const HosterDashboard = () => {
  // Dados simulados para o dashboard
  const hosterData = {
    activeEvents: 12,
    managedArtists: 45,
    venuesCount: 8,
    totalAttendance: 2400,
    upcomingEvents: [
      { id: 1, name: 'Festa Eletrônica XYZ', venue: 'Club ABC', date: 'Hoje, 22:00', confirmed: 250, status: 'active' },
      { id: 2, name: 'Rock Night', venue: 'Pub Downtown', date: 'Amanhã, 21:00', confirmed: 120, status: 'active' },
      { id: 3, name: 'Jazz Session', venue: 'Blues Café', date: '15 Jun, 19:00', confirmed: 80, status: 'pending' }
    ],
    artists: [
      { id: 1, name: 'DJ Alex Silva', genre: 'Eletrônica', rating: 4.8, eventCount: 24, followers: '5.2k' },
      { id: 2, name: 'Banda Groove', genre: 'Rock', rating: 4.5, eventCount: 18, followers: '3.7k' },
      { id: 3, name: 'Maria Santos', genre: 'MPB', rating: 4.7, eventCount: 15, followers: '4.1k' }
    ],
    venueList: [
      { id: 1, name: 'Club XYZ', location: 'São Paulo', capacity: 500, eventCount: 8 },
      { id: 2, name: 'Blues Bar', location: 'Rio de Janeiro', capacity: 200, eventCount: 5 }
    ],
    performance: {
      occupancy: 85,
      satisfaction: 92,
      financialReturn: 78
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white">
      {/* Sidebar - would be hidden on mobile */}
      <div className="fixed left-0 top-0 bottom-0 w-64 bg-gray-800 border-r border-gray-700 p-4 hidden md:block">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
            <Music className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-bold">LF:Party</h1>
            <p className="text-xs text-gray-400">Hoster Dashboard</p>
          </div>
        </div>
        
        <nav className="space-y-1">
          <a href="#" className="flex items-center gap-3 p-3 bg-cyan-500/20 text-cyan-500 rounded-lg">
            <BarChart2 className="w-5 h-5" />
            <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center gap-3 p-3 text-gray-400 hover:bg-gray-700 rounded-lg">
            <Calendar className="w-5 h-5" />
            <span>Eventos</span>
          </a>
          <a href="#" className="flex items-center gap-3 p-3 text-gray-400 hover:bg-gray-700 rounded-lg">
            <Users className="w-5 h-5" />
            <span>Artistas</span>
          </a>
          <a href="#" className="flex items-center gap-3 p-3 text-gray-400 hover:bg-gray-700 rounded-lg">
            <MapPin className="w-5 h-5" />
            <span>Venues</span>
          </a>
          <a href="#" className="flex items-center gap-3 p-3 text-gray-400 hover:bg-gray-700 rounded-lg">
            <DollarSign className="w-5 h-5" />
            <span>Finanças</span>
          </a>
        </nav>
        
        <div className="absolute bottom-4 left-4 right-4">
          <div className="p-3 bg-gray-700 rounded-lg mb-3">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-semibold">Hoster Pro</span>
            </div>
            <p className="text-xs text-gray-400 mb-2">
              Seu plano expira em 30 dias
            </p>
            <button className="w-full py-1.5 bg-cyan-500 rounded text-xs font-semibold">
              Renovar Plano
            </button>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500"></div>
            <div className="flex-1">
              <p className="text-sm font-semibold">Ana Silva</p>
              <p className="text-xs text-gray-400">Hoster Certificada</p>
            </div>
            <Settings className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="md:ml-64">
        {/* Top Navigation - Mobile */}
        <div className="md:hidden border-b border-gray-800">
          <div className="px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Menu className="w-6 h-6" />
              <h1 className="font-bold">Dashboard</h1>
            </div>
            <div className="flex items-center gap-3">
              <button className="relative">
                <Bell className="w-6 h-6" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-cyan-500 rounded-full"></span>
              </button>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500"></div>
            </div>
          </div>
        </div>
        
        {/* Header */}
        <header className="px-6 py-4 border-b border-gray-800">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <p className="text-gray-400">Bem-vindo de volta, Ana Silva</p>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="bg-gray-800 border border-gray-700 rounded-lg pl-9 pr-3 py-2 w-64"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
              <button className="relative">
                <Bell className="w-6 h-6" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-cyan-500 rounded-full"></span>
              </button>
              <button>
                <Settings className="w-6 h-6" />
              </button>
            </div>
          </div>
        </header>
        
        {/* Dashboard Content */}
        <main className="px-6 py-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="text-sm text-gray-400">Eventos Ativos</p>
                  <h3 className="text-2xl font-bold">{hosterData.activeEvents}</h3>
                </div>
                <Calendar className="w-8 h-8 text-cyan-500" />
              </div>
              <div className="flex items-center text-green-400 text-sm">
                <ChevronUp className="w-4 h-4" />
                <span>+3 esta semana</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="text-sm text-gray-400">Artistas</p>
                  <h3 className="text-2xl font-bold">{hosterData.managedArtists}</h3>
                </div>
                <Music className="w-8 h-8 text-cyan-500" />
              </div>
              <div className="flex items-center text-green-400 text-sm">
                <ChevronUp className="w-4 h-4" />
                <span>+7 este mês</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="text-sm text-gray-400">Venues</p>
                  <h3 className="text-2xl font-bold">{hosterData.venuesCount}</h3>
                </div>
                <MapPin className="w-8 h-8 text-cyan-500" />
              </div>
              <div className="flex items-center text-green-400 text-sm">
                <ChevronUp className="w-4 h-4" />
                <span>+2 este mês</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="text-sm text-gray-400">Público Total</p>
                  <h3 className="text-2xl font-bold">{hosterData.totalAttendance.toLocaleString()}</h3>
                </div>
                <Users className="w-8 h-8 text-cyan-500" />
              </div>
              <div className="flex items-center text-green-400 text-sm">
                <ChevronUp className="w-4 h-4" />
                <span>+15% este mês</span>
              </div>
            </div>
          </div>
          
          {/* Calendar & Performance */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Calendar */}
            <div className="md:col-span-2 bg-gray-800 rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold">Agenda de Eventos</h3>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-gray-700 rounded-lg text-sm flex items-center gap-1">
                    <Filter className="w-4 h-4" />
                    <span>Filtrar</span>
                  </button>
                  <button className="text-cyan-500 text-sm flex items-center">
                    Ver Todos <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="space-y-3">
                {hosterData.upcomingEvents.map((event) => (
                  <div 
                    key={`event-${event.id}`} 
                    className={`flex items-center gap-4 p-3 rounded-lg ${
                      event.status === 'active' ? 'bg-gray-700' : 'bg-gray-700/50'
                    }`}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{event.name}</h4>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          <span>{event.venue}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{event.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-cyan-500 font-semibold">{event.confirmed}</span>
                      <p className="text-sm text-gray-400">confirmados</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-3 py-2 border border-gray-700 rounded-lg text-sm">
                + Adicionar Evento
              </button>
            </div>

            {/* Performance */}
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold">Performance</h3>
                <button>
                  <BarChart2 className="w-5 h-5 text-cyan-500" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Taxa de Ocupação</span>
                    <span className="text-sm text-cyan-500">{hosterData.performance.occupancy}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full">
                    <div 
                      className="h-full bg-cyan-500 rounded-full"
                      style={{ width: `${hosterData.performance.occupancy}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Satisfação</span>
                    <span className="text-sm text-cyan-500">{hosterData.performance.satisfaction}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full">
                    <div 
                      className="h-full bg-cyan-500 rounded-full"
                      style={{ width: `${hosterData.performance.satisfaction}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Retorno Financeiro</span>
                    <span className="text-sm text-cyan-500">{hosterData.performance.financialReturn}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full">
                    <div 
                      className="h-full bg-cyan-500 rounded-full"
                      style={{ width: `${hosterData.performance.financialReturn}%` }}
                    />
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-700">
                  <button className="w-full py-2 bg-cyan-500 rounded-lg text-sm font-semibold">
                    Ver Relatório Completo
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Artists & Venues */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Managed Artists */}
            <div className="md:col-span-2 bg-gray-800 rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold">Artistas Gerenciados</h3>
                <button className="text-cyan-500 text-sm flex items-center">
                  Ver Todos <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-gray-400 text-sm border-b border-gray-700">
                      <th className="pb-2 font-medium">Artista</th>
                      <th className="pb-2 font-medium">Gênero</th>
                      <th className="pb-2 font-medium">Rating</th>
                      <th className="pb-2 font-medium">Eventos</th>
                      <th className="pb-2 font-medium">Seguidores</th>
                      <th className="pb-2 font-medium"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {hosterData.artists.map((artist) => (
                      <tr key={`artist-${artist.id}`} className="border-b border-gray-700">
                        <td className="py-3">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500"></div>
                            <span className="font-semibold">{artist.name}</span>
                          </div>
                        </td>
                        <td className="py-3 text-sm">{artist.genre}</td>
                        <td className="py-3">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400" />
                            <span>{artist.rating}</span>
                          </div>
                        </td>
                        <td className="py-3 text-sm">{artist.eventCount}</td>
                        <td className="py-3 text-sm">{artist.followers}</td>
                        <td className="py-3">
                          <button className="px-3 py-1 bg-cyan-500/20 text-cyan-500 rounded-lg text-sm">
                            Agendar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <button className="w-full mt-3 py-2 flex items-center justify-center gap-2 border border-cyan-500 text-cyan-500 rounded-lg text-sm">
                <Plus className="w-4 h-4" />
                <span>Adicionar Artista</span>
              </button>
            </div>
            
            {/* Venues */}
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold">Venues</h3>
                <button className="text-cyan-500 text-sm flex items-center">
                  Ver Todos <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              
              <div className="space-y-3">
                {hosterData.venueList.map((venue) => (
                  <div key={`venue-${venue.id}`} className="p-3 bg-gray-700 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-cyan-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{venue.name}</h4>
                        <p className="text-xs text-gray-400">{venue.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span>Cap: {venue.capacity}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span>{venue.eventCount} eventos</span>
                      </div>
                    </div>
                  </div>
                ))}
                
                <button className="w-full py-2 border border-gray-700 rounded-lg text-sm flex items-center justify-center gap-1">
                  <Plus className="w-4 h-4" />
                  <span>Adicionar Venue</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HosterDashboard;