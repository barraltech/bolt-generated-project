import React, { useState } from 'react';
import { 
  Layers, Users, BarChart2, Globe, LucideBriefcase, Code, 
  Settings, Database, Shield, Eye, Server, Radio, Palette,
  Music, Handshake, Calendar, GraduationCap, PieChart,
  ChevronRight, ChevronDown, Info, PlusCircle
} from 'lucide-react';

const FrameworkVisualization = () => {
  const [expandedLayer, setExpandedLayer] = useState('experience');
  const [expandedComponent, setExpandedComponent] = useState(null);
  
  const toggleLayer = (layer) => {
    if (expandedLayer === layer) {
      setExpandedLayer(null);
    } else {
      setExpandedLayer(layer);
    }
    setExpandedComponent(null);
  };
  
  const toggleComponent = (component) => {
    if (expandedComponent === component) {
      setExpandedComponent(null);
    } else {
      setExpandedComponent(component);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white p-6">
      <header className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Framework LF.Tech</h1>
        <p className="text-gray-400">Visualização completa da arquitetura e interconexões</p>
      </header>
      
      {/* Framework Overview */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Visão Geral</h2>
          <button className="flex items-center gap-1 text-cyan-500 text-sm">
            <Info className="w-4 h-4" />
            <span>Sobre o Framework</span>
          </button>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-bold mb-2">Community Experience</h3>
              <p className="text-sm text-gray-300">
                Experiência da comunidade como um todo, analisando como cada pessoa se sente em relação à sociedade e ao processo em que está envolvida.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-cyan-500 flex items-center justify-center mb-4">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="font-bold mb-2">Social Experience</h3>
              <p className="text-sm text-gray-300">
                Analisa como a jornada de prestação de serviço impacta a sociedade e quais indicadores são afetados pela solução.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                <Handshake className="w-8 h-8" />
              </div>
              <h3 className="font-bold mb-2">Collab Experience</h3>
              <p className="text-sm text-gray-300">
                Evolução da employee experience, analisando como o colaborador se sente perante a sociedade durante a prestação do serviço.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Architecture Layers */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Camadas da Arquitetura</h2>
        
        {/* Experience Hub */}
        <div className="mb-3">
          <div 
            className={`bg-gray-800 rounded-lg p-4 cursor-pointer transition-colors ${expandedLayer === 'experience' ? 'border-l-4 border-cyan-500' : ''}`}
            onClick={() => toggleLayer('experience')}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold">Experience Hub</h3>
                  <p className="text-sm text-gray-400">Orquestra todas as experiências e jornadas</p>
                </div>
              </div>
              {expandedLayer === 'experience' ? (
                <ChevronDown className="w-5 h-5" />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )}
            </div>
          </div>
          
          {/* Sub components */}
          {expandedLayer === 'experience' && (
            <div className="ml-8 mt-3 space-y-3">
              <div 
                className={`bg-gray-700 rounded-lg p-3 cursor-pointer transition-colors ${expandedComponent === 'journeys' ? 'border-l-2 border-cyan-500' : ''}`}
                onClick={() => toggleComponent('journeys')}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500/40 to-purple-500/40 flex items-center justify-center">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <span>Experience Journeys</span>
                  </div>
                  {expandedComponent === 'journeys' ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </div>
                
                {expandedComponent === 'journeys' && (
                  <div className="mt-3 pl-10 space-y-2">
                    <div className="flex items-center gap-2 p-2 bg-gray-800/50 rounded">
                      <Music className="w-4 h-4 text-cyan-500" />
                      <span className="text-sm">LF:Music</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-gray-800/50 rounded">
                      <Handshake className="w-4 h-4 text-green-500" />
                      <span className="text-sm">LF:Collab</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-gray-800/50 rounded">
                      <Calendar className="w-4 h-4 text-purple-500" />
                      <span className="text-sm">LF:Party</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-gray-800/50 rounded opacity-60">
                      <GraduationCap className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm">LF:Learn</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-gray-800/50 rounded opacity-60">
                      <Shield className="w-4 h-4 text-blue-500" />
                      <span className="text-sm">LF:Rights</span>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="bg-gray-700 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500/40 to-purple-500/40 flex items-center justify-center">
                    <Users className="w-4 h-4" />
                  </div>
                  <span>Community Experience</span>
                </div>
              </div>
              
              <div className="bg-gray-700 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500/40 to-purple-500/40 flex items-center justify-center">
                    <Globe className="w-4 h-4" />
                  </div>
                  <span>Social Experience</span>
                </div>
              </div>
              
              <div className="bg-gray-700 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500/40 to-purple-500/40 flex items-center justify-center">
                    <Handshake className="w-4 h-4" />
                  </div>
                  <span>Collab Experience</span>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Service Hub */}
        <div className="mb-3">
          <div 
            className={`bg-gray-800 rounded-lg p-4 cursor-pointer transition-colors ${expandedLayer === 'service' ? 'border-l-4 border-green-500' : ''}`}
            onClick={() => toggleLayer('service')}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-cyan-500 flex items-center justify-center">
                  <LucideBriefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold">Service Hub</h3>
                  <p className="text-sm text-gray-400">Gestão e distribuição de serviços</p>
                </div>
              </div>
              {expandedLayer === 'service' ? (
                <ChevronDown className="w-5 h-5" />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )}
            </div>
          </div>
          
          {/* Sub components */}
          {expandedLayer === 'service' && (
            <div className="ml-8 mt-3 space-y-3">
              <div className="bg-gray-700 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500/40 to-cyan-500/40 flex items-center justify-center">
                    <Settings className="w-4 h-4" />
                  </div>
                  <span>Service Management</span>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Data Hub */}
        <div className="mb-3">
          <div 
            className={`bg-gray-800 rounded-lg p-4 cursor-pointer transition-colors ${expandedLayer === 'data' ? 'border-l-4 border-purple-500' : ''}`}
            onClick={() => toggleLayer('data')}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold">Data Hub</h3>
                  <p className="text-sm text-gray-400">Coleta e processamento de dados</p>
                </div>
              </div>
              {expandedLayer === 'data' ? (
                <ChevronDown className="w-5 h-5" />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )}
            </div>
          </div>
          
          {/* Sub components */}
          {expandedLayer === 'data' && (
            <div className="ml-8 mt-3 space-y-3">
              <div className="bg-gray-700 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500/40 to-pink-500/40 flex items-center justify-center">
                    <Server className="w-4 h-4" />
                  </div>
                  <span>Data Transformation</span>
                </div>
              </div>
              
              <div className="bg-gray-700 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500/40 to-pink-500/40 flex items-center justify-center">
                    <BarChart2 className="w-4 h-4" />
                  </div>
                  <span>Experience Data</span>
                </div>
              </div>
              
              <div className="bg-gray-700 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500/40 to-pink-500/40 flex items-center justify-center">
                    <PieChart className="w-4 h-4" />
                  </div>
                  <span>FinOps Data</span>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* AI Hub */}
        <div className="mb-3">
          <div 
            className={`bg-gray-800 rounded-lg p-4 cursor-pointer transition-colors ${expandedLayer === 'ai' ? 'border-l-4 border-yellow-500' : ''}`}
            onClick={() => toggleLayer('ai')}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500 to-red-500 flex items-center justify-center">
                  <Radio className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold">IA Hub</h3>
                  <p className="text-sm text-gray-400">Serviços de IA para o framework</p>
                </div>
              </div>
              {expandedLayer === 'ai' ? (
                <ChevronDown className="w-5 h-5" />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )}
            </div>
          </div>
          
          {/* Sub components */}
          {expandedLayer === 'ai' && (
            <div className="ml-8 mt-3 space-y-3">
              <div className="bg-gray-700 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-500/40 to-red-500/40 flex items-center justify-center">
                    <Code className="w-4 h-4" />
                  </div>
                  <span>IA Management</span>
                </div>
              </div>
              
              <div className="bg-gray-700 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-500/40 to-red-500/40 flex items-center justify-center">
                    <Eye className="w-4 h-4" />
                  </div>
                  <span>IA White Label</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Platform Integration */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Plataformas e Integrações</h2>
          <button className="flex items-center gap-1 px-3 py-1 bg-gray-800 rounded-lg text-sm">
            <PlusCircle className="w-4 h-4" />
            <span>Adicionar Plataforma</span>
          </button>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* ARTECH Hub */}
            <div className="col-span-1 md:col-span-3 lg:col-span-5 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 p-4 rounded-lg mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                  <Palette className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold">ARTECH</h3>
                  <p className="text-sm text-gray-300">Hub de Inovação - Arte e revolução através da tecnologia</p>
                </div>
              </div>
            </div>
            
            {/* Platforms */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-4">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center mb-3">
                  <Music className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-1">LF:Music</h4>
                <p className="text-sm text-gray-400 text-center">Player e rede social musical</p>
                <span className="mt-2 bg-green-500/20 text-green-500 text-xs px-2 py-0.5 rounded-full">
                  Lançado
                </span>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-lg p-4">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-cyan-500 flex items-center justify-center mb-3">
                  <Handshake className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-1">LF:Collab</h4>
                <p className="text-sm text-gray-400 text-center">Plataforma de colaboração musical</p>
                <span className="mt-2 bg-green-500/20 text-green-500 text-xs px-2 py-0.5 rounded-full">
                  Lançado
                </span>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-4">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-3">
                  <Calendar className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-1">LF:Party</h4>
                <p className="text-sm text-gray-400 text-center">Plataforma de eventos musicais</p>
                <span className="mt-2 bg-cyan-500/20 text-cyan-500 text-xs px-2 py-0.5 rounded-full">
                  Beta
                </span>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-500/10 to-red-500/10 rounded-lg p-4 opacity-70">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500 to-red-500 flex items-center justify-center mb-3">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-1">LF:Learn</h4>
                <p className="text-sm text-gray-400 text-center">Plataforma de aprendizado musical</p>
                <span className="mt-2 bg-gray-500/20 text-gray-400 text-xs px-2 py-0.5 rounded-full">
                  Desenvolvimento
                </span>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-lg p-4 opacity-70">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mb-3">
                  <Shield className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-1">LF:Rights</h4>
                <p className="text-sm text-gray-400 text-center">Gestão de direitos autorais</p>
                <span className="mt-2 bg-yellow-500/20 text-yellow-500 text-xs px-2 py-0.5 rounded-full">
                  Alfa
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameworkVisualization;