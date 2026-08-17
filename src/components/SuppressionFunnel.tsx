const stages = [
  { label: 'Candidate findings', value: 27 },
  { label: 'Survived falsification + threshold', value: 7 },
];

const maxValue = stages[0].value;

const breakdown = [
  { label: 'Solid and actionable', value: 3, color: '#7dd3fc', textColor: '#0369a1' },
  { label: 'Low-value', value: 3, color: '#e5e7eb', textColor: '#4b5563' },
  { label: 'False positive', value: 1, color: '#9ca3af', textColor: '#ffffff' },
];

export default function SuppressionFunnel() {
  return (
    <figure className="my-8">
      <div className="border border-gray-200 dark:border-neutral-800 rounded-2xl overflow-hidden">
        <div className="bg-gray-50 dark:bg-neutral-900/60 border-b border-gray-200 dark:border-neutral-800 px-6 py-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 dark:text-neutral-400">
            Backtest: 5 real merged PRs
          </span>
        </div>
        <div className="px-6 py-4 space-y-2">
          {stages.map(({ label, value }, i) => (
            <div key={label} className="flex items-center gap-3">
              <span className="text-[10px] font-mono text-gray-500 dark:text-neutral-400 w-40 shrink-0 text-right leading-tight">
                {label}
              </span>
              <div className="flex-1 bg-gray-100 dark:bg-neutral-800 rounded-full h-6 overflow-hidden">
                <div
                  className={`h-full rounded-full flex items-center justify-end pr-2.5 transition-all ${
                    i === 0 ? 'bg-gray-300 dark:bg-neutral-600' : ''
                  }`}
                  style={{
                    width: `${(value / maxValue) * 100}%`,
                    ...(i !== 0 ? { backgroundColor: '#7dd3fc' } : {}),
                  }}
                >
                  <span
                    className={`text-[10px] font-mono font-bold ${
                      i === 0 ? 'text-gray-900 dark:text-neutral-100' : 'text-gray-900'
                    }`}
                  >
                    {value}
                  </span>
                </div>
              </div>
            </div>
          ))}

          <div className="pt-2">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono text-gray-500 dark:text-neutral-400 w-40 shrink-0 text-right leading-tight">
                Of the 7 published
              </span>
              <div className="flex-1 flex h-6 rounded-full overflow-hidden">
                {breakdown.map(({ label, value, color, textColor }) => (
                  <div
                    key={label}
                    className="h-full flex items-center justify-center"
                    style={{ width: `${(value / 7) * 100}%`, backgroundColor: color }}
                  >
                    <span className="text-[10px] font-mono font-bold" style={{ color: textColor }}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 pl-[172px] text-[10px] font-mono text-gray-500 dark:text-neutral-400">
              {breakdown.map(({ label, color }) => (
                <div key={label} className="flex items-center gap-1.5">
                  <span
                    className="inline-block w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: color }}
                  />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <figcaption className="text-xs text-gray-400 dark:text-neutral-500 text-center mt-3 font-mono italic">
        74% suppressed before a human saw them. Of the 7 published: 3 solid, 3 low-value, 1 false
        positive.
      </figcaption>
    </figure>
  );
}
