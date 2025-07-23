import React from 'react';
import Button from '../components/shared/Button';
const About: React.FC = () => {
  const skills = [{
    name: 'Financial Writing & Journalism',
    level: 95
  }, {
    name: 'Personal Finance Strategy',
    level: 90
  }, {
    name: 'Content Strategy & SEO',
    level: 85
  }, {
    name: 'Research & Analysis',
    level: 85
  }, {
    name: 'Digital Publishing',
    level: 80
  }, {
    name: 'Financial Literacy Education',
    level: 90
  }];
  return <div className="max-w-4xl mx-auto">
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="w-full md:w-1/3">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Taylor Carara" className="rounded-lg w-full h-auto shadow-md" />
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-gray-700 mb-4">
              I'm Taylor Carara, a finance content writer with over three years
              of experience transforming complex economic concepts into
              accessible, engaging stories. My journey began with a simple
              belief: everyone deserves to understand their money, and the right
              words can bridge the gap between confusion and confidence.
            </p>
            <p className="text-gray-700 mb-4">
              I've contributed to publications like MoneyNest and WalletWhiz,
              with my work reaching thousands through Google Discover and
              national syndications. My specialty lies in taking intimidating
              financial topics—from tax optimization to investment
              strategies—and breaking them down into actionable insights that
              real people can use to improve their financial lives.
            </p>
            <p className="text-gray-700">
              When I'm not crafting articles, I'm researching the latest trends
              in personal finance, testing budgeting apps, or diving deep into
              economic reports to find the stories that matter most to everyday
              Americans. My approach combines journalistic rigor with genuine
              empathy, because I believe the best financial advice comes from
              understanding both the numbers and the human story behind them.
            </p>
          </div>
        </div>
      </section>
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Professional Journey
        </h2>
        <div className="relative border-l-2 border-teal-500 pl-8 space-y-8">
          <div className="relative">
            <div className="absolute -left-10 mt-1.5 h-5 w-5 rounded-full border-4 border-teal-500 bg-white"></div>
            <h3 className="text-xl font-bold text-gray-900">
              Freelance Finance Writer
            </h3>
            <p className="text-gray-600 mb-2">
              MoneyNest & WalletWhiz | 2021–Present
            </p>
            <p className="text-gray-700">
              Creating in-depth financial guides and analysis pieces that help
              readers make informed decisions about their money. Specializing in
              budgeting strategies, investment basics, and financial literacy.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -left-10 mt-1.5 h-5 w-5 rounded-full border-4 border-teal-500 bg-white"></div>
            <h3 className="text-xl font-bold text-gray-900">
              Finance Columnist
            </h3>
            <p className="text-gray-600 mb-2">
              Daily Ledger Dispatch | 2018–2021
            </p>
            <p className="text-gray-700">
              Wrote a weekly column on personal finance topics, breaking down
              complex economic news into practical advice for readers. Developed
              a loyal readership through clear explanations and actionable tips.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -left-10 mt-1.5 h-5 w-5 rounded-full border-4 border-teal-500 bg-white"></div>
            <h3 className="text-xl font-bold text-gray-900">
              Personal Finance Blogger
            </h3>
            <p className="text-gray-600 mb-2">BudgetCraft | 2016–2018</p>
            <p className="text-gray-700">
              Founded and managed a personal finance blog focused on helping
              young adults develop strong financial habits. Created weekly
              content on budgeting, debt management, and saving strategies.
            </p>
          </div>
        </div>
      </section>
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Skills & Expertise
        </h2>
        <div className="space-y-4">
          {skills.map((skill, index) => <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-700">{skill.name}</span>
                <span className="text-teal-600">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-teal-600 h-2.5 rounded-full" style={{
              width: `${skill.level}%`
            }}></div>
              </div>
            </div>)}
        </div>
      </section>
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Education & Tools
        </h2>
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Education</h3>
          <p className="text-gray-700">
            A.A. in Communications, Richland Community College, Decatur, IL
            (2016)
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap gap-2">
            {['WordPress', 'Google Workspace', 'Grammarly', 'Yoast SEO', 'Clearscope', 'Google Analytics', 'Asana', 'Trello', 'Slack'].map((tool, index) => <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                {tool}
              </span>)}
          </div>
        </div>
      </section>
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Why I Chose Finance Writing
        </h2>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
          <p className="text-gray-700 mb-4">
            My journey into finance writing began with my own struggles to
            understand money. Growing up in a household where financial literacy
            wasn't taught, I made plenty of mistakes with my finances in early
            adulthood.
          </p>
          <p className="text-gray-700 mb-4">
            The turning point came when I realized that most financial advice
            seemed designed to confuse rather than clarify. Jargon-filled
            articles and condescending tones made learning about money feel
            inaccessible.
          </p>
          <p className="text-gray-700">
            I decided to become the writer I needed when I was learning—someone
            who could translate complex concepts into plain language, who
            understood that money isn't just about numbers but about values,
            goals, and real life. Every article I write aims to give someone the
            clarity I once desperately needed.
          </p>
        </div>
      </section>
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Fun Facts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              When I'm not writing...
            </h3>
            <p className="text-gray-700">
              You'll find me hiking the trails around Decatur with my rescue
              dog, Penny, or experimenting with new recipes in my kitchen. I'm
              an amateur bread baker with more enthusiasm than skill!
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Current obsession
            </h3>
            <p className="text-gray-700">
              I'm currently fascinated by the psychology of spending and how our
              emotions influence our financial decisions. I'm reading everything
              I can find on behavioral economics.
            </p>
          </div>
        </div>
      </section>
      <div className="text-center mb-16">
        <Button href="/contact" size="lg">
          Let's Connect
        </Button>
      </div>
    </div>;
};
export default About;