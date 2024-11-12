import { useState, useEffect } from 'react';
import { CheckCircle, XCircle, Clock } from 'lucide-react';
import { getTopSites, getLatestChecked, getDownSites } from '../utils/siteHistory';

interface Website {
  name: string;
  url: string;
  status: 'up' | 'down';
  timestamp: Date;
  responseTime: number;
}

function formatTimeAgo(date: Date): string {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  
  if (seconds < 60) return `${seconds} secs ago`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)} mins ago`;
  return `${Math.floor(seconds / 3600)} hour${Math.floor(seconds / 3600) === 1 ? '' : 's'} ${Math.floor((seconds % 3600) / 60)} mins ago`;
}

function StatusCard({ title, websites, onSiteClick }: { 
  title: string; 
  websites: Website[];
  onSiteClick: (url: string) => void;
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className={`p-4 ${
        title === 'Down Right Now' 
          ? 'bg-red-500' 
          : title === 'Top Websites'
            ? 'bg-blue-500'
            : 'bg-green-500'
      } text-white`}>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <div className="divide-y divide-gray-100">
        {websites.length === 0 ? (
          <div className="p-4 text-gray-500 text-center">
            No websites checked yet
          </div>
        ) : (
          websites.map((site, index) => (
            <div 
              key={`${site.url}-${site.timestamp.getTime()}`}
              className="p-4 hover:bg-gray-50 transition-colors cursor-pointer"
              onClick={() => onSiteClick(site.url)}
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center space-x-2">
                  {site.status === 'up' ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500" />
                  )}
                  <span className="font-medium">{site.name}</span>
                </div>
                <span className="text-sm text-gray-500">
                  {site.responseTime}ms
                </span>
              </div>
              <div className="flex items-center text-sm text-gray-500 ml-7">
                <Clock className="h-4 w-4 mr-1" />
                {formatTimeAgo(site.timestamp)}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export function StatusDashboard() {
  const [topSites, setTopSites] = useState<Website[]>([]);
  const [latestSites, setLatestSites] = useState<Website[]>([]);
  const [downSites, setDownSites] = useState<Website[]>([]);

  useEffect(() => {
    const updateSites = () => {
      setTopSites(getTopSites());
      setLatestSites(getLatestChecked());
      setDownSites(getDownSites());
    };

    updateSites();
    const interval = setInterval(updateSites, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSiteClick = (url: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Find the input and button elements
    const input = document.querySelector('input[type="text"]') as HTMLInputElement;
    if (!input) return;

    // Update input value and trigger React's onChange
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      "value"
    )?.set;

    if (nativeInputValueSetter) {
      nativeInputValueSetter.call(input, url);
      input.dispatchEvent(new Event('input', { bubbles: true }));
      
      // Find and click the check button after a short delay
      setTimeout(() => {
        const checkButton = document.querySelector('button:not([disabled])') as HTMLButtonElement;
        if (checkButton) {
          checkButton.click();
        }
      }, 0);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatusCard title="Top Websites" websites={topSites} onSiteClick={handleSiteClick} />
        <StatusCard title="Latest Sites Checked" websites={latestSites} onSiteClick={handleSiteClick} />
        <StatusCard title="Down Right Now" websites={downSites} onSiteClick={handleSiteClick} />
      </div>
    </div>
  );
}