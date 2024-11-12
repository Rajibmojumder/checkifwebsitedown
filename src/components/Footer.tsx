import { Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 text-sm">
              CheckIfWebsiteDown.com provides reliable website monitoring tools to help you track and maintain your online presence effectively.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white text-sm transition">Features</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-white text-sm transition">How It Works</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white text-sm transition">FAQ</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white text-sm transition">Contact</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-white text-sm transition">Terms of Service</a>
              </li>
              <li>
                <a href="/disclaimer" className="text-gray-400 hover:text-white text-sm transition">Disclaimer</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="text-gray-400 text-sm space-y-2">
              <p>Email: support@checkifwebsitedown.com</p>
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5" />
                <span>CheckIfWebsiteDown.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} CheckIfWebsiteDown. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}