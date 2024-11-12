export interface CheckResult {
  status: 'success' | 'error';
  url: string;
  responseTime: number;
  lastChecked: Date;
  title: string;
}

export interface WebsiteMetadata {
  title: string;
  favicon?: string;
}