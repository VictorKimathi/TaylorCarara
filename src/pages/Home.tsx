import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedWork from '../components/home/FeaturedWork';
import Newsletter from '../components/home/Newsletter';
import Testimonials from '../components/home/Testimonials';
import Button from '../components/shared/Button';
const Home: React.FC = () => {
  return <div className="w-full">
      <Hero />
      <FeaturedWork />
      <Testimonials />
      <Newsletter />
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Work Together?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          I'm currently available for freelance projects, content partnerships,
          and consulting opportunities.
        </p>
        <Button href="/contact" size="lg">
          Let's Work Together
        </Button>
      </section>
    </div>;
};
export default Home;