import React from 'react';
import Button from './Button';
interface ProjectCardProps {
  title: string;
  subtitle?: string;
  excerpt: string;
  image: string;
  publication: string;
  date: string;
  wordCount?: number;
  readingTime?: number;
  metrics?: string;
  tags?: string[];
  link: string;
}
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  excerpt,
  image,
  publication,
  date,
  wordCount,
  readingTime,
  metrics,
  tags,
  link
}) => {
  return <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span>{publication}</span>
          <span className="mx-2">•</span>
          <span>{date}</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
        {subtitle && <p className="text-sm text-gray-600 mb-2">{subtitle}</p>}
        <p className="text-gray-700 mb-4 flex-grow">{excerpt}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags && tags.map((tag, index) => <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                {tag}
              </span>)}
        </div>
        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
          {wordCount && <span>{wordCount} words</span>}
          {readingTime && <span>{readingTime} min read</span>}
        </div>
        {metrics && <p className="text-sm text-teal-600 mb-4">{metrics}</p>}
        <Button href={link} variant="outline" size="sm" className="mt-auto">
          Read Full Article
        </Button>
      </div>
    </div>;
};
export default ProjectCard;