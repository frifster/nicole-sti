import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const Faculty: React.FC = () => {
  const facultyMembers = [
    {
      name: "Prof. Michael Rivera",
      role: "Program Head",
      specialization: "Film Direction & Screenwriting",
      bio: "MFA in Cinema Studies. Over 10 years of industry experience directing independent films and commercials.",
      image: "https://picsum.photos/300/300?random=20"
    },
    {
      name: "Ms. Sarah Jimenez",
      role: "Senior Instructor",
      specialization: "Graphic Design & Branding",
      bio: "Award-winning designer with a portfolio including major tech startups. Expert in brand identity systems.",
      image: "https://picsum.photos/300/300?random=21"
    },
    {
      name: "Mr. David Tan",
      role: "Instructor",
      specialization: "3D Animation & VFX",
      bio: "Former VFX artist for broadcast television. Specializes in Blender, Maya, and After Effects workflows.",
      image: "https://picsum.photos/300/300?random=22"
    },
    {
      name: "Ms. Elena Rodriguez",
      role: "Instructor",
      specialization: "Photography & Digital Imaging",
      bio: "Freelance fashion photographer published in local magazines. Teaches advanced lighting and retouching.",
      image: "https://picsum.photos/300/300?random=23"
    },
    {
      name: "Mr. Kenneth Go",
      role: "Instructor",
      specialization: "Web Design & UI/UX",
      bio: "Full-stack developer and UI specialist. Passionate about creating accessible and beautiful web experiences.",
      image: "https://picsum.photos/300/300?random=24"
    }
  ];

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">Meet Our Faculty</h1>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            Learn from experienced industry practitioners and dedicated educators who are passionate about mentoring the next generation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-sti-blue/10">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <span className="text-sti-blue font-medium mb-1">{member.role}</span>
              <span className="text-xs text-gray-400 uppercase tracking-wide mb-3">{member.specialization}</span>
              <p className="text-center text-gray-600 text-sm mb-4">
                {member.bio}
              </p>
              <div className="flex space-x-3 mt-auto">
                <button className="p-2 text-gray-400 hover:text-sti-blue transition-colors">
                  <Mail className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-blue-700 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faculty;