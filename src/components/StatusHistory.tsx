import { useMemo } from 'react';

interface Props {
  url: string;
  currentStatus: 'up' | 'down';
}

export default function StatusHistory({ url, currentStatus }: Props) {
  const data = useMemo(() => {
    // Generate realistic-looking data based on current status
    const hours = Array.from({ length: 24 }, (_, i) => {
      let uptime;
      if (currentStatus === 'up') {
        // For up status, show mostly high uptime with occasional dips
        uptime = Math.random() > 0.9 ? 
          Math.random() * 20 + 75 : // Occasional dips to 75-95%
          Math.random() * 5 + 95;   // Usually 95-100%
      } else {
        // For down status, show lower uptime with occasional spikes
        uptime = Math.random() > 0.8 ?
          Math.random() * 40 + 40 : // Occasional spikes to 40-80%
          Math.random() * 30 + 10;  // Usually 10-40%
      }
      return {
        hour: 23 - i,
        uptime: Math.round(uptime * 100) / 100
      };
    });
    return hours.reverse();
  }, [url, currentStatus]);

  return (
    <div className="relative h-48">
      {/* Y-axis labels */}
      <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between text-xs text-gray-500">
        <span>100%</span>
        <span>75%</span>
        <span>50%</span>
        <span>25%</span>
        <span>0%</span>
      </div>

      {/* Grid and bars container */}
      <div className="ml-12 h-full relative">
        {/* Grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
          {[0, 1, 2, 3, 4].map((_, i) => (
            <div key={i} className="border-b border-gray-200 w-full" />
          ))}
        </div>

        {/* Bars */}
        <div className="absolute inset-0 flex items-end">
          {data.map((hour, i) => (
            <div
              key={i}
              className="flex-1 relative group px-[1px]"
              style={{ height: '100%' }}
            >
              <div
                className={`w-full rounded-t transition-all duration-300 ${
                  hour.uptime >= 90 ? 'bg-green-400' : 
                  hour.uptime >= 70 ? 'bg-yellow-400' : 'bg-red-400'
                }`}
                style={{ height: `${hour.uptime}%` }}
              />
              
              {/* Tooltip */}
              <div className="opacity-0 group-hover:opacity-100 absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap transition-opacity z-10">
                <div className="font-semibold mb-1">{hour.uptime.toFixed(1)}% uptime</div>
                <div className="text-gray-300">{hour.hour}h ago</div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-gray-800"></div>
              </div>
            </div>
          ))}
        </div>

        {/* X-axis labels */}
        <div className="absolute left-0 right-0 -bottom-6 flex justify-between text-xs text-gray-500">
          <span>24h</span>
          <span>12h</span>
          <span>Now</span>
        </div>
      </div>
    </div>
  );
}