import React, { useState } from 'react';
import { 
  ChevronDown, 
  LayoutDashboard, 
  Rocket, 
  Users, 
  Calendar, 
  MessageSquare, 
  FileText, 
  Settings, 
  PlusCircle, 
  Search, 
  Menu, 
  HelpCircle, 
  Bell, 
  User, 
  Bot, 
  Lightbulb, 
  CheckSquare, 
  Clock, 
  ChevronRight,
  X,
  Zap,
  ArrowRight,
  Edit3
} from 'lucide-react';

const GenAIWorkspace = () => {
  const [activeTool, setActiveTool] = useState('productPlanning');
  const [showAgentPanel, setShowAgentPanel] = useState(true);
  const [currentAgent, setCurrentAgent] = useState('productManager');
  const [conversationHistory, setConversationHistory] = useState([
    {
      sender: 'ai',
      agentType: 'productManager',
      content: 'Olá, sou seu agente de Product Management. Como posso ajudar com seu planejamento hoje?',
      timestamp: 'Agora mesmo'
    }
  ]);
  
  const agents = {
    productManager: {
      name: 'Alex PM',
      role: 'Product Manager',
      icon: <Bot className="text-cyan-500" />,
      skills: ['Roadmaps', 'Priorização', 'User Stories', 'OKRs'],
      color: 'cyan'
    },
    designThinking: {
      name: 'Diana DT',
      role: 'Design Thinking',
      icon: <Lightbulb className="text-purple-500" />,
      skills: ['Empatia', 'Ideação', 'Prototipação', 'Testes'],
      color: 'purple'
    },
    businessAnalyst: {
      name: 'Bruno BA',
      role: 'Business Analyst',
      icon: <FileText className="text-green-500" />,
      skills: ['Análise de Mercado', 'Business Model Canvas', 'Viabilidade'],
      color: 'green'
    },
    scrumMaster: {
      name: 'Sônia SM',
      role: 'Scrum Master',
      icon: <CheckSquare className="text-amber-500" />,
      skills: ['Facilitação', 'Retrospectivas', 'Gestão de Impedimentos'],
      color: 'amber'
    }
  };
  
  const sendMessage = (message) => {
    // Adiciona mensagem do usuário
    setConversationHistory([
      ...conversationHistory,
      {
        sender: 'user',
        content: message,
        timestamp: 'Agora mesmo'
      }
    ]);
    
    // Simula resposta do agente
    setTimeout(() => {
      let response;
      
      if (currentAgent === 'productManager') {
        if (message.toLowerCase().includes('okr')) {
          response = 'Posso te ajudar a estruturar seus OKRs. Vamos começar definindo o Objetivo principal e depois os Key Results mensuráveis. Que área do produto você quer focar?';
        } else {
          response = 'Baseado no seu contexto, recomendo focarmos em definir melhor o problema que estamos resolvendo antes de avançar para soluções. Podemos criar um Problem Statement canvas?';
        }
      } else if (currentAgent === 'designThinking') {
        response = 'Para essa fase do projeto, sugiro realizarmos um exercício de mapa de empatia com os usuários principais. Vou te guiar no processo. Primeiro, vamos identificar quem são as personas chave.';
      } else {
        response = 'Compreendi sua necessidade. Vamos trabalhar juntos nisso. Posso ajudar a estruturar essas informações de forma mais efetiva para seu time.';
      }
      
      setConversationHistory(prev => [
        ...prev,
        {
          sender: 'ai',
          agentType: currentAgent,
          content: response,
          timestamp: 'Agora mesmo'
        }
      ]);
    }, 1000);
  };
  
  return (
    <div className="flex h-screen bg-gray-900 text-white overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 border-r border-gray-800 flex flex-col">
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center space-x-2">
            <Rocket className="w-6 h-6 text-cyan-500" />
            <span className="font-bold text-lg">GenAI Studio</span>
          </div>
          <p className="text-xs text-gray-400 mt-1">Plataforma de Colaboração com IA</p>
        </div>
        
        <div className="flex-1 overflow-auto p-4">
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Projetos</h3>
            <button className="w-full flex items-center justify-between p-2 bg-cyan-500/20 text-cyan-500 rounded mb-1">
              <div className="flex items-center">
                <Rocket className="w-4 h-4 mr-2" />
                <span>E-commerce App</span>
              </div>
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="w-full flex items-center p-2 text-gray-400 hover:bg-gray-800 rounded">
              <PlusCircle className="w-4 h-4 mr-2" />
              <span>Novo Projeto</span>
            </button>
          </div>
          
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Ferramentas</h3>
            <nav className="space-y-1">
              <button 
                className={`w-full flex items-center p-2 rounded ${
                  activeTool === 'dashboard' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800'
                }`}
                onClick={() => setActiveTool('dashboard')}
              >
                <LayoutDashboard className="w-4 h-4 mr-2" />
                <span>Dashboard</span>
              </button>
              
              <button 
                className={`w-full flex items-center p-2 rounded ${
                  activeTool === 'productPlanning' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800'
                }`}
                onClick={() => setActiveTool('productPlanning')}
              >
                <Rocket className="w-4 h-4 mr-2" />
                <span>Planejamento</span>
              </button>
              
              <button 
                className={`w-full flex items-center p-2 rounded ${
                  activeTool === 'teamManagement' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800'
                }`}
                onClick={() => setActiveTool('teamManagement')}
              >
                <Users className="w-4 h-4 mr-2" />
                <span>Equipes</span>
              </button>
              
              <button 
                className={`w-full flex items-center p-2 rounded ${
                  activeTool === 'calendar' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800'
                }`}
                onClick={() => setActiveTool('calendar')}
              >
                <Calendar className="w-4 h-4 mr-2" />
                <span>Calendário</span>
              </button>
              
              <button 
                className={`w-full flex items-center p-2 rounded ${
                  activeTool === 'documents' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800'
                }`}
                onClick={() => setActiveTool('documents')}
              >
                <FileText className="w-4 h-4 mr-2" />
                <span>Documentos</span>
              </button>
            </nav>
          </div>
        </div>
        
        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                <User className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm">Renata Silva</div>
                <div className="text-xs text-gray-400">Product Owner</div>
              </div>
            </div>
            <Settings className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-14 border-b border-gray-800 flex items-center justify-between px-4">
          <div className="flex items-center">
            <Menu className="w-6 h-6 text-gray-400 mr-4 lg:hidden" />
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Buscar..."
                className="bg-gray-800 text-white rounded-md py-1.5 pl-9 pr-4 focus:outline-none focus:ring-1 focus:ring-gray-700 w-64"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-1 rounded hover:bg-gray-800">
              <HelpCircle className="w-5 h-5 text-gray-400" />
            </button>
            <button className="p-1 rounded hover:bg-gray-800 relative">
              <Bell className="w-5 h-5 text-gray-400" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-cyan-500 rounded-full"></span>
            </button>
          </div>
        </header>
        
        <div className="flex-1 flex overflow-hidden">
          {/* Workspace */}
          <div className="flex-1 p-4 overflow-auto">
            <div className="mb-4">
              <h1 className="text-xl font-bold">E-commerce App • Planejamento</h1>
              <p className="text-gray-400">Use seus agentes IA para avançar no projeto</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              {/* Main Panel */}
              <div className="lg:col-span-8">
                <div className="bg-gray-800 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-medium">Product Canvas</h2>
                    <div className="flex items-center space-x-2">
                      <button className="p-1 rounded hover:bg-gray-700">
                        <Edit3 className="w-4 h-4 text-gray-400" />
                      </button>
                      <span className="text-xs text-gray-400">Última atualização: há 2 horas</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-700/40 p-3 rounded">
                      <h3 className="text-sm font-medium mb-2">Problema</h3>
                      <p className="text-sm text-gray-300">
                        Usuários enfrentam dificuldades em encontrar produtos específicos em lojas online, levando a altas taxas de abandono.
                      </p>
                    </div>
                    
                    <div className="bg-gray-700/40 p-3 rounded">
                      <h3 className="text-sm font-medium mb-2">Solução Proposta</h3>
                      <p className="text-sm text-gray-300">
                        Sistema de busca inteligente com ML para compreender a intenção de compra e simplificar a jornada.
                      </p>
                    </div>
                    
                    <div className="bg-gray-700/40 p-3 rounded">
                      <h3 className="text-sm font-medium mb-2">Métricas Chave</h3>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Taxa de conversão (+15%)</li>
                        <li>• Tempo médio até compra (-20%)</li>
                        <li>• NPS (+10 pontos)</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-700/40 p-3 rounded">
                      <h3 className="text-sm font-medium mb-2">Próximos Passos</h3>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Validação com usuários</li>
                        <li>• MVP da busca inteligente</li>
                        <li>• Teste A/B inicial</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-medium">Roadmap do Produto</h2>
                    <button className="text-xs text-cyan-500">Ver completo</button>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-24 text-xs font-medium text-gray-400">Q2 2024</div>
                      <div className="flex-1">
                        <div className="flex space-x-3">
                          <div className="w-1/3 bg-cyan-500/20 border border-cyan-500/40 rounded p-2">
                            <div className="text-xs text-cyan-500 font-medium mb-1">Busca Inteligente</div>
                            <div className="h-1 w-full bg-gray-700 rounded">
                              <div className="h-full bg-cyan-500 rounded" style={{ width: '60%' }}></div>
                            </div>
                          </div>
                          
                          <div className="w-1/3 bg-gray-700/40 border border-gray-700 rounded p-2">
                            <div className="text-xs font-medium mb-1">Recomendações</div>
                            <div className="h-1 w-full bg-gray-700 rounded">
                              <div className="h-full bg-gray-500 rounded" style={{ width: '20%' }}></div>
                            </div>
                          </div>
                          
                          <div className="w-1/3 bg-gray-700/40 border border-gray-700 rounded p-2">
                            <div className="text-xs font-medium mb-1">Checkout</div>
                            <div className="h-1 w-full bg-gray-700 rounded">
                              <div className="h-full bg-gray-500 rounded" style={{ width: '5%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-24 text-xs font-medium text-gray-400">Q3 2024</div>
                      <div className="flex-1">
                        <div className="flex space-x-3">
                          <div className="w-1/2 bg-gray-700/40 border border-gray-700 rounded p-2">
                            <div className="text-xs font-medium mb-1">Programa de Fidelidade</div>
                          </div>
                          
                          <div className="w-1/2 bg-gray-700/40 border border-gray-700 rounded p-2">
                            <div className="text-xs font-medium mb-1">App Mobile V1</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-4 space-y-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <h2 className="text-lg font-medium mb-3">Time do Projeto</h2>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                        <div>
                          <div className="text-sm">Renata Silva</div>
                          <div className="text-xs text-gray-400">Product Owner</div>
                        </div>
                      </div>
                      <span className="text-xs text-green-500">Online</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                        <div>
                          <div className="text-sm">Carlos Mendes</div>
                          <div className="text-xs text-gray-400">Tech Lead</div>
                        </div>
                      </div>
                      <span className="text-xs text-gray-400">Offline</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                        <div>
                          <div className="text-sm">Ana Costa</div>
                          <div className="text-xs text-gray-400">UX Designer</div>
                        </div>
                      </div>
                      <span className="text-xs text-gray-400">Offline</span>
                    </div>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t border-gray-700">
                    <h3 className="text-sm font-medium mb-2">Agentes IA</h3>
                    
                    <div className="space-y-2">
                      {Object.entries(agents).map(([id, agent]) => (
                        <div 
                          key={id}
                          className={`flex items-center justify-between p-2 rounded cursor-pointer ${
                            currentAgent === id ? `bg-${agent.color}-500/20 text-${agent.color}-500` : 'hover:bg-gray-700'
                          }`}
                          onClick={() => setCurrentAgent(id)}
                        >
                          <div className="flex items-center space-x-2">
                            <div className={`w-6 h-6 rounded-full bg-${agent.color}-500/20 flex items-center justify-center`}>
                              {agent.icon}
                            </div>
                            <div>
                              <div className="text-sm">{agent.name}</div>
                              <div className="text-xs text-gray-400">{agent.role}</div>
                            </div>
                          </div>
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-lg font-medium">Próximas Atividades</h2>
                    <button className="text-xs text-cyan-500">Ver todas</button>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="p-2 bg-gray-700/40 rounded">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Workshop com Stakeholders</span>
                        <span className="text-xs text-cyan-500">Hoje</span>
                      </div>
                      <div className="flex items-center text-xs text-gray-400">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>14:00 - 16:00</span>
                      </div>
                    </div>
                    
                    <div className="p-2 bg-gray-700/40 rounded">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Definição de MVP</span>
                        <span className="text-xs text-gray-400">Amanhã</span>
                      </div>
                      <div className="flex items-center text-xs text-gray-400">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>10:00 - 12:00</span>
                      </div>
                    </div>
                    
                    <div className="p-2 bg-gray-700/40 rounded">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Revisão de Sprint</span>
                        <span className="text-xs text-gray-400">Sexta-feira</span>
                      </div>
                      <div className="flex items-center text-xs text-gray-400">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>15:00 - 16:00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Agent Panel */}
          {showAgentPanel && (
            <div className="w-80 border-l border-gray-800 flex flex-col">
              <div className={`h-14 border-b border-gray-800 flex items-center justify-between p-4 bg-${agents[currentAgent].color}-500/10`}>
                <div className="flex items-center space-x-2">
                  <div className={`w-8 h-8 rounded-full bg-${agents[currentAgent].color}-500/20 flex items-center justify-center`}>
                    {agents[currentAgent].icon}
                  </div>
                  <div>
                    <h3 className="font-medium">{agents[currentAgent].name}</h3>
                    <p className="text-xs text-gray-400">{agents[currentAgent].role}</p>
                  </div>
                </div>
                <button onClick={() => setShowAgentPanel(false)}>
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              </div>
              
              <div className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-4">
                  {conversationHistory.map((message, index) => (
                    <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] p-3 rounded-lg ${
                        message.sender === 'user' 
                          ? 'bg-gray-700 text-white' 
                          : `bg-${agents[message.agentType]?.color || 'cyan'}-500/20 text-white`
                      }`}>
                        <p className="text-sm">{message.content}</p>
                        <span className="text-xs text-gray-400 mt-1 block">{message.timestamp}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-4 border-t border-gray-800">
                <div className="flex items-center space-x-2 mb-3">
                  <Zap className="w-4 h-4 text-cyan-500" />
                  <span className="text-xs text-gray-400">Sugestões rápidas:</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  <button className="text-xs bg-gray-700 hover:bg-gray-600 rounded-full px-3 py-1" onClick={() => sendMessage("Como estruturo OKRs para este projeto?")}>
                    Estruturar OKRs
                  </button>
                  <button className="text-xs bg-gray-700 hover:bg-gray-600 rounded-full px-3 py-1" onClick={() => sendMessage("Ajude a priorizar features do MVP")}>
                    Priorizar MVP
                  </button>
                  <button className="text-xs bg-gray-700 hover:bg-gray-600 rounded-full px-3 py-1" onClick={() => sendMessage("Gerar user stories para busca")}>
                    User Stories
                  </button>
                </div>
                
                <div className="flex items-center space-x-2">
                  <input 
                    type="text" 
                    placeholder="Escreva sua mensagem..."
                    className="flex-1 bg-gray-700 text-white rounded-full px-4 py-2 text-sm"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        sendMessage(e.target.value);
                        e.target.value = '';
                      }
                    }}
                  />
                  <button 
                    className={`p-2 rounded-full bg-${agents[currentAgent].color}-500`}
                    onClick={() => {
                      const input = document.querySelector('input');
                      if (input.value) {
                        sendMessage(input.value);
                        input.value = '';
                      }
                    }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className={`p-3 border-t border-gray-800 bg-${agents[currentAgent].color}-500/10`}>
                <h4 className="text-xs font-medium mb-2">Capacidades do Agente:</h4>
                <div className="flex flex-wrap gap-1">
                  {agents[currentAgent].skills.map((skill, i) => (
                    <span key={i} className="text-xs bg-gray-700 px-2 py-0.5 rounded">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GenAIWorkspace;
