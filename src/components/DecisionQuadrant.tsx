const points = [
  {
    label: 'Shared dev-tooling layer',
    tag: 'Adopted MCP',
    top: '25%',
    left: '75%',
  },
  {
    label: 'AI search product',
    tag: 'Removed MCP + declined vector search',
    top: '75%',
    left: '25%',
  },
];

export default function DecisionQuadrant() {
  return (
    <figure className="my-8">
      <div className="border border-gray-200 rounded-2xl overflow-hidden">
        <div className="bg-gray-50 border-b border-gray-200 px-6 py-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">
            Layer 4: The principle
          </span>
        </div>
        <div className="p-6 sm:p-8">
          <div className="flex gap-3">
            {/* Y-axis label */}
            <div className="shrink-0 flex flex-col justify-between items-center py-1 w-4">
              <span className="text-[9px] font-mono text-gray-400 whitespace-nowrap">many</span>
              <span
                className="text-[9px] font-mono uppercase tracking-widest text-gray-400 whitespace-nowrap"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                Number of consumers
              </span>
              <span className="text-[9px] font-mono text-gray-400 whitespace-nowrap">one</span>
            </div>

            {/* Plot area */}
            <div className="flex-1 min-w-0">
              <div className="relative aspect-square w-full max-w-md mx-auto">
                {/* Shaded quadrants + gridlines, clipped to the rounded box */}
                <div className="absolute inset-0 border border-gray-200 rounded-xl overflow-hidden">
                  <div
                    className="absolute top-0 right-0 w-1/2 h-1/2"
                    style={{ backgroundColor: '#ffffeb' }}
                  />
                  <div
                    className="absolute bottom-0 left-0 w-1/2 h-1/2"
                    style={{ backgroundColor: '#fafafa' }}
                  />
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200" />
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-200" />

                  <div className="absolute top-2 right-2.5 text-right">
                    <span className="text-[9px] font-mono text-gray-500">MCP earns its keep</span>
                  </div>
                  <div className="absolute bottom-2 left-2.5">
                    <span className="text-[9px] font-mono text-gray-400">MCP adds overhead</span>
                  </div>
                </div>

                {/* Points + labels, unclipped so text can overhang the box */}
                {points.map(({ label, tag, top, left }) => (
                  <div
                    key={label}
                    className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                    style={{ top, left }}
                  >
                    <span
                      className="block w-2.5 h-2.5 rounded-full border-2 border-white shrink-0"
                      style={{ backgroundColor: '#3a4a00', boxShadow: '0 0 0 1px #d4d4d4' }}
                    />
                    <div className="mt-1.5 w-32 text-center">
                      <div className="text-[10px] font-semibold text-gray-800 leading-snug">
                        {label}
                      </div>
                      <div className="text-[9px] font-mono text-gray-400 mt-0.5 leading-snug">
                        {tag}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* X-axis label */}
              <div className="flex items-center justify-between max-w-md mx-auto mt-2 px-0.5">
                <span className="text-[9px] font-mono text-gray-400">low</span>
                <span className="text-[9px] font-mono uppercase tracking-widest text-gray-400">
                  Cross-system reuse horizon
                </span>
                <span className="text-[9px] font-mono text-gray-400">high</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="text-xs text-gray-400 text-center mt-3 font-mono italic">
        Same evaluation, opposite answers — because the underlying shape of each problem was
        opposite.
      </figcaption>
    </figure>
  );
}
