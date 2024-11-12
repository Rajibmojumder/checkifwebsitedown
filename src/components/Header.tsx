import { Globe, Home, Lightbulb, HelpCircle, AlertTriangle, MessageCircle, Layers } from 'lucide-react';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Logo */}
          <div className="flex justify-center md:justify-start mb-4 md:mb-0">
            <a href="/" className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-purple-600" />
              <span className="text-xl font-bold text-gray-800">CheckIfWebsiteDown</span>
            </a>
          </div>

          {/* Navigation Menu */}
          <div className="w-full md:w-auto">
            <div className="flex flex-wrap justify-center md:justify-end gap-4">
              <a 
                href="https://checkifwebsitedown.com"
                className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition"
              >
                <Home className="h-4 w-4" />
                <span>Home</span>
              </a>
              <button 
                onClick={() => scrollToSection('about')} 
                className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition"
              >
                <Layers className="h-4 w-4" />
                <span>Features</span>
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')} 
                className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition"
              >
                <Lightbulb className="h-4 w-4" />
                <span>How It Works</span>
              </button>
              <button 
                onClick={() => scrollToSection('faq')} 
                className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition"
              >
                <HelpCircle className="h-4 w-4" />
                <span>FAQ</span>
              </button>
              <button 
                onClick={() => scrollToSection('issues')} 
                className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition"
              >
                <AlertTriangle className="h-4 w-4" />
                <span>Issues</span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Contact</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}