import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import { cn } from '../../lib/utils';
import { subscribeToNewsletter } from '../../services/newsletter/index';
import useToastStore from '../../stores/toast';

const socialClasses = {
  facebook: "bg-[#1877F2] hover:shadow-[#1877F2]/30",
  instagram: "bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:shadow-[#DD2A7B]/30",
  linkedin: "bg-[#0A66C2] hover:shadow-[#0A66C2]/30",
  twitter: "bg-black hover:shadow-black/30",
};

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const showToast = useToastStore(state => state.showToast);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || isSubmitting) return;

    try {
      setIsSubmitting(true);
      const result = await subscribeToNewsletter(email.trim());

      if (result.success) {
        showToast('Thank you for subscribing!', 'success');
        setEmail('');
      } else {
        showToast(result.error || 'Subscription failed', 'error');
      }
    } catch {
      showToast('Subscription failed', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-black text-white py-16 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {/* Contact */}
        <div className="md:col-span-2 xl:col-span-1 space-y-5">
          <h3 className="text-xl font-semibold tracking-wide">Contact Us</h3>
          <div className="flex items-start gap-3">
            <MapPin className="h-6 w-6 text-brand-aux1 mt-1" />
            <address className="not-italic text-gray-300 leading-relaxed">
              405 Northfield Ave Ste 201,<br />
              West Orange, NJ 07078
            </address>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-6 w-6 text-brand-aux1" />
            <a href="mailto:info@dumroo.ai" className="text-gray-300 hover:text-brand-aux1 transition-colors">
              info@dumroo.ai
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <nav aria-label="Quick Links" className="space-y-4">
          <h3 className="text-xl font-semibold tracking-wide">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            {['About Us', 'News', 'Blog', 'Gallery', 'Contact'].map(link => (
              <li key={link}>
                <Link
                  to={`/${link.toLowerCase().replace(/\s+/g, '')}`}
                  className="hover:text-brand-aux1 transition-colors"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Resources */}
        <nav aria-label="Resources" className="space-y-4">
          <h3 className="text-xl font-semibold tracking-wide">Resources</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/university" className="hover:text-brand-aux1 transition-colors">Dumroo Academy</Link>
            </li>
            <li>
              <a
                href="https://pioneers.dumroo.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-aux1 transition-colors"
              >
                Pioneer Teachers
              </a>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-brand-aux1 transition-colors">Privacy Policy</Link>
            </li>
            <li>
              <a
                href="https://qtiknlfjwgcshfrcqznk.supabase.co/storage/v1/object/sign/companyassets/Terms%20of%20Service%20v1.0.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-aux1 transition-colors"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="https://help.dumroo.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-aux1 transition-colors"
              >
                Help Center
              </a>
            </li>
          </ul>
        </nav>

        {/* Social & Newsletter */}
        <section className="space-y-6">
          <h3 className="text-xl font-semibold tracking-wide">Connect With Us</h3>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/people/Dumrooai-AI-Ecosystem-for-Education/61571653776425/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "p-2 rounded-lg text-white transition-transform transform hover:scale-110 hover:shadow-lg",
                socialClasses.facebook
              )}
              aria-label="Facebook"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/dumroo.ai"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "p-2 rounded-lg text-white transition-transform transform hover:scale-110 hover:shadow-lg",
                socialClasses.instagram
              )}
              aria-label="Instagram"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/dumroo-ai-ecosystem-for-education"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "p-2 rounded-lg text-white transition-transform transform hover:scale-110 hover:shadow-lg",
                socialClasses.linkedin
              )}
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://x.com/Damroo_AI"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "p-2 rounded-lg text-white transition-transform transform hover:scale-110 hover:shadow-lg",
                socialClasses.twitter
              )}
              aria-label="Twitter"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>

          <form
            onSubmit={handleSubscribe}
            className="mt-6 flex flex-col sm:flex-row gap-3 w-full"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className={cn(
                "flex-1 min-w-0 rounded-lg px-4 py-2 text-gray-900",
  "focus:outline-none focus:ring-2 focus:ring-brand-aux1 focus:border-brand-aux1",
  "placeholder-gray-400"
              )}
              disabled={isSubmitting}
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "bg-brand-aux1 rounded-lg px-5 py-2 text-white font-semibold transition-colors",
                "hover:bg-brand-aux1/90 disabled:opacity-50 disabled:cursor-not-allowed",
                "w-full sm:w-auto"
              )}
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </button>
          </form>


        </section>
      </div>

      <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400 text-sm select-none">
        <p>© {new Date().getFullYear()} Dumroo AI. All rights reserved.</p>
        <div className="mt-3 flex justify-center gap-6">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          <a
            href="https://qtiknlfjwgcshfrcqznk.supabase.co/storage/v1/object/sign/companyassets/Terms%20of%20Service%20v1.0.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
