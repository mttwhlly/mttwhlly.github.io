const commits = [
  { label: 'rules-v12', tag: true },
  { label: 'draft rule', tag: false },
  { label: 'reviewed', tag: false },
  { label: 'rules-v13', tag: true },
  { label: 'rules-v14', tag: true },
];

const n = commits.length;
const edgeInset = 50 / n;

export default function RulesReleaseChannel() {
  return (
    <figure className="my-8">
      <div className="border border-gray-200 dark:border-neutral-800 rounded-2xl overflow-hidden">
        <div className="bg-gray-50 dark:bg-neutral-900/60 border-b border-gray-200 dark:border-neutral-800 px-6 py-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 dark:text-neutral-400">
            Rules release channel
          </span>
        </div>
        <div className="px-6 py-8 overflow-x-auto">
          <div className="min-w-[480px] w-full">
            {/* Labels — height-independent of the dot track below */}
            <div className="grid mb-2" style={{ gridTemplateColumns: `repeat(${n}, 1fr)` }}>
              {commits.map(({ label, tag }) => (
                <div key={label} className="flex justify-center h-5 items-center">
                  {tag ? (
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-[#f0f9ff] dark:bg-white/[0.06] border border-sky-300 text-[#0369a1] dark:text-sky-300 whitespace-nowrap">
                      {label}
                    </span>
                  ) : (
                    <span className="text-[9px] font-mono text-gray-400 dark:text-neutral-500 whitespace-nowrap">
                      {label}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Dot track — fixed height, so the line always meets the true vertical center of every dot */}
            <div className="relative h-3">
              <div
                className="absolute top-1/2 -translate-y-1/2 h-px bg-gray-200 dark:bg-neutral-700"
                style={{ left: `${edgeInset}%`, right: `${edgeInset}%` }}
              />
              <div
                className="relative grid h-full"
                style={{ gridTemplateColumns: `repeat(${n}, 1fr)` }}
              >
                {commits.map(({ label, tag }) => (
                  <div key={label} className="flex items-center justify-center">
                    <span
                      className={`block w-3 h-3 rounded-full ${
                        tag
                          ? 'bg-[#7dd3fc] border-2 border-white dark:border-neutral-950 ring-2 ring-sky-300'
                          : 'bg-gray-300 dark:bg-neutral-600'
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="text-xs text-gray-400 dark:text-neutral-500 text-center mt-3 font-mono italic">
        Every repository pins the channel, not a copy. One command moves all twelve forward — or
        back.
      </figcaption>
    </figure>
  );
}
