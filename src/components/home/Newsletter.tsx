import React, { useState } from 'react';
import Button from '../shared/Button';
const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('');
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };
  return <section className="py-16 bg-teal-600 text-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Get Financial Insights Delivered
        </h2>
        <p className="mb-8 text-teal-50">
          Join my newsletter for practical finance tips, market insights, and
          strategies to improve your financial wellbeing. No fluff, just
          valuable content.
        </p>
        {isSuccess ? <div className="bg-teal-700 p-4 rounded-lg mb-6">
            <p className="font-medium">
              Thanks for subscribing! Check your inbox soon.
            </p>
          </div> : <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 max-w-lg mx-auto">
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email address" required className="flex-grow px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-300" />
            <Button type="submit" variant="secondary" className="md:w-auto" disabled={isSubmitting}>
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>}
        <p className="mt-4 text-sm text-teal-100">
          I respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>;
};
export default Newsletter;