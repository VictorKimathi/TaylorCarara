import React, { useEffect, useState } from 'react';
import Button from '../shared/Button';
const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Finance Journalism → Budgeting Strategy → Financial Literacy Advocacy';
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prevText => prevText + fullText[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);
  return <section className="py-16 md:py-24 bg-white">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hey, I'm Taylor Carara
          </h1>
          <div className="h-8 mb-4">
            <p className="text-xl text-teal-600 font-medium">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
          <p className="text-xl text-gray-700 mb-6">
            Detail-driven finance writer who turns numbers into stories — one
            clear idea at a time.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <div className="px-4 py-2 bg-gray-100 rounded-full text-sm">
              3+ Years Experience
            </div>
            <div className="px-4 py-2 bg-gray-100 rounded-full text-sm">
              500+ Articles Published
            </div>
            <div className="px-4 py-2 bg-gray-100 rounded-full text-sm">
              50K+ Readers Reached
            </div>
          </div>
          <div className="mt-6 space-x-4">
            <Button href="/portfolio" size="lg">
              View My Work
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Let's Work Together
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full blur opacity-75"></div>
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Taylor Carara" className="relative rounded-full w-64 h-64 object-cover border-4 border-white" />
          </div>
        </div>
      </div>
      <div className="mt-12 text-center">
        <p className="text-2xl text-teal-600 font-medium italic">
          "Clarity Builds Confidence"
        </p>
      </div>
    </section>;
};
export default Hero;