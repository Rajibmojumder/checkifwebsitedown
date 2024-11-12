import { Routes, Route } from 'react-router-dom';
import { Globe2, Zap, Shield, Users, CheckCircle2, HelpCircle, AlertTriangle, Wifi, Server, Clock } from 'lucide-react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import StatusChecker from './components/StatusChecker';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Disclaimer from './pages/Disclaimer';

function HomePage() {
  return (
    <>
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-700 via-blue-600 to-purple-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Check If A Website Is Down
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-12 max-w-2xl mx-auto">
              Instantly verify if a website is accessible or experiencing issues. Fast, free, and reliable.
            </p>
            
            <StatusChecker />
          </div>
        </section>

        {/* Features Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Use Our Tool?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Globe2,
                  title: "Global Checking",
                  description: "Check website status from multiple locations worldwide"
                },
                {
                  icon: Zap,
                  title: "Real-Time Results",
                  description: "Get instant feedback on website accessibility"
                },
                {
                  icon: Shield,
                  title: "Secure & Private",
                  description: "No data collection or storage of your checks"
                },
                {
                  icon: Users,
                  title: "User Friendly",
                  description: "Simple interface for quick status checks"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <feature.icon className="h-12 w-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Server,
                  title: "Multiple Server Checks",
                  description: "We test your website's availability using multiple methods and locations to ensure accurate results."
                },
                {
                  icon: Clock,
                  title: "Response Time Analysis",
                  description: "We measure server response times and analyze performance metrics to give you detailed insights."
                },
                {
                  icon: Wifi,
                  title: "Real-time Monitoring",
                  description: "Get instant status updates and historical uptime data to track website performance over time."
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section id="faq" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "How do I know if a website is really down?",
                  answer: "Our tool performs multiple checks from different locations to verify if a website is truly down. We test server response, DNS resolution, and HTTP status to provide accurate results."
                },
                {
                  question: "What does 'Website is down' mean?",
                  answer: "When a website is 'down', it means it's not accessible to users. This could be due to server issues, maintenance, network problems, or other technical difficulties."
                },
                {
                  question: "Why might a website be down only for me?",
                  answer: "A website might appear down only for you due to local issues like internet connection problems, DNS cache, browser cache, or regional network restrictions."
                },
                {
                  question: "How often should I check a website's status?",
                  answer: "For critical websites, we recommend checking every few minutes during suspected downtime. Our tool maintains a history of checks to help you track patterns."
                },
                {
                  question: "What do the response times mean?",
                  answer: "Response time indicates how long it takes for a website's server to respond to requests. Lower times (< 500ms) are excellent, while higher times (> 2s) might indicate performance issues."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start gap-4">
                    <HelpCircle className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Issues */}
        <section id="issues" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Common Website Issues</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: AlertTriangle,
                  title: "Server Errors",
                  description: "5xx errors indicate server-side problems that need attention from the website's technical team."
                },
                {
                  icon: Shield,
                  title: "SSL Certificate Issues",
                  description: "Invalid or expired SSL certificates can make websites appear unsafe or inaccessible."
                },
                {
                  icon: CheckCircle2,
                  title: "DNS Problems",
                  description: "Domain name system issues can prevent users from reaching otherwise functional websites."
                }
              ].map((issue, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <issue.icon className="h-8 w-8 text-purple-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{issue.title}</h3>
                  <p className="text-gray-600">{issue.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Need Help?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Having trouble with our website status checker? Or want to suggest a feature?
              We're here to help! Contact our support team for assistance.
            </p>
            <a
              href="mailto:support@checkifwebsitedown.com"
              className="inline-block mt-8 px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
            >
              Contact Support
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
      <Footer />
    </div>
  );
}