import React, { useState } from 'react';
import { Calendar, MapPin, Music, User, Search, Filter, Star, Plus, ChevronDown, Heart, Users, Clock, Coffee, Ticket } from 'lucide-react';

const PartyInterface = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  
  // Categorias de eventos
  const categories = ['Todos', 'Eletrônica', 'Rock', 'Samba', 'Jazz', 'Hip Hop'];
  
  // Eventos de exemplo
  const events = [
    {
      id: 1,
      title: 'Noite Eletrônica XYZ',
      venue: 'Club ABC',
      location: 'São Paulo, SP',
      date: 'Hoje, 22:00',
      price: 'R$ 50',
      attendees: 128,
      artists: 3,
      rating: 4.8,
      featured: true,
      image: 'electronic.jpg'
    },
    {
      id: 2,
      title: 'Festival Rock Sunset',
      venue: 'Espaço das Américas',
      location: 'São Paulo, SP',
      date: 'Amanhã, 19:00',
      price: 'R$ 120',
      attendees: 324,
      artists: 5,
      rating: 4.5,
      featured: false,
      image: 'rock.jpg'
    },
    {
      id: 3,
      title: 'Jazz na Praça',
      venue: 'Centro Cultural',
      location: 'São Paulo, SP',
      date: 'Sábado, 18:00',
      price: 'Grátis',
      attendees: 78,
      artists: 2,
      rating: 4.2,
      featured: false,
      image: 'jazz.jpg'
    },
    {
      id: 4,
      title: 'Rap Festival',
      venue: 'Urban Stage',
      location: 'Rio de Janeiro, RJ',
      date: '15 Jun, 20:00',
      price: 'R$ 80',
      attendees: 220,
      artists: 8,
      rating: 4.7,
      featured: true,
      image: 'rap.jpg'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white">
      {/* Top Navigation */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
              <Music className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold">LF:Party</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full bg-gray-800">
              <Calendar className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full bg-gray-800">
              <MapPin className="w-5 h-5" />
            </button>
            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Descubra Eventos</h1>
            <p className="text-gray-400">Encontre os melhores eventos perto de você</p>
          </div>
          <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center gap-2">
            <Plus className="w-4 h-4" />
            <span>Criar Evento</span>
          </button>
        </div>

        {/* Filter & Search */}
        <div className="mb-6">
          <div className="flex gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar eventos, artistas ou locais..."
                className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="p-2.5 bg-gray-800 border border-gray-700 rounded-lg">
              <Filter className="w-5 h-5" />
            </button>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500'
                    : 'bg-gray-800 border border-gray-700'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {events.map(event => (
            <div 
              key={event.id} 
              className={`bg-gray-800 rounded-lg overflow-hidden ${
                event.featured ? 'border border-cyan-500' : ''
              }`}
            >
              {/* Event Image */}
              <div className="h-40 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 relative">
                {/* Date Tag */}
                <div className="absolute top-3 left-3 bg-black/60 rounded-lg px-3 py-1 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-cyan-500" />
                  <span className="text-sm">{event.date}</span>
                </div>
                
                {/* Price Tag */}
                <div className="absolute top-3 right-3 bg-black/60 rounded-lg px-3 py-1">
                  <span className="text-sm font-bold">{event.price}</span>
                </div>
                
                {/* Favorite Button */}
                <button className="absolute bottom-3 right-3 p-2 bg-black/60 rounded-full">
                  <Heart className="w-4 h-4" />
                </button>
              </div>
              
              {/* Event Info */}
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-lg">{event.title}</h3>
                    <p className="text-gray-400 flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {event.venue} • {event.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm">{event.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mt-3">
                  <div className="flex -space-x-2">
                    {[...Array(Math.min(3, event.artists))].map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-gray-800 bg-gradient-to-br from-cyan-500 to-purple-500"
                      />
                    ))}
                    {event.artists > 3 && (
                      <div className="w-8 h-8 rounded-full border-2 border-gray-800 bg-gray-700 flex items-center justify-center text-xs">
                        +{event.artists - 3}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-gray-400 text-sm">
                    <Users className="w-4 h-4" />
                    <span>{event.attendees} confirmados</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-700">
                  <div className="flex gap-2">
                    <button className="p-1.5 bg-gray-700 rounded">
                      <Coffee className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 bg-gray-700 rounded">
                      <Clock className="w-4 h-4" />
                    </button>
                  </div>
                  <button className="px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-sm font-semibold flex items-center gap-2">
                    <Ticket className="w-4 h-4" />
                    <span>Participar</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Nearby Events Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Eventos Próximos</h2>
            <button className="text-cyan-500 text-sm flex items-center gap-1">
              Ver Mapa <MapPin className="w-4 h-4" />
            </button>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="h-40 bg-gray-700 rounded-lg mb-4"></div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Mostrando eventos num raio de 5km</span>
              <button className="flex items-center gap-1 text-sm text-cyan-500">
                Ajustar <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Featured Venues */}
        <div>
          <h2 className="text-xl font-bold mb-4">Locais em Destaque</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((venue) => (
              <div key={venue} className="bg-gray-800 rounded-lg p-3 text-center">
                <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-500/30 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-cyan-500" />
                </div>
                <h3 className="font-semibold">Venue {venue}</h3>
                <p className="text-xs text-gray-400">12 eventos</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700">
        <div className="flex items-center justify-around py-3">
          <button className="flex flex-col items-center">
            <Music className="w-6 h-6 text-cyan-500" />
            <span className="text-xs mt-1">Eventos</span>
          </button>
          <button className="flex flex-col items-center">
            <Calendar className="w-6 h-6" />
            <span className="text-xs mt-1">Agenda</span>
          </button>
          <button className="flex flex-col items-center">
            <Users className="w-6 h-6" />
            <span className="text-xs mt-1">Artistas</span>
          </button>
          <button className="flex flex-col items-center">
            <MapPin className="w-6 h-6" />
            <span className="text-xs mt-1">Mapa</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartyInterface;
