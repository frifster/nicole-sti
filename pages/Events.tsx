import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Events: React.FC = () => {
  const upcomingEvents = [
    {
      title: "Multimedia Arts Festival 2024",
      date: "Nov 25-27, 2024",
      time: "8:00 AM - 5:00 PM",
      location: "STI Calamba Gymnasium",
      description: "A 3-day showcase of student portfolios, short films, and game demos. Open to the public.",
      image: "https://picsum.photos/600/300?random=30"
    },
    {
      title: "Industry Talk: The Future of AI in Art",
      date: "Dec 05, 2024",
      time: "1:00 PM - 3:00 PM",
      location: "Audio Visual Room 1",
      description: "Guest speaker from a leading ad agency discusses the impact of Generative AI on the creative industry.",
      image: "https://picsum.photos/600/300?random=31"
    }
  ];

  const pastEvents = [
    {
      title: "Film Production Workshop",
      date: "Oct 15, 2024",
      image: "https://picsum.photos/400/300?random=32"
    },
    {
      title: "Graphic Design Battle",
      date: "Sept 20, 2024",
      image: "https://picsum.photos/400/300?random=33"
    },
    {
      title: "Photography Expedition",
      date: "Aug 10, 2024",
      image: "https://picsum.photos/400/300?random=34"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Events & Activities</h1>

        {/* Upcoming Events Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-sti-blue mb-6 border-l-4 border-sti-yellow pl-4">Upcoming Events</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <div className="flex flex-col space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center"><Calendar className="h-4 w-4 mr-2 text-sti-blue"/> {event.date}</div>
                    <div className="flex items-center"><Clock className="h-4 w-4 mr-2 text-sti-blue"/> {event.time}</div>
                    <div className="flex items-center"><MapPin className="h-4 w-4 mr-2 text-sti-blue"/> {event.location}</div>
                  </div>
                  <p className="text-gray-700">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events Gallery */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-gray-400 pl-4">Past Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <div key={index} className="group relative rounded-lg overflow-hidden cursor-pointer">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-lg">{event.title}</h3>
                  <p className="text-gray-300 text-sm">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;