import React from 'react';
import TestimonialCard from '../components/shared/TestimonialCard';
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
  }, {
    quote: "Taylor's articles on retirement planning have been instrumental in helping our clients understand complex strategies. I regularly share her work in our client newsletters.",
    name: 'Eleanor Wright',
    title: 'Senior Financial Planner',
    company: 'Horizon Wealth Management'
  }, {
    quote: "As someone who's always been intimidated by investing, Taylor's step-by-step guides made me confident enough to finally start. Her writing is like having a knowledgeable friend explain things over coffee.",
    name: 'Marcus Johnson',
    title: 'Reader',
    company: 'Software Engineer'
  }, {
    quote: 'Taylor has a gift for making financial content engaging without sacrificing accuracy. Her pieces consistently outperform others on our platform by 40% in terms of read-through rates.',
    name: 'Diana Lopez',
    title: 'Content Strategist',
    company: 'FinancialBytes'
  }, {
    quote: "I've worked with many finance writers, but Taylor stands out for her research depth and ability to anticipate reader questions. She doesn't just explain concepts—she builds reader confidence.",
    name: 'James Wilson',
    title: 'Editorial Director',
    company: 'Money Matters Magazine'
  }];
  return <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Testimonials</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          What editors, clients, and readers have to say about my work and its
          impact.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => <TestimonialCard key={index} {...testimonial} />)}
      </div>
    </div>;
};
export default Testimonials;