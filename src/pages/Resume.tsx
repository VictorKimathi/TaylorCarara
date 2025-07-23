import React from 'react';
import Button from '../components/shared/Button';
import { DownloadIcon } from 'lucide-react';
const Resume: React.FC = () => {
  return <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Resume</h1>
          <p className="text-xl text-gray-600">
            Finance Content Writer & Financial Literacy Advocate
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <a href="Taylor_Carara_Resume_Finance.docx" download className="inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors">
            <DownloadIcon size={18} className="mr-2" />
            Download PDF
          </a>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Taylor Carara
          </h2>
          <div className="text-gray-600">
            <p>1168 Silas, Decatur, IL 62521</p>
            <p>taylorcarara3@gmail.com • (224) 864-3928</p>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Professional Summary
          </h3>
          <p className="text-gray-700">
            Detail-driven finance feature writer with over three years of
            experience translating complex economic ideas into accessible,
            compelling narratives. Proven ability to write with clarity and
            depth on topics including budgeting, investing, tax strategy, and
            consumer behavior. Versatile across tone and platform, with a knack
            for making technical finance subjects feel human and relevant.
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Core Competencies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-teal-600 rounded-full mr-2"></div>
              <span className="text-gray-700">Financial Content Writing</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-teal-600 rounded-full mr-2"></div>
              <span className="text-gray-700">
                Budgeting & Personal Finance Strategy
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-teal-600 rounded-full mr-2"></div>
              <span className="text-gray-700">
                Digital Publishing (CMS platforms)
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-teal-600 rounded-full mr-2"></div>
              <span className="text-gray-700">AP Style Mastery</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-teal-600 rounded-full mr-2"></div>
              <span className="text-gray-700">
                Longform Articles (2,500+ words)
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-teal-600 rounded-full mr-2"></div>
              <span className="text-gray-700">SEO Optimization</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-teal-600 rounded-full mr-2"></div>
              <span className="text-gray-700">Financial Literacy Advocacy</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-teal-600 rounded-full mr-2"></div>
              <span className="text-gray-700">
                Trend Analysis & Topic Research
              </span>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Professional Experience
          </h3>
          <div className="mb-6">
            <div className="flex flex-col md:flex-row md:justify-between mb-2">
              <h4 className="text-lg font-semibold text-gray-900">
                Freelance Finance Writer
              </h4>
              <div className="text-gray-600">
                MoneyNest & WalletWhiz | Remote | 2021–Present
              </div>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>
                Researched and wrote longform features on budgeting frameworks,
                investment strategies, and credit optimization.
              </li>
              <li>
                Delivered clean copy within CMS, adhering to AP Style and
                optimizing for SEO.
              </li>
              <li>
                Articles regularly featured in Google Discover and syndicated
                across multiple platforms.
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <div className="flex flex-col md:flex-row md:justify-between mb-2">
              <h4 className="text-lg font-semibold text-gray-900">
                Finance Columnist
              </h4>
              <div className="text-gray-600">
                Daily Ledger Dispatch | Remote | 2018–2021
              </div>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>
                Produced weekly columns breaking down legislative changes,
                retirement tools, and debt management trends.
              </li>
              <li>
                Collaborated with editors to maintain voice consistency and
                factual clarity.
              </li>
              <li>
                Earned a loyal readership by simplifying technical finance
                concepts.
              </li>
            </ul>
          </div>
          <div>
            <div className="flex flex-col md:flex-row md:justify-between mb-2">
              <h4 className="text-lg font-semibold text-gray-900">
                Personal Finance Blogger
              </h4>
              <div className="text-gray-600">
                BudgetCraft | Remote | 2016–2018
              </div>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>
                Created reader-focused content that blended personal anecdotes
                with actionable financial tips.
              </li>
              <li>
                Managed editorial calendar and drove organic traffic through
                optimized headlines and metadata.
              </li>
              <li>
                Built community engagement through comments and newsletter
                feedback loops.
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Education
          </h3>
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="text-gray-900">A.A. in Communications</div>
            <div className="text-gray-600">
              Richland Community College | Decatur, IL | 2014–2016
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Technical Skills
          </h3>
          <p className="text-gray-700">
            WordPress, Google Docs, Grammarly, Asana, Trello, Slack, SEO tools
            (Yoast, Clearscope), Google Analytics, Microsoft Office Suite
          </p>
        </div>
      </div>
    </div>;
};
export default Resume;