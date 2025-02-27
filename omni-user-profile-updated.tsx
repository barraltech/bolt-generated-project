import React, { useState, useEffect } from 'react';
import { User, Music, Headphones, Calendar, Heart, Settings, ChevronLeft, MapPin, Radio, Layers, Users, Info } from 'lucide-react';

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('ondas');
  const [showInfoModal, setShowInfoModal] = useState(false);
  
  // Simular dados do usuário
  const userData = {
    name: 'João Silva',
    location: 'São Paulo, Brasil',
    genres: ['Rock', 'Eletrônica'],
    recentActivities: [
      { type: 'event', name: 'Festival de Verão', date: '2 dias atrás', location: 'Parque Ibirapuera' },
      { type: 'listen', name: 'Set DJ Mark', date: '6 horas atrás', genre: 'House' },
      { type: 'collab', name: 'Remix - Tropical Vibes', date: '1 semana atrás', artists: ['Maria', 'Carlos'] }
    ],
    connectionTypes: {
      physical: 78, // Eventos físicos/presenciais (0-100)
      virtual: 65,  // Interações virtuais (0-100)
      contribution: 42  // Contribuições para a comunidade (0-100)
    }
  };
  
  // Função que gera o padrão de ondas com base nos tipos de conexão
  const generateWavePattern = () => {
    // Configuração das ondas por tipo de conexão
    const waveConfig = [
      { 
        type: 'physical', 
        color: 'rgba(44, 204, 211, 0.8)', // Ciano
        frequency: 0.03, 
        amplitude: userData.connectionTypes.physical,
        phase: 0
      },
      { 
        type: 'virtual', 
        color: 'rgba(138, 43, 226, 0.8)', // Roxo
        frequency: 0.05, 
        amplitude: userData.connectionTypes.virtual,
        phase: 2
      },
      { 
        type: 'contribution', 
        color: 'rgba(255, 215, 0, 0.8)', // Dourado
        frequency: 0.07, 
        amplitude: userData.connectionTypes.contribution,
        phase: 4
      }
    ];
    
    // Cria pontos de onda para cada tipo
    const wavePoints = Array.from({ length: 200 }, (_, i) => {
      const point = { x: i, color: 'transparent', height: 0 };
      
      waveConfig.forEach(wave => {
        // Calcula a influência dessa onda nesse ponto
        const height = Math.sin((i * wave.frequency) + wave.phase) * (wave.amplitude / 100) * 50;
        
        // Adiciona essa contribuição ao ponto
        point.height += height;
        
        // Contribui para a cor com base na amplitude relativa
        if (point.color === 'transparent') {
          point.color = wave.color;
        } else {
          // Mistura as cores ponderadas pela amplitude
          point.color = 'mixed'; // Simplificado - na realidade faria uma mistura de cores
        }
      });
      
      // Normaliza a altura para um valor positivo entre 0-100
      point.height = (point.height + 50);
      
      return point;
    });
    
    return wavePoints;
  };
  
  const wavePoints = generateWavePattern();
  
  // Efeito visual de movimento das ondas
  const [animationOffset, setAnimationOffset] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationOffset(prev => (prev + 1) % 20);
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gray-900 text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <button>
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold">Perfil</h1>
        <button>
          <Settings className="w-6 h-6" />
        </button>
      </div>
      
      {/* Perfil Principal */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 p-0.5">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                <User className="w-10 h-10 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold">{userData.name}</h2>
              <p className="text-gray-400 flex items-center gap-1">
                <MapPin className="w-4 h-4" /> {userData.location}
              </p>
              <div className="flex items-center gap-3 mt-1">
                {userData.genres.map((genre, index) => (
                  <span 
                    key={index} 
                    className={`text-sm px-2 py-0.5 rounded-full ${
                      index % 2 === 0 ? 'bg-purple-500/20 text-purple-500' : 'bg-cyan-500/20 text-cyan-500'
                    }`}
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg">
            Conectar
          </button>
        </div>
        
        {/* Área de Ondas de Conexão */}
        <div className="relative mb-6 bg-gray-800/50 rounded-lg p-4 overflow-hidden">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-bold">Padrão de Conexões</h3>
            <button 
              className="p-1 bg-gray-700 rounded-full"
              onClick={() => setShowInfoModal(true)}
            >
              <Info className="w-4 h-4 text-gray-400" />
            </button>
          </div>
          
          {/* Visualizador de Ondas */}
          <div className="h-32 relative">
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center">
              <div className="w-full h-full flex space-x-0">
                {wavePoints.map((point, i) => {
                  // Aplicar uma animação de onda ao deslocar os pontos
                  const adjustedIndex = (i + animationOffset) % wavePoints.length;
                  const wavePoint = wavePoints[adjustedIndex];
                  
                  // Determinar a cor com base no tipo de conexão dominante naquele ponto
                  let color;
                  if (i % 3 === 0) color = 'rgb(44, 204, 211)'; // Cyan (físico)
                  else if (i % 3 === 1) color = 'rgb(138, 43, 226)'; // Roxo (virtual)
                  else color = 'rgb(255, 215, 0)'; // Dourado (contribuição)
                  
                  return (
                    <div
                      key={i}
                      className="w-1"
                      style={{
                        height: `${wavePoint.height}%`,
                        backgroundColor: color,
                        opacity: 0.3 + (wavePoint.height / 200)
                      }}
                    />
                  );
                })}
              </div>
            </div>
            
            {/* Indicadores do tipo de onda */}
            <div className="absolute bottom-0 left-0 flex items-center gap-4 p-2">
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-cyan-500"></span>
                <span className="text-xs">Física</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                <span className="text-xs">Virtual</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="text-xs">Contribuição</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Detalhes de Conexão */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-800 rounded-lg p-3">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center mb-2">
                <Users className="w-5 h-5 text-cyan-500" />
              </div>
              <p className="text-sm font-semibold">Conexões Reais</p>
              <div className="w-full h-1 bg-gray-700 rounded-full mt-2">
                <div 
                  className="h-full bg-cyan-500 rounded-full" 
                  style={{width: `${userData.connectionTypes.physical}%`}}
                />
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-3">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mb-2">
                <Headphones className="w-5 h-5 text-purple-500" />
              </div>
              <p className="text-sm font-semibold">Conexões Virtuais</p>
              <div className="w-full h-1 bg-gray-700 rounded-full mt-2">
                <div 
                  className="h-full bg-purple-500 rounded-full" 
                  style={{width: `${userData.connectionTypes.virtual}%`}}
                />
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-3">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center mb-2">
                <Music className="w-5 h-5 text-yellow-400" />
              </div>
              <p className="text-sm font-semibold">Contribuições</p>
              <div className="w-full h-1 bg-gray-700 rounded-full mt-2">
                <div 
                  className="h-full bg-yellow-400 rounded-full" 
                  style={{width: `${userData.connectionTypes.contribution}%`}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="border-b border-gray-800">
        <div className="flex">
          <button 
            className={`flex-1 py-3 font-medium text-center ${activeTab === 'ondas' ? 'text-cyan-500 border-b-2 border-cyan-500' : 'text-gray-400'}`}
            onClick={() => setActiveTab('ondas')}
          >
            Conexões
          </button>
          <button 
            className={`flex-1 py-3 font-medium text-center ${activeTab === 'eventos' ? 'text-cyan-500 border-b-2 border-cyan-500' : 'text-gray-400'}`}
            onClick={() => setActiveTab('eventos')}
          >
            Eventos
          </button>
          <button 
            className={`flex-1 py-3 font-medium text-center ${activeTab === 'atividade' ? 'text-cyan-500 border-b-2 border-cyan-500' : 'text-gray-400'}`}
            onClick={() => setActiveTab('atividade')}
          >
            Atividade
          </button>
        </div>
      </div>
      
      {/* Tab Content */}
      <div className="p-4">
        {activeTab === 'ondas' && (
          <div>
            <h3 className="font-bold mb-4">Conexões Recentes</h3>
            <div className="space-y-4">
              {/* Conexões por interações físicas */}
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-sm font-semibold flex items-center gap-2 mb-3">
                  <Users className="w-4 h-4 text-cyan-500" />
                  <span>Interações Físicas</span>
                </h4>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gray-700"></div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-cyan-500 flex items-center justify-center">
                        <Users className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">Festival Eletrônico</p>
                      <p className="text-xs text-gray-400">Interagiu com 24 pessoas</p>
                    </div>
                    <div className="h-8 w-16">
                      {/* Pequena visualização de onda para esta conexão */}
                      <div className="h-full w-full flex items-center space-x-0.5">
                        {[...Array(8)].map((_, i) => (
                          <div 
                            key={i}
                            className="w-0.5 bg-cyan-500"
                            style={{
                              height: `${Math.sin(i * 0.8) * 40 + 50}%`,
                              opacity: 0.3 + Math.sin(i * 0.8) * 0.7
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gray-700"></div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-cyan-500 flex items-center justify-center">
                        <Users className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">Bar do Blues</p>
                      <p className="text-xs text-gray-400">Jam session com 8 músicos</p>
                    </div>
                    <div className="h-8 w-16">
                      <div className="h-full w-full flex items-center space-x-0.5">
                        {[...Array(8)].map((_, i) => (
                          <div 
                            key={i}
                            className="w-0.5 bg-cyan-500"
                            style={{
                              height: `${Math.cos(i * 0.8) * 40 + 50}%`,
                              opacity: 0.3 + Math.cos(i * 0.8) * 0.7
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Conexões por streaming/virtuais */}
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-sm font-semibold flex items-center gap-2 mb-3">
                  <Headphones className="w-4 h-4 text-purple-500" />
                  <span>Conexões Virtuais</span>
                </h4>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gray-700"></div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center">
                        <Headphones className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">Set DJ Mark</p>
                      <p className="text-xs text-gray-400">Ouvido por 1.2k pessoas juntas</p>
                    </div>
                    <div className="h-8 w-16">
                      <div className="h-full w-full flex items-center space-x-0.5">
                        {[...Array(8)].map((_, i) => (
                          <div 
                            key={i}
                            className="w-0.5 bg-purple-500"
                            style={{
                              height: `${Math.sin(i * 0.8) * 40 + 50}%`,
                              opacity: 0.3 + Math.sin(i * 0.8) * 0.7
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Conexões por contribuições */}
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-sm font-semibold flex items-center gap-2 mb-3">
                  <Music className="w-4 h-4 text-yellow-400" />
                  <span>Contribuições</span>
                </h4>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gray-700"></div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center">
                        <Music className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">Remix - Tropical Vibes</p>
                      <p className="text-xs text-gray-400">Collab com Maria, Carlos</p>
                    </div>
                    <div className="h-8 w-16">
                      <div className="h-full w-full flex items-center space-x-0.5">
                        {[...Array(8)].map((_, i) => (
                          <div 
                            key={i}
                            className="w-0.5 bg-yellow-400"
                            style={{
                              height: `${Math.sin(i * 0.8) * 40 + 50}%`,
                              opacity: 0.3 + Math.sin(i * 0.8) * 0.7
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'eventos' && (
          <div>
            <h3 className="font-bold mb-4">Próximos Eventos</h3>
            <div className="space-y-3">
              {[1, 2].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Festa Example {item}</h4>
                    <p className="text-sm text-gray-400">Club XYZ • 15 Jun, 22:00</p>
                  </div>
                  <button className="p-2 rounded-full">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === 'atividade' && (
          <div>
            <h3 className="font-bold mb-4">Atividade Recente</h3>
            <div className="space-y-3">
              {userData.recentActivities.map((activity, index) => (
                <div key={index} className="bg-gray-800 p-3 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-500/30 flex items-center justify-center">
                      {activity.type === 'event' && <Calendar className="w-5 h-5" />}
                      {activity.type === 'listen' && <Headphones className="w-5 h-5" />}
                      {activity.type === 'collab' && <Music className="w-5 h-5" />}
                    </div>
                    <div>
                      <h4 className="font-semibold">{activity.name}</h4>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <span>{activity.date}</span>
                        {activity.location && (
                          <>
                            <span>•</span>
                            <span>{activity.location}</span>
                          </>
                        )}
                        {activity.genre && (
                          <>
                            <span>•</span>
                            <span>{activity.genre}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Modal explicativo */}
      {showInfoModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg p-6 max-w-md">
            <h3 className="text-lg font-bold mb-4">Entendendo Suas Conexões</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-4 h-4 rounded-full bg-cyan-500"></div>
                  <h4 className="font-semibold">Conexões Físicas</h4>
                </div>
                <p className="text-sm text-gray-300 ml-6">
                  Representam sua presença real em eventos, shows, festas e encontros musicais. Crescem quando você participa de eventos e interações presenciais.
                </p>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                  <h4 className="font-semibold">Conexões Virtuais</h4>
                </div>
                <p className="text-sm text-gray-300 ml-6">
                  Representam suas interações online: músicas ouvidas, playlists compartilhadas, e conteúdos curtidos. Crescem com seu engajamento digital.
                </p>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
                  <h4 className="font-semibold">Contribuições</h4>
                </div>
                <p className="text-sm text-gray-300 ml-6">
                  Representam o que você cria e como apoia a comunidade: músicas produzidas, colaborações, apoio a artistas e eventos musicais.
                </p>
              </div>
              
              <p className="text-sm text-gray-300">
                As ondas se combinam para criar seu perfil musical único. Quanto mais diversas suas conexões, mais ricas e coloridas são suas ondas, refletindo seu impacto único no ecossistema musical.
              </p>
            </div>
            
            <button 
              className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg mt-6 font-semibold"
              onClick={() => setShowInfoModal(false)}
            >
              Entendi
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
