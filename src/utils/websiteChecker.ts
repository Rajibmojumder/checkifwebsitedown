export async function checkWebsiteStatus(url: string): Promise<boolean> {
  // Normalize URL
  try {
    const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`);
    url = urlObj.toString();
  } catch {
    return false;
  }

  const methods = [
    // Method 1: Direct fetch
    async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);
        
        const response = await fetch(url, {
          signal: controller.signal,
          mode: 'no-cors',
          headers: {
            'Accept': 'text/html'
          }
        });
        
        clearTimeout(timeoutId);
        return response.ok;
      } catch {
        return false;
      }
    },

    // Method 2: Using a CORS proxy
    async () => {
      try {
        const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
        const response = await fetch(proxyUrl);
        const data = await response.json();
        return data && data.status && data.status.http_code >= 200 && data.status.http_code < 400;
      } catch {
        return false;
      }
    }
  ];

  try {
    // Run all checks in parallel
    const results = await Promise.all(methods.map(m => m()));
    // Site is considered down if all methods fail
    return results.some(result => result === true);
  } catch {
    return false;
  }
}