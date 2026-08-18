type Status = 'new' | 'touched' | 'unchanged';
type Filter = { label: string; value: string; status: Status };

const turns: { turn: string; input: string; filters: Filter[] }[] = [
  {
    turn: 'Turn 1',
    input: '"heart drs in fl"',
    filters: [
      { label: 'specialties', value: 'Cardiology', status: 'new' },
      { label: 'states', value: 'FL', status: 'new' },
      { label: 'statuses', value: 'Active', status: 'new' },
    ],
  },
  {
    turn: 'Turn 2',
    input: '"just Florida"',
    filters: [
      { label: 'specialties', value: 'Cardiology', status: 'unchanged' },
      { label: 'states', value: 'FL', status: 'touched' },
      { label: 'statuses', value: 'Active', status: 'unchanged' },
    ],
  },
  {
    turn: 'Turn 3',
    input: '"massage therapists only"',
    filters: [
      { label: 'specialties', value: 'Massage Therapy', status: 'new' },
      { label: 'states', value: 'FL', status: 'unchanged' },
      { label: 'statuses', value: 'Active', status: 'unchanged' },
    ],
  },
];

const statusStyles: Record<Status, string> = {
  new: 'border-sky-300 bg-[#f0f9ff] dark:bg-white/[0.06] text-[#0369a1] dark:text-sky-300',
  touched:
    'border-sky-200 dark:border-sky-900 border-dashed bg-white dark:bg-neutral-900 text-[#0369a1]/70 dark:text-sky-300/70',
  unchanged:
    'border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-gray-400 dark:text-neutral-500',
};

export default function MultiTurnStateDiagram() {
  return (
    <figure className="my-8">
      <div className="border border-gray-200 dark:border-neutral-800 rounded-2xl overflow-hidden">
        <div className="bg-gray-50 dark:bg-neutral-900/60 border-b border-gray-200 dark:border-neutral-800 px-6 py-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 dark:text-neutral-400">
            State across three turns
          </span>
        </div>
        <div className="divide-y divide-gray-100 dark:divide-neutral-800">
          {turns.map(({ turn, input, filters }) => (
            <div key={turn} className="px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="sm:w-44 shrink-0">
                <div className="text-[10px] font-mono uppercase tracking-widest text-gray-400 dark:text-neutral-500">
                  {turn}
                </div>
                <div className="text-xs font-mono text-gray-700 dark:text-neutral-300 mt-0.5">
                  {input}
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {filters.map(({ label, value, status }) => (
                  <span
                    key={label}
                    className={`text-[10px] font-mono px-2 py-1 rounded-lg border ${statusStyles[status]}`}
                  >
                    {label}: {value}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <figcaption className="text-xs text-gray-400 dark:text-neutral-500 text-center mt-3 font-mono italic">
        Dashed = mentioned but already matched the prior value. Solid = new or replaced this turn.
        "Only" replaces one filter and carries the rest forward — never a reset to nothing. Clearing
        all state takes an explicit "new search" or the UI's clear-filters control.
      </figcaption>
    </figure>
  );
}
