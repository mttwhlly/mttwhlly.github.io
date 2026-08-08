function Node({
  label,
  detail,
  highlight = false,
}: {
  label: string;
  detail?: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl px-3 py-2.5 border text-center shrink-0 w-[120px] ${
        highlight
          ? 'bg-[#f0f9ff] dark:bg-white/[0.06] border-sky-300'
          : 'bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-700'
      }`}
    >
      <div className="text-xs font-semibold text-gray-800 dark:text-neutral-200 leading-snug">{label}</div>
      {detail && (
        <div className="text-[10px] font-mono text-gray-400 dark:text-neutral-500 mt-0.5 leading-snug">
          {detail}
        </div>
      )}
    </div>
  );
}

function Arrow({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center shrink-0 px-0.5">
      {label && (
        <span className="text-[9px] font-mono text-gray-400 dark:text-neutral-500 mb-0.5 whitespace-nowrap">
          {label}
        </span>
      )}
      <span className="text-gray-300 dark:text-neutral-600 text-base leading-none">→</span>
    </div>
  );
}

export default function SystemFlowDiagram() {
  const buckets = [
    { cls: 'mapped', note: 'Code Connect exists', highlight: true },
    { cls: 'backlog', note: 'real mapping demand', highlight: false },
    { cls: 'external', note: 'fork / foreign', highlight: false },
    { cls: 'renderpart', note: 'excluded, reason-tagged', highlight: false },
    { cls: 'icon', note: 'external library mapping', highlight: false },
  ];

  return (
    <figure className="my-8">
      <div className="border border-gray-200 dark:border-neutral-800 rounded-2xl overflow-hidden">
        <div className="bg-gray-50 dark:bg-neutral-900/60 border-b border-gray-200 dark:border-neutral-800 px-6 py-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 dark:text-neutral-400">
            System flow
          </span>
        </div>
        <div className="p-5">
          {/* Main pipeline — scrolls horizontally on narrow screens */}
          <div className="flex items-stretch gap-1 overflow-x-auto pb-1">
            <Node label="35 Figma product files" detail="input" />
            <Arrow />
            <Node label="Scanner" detail="retry + page guard" />
            <Arrow />
            <Node label="Classifier" detail="5-bucket taxonomy" />
            <Arrow label="mapped" />
            <Node label="@org/design-system" detail="npm package + manifest" highlight />
            <Arrow />
            <div className="flex flex-col gap-1.5 shrink-0 w-[120px]">
              <div className="rounded-xl px-3 py-2 border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-center flex-1 flex items-center justify-center">
                <div className="text-xs font-semibold text-gray-800 dark:text-neutral-200">
                  Engineers
                </div>
              </div>
              <div className="rounded-xl px-3 py-2 border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-center flex-1 flex items-center justify-center">
                <div className="text-xs font-semibold text-gray-800 dark:text-neutral-200">
                  AI agents
                </div>
              </div>
            </div>
          </div>

          {/* Classifier bucket breakdown */}
          <div className="mt-3 border border-gray-100 dark:border-neutral-800 rounded-xl overflow-hidden divide-y divide-gray-100 dark:divide-neutral-800">
            <div className="px-4 py-1.5 bg-gray-50 dark:bg-neutral-900/60">
              <span className="text-[9px] font-mono uppercase tracking-widest text-gray-400 dark:text-neutral-500">
                Classifier outputs
              </span>
            </div>
            <div className="overflow-x-auto">
              <div className="grid grid-cols-5 divide-x divide-gray-100 dark:divide-neutral-800 min-w-[420px]">
                {buckets.map(({ cls, note, highlight }) => (
                  <div
                    key={cls}
                    className={`px-2 py-2 text-center ${highlight ? 'bg-[#f0f9ff] dark:bg-white/[0.06]' : ''}`}
                  >
                    <div
                      className={`text-[10px] font-mono font-semibold ${
                        highlight
                          ? 'text-[#0369a1] dark:text-sky-300'
                          : 'text-gray-500 dark:text-neutral-400'
                      }`}
                    >
                      {cls}
                    </div>
                    <div className="text-[9px] font-mono text-gray-400 dark:text-neutral-500 mt-0.5 leading-snug">
                      {note}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Fork-relink loop */}
          <div className="mt-3 flex flex-wrap items-center gap-1.5 text-[10px] font-mono text-gray-400 dark:text-neutral-500">
            <span className="border border-gray-200 dark:border-neutral-800 rounded-lg px-2 py-1 text-gray-500 dark:text-neutral-400 bg-gray-50 dark:bg-neutral-900/60">
              forks
            </span>
            <span>→</span>
            <span className="border border-gray-200 dark:border-neutral-800 rounded-lg px-2 py-1 text-gray-600 dark:text-neutral-300 bg-white dark:bg-neutral-900">
              fork-relink plugin
            </span>
            <span>→</span>
            <span className="border border-gray-200 dark:border-neutral-800 rounded-lg px-2 py-1 text-gray-500 dark:text-neutral-400 bg-gray-50 dark:bg-neutral-900/60">
              Figma files
            </span>
          </div>
        </div>
      </div>
      <figcaption className="text-xs text-gray-400 dark:text-neutral-500 text-center mt-3 font-mono italic">
        The work was less about one mapping and more about creating a trustworthy design-to-code
        system of record.
      </figcaption>
    </figure>
  );
}
