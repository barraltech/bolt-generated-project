import React, { useState } from 'react';
import { Mic, Play, User, Search, Star, Music, Settings, ChevronLeft, Heart, Volume2, Filter, Hexagon } from 'lucide-react';

const VocalCollaboration = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenres, setSelectedGenres] = useState(['Pop']);
  
  // Gerar pontos para visualizador de ondas
  const generateWavePoints = () => {
    return Array.from({ length: 50 }, (_, i) => ({
      height: Math.sin(i * 0.2) * 50 + 50,
      opacity: 0.5 + Math.sin(i * 0.2) * 0.5
    }));
  };
  
  const wavePoints = generateWavePoints();
  
  // Lista de gêneros para filtro
  const genres = ['Pop', 'R&B', 'Rock', 'Jazz', 'Soul', 'Hip Hop', 'Eletrônica'];
  
  // Dados de exemplo para vocais
  const vocals = [
    { 
      id: 1, 
      type: 'ai', 
      name: 'Voz Similar a Ana', 
      style: 'Soprano • Pop', 
      rating: 4.8, 
      featured: true 
    },
    { 
      id: 2, 
      type: 'artist', 
      name: 'Carlos Mendes', 
      style: 'Tenor • Rock', 
      rating: 4.5, 
      featured: false 
    },
    { 
      id: 3, 
      type: 'ai', 
      name: 'Voz Similar a João', 
      style: 'Barítono • R&B', 
      rating: 4.3, 
      featured: false 
    },
    { 
      id: 4, 
      type: 'artist', 
      name: 'Maria Silva', 
      style: 'Mezzo-soprano • Jazz', 
      rating: 4.9, 
      featured: true 
    }
  ];
  
  const toggleGenre = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter(g => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  return (
    <div className="w-full bg-gray-900 text-white min-h-screen p-6">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-6">
        <button className="p-2 rounded-lg bg-gray-800">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-2xl font-bold">Try this vocals</h1>
          <p className="text-gray-400">Encontre a voz perfeita para sua música</p>
        </div>
      </div>

      {/* Search Section */}
      <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por estilo, tom, referência..."
              className="w-full bg-gray-700 rounded-lg border-none pl-10 pr-4 py-3"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="p-3 bg-gray-700 rounded-lg">
            <Filter className="w-5 h-5" />
          </button>
          <button className="p-3 bg-gray-700 rounded-lg">
            <Settings className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {genres.map(genre => (
            <button
              key={genre}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedGenres.includes(genre) 
                  ? 'bg-cyan-500 text-white' 
                  : 'bg-gray-700 text-gray-300'
              }`}
              onClick={() => toggleGenre(genre)}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      {/* Voice Options Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {vocals.map(vocal => (
          <div key={vocal.id} className={`bg-gray-800 rounded-lg p-4 border ${vocal.featured ? 'border-cyan-500' : 'border-transparent'}`}>
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                {vocal.type === 'ai' ? (
                  <Hexagon className="w-5 h-5 text-cyan-500" />
                ) : (
                  <User className="w-5 h-5 text-cyan-500" />
                )}
                <h3 className="font-semibold">
                  {vocal.type === 'ai' ? 'IA Voice' : 'Colaboração'}
                </h3>
              </div>
              <div className="flex items-center gap-1">
                <Star className={`w-4 h-4 ${vocal.featured ? 'text-yellow-400' : 'text-gray-400'}`} />
                <span className="text-sm">{vocal.rating}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className={`w-16 h-16 rounded-lg ${
                vocal.type === 'ai' 
                  ? 'bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center' 
                  : 'bg-gray-700'
              }`}>
                {vocal.type === 'ai' ? (
                  <Mic className="w-8 h-8" />
                ) : (
                  <div className="w-full h-full rounded-lg bg-gradient-to-br from-cyan-500/30 to-purple-500/30" />
                )}
              </div>
              <div>
                <h4 className="font-semibold">{vocal.name}</h4>
                <p className="text-sm text-gray-400">{vocal.style}</p>
                {vocal.type === 'artist' && (
                  <div className="flex items-center gap-2 mt-1">
                    <Heart className="w-3 h-3 text-red-500" />
                    <span className="text-xs text-gray-400">456 seguidores</span>
                  </div>
                )}
              </div>
            </div>

            {/* Waveform preview */}
            <div className="h-10 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
              {vocal.type === 'ai' ? (
                <div className="w-full h-6 flex items-center justify-center space-x-0.5">
                  {wavePoints.map((point, i) => (
                    <div
                      key={i}
                      className="w-1 bg-cyan-500"
                      style={{
                        height: `${point.height}%`,
                        opacity: point.opacity
                      }}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <Play className="w-6 h-6" />
                </div>
              )}
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Volume2 className="w-4 h-4 text-gray-400" />
                <div className="w-20 h-1 bg-gray-700 rounded-full">
                  <div className="h-full w-3/5 bg-cyan-500 rounded-full" />
                </div>
              </div>
              <button className={`px-4 py-2 rounded-lg ${
                vocal.type === 'ai' 
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500' 
                  : 'bg-gray-700 border border-cyan-500'
              }`}>
                {vocal.type === 'ai' ? 'Testar Voz' : 'Propor Colaboração'}
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Voice Details Modal (hidden by default) */}
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center hidden">
        <div className="bg-gray-800 rounded-lg p-6 max-w-lg w-full">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-bold">Detalhes da Voz</h2>
            <button className="p-1 rounded-full bg-gray-700">
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          
          {/* Content would go here */}
          
        </div>
      </div>
    </div>
  );
};

export default VocalCollaboration;
