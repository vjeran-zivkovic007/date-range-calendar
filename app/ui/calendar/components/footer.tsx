export const Footer = () => (
  <div className="flex justify-center space-x-6 text-sm text-gray-600">
    <div className="flex items-center space-x-1">
      <div className="w-4 h-4 border border-gray-10 bg-white-100"></div>
      <span>Available</span>
    </div>

    <div className="flex items-center space-x-1">
      <div className="w-4 h-4 bg-primary-40"></div>
      <span>Check-in</span>
    </div>

    {/* Check-out */}
    <div className="flex items-center space-x-1">
      <svg width="16" height="16" className="border border-gray-300">
        <polygon points="0,16 16,16 0,0" className="fill-primary-40" />
        <polygon points="0,16 16,16 16,16" className="fill-white-100" />
      </svg>
      <span>Check-out</span>
    </div>

    <div className="flex items-center space-x-1">
      <svg width="16" height="16" className="border border-gray-300">
        <polygon points="0,16 16,16 0,0" className="fill-gray-10" />
        <polygon points="0,16 16,16 16,16" className="fill-white-100" />
      </svg>
      <span>Check-out only</span>
    </div>

    <div className="flex items-center space-x-1">
      <div className="w-4 h-4 bg-gray-5 border border-gray-10"></div>
      <span>Unavailable</span>
    </div>
  </div>
);
