import { AlertTriangle } from 'lucide-react';

export default function Disclaimer() {
  return (
    <main className="flex-grow py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <AlertTriangle className="h-8 w-8 text-purple-600" />
            <h1 className="text-3xl font-bold">Disclaimer</h1>
          </div>
          
          <article className="prose prose-slate lg:prose-lg max-w-none">
            <p className="text-gray-600 not-prose">Last updated: {new Date().toLocaleDateString()}</p>

            <h2>1. Website Status Accuracy</h2>
            <p>
              While we strive to provide accurate website status information, CheckIfWebsiteDown cannot guarantee:
            </p>
            <ul>
              <li>100% accuracy of status results</li>
              <li>Real-time status updates</li>
              <li>Complete coverage of all possible failure scenarios</li>
            </ul>

            <h2>2. Service Reliability</h2>
            <p>
              Our service is provided "as is" without warranties of any kind. We do not guarantee:
            </p>
            <ul>
              <li>Uninterrupted service availability</li>
              <li>Error-free operation</li>
              <li>Compatibility with all systems and browsers</li>
            </ul>

            <h2>3. Third-Party Content</h2>
            <p>
              Our website includes:
            </p>
            <ul>
              <li>Google Analytics tracking</li>
              <li>Google AdSense advertisements</li>
              <li>Links to external websites</li>
            </ul>
            <p>
              We are not responsible for third-party content, advertisements, or linked websites.
            </p>

            <h2>4. Financial Decisions</h2>
            <p>
              Do not base financial or business decisions solely on our website status results. Always verify critical website status through multiple sources.
            </p>

            <h2>5. Technical Limitations</h2>
            <p>
              Our service may be affected by:
            </p>
            <ul>
              <li>Network connectivity issues</li>
              <li>Geographic location limitations</li>
              <li>Firewall and security configurations</li>
              <li>DNS propagation delays</li>
            </ul>

            <h2>6. Advertisement Disclaimer</h2>
            <p>
              Regarding advertisements on our site:
            </p>
            <ul>
              <li>Ads are provided by Google AdSense</li>
              <li>We do not endorse advertised products or services</li>
              <li>Ad content is controlled by Google's algorithms</li>
              <li>Users interact with ads at their own risk</li>
            </ul>

            <h2>7. Contact Information</h2>
            <p>
              For questions about this disclaimer, contact: <a href="mailto:support@checkifwebsitedown.com">support@checkifwebsitedown.com</a>
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}