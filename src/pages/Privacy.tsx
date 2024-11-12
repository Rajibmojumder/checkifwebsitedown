import { Shield } from 'lucide-react';

export default function Privacy() {
  return (
    <main className="flex-grow py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="h-8 w-8 text-purple-600" />
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
          </div>
          
          <article className="prose prose-slate lg:prose-lg max-w-none">
            <p className="text-gray-600 not-prose">Last updated: {new Date().toLocaleDateString()}</p>

            <h2>1. Introduction</h2>
            <p>
              CheckIfWebsiteDown ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit checkifwebsitedown.com.
            </p>

            <h2>2. Information We Collect</h2>
            <h3>2.1 Information You Provide</h3>
            <p>When using our website checker tool, we collect:</p>
            <ul>
              <li>URLs you submit for checking</li>
              <li>Email addresses when you contact support</li>
            </ul>

            <h3>2.2 Automatically Collected Information</h3>
            <p>We automatically collect certain information through:</p>
            <ul>
              <li>Google Analytics: Collects anonymous usage data including:</li>
              <ul>
                <li>IP address (anonymized)</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Pages visited</li>
                <li>Time and duration of visits</li>
              </ul>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <ul>
              <li>To provide and maintain our website checking service</li>
              <li>To analyze website usage and improve our services</li>
              <li>To respond to your inquiries and support requests</li>
              <li>To detect and prevent technical issues</li>
            </ul>

            <h2>4. Google Analytics & AdSense</h2>
            <p>
              We use Google Analytics to analyze website traffic and Google AdSense to display advertisements. These services use cookies and may collect data such as:
            </p>
            <ul>
              <li>Usage patterns and preferences</li>
              <li>Device information</li>
              <li>Location data</li>
              <li>Ad interaction data</li>
            </ul>
            <p>
              You can opt-out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout">Google Analytics Opt-out Browser Add-on</a>.
            </p>

            <h2>5. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your data. However, no method of transmission over the internet is 100% secure.
            </p>

            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Request correction of your data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request data portability</li>
            </ul>

            <h2>7. Contact Us</h2>
            <p>
              For privacy-related questions, please contact us at: <a href="mailto:support@checkifwebsitedown.com">support@checkifwebsitedown.com</a>
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}