import React from 'react';
import { Trophy, Star, Target, BarChart2, Award, Users, ArrowUp, ChevronRight, Music, Activity, Play, Clock, Download } from 'lucide-react';

const GamificationDashboard = () => {
  // Dados simulados para o progresso
  const progressData = {
    level: 15,
    title: 'Produtor Experiente',
    xp: 1250,
    xpToNextLevel: 1500,
    skills: [
      { name: 'Produção Musical', progress: 85 },
      { name: 'Mixagem', progress: 70 },
      { name: 'Colaboração', progress: 90 },
      { name: 'Composição', progress: 65 }
    ],
    achievements: [
      { name: 'Mestre do Beat', level: 3, icon: 'award', completed: true },
      { name: 'Rei do Sample', level: 2, icon: 'music', completed: true },
      { name: 'Colaborador Elite', level: 1, icon: 'users', completed: true },
      { name: 'Produtor Platina', level: 0, icon: 'star', completed: false }
    ],
    stats: {
      projectsCompleted: 24,
      collaborations: 8,
      achievements: 15
    },
    recentProjects: [
      { name: 'Beat Tropical', date: '3 dias atrás', duration: '3:45', plays: 128 },
      { name: 'Colaboração Funk', date: '1 semana atrás', duration: '2:56', plays: 437 }
    ]
  };

  return (
    <div className="w-full bg-gray-900 text-white min-h-screen p-6">
      {/* Header com nível e informação de XP */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Sua Jornada Musical</h1>
          <p className="text-gray-400">Nível {progressData.level} - {progressData.title}</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <Trophy className="w-6 h-6 text-yellow-400" />
            <span className="text-lg font-bold">{progressData.xp} XP</span>
          </div>
          <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-sm">
            Loja de Recompensas
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400">Progresso para Nível {progressData.level + 1}</span>
          <span className="text-sm text-cyan-500">{progressData.xp}/{progressData.xpToNextLevel} XP</span>
        </div>
        <div className="w-full h-2 bg-gray-700 rounded-full">
          <div 
            className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" 
            style={{ width: `${(progressData.xp / progressData.xpToNextLevel) * 100}%` }}
          />
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-800 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Projetos Concluídos</p>
              <h3 className="text-2xl font-bold">{progressData.stats.projectsCompleted}</h3>
            </div>
            <Target className="w-8 h-8 text-cyan-500" />
          </div>
          <div className="mt-4 flex items-center text-green-400 text-sm">
            <ArrowUp className="w-4 h-4 mr-1" />
            <span>12% esta semana</span>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Colaborações</p>
              <h3 className="text-2xl font-bold">{progressData.stats.collaborations}</h3>
            </div>
            <Users className="w-8 h-8 text-cyan-500" />
          </div>
          <div className="mt-4 flex items-center text-green-400 text-sm">
            <ArrowUp className="w-4 h-4 mr-1" />
            <span>3 novas este mês</span>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Conquistas</p>
              <h3 className="text-2xl font-bold">{progressData.stats.achievements}</h3>
            </div>
            <Award className="w-8 h-8 text-cyan-500" />
          </div>
          <div className="mt-4 flex items-center text-green-400 text-sm">
            <Star className="w-4 h-4 mr-1" />
            <span>2 disponíveis</span>
          </div>
        </div>
      </div>

      {/* Skills Progress */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="col-span-2 bg-gray-800 rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Habilidades em Desenvolvimento</h3>
            <button className="text-sm text-cyan-500 flex items-center">
              Ver todas <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          <div className="space-y-4">
            {progressData.skills.map(skill => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.progress}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" 
                    style={{ width: `${skill.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Próximos Desafios</h3>
            <Activity className="w-5 h-5 text-cyan-500" />
          </div>

          <div className="space-y-3">
            <div className="p-3 bg-gray-700/50 rounded-lg">
              <h4 className="font-semibold">Colabore com 3 artistas</h4>
              <div className="mt-2 flex justify-between items-center">
                <div className="w-full h-1.5 bg-gray-700 rounded-full mr-3">
                  <div className="h-full bg-cyan-500 rounded-full" style={{ width: '66%' }} />
                </div>
                <span className="text-xs whitespace-nowrap">2/3</span>
              </div>
            </div>
            
            <div className="p-3 bg-gray-700/50 rounded-lg">
              <h4 className="font-semibold">Produzir 5 músicas</h4>
              <div className="mt-2 flex justify-between items-center">
                <div className="w-full h-1.5 bg-gray-700 rounded-full mr-3">
                  <div className="h-full bg-cyan-500 rounded-full" style={{ width: '40%' }} />
                </div>
                <span className="text-xs whitespace-nowrap">2/5</span>
              </div>
            </div>
            
            <div className="p-3 bg-gray-700/50 rounded-lg">
              <h4 className="font-semibold">Alcançar 1000 reproduções</h4>
              <div className="mt-2 flex justify-between items-center">
                <div className="w-full h-1.5 bg-gray-700 rounded-full mr-3">
                  <div className="h-full bg-cyan-500 rounded-full" style={{ width: '75%' }} />
                </div>
                <span className="text-xs whitespace-nowrap">750/1000</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Grid & Recent Projects */}
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <h3 className="text-lg font-semibold mb-4">Conquistas</h3>
          <div className="grid grid-cols-4 gap-4">
            {progressData.achievements.map((achievement, index) => (
              <div 
                key={index} 
                className={`bg-gray-800 p-4 rounded-lg text-center ${!achievement.completed && 'opacity-50'}`}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  {achievement.icon === 'award' && <Award className="w-6 h-6" />}
                  {achievement.icon === 'music' && <Music className="w-6 h-6" />}
                  {achievement.icon === 'users' && <Users className="w-6 h-6" />}
                  {achievement.icon === 'star' && <Star className="w-6 h-6" />}
                </div>
                <h4 className="font-semibold">{achievement.name}</h4>
                <p className="text-sm text-gray-400 mt-1">
                  {achievement.completed ? `Nível ${achievement.level}` : 'Bloqueado'}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Projetos Recentes</h3>
          <div className="space-y-3">
            {progressData.recentProjects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">{project.name}</h4>
                  <span className="text-xs text-gray-400">{project.date}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Play className="w-4 h-4 text-gray-400" />
                      <span>{project.plays}</span>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <button className="p-1 rounded bg-gray-700 hover:bg-gray-600">
                      <Download className="w-4 h-4" />
                    </button>
                    <button className="p-1 rounded bg-gray-700 hover:bg-gray-600">
                      <Play className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            <button className="w-full py-2 text-sm bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center gap-1">
              <ChevronRight className="w-4 h-4" />
              <span>Ver todos os projetos</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamificationDashboard;
