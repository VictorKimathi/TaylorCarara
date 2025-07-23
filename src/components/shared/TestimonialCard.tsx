import React from 'react';
interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  image?: string;
}
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  title,
  company,
  image
}) => {
  return <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center mb-4">
        <div className="h-10 mr-4 text-teal-500">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.33333 21.3333C7.86667 21.3333 6.66667 20.8 5.73333 19.7333C4.8 18.6667 4.33333 17.3333 4.33333 15.7333C4.33333 14.0667 4.8 12.5333 5.73333 11.1333C6.66667 9.73333 8 8.66667 9.73333 7.93333L12.6667 10.8667C12.4 11.1333 12.2 11.4667 12.0667 11.8667C11.9333 12.2667 11.8667 12.6667 11.8667 13.0667C11.8667 13.8667 12.1333 14.5333 12.6667 15.0667C13.2 15.6 13.8667 15.8667 14.6667 15.8667V21.3333H9.33333ZM21.3333 21.3333C19.8667 21.3333 18.6667 20.8 17.7333 19.7333C16.8 18.6667 16.3333 17.3333 16.3333 15.7333C16.3333 14.0667 16.8 12.5333 17.7333 11.1333C18.6667 9.73333 20 8.66667 21.7333 7.93333L24.6667 10.8667C24.4 11.1333 24.2 11.4667 24.0667 11.8667C23.9333 12.2667 23.8667 12.6667 23.8667 13.0667C23.8667 13.8667 24.1333 14.5333 24.6667 15.0667C25.2 15.6 25.8667 15.8667 26.6667 15.8667V21.3333H21.3333Z" fill="currentColor" />
          </svg>
        </div>
        <div>
          <h4 className="font-medium text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">
            {title}, {company}
          </p>
        </div>
      </div>
      <blockquote className="text-gray-700 italic">{quote}</blockquote>
    </div>;
};
export default TestimonialCard;