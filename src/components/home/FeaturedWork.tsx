import React from 'react';
import ProjectCard from '../shared/ProjectCard';
import Button from '../shared/Button';
const FeaturedWork: React.FC = () => {
  const featuredProjects = [{
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
