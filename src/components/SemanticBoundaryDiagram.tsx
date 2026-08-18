function Node({
  label,
  detail,
  dashed = false,
}: {
  label: string;
  detail?: string;
  dashed?: boolean;
}) {
  return (
    <div
      className={`rounded-xl px-3 py-2.5 border text-center w-full h-full flex flex-col justify-center bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-700 ${
        dashed ? 'border-dashed' : ''
      }`}
    >
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

function DownArrow({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-1">
      <span className="text-gray-300 dark:text-neutral-600 text-base leading-none">↓</span>
      {label && (
        <span className="text-[9px] font-mono text-gray-400 dark:text-neutral-500 mt-0.5 text-center leading-tight">
          {label}
        </span>
      )}
    </div>
  );
}

export default function SemanticBoundaryDiagram() {
  return (
    <figure className="my-8">
      <div className="border border-gray-200 dark:border-neutral-800 rounded-2xl overflow-hidden">
        <div className="bg-gray-50 dark:bg-neutral-900/60 border-b border-gray-200 dark:border-neutral-800 px-6 py-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 dark:text-neutral-400">
            Where the data stays put
          </span>
        </div>
        <div className="p-5 flex flex-col items-center">
          <div className="w-full max-w-xs">
            <Node label="User query" detail={'"heart drs in fl"'} />
          </div>
          <DownArrow />
          <div className="w-full max-w-xs">
            <Node label="Agent orchestration" detail="JSON builder — never touches SQL" />
          </div>
          <DownArrow />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full items-stretch mb-2">
            <div className="flex flex-col items-center">
              <div className="text-[9px] font-mono uppercase tracking-widest text-gray-400 dark:text-neutral-500 mb-2 text-center">
                Medical terms only
              </div>
              <div className="w-full flex-1">
                <Node label="Specialty index" detail="674 public terms · BM25 + rerank + synonyms" />
              </div>
              <DownArrow label="resolved specialty" />
            </div>
            <div className="flex flex-col items-center">
              <div className="text-[9px] font-mono uppercase tracking-widest text-gray-400 dark:text-neutral-500 mb-2 text-center">
                Everything else
              </div>
              <div className="w-full flex-1">
                <Node label="Direct field parsing" detail="location, status, name, dates, IDs" />
              </div>
              <DownArrow label="validated fields" />
            </div>
          </div>
          <div className="w-full max-w-xs">
            <Node label="Query parameters" detail="SearchPractitionerRequest (JSON)" />
          </div>
          <DownArrow />
          <div className="w-full max-w-xs">
            <Node label="SQL execution" detail="stored procedure · 1.6M provider records" dashed />
          </div>
          <DownArrow />
          <div className="w-full max-w-xs">
            <Node label="Results" detail="table / map" />
          </div>
        </div>
      </div>
      <figcaption className="text-xs text-gray-400 dark:text-neutral-500 text-center mt-3 font-mono italic">
        The agent stops at the JSON — it never touches SQL. The specialty index resolves against
        674 public terms; the stored procedure it hands off to is the only thing that ever reaches
        the 1.6M provider records.
      </figcaption>
    </figure>
  );
}
