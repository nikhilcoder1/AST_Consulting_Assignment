export default function BreakingTicker({ headlines }) {
  return (
    <div className="bg-red-600 text-white py-2 overflow-hidden">
      <div className="flex items-center">
        <span className="font-bold px-4 whitespace-nowrap">BREAKING</span>
        <div className="whitespace-nowrap animate-marquee">
          {headlines.map((h, i) => (
            <span key={i} className="mx-8">
              {h}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}