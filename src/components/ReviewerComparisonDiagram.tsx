const published = ['bugs', 'conventions', 'tests', 'git history', 'prior PR comments'];

const added = [
  { label: 'contracts', detail: 'React ↔ .NET DTO drift' },
  { label: 'design tokens', detail: 'Figma-to-code drift' },
  { label: 'security', detail: 'authz, regulated data' },
];

export default function ReviewerComparisonDiagram() {
  return (
    <figure className="my-8">
      <div className="border border-gray-200 dark:border-neutral-800 rounded-2xl overflow-hidden">
        <div className="bg-gray-50 dark:bg-neutral-900/60 border-b border-gray-200 dark:border-neutral-800 px-6 py-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 dark:text-neutral-400">
            Eight reviewers — extension, not divergence
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 dark:divide-neutral-800">
          <div className="px-6 py-4 flex flex-col">
            <div className="text-[10px] font-mono uppercase tracking-widest text-gray-400 dark:text-neutral-500 mb-3">
              From the published architecture
            </div>
            <div className="flex-1 flex flex-col gap-2">
              {published.map((label) => (
                <span
                  key={label}
                  className="text-xs font-mono px-2.5 py-1.5 rounded-lg bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 text-gray-600 dark:text-neutral-300"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
          <div className="px-6 py-4 flex flex-col">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#0369a1] dark:text-sky-300 mb-3">
              Added for this platform
            </div>
            <div className="flex-1 flex flex-col gap-2">
              {added.map(({ label, detail }) => (
                <div
                  key={label}
                  className="flex-1 flex flex-col justify-center px-2.5 py-1.5 rounded-lg bg-[#f0f9ff] dark:bg-white/[0.06] border border-sky-300"
                >
                  <div className="text-xs font-mono font-semibold text-[#0369a1] dark:text-sky-300">
                    {label}
                  </div>
                  <div className="text-[10px] font-mono text-gray-500 dark:text-neutral-400 mt-0.5">
                    {detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <figcaption className="text-xs text-gray-400 dark:text-neutral-500 text-center mt-3 font-mono italic">
        Three reviewers this codebase needed that no published architecture could have shipped.
      </figcaption>
    </figure>
  );
}
