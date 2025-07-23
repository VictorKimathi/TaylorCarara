import React from 'react';
import ProjectCard from '../shared/ProjectCard';
import Button from '../shared/Button';
const FeaturedWork: React.FC = () => {
  const featuredProjects = [{
    title: '5 Budget Strategies That Actually Work',
    excerpt: 'Practical budgeting approaches that fit real-life spending habits and financial goals.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    publication: 'MoneyNest',
    date: 'June 12, 2023',
    wordCount: 1200,
    readingTime: 6,
    metrics: '15K+ Views, 2K+ Shares',
    tags: ['Budgeting', 'Personal Finance'],
    link: '/portfolio/budget-strategies'
  }, {
    title: 'Investing Basics: Start Building Wealth Today',
    excerpt: "A beginner's guide to investment options that can help you grow your money with minimal risk.",
    image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    publication: 'WalletWhiz',
    date: 'May 3, 2023',
    wordCount: 1500,
    readingTime: 8,
    metrics: '12K+ Views, 1.8K+ Shares',
    tags: ['Investing', 'Wealth Building'],
    link: '/portfolio/investing-basics'
  }, {
    title: 'Tax Planning Strategies for Freelancers',
    excerpt: 'How self-employed professionals can optimize their tax situation and avoid common pitfalls.',
    image: 'https://images.unsplash.com/photo-1586486855514-8c633cc8b056?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    publication: 'MoneyNest',
    date: 'April 15, 2023',
    wordCount: 1800,
    readingTime: 9,
    metrics: '18K+ Views, 3.2K+ Shares',
    tags: ['Taxes', 'Freelancing'],
    link: '/portfolio/freelancer-taxes'
  }];
  return <section className="py-12 bg-gray-50">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Work</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A selection of my most impactful finance articles that have helped
          thousands make smarter money decisions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProjects.map((project, index) => <ProjectCard key={index} {...project} />)}
      </div>
      <div className="mt-12 text-center">
        <Button href="/portfolio" size="lg">
          View All Work
        </Button>
      </div>
    </section>;
};
export default FeaturedWork;