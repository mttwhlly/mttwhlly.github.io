function DownArrow() {
  return (
    <div className="flex items-center justify-center py-1">
      <span className="text-gray-300 dark:text-neutral-600 text-base leading-none">↓</span>
    </div>
  );
}

const proposed = [
  { label: 'Chat interface' },
  { label: '5 MCP tools' },
  { label: 'Vector embeddings', detail: '1.6M records, duplicated' },
  { label: 'Semantic search', detail: 'LLM-generated answers' },
];

const shipped = [
  { label: 'Search interface' },
  { label: 'Direct parameters' },
  { label: 'Specialty index', detail: '674 public terms' },
  { label: 'SQL query', detail: 'deterministic results' },
];

export default function ProposedVsShippedDiagram() {
  return (
    <figure className="my-8">
      <div className="border border-gray-200 dark:border-neutral-800 rounded-2xl overflow-hidden">
        <div className="bg-gray-50 dark:bg-neutral-900/60 border-b border-gray-200 dark:border-neutral-800 px-6 py-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 dark:text-neutral-400">
            Proposed → shipped
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 dark:divide-neutral-800">
          <div className="px-6 py-5">
            <div className="text-[10px] font-mono uppercase tracking-widest text-gray-400 dark:text-neutral-500 mb-3 text-center">
              Proposed
            </div>
            <div className="flex flex-col items-center">
              {proposed.map(({ label, detail }, i) => (
                <div key={label} className="w-full">
                  <div className="rounded-xl px-3 py-2 border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-center">
                    <div className="text-xs font-semibold text-gray-800 dark:text-neutral-200">
                      {label}
                    </div>
                    {detail && (
                      <div className="text-[10px] font-mono text-gray-400 dark:text-neutral-500 mt-0.5">
                        {detail}
                      </div>
                    )}
                  </div>
                  {i < proposed.length - 1 && <DownArrow />}
                </div>
              ))}
            </div>
          </div>
          <div className="px-6 py-5">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#0369a1] dark:text-sky-300 mb-3 text-center">
              Shipped
            </div>
            <div className="flex flex-col items-center">
              {shipped.map(({ label, detail }, i) => (
                <div key={label} className="w-full">
                  <div className="rounded-xl px-3 py-2 border border-sky-300 bg-[#f0f9ff] dark:bg-white/[0.06] text-center">
                    <div className="text-xs font-semibold text-[#0369a1] dark:text-sky-300">
                      {label}
                    </div>
                    {detail && (
                      <div className="text-[10px] font-mono text-gray-500 dark:text-neutral-400 mt-0.5">
                        {detail}
                      </div>
                    )}
                  </div>
                  {i < shipped.length - 1 && <DownArrow />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <figcaption className="text-xs text-gray-400 dark:text-neutral-500 text-center mt-3 font-mono italic">
        Same user-facing behavior, different machine underneath — one duplicates the data to get
        there, the other doesn't.
      </figcaption>
    </figure>
  );
}
