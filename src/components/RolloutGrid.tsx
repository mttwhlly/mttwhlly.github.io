const total = 63;
const onboarded = 12;

export default function RolloutGrid() {
  const squares = Array.from({ length: total }, (_, i) => i < onboarded);

  return (
    <figure className="my-8">
      <div className="border border-gray-200 dark:border-neutral-800 rounded-2xl overflow-hidden">
        <div className="bg-gray-50 dark:bg-neutral-900/60 border-b border-gray-200 dark:border-neutral-800 px-6 py-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 dark:text-neutral-400">
            Rollout state — 63 repositories
          </span>
        </div>
        <div className="px-6 py-6">
          <div className="grid grid-cols-9 sm:grid-cols-12 gap-1.5 max-w-md mx-auto">
            {squares.map((filled, i) => (
              <span
                key={i}
                className={`aspect-square rounded-[3px] ${
                  filled
                    ? 'bg-[#7dd3fc]'
                    : 'border border-gray-200 dark:border-neutral-700 bg-transparent'
                }`}
              />
            ))}
          </div>
          <div className="flex justify-center gap-6 mt-5 text-[10px] font-mono text-gray-500 dark:text-neutral-400">
            <div className="flex items-center gap-1.5">
              <span className="inline-block w-2.5 h-2.5 rounded-[2px] bg-[#7dd3fc]" />
              12 onboarded, advisory
            </div>
            <div className="flex items-center gap-1.5">
              <span className="inline-block w-2.5 h-2.5 rounded-[2px] border border-gray-300 dark:border-neutral-600" />
              51 out of scope
            </div>
          </div>
        </div>
      </div>
      <figcaption className="text-xs text-gray-400 dark:text-neutral-500 text-center mt-3 font-mono italic">
        Every application repository carrying the configuration file the system needs is already
        onboarded. The rest simply haven't adopted one yet.
      </figcaption>
    </figure>
  );
}
