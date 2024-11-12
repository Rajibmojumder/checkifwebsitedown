import { useState, useEffect, KeyboardEvent } from 'react';
import { Globe, AlertCircle, CheckCircle, Link as LinkIcon, Clock, History, Wifi, WifiOff, Image } from 'lucide-react';
import { checkWebsiteStatus } from '../utils/websiteChecker';
import { getWebsiteScreenshot } from '../utils/screenshotApi';
import { addToCheckedSites } from '../utils/siteHistory';
import StatusHistory from './StatusHistory';

// URL validation regex
const URL_REGEX = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})(\/.*)*\/?$/;

export default function StatusChecker() {
  const [inputUrl, setInputUrl] = useState('');
  const [checkedUrl, setCheckedUrl] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [isLoadingScreenshot, setIsLoadingScreenshot] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{
    status: 'up' | 'down' | null;
    responseTime: number | null;
    screenshot?: string | null;
    name?: string;
    lastChecked?: Date;
  }>({
    status: null,
    responseTime: null
  });

  // Effect to handle URL updates from dashboard clicks
  useEffect(() => {
    const input = document.querySelector('input[type="text"]') as HTMLInputElement;
    if (input && input.value !== inputUrl) {
      setInputUrl(input.value);
    }
  }, []);

  const validateAndFormatUrl = (url: string): string | null => {
    const trimmedUrl = url.trim();
    
    if (!trimmedUrl) {
      setError('Please enter a URL');
      return null;
    }

    if (!URL_REGEX.test(trimmedUrl)) {
      setError('Please enter a valid URL (e.g., example.com or www.example.com)');
      return null;
    }

    return trimmedUrl.startsWith('http') ? trimmedUrl : `https://${trimmedUrl}`;
  };

  const handleCheck = async () => {
    setError(null);
    const formattedUrl = validateAndFormatUrl(inputUrl);
    if (!formattedUrl) return;
    
    setIsChecking(true);
    setIsLoadingScreenshot(true);
    setCheckedUrl(inputUrl); // Store the URL being checked
    
    const startTime = Date.now();
    
    try {
      const isUp = await checkWebsiteStatus(formattedUrl);
      const endTime = Date.now();
      const responseTime = endTime - startTime;
      const name = new URL(formattedUrl).hostname;
      const status = isUp ? 'up' : 'down';

      setResult({ 
        status, 
        responseTime,
        screenshot: null,
        name,
        lastChecked: new Date()
      });

      addToCheckedSites({
        url: formattedUrl,
        status,
        responseTime,
        timestamp: new Date(),
        name
      });

      if (status === 'up') {
        try {
          const screenshot = await getWebsiteScreenshot(formattedUrl);
          setResult(prev => ({ ...prev, screenshot }));
        } catch (screenshotError) {
          console.error('Failed to load screenshot:', screenshotError);
        }
      }

    } catch (error) {
      setResult({ 
        status: 'down', 
        responseTime: null,
        screenshot: null,
        name: inputUrl,
        lastChecked: new Date()
      });
    } finally {
      setIsChecking(false);
      setIsLoadingScreenshot(false);
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isChecking) {
      handleCheck();
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/90 backdrop-blur p-6 rounded-lg shadow-lg">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputUrl}
              onChange={(e) => {
                setInputUrl(e.target.value);
                setError(null);
              }}
              onKeyPress={handleKeyPress}
              placeholder="Enter website URL (e.g., google.com)"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800 placeholder-gray-500 bg-white"
            />
            <button
              onClick={handleCheck}
              disabled={isChecking}
              className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isChecking ? 'Checking...' : 'Check Status'}
            </button>
          </div>
          {error && (
            <div className="text-red-500 text-sm mt-1">
              {error}
            </div>
          )}
        </div>

        {result.status && !error && (
          <div className="space-y-6 mt-6">
            <div className={`p-4 rounded-lg ${
              result.status === 'up' ? 'bg-green-50' : 'bg-red-50'
            }`}>
              <div className="flex items-center space-x-2">
                {result.status === 'up' ? (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-red-500" />
                )}
                <span className={result.status === 'up' ? 'text-green-700' : 'text-red-700'}>
                  {result.status === 'up' ? 'Website is up and running!' : 'Website appears to be down or inaccessible.'}
                </span>
              </div>
            </div>

            <div className={`grid grid-cols-1 ${result.status === 'up' ? 'md:grid-cols-2' : ''} gap-6`}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6 text-gray-900">Website Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Globe className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-600">Domain:</span>
                    </div>
                    <span className="font-medium text-gray-900">{result.name}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {result.status === 'up' ? (
                        <Wifi className="h-5 w-5 text-green-500" />
                      ) : (
                        <WifiOff className="h-5 w-5 text-red-500" />
                      )}
                      <span className="text-gray-600">Status:</span>
                    </div>
                    <span className={`font-medium ${
                      result.status === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {result.status === 'up' ? 'Online' : 'Offline'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <LinkIcon className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-600">URL:</span>
                    </div>
                    <span className="font-medium text-gray-900 break-all">{checkedUrl}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-600">Response Time:</span>
                    </div>
                    <span className="font-medium text-gray-900">{result.responseTime}ms</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <History className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-600">Last Checked:</span>
                    </div>
                    <span className="font-medium text-gray-900">
                      {result.lastChecked?.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {result.status === 'up' && (
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-6 text-gray-900">Website Preview</h3>
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden relative">
                    {isLoadingScreenshot ? (
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 space-y-2">
                        <Image className="h-8 w-8 animate-pulse" />
                        <span>Loading preview...</span>
                      </div>
                    ) : result.screenshot ? (
                      <img
                        src={result.screenshot}
                        alt={`Screenshot of ${checkedUrl}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 space-y-2">
                        <Image className="h-8 w-8" />
                        <span>Preview not available</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6 text-gray-900">
                {result.status === 'up' ? 'Uptime History' : 'Downtime History'}
              </h3>
              <StatusHistory url={checkedUrl} currentStatus={result.status} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}