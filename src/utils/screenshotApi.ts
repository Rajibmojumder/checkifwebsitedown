import axios from 'axios';

interface ScreenshotResponse {
  link: string;
  message: string;
  url: string;
  fetchTime: string;
  width: number;
  height: number;
}

export async function getWebsiteScreenshot(url: string): Promise<string | null> {
  const options = {
    method: 'POST',
    url: 'https://screenshot-snapshot-site2.p.rapidapi.com/api/v2/screenshot',
    headers: {
      'x-rapidapi-key': '844f17265emsh0c5bcba45e41543p1530afjsn57ee7c7c7286',
      'x-rapidapi-host': 'screenshot-snapshot-site2.p.rapidapi.com',
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    data: {
      url,
      format: 'png',
      width: 1280,
      height: 720,
      delay: 0,
      fullSize: false,
      hideCookie: false
    }
  };

  try {
    const response = await axios.request<ScreenshotResponse>(options);
    return response.data.link;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Screenshot API error:', error.message);
    } else {
      console.error('Screenshot API error:', error);
    }
    return null;
  }
}