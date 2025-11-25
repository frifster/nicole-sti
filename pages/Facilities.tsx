import React from 'react';

const Facilities: React.FC = () => {
  const facilities = [
    {
      title: "Macintosh Laboratory",
      description: "Equipped with the latest iMacs for high-end graphic design, video editing, and rendering tasks.",
      image: "https://picsum.photos/600/400?random=10",
      tags: ["Adobe CC", "Rendering", "Design"]
    },
    {
      title: "Photography Studio",
      description: "A professional studio setup with backdrops, strobes, softboxes, and high-resolution DSLRs for student use.",
      image: "https://picsum.photos/600/400?random=11",
      tags: ["Lighting", "DSLRs", "Portraiture"]
    },
    {
      title: "Audio Production Room",
      description: "Sound-treated room for voice-overs, foley recording, and audio mixing using industry-standard hardware.",
      image: "https://picsum.photos/600/400?random=12",
      tags: ["Sound Design", "Recording", "Mixing"]
    },
    {
      title: "Green Screen Studio",
      description: "Spacious chroma key area for visual effects compositing, news broadcasting simulations, and virtual sets.",
      image: "https://picsum.photos/600/400?random=13",
      tags: ["VFX", "Compositing", "Broadcasting"]
    },
    {
      title: "Drawing & Art Room",
      description: "Traditional art space with drafting tables for freehand drawing, painting, and storyboarding classes.",
      image: "https://picsum.photos/600/400?random=14",
      tags: ["Traditional Art", "Storyboarding", "Concept Art"]
    },
    {
      title: "Student Lounge",
      description: "A creative collaborative space where students can brainstorm, relax, and work on group projects.",
      image: "https://picsum.photos/600/400?random=15",
      tags: ["Collaboration", "Relaxation", "Brainstorming"]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">World-Class Facilities</h1>
          <p className="mt-4 text-xl text-gray-500">
            We invest in the tools you need to succeed. Explore the labs and studios available to BMMA students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <div className="h-48 overflow-hidden">
                <img 
                  src={facility.image} 
                  alt={facility.title} 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{facility.title}</h3>
                <p className="text-gray-600 mb-4 flex-1">{facility.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {facility.tags.map(tag => (
                    <span key={tag} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilities;