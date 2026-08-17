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
      className={`rounded-xl px-3 py-2.5 border text-center flex flex-col justify-center w-full ${
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

// One shared column template for every arrow-linked row in this diagram (gate row,
// falsifier row, outcome row) so a box in column N always sits under column N above
// it, regardless of which row's arrow labels are widest ("eligible" sets the arrow
// column width here — it's the longest label used anywhere in the diagram).
const pipelineGridStyle = {
  gridTemplateColumns: 'minmax(128px, 1fr) 64px minmax(128px, 1fr) 64px minmax(128px, 1fr)',
};

const reviewers = [
  { label: 'bugs', added: false },
  { label: 'conventions', added: false },
  { label: 'tests', added: false },
  { label: 'git history', added: false },
  { label: 'prior PR comments', added: false },
  { label: 'contracts', added: true },
  { label: 'design tokens', added: true },
  { label: 'security', added: true },
];

export default function ReviewPipelineDiagram() {
  return (
    <figure className="my-8">
      <div className="border border-gray-200 dark:border-neutral-800 rounded-2xl overflow-hidden">
        <div className="bg-gray-50 dark:bg-neutral-900/60 border-b border-gray-200 dark:border-neutral-800 px-6 py-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 dark:text-neutral-400">
            Review pipeline
          </span>
        </div>
        <div className="p-5">
          {/* Gate + scale */}
          <div className="overflow-x-auto pb-1">
            <div className="min-w-[528px] grid gap-1" style={pipelineGridStyle}>
              <Node label="Pull request" />
              <Arrow />
              <Node label="Eligibility gate" detail="draft / bot / trivial → stop, no spend" />
              <Arrow label="eligible" />
              <Node label="Scale to diff size" />
            </div>
          </div>

          {/* Eight reviewers */}
          <div className="mt-3 border border-gray-100 dark:border-neutral-800 rounded-xl overflow-hidden divide-y divide-gray-100 dark:divide-neutral-800">
            <div className="px-4 py-1.5 bg-gray-50 dark:bg-neutral-900/60">
              <span className="text-[9px] font-mono uppercase tracking-widest text-gray-400 dark:text-neutral-500">
                Eight reviewers, in parallel
              </span>
            </div>
            <div className="overflow-x-auto">
              <div className="grid grid-cols-4 divide-x divide-y divide-gray-100 dark:divide-neutral-800 min-w-[420px]">
                {reviewers.map(({ label, added }) => (
                  <div
                    key={label}
                    className={`px-2 py-2 text-center ${added ? 'bg-[#f0f9ff] dark:bg-white/[0.06]' : ''}`}
                  >
                    <div
                      className={`text-[10px] font-mono font-semibold ${
                        added
                          ? 'text-[#0369a1] dark:text-sky-300'
                          : 'text-gray-500 dark:text-neutral-400'
                      }`}
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Falsifier + score + outcome — same shared grid as the row above, so
              every column lines up top to bottom across all three rows */}
          <div className="mt-3 overflow-x-auto pb-1">
            <div className="min-w-[528px] grid gap-1" style={pipelineGridStyle}>
              <Node label="Cold falsifier" detail="never saw reviewer reasoning" />
              <Arrow />
              <Node label="Score" detail="0 / 25 / 50 / 75 / 100" />
              <Arrow label="< 75" />
              <Node label="Discarded" />
            </div>
            <div className="min-w-[528px] grid gap-1 mt-1" style={pipelineGridStyle}>
              <div aria-hidden="true" />
              <div aria-hidden="true" />
              <div aria-hidden="true" />
              <Arrow label="≥ 75" />
              <Node label="Posted" detail="1 overview + inline comments" highlight />
            </div>
          </div>
        </div>
      </div>
      <figcaption className="text-xs text-gray-400 dark:text-neutral-500 text-center mt-3 font-mono italic">
        Highlighted reviewers — contracts, design tokens, security — are the three that could not
        have been downloaded from the published architecture.
      </figcaption>
    </figure>
  );
}
