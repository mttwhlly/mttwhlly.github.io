const stops = [
  {
    when: 'Feb 2026',
    label: 'Single similarity threshold',
    note: 'Colloquial terms missed the taxonomy',
  },
  {
    when: '',
    label: 'Two-tier exact/related scoring model',
    note: 'First fix',
  },
  {
    when: '',
    label: 'Mandatory tool-call instruction added to agent prompt',
    note: 'After the bug resurfaced in production — the real case: "heart drs"',
  },
  {
    when: 'Apr 2026',
    label: 'Deterministic synonym map shipped',
    note: 'Now live in the index',
  },
];

export default function SpecialtyTimeline() {
  return (
    <figure className="my-8">
      <div className="border border-gray-200 rounded-2xl overflow-hidden">
        <div className="bg-gray-50 border-b border-gray-200 px-6 py-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">
            Layer 3: The specialty-matching fix, in four passes
          </span>
        </div>
        <div className="px-6 py-8 overflow-x-auto">
          <div className="relative min-w-[640px]">
            {/* connecting line, spanning from the first dot's center to the last */}
            <div
              className="absolute h-px bg-gray-200"
              style={{ top: '1.625rem', left: '12.5%', right: '12.5%' }}
            />
            <div className="relative flex">
              {stops.map(({ when, label, note }, i) => (
                <div key={label} className="flex-1 flex flex-col items-center px-2">
                  <span className="text-[9px] font-mono text-gray-400 mb-2 h-3">{when}</span>
                  <span
                    className="block w-3 h-3 rounded-full border-2 border-white shrink-0"
                    style={{
                      backgroundColor: i === stops.length - 1 ? '#3a4a00' : '#d1d5db',
                      boxShadow: '0 0 0 1px #d4d4d4',
                    }}
                  />
                  <div className="mt-3 text-center max-w-[11rem]">
                    <div className="text-[11px] font-semibold text-gray-800 leading-snug">
                      {label}
                    </div>
                    {note && (
                      <div className="text-[9px] font-mono text-gray-400 mt-1 leading-snug">
                        {note}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <figcaption className="text-xs text-gray-400 text-center mt-3 font-mono italic">
        Three iterations chasing the same bug before the fix became deterministic.
      </figcaption>
    </figure>
  );
}
