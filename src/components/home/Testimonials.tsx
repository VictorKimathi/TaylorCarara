import React, { useEffect, useState } from 'react';
import TestimonialCard from '../shared/TestimonialCard';
const Testimonials: React.FC = () => {
  const testimonials = [{
    quote: 'Taylor has a unique ability to break down complex financial concepts into actionable advice that our readers love. Her articles consistently rank among our most-read content.',
    name: 'Sarah Johnson',
    title: 'Editor-in-Chief',
    company: 'MoneyNest'
  }, {
    quote: "Working with Taylor transformed our finance section. She delivers clean copy that requires minimal editing and truly connects with our audience's needs.",
    name: 'Michael Chen',
    title: 'Content Director',
    company: 'WalletWhiz'
  }, {
    quote: "Taylor's budgeting article changed how I manage my finances. For the first time, I feel in control of my money rather than the other way around.",
    name: 'Jessica Rivera',
    title: 'Reader',
    company: 'Freelance Designer'
  }, {
    quote: "The clarity in Taylor's writing is remarkable. She manages to make tax planning not just understandable but actually interesting — no small feat!",
    name: 'Robert Patel',
    title: 'Financial Advisor',
    company: 'Wealth Partners LLC'
  }];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);
  return <section className="py-16 bg-white">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          What People Say
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Feedback from clients, editors, and readers about my work and its
          impact.
        </p>
      </div>
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out" style={{
          transform: `translateX(-${currentIndex * 100}%)`
        }}>
            {testimonials.map((testimonial, index) => <div key={index} className="w-full flex-shrink-0 px-4">
                <TestimonialCard {...testimonial} />
              </div>)}
          </div>
        </div>
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => <button key={index} className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-teal-600' : 'bg-gray-300'}`} onClick={() => setCurrentIndex(index)}>
              <span className="sr-only">Testimonial {index + 1}</span>
            </button>)}
        </div>
      </div>
    </section>;
};
export default Testimonials;