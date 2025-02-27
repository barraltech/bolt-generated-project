import React, { useState } from 'react';
import { Music, Mic, Play, User, Settings, Share2, Save, ChevronDown, 
  PlusCircle, Headphones, BarChart2, Volume2, Clock, 
  Repeat, SkipBack, SkipForward, Upload, Download } from 'lucide-react';

const CollabStudio = () => {
  const [volume, setVolume] = useState(70);
  const [bpm, setBpm] = useState(120);
  
  return (
    <div className="w-full h-screen bg-gray-900 text-white flex flex-col">
      {/* Header/Top Bar */}
      <div className="h-16 border-b border-gray-800 px-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Music className="w-6 h-6 text-cyan-500" />
          <div>
            <h1 className="text-xl font-bold">LF:Collab</h1>
            <div className="flex items-center text-xs text-gray-400">
              <span>Projeto: Nova Composição</span>
              <ChevronDown className="w-3 h-3 ml-1" />
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 bg-cyan-500 rounded-lg text-sm font-semibold flex items-center gap-2">
            <Save className="w-4 h-4" />
            <span>Salvar Projeto</span>
          </button>
          <button className="p-2 rounded-lg bg-gray-800">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-lg bg-gray-800">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar - Project Structure */}
        <div className="w-64 border-r border-gray-800 flex flex-col">
          <div className="p-4 border-b border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Faixas</h3>
              <button className="flex items-center text-xs text-cyan-500 gap-1">
                <PlusCircle className="w-4 h-4" />
                <span>Nova Faixa</span>
              </button>
            </div>

            <div className="space-y-2">
              {[
                { name: 'Vocal Principal', type: 'vocal', active: true },
                { name: 'Bateria', type: 'drum' },
                { name: 'Baixo', type: 'bass' },
                { name: 'Guitarra', type: 'guitar' }
              ].map((track) => (
                <div 
                  key={track.name} 
                  className={`p-2 ${track.active ? 'bg-cyan-500/20 border-l-2 border-cyan-500' : 'bg-gray-800'} rounded flex items-center justify-between`}
                >
                  <span className="text-sm">{track.name}</span>
                  <div className="flex items-center space-x-1">
                    <button className="p-1 rounded hover:bg-gray-700">
                      <Mic className="w-3 h-3" />
                    </button>
                    <button className="p-1 rounded hover:bg-gray-700">
                      <Headphones className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-4 flex-1">
            <h3 className="font-semibold mb-3">Colaboradores</h3>
            <div className="space-y-2">
              {[
                { name: 'João Silva (Você)', role: 'Produtor' },
                { name: 'Ana Oliveira', role: 'Vocalista' }
              ].map((collab) => (
                <div key={collab.name} className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm">{collab.name}</p>
                    <p className="text-xs text-gray-400">{collab.role}</p>
                  </div>
                </div>
              ))}
              <button className="flex items-center text-xs text-cyan-500 gap-1 mt-2">
                <PlusCircle className="w-4 h-4" />
                <span>Convidar Colaborador</span>
              </button>
            </div>
          </div>
          
          <div className="p-4 border-t border-gray-800">
            <button className="w-full py-2 text-sm bg-gray-800 rounded flex items-center justify-center gap-2">
              <Upload className="w-4 h-4" />
              <span>Importar Samples</span>
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Timeline */}
          <div className="flex-1 p-4 overflow-auto">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <select className="bg-gray-800 border border-gray-700 rounded px-2 py-1 text-sm">
                  <option>Todos</option>
                  <option>Vocais</option>
                  <option>Instrumentos</option>
                </select>
                <span className="text-sm text-gray-400">00:02:34</span>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-1 bg-gray-800 rounded">
                  <BarChart2 className="w-4 h-4" />
                </button>
                <select className="bg-gray-800 border border-gray-700 rounded px-2 py-1 text-sm">
                  <option>100%</option>
                  <option>75%</option>
                  <option>50%</option>
                </select>
              </div>
            </div>
            
            {/* Time Markers */}
            <div className="h-8 border-b border-gray-800 flex">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="flex-1 border-r border-gray-800 flex items-center justify-center">
                  <span className="text-xs text-gray-400">{i + 1}:00</span>
                </div>
              ))}
            </div>
            
            {/* Tracks */}
            {['Vocal Principal', 'Bateria', 'Baixo', 'Guitarra'].map((track) => (
              <div key={track} className="h-20 border-b border-gray-800 flex items-center relative group">
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gray-800 border-r border-gray-700 flex items-center justify-center">
                  <span className="text-xs">{track}</span>
                </div>
                <div className="absolute left-16 right-0 top-0 bottom-0">
                  {/* Track Content - For vocal track, show wave visualization */}
                  {track === 'Vocal Principal' && (
                    <div className="mx-4 my-2 h-16 bg-cyan-500/10 rounded">
                      <div className="h-full flex items-center justify-center space-x-0.5">
                        {[...Array(50)].map((_, i) => (
                          <div
                            key={i}
                            className="w-0.5 bg-cyan-500"
                            style={{
                              height: `${Math.sin(i * 0.2) * 80 + 10}%`,
                              opacity: 0.3 + Math.sin(i * 0.2) * 0.2
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* For other tracks, show basic blocks */}
                  {track !== 'Vocal Principal' && (
                    <div className="mx-4 my-2 h-16 flex items-center">
                      {[...Array(Math.floor(Math.random() * 3 + 1))].map((_, i) => (
                        <div 
                          key={i} 
                          className="h-12 bg-purple-500/30 rounded mx-2" 
                          style={{
                            width: `${Math.random() * 100 + 100}px`,
                            marginLeft: `${Math.random() * 100 + 50}px`
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Controls */}
          <div className="h-20 border-t border-gray-800 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Repeat className="w-5 h-5 text-gray-400" />
                <SkipBack className="w-5 h-5" />
                <button className="p-3 bg-cyan-500 rounded-full">
                  <Play className="w-5 h-5" fill="white" />
                </button>
                <SkipForward className="w-5 h-5" />
                <Music className="w-5 h-5 text-gray-400" />
              </div>
              
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-gray-400" />
                <div className="flex items-center space-x-2">
                  <span className="text-sm">BPM:</span>
                  <input
                    type="number"
                    className="w-16 bg-gray-800 border border-gray-700 rounded px-2 py-1 text-sm"
                    value={bpm}
                    onChange={(e) => setBpm(parseInt(e.target.value))}
                  />
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Volume2 className="w-5 h-5 text-gray-400" />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={(e) => setVolume(parseInt(e.target.value))}
                  className="w-24"
                />
              </div>
              
              <button className="p-2 bg-gray-800 rounded">
                <Download className="w-5 h-5" />
              </button>
              
              <div className="flex items-center space-x-1">
                <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center">
                  <User className="w-4 h-4" />
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollabStudio;
