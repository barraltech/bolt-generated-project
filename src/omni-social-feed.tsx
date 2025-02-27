import React from 'react';
import { Heart, MessageCircle, Share2, Play, Music, Users, MoreHorizontal, Headphones, Bookmark } from 'lucide-react';

const SocialFeed = () => {
  // Função simulada para gerar valores de onda para visualização
  const generateWaveValues = (count = 40) => {
    return Array.from({ length: count }, (_, i) => ({
      height: Math.sin(i * 0.2) * 60 + 60, // Valores entre 0-100
      opacity: 0.5 + Math.sin(i * 0.2) * 0.5 // Valores entre 0-1
    }));
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-gray-900 text-white p-4">
      {/* Story/Highlights Bar */}
      <div className="flex space-x-4 mb-6 overflow-x-auto pb-2">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 p-0.5">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <Music className="w-6 h-6 text-cyan-500" />
              </div>
            </div>
            <span className="text-xs mt-1">Story {item}</span>
          </div>
        ))}
      </div>

      {/* Posts */}
      <div className="space-y-6">
        {[1, 2].map((post) => (
          <div key={post} className="bg-gray-800/50 rounded-lg overflow-hidden">
            {/* Post Header */}
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500" />
                <div>
                  <h4 className="font-semibold">Artista Nome</h4>
                  <p className="text-xs text-gray-400">4h atrás</p>
                </div>
              </div>
              <button>
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            {/* Music Preview */}
            <div className="relative h-48 bg-gradient-to-br from-cyan-900/20 to-purple-900/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="p-4 bg-cyan-500 rounded-full">
                  <Play className="w-8 h-8" fill="white" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4">
                <h3 className="font-bold">Nome da Música</h3>
                <p className="text-sm text-gray-400">Álbum • Gênero</p>
              </div>
            </div>

            {/* Wave Visualization */}
            <div className="h-16 p-4 flex items-center justify-center space-x-1">
              {generateWaveValues().map((wave, i) => (
                <div
                  key={i}
                  className="w-1 bg-cyan-500"
                  style={{
                    height: `${wave.height}%`,
                    opacity: wave.opacity
                  }}
                />
              ))}
            </div>

            {/* Interaction Bar */}
            <div className="flex items-center justify-between p-4 border-t border-gray-700">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2">
                  <Heart className="w-5 h-5" />
                  <span className="text-sm">2.5k</span>
                </button>
                <button className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm">482</span>
                </button>
                <button className="flex items-center space-x-2">
                  <Share2 className="w-5 h-5" />
                </button>
                <button className="flex items-center space-x-2">
                  <Bookmark className="w-5 h-5" />
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <Headphones className="w-5 h-5 text-cyan-500" />
                <span className="text-sm">1.2k ouvindo</span>
              </div>
            </div>
            
            {/* Comments Preview */}
            <div className="px-4 pb-4">
              <p className="text-sm text-gray-400">
                Ver todos os 482 comentários
              </p>
              <div className="mt-2 flex items-start space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-700" />
                <div className="flex-1">
                  <div className="bg-gray-700 rounded-lg p-2">
                    <p className="text-sm"><span className="font-semibold">username</span> Que música incrível! Estou ouvindo em loop!</p>
                  </div>
                  <div className="flex items-center space-x-4 mt-1 text-xs text-gray-400">
                    <span>2h</span>
                    <button>Curtir</button>
                    <button>Responder</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Recommended Connections */}
      <div className="mt-8">
        <h3 className="font-bold mb-4">Sugestões para Você</h3>
        <div className="space-y-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center justify-between bg-gray-800/50 p-3 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500" />
                <div>
                  <h4 className="font-semibold">DJ Example {item}</h4>
                  <p className="text-xs text-gray-400">Electronic • 10k ouvintes</p>
                </div>
              </div>
              <button className="px-3 py-1 bg-cyan-500 rounded-full text-sm font-semibold">
                Conectar
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialFeed;