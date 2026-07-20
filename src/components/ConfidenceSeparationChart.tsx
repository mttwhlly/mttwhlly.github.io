export default function ConfidenceSeparationChart() {
  return (
    <figure className="my-8">
      <div className="border border-gray-200 rounded-2xl overflow-hidden">
        <div className="bg-gray-50 border-b border-gray-200 px-6 py-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">
            Confidence score — surviving findings
          </span>
        </div>
        <div className="px-6 py-6">
          <div className="relative h-8 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="absolute top-0 h-full rounded-full"
              style={{ left: '88%', minWidth: '16px', width: '4%', backgroundColor: '#d4fc52' }}
            />
          </div>
          <div className="flex justify-between text-[10px] font-mono text-gray-400 mt-2">
            <span>0</span>
            <span>50</span>
            <span>100</span>
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs font-mono text-gray-700">
            <span
              className="inline-block w-2.5 h-2.5 rounded-full shrink-0"
              style={{ backgroundColor: '#d4fc52' }}
            />
            Real defects: 88–92% confidence
          </div>
        </div>
      </div>
      <figcaption className="text-xs text-gray-400 text-center mt-3 font-mono italic">
        Noise and duplicates were suppressed well below this range, with no overlap.
      </figcaption>
    </figure>
  );
}
