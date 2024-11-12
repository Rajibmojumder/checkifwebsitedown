import { FileText } from 'lucide-react';

export default function Terms() {
  return (
    <main className="flex-grow py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="h-8 w-8 text-purple-600" />
            <h1 className="text-3xl font-bold">Terms of Service</h1>
          </div>
          
          <article className="prose prose-slate lg:prose-lg max-w-none">
            <p className="text-gray-600 not-prose">Last updated: {new Date().toLocaleDateString()}</p>

            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing checkifwebsitedown.com, you agree to these Terms of Service. If you disagree with any part of these terms, please do not use our service.
            </p>

            <h2>2. Service Description</h2>
            <p>
              CheckIfWebsiteDown provides a website status checking tool that allows users to verify if a website is accessible or experiencing issues.
            </p>

            <h2>3. User Responsibilities</h2>
            <ul>
              <li>Use the service responsibly and legally</li>
              <li>Do not attempt to disrupt or overwhelm our servers</li>
              <li>Do not use the service for malicious purposes</li>
              <li>Respect the privacy and rights of others</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>
              All content, features, and functionality on checkifwebsitedown.com are owned by us and protected by international copyright laws.
            </p>

            <h2>5. Advertising and Third-Party Services</h2>
            <p>
              Our service includes Google AdSense advertisements. By using our service, you agree to:
            </p>
            <ul>
              <li>The display of targeted advertisements</li>
              <li>Cookie usage for advertising purposes</li>
              <li>Third-party advertiser terms and conditions</li>
            </ul>

            <h2>6. Limitation of Liability</h2>
            <p>
              We provide this service "as is" without warranties. We are not liable for:
            </p>
            <ul>
              <li>Service interruptions or downtime</li>
              <li>Accuracy of website status results</li>
              <li>Indirect or consequential damages</li>
              <li>Loss of data or profits</li>
            </ul>

            <h2>7. Service Modifications</h2>
            <p>
              We reserve the right to modify or discontinue our service at any time without notice.
            </p>

            <h2>8. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with applicable laws.
            </p>

            <h2>9. Contact Information</h2>
            <p>
              For questions about these Terms, contact us at: <a href="mailto:support@checkifwebsitedown.com">support@checkifwebsitedown.com</a>
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}