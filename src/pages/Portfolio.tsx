import React, { useState } from 'react';
import ProjectCard from '../components/shared/ProjectCard';
const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const portfolioProjects = [{
    title: 'How to Build Generational Wealth Without a Six-Figure Income',
    excerpt: 'Generational wealth isn’t just for high earners. With consistent habits, clear goals, and smart money choices, families can build and pass on financial security regardless of income level. This isn’t about shortcuts or sudden windfalls. It’s about using what you have intentionally and making everyday decisions that compound over time to benefit future generations.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'June 12, 2025',
    wordCount: 1730,
    readingTime: 7,
    tags: ['Generational Wealth', 'Smart Budgeting'],
    href: 'How_to_Build.pdf',
    category: 'Wealth Building'
  }, {
    title: 'How to Set Up a Money Club with Friends for Financial Accountability',
    excerpt: "Improving your finances often requires more than just personal discipline. A money club gives you a structured way to stay accountable by meeting regularly with friends who share similar goals. Instead of working in isolation, you get support, fresh ideas, and motivation to stay consistent. It becomes easier to stick to saving plans, reduce debt, or learn new strategies when you know others are doing the same alongside you.",
    image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'May 3, 2025',
    wordCount: 1420,
    readingTime: 6,
    tags: ['Money Clubs', 'Financial Accountability'],
    href: 'How_to_Set_Up.pdf',
    category: 'Financial Wellness'
  }, {
    title: 'Cutting Through Online Clutter to Save More Money',
    excerpt: 'Online clutter makes it harder to manage money effectively. Constant ads, promotional emails, and social media recommendations can lead to spending on things you didn’t plan for. And the more you engage with this content, the more you’re exposed to targeted marketing that encourages impulse purchases. These distractions may seem minor, but over time they can seriously affect your ability to stick to a budget.',
    image: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'July 22, 2025',
    wordCount: 1040,
    readingTime: 4,
    tags: ['Digital Spending Habits', 'Impulse Buying Prevention'],
    href: 'Cutting_Through_Online.pdf',
    category: 'Personal Finance'
  }];
  const filters = [{
    id: 'all',
    label: 'All Articles'
  }, {
    id: 'personal-finance',
    label: 'Personal Finance'
  }, {
    id: 'investing',
    label: 'Investing'
  }, {
    id: 'taxes',
    label: 'Taxes'
  }, {
    id: 'behavioral-finance',
    label: 'Behavioral Finance'
  }];
  const filteredProjects = activeFilter === 'all' ? portfolioProjects : portfolioProjects.filter(project => project.category === activeFilter);
  return <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">My Portfolio</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A collection of my finance writing across various publications,
          topics, and formats.
        </p>
      </div>
      <div className="mb-8 flex flex-wrap justify-center gap-4">
        {filters.map(filter => <button key={filter.id} onClick={() => setActiveFilter(filter.id)} className={`px-4 py-2 rounded-full transition-colors ${activeFilter === filter.id ? 'bg-teal-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            {filter.label}
          </button>)}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => <ProjectCard key={index} {...project} />)}
      </div>
    </div>;
};
export default Portfolio;
