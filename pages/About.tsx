import React from 'react';
import { Target, Award, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">Bachelor of Multimedia Arts</h1>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            A comprehensive program designed to equip students with the skills to create innovative content for various media platforms.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-2xl font-bold text-sti-blue mb-4">Course Description</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The Bachelor of Multimedia Arts (BMMA) program at STI College Calamba is designed to develop the creative and technical skills of students in the fields of digital media, communication, and design. 
            </p>
            <p className="text-gray-600 leading-relaxed">
              The curriculum integrates theory and practice, covering areas such as graphic design, photography, cinematography, animation, web design, and digital marketing. Students learn to conceptualize, design, and produce compelling multimedia content that meets the demands of the modern digital landscape.
            </p>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
             <img 
               src="https://picsum.photos/800/600?random=2" 
               alt="Classroom discussion" 
               className="w-full h-full object-cover"
             />
          </div>
        </div>

        {/* Goals & Outcomes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
            <Target className="h-10 w-10 text-sti-blue mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Program Goals</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Foster creativity and innovation.</li>
              <li>Master industry-standard software.</li>
              <li>Develop critical thinking in design.</li>
              <li>Promote ethical media practices.</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-8 rounded-xl border border-yellow-100">
            <Award className="h-10 w-10 text-yellow-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Career Outcomes</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Graphic Designer / Art Director</li>
              <li>Video Editor / Motion Designer</li>
              <li>Web & UI/UX Designer</li>
              <li>Photographer / Videographer</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <BookOpen className="h-10 w-10 text-gray-700 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Core Competencies</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Visual Communication</li>
              <li>Digital Storytelling</li>
              <li>Multimedia Production</li>
              <li>Project Management</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;