function Chip({
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
      className={`rounded-xl px-3 py-2 border text-center w-full bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-700 ${
        dashed ? 'border-dashed' : ''
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

export default function PostingBoundaryDiagram() {
  return (
    <figure className="my-8">
      <div className="border border-gray-200 dark:border-neutral-800 rounded-2xl overflow-hidden">
        <div className="bg-gray-50 dark:bg-neutral-900/60 border-b border-gray-200 dark:border-neutral-800 px-6 py-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 dark:text-neutral-400">
            The posting boundary
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 dark:divide-neutral-800">
          <div className="px-6 py-5">
            <div className="text-[10px] font-mono uppercase tracking-widest text-gray-400 dark:text-neutral-500 mb-3 text-center">
              Before
            </div>
            <div className="flex flex-col items-center">
              <Chip label="Local run" detail="personal identity" />
              <DownArrow />
              <Chip label="CI pipeline" detail="build service" />
              <DownArrow label="no dedup" />
              <div className="rounded-xl px-3 py-2 border border-gray-300 dark:border-neutral-600 bg-gray-50 dark:bg-neutral-900/60 text-center w-full">
                <div className="text-xs font-semibold text-gray-800 dark:text-neutral-200">
                  Pull request
                </div>
                <div className="text-[10px] font-mono text-gray-400 dark:text-neutral-500 mt-0.5">
                  both post here
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 py-5">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#0369a1] dark:text-sky-300 mb-3 text-center">
              After
            </div>
            <div className="flex flex-col items-center">
              <Chip label="Local run" detail="never posts" dashed />
              <DownArrow />
              <Chip label="Prints to terminal" />
            </div>
            <div className="flex flex-col items-center mt-3">
              <Chip label="CI pipeline" detail="build service" />
              <DownArrow label="idempotent markers" />
              <div className="rounded-xl px-3 py-2 border border-sky-300 bg-[#f0f9ff] dark:bg-white/[0.06] text-center w-full">
                <div className="text-xs font-semibold text-[#0369a1] dark:text-sky-300">
                  Pull request
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="text-xs text-gray-400 dark:text-neutral-500 text-center mt-3 font-mono italic">
        Local runs review. The pipeline posts.
      </figcaption>
    </figure>
  );
}
