import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Video, PenTool, MonitorPlay } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gray-900/70 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale')" }}
        ></div>

        <div className="relative z-20 max-w-4xl mx-auto text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Create. Innovate. <span className="text-sti-yellow">Inspire.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Welcome to the Bachelor of Multimedia Arts program at STI College Calamba. 
            Where creativity meets technology to shape the future of digital media.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about" className="px-8 py-3 bg-sti-blue hover:bg-blue-700 text-white font-bold rounded-full transition-all transform hover:scale-105 flex items-center justify-center">
              Explore the Program <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/contact" className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-sti-blue text-white font-bold rounded-full transition-all flex items-center justify-center">
              Enroll Now
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose BMMA at STI Calamba?</h2>
            <p className="mt-4 text-gray-600">We provide industry-standard training for the next generation of artists.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-shadow border-t-4 border-sti-blue">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-sti-blue">
                <Video className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Video Production</h3>
              <p className="text-gray-600">Master the art of storytelling through lens, light, and sound in our state-of-the-art production modules.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-shadow border-t-4 border-sti-yellow">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-6 text-yellow-600">
                <PenTool className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Graphic Design</h3>
              <p className="text-gray-600">Develop a strong visual language and master industry tools like Adobe Creative Suite for print and web.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-shadow border-t-4 border-sti-blue">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-sti-blue">
                <MonitorPlay className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Animation & VFX</h3>
              <p className="text-gray-600">Bring characters and worlds to life using 2D/3D animation techniques and visual effects compositing.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Latest Showcase Teaser */}
      <section className="py-20 bg-gray-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12">
               <div className="md:w-1/2">
                  <img src="https://picsum.photos/800/600?random=1" alt="Student Work" className="rounded-lg shadow-2xl" />
               </div>
               <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Student Spotlight</h2>
                  <p className="text-lg text-gray-600 mb-6">
                     Our students consistently produce award-winning work. From local film festivals to national design competitions, BMMA students from STI Calamba are making their mark.
                  </p>
                  <Link to="/events" className="text-sti-blue font-bold hover:text-blue-800 inline-flex items-center">
                     View Student Gallery <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;