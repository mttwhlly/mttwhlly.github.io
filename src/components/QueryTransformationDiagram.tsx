function Node({ label, detail }: { label: string; detail?: string }) {
  return (
    <div className="rounded-xl px-3 py-2.5 border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-center w-full">
      <div className="text-xs font-semibold text-gray-800 dark:text-neutral-200 leading-snug">
        {label}
      </div>
      {detail && (
        <div className="text-[10px] font-mono text-gray-400 dark:text-neutral-500 mt-0.5 leading-snug">
          {detail}
        </div>
      )}
    </div>
  );
}

function DownArrow() {
  return (
    <div className="flex items-center justify-center py-1">
      <span className="text-gray-300 dark:text-neutral-600 text-base leading-none">↓</span>
    </div>
  );
}

const fields = [
  { label: 'Specialty lookup', value: 'Cardiovascular Disease' },
  { label: 'Location parse', value: 'Florida' },
  { label: 'Status extract', value: 'Active providers' },
];

export default function QueryTransformationDiagram() {
  return (
    <figure className="my-8">
      <div className="border border-gray-200 dark:border-neutral-800 rounded-2xl overflow-hidden">
        <div className="bg-gray-50 dark:bg-neutral-900/60 border-b border-gray-200 dark:border-neutral-800 px-6 py-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 dark:text-neutral-400">
            Query transformation
          </span>
        </div>
        <div className="p-5 flex flex-col items-center">
          <div className="w-full max-w-sm">
            <Node label="Natural language" detail={'"heart drs in fl"'} />
          </div>
          <DownArrow />
          <div className="overflow-x-auto w-full pb-1">
            <div className="grid grid-cols-3 gap-2 min-w-[420px]">
              {fields.map(({ label, value }) => (
                <div key={label} className="flex flex-col items-center gap-1">
                  <div className="text-[9px] font-mono uppercase tracking-widest text-gray-400 dark:text-neutral-500 text-center leading-tight">
                    {label}
                  </div>
                  <span className="text-[9px] font-mono text-gray-300 dark:text-neutral-600">
                    ↓
                  </span>
                  <div className="rounded-lg px-2 py-1.5 border border-sky-300 bg-[#f0f9ff] dark:bg-white/[0.06] text-center w-full">
                    <div className="text-[10px] font-mono font-semibold text-[#0369a1] dark:text-sky-300 leading-snug">
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <DownArrow />
          <div className="w-full max-w-sm">
            <Node
              label="Query parameters"
              detail="SearchPractitionerRequest — specialties, states, statuses, paging"
            />
          </div>
          <DownArrow />
          <div className="w-full max-w-xs">
            <Node label="Execute SQL" detail="stored procedure" />
          </div>
        </div>
      </div>
      <figcaption className="text-xs text-gray-400 dark:text-neutral-500 text-center mt-3 font-mono italic">
        The agent's whole job fits in that middle row — everything after it is deterministic.
      </figcaption>
    </figure>
  );
}
