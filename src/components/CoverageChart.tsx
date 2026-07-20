const stages = [
  { label: 'Baseline', value: 55.3 },
  { label: 'Map icons', value: 89.8 },
  { label: 'Ext. icon libs', value: 93.3 },
  { label: 'Fork cleanup', value: 93.8 },
  { label: 'Render-parts', value: 98.67 },
  { label: 'Final', value: 98.91 },
];

export default function CoverageChart() {
  return (
    <figure className="my-8">
      <div className="border border-gray-200 rounded-2xl overflow-hidden">
        <div className="bg-gray-50 border-b border-gray-200 px-6 py-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">
            Defensible Code Connect coverage
          </span>
        </div>
        <div className="px-6 py-4 space-y-2">
          {stages.map(({ label, value }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="text-[10px] font-mono text-gray-500 w-20 shrink-0 text-right leading-tight">
                {label}
              </span>
              <div className="flex-1 bg-gray-100 rounded-full h-6 overflow-hidden">
                <div
                  className="h-full rounded-full flex items-center justify-end pr-2.5 transition-all"
                  style={{ width: `${value}%`, backgroundColor: '#d4fc52' }}
                >
                  <span className="text-[10px] font-mono font-bold text-gray-900">{value}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <figcaption className="text-xs text-gray-400 text-center mt-3 font-mono italic">
        Coverage moved in jumps when the model identified the right category of problem.
      </figcaption>
    </figure>
  );
}
