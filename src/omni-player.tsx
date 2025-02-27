import React, { useState } from 'react';
import { Play, SkipBack, SkipForward, Volume2, Share2, Heart, User, Music, Headphones, Mic, Radio } from 'lucide-react';

const OmniPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(70);
  const [progress, setProgress] = useState(35);

  // Função simulada para gerar valores de onda para visualização
  const generateWaveValues = () => {
    return Array.from({ length: 50 }, (_, i) => ({
      height: Math.sin(i * 0.2) * 50 + 50, // Valores entre 0-100
      opacity: 0.5 + Math.sin(i * 0.2) * 0.5 // Valores entre 0-1
    }));
  };

  const waveValues = generateWaveValues();

  return (
    <div className="w-full bg-gray-900 text-white p-6 rounded-xl">
      {/* Header com informações do usuário */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center">
            <User className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold">Meu ○mni Player</h3>
            <p className="text-sm text-gray-400">Conectado com 234 pessoas</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full hover:bg-gray-800">
            <Headphones className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-800">
            <Radio className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Visualizador de Ondas */}
      <div className="relative h-48 mb-6 bg-gradient-to-b from-cyan-900/20 to-purple-900/20 rounded-lg p-4">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-32 flex items-center justify-center space-x-1">
            {waveValues.map((wave, i) => (
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
        </div>
        
        {/* Informação da música atual */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
          <div>
            <h2 className="text-xl font-bold">Nome da Música</h2>
            <p className="text-gray-400">Artista • Álbum</p>
          </div>
          <div className="flex items-center gap-2 bg-black/30 px-3 py-1 rounded-full">
            <Headphones className="w-4 h-4 text-cyan-500" />
            <span className="text-sm">1.2k ouvindo</span>
          </div>
        </div>
      </div>

      {/* Barra de Progresso */}
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-400 mb-1">
          <span>1:24</span>
          <span>3:45</span>
        </div>
        <div className="w-full h-1 bg-gray-700 rounded-full cursor-pointer">
          <div 
            className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" 
            style={{width: `${progress}%`}}
          />
        </div>
      </div>

      {/* Controles */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-800 rounded-full">
            <Heart className="w-6 h-6" />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-full">
            <Share2 className="w-6 h-6" />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-full">
            <Mic className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex items-center justify-center space-x-4">
          <button className="p-2 hover:bg-gray-800 rounded-full">
            <SkipBack className="w-6 h-6" />
          </button>
          <button 
            className="p-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            <Play className="w-6 h-6" fill="white" />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-full">
            <SkipForward className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex items-center space-x-2">
          <Volume2 className="w-5 h-5 text-gray-400" />
          <div className="w-20 h-1 bg-gray-700 rounded-full cursor-pointer">
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" 
              style={{width: `${volume}%`}}
            />
          </div>
        </div>
      </div>
      
      {/* Área de Conexões */}
      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold">Suas Conexões</h3>
          <button className="text-sm text-cyan-500">Ver todas</button>
        </div>
        
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 p-0.5 mb-1">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                  <Music className="w-6 h-6 text-cyan-500" />
                </div>
              </div>
              <span className="text-xs">Conexão {item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OmniPlayer;