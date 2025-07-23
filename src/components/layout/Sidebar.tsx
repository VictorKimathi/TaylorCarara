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
    path: '/testimonials',
    label: 'Testimonials',
    icon: <HeartIcon size={20} />
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
          
        </div>
      </div>
    </aside>;
};
export default Sidebar;