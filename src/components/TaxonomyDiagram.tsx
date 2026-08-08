const categories = [
  {
    label: 'Real mapping demand',
    action: 'Add Code Connect',
    detail: 'Genuinely unmapped components with a real code equivalent',
    accent: '#7dd3fc',
    textColor: '#0369a1',
  },
  {
    label: 'Fork / detached',
    action: 'Design-side relink plugin',
    detail: 'Drifted from the library main — no TypeScript can fix a detached Figma component',
    accent: '#e5e7eb',
    textColor: '#4b5563',
  },
  {
    label: 'Render-part',
    action: 'Exclude, reason-tagged',
    detail: 'Internal sub-components rendered by a parent — calendar cells, DataGrid internals',
    accent: '#e5e7eb',
    textColor: '#4b5563',
  },
  {
    label: 'Docs / reference board',
    action: 'Exclude by node id',
    detail: 'Documentation living inside delivery files, never intended to ship',
    accent: '#e5e7eb',
    textColor: '#4b5563',
  },
  {
    label: 'External icon library',
    action: 'Sidecar-credited mapping',
    detail: '551,800 instances from team-owned Material Icons libraries in Figma',
    accent: '#e5e7eb',
    textColor: '#4b5563',
  },
];

export default function TaxonomyDiagram() {
  return (
    <figure className="my-8">
      <div className="border border-gray-200 dark:border-neutral-800 rounded-2xl overflow-hidden">
        <div className="bg-gray-50 dark:bg-neutral-900/60 border-b border-gray-200 dark:border-neutral-800 px-6 py-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 dark:text-neutral-400">
            Unresolved instance → Classification
          </span>
        </div>
        <div className="divide-y divide-gray-100 dark:divide-neutral-800">
          {categories.map(({ label, action, detail, accent, textColor }) => (
            <div key={label} className="grid grid-cols-[180px_1fr] gap-4 px-6 py-3 items-start">
              <div className="pt-0.5">
                <span
                  className="text-[10px] font-mono px-2 py-1 rounded-full whitespace-nowrap"
                  style={{ backgroundColor: accent, color: textColor }}
                >
                  {label}
                </span>
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-800 dark:text-neutral-200 mb-0.5">
                  {action}
                </div>
                <div className="text-[10px] text-gray-500 dark:text-neutral-400 leading-relaxed">
                  {detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <figcaption className="text-xs text-gray-400 dark:text-neutral-500 text-center mt-3 font-mono italic">
        The taxonomy turned one vague backlog into separate, solvable systems.
      </figcaption>
    </figure>
  );
}
