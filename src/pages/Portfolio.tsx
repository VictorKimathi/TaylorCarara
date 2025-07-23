import React, { useState } from 'react';
import ProjectCard from '../components/shared/ProjectCard';
const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const portfolioProjects = [{
    title: '5 Budget Strategies That Actually Work',
    excerpt: 'Practical budgeting approaches that fit real-life spending habits and financial goals.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    publication: 'MoneyNest',
    date: 'June 12, 2023',
    wordCount: 1200,
    readingTime: 6,
    metrics: '15K+ Views, 2K+ Shares',
    tags: ['Budgeting', 'Personal Finance'],
    link: '/portfolio/budget-strategies',
    category: 'personal-finance'
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
    link: '/portfolio/investing-basics',
    category: 'investing'
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
    link: '/portfolio/freelancer-taxes',
    category: 'taxes'
  }, {
    title: 'The Psychology of Spending: Why We Buy What We Buy',
    excerpt: 'An exploration of the emotional and psychological factors that influence our purchasing decisions.',
    image: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    publication: 'WalletWhiz',
    date: 'March 22, 2023',
    wordCount: 2200,
    readingTime: 11,
    metrics: '22K+ Views, 4.5K+ Shares',
    tags: ['Behavioral Finance', 'Psychology'],
    link: '/portfolio/psychology-of-spending',
    category: 'behavioral-finance'
  }, {
    title: 'Emergency Funds: How Much Do You Really Need?',
    excerpt: 'A data-driven approach to determining the right size emergency fund for your specific situation.',
    image: 'https://images.unsplash.com/photo-1579621970590-9d624316781b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    publication: 'MoneyNest',
    date: 'February 8, 2023',
    wordCount: 1600,
    readingTime: 8,
    metrics: '19K+ Views, 3.1K+ Shares',
    tags: ['Emergency Fund', 'Savings'],
    link: '/portfolio/emergency-funds',
    category: 'personal-finance'
  }, {
    title: 'Credit Score Myths Debunked',
    excerpt: 'Separating fact from fiction about what really impacts your credit score and how to improve it.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    publication: 'WalletWhiz',
    date: 'January 17, 2023',
    wordCount: 1900,
    readingTime: 10,
    metrics: '25K+ Views, 5.2K+ Shares',
    tags: ['Credit Score', 'Personal Finance'],
    link: '/portfolio/credit-score-myths',
    category: 'personal-finance'
  }, {
    title: 'Retirement Planning in Your 30s: What You Need to Know',
    excerpt: 'Strategic approaches to retirement planning for millennials facing unique financial challenges.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    publication: 'MoneyNest',
    date: 'December 5, 2022',
    wordCount: 2100,
    readingTime: 11,
    metrics: '17K+ Views, 2.8K+ Shares',
    tags: ['Retirement', 'Investing'],
    link: '/portfolio/retirement-30s',
    category: 'investing'
  }, {
    title: 'How to Talk About Money With Your Partner',
    excerpt: 'Practical strategies for navigating financial conversations in relationships to build trust and alignment.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    publication: 'WalletWhiz',
    date: 'November 14, 2022',
    wordCount: 1700,
    readingTime: 9,
    metrics: '28K+ Views, 6.3K+ Shares',
    tags: ['Relationships', 'Money Conversations'],
    link: '/portfolio/money-relationships',
    category: 'behavioral-finance'
  }, {
    title: 'Student Loan Repayment Strategies That Actually Work',
    excerpt: 'Effective approaches to managing and eliminating student debt while still building wealth.',
    image: 'https://images.unsplash.com/photo-1554224155-1696413565d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    publication: 'MoneyNest',
    date: 'October 22, 2022',
    wordCount: 2300,
    readingTime: 12,
    metrics: '31K+ Views, 7.2K+ Shares',
    tags: ['Student Loans', 'Debt Management'],
    link: '/portfolio/student-loan-strategies',
    category: 'personal-finance'
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