interface CheckedSite {
  url: string;
  status: 'up' | 'down';
  responseTime: number;
  timestamp: Date;
  name: string;
}

// Store up to 100 checked sites in memory
let checkedSites: CheckedSite[] = [];
const MAX_HISTORY = 100;
const MAX_DISPLAY = 10;

export function addToCheckedSites(site: CheckedSite) {
  // Remove existing entry for the same URL if exists
  checkedSites = checkedSites.filter(s => s.url !== site.url);
  // Add new entry at the beginning
  checkedSites = [site, ...checkedSites].slice(0, MAX_HISTORY);
}

export function getTopSites(): CheckedSite[] {
  // Get unique sites that are up, sorted by response time
  const uniqueSites = new Map<string, CheckedSite>();
  
  checkedSites
    .filter(site => site.status === 'up')
    .forEach(site => {
      if (!uniqueSites.has(site.url) || uniqueSites.get(site.url)!.timestamp < site.timestamp) {
        uniqueSites.set(site.url, site);
      }
    });

  return Array.from(uniqueSites.values())
    .sort((a, b) => a.responseTime - b.responseTime)
    .slice(0, MAX_DISPLAY);
}

export function getLatestChecked(): CheckedSite[] {
  // Get unique sites, keeping only the most recent check for each URL
  const uniqueSites = new Map<string, CheckedSite>();
  
  checkedSites.forEach(site => {
    if (!uniqueSites.has(site.url) || uniqueSites.get(site.url)!.timestamp < site.timestamp) {
      uniqueSites.set(site.url, site);
    }
  });

  return Array.from(uniqueSites.values())
    .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
    .slice(0, MAX_DISPLAY);
}

export function getDownSites(): CheckedSite[] {
  // Get unique down sites, sorted by most recent
  const uniqueSites = new Map<string, CheckedSite>();
  
  checkedSites
    .filter(site => site.status === 'down')
    .forEach(site => {
      if (!uniqueSites.has(site.url) || uniqueSites.get(site.url)!.timestamp < site.timestamp) {
        uniqueSites.set(site.url, site);
      }
    });

  return Array.from(uniqueSites.values())
    .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
    .slice(0, MAX_DISPLAY);
}