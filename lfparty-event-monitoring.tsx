import React, { useState } from 'react';
import { 
  Users, DollarSign, Clock, AlertCircle, ChevronUp, Play, Music, Activity,
  MessageSquare, Bell, Settings, BarChart2, ChevronDown, Eye, Radio,
  Menu, ArrowRight, ThumbsUp, User, MapPin, HelpCircle, Volume2
} from 'lucide-react';

const LiveEventMonitoring = () => {
  const [selectedTab, setSelectedTab] = useState('overview');
  
  // Dados simulados do evento
  const eventData = {
    name: 'Noite Eletrônica XYZ',
    venue: 'Club ABC',
    status: 'live',
    currentTime: '1h 24min',
    totalTime: '4h',
    currentOccupation: 342,
    maxCapacity: 500,
    occupationRate: 68, // percentage
    hourlyChange: 28,
    revenue: 17200,
    revenueHourlyChange: 1400,
    status: 'good', // 'good', 'warning', or 'critical'
    activeAlerts: [
      { id: 1, type: 'warning', message: 'Bar 2 próximo da capacidade', time: '5 minutos atrás' },
      { id: 2, type: 'info', message: 'Troca de DJ em 15 minutos', time: '10 minutos atrás' }
    ],
    currentArtist: {
      name: 'DJ Alex Silva',
      startTime: '22:00',
      endTime: '00:00',
      genre: 'Tech House',
      bpm: 128
    },
    staff: [
      { area: 'Segurança', present: 8, total: 8, status: 'good' },
      { area: 'Bar', present: 6, total: 6, status: 'good' },
      { area: 'Som', present: 3, total: 3, status: 'good' },
      { area: 'Limpeza', present: 4, total: 4, status: 'good' }
    ],
    areas: [
      { name: 'Entrada', status: 'good', flow: 70 },
      { name: 'Bar Principal', status: 'warning', flow: 90 },
      { name: 'Bar 2', status: 'good', flow: 65 },
      { name: 'Pista', status: 'good', flow: 75 },
      { name: 'Área VIP', status: 'good', flow: 50 }
    ]
  };

  // Função simulada para gerar valores de onda para visualização
  const generateWavePoints = () => {
    return Array.from({ length: 80 }, (_, i) => ({
      height: Math.sin(i * 0.2) * 80 + 20,
      opacity: 0.5 + Math.sin(i * 0.2) * 0.5
    }));
  };
  
  const wavePoints = generateWavePoints();
  
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white">
      {/* Top Header */}
      <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Menu className="w-6 h-6 md:hidden" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <h1 className="text-lg font-bold">Noite Eletrônica XYZ</h1>
              </div>
              <p className="text-sm text-gray-400 hidden md:block">Club ABC • Ao vivo</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1 bg-gray-700 rounded-lg">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-sm">{eventData.currentTime}</span>
              </div>
              <button className="relative">
                <Bell className="w-6 h-6" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-cyan-500 rounded-full" />
              </button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500" />
                <Settings className="w-5 h-5 hidden md:block" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Tab Navigation */}
      <div className="md:hidden bg-gray-800 border-b border-gray-700 sticky top-12 z-10">
        <div className="flex overflow-x-auto">
          <button 
            className={`px-4 py-2 text-sm font-medium ${selectedTab === 'overview' ? 'text-cyan-500 border-b-2 border-cyan-500' : 'text-gray-400'}`}
            onClick={() => setSelectedTab('overview')}
          >
            Visão Geral
          </button>
          <button 
            className={`px-4 py-2 text-sm font-medium ${selectedTab === 'staff' ? 'text-cyan-500 border-b-2 border-cyan-500' : 'text-gray-400'}`}
            onClick={() => setSelectedTab('staff')}
          >
            Staff
          </button>
          <button 
            className={`px-4 py-2 text-sm font-medium ${selectedTab === 'areas' ? 'text-cyan-500 border-b-2 border-cyan-500' : 'text-gray-400'}`}
            onClick={() => setSelectedTab('areas')}
          >
            Áreas
          </button>
          <button 
            className={`px-4 py-2 text-sm font-medium ${selectedTab === 'analytics' ? 'text-cyan-500 border-b-2 border-cyan-500' : 'text-gray-400'}`}
            onClick={() => setSelectedTab('analytics')}
          >
            Analytics
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Live Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-sm text-gray-400">Ocupação</p>
                <h3 className="text-2xl font-bold">{eventData.currentOccupation}/{eventData.maxCapacity}</h3>
              </div>
              <Users className="w-8 h-8 text-cyan-500" />
            </div>
            <div className="flex items-center text-green-400 text-sm">
              <ChevronUp className="w-4 h-4" />
              <span>+{eventData.hourlyChange} última hora</span>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-sm text-gray-400">Receita Total</p>
                <h3 className="text-2xl font-bold">R$ {eventData.revenue.toLocaleString()}</h3>
              </div>
              <DollarSign className="w-8 h-8 text-cyan-500" />
            </div>
            <div className="flex items-center text-green-400 text-sm">
              <ChevronUp className="w-4 h-4" />
              <span>+R$ {eventData.revenueHourlyChange.toLocaleString()} última hora</span>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-sm text-gray-400">Tempo Decorrido</p>
                <h3 className="text-2xl font-bold">{eventData.currentTime}</h3>
              </div>
              <Clock className="w-8 h-8 text-cyan-500" />
            </div>
            <div className="text-gray-400 text-sm">
              Previsão: {eventData.totalTime} total
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-sm text-gray-400">Status Geral</p>
                <h3 className="text-2xl font-bold">
                  {eventData.status === 'good' ? 'Ótimo' : 
                   eventData.status === 'warning' ? 'Atenção' : 'Crítico'}
                </h3>
              </div>
              <Activity className="w-8 h-8 text-cyan-500" />
            </div>
            <div className="text-green-400 text-sm">
              {eventData.activeAlerts.length === 0 ? 
                'Sem incidentes' : 
                `${eventData.activeAlerts.length} alertas ativos`}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Monitoring Area */}
          <div className="md:col-span-2 space-y-6">
            {/* Current Set */}
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Set Atual
                </h3>
                <div className="flex items-center gap-2">
                  <Music className="w-5 h-5 text-cyan-500" />
                  <span>{eventData.currentArtist.name}</span>
                </div>
              </div>

              <div className="h-32 bg-gray-700/50 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                <div className="w-full h-24 flex items-center justify-center space-x-0.5">
                  {wavePoints.map((point, i) => (
                    <div
                      key={i}
                      className="w-1 bg-cyan-500"
                      style={{
                        height: `${point.height}%`,
                        opacity: point.opacity,
                        animation: `pulse ${1 + Math.sin(i * 0.1)}s infinite`
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center text-sm">
                <span>{eventData.currentArtist.genre} • {eventData.currentArtist.bpm} BPM</span>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span>{eventData.currentArtist.startTime}-{eventData.currentArtist.endTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Volume2 className="w-4 h-4 text-gray-400" />
                    <div className="w-16 h-1 bg-gray-700 rounded-full">
                      <div className="h-full w-2/3 bg-cyan-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Attendance Flow / Areas */}
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold">Fluxo de Ocupação</h3>
                <div className="flex items-center gap-2">
                  <select className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-1 text-sm">
                    <option>Última hora</option>
                    <option>Últimas 3 horas</option>
                  </select>
                  <BarChart2 className="w-5 h-5 text-cyan-500" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-3 bg-gray-700/50 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">Entrada</span>
                    <span className="text-green-400">+156</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full">
                    <div className="h-full w-[70%] bg-green-400 rounded-full" />
                  </div>
                </div>

                <div className="p-3 bg-gray-700/50 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">Saída</span>
                    <span className="text-yellow-400">-28</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full">
                    <div className="h-full w-[20%] bg-yellow-400 rounded-full" />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold">Áreas</h4>
                {eventData.areas.map((area, index) => (
                  <div key={index} className="p-3 bg-gray-700/50 rounded-lg">
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${
                          area.status === 'good' ? 'bg-green-500' : 
                          area.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                        }`} />
                        <span className="text-sm">{area.name}</span>
                      </div>
                      <span className="text-sm">{area.flow}% ocupação</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div 
                        className={`h-full rounded-full ${
                          area.flow < 70 ? 'bg-green-500' : 
                          area.flow < 85 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${area.flow}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Side Panel */}
          <div className="space-y-6">
            {/* Alerts */}
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold">Alertas</h3>
                <span className="text-sm text-gray-400">{eventData.activeAlerts.length} ativos</span>
              </div>

              <div className="space-y-3">
                {eventData.activeAlerts.map((alert) => (
                  <div 
                    key={alert.id} 
                    className={`p-3 rounded-lg ${
                      alert.type === 'warning' 
                        ? 'bg-yellow-500/10 border border-yellow-500/20' 
                        : 'bg-gray-700/50'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {alert.type === 'warning' ? (
                        <AlertCircle className="w-5 h-5 text-yellow-500" />
                      ) : (
                        <MessageSquare className="w-5 h-5 text-gray-400" />
                      )}
                      <div>
                        <p className="text-sm font-semibold">{alert.message}</p>
                        <p className="text-xs text-gray-400">{alert.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
                
                <button className="w-full py-2 bg-gray-700 rounded-lg text-sm">
                  Ver Todos os Alertas
                </button>
              </div>
            </div>

            {/* Staff Check-in */}
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold">Staff</h3>
                <button className="text-sm text-cyan-500">Detalhes</button>
              </div>
              
              <div className="space-y-2">
                {eventData.staff.map((area, index) => (
                  <div key={index} className="flex justify-between items-center p-2 bg-gray-700/50 rounded-lg">
                    <span className="text-sm">{area.area}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-green-400">{area.present}/{area.total}</span>
                      <span className={`w-2 h-2 rounded-full ${
                        area.status === 'good' ? 'bg-green-500' : 
                        area.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                      }`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="font-bold mb-4">Ações Rápidas</h3>
              
              <div className="grid grid-cols-2 gap-2 mb-4">
                <button className="p-3 bg-gray-700 rounded-lg text-sm flex flex-col items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <span>Emergência</span>
                </button>
                <button className="p-3 bg-gray-700 rounded-lg text-sm flex flex-col items-center gap-2">
                  <User className="w-5 h-5 text-cyan-500" />
                  <span>Segurança</span>
                </button>
                <button className="p-3 bg-gray-700 rounded-lg text-sm flex flex-col items-center gap-2">
                  <Radio className="w-5 h-5 text-cyan-500" />
                  <span>Áudio</span>
                </button>
                <button className="p-3 bg-gray-700 rounded-lg text-sm flex flex-col items-center gap-2">
                  <MapPin className="w-5 h-5 text-cyan-500" />
                  <span>Mapa</span>
                </button>
              </div>
              
              <button className="w-full py-2 bg-red-500 rounded-lg text-sm font-semibold flex items-center justify-center gap-2">
                <HelpCircle className="w-4 h-4" />
                <span>Solicitar Assistência</span>
              </button>
            </div>
            
            {/* Event Controls */}
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="font-bold mb-4">Controles do Evento</h3>
              
              <div className="space-y-3">
                <div className="p-3 bg-gray-700 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="w-5 h-5 text-cyan-500" />
                    <span>Feedback em tempo real</span>
                  </div>
                  <span className="text-sm bg-green-500/20 text-green-500 px-2 py-0.5 rounded">94%</span>
                </div>
                
                <button className="w-full py-2 bg-cyan-500 rounded-lg flex items-center justify-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>Visualizar Dashboard</span>
                </button>
                
                <button className="w-full py-2 border border-gray-700 rounded-lg text-sm flex items-center justify-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  <span>Check-out</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LiveEventMonitoring;