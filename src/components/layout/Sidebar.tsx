import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, UserIcon, BookOpenIcon, BriefcaseIcon, HeartIcon, FileTextIcon, MailIcon, FileIcon } from 'lucide-react';
const Sidebar: React.FC = () => {
  const navItems = [{
    path: '/',
    label: 'Home',
    icon: <HomeIcon size={20} />
  }, {
    path: '/about',
    label: 'About',
    icon: <UserIcon size={20} />
  }, {
    path: '/portfolio',
    label: 'Portfolio',
    icon: <BookOpenIcon size={20} />
  }, {
    path: '/services',
    label: 'Services',
    icon: <BriefcaseIcon size={20} />
  }, {
    path: '/testimonials',
    label: 'Testimonials',
    icon: <HeartIcon size={20} />
  }, {
    path: '/blog',
    label: 'Blog',
    icon: <FileTextIcon size={20} />
  }, {
    path: '/contact',
    label: 'Contact',
    icon: <MailIcon size={20} />
  }, {
    path: '/resume',
    label: 'Resume',
    icon: <FileIcon size={20} />
  }];
  return <aside className="w-full md:w-1/5 bg-white border-r border-gray-200 md:h-screen md:sticky md:top-0">
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-xl font-bold text-gray-900">Taylor Carara</h1>
          <p className="text-sm text-gray-600">
            Finance Content Creator & Writer
          </p>
        </div>
        <nav>
          <ul className="space-y-2">
            {navItems.map(item => <li key={item.path}>
                <NavLink to={item.path} className={({
              isActive
            }) => `flex items-center px-4 py-2 rounded-md transition-colors ${isActive ? 'bg-teal-50 text-teal-700' : 'text-gray-700 hover:bg-gray-100'}`}>
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </NavLink>
              </li>)}
          </ul>
        </nav>
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-center text-gray-500 font-medium">
            Clarity Builds Confidence
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-teal-600">
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-teal-600">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="mailto:taylorcarara3@gmail.com" className="text-gray-500 hover:text-teal-600">
              <span className="sr-only">Email</span>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </aside>;
};
export default Sidebar;