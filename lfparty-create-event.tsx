import React, { useState } from 'react';
import { 
  Music, Calendar, Clock, MapPin, User, Settings, Image, 
  ChevronLeft, DollarSign, Plus, ChevronDown, Tag, 
  Eye, Save, Users, Check, AlertCircle, Search
} from 'lucide-react';

const EventCreation = () => {
  const [eventTitle, setEventTitle] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventPrice, setEventPrice] = useState('');
  const [eventType, setEventType] = useState('Público');
  const [eventCapacity, setEventCapacity] = useState('');
  const [selectedTags, setSelectedTags] = useState(['Eletrônica']);
  
  const eventTypes = ['Público', 'Privado', 'Convidados'];
  const availableTags = ['Eletrônica', 'Rock', 'Pop', 'Jazz', 'Hip Hop', 'Samba', 'Alternativo', 'Indie'];
  
  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  
  // Lista de artistas para selecionar
  const artists = [
    { id: 1, name: 'DJ Alex Silva', role: 'DJ Principal' },
    { id: 2, name: 'Banda Exemplo', role: 'Banda Suporte' }
  ];

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="border-b border-gray-800 sticky top-0 bg-gray-900 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="p-2 bg-gray-800 rounded-lg">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-xl font-bold">Criar Evento</h1>
              <p className="text-sm text-gray-400">Preencha os detalhes do seu evento</p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <button className="px-3 py-1.5 bg-gray-800 rounded-lg flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span className="text-sm">Visualizar</span>
            </button>
            <button className="px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center gap-2">
              <Save className="w-4 h-4" />
              <span className="text-sm font-semibold">Salvar</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column - Main Form */}
          <div className="md:col-span-2 space-y-6">
            {/* Event Cover */}
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="font-semibold mb-3">Imagem do Evento</h3>
              <div className="h-48 border-2 border-dashed border-gray-700 rounded-lg flex items-center justify-center cursor-pointer bg-gray-800/50">
                <div className="text-center">
                  <Image className="w-8 h-8 mx-auto mb-2 text-gray-500" />
                  <p className="text-gray-500">Clique para fazer upload</p>
                  <p className="text-xs text-gray-600 mt-1">Recomendado: 1200 x 600px</p>
                </div>
              </div>
            </div>
            
            {/* Basic Info */}
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="font-semibold mb-3">Informações Básicas</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Nome do Evento *</label>
                  <input
                    type="text"
                    value={eventTitle}
                    onChange={(e) => setEventTitle(e.target.value)}
                    placeholder="Ex: Festa Eletrônica XYZ"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Data *</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="date"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-3 py-2"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Horário *</label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="time"
                        value={eventTime}
                        onChange={(e) => setEventTime(e.target.value)}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-3 py-2"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Descrição</label>
                  <textarea
                    rows="4"
                    placeholder="Descreva seu evento..."
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 resize-none"
                  ></textarea>
                </div>
              </div>
            </div>
            
            {/* Location */}
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Local
              </h3>
              
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Buscar local..."
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-3 py-2"
                  />
                </div>
                
                <div className="h-40 bg-gray-700 rounded-lg mb-2">
                  {/* Map placeholder */}
                </div>
                
                <div className="p-3 border border-gray-700 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-gray-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Club XYZ</h4>
                      <p className="text-sm text-gray-400">Rua Exemplo, 123 - São Paulo, SP</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Artists */}
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <User className="w-5 h-5" />
                Artistas
              </h3>
              
              <div className="space-y-3">
                {artists.map(artist => (
                  <div key={artist.id} className="p-3 bg-gray-700 rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500" />
                      <div>
                        <h4 className="font-semibold">{artist.name}</h4>
                        <p className="text-xs text-gray-400">{artist.role}</p>
                      </div>
                    </div>
                    <button className="text-cyan-500 text-sm">Editar</button>
                  </div>
                ))}
                
                <button className="w-full py-2 border border-cyan-500 text-cyan-500 rounded-lg flex items-center justify-center gap-2">
                  <Plus className="w-4 h-4" />
                  <span>Adicionar Artista</span>
                </button>
              </div>
            </div>
            
            {/* Tickets */}
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Ingressos
                </h3>
                <button className="text-sm text-cyan-500">+ Adicionar Tipo</button>
              </div>
              
              <div className="space-y-4">
                <div className="p-3 border border-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold">Ingresso Padrão</h4>
                    <span className="text-sm bg-green-500/20 text-green-500 px-2 py-0.5 rounded">Ativo</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">Preço</label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="text"
                          value={eventPrice}
                          onChange={(e) => setEventPrice(e.target.value)}
                          placeholder="0,00"
                          className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-3 py-1.5 text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">Quantidade</label>
                      <input
                        type="number"
                        placeholder="100"
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-1.5 text-sm"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>Início: 01/06</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>Fim: 15/06</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Settings & Preview */}
          <div className="space-y-6">
            {/* Publish Status */}
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">Status</h3>
                <span className="text-sm bg-yellow-500/20 text-yellow-500 px-2 py-0.5 rounded">Rascunho</span>
              </div>
              
              <p className="text-sm text-gray-400 mb-3">
                Seu evento está como rascunho e não aparecerá nas buscas.
              </p>
              
              <button className="w-full py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold">
                Publicar Evento
              </button>
            </div>
            
            {/* Event Settings */}
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Settings className="w-5 h-5" />
                <h3 className="font-semibold">Configurações</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Tipo de Evento</label>
                  <div className="relative">
                    <select 
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 appearance-none"
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                    >
                      {eventTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Capacidade</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="number"
                      value={eventCapacity}
                      onChange={(e) => setEventCapacity(e.target.value)}
                      placeholder="100"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-3 py-2"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Tags</label>
                  <div className="relative mb-2">
                    <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <select className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-3 py-2 appearance-none">
                      <option>Selecionar tag...</option>
                      {availableTags.filter(tag => !selectedTags.includes(tag)).map(tag => (
                        <option key={tag} value={tag}>{tag}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {selectedTags.map(tag => (
                      <div key={tag} className="bg-gray-700 rounded-full px-3 py-1 text-sm flex items-center gap-1">
                        {tag}
                        <button 
                          className="text-gray-400 hover:text-white"
                          onClick={() => toggleTag(tag)}
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Checklist */}
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="font-semibold mb-3">Checklist</h3>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Informações básicas</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Local definido</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <AlertCircle className="w-4 h-4 text-yellow-500" />
                  <span className="text-yellow-500">Imagem do evento</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <AlertCircle className="w-4 h-4 text-yellow-500" />
                  <span className="text-yellow-500">Descrição detalhada</span>
                </div>
              </div>
            </div>
            
            {/* Preview */}
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="font-semibold mb-3">Pré-visualização</h3>
              
              <div className="h-40 bg-gray-700 rounded-lg mb-3">
                {/* Preview image */}
              </div>
              
              <button className="w-full py-2 bg-gray-700 rounded-lg text-sm flex items-center justify-center gap-2">
                <Eye className="w-4 h-4" />
                <span>Visualizar Completo</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCreation;