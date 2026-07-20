const stages = [
  { label: 'Candidate findings', value: 27 },
  { label: 'Survived falsification', value: 7 },
];

const maxValue = stages[0].value;

export default function FalsificationFunnel() {
  return (
    <figure className="my-8">
      <div className="border border-gray-200 rounded-2xl overflow-hidden">
        <div className="bg-gray-50 border-b border-gray-200 px-6 py-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">
            Falsification pass — backtest results
          </span>
        </div>
        <div className="px-6 py-4 space-y-2">
          {stages.map(({ label, value }, i) => (
            <div key={label} className="flex items-center gap-3">
              <span className="text-[10px] font-mono text-gray-500 w-40 shrink-0 text-right leading-tight">
                {label}
              </span>
              <div className="flex-1 bg-gray-100 rounded-full h-6 overflow-hidden">
                <div
                  className="h-full rounded-full flex items-center justify-end pr-2.5 transition-all"
                  style={{
                    width: `${(value / maxValue) * 100}%`,
                    backgroundColor: i === 0 ? '#d1d5db' : '#d4fc52',
                  }}
                >
                  <span className="text-[10px] font-mono font-bold text-gray-900">{value}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <figcaption className="text-xs text-gray-400 text-center mt-3 font-mono italic">
        74% of first-pass candidate findings suppressed before a human ever saw them.
      </figcaption>
    </figure>
  );
}
